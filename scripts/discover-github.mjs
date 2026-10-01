import fs from "node:fs/promises";
import matter from "gray-matter";

const token = process.env.GITHUB_TOKEN;
if (!token) {
  console.error("GITHUB_TOKEN is required.");
  process.exit(1);
}

const projectsDir = new URL("../content/projects/", import.meta.url);
const pendingDir = new URL("../discovery/pending/", import.meta.url);
const stateFile = new URL("../discovery/state.json", import.meta.url);
const sourcesFile = new URL("../config/discovery-sources.json", import.meta.url);
await fs.mkdir(pendingDir, { recursive: true });

const headers = {
  Accept: "application/vnd.github+json",
  Authorization: `Bearer ${token}`,
  "X-GitHub-Api-Version": "2022-11-28",
  "User-Agent": "PS2SP-discovery"
};

const maxApiRequests = Math.max(1, Number.parseInt(process.env.MAX_DISCOVERY_API_REQUESTS ?? "350", 10));
const coreReserve = Math.max(0, Number.parseInt(process.env.GITHUB_CORE_RATE_LIMIT_RESERVE ?? "120", 10));
const searchReserve = Math.max(0, Number.parseInt(process.env.GITHUB_SEARCH_RATE_LIMIT_RESERVE ?? "2", 10));
const searchDelayMs = Math.max(0, Number.parseInt(process.env.GITHUB_SEARCH_DELAY_MS ?? "2100", 10));
const incrementalPages = Math.max(1, Number.parseInt(process.env.INCREMENTAL_SEARCH_PAGES ?? "2", 10));
const bootstrapPages = Math.max(1, Number.parseInt(process.env.BOOTSTRAP_SEARCH_PAGES ?? "3", 10));
const bootstrapMonthsPerRun = Math.max(1, Number.parseInt(process.env.BOOTSTRAP_MONTHS_PER_RUN ?? "6", 10));
const recheckPendingLimit = Math.max(0, Number.parseInt(process.env.RECHECK_PENDING_LIMIT ?? "20", 10));
const ownerPageLimit = Math.max(1, Number.parseInt(process.env.OWNER_PAGE_LIMIT ?? "5", 10));
const forkNetworkRootsPerRun = Math.max(1, Number.parseInt(process.env.FORK_NETWORK_ROOTS_PER_RUN ?? "30", 10));
const forkNetworkPagesPerRoot = Math.max(1, Number.parseInt(process.env.FORK_NETWORK_PAGES_PER_ROOT ?? "5", 10));
const discoveryActivityDays = Math.max(1, Number.parseInt(process.env.DISCOVERY_ACTIVITY_DAYS ?? "180", 10));
const activityCutoff = Date.now() - discoveryActivityDays * 24 * 60 * 60 * 1000;
const runStartedAt = new Date().toISOString();

let requestCount = 0;
let searchRequestCount = 0;
let stoppedForRateLimit = false;
let lastSearchAt = 0;
let published = 0;
let queued = 0;
let ignored = 0;
let rechecked = 0;

class DiscoveryBudgetStop extends Error {
  constructor(message) {
    super(message);
    this.name = "DiscoveryBudgetStop";
  }
}

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function readJson(url, fallback) {
  try {
    return JSON.parse(await fs.readFile(url, "utf8"));
  } catch (error) {
    if (error?.code === "ENOENT") return fallback;
    throw error;
  }
}

function currentMonth() {
  return new Date().toISOString().slice(0, 7);
}

function previousMonth(value) {
  const [year, month] = value.split("-").map(Number);
  const date = new Date(Date.UTC(year, month - 2, 1));
  return date.toISOString().slice(0, 7);
}

function monthWindow(value) {
  const [year, month] = value.split("-").map(Number);
  const start = `${value}-01`;
  const lastDay = new Date(Date.UTC(year, month, 0)).getUTCDate();
  const end = `${value}-${String(lastDay).padStart(2, "0")}`;
  return { start, end };
}

function isBeforeBootstrapFloor(value) {
  return value < "2000-01";
}

function rateReserve(resource) {
  return resource === "search" ? searchReserve : coreReserve;
}

