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
  reportUrl: string;
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

function deriveSoftwareTags(
  name: string,
  summary: string,
  categories: string[],
  baseTags: string[],
  sourceKind: "project" | "resource",
  archived = false
) {
  const text = `${name} ${summary} ${categories.join(" ")} ${baseTags.join(" ")}`.toLowerCase();
  const tags = new Set(baseTags.map((tag) => String(tag).trim()).filter(Boolean));

  const add = (label: string, pattern: RegExp) => {
    if (pattern.test(text)) tags.add(label);
  };

  for (const category of categories) tags.add(categoryLabel(category));

  add("OPL", /\bopl\b|open[- ]ps2[- ]loader/);
  add("Neutrino", /\bneutrino\b/);
  add("NHDDL", /\bnhddl\b/);
  add("FMCB", /free.?mcboot|\bfmcb\b/);
  add("FHDB", /free.?hdboot|\bfhdb\b/);
  add("POPStarter", /popstarter|popsloader|\bpops\b/);
  add("PS1", /\bps1\b|playstation\s*1|psx/);
  add("HDD", /\bhdd\b|hard drive|\bapa\b|\bpfs\b/);
  add("USB", /\busb\b|usb mass/);
  add("SMB", /\bsmb\b|samba/);
  add("UDPFS", /\budpfs\b/);
  add("UDPBD", /\budpbd\b/);
  add("MX4SIO", /mx4sio/);
  add("MMCE", /\bmmce\b/);
  add("Memory Card", /memory card|memcard|\bvmc\b/);
  add("VMC", /\bvmc\b|virtual memory card/);
  add("Save Tools", /save tool|save manager|save editor|mymc|psv save/);
  add("Cheats", /cheat|codebreaker|artemis|gameshark/);
  add("Networking", /network|server|ethernet|online|dns|dnas|hostfs/);
  add("Linux", /\blinux\b|blackrhino/);
  add("SDK", /\bsdk\b|ps2sdk|toolchain/);
  add("ELF", /\belf\b/);
  add("IRX", /\birx\b/);
  add("GS", /\bgskit\b|graphics synthesizer|\bgs\b/);
  add("IOP", /\biop\b|input output processor/);
  add("EE", /emotion engine|\bee\b/);
  add("Decompilation", /decomp|decompilation/);
  add("Reverse Engineering", /reverse[- ]engineer|reverse engineering/);
  add("Exploit", /exploit|vulnerabil|rce|buffer overflow/);
  add("Modchip", /modchip|modbo|matrix infinity|dms4|crystal chip/);
  add("Themes", /theme/);
  add("Demoscene", /demoscene|pouet/);
  add("Homebrew Game", /homebrew game|game port|fan port/);
  add("Emulator", /emulat/);
  add("Launcher", /launcher|launchelf/);
  add("Loader", /loader/);

  if (sourceKind === "project") tags.add("GitHub");
  else tags.add("External / Legacy");
  if (archived) tags.add("Archived");
  if ([...tags].some((tag) => tag.toLowerCase() === "fork")) tags.add("Fork");

  return [...tags];
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
      tags: deriveSoftwareTags(
        project.data.name,
        project.data.summary,
        project.data.categories,
        project.data.tags,
        "project",
        project.data.repository.archived
      ),
      features: project.data.features,
      href: `/project/${project.data.slug}`,
      reportUrl: repositoryUrl ?? project.data.homepage ?? `/project/${project.data.slug}`,
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

    const resourceCategories = inferResourceCategories(resource);
    const resourceBaseTags = [...new Set(["resource-index", ...(resource.keywords ?? [])])];

    entries.push({
      key: `resource:${canonical || resource.url}`,
      name: resource.name,
      summary: resource.categoryDescription,
      categories: resourceCategories,
      tags: deriveSoftwareTags(
        resource.name,
        resource.categoryDescription,
        resourceCategories,
        resourceBaseTags,
        "resource"
      ),
      features: [],
      href: resource.url,
      reportUrl: resource.url,
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
