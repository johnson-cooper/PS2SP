import fs from "node:fs/promises";
import matter from "gray-matter";
import { inferCategories, shouldHideProject } from "./lib/categorization.mjs";

const projectsDir = new URL("../content/projects/", import.meta.url);
const pendingDir = new URL("../discovery/pending/", import.meta.url);

const blockedMaturity = new Set([
  "active-wip",
  "released-wip",
  "archived",
  "historical-or-discontinued",
  "dormant-unreleased",
  "stale-unreleased",
  "rejected"
]);

function slugify(value) {
  return String(value)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function maturityState(record) {
  if (typeof record?.maturity === "string") return record.maturity;
  if (record?.maturity && typeof record.maturity === "object") {
    return record.maturity.state ?? "unknown";
  }
  return "unknown";
}

function strongEvidenceCount(evidence) {
  if (!Array.isArray(evidence)) return 0;
  return evidence.filter((item) =>
    /repository name explicitly|repository description explicitly|README explicitly|PS2 development\/toolchain|PS2-specific topic|ps2-homebrew topic|release metadata identifies PS2|PS2-style ELF|trusted PS2 source owner/i.test(
      String(item)
    )
  ).length;
}

function looksLikeNonSoftware(record) {
  const repository = String(record?.repository ?? "");
  const [owner = "", name = ""] = repository.split("/");
  const lowerName = name.toLowerCase();
  const description = String(record?.description ?? "").toLowerCase();

  if (!owner || !name) return true;
  if (owner.toLowerCase() === lowerName) return true; // profile repository
  if (lowerName === ".github" || lowerName === "github") return true;
  if (/\.github\.io$/.test(lowerName)) return true;
  if (/^awesome[-_.]/.test(lowerName)) return true;
  if (/(?:^|[-_.])(wiki|docs?|documentation|guide)(?:$|[-_.])/.test(lowerName)) return true;
  if (/(?:compatibility[-_. ]?(?:list|database)|icon[-_. ]?database|resource[-_. ]?list)/.test(lowerName)) return true;
  if (/\b(?:list|collection) of (?:links|resources|repositories|projects)\b/.test(description)) return true;

  return false;
}

function shouldPromote(record) {
  const score = Number(record?.score ?? 0);
  const maturity = maturityState(record);
  const strongEvidence = strongEvidenceCount(record?.evidence);

  if (score < 70) return false;
  if (looksLikeNonSoftware(record)) return false;

  // PS2 forks are allowed to be old, archived, dormant, behind their parent, or
  // unreleased. Fork history is useful in its own right, and stale entries can be
  // ranked by activity instead of being deleted from the catalog.
  if (record?.fork) {
    return strongEvidence >= 1 || score >= 90;
  }

  if (blockedMaturity.has(maturity)) return false;

  if (maturity === "released-active" || maturity === "released-legacy") {
    return true;
  }

  if (maturity === "prerelease-only") {
    return score >= 80 && strongEvidence >= 2;
  }

  if (maturity === "active-unreleased") {
    return score >= 90 && strongEvidence >= 2;
  }

  // Older pending records may not have maturity metadata. Only promote them when
  // their PS2 evidence is exceptionally strong.
  return score >= 95 && strongEvidence >= 2;
}



async function readPublishedSources() {
  const byName = new Set();
  const byId = new Set();
  const fileNames = (await fs.readdir(projectsDir)).filter((name) => name.endsWith(".md"));

  for (const fileName of fileNames) {
    const parsed = matter(await fs.readFile(new URL(fileName, projectsDir), "utf8"));
    const repository = parsed.data?.source?.repository;
    const repositoryId = parsed.data?.source?.repositoryId;
    if (repository) byName.add(String(repository).toLowerCase());
    if (repositoryId != null) byId.add(String(repositoryId));
  }

  return { byName, byId, fileNames: new Set(fileNames) };
}

async function availableFileName(record, usedFiles) {
  const repository = String(record.repository);
  const [owner, repoName] = repository.split("/");
  const base = slugify(repoName);
  let candidate = `${base}.md`;

  if (usedFiles.has(candidate)) {
    candidate = `${slugify(`${repoName}-${owner}`)}.md`;
  }

  let suffix = 2;
  const stem = candidate.replace(/\.md$/, "");
  while (usedFiles.has(candidate)) {
    candidate = `${stem}-${suffix++}.md`;
  }

  usedFiles.add(candidate);
  return candidate;
}

const published = await readPublishedSources();
const pendingFiles = (await fs.readdir(pendingDir))
  .filter((name) => name.endsWith(".json"))
  .sort();

let promoted = 0;
let deduplicated = 0;
let retained = 0;

for (const pendingFile of pendingFiles) {
  const pendingUrl = new URL(pendingFile, pendingDir);
  let record;

  try {
    record = JSON.parse(await fs.readFile(pendingUrl, "utf8"));
  } catch (error) {
    console.warn(`::warning::Could not parse ${pendingFile}: ${error.message}`);
    retained++;
    continue;
  }

  const repository = String(record?.repository ?? "");
  const repositoryId = record?.repositoryId == null ? null : String(record.repositoryId);
  const normalizedRepository = repository.toLowerCase();

  if (
    (repository && published.byName.has(normalizedRepository)) ||
    (repositoryId && published.byId.has(repositoryId))
  ) {
    await fs.unlink(pendingUrl);
    deduplicated++;
    console.log(`removed stale pending duplicate ${repository || repositoryId}`);
    continue;
  }

  if (!shouldPromote(record)) {
    retained++;
    continue;
  }

  const [owner, repoName] = repository.split("/");
  const slug = slugify(repoName);
  const maturity = maturityState(record);
  const fileName = await availableFileName(record, published.fileNames);
  const projectSlug = fileName.replace(/\.md$/, "");
  const tags = ["auto-discovered", "pending-promoted", maturity].filter(Boolean);
  const categories = inferCategories({
    slug: projectSlug,
    name: repoName,
    summary: record.description || "",
    tags,
    repository
  });
  const hidden = shouldHideProject({
    slug: projectSlug,
    name: repoName,
    summary: record.description || "",
    repository
  });
  const project = {
    name: repoName,
    slug: projectSlug,
    summary:
      record.description ||
      `${repoName} is a PlayStation 2 software project discovered by PS2SP.`,
    categories,
    tags,
    features: [],
    authors: [],
    license: null,
    homepage: null,
    source: {
      provider: "github",
      repository,
      repositoryId,
      url: record.url ?? null
    },
    repository: {
      archived: false,
      defaultBranch: null,
      stars: 0,
      forks: 0,
      lastCommit: null
    },
    latestRelease: {
      tag: null,
      name: null,
      publishedAt: null,
      url: null
    },
    activity: {
      lastChecked: record.checkedAt ?? record.discoveredAt ?? null
    },
    automation: {
      sync: true
    },
    discovery: {
      method: `pending-promotion:${record.origin ?? "unknown"}`,
      confidence: Math.max(0, Math.min(100, Number(record.score ?? 70))),
      evidence: Array.isArray(record.evidence) ? record.evidence : [],
      maturity
    },
    verified: false,
    featured: false,
    hidden
  };

  if (record.fork?.parent || record.fork?.source) {
    project.relationships = {
      forkOf: record.fork?.parent ?? null,
      source: record.fork?.source ?? null
    };
    project.tags.push("fork");
  }

  const body =
    "\nAutomatically promoted from PS2SP's discovery review queue because it met the public catalog threshold. This entry is not yet human-verified; upstream repository and release metadata will continue to synchronize automatically.\n";

  await fs.writeFile(
    new URL(fileName, projectsDir),
    matter.stringify(body, project),
    "utf8"
  );
  await fs.unlink(pendingUrl);

  published.byName.add(normalizedRepository);
  if (repositoryId) published.byId.add(repositoryId);
  promoted++;
  console.log(`promoted ${repository} -> content/projects/${fileName}`);
}

console.log(
  `Pending promotion complete: ${promoted} promoted, ${deduplicated} stale duplicates removed, ${retained} retained for later review.`
);
