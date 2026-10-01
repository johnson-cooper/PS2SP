import type { APIRoute } from "astro";
import { getSoftwareCatalog } from "../../lib/software";

export const prerender = true;

export const GET: APIRoute = async () => {
  const entries = await getSoftwareCatalog();

  return new Response(JSON.stringify({
    entries: entries.map((entry) => ({
      name: entry.name,
      summary: entry.summary,
      categories: entry.categories,
      tags: entry.tags,
      features: entry.features,
      href: entry.href,
      reportUrl: entry.reportUrl,
      external: entry.external,
      archived: entry.archived,
      releaseTag: entry.releaseTag,
      updatedAt: entry.updatedAt,
      sourceKind: entry.sourceKind
    }))
  }), {
    headers: { "Content-Type": "application/json; charset=utf-8" }
  });
};
