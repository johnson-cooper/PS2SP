import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import matter from "gray-matter";

const token = process.env.GITHUB_TOKEN;
if (!token) {
  console.error("GITHUB_TOKEN is required.");
  process.exit(1);
}

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const PROJECTS_DIR = path.join(ROOT, "content", "projects");
const OUTPUT_PATH = path.join(ROOT, "data", "resources", "github-depth-live.json");
const STATE_PATH = path.join(ROOT, "discovery", "github-depth-state.json");

const MAX_REQUESTS = Math.max(1, Number.parseInt(process.env.MAX_GITHUB_DEPTH_API_REQUESTS ?? "300", 10));
const CORE_RESERVE = Math.max(0, Number.parseInt(process.env.GITHUB_CORE_RATE_LIMIT_RESERVE ?? "120", 10));
const REPOS_PER_RUN = Math.max(1, Number.parseInt(process.env.GITHUB_DEPTH_REPOS_PER_RUN ?? "18", 10));
const BRANCH_PAGES_PER_REPO = Math.max(1, Number.parseInt(process.env.GITHUB_DEPTH_BRANCH_PAGES_PER_REPO ?? "2", 10));
const CHANGED_BRANCH_TREES_PER_RUN = Math.max(1, Number.parseInt(process.env.GITHUB_DEPTH_CHANGED_BRANCH_TREES_PER_RUN ?? "90", 10));
const INTERNAL_PATHS_PER_BRANCH = Math.max(1, Number.parseInt(process.env.GITHUB_DEPTH_INTERNAL_PATHS_PER_BRANCH ?? "40", 10));
const USER_AGENT = "PS2SP-depth-indexer/1.0 (+https://github.com/johnson-cooper/PS2SP)";

const headers = {
  Accept: "application/vnd.github+json",
  Authorization: `Bearer ${token}`,
  "X-GitHub-Api-Version": "2022-11-28",
  "User-Agent": USER_AGENT
};

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

