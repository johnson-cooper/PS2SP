import type { APIRoute } from "astro";
import { getResourceGroups } from "../../lib/resources";

export const prerender = true;

export const GET: APIRoute = async () => {
  return new Response(JSON.stringify({
    source: "https://github.com/NathanNeurotic/PS2Links/blob/main/links.json",
    groups: getResourceGroups()
  }, null, 2), {
    headers: { "Content-Type": "application/json; charset=utf-8" }
  });
};
