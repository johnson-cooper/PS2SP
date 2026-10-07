import type { APIRoute } from "astro";
import { getResourceGroups } from "../../lib/resources";

export const prerender = true;

export const GET: APIRoute = async () => {
  // Keep this payload compact. Cloudflare Pages has a 25 MiB per-asset limit,
  // and pretty-printing this large catalog can push the generated file over it.
  return new Response(JSON.stringify({
    groups: getResourceGroups()
  }), {
    headers: { "Content-Type": "application/json; charset=utf-8" }
  });
};