async function github(endpoint) {
  if (requestCount >= maxApiRequests) {
    throw new DiscoveryBudgetStop(`Discovery request budget reached (${maxApiRequests}); progress has been preserved for a later run.`);
  }

  const isSearch = endpoint.startsWith("/search/");
  if (isSearch && searchDelayMs > 0) {
    const wait = searchDelayMs - (Date.now() - lastSearchAt);
    if (wait > 0) await sleep(wait);
  }

  requestCount++;
  if (isSearch) {
    searchRequestCount++;
    lastSearchAt = Date.now();
  }

  const response = await fetch(`https://api.github.com${endpoint}`, { headers });
  const resource = response.headers.get("x-ratelimit-resource") ?? (isSearch ? "search" : "core");
  const remainingRaw = response.headers.get("x-ratelimit-remaining");
  const remaining = remainingRaw == null ? null : Number.parseInt(remainingRaw, 10);
  const resetRaw = response.headers.get("x-ratelimit-reset");

  if (response.status === 404) return null;

  if (response.status === 422) {
    console.warn(`::warning::GitHub rejected discovery query: ${endpoint}`);
    return null;
  }

  if (response.status === 403 || response.status === 429) {
    const body = await response.clone().text();
    if (response.status === 429 || remaining === 0 || /rate limit|secondary rate/i.test(body)) {
      const reset = resetRaw ? new Date(Number(resetRaw) * 1000).toISOString() : "a later GitHub window";
      throw new DiscoveryBudgetStop(`GitHub ${resource} API throttled discovery after ${requestCount} requests; reset: ${reset}.`);
    }
  }

  if (!response.ok) {
    throw new Error(`GitHub API ${response.status}: ${await response.text()}`);
  }

  if (remaining != null && remaining <= rateReserve(resource)) {
    throw new DiscoveryBudgetStop(`Stopping discovery with ${remaining} GitHub ${resource} requests remaining (reserve: ${rateReserve(resource)}).`);
  }

  return response.json();
}

const defaultSources = {
  trustedOwners: [
    { login: "ps2dev", type: "Organization", publishByDefault: true },
    { login: "ps2homebrew", type: "Organization", publishByDefault: true }
  ],
  queries: [
    "topic:ps2-homebrew",
    "topic:playstation-2",
    "topic:playstation2",
    "topic:ps2dev",
    "topic:ps2",
    "\"PlayStation 2\" in:name,description,readme",
    "ps2sdk in:name,description,readme",
    "\"PS2 homebrew\" in:name,description,readme"
  ],
  incrementalOnlyQueries: [
    "ps2 in:name,description",
    "\"ps2 port\" in:name,description,readme"
  ],
  starredUsers: [
    {
      login: "NathanNeurotic",
      ownerHints: [
        "ps2dev", "ps2homebrew", "ps2-mmce", "ps2wiki", "ps2store", "israpps", "GDX-X",
        "dnunezx", "rickgaiser", "bucanero", "CosmicScale", "Luden02", "pcm720", "ps2max32",
        "Gageformer", "saildot4k", "oMrRexD", "Docmine17", "L10N37", "Yuramash", "hitchhikr",
        "CTurt", "PCSX2", "ninjadynamics", "elmariolo", "gdomingues", "alex-free",
        "coffeedevsolutions", "johnson-cooper", "4gordi", "IcySon55"
      ]
    }
  ]
};

const sources = await readJson(sourcesFile, defaultSources);
const trustedOwners = new Map((sources.trustedOwners ?? []).map((owner) => [owner.login.toLowerCase(), owner]));
const baseQueries = sources.queries ?? defaultSources.queries;
const incrementalOnlyQueries = sources.incrementalOnlyQueries ?? defaultSources.incrementalOnlyQueries;
const starredUsers = sources.starredUsers ?? defaultSources.starredUsers ?? [];

const state = await readJson(stateFile, {
  version: 1,
  bootstrap: { nextMonth: currentMonth(), complete: false },
  incremental: { watermark: null },
  starred: { users: {} },
  forks: { queue: [], scannedRepositories: [] },
  trustedOwnersSeeded: false
});
state.version = 2;
state.bootstrap ??= { nextMonth: currentMonth(), complete: false };
state.incremental ??= { watermark: null };
state.starred ??= { users: {} };
state.starred.users ??= {};
state.forks ??= { queue: [], scannedRepositories: [] };
state.forks.queue ??= [];
state.forks.scannedRepositories ??= [];
if (!state.bootstrap.nextMonth) state.bootstrap.nextMonth = currentMonth();

