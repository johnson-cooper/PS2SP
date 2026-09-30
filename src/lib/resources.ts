import resourceGroups from "../../data/resources/directory.json";
import pcsx2WikiExtra0Groups from "../../data/resources/pcsx2-wiki-extra-0.json";
import pcsx2WikiExtraGroups from "../../data/resources/pcsx2-wiki-extra.json";
import pcsx2WikiExtra2Groups from "../../data/resources/pcsx2-wiki-extra-2.json";
import pcsx2WikiExtra3Groups from "../../data/resources/pcsx2-wiki-extra-3.json";
import repairResourceGroups from "../../data/resources/repair-index.json";
import consoleModsPs2Groups from "../../data/resources/consolemods-ps2.json";
import ps2sdkDocGroups from "../../data/resources/ps2sdk-docs.json";
import pcsx2DocGroups from "../../data/resources/pcsx2-docs.json";
import ps2devWikiSectionGroups from "../../data/resources/ps2devwiki-sections.json";
import ps2tekSectionGroups from "../../data/resources/ps2tek-sections.json";
import ps2HomeIndexGroups from "../../data/resources/ps2home-index.json";

export interface ResourceLink {
  name: string;
  url: string;
  favicon_url?: string;
  thumbnail_url?: string;
  keywords?: string[];
}

export interface ResourceGroup {
  category: string;
  description: string;
  links: ResourceLink[];
}

export interface ResourceEntry extends ResourceLink {
  category: string;
  categoryDescription: string;
}

const allResourceSources = [
  ...(resourceGroups as ResourceGroup[]),
  ...(pcsx2WikiExtra0Groups as ResourceGroup[]),
  ...(pcsx2WikiExtraGroups as ResourceGroup[]),
  ...(pcsx2WikiExtra2Groups as ResourceGroup[]),
  ...(pcsx2WikiExtra3Groups as ResourceGroup[]),
  ...(repairResourceGroups as ResourceGroup[]),
  ...(consoleModsPs2Groups as ResourceGroup[]),
  ...(ps2sdkDocGroups as ResourceGroup[]),
  ...(pcsx2DocGroups as ResourceGroup[]),
  ...(ps2devWikiSectionGroups as ResourceGroup[]),
  ...(ps2tekSectionGroups as ResourceGroup[]),
  ...(ps2HomeIndexGroups as ResourceGroup[])
];

export function getResourceGroups(): ResourceGroup[] {
  const groups = new Map<string, ResourceGroup>();
  const seenUrls = new Set<string>();

  for (const source of allResourceSources) {
    let group = groups.get(source.category);
    if (!group) {
      group = {
        category: source.category,
        description: source.description,
        links: []
      };
      groups.set(source.category, group);
    }

    for (const link of source.links) {
      const key = link.url.replace(/\/+$/, "");
      if (seenUrls.has(key)) continue;
      seenUrls.add(key);
      group.links.push(link);
    }
  }

  return [...groups.values()];
}

export function getResources(): ResourceEntry[] {
  return getResourceGroups().flatMap((group) =>
    group.links.map((link) => ({
      ...link,
      category: group.category,
      categoryDescription: group.description
    }))
  );
}

export function resourceHost(value: string) {
  try {
    return new URL(value).hostname.replace(/^www\./, "");
  } catch {
    return "external resource";
  }
}
