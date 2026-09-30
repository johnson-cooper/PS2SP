import resourceGroups from "../../data/resources/directory.json";
import pcsx2WikiExtraGroups from "../../data/resources/pcsx2-wiki-extra.json";
import pcsx2WikiExtra2Groups from "../../data/resources/pcsx2-wiki-extra-2.json";
import repairResourceGroups from "../../data/resources/repair-index.json";

export interface ResourceLink {
  name: string;
  url: string;
  favicon_url?: string;
  thumbnail_url?: string;
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
  ...(pcsx2WikiExtraGroups as ResourceGroup[]),
  ...(pcsx2WikiExtra2Groups as ResourceGroup[]),
  ...(repairResourceGroups as ResourceGroup[])
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
