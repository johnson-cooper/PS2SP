import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const CONFIG_PATH = path.join(ROOT, "config", "external-git-sources.json");
const OUTPUT_PATH = path.join(ROOT, "data", "resources", "external-git-live.json");
const STATE_PATH = path.join(ROOT, "discovery", "external-git-state.json");

const MAX_REQUESTS = Math.max(1, Number.parseInt(process.env.MAX_EXTERNAL_GIT_REQUESTS ?? "260", 10));
const REPOS_PER_RUN = Math.max(1, Number.parseInt(process.env.EXTERNAL_GIT_REPOS_PER_RUN ?? "20", 10));
const BRANCH_PAGES_PER_REPO = Math.max(1, Number.parseInt(process.env.EXTERNAL_GIT_BRANCH_PAGES_PER_REPO ?? "2", 10));
const FORK_PAGES_PER_REPO = Math.max(1, Number.parseInt(process.env.EXTERNAL_GIT_FORK_PAGES_PER_REPO ?? "2", 10));
const TREES_PER_RUN = Math.max(1, Number.parseInt(process.env.EXTERNAL_GIT_TREES_PER_RUN ?? "80", 10));
const INTERNAL_PATHS_PER_BRANCH = Math.max(1, Number.parseInt(process.env.EXTERNAL_GIT_INTERNAL_PATHS_PER_BRANCH ?? "40", 10));
const USER_AGENT = "PS2SP-external-git/1.0 (+https://github.com/johnson-cooper/PS2SP)";

let requestCount = 0;
let treesScanned = 0;
let stoppedForBudget = false;

class BudgetStop extends Error {}

async function readJson(filePath, fallback) {
  try {
    return JSON.parse(await fs.readFile(filePath, "utf8"));
  } catch (error) {
    if (error?.code === "ENOENT") return fallback;
    throw error;
  }
}

async function fetchJson(url) {
  if (requestCount >= MAX_REQUESTS) {
    throw new BudgetStop(`External Git request budget reached (${MAX_REQUESTS}).`);
  }

  requestCount++;
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 30_000);

  try {
    const response = await fetch(url, {
      headers: {
        "User-Agent": USER_AGENT,
        "Accept": "application/json"
      },
      redirect: "follow",
      signal: controller.signal
    });

    if (response.status === 404) return null;
    if (!response.ok) throw new Error(`${response.status} ${response.statusText}: ${url}`);
    return response.json();
  } finally {
    clearTimeout(timeout);
  }
}

function keyFor(source, repository) {
  return `${source.apiBase}|${repository}`;
}

function canonicalUrl(value) {
  try {
    const url = new URL(value);
    url.hash = "";
    return url.toString().replace(/\/$/, "");
  } catch {
    return String(value).replace(/\/$/, "");
  }
}

function encodePath(value) {
  return String(value).split("/").map(encodeURIComponent).join("/");
}

function repoWebUrl(source, repository) {
  return `${source.webBase.replace(/\/$/, "")}/${repository}`;
}

function branchWebUrl(source, repository, branch) {
  return `${repoWebUrl(source, repository)}/src/branch/${encodePath(branch)}`;
}

function nestedWebUrl(source, repository, branch, targetPath) {
  return `${branchWebUrl(source, repository, branch)}/${encodePath(targetPath)}`;
}

function ensureGroup(groups, category, description) {
  let group = groups.find((entry) => entry.category === category);
  if (!group) {
    group = { category, description, links: [] };
    groups.push(group);
  }
  group.links ??= [];
  return group;
}

function upsert(group, link) {
  const key = canonicalUrl(link.url);
  const existing = group.links.find((item) => canonicalUrl(item.url) === key);
  if (existing) {
    existing.name = link.name;
    existing.keywords = [...new Set([...(existing.keywords ?? []), ...(link.keywords ?? [])])];
    return false;
  }
  group.links.push(link);
  return true;
}

const ignoredSegments = new Set([
  ".git", ".github", ".forgejo", "node_modules", "vendor", "vendors", "third_party",
  "third-party", "external", "externals", "deps", "dependencies", "build", "dist",
  "target", ".cache"
]);

