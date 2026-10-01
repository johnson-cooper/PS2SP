import { categoryLabel, getProjects, projectUpdatedAt } from "./catalog";
import { getResources, type ResourceEntry } from "./resources";

export interface SoftwareCatalogEntry {
  key: string;
  name: string;
  summary: string;
  categories: string[];
  tags: string[];
  features: string[];
  href: string;
  external: boolean;
  archived: boolean;
  releaseTag: string | null;
  updatedAt: string | null;
  sourceKind: "project" | "resource";
}

function normalizedUrl(value?: string | null) {
  if (!value) return "";
  try {
    const url = new URL(value);
    url.hash = "";
    url.hostname = url.hostname.toLowerCase().replace(/^www\./, "");
    url.pathname = url.pathname.replace(/\/+$/, "");
    if (url.hostname === "github.com") {
      const parts = url.pathname.split("/").filter(Boolean);
      if (parts.length >= 2) url.pathname = `/${parts[0].toLowerCase()}/${parts[1].toLowerCase()}`;
      url.search = "";
    }
    return url.toString().replace(/\/$/, "");
  } catch {
    return value.replace(/\/+$/, "").toLowerCase();
  }
}

function inferResourceCategories(resource: ResourceEntry) {
  const text = `${resource.name} ${resource.category} ${resource.categoryDescription} ${resource.keywords?.join(" ") ?? ""}`.toLowerCase();
  const categories: string[] = [];

  if (/homebrew games?|game ports?|games? & ports?|\bgame\b/.test(text)) categories.push("games");
  if (/\bport\b|ported/.test(text)) categories.push("ports");
  if (/emulat/.test(text)) categories.push("emulators");
  if (/\bloader\b|open ps2 loader|\bopl\b|neutrino/.test(text)) categories.push("loaders");
  if (/\blauncher\b|launch.?elf/.test(text)) categories.push("launchers");
  if (/free.?mcboot|\bfmcb\b|free.?hdboot|\bfhdb\b|exploit|bootloader/.test(text)) categories.push("boot-tools");
  if (/installer|installation utility/.test(text)) categories.push("installers");
  if (/dashboard|osdsys|browser replacement/.test(text)) categories.push("dashboards");
  if (/file manager|ulaunchelf|wlaunchelf/.test(text)) categories.push("file-managers");
  if (/media player|audio player|video player/.test(text)) categories.push("media");
  if (/network|server|smb|udpfs|udpbd|ps2link|hostfs|online/.test(text)) categories.push("networking");
  if (/save tool|save manager|save editor|memory card utility/.test(text)) categories.push("save-tools");
  if (/cheat|codebreaker|gameshark|artemis/.test(text)) categories.push("cheat-tools");
  if (/\bsdk\b|toolchain|compiler|development tool|ps2dev/.test(text)) categories.push("development");
  if (/\bsdk\b|ps2sdk/.test(text)) categories.push("sdks");
  if (/\blibrary\b|\blib[a-z0-9_-]+\b/.test(text)) categories.push("libraries");
  if (/\bengine\b/.test(text)) categories.push("engines");
  if (/runtime|lua player|j2me/.test(text)) categories.push("runtimes");
  if (/\bdriver\b|irx/.test(text)) categories.push("drivers");
  if (/theme/.test(text)) categories.push("themes");
  if (/\bdemo\b|demoscene/.test(text)) categories.push("demos");
  if (/converter|editor|manager|tool|utility|dumper|viewer|patcher|frontend|gui|builder/.test(text)) categories.push("utilities");

  return [...new Set(categories.length ? categories : ["utilities"])];
}

function isSoftwareResource(resource: ResourceEntry) {
  const category = resource.category.toLowerCase();
  const name = resource.name.toLowerCase();
  const url = resource.url.toLowerCase();
  const text = `${category} ${name} ${resource.keywords?.join(" ").toLowerCase() ?? ""}`;

  const strongSoftwareCategory =
    /homebrew games?|homebrew applications?|games? & ports?|applications? & utilities|software projects?|software index|software archive|application archive|homebrew store|sas apps|save application system|github.*(?:ps2|homebrew|playstation)|sourceforge.*ps2|pdroms.*ps2/.test(category);

  const strongSoftwareUrl =
    (/github\.com\/[^/]+\/[^/]+\/?$/.test(url) && !/awesome|wiki|docs|documentation/.test(name)) ||
    (/psx-place\.com\/resources\//.test(url) && !/categories\//.test(url));

  const softwareName =
    /\b(?:homebrew|app(?:lication)?|utility|tool|loader|launcher|emulator|port|engine|sdk|toolchain|driver|runtime|file manager|media player|save manager|save editor|patcher|converter|dumper|viewer|builder|frontend|game)\b/.test(text);

  const obviousNonSoftware =
    /(?:forum|community|wiki|documentation|technical reference|service manual|hardware docs?|repair|scene history|article|tutorial|guide|compatibility list|game list|news|archive snapshot|wayback)/.test(category) &&
    !/homebrew store|application archive|software archive/.test(category);

  if (obviousNonSoftware && !strongSoftwareUrl) return false;
  return strongSoftwareCategory || strongSoftwareUrl || softwareName;
}

export async function getSoftwareCatalog(): Promise<SoftwareCatalogEntry[]> {
  const projects = await getProjects();
  const entries: SoftwareCatalogEntry[] = [];
  const seenUrls = new Set<string>();
  const seenNames = new Set<string>();

  for (const project of projects) {
    const repositoryUrl = project.data.source.repository
      ? `https://github.com/${project.data.source.repository}`
      : project.data.source.url;
    const canonical = normalizedUrl(repositoryUrl ?? project.data.homepage);
    if (canonical) seenUrls.add(canonical);
    seenNames.add(project.data.name.trim().toLowerCase());

    entries.push({
      key: `project:${project.data.slug}`,
      name: project.data.name,
      summary: project.data.summary,
      categories: project.data.categories,
      tags: project.data.tags,
      features: project.data.features,
      href: `/project/${project.data.slug}`,
      external: false,
      archived: project.data.repository.archived,
      releaseTag: project.data.latestRelease.tag ?? null,
      updatedAt: projectUpdatedAt(project),
      sourceKind: "project"
    });
  }

  for (const resource of getResources()) {
    if (!isSoftwareResource(resource)) continue;

    const canonical = normalizedUrl(resource.url);
    const nameKey = resource.name.trim().toLowerCase();

    if (canonical && seenUrls.has(canonical)) continue;
    if (seenNames.has(nameKey)) continue;

    if (canonical) seenUrls.add(canonical);
    seenNames.add(nameKey);

    entries.push({
      key: `resource:${canonical || resource.url}`,
      name: resource.name,
      summary: resource.categoryDescription,
      categories: inferResourceCategories(resource),
      tags: [...new Set(["resource-index", ...(resource.keywords ?? [])])],
      features: [],
      href: resource.url,
      external: true,
      archived: false,
      releaseTag: null,
      updatedAt: null,
      sourceKind: "resource"
    });
  }

  return entries.sort((a, b) => a.name.localeCompare(b.name));
}

export function softwareCategoryLabel(id: string) {
  return categoryLabel(id);
}
