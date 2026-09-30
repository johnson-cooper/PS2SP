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
import githubPlayStation2TopicGroups from "../../data/resources/github-topic-playstation-2.json";
import githubPs2TopicGroups from "../../data/resources/github-topic-ps2.json";
import githubPlaystation2TopicGroups from "../../data/resources/github-topic-playstation2.json";
import githubHomebrewDevTopicGroups from "../../data/resources/github-topic-homebrew-dev.json";
import githubPcsx2TopicGroups from "../../data/resources/github-topic-pcsx2.json";
import githubOplFmcbTopicGroups from "../../data/resources/github-topic-opl-fmcb.json";
import githubPs2DecompGroups from "../../data/resources/github-ps2-decompilations.json";
import githubPs2HomebrewGamePortGroups from "../../data/resources/github-ps2-homebrew-games-ports.json";
import ps2devWikiDeepSectionGroups from "../../data/resources/ps2devwiki-deep-sections.json";
import psxPlacePs2HubGroups from "../../data/resources/psx-place-ps2-hubs.json";

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
  ...(ps2HomeIndexGroups as ResourceGroup[]),
  ...(githubPlayStation2TopicGroups as ResourceGroup[]),
  ...(githubPs2TopicGroups as ResourceGroup[]),
  ...(githubPlaystation2TopicGroups as ResourceGroup[]),
  ...(githubHomebrewDevTopicGroups as ResourceGroup[]),
  ...(githubPcsx2TopicGroups as ResourceGroup[]),
  ...(githubOplFmcbTopicGroups as ResourceGroup[]),
  ...(githubPs2DecompGroups as ResourceGroup[]),
  ...(githubPs2HomebrewGamePortGroups as ResourceGroup[]),
  ...(ps2devWikiDeepSectionGroups as ResourceGroup[]),
  ...(psxPlacePs2HubGroups as ResourceGroup[])
];

export function getResourceGroups(): ResourceGroup[] {
  const groups = new Map<string, ResourceGroup>();
  const linksByUrl = new Map<string, ResourceLink>();

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
      const existing = linksByUrl.get(key);
      if (existing) {
        const mergedKeywords = new Set([
          ...(existing.keywords ?? []),
          ...(link.keywords ?? []),
          link.name
        ]);
        existing.keywords = [...mergedKeywords];
        if (!existing.favicon_url && link.favicon_url) existing.favicon_url = link.favicon_url;
        if (!existing.thumbnail_url && link.thumbnail_url) existing.thumbnail_url = link.thumbnail_url;
        continue;
      }

      const stored = { ...link };
      linksByUrl.set(key, stored);
      group.links.push(stored);
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