const manifestNames = new Set([
  "readme.md", "readme", "cmakelists.txt", "makefile", "meson.build", "package.json",
  "cargo.toml", "pyproject.toml", "setup.py", "premake5.lua", "ps2.yaml"
]);

const strongDirectoryNames = /^(examples?|samples?|tools?|plugins?|modules?|drivers?|ports?|games?|apps?|demos?|loaders?|servers?|clients?|sdk|ee|iop|vu0|vu1|gs)$/i;
const ps2PathSignal = /(?:^|[-_.\/])(ps2|opl|fmcb|fhdb|popstarter|pops|neutrino|mmce|mx4sio|gskit|ps2sdk|ps2link|dev9|atad|pfs|apa|hdd|osdsys|kelf|mecha)(?:$|[-_.\/])/i;

function eligibleDirectory(dir) {
  if (!dir) return false;
  const parts = dir.split("/").filter(Boolean);
  if (parts.length > 7) return false;
  return !parts.some((part) => ignoredSegments.has(part.toLowerCase()));
}

function discoverNestedPaths(tree) {
  const candidates = new Map();
  const gitlinks = [];

  for (const item of tree ?? []) {
    const itemPath = String(item?.path ?? "");
    if (!itemPath) continue;

    if (item.type === "commit") {
      if (eligibleDirectory(itemPath)) gitlinks.push(itemPath);
      continue;
    }
    if (item.type !== "blob") continue;

    const parts = itemPath.split("/");
    const file = parts.at(-1)?.toLowerCase() ?? "";
    const dir = parts.slice(0, -1).join("/");
    if (!dir || !eligibleDirectory(dir) || !manifestNames.has(file)) continue;

    const dirParts = dir.split("/");
    let score = file.startsWith("readme") ? 3 : 5;
    if (dirParts.some((part) => strongDirectoryNames.test(part))) score += 4;
    if (ps2PathSignal.test(dir)) score += 6;

    candidates.set(dir, Math.max(candidates.get(dir) ?? 0, score));
  }

  for (const item of tree ?? []) {
    if (item?.type !== "tree") continue;
    const dir = String(item.path ?? "");
    if (!eligibleDirectory(dir)) continue;
    const parts = dir.split("/");
    const leaf = parts.at(-1) ?? "";
    if (parts.length <= 5 && strongDirectoryNames.test(leaf)) {
      candidates.set(dir, Math.max(candidates.get(dir) ?? 0, ps2PathSignal.test(dir) ? 8 : 4));
    }
  }

  return {
    directories: [...candidates.entries()]
      .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
      .slice(0, INTERNAL_PATHS_PER_BRANCH)
      .map(([dir]) => dir),
    gitlinks: [...new Set(gitlinks)].slice(0, INTERNAL_PATHS_PER_BRANCH)
  };
}

function sourceFromConfig(entry) {
  return {
    apiBase: String(entry.apiBase).replace(/\/$/, ""),
    webBase: String(entry.webBase).replace(/\/$/, ""),
    trustedPs2: Boolean(entry.trustedPs2),
    label: entry.name ?? entry.organization ?? entry.repository ?? entry.apiBase
  };
}

const config = await readJson(CONFIG_PATH, { forgejoOrganizations: [], forgejoRepositories: [] });
const state = await readJson(STATE_PATH, {
  version: 1,
  queue: [],
  branchHeads: {},
  branchPage: {},
  forkPage: {},
  lastRun: null
});
state.version = 1;
state.queue ??= [];
state.branchHeads ??= {};
state.branchPage ??= {};
state.forkPage ??= {};

const sourceMap = new Map();
const seedRepos = [];

for (const entry of config.forgejoOrganizations ?? []) {
  const source = sourceFromConfig(entry);
  sourceMap.set(source.apiBase, source);

  for (let page = 1; page <= 5; page++) {
    const repos = await fetchJson(`${source.apiBase}/orgs/${encodeURIComponent(entry.organization)}/repos?limit=50&page=${page}`);
    if (!Array.isArray(repos) || repos.length === 0) break;
    for (const repo of repos) {
      if (repo?.full_name) seedRepos.push({ source, repository: repo.full_name, metadata: repo });
    }
    if (repos.length < 50) break;
  }
}

