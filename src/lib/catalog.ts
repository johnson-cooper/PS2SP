import { getCollection } from "astro:content";
import categories from "../../config/categories.json";

export async function getProjects() {
  return (await getCollection("projects"))
    .filter((project) => !project.data.hidden)
    .sort((a, b) => a.data.name.localeCompare(b.data.name));
}

export async function getSite() {
  const entries = await getCollection("site");
  if (!entries[0]) throw new Error("content/site.md is missing");
  return entries[0];
}

export function categoryLabel(id: string) {
  return categories.find((category) => category.id === id)?.label ?? id;
}

export function projectUpdatedAt(project: Awaited<ReturnType<typeof getProjects>>[number]) {
  return project.data.latestRelease.publishedAt ??
    project.data.repository.lastCommit ??
    project.data.activity.lastSynchronized ??
    project.data.activity.lastChecked ??
    "1970-01-01T00:00:00Z";
}

export function formatDate(value?: string | null) {
  if (!value) return "Unknown";
  const date = new Date(value);
  if (Number.isNaN(date.getTime()) || date.getUTCFullYear() < 2000) return "Unknown";
  return new Intl.DateTimeFormat("en", {
    year: "numeric",
    month: "short",
    day: "numeric"
  }).format(date);
}
