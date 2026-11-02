const bytes = (value) => new TextEncoder().encode(JSON.stringify(value)).length;

// Reserve space for the next URL; keep assets well below the 25 MiB limit.
export function splitResourceGroups(groups, maxBytes = 4 * 1024 * 1024) {
  const budget = maxBytes - 128;
  const pages = [];
  let page = { groups: [] };
  let size = bytes(page);
  const flush = () => { pages.push(page); page = { groups: [] }; size = bytes(page); };
  for (const group of groups) {
    const empty = { ...group, links: [] };
    const overhead = bytes(empty);
    let fragment;
    for (const link of group.links.length ? group.links : [null]) {
      const linkSize = link === null ? 0 : bytes(link);
      if (bytes({ groups: [empty] }) + linkSize > budget) {
        throw new Error(`Resource exceeds page size budget: ${group.category}`);
      }
      let extra = fragment ? (fragment.links.length ? 1 : 0) + linkSize
        : (page.groups.length ? 1 : 0) + overhead + linkSize;
      if (size + extra > budget) { flush(); fragment = undefined; extra = overhead + linkSize; }
      if (!fragment) { fragment = { ...empty, links: [] }; page.groups.push(fragment); }
      if (link !== null) fragment.links.push(link);
      size += extra;
    }
  }
  if (page.groups.length || !pages.length) flush();
  return pages.map((payload, index) => ({ ...payload,
    ...(index + 1 < pages.length ? { next: `/api/resources/${index + 1}.json` } : {})
  }));
}

// Accept the old single-file response too, for cached/older deployments.
export async function loadResourceGroups(fetchImpl = fetch) {
  const groups = [];
  const categories = new Map();
  const visited = new Set();
  let url = "/api/resources.json";
  while (url) {
    if (visited.has(url)) throw new Error("Resource pagination cycle");
    visited.add(url);
    const response = await fetchImpl(url);
    if (!response.ok) throw new Error(`Resource request failed: ${response.status} ${url}`);
    const payload = await response.json();
    if (!Array.isArray(payload.groups)) throw new Error("Invalid resource page");
    for (const group of payload.groups) {
      if (!Array.isArray(group.links)) throw new Error("Invalid resource group");
      const existing = categories.get(group.category);
      if (existing) { for (const link of group.links) existing.links.push(link); }
      else {
        const copy = { ...group, links: [...group.links] };
        categories.set(group.category, copy);
        groups.push(copy);
      }
    }
    url = payload.next;
    if (url !== undefined && (typeof url !== "string" || !/^\/api\/resources\/\d+\.json$/.test(url))) {
      throw new Error("Invalid resource pagination URL");
    }
  }
  return { groups };
}