for (const entry of config.forgejoRepositories ?? []) {
  const source = sourceFromConfig(entry);
  sourceMap.set(source.apiBase, source);
  const metadata = await fetchJson(`${source.apiBase}/repos/${entry.repository}`);
  if (metadata?.full_name) seedRepos.push({ source, repository: metadata.full_name, metadata });
}

const queue = [];
const queued = new Set();

for (const record of state.queue) {
  const source = sourceMap.get(record.apiBase) ?? {
    apiBase: record.apiBase,
    webBase: record.webBase,
    trustedPs2: true,
    label: record.label ?? record.apiBase
  };
  const key = keyFor(source, record.repository);
  if (!queued.has(key)) {
    queue.push({ source, repository: record.repository });
    queued.add(key);
  }
}

for (const seed of seedRepos) {
  const key = keyFor(seed.source, seed.repository);
  if (!queued.has(key)) {
    queue.push({ source: seed.source, repository: seed.repository });
    queued.add(key);
  }
}

const groups = await readJson(OUTPUT_PATH, []);
const repoGroup = ensureGroup(
  groups,
  "External Git — PS2 Repositories Live",
  "Continuously refreshed PS2 repositories hosted outside GitHub, including Forgejo and Gitea instances."
);
const forkGroup = ensureGroup(
  groups,
  "External Git — PS2 Fork Networks Live",
  "Forks and forks-of-forks discovered on non-GitHub Git hosts."
);
const branchGroup = ensureGroup(
  groups,
  "External Git — PS2 Branches Live",
  "Branches discovered across non-GitHub PS2 repositories and their fork networks."
);
const nestedGroup = ensureGroup(
  groups,
  "External Git — Nested Projects & Branch Internals Live",
  "Branch-specific nested tools, examples, modules, ports and project roots found inside non-GitHub PS2 repositories."
);

let repositoriesScanned = 0;
let forksSeen = 0;
let branchesSeen = 0;
let branchesChanged = 0;
let reposAdded = 0;
let forksAdded = 0;
let branchesAdded = 0;
let nestedAdded = 0;