async function github(endpoint) {
  if (requestCount >= MAX_REQUESTS) {
    throw new BudgetStop(`GitHub depth request budget reached (${MAX_REQUESTS}).`);
  }

  requestCount++;
  const response = await fetch(`https://api.github.com${endpoint}`, { headers });
  if (response.status === 404) return null;

  const remaining = Number.parseInt(response.headers.get("x-ratelimit-remaining") ?? "", 10);
  if ((response.status === 403 || response.status === 429) && Number.isFinite(remaining) && remaining <= CORE_RESERVE) {
    throw new BudgetStop(`GitHub depth discovery stopped at rate-limit reserve (${remaining}).`);
  }
  if (!response.ok) {
    throw new Error(`GitHub API ${response.status}: ${await response.text()}`);
  }
  if (Number.isFinite(remaining) && remaining <= CORE_RESERVE) {
    throw new BudgetStop(`GitHub depth discovery stopped with ${remaining} core requests remaining.`);
  }
  return response.json();
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

function encodeBranch(branch) {
  return String(branch).split("/").map(encodeURIComponent).join("/");
}

function branchUrl(repository, branch) {
  return `https://github.com/${repository}/tree/${encodeBranch(branch)}`;
}

function treePathUrl(repository, branch, targetPath) {
  const encodedPath = String(targetPath).split("/").map(encodeURIComponent).join("/");
  return `${branchUrl(repository, branch)}/${encodedPath}`;
}

function normalizeGitUrl(value, repository) {
  if (!value) return null;
  let raw = String(value).trim();

  const scp = raw.match(/^git@([^:]+):(.+)$/);
  if (scp) return `https://${scp[1]}/${scp[2].replace(/\.git$/i, "")}`;

  const ssh = raw.match(/^ssh:\/\/git@([^/]+)\/(.+)$/);
  if (ssh) return `https://${ssh[1]}/${ssh[2].replace(/\.git$/i, "")}`;

  if (/^https?:\/\//i.test(raw)) return raw.replace(/\.git$/i, "");

  if (/^\.\.\//.test(raw)) {
    const [owner] = repository.split("/");
    const name = raw.replace(/^\.\.\//, "").replace(/\.git$/i, "");
    if (owner && name) return `https://github.com/${owner}/${name}`;
  }

  return null;
}

function parseGitmodules(text) {
  const found = [];
  let current = null;

  for (const line of String(text ?? "").split(/\r?\n/)) {
    const section = line.match(/^\s*\[submodule\s+"([^"]+)"\]\s*$/i);
    if (section) {
      if (current?.path || current?.url) found.push(current);
      current = { name: section[1], path: null, url: null };
      continue;
    }
    if (!current) continue;

    const field = line.match(/^\s*(path|url)\s*=\s*(.+?)\s*$/i);
    if (!field) continue;
    current[field[1].toLowerCase()] = field[2];
  }

  if (current?.path || current?.url) found.push(current);
  return found;
}

const ignoredSegments = new Set([
  ".git", ".github", ".forgejo", "node_modules", "vendor", "vendors", "third_party",
  "third-party", "external", "externals", "deps", "dependencies", "build", "dist",
  "target", ".cache", "cmake-build-debug", "cmake-build-release"
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
    if (/^(examples?|samples?|tests?|testdata)$/i.test(dirParts.at(-1) ?? "")) score += 2;

    const existing = candidates.get(dir) ?? 0;
    candidates.set(dir, Math.max(existing, score));
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

function ensureGroup(groups, category, description) {
  let group = groups.find((entry) => entry.category === category);
  if (!group) {
    group = { category, description, links: [] };
    groups.push(group);
  }
  group.links ??= [];
  return group;
}

function upsertLink(group, link) {
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

const projectFiles = (await fs.readdir(PROJECTS_DIR)).filter((name) => name.endsWith(".md"));
const repositories = [];
for (const file of projectFiles) {
  try {
    const raw = await fs.readFile(path.join(PROJECTS_DIR, file), "utf8");
    const data = matter(raw).data;
    if (data?.source?.provider === "github" && data.source.repository) repositories.push(String(data.source.repository));
  } catch (error) {
    console.warn(`Could not read project ${file}: ${error.message}`);
  }
}

const knownRepositories = [...new Set(repositories)].sort((a, b) => a.localeCompare(b));
const knownSet = new Set(knownRepositories.map((repo) => repo.toLowerCase()));

const state = await readJson(STATE_PATH, {
  version: 1,
  queue: [],
  nextBranchPage: {},
  branchHeads: {},
  lastRun: null
});
state.version = 1;
state.nextBranchPage ??= {};
state.branchHeads ??= {};

const queue = [];
const queued = new Set();
for (const value of state.queue ?? []) {
  const repo = String(value);
  const key = repo.toLowerCase();
  if (!knownSet.has(key) || queued.has(key)) continue;
  queue.push(repo);
  queued.add(key);
}
for (const repo of knownRepositories) {
  const key = repo.toLowerCase();
  if (!queued.has(key)) {
    queue.push(repo);
    queued.add(key);
  }
}

const groups = await readJson(OUTPUT_PATH, []);
const branchGroup = ensureGroup(
  groups,
  "GitHub — Branches & Fork Branches Live",
  "Continuously refreshed branch index across every published GitHub PS2 project, including forks and forks-of-forks."
);
const nestedGroup = ensureGroup(
  groups,
  "GitHub — Nested Projects & Branch Internals Live",
  "Branch-specific nested projects, tools, examples, modules, ports and other internally discoverable project roots found inside PS2 repositories."
);
const submoduleGroup = ensureGroup(
  groups,
  "GitHub — Repository Submodules Live",
  "Git submodules discovered inside PS2 repositories and their branches, including cross-host dependencies and repositories nested inside repositories."
);

let repositoriesScanned = 0;
let branchesSeen = 0;
let branchesChanged = 0;
let nestedAdded = 0;
let submodulesAdded = 0;

try {
  const iterations = Math.min(REPOS_PER_RUN, queue.length);

  for (let index = 0; index < iterations; index++) {
    const repository = queue.shift();
    queue.push(repository);
    repositoriesScanned++;

    const deepPage = Math.max(2, Number(state.nextBranchPage[repository]) || 2);
    const pageTargets = [...new Set([1, deepPage].slice(0, BRANCH_PAGES_PER_REPO))];
    const branches = new Map();
    let deepestPageHadFullResults = false;

    for (const page of pageTargets) {
      const response = await github(`/repos/${repository}/branches?per_page=100&page=${page}`);
      if (!Array.isArray(response)) continue;
      if (page === deepPage) deepestPageHadFullResults = response.length === 100;
      for (const branch of response) {
        if (branch?.name && branch?.commit?.sha) branches.set(branch.name, branch);
      }
    }

    state.nextBranchPage[repository] = deepestPageHadFullResults ? deepPage + 1 : 2;

    for (const branch of branches.values()) {
      branchesSeen++;
      const name = branch.name;
      const sha = branch.commit.sha;
      const bUrl = branchUrl(repository, name);
      upsertLink(branchGroup, {
        name: `${repository} — branch: ${name}`,
        url: bUrl,
        keywords: ["PS2", "PlayStation 2", "GitHub", "branch", "repository", repository, name]
      });

      const headKey = `${repository}@${name}`;
      if (state.branchHeads[headKey] === sha) continue;
      if (treesScanned >= CHANGED_BRANCH_TREES_PER_RUN) continue;

      const tree = await github(`/repos/${repository}/git/trees/${sha}?recursive=1`);
      if (!tree?.tree) continue;

      treesScanned++;
      branchesChanged++;

      const nested = discoverNestedPaths(tree.tree);
      for (const dir of [...nested.directories, ...nested.gitlinks]) {
        const added = upsertLink(nestedGroup, {
          name: `${repository}@${name} — ${dir}`,
          url: treePathUrl(repository, name, dir),
          keywords: [
            "PS2", "PlayStation 2", "GitHub", "branch", "nested project", "repository internals",
            repository, name, dir, ...(nested.gitlinks.includes(dir) ? ["gitlink", "submodule"] : [])
          ]
        });
        if (added) nestedAdded++;
      }

      const gitmoduleFiles = tree.tree.filter((item) =>
        item?.type === "blob" &&
        String(item.path ?? "").split("/").at(-1) === ".gitmodules"
      ).slice(0, 3);

      for (const item of gitmoduleFiles) {
        const blob = await github(`/repos/${repository}/git/blobs/${item.sha}`);
        if (!blob?.content) continue;

        const decoded = Buffer.from(String(blob.content).replace(/\n/g, ""), "base64").toString("utf8");
        for (const submodule of parseGitmodules(decoded)) {
          const target = normalizeGitUrl(submodule.url, repository);
          const pathLabel = submodule.path ?? submodule.name ?? "submodule";
          const targetUrl = target ?? treePathUrl(repository, name, pathLabel);
          const added = upsertLink(submoduleGroup, {
            name: `${repository}@${name} — submodule: ${pathLabel}`,
            url: targetUrl,
            keywords: [
              "PS2", "PlayStation 2", "GitHub", "submodule", "nested repository",
              repository, name, pathLabel, submodule.url ?? ""
            ].filter(Boolean)
          });
          if (added) submodulesAdded++;
        }
      }

      state.branchHeads[headKey] = sha;
    }

    console.log(`depth ${repository}: ${branches.size} branch(es) seen`);
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

const liveHeadKeys = Object.entries(state.branchHeads);
if (liveHeadKeys.length > 100000) {
  state.branchHeads = Object.fromEntries(liveHeadKeys.slice(-100000));
}
state.queue = queue;
state.lastRun = {
  at: new Date().toISOString(),
  repositoriesScanned,
  branchesSeen,
  branchesChanged,
  treesScanned,
  nestedAdded,
  submodulesAdded,
  requests: requestCount,
  stoppedForBudget
};

await fs.mkdir(path.dirname(OUTPUT_PATH), { recursive: true });
await fs.mkdir(path.dirname(STATE_PATH), { recursive: true });
await fs.writeFile(OUTPUT_PATH, `${JSON.stringify(groups, null, 2)}\n`);
await fs.writeFile(STATE_PATH, `${JSON.stringify(state, null, 2)}\n`);

console.log(
  `GitHub depth discovery: ${repositoriesScanned} repos, ${branchesSeen} branches, ${branchesChanged} changed branch trees, ${nestedAdded} nested paths, ${submodulesAdded} submodules, ${requestCount} requests${stoppedForBudget ? " (stopped early)" : ""}.`
);