const publishedNames = new Set();
const publishedIds = new Set();
const knownProjects = [];
const projectFiles = (await fs.readdir(projectsDir)).filter((name) => name.endsWith(".md"));
for (const name of projectFiles) {
  const raw = await fs.readFile(new URL(name, projectsDir), "utf8");
  const data = matter(raw).data;
  if (data?.source?.provider !== "github" || !data.source.repository) continue;
  publishedNames.add(data.source.repository.toLowerCase());
  if (data.source.repositoryId) publishedIds.add(String(data.source.repositoryId));
  knownProjects.push({ repository: data.source.repository, categories: data.categories ?? ["uncategorized"], tags: data.tags ?? [], features: data.features ?? [] });
}

const pendingById = new Map();
const pendingByName = new Map();
const pendingFiles = (await fs.readdir(pendingDir)).filter((name) => name.endsWith(".json"));
for (const name of pendingFiles) {
  try {
    const record = JSON.parse(await fs.readFile(new URL(name, pendingDir), "utf8"));
    record.__file = name;
    if (record.repositoryId) pendingById.set(String(record.repositoryId), record);
    if (record.repository) pendingByName.set(record.repository.toLowerCase(), record);
  } catch (error) {
    console.warn(`::warning::Could not parse pending candidate ${name}: ${error.message}`);
  }
}

const processed = new Set();