try {
  const iterations = Math.min(REPOS_PER_RUN, queue.length);

  for (let i = 0; i < iterations; i++) {
    const current = queue.shift();
    if (!current) break;
    queue.push(current);

    const { source, repository } = current;
    repositoriesScanned++;

    const metadata = await fetchJson(`${source.apiBase}/repos/${repository}`);
    if (!metadata) continue;

    if (upsert(repoGroup, {
      name: `${source.label} — ${repository}`,
      url: metadata.html_url ?? repoWebUrl(source, repository),
      keywords: [
        "PS2", "PlayStation 2", "external Git", "Forgejo", "Gitea", "repository",
        repository, metadata.language ?? "", metadata.mirror ? "mirror" : "", metadata.archived ? "archived" : ""
      ].filter(Boolean)
    })) reposAdded++;

    const repoKey = keyFor(source, repository);
    const forkPage = Math.max(1, Number(state.forkPage[repoKey]) || 1);
    let nextForkPage = forkPage;

    for (let pageOffset = 0; pageOffset < FORK_PAGES_PER_REPO; pageOffset++) {
      const page = forkPage + pageOffset;
      const forks = await fetchJson(`${source.apiBase}/repos/${repository}/forks?limit=50&page=${page}`);
      if (!Array.isArray(forks)) break;

      for (const fork of forks) {
        if (!fork?.full_name) continue;
        forksSeen++;

        if (upsert(forkGroup, {
          name: `${source.label} — fork: ${fork.full_name}`,
          url: fork.html_url ?? repoWebUrl(source, fork.full_name),
          keywords: ["PS2", "PlayStation 2", "external Git", "fork", "fork network", repository, fork.full_name]
        })) forksAdded++;

        const forkKey = keyFor(source, fork.full_name);
        if (!queued.has(forkKey)) {
          queue.push({ source, repository: fork.full_name });
          queued.add(forkKey);
        }
      }

      if (forks.length < 50) {
        nextForkPage = 1;
        break;
      }
      nextForkPage = page + 1;
    }
    state.forkPage[repoKey] = nextForkPage;

    const deepBranchPage = Math.max(2, Number(state.branchPage[repoKey]) || 2);
    const pageTargets = [...new Set([1, deepBranchPage].slice(0, BRANCH_PAGES_PER_REPO))];
    const branches = new Map();
    let deepFull = false;

    for (const page of pageTargets) {
      const branchList = await fetchJson(`${source.apiBase}/repos/${repository}/branches?limit=50&page=${page}`);
      if (!Array.isArray(branchList)) continue;
      if (page === deepBranchPage) deepFull = branchList.length === 50;
      for (const branch of branchList) {
        if (branch?.name && branch?.commit?.id) branches.set(branch.name, branch);
      }
    }
    state.branchPage[repoKey] = deepFull ? deepBranchPage + 1 : 2;

    for (const branch of branches.values()) {
      branchesSeen++;
      const branchName = branch.name;
      const branchSha = branch.commit.id;

      if (upsert(branchGroup, {
        name: `${repository} — branch: ${branchName}`,
        url: branchWebUrl(source, repository, branchName),
        keywords: ["PS2", "PlayStation 2", "external Git", "branch", repository, branchName]
      })) branchesAdded++;

      const headKey = `${repoKey}@${branchName}`;
      if (state.branchHeads[headKey] === branchSha) continue;
      if (treesScanned >= TREES_PER_RUN) continue;

      const tree = await fetchJson(`${source.apiBase}/repos/${repository}/git/trees/${branchSha}?recursive=true`);
      if (!tree?.tree) continue;

      treesScanned++;
      branchesChanged++;

      const nested = discoverNestedPaths(tree.tree);
      for (const dir of [...nested.directories, ...nested.gitlinks]) {
        if (upsert(nestedGroup, {
          name: `${repository}@${branchName} — ${dir}`,
          url: nestedWebUrl(source, repository, branchName, dir),
          keywords: [
            "PS2", "PlayStation 2", "external Git", "branch", "nested project",
            repository, branchName, dir, ...(nested.gitlinks.includes(dir) ? ["gitlink", "submodule"] : [])
          ]
        })) nestedAdded++;
      }

      state.branchHeads[headKey] = branchSha;
    }

    console.log(`external git ${repository}: ${branches.size} branch(es)`);
  }
} catch (error) {
  if (error instanceof BudgetStop) {
    stoppedForBudget = true;
    console.warn(`::warning::${error.message}`);
  } else {
    throw error;
  }
}

for (const group of groups) {
  group.links.sort((a, b) => a.name.localeCompare(b.name, undefined, { sensitivity: "base" }));
}

state.queue = queue.slice(0, 50000).map(({ source, repository }) => ({
  apiBase: source.apiBase,
  webBase: source.webBase,
  label: source.label,
  repository
}));
state.lastRun = {
  at: new Date().toISOString(),
  repositoriesScanned,
  forksSeen,
  branchesSeen,
  branchesChanged,
  treesScanned,
  reposAdded,
  forksAdded,
  branchesAdded,
  nestedAdded,
  requests: requestCount,
  stoppedForBudget
};

await fs.mkdir(path.dirname(OUTPUT_PATH), { recursive: true });
await fs.mkdir(path.dirname(STATE_PATH), { recursive: true });
await fs.writeFile(OUTPUT_PATH, `${JSON.stringify(groups, null, 2)}\n`);
await fs.writeFile(STATE_PATH, `${JSON.stringify(state, null, 2)}\n`);

console.log(
  `External Git discovery: ${repositoriesScanned} repos, ${forksSeen} forks, ${branchesSeen} branches, ${branchesChanged} changed branch trees, ${nestedAdded} nested paths, ${requestCount} requests${stoppedForBudget ? " (stopped early)" : ""}.`
);
