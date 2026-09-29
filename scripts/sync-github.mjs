import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";

const projectsDir = new URL("../content/projects/", import.meta.url);
const token = process.env.GITHUB_TOKEN;

if (!token) {
  console.error("GITHUB_TOKEN is required.");
  process.exit(1);
}

const headers = {
  Accept: "application/vnd.github+json",
  Authorization: `Bearer ${token}`,
  "X-GitHub-Api-Version": "2022-11-28",
  "User-Agent": "PS2SP-catalog-sync"
};

const shardCount = Math.max(1, Number.parseInt(process.env.SYNC_SHARDS ?? "24", 10));
const explicitShard = process.env.SYNC_SHARD == null ? null : Number.parseInt(process.env.SYNC_SHARD, 10);
const syncAll = process.env.SYNC_ALL === "1" || process.env.SYNC_ALL === "true";
const activeShard = syncAll ? null : ((Number.isInteger(explicitShard) ? explicitShard : new Date().getUTCHours()) % shardCount + shardCount) % shardCount;
const maxRequests = Math.max(1, Number.parseInt(process.env.MAX_SYNC_API_REQUESTS ?? "800", 10));
const reserve = Math.max(0, Number.parseInt(process.env.GITHUB_CORE_RATE_LIMIT_RESERVE ?? "120", 10));

let requestCount = 0;
let notModifiedCount = 0;
let rateLimited = false;

class SyncBudgetStop extends Error {
  constructor(message) {
    super(message);
    this.name = "SyncBudgetStop";
  }
}

function stableHash(input) {
  let hash = 2166136261;
  for (const char of String(input)) {
    hash ^= char.charCodeAt(0);
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0;
}

function projectShard(data) {
  const key = data?.source?.repositoryId || data?.source?.repository || data?.slug || data?.name || "unknown";
  return stableHash(key) % shardCount;
}

function same(a, b) {
  return JSON.stringify(a) === JSON.stringify(b);
}

async function github(endpoint, etag = null) {
  if (requestCount >= maxRequests) {
    throw new SyncBudgetStop(`Sync request budget reached (${maxRequests}); remaining projects will be checked on their next shard run.`);
  }

  const requestHeaders = { ...headers };
  if (etag) requestHeaders["If-None-Match"] = etag;

  requestCount++;
  const response = await fetch(`https://api.github.com${endpoint}`, { headers: requestHeaders });
  const remainingRaw = response.headers.get("x-ratelimit-remaining");
  const remaining = remainingRaw == null ? null : Number.parseInt(remainingRaw, 10);
  const resetRaw = response.headers.get("x-ratelimit-reset");
  const nextEtag = response.headers.get("etag") ?? etag ?? null;

  if (response.status === 304) {
    notModifiedCount++;
    return { status: 304, etag: nextEtag, data: null };
  }

  if (response.status === 404) return { status: 404, etag: nextEtag, data: null };

  if (response.status === 403 || response.status === 429) {
    const body = await response.clone().text();
    if (response.status === 429 || remaining === 0 || /rate limit|secondary rate/i.test(body)) {
      const reset = resetRaw ? new Date(Number(resetRaw) * 1000).toISOString() : "a later GitHub window";
      throw new SyncBudgetStop(`GitHub API throttled sync after ${requestCount} requests; reset: ${reset}.`);
    }
  }

  if (!response.ok) {
    throw new Error(`GitHub API ${response.status}: ${await response.text()}`);
  }

  if (remaining != null && remaining <= reserve) {
    throw new SyncBudgetStop(`Stopping sync with ${remaining} GitHub core requests remaining (reserve: ${reserve}).`);
  }

  return { status: response.status, etag: nextEtag, data: await response.json() };
}

function latestRelease(releases) {
  if (!Array.isArray(releases)) return null;
  return releases.find((item) => !item.draft && !item.prerelease) ?? releases.find((item) => !item.draft) ?? null;
}

const names = (await fs.readdir(projectsDir)).filter((name) => name.endsWith(".md"));
let checked = 0;
let changed = 0;
let unavailable = 0;
let skipped = 0;

for (const name of names) {
  const file = new URL(name, projectsDir);
  const input = await fs.readFile(file, "utf8");
  const parsed = matter(input);
  const data = parsed.data;

  if (data?.automation?.sync === false || data?.source?.provider !== "github" || !data.source.repository) {
    skipped++;
    continue;
  }

  if (activeShard != null && projectShard(data) !== activeShard) continue;

  try {
    checked++;
    const previous = structuredClone(data);
    data.automation ??= {};
    data.automation.github ??= {};

    const repoResult = await github(
      `/repos/${data.source.repository}`,
      data.automation.github.repoEtag ?? null
    );

    const releasesResult = await github(
      `/repos/${data.source.repository}/releases?per_page=5`,
      data.automation.github.releasesEtag ?? null
    );

    if (repoResult.status === 404) {
      unavailable++;
      console.warn(`${data.name}: upstream repository unavailable`);
      continue;
    }

    if (repoResult.etag) data.automation.github.repoEtag = repoResult.etag;
    if (releasesResult.etag) data.automation.github.releasesEtag = releasesResult.etag;

    if (repoResult.status !== 304 && repoResult.data) {
      const repo = repoResult.data;
      data.source.repositoryId = String(repo.id);
      data.source.repository = repo.full_name;
      data.repository = {
        archived: Boolean(repo.archived),
        defaultBranch: repo.default_branch ?? null,
        stars: repo.stargazers_count ?? 0,
        forks: repo.forks_count ?? 0,
        lastCommit: repo.pushed_at ?? null
      };
      if (!data.homepage && repo.homepage) data.homepage = repo.homepage;
      if (!data.license && repo.license?.spdx_id && repo.license.spdx_id !== "NOASSERTION") {
        data.license = repo.license.spdx_id;
      }
    }

    if (releasesResult.status !== 304) {
      const release = latestRelease(releasesResult.data ?? []);
      data.latestRelease = release
        ? {
            tag: release.tag_name ?? null,
            name: release.name ?? null,
            publishedAt: release.published_at ?? release.created_at ?? null,
            url: release.html_url ?? null
          }
        : { tag: null, name: null, publishedAt: null, url: null };
    }

    // Only touch the public project file when upstream state or the stored cache
    // validators actually changed. 304 checks therefore create no noisy commits.
    if (!same(previous, data)) {
      data.activity = {
        ...(data.activity ?? {}),
        lastSynchronized: new Date().toISOString()
      };
      await fs.writeFile(file, matter.stringify(parsed.content.trimStart(), data), "utf8");
      changed++;
      console.log(`updated ${path.basename(name)}`);
    }
  } catch (error) {
    if (error instanceof SyncBudgetStop) {
      rateLimited = true;
      console.warn(`::warning::${error.message}`);
      break;
    }
    console.error(`::warning::${data.name}: ${error.message}`);
  }
}

console.log(
  `Catalog sync complete: shard ${activeShard ?? "all"}/${shardCount}, ${checked} checked, ${notModifiedCount} conditional 304 responses, ${changed} changed, ${unavailable} unavailable, ${requestCount} GitHub requests${rateLimited ? " (stopped early to protect rate limit)" : ""}.`
);