function slugify(value) {
  return String(value).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

function hasPs2Token(text) {
  return /(^|[^a-z0-9])ps2([^a-z0-9]|$)/i.test(text ?? "") || /playstation\s*2/i.test(text ?? "");
}

function isRecent(dateValue) {
  const time = Date.parse(dateValue ?? "");
  return Number.isFinite(time) && time >= activityCutoff;
}

function latestPublishedRelease(releases) {
  if (!Array.isArray(releases)) return null;
  return releases.find((release) => !release.draft && release.published_at) ?? null;
}

function latestStableRelease(releases) {
  if (!Array.isArray(releases)) return null;
  return releases.find((release) => !release.draft && !release.prerelease && release.published_at) ?? null;
}

function explicitRepositorySignal(repo) {
  const topics = repo?.topics ?? [];
  return hasPs2Token(repo?.name) || hasPs2Token(repo?.description) || topics.some((topic) => ["ps2-homebrew", "playstation-2", "playstation2", "ps2dev", "ps2"].includes(topic));
}

function starredRepositorySignal(repo, ownerHints = []) {
  const owner = repo?.owner?.login?.toLowerCase?.() ?? "";
  const hintedOwners = new Set(ownerHints.map((value) => String(value).toLowerCase()));
  if (hintedOwners.has(owner) || explicitRepositorySignal(repo)) return true;

  const text = `${repo?.name ?? ""} ${repo?.description ?? ""}`;
  return /(?:\bopl\b|open[- ]ps2|wlaunchelf|ulaunchelf|freemcboot|\bfmcb\b|ps2sdk|ps2toolchain|ps2link|ps2netfs|neutrino|nhddl|popstarter|\bpops\b|mmce|sd2psx|hdd.?osd|osdsys|\bapa\b|\bpfs\b|\bhdl\b|kelf|udpbd|udpfs|gskit|tim2|psbbn|dkwdrv|mechacon|pcsx2)/i.test(text);
}

function forkSpecificPs2Signal(repo, release) {
  const topics = repo?.topics ?? [];
  return hasPs2Token(repo?.name) ||
    topics.some((topic) => ["ps2-homebrew", "playstation-2", "playstation2", "ps2dev", "ps2"].includes(topic)) ||
    hasPs2Token(release?.name) ||
    hasPs2Token(release?.tag_name) ||
    (release?.assets ?? []).some((asset) => hasPs2Token(asset.name));
}

function maturityState(repo, readmeText, releases) {
  const stable = latestStableRelease(releases);
  const published = latestPublishedRelease(releases);
  const text = `${repo?.description ?? ""}\n${(readmeText ?? "").slice(0, 5000)}`;
  const historicalSignal = /\b(abandoned|deprecated|unmaintained|discontinued|no longer maintained)\b/i.test(text);
  const wipSignal = /\b(work\s+in\s+progress|wip|unfinished|incomplete|prototype|proof\s+of\s+concept|experimental|pre[- ]alpha)\b/i.test(text);

  if (repo?.archived) return { state: "archived", stable, published };
  if (historicalSignal) return { state: "historical-or-discontinued", stable, published };
  if (stable) return { state: isRecent(repo?.pushed_at) ? "released-active" : "released-legacy", stable, published };
  if (published) return { state: "prerelease-only", stable: null, published };
  if (isRecent(repo?.pushed_at)) return { state: wipSignal ? "active-wip" : "active-unreleased", stable: null, published: null };
  return { state: "dormant-unreleased", stable: null, published: null };
}

function initialScore(repo, trustedOwner) {
  const topics = repo?.topics ?? [];
  let score = trustedOwner ? 95 : 0;
  if (topics.includes("ps2-homebrew")) score += 50;
  if (topics.includes("playstation-2") || topics.includes("playstation2") || topics.includes("ps2dev")) score += 45;
  if (topics.includes("ps2")) score += 25;
  if (hasPs2Token(repo?.name)) score += 50;
  if (hasPs2Token(repo?.description)) score += 40;
  if (isRecent(repo?.pushed_at)) score += 5;
  return Math.min(score, 100);
}

function scoreRepository(repo, readmeText, release, trustedOwner, forkStatus) {
  let score = initialScore(repo, trustedOwner);
  const evidence = [];
  const topics = repo?.topics ?? [];

  if (trustedOwner) evidence.push(`trusted PS2 source owner: ${repo.owner.login}`);
  if (topics.includes("ps2-homebrew")) evidence.push("ps2-homebrew topic");
  if (topics.some((topic) => ["playstation-2", "playstation2", "ps2dev", "ps2"].includes(topic))) evidence.push("PS2-specific topic");
  if (hasPs2Token(repo?.name)) evidence.push("repository name explicitly identifies PS2");
  if (hasPs2Token(repo?.description)) evidence.push("repository description explicitly identifies PS2");

  if (/playstation\s*2/i.test(readmeText)) {
    score += 30;
    evidence.push("README explicitly mentions PlayStation 2");
  }
  if (/\bps2sdk\b|\$PS2DEV|ee-g(?:cc|\+\+)|\bgskit\b|\bps2build\b/i.test(readmeText)) {
    score += 30;
    evidence.push("README contains PS2 development/toolchain evidence");
  }
  if (/\bps2\s+homebrew\b|homebrew\s+(?:for|on)\s+(?:the\s+)?(?:sony\s+)?playstation\s*2/i.test(readmeText)) {
    score += 20;
    evidence.push("README identifies PS2 homebrew");
  }
  if (release) {
    score += 10;
    evidence.push("published GitHub release present");
    if (hasPs2Token(release.name) || hasPs2Token(release.tag_name) || (release.assets ?? []).some((asset) => hasPs2Token(asset.name))) {
      score += 20;
      evidence.push("release metadata identifies PS2");
    }
    if ((release.assets ?? []).some((asset) => /\.elf$/i.test(asset.name))) {
      score += 15;
      evidence.push("release contains a PS2-style ELF asset");
    }
  }
  if (repo?.fork) {
    score += 10;
    evidence.push("GitHub fork of another repository");
  }
  if (forkStatus?.parentProject) {
    score += 25;
    evidence.push(`fork lineage traces to indexed PS2 project: ${forkStatus.source ?? forkStatus.parent}`);
  }
  if ((forkStatus?.aheadBy ?? 0) > 0) {
    score += 10;
    evidence.push(`fork is ${forkStatus.aheadBy} commit(s) ahead of its parent`);
  }

  return { score: Math.min(score, 100), evidence };
}

function catalogProjectForFork(repo) {
  const lineage = new Set([repo?.parent?.full_name, repo?.source?.full_name].filter(Boolean).map((value) => value.toLowerCase()));
  return knownProjects.find((project) => lineage.has(project.repository.toLowerCase())) ?? null;
}

async function verifyFork(repo) {
  if (!repo?.fork) return null;

  // Fork ancestry is catalog metadata, not an eligibility test. Do not spend
  // API budget comparing branches: stale, equal, behind, ahead, archived, and
  // unreleased forks are all valid entries when they belong to a PS2 network.
  return {
    parentProject: catalogProjectForFork(repo),
    parent: repo.parent?.full_name ?? null,
    source: repo.source?.full_name ?? repo.parent?.full_name ?? null,
    aheadBy: null
  };
}

async function removePendingFor(repo) {
  const record = pendingById.get(String(repo.id)) ?? pendingByName.get(repo.full_name.toLowerCase());
  if (!record?.__file) return;
  try {
    await fs.unlink(new URL(record.__file, pendingDir));
  } catch (error) {
    if (error?.code !== "ENOENT") throw error;
  }
  pendingById.delete(String(repo.id));
  pendingByName.delete(repo.full_name.toLowerCase());
}

async function availableProjectSlug(repo) {
  const base = slugify(repo.name);
  const preferred = repo.fork ? slugify(`${repo.name}-${repo.owner.login}`) : base;
  try {
    await fs.access(new URL(`${preferred}.md`, projectsDir));
    return slugify(`${repo.name}-${repo.owner.login}`);
  } catch {
    return preferred;
  }
}

async function publishProject(repo, releases, maturity, score, evidence, origin, forkStatus) {
  const slug = await availableProjectSlug(repo);
  const target = new URL(`${slug}.md`, projectsDir);
  const parent = forkStatus?.parentProject ?? null;
  const release = maturity.stable ?? maturity.published ?? latestPublishedRelease(releases);
  const project = {
    name: repo.name,
    slug,
    summary: repo.description || "PlayStation 2 software project discovered by PS2SP.",
    categories: parent?.categories ?? ["uncategorized"],
    tags: [...new Set([...(parent?.tags ?? []), ...(repo.fork ? ["fork"] : []), "auto-discovered"])],
    features: parent?.features ?? [],
    authors: [],
    license: repo.license?.spdx_id && repo.license.spdx_id !== "NOASSERTION" ? repo.license.spdx_id : null,
    homepage: repo.homepage || null,
    source: { provider: "github", repository: repo.full_name, repositoryId: String(repo.id) },
    repository: {
      archived: Boolean(repo.archived),
      defaultBranch: repo.default_branch ?? null,
      stars: repo.stargazers_count ?? 0,
      forks: repo.forks_count ?? 0,
      lastCommit: repo.pushed_at ?? null
    },
    latestRelease: release ? {
      tag: release.tag_name ?? null,
      name: release.name ?? null,
      publishedAt: release.published_at ?? release.created_at ?? null,
      url: release.html_url ?? null
    } : { tag: null, name: null, publishedAt: null, url: null },
    activity: { lastSynchronized: runStartedAt },
    automation: { sync: true },
    discovery: { method: origin, confidence: score, evidence, maturity: maturity.state },
    verified: false,
    featured: false
  };
  if (forkStatus) {
    project.relationships = { forkOf: forkStatus.parent, source: forkStatus.source };
  }
  const body = "\nAutomatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.\n";
  await fs.writeFile(target, matter.stringify(body, project), "utf8");
  await removePendingFor(repo);
  publishedNames.add(repo.full_name.toLowerCase());
  publishedIds.add(String(repo.id));
  knownProjects.push({ repository: repo.full_name, categories: project.categories, tags: project.tags, features: project.features });
  published++;
  console.log(`auto-published ${repo.full_name} (${score}; ${maturity.state})`);
}

async function queueProject(repo, maturity, score, evidence, origin, forkStatus) {
  const slug = slugify(repo.fork ? `${repo.name}-${repo.owner.login}` : repo.name);
  const existing = pendingById.get(String(repo.id)) ?? pendingByName.get(repo.full_name.toLowerCase());
  const fileName = existing?.__file ?? `${slug}.json`;
  const record = {
    repository: repo.full_name,
    repositoryId: String(repo.id),
    url: repo.html_url,
    description: repo.description,
    score,
    evidence,
    origin,
    maturity: maturity.state,
    fork: forkStatus ? { parent: forkStatus.parent, source: forkStatus.source, aheadBy: forkStatus.aheadBy } : repo.fork ? { parent: repo.parent?.full_name ?? null, source: repo.source?.full_name ?? null } : null,
    discoveredAt: existing?.discoveredAt ?? runStartedAt,
    checkedAt: runStartedAt
  };
  record.__file = fileName;
  await fs.writeFile(new URL(fileName, pendingDir), JSON.stringify(Object.fromEntries(Object.entries(record).filter(([key]) => key !== "__file")), null, 2) + "\n", "utf8");
  pendingById.set(String(repo.id), record);
  pendingByName.set(repo.full_name.toLowerCase(), record);
  queued++;
  console.log(`queued ${repo.full_name} (${score}; ${maturity.state})`);
}

async function processCandidate(candidate, origin, { force = false, trusted = false, starred = false } = {}) {
  if (!candidate?.full_name || !candidate?.id) return;
  const key = String(candidate.id);
  if (!force && processed.has(key)) return;
  processed.add(key);
  if (publishedIds.has(key) || publishedNames.has(candidate.full_name.toLowerCase())) return;

  const trustedConfig = trustedOwners.get(candidate.owner?.login?.toLowerCase?.() ?? "");
  const trustedOwner = trusted || Boolean(trustedConfig);
  let repo = candidate;
  if (repo.fork || !Array.isArray(repo.topics) || repo.license === undefined) {
    repo = (await github(`/repos/${candidate.full_name}`)) ?? candidate;
  }
  if (!repo?.full_name) return;

  const catalogForkLineage = repo.fork ? catalogProjectForFork(repo) : null;
  let score = initialScore(repo, trustedOwner);
  let readmeText = "";
  if (score < 95 || !explicitRepositorySignal(repo)) {
    const readme = await github(`/repos/${repo.full_name}/readme`);
    if (readme?.content) readmeText = Buffer.from(readme.content.replace(/\n/g, ""), "base64").toString("utf8");
  }

  if (!trustedOwner && !catalogForkLineage && score < 45 && !hasPs2Token(readmeText) && !/\bps2sdk\b|\$PS2DEV|ee-g(?:cc|\+\+)/i.test(readmeText)) {
    ignored++;
    return;
  }

  const releases = (await github(`/repos/${repo.full_name}/releases?per_page=10`)) ?? [];
  const maturity = maturityState(repo, readmeText, releases);
  const release = maturity.stable ?? maturity.published;
  let forkStatus = null;
  if (repo.fork) forkStatus = await verifyFork(repo);

  const scored = scoreRepository(repo, readmeText, release, trustedOwner, forkStatus);
  score = scored.score;
  const evidence = scored.evidence;
  const publishByDefault = Boolean(trustedConfig?.publishByDefault);
  const lineageIsIndexedPs2 = Boolean(forkStatus?.parentProject);
  const strongIndependentEvidence =
    trustedOwner ||
    explicitRepositorySignal(repo) ||
    lineageIsIndexedPs2 ||
    evidence.some((item) => /README|release metadata|fork lineage/i.test(item));

  // Forks are first-class catalog entries. A fork may be stale, behind, have no
  // release, or exist several generations down a fork tree; none of those facts
  // make it irrelevant. If its lineage reaches an indexed PS2 project, publish it
  // on lineage evidence alone and let normal activity sorting push stale forks back.
  if (lineageIsIndexedPs2) {
    score = Math.max(score, 95);
  }

  if (score >= 95 && (strongIndependentEvidence || publishByDefault || starred)) {
    await publishProject(repo, releases, maturity, score, evidence, origin, forkStatus);
    return;
  }

  if (score >= 70) {
    await queueProject(repo, maturity, score, evidence, origin, forkStatus);
    return;
  }

  ignored++;
}

async function searchRepositories(query, pages, origin) {
  const results = [];
  const queryWithForks = /(?:^|\s)fork:/.test(query) ? query : `${query} fork:true`;
  for (let page = 1; page <= pages; page++) {
    const response = await github(`/search/repositories?q=${encodeURIComponent(queryWithForks)}&sort=updated&order=desc&per_page=100&page=${page}`);
    const items = response?.items ?? [];
    for (const repo of items) {
      if (publishedIds.has(String(repo.id)) || publishedNames.has(repo.full_name.toLowerCase())) continue;
      if (pendingById.has(String(repo.id)) || pendingByName.has(repo.full_name.toLowerCase())) continue;
      results.push({ repo, origin });
    }
    if (items.length < 100) break;
  }
  return results;
}

async function seedForkNetworks() {
  const queue = [...state.forks.queue];
  const queued = new Set(queue.map((value) => String(value).toLowerCase()));
  const scanned = new Set(state.forks.scannedRepositories.map((value) => String(value).toLowerCase()));

  // Every published GitHub PS2 project becomes a fork-network seed exactly once.
  // Newly discovered forks are queued too, which explicitly covers forks of forks.
  for (const project of knownProjects) {
    const repository = project.repository;
    const key = repository.toLowerCase();
    if (!scanned.has(key) && !queued.has(key)) {
      queue.push(repository);
      queued.add(key);
    }
  }

  let rootsProcessed = 0;
  while (queue.length > 0 && rootsProcessed < forkNetworkRootsPerRun) {
    const root = queue.shift();
    const rootKey = String(root).toLowerCase();
    queued.delete(rootKey);
    if (scanned.has(rootKey)) continue;

    rootsProcessed++;
    let discoveredFromRoot = 0;

    for (let page = 1; page <= forkNetworkPagesPerRoot; page++) {
      const forks = await github(`/repos/${root}/forks?sort=newest&per_page=100&page=${page}`);
      if (!Array.isArray(forks)) break;

      for (const fork of forks) {
        discoveredFromRoot++;

        // Process every fork independently even if it is stale or has no release.
        await processCandidate(fork, `fork-network:${root}`, { trusted: false });

        // Traverse the full tree rather than only first-generation forks.
        const forkName = fork.full_name;
        const forkKey = forkName?.toLowerCase?.();
        if (forkName && forkKey && !scanned.has(forkKey) && !queued.has(forkKey)) {
          queue.push(forkName);
          queued.add(forkKey);
        }
      }

      if (forks.length < 100) break;
    }

    scanned.add(rootKey);
    state.forks.queue = queue;
    state.forks.scannedRepositories = [...scanned].slice(-20000);
    console.log(`fork network ${root}: ${discoveredFromRoot} fork(s) discovered`);
  }

  state.forks.queue = queue;
  state.forks.scannedRepositories = [...scanned].slice(-20000);
  console.log(`fork discovery: ${rootsProcessed} root(s) scanned, ${queue.length} queued for later runs`);
}

async function seedTrustedOwners() {
  if (state.trustedOwnersSeeded) return;
  for (const owner of sources.trustedOwners ?? []) {
    for (let page = 1; page <= ownerPageLimit; page++) {
      const endpoint = owner.type === "Organization"
        ? `/orgs/${owner.login}/repos?type=public&sort=full_name&per_page=100&page=${page}`
        : `/users/${owner.login}/repos?type=public&sort=full_name&per_page=100&page=${page}`;
      const repos = await github(endpoint);
      if (!Array.isArray(repos)) break;
      for (const repo of repos) await processCandidate(repo, `trusted-owner:${owner.login}`, { trusted: true });
      if (repos.length < 100) break;
    }
  }
  state.trustedOwnersSeeded = true;
}

async function seedStarredUsers() {
  for (const source of starredUsers) {
    const login = source?.login;
    if (!login) continue;

    const curatedRepositories = [...new Set((source.curatedRepositories ?? []).map((value) => String(value).trim()).filter(Boolean))];
    for (const repository of curatedRepositories) {
      const normalized = repository.toLowerCase();
      if (publishedNames.has(normalized)) continue;

      const parts = repository.split("/");
      if (parts.length !== 2 || !parts[0] || !parts[1]) {
        console.warn("::warning::Skipping invalid curated starred repository: " + repository);
        continue;
      }

      const repo = await github("/repos/" + encodeURIComponent(parts[0]) + "/" + encodeURIComponent(parts[1]));
      if (!repo) {
        console.warn("::warning::Curated starred repository is unavailable: " + repository);
        continue;
      }

      await processCandidate(repo, "starred-curated:" + login, { starred: true, trusted: true });
    }

    const key = login.toLowerCase();
    const record = state.starred.users[key] ?? { seenRepositoryIds: [], lastScannedAt: null };
    const seen = new Set((record.seenRepositoryIds ?? []).map(String));
    let scanned = 0;
    let newStars = 0;
    let relevant = 0;

    for (let page = 1; page <= 20; page++) {
      const repos = await github(`/users/${encodeURIComponent(login)}/starred?sort=created&direction=desc&per_page=100&page=${page}`);
      if (!Array.isArray(repos) || repos.length === 0) break;

      for (const repo of repos) {
        const id = String(repo.id);
        scanned++;
        if (seen.has(id)) continue;

        newStars++;
        if (publishedIds.has(id) || publishedNames.has(repo.full_name.toLowerCase()) ||
            pendingById.has(id) || pendingByName.has(repo.full_name.toLowerCase())) {
          seen.add(id);
          continue;
        }

        if (starredRepositorySignal(repo, source.ownerHints ?? [])) {
          relevant++;
          await processCandidate(repo, `starred:${login}`, { starred: true });
        }

        // Mark only after the candidate completed. If rate limiting interrupts
        // processing, the unfinished repository is retried on the next run.
        seen.add(id);
        record.seenRepositoryIds = [...seen].slice(-5000);
        state.starred.users[key] = record;
      }

      if (repos.length < 100) break;
    }

    record.seenRepositoryIds = [...seen].slice(-5000);
    record.lastScannedAt = runStartedAt;
    state.starred.users[key] = record;
    console.log(`starred seed ${login}: ${scanned} scanned, ${newStars} new, ${relevant} PS2 candidates`);
  }
}

async function recheckPending() {
  if (recheckPendingLimit <= 0) return;
  const records = [...pendingById.values()]
    .sort((a, b) => Date.parse(a.checkedAt ?? a.discoveredAt ?? 0) - Date.parse(b.checkedAt ?? b.discoveredAt ?? 0))
    .slice(0, recheckPendingLimit);
  for (const record of records) {
    if (!record.repository) continue;
    const repo = await github(`/repos/${record.repository}`);
    if (!repo) continue;
    rechecked++;
    await processCandidate(repo, "pending-recheck", { force: true });
  }
}

async function incrementalDiscovery() {
  const watermark = state.incremental.watermark;
  const fallback = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString();
  const since = new Date(Math.min(Date.parse(watermark ?? fallback), Date.now() - 24 * 60 * 60 * 1000)).toISOString().slice(0, 10);
  const candidates = new Map();
  for (const base of [...baseQueries, ...incrementalOnlyQueries]) {
    const query = `${base} pushed:>=${since}`;
    for (const item of await searchRepositories(query, incrementalPages, `incremental:${base}`)) {
      candidates.set(String(item.repo.id), item);
    }
  }
  for (const { repo, origin } of candidates.values()) await processCandidate(repo, origin);
  state.incremental.watermark = runStartedAt;
}

async function bootstrapDiscovery() {
  if (state.bootstrap.complete) return;
  for (let i = 0; i < bootstrapMonthsPerRun && !state.bootstrap.complete; i++) {
    const month = state.bootstrap.nextMonth;
    if (isBeforeBootstrapFloor(month)) {
      state.bootstrap.complete = true;
      break;
    }
    const { start, end } = monthWindow(month);
    const candidates = new Map();
    for (const base of baseQueries) {
      const query = `${base} created:${start}..${end}`;
      for (const item of await searchRepositories(query, bootstrapPages, `bootstrap:${month}:${base}`)) {
        candidates.set(String(item.repo.id), item);
      }
    }
    for (const { repo, origin } of candidates.values()) await processCandidate(repo, origin);
    state.bootstrap.nextMonth = previousMonth(month);
    console.log(`bootstrap month ${month} complete; next ${state.bootstrap.nextMonth}`);
  }
  if (isBeforeBootstrapFloor(state.bootstrap.nextMonth)) state.bootstrap.complete = true;
}

try {
  await seedTrustedOwners();
  await seedStarredUsers();
  await seedForkNetworks();
  await recheckPending();
  await incrementalDiscovery();
  await bootstrapDiscovery();
} catch (error) {
  if (error instanceof DiscoveryBudgetStop) {
    stoppedForRateLimit = true;
    console.warn(`::warning::${error.message}`);
  } else {
    throw error;
  }
} finally {
  state.lastRun = {
    startedAt: runStartedAt,
    finishedAt: new Date().toISOString(),
    requests: requestCount,
    searchRequests: searchRequestCount,
    published,
    queued,
    ignored,
    rechecked,
    stoppedForRateLimit
  };
  await fs.writeFile(stateFile, JSON.stringify(state, null, 2) + "\n", "utf8");
}

console.log(`Discovery complete: ${published} published, ${queued} queued/updated, ${rechecked} pending rechecked, ${ignored} ignored, ${requestCount} GitHub requests (${searchRequestCount} search)${stoppedForRateLimit ? "; stopped early and saved progress" : ""}. Fork queue ${state.forks.queue.length}. Bootstrap ${state.bootstrap.complete ? "complete" : `next month ${state.bootstrap.nextMonth}`}.`);
