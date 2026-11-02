import type { APIRoute } from "astro";
import { getResourcePages } from "../../lib/resource-api";
export const prerender = true;
export const GET: APIRoute = () => new Response(JSON.stringify(getResourcePages()[0]), {
  headers: { "Content-Type": "application/json; charset=utf-8" }
});
