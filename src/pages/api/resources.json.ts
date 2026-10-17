import type { APIRoute } from "astro";
import { getResourceGroups } from "../../lib/resources";

export const prerender = true;

const genericTags = new Set([
  "ps2",
  "playstation 2",
  "playstation2",
  "github",
  "branch",
  "repository",
  "nested project",
  "repository internals"
]);

export const GET: APIRoute = async () => {
  // Keep this payload compact. Cloudflare Pages has a 25 MiB per-asset limit.
  // Compact links by omitting empty fields and pruning redundant keyword strings
  // already covered by link name, url, or generic PS2 tokens.
  const rawGroups = getResourceGroups();
  const groups = rawGroups.map((group) => ({
    category: group.category,
    description: group.description,
    links: group.links.map((link) => {
      const nameLower = link.name.toLowerCase();
      const distinctKeywords: string[] = [];
      const seen = new Set<string>();

      for (const raw of link.keywords ?? []) {
        const tag = String(raw).trim();
        const lower = tag.toLowerCase();
        if (!tag || genericTags.has(lower) || seen.has(lower) || nameLower.includes(lower)) {
          continue;
        }
        seen.add(lower);
        distinctKeywords.push(tag);
        if (distinctKeywords.length >= 6) break;
      }

      const item: Record<string, unknown> = {
        name: link.name,
        url: link.url
      };
      if (distinctKeywords.length > 0) item.keywords = distinctKeywords;
      if (link.favicon_url) item.favicon_url = link.favicon_url;
      if (link.thumbnail_url) item.thumbnail_url = link.thumbnail_url;
      return item;
    })
  }));

  return new Response(JSON.stringify({ groups }), {
    headers: { "Content-Type": "application/json; charset=utf-8" }
  });
};
