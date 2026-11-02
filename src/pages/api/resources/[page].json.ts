import type { APIRoute, GetStaticPaths } from "astro";
import { getResourcePages } from "../../../lib/resource-api";
export const prerender = true;
export const getStaticPaths: GetStaticPaths = () => getResourcePages().slice(1).map((payload, index) => ({
  params: { page: String(index + 1) }, props: { payload }
}));
export const GET: APIRoute = ({ props }) => new Response(JSON.stringify(props.payload), {
  headers: { "Content-Type": "application/json; charset=utf-8" }
});
