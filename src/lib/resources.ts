import resourceGroups from "../../data/resources/directory.json";

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

export function getResourceGroups(): ResourceGroup[] {
  return resourceGroups as ResourceGroup[];
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
