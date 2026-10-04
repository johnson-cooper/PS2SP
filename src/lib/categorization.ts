import {
  KNOWN_UPSTREAM_CATEGORIES as rawKnown,
  inferCategories as rawInfer,
  shouldHideProject as rawHide
} from "../../scripts/lib/categorization.mjs";

export const KNOWN_UPSTREAM_CATEGORIES: Record<string, string[]> = rawKnown;

export interface ProjectCategoryInput {
  slug?: string;
  name?: string;
  summary?: string;
  tags?: string[];
  repository?: string;
  forkOf?: string | null;
}

export interface ProjectHideInput {
  slug?: string;
  name?: string;
  summary?: string;
  repository?: string;
}

export function inferCategories(input: ProjectCategoryInput): string[] {
  return (rawInfer as (arg: ProjectCategoryInput) => string[])(input);
}

export function shouldHideProject(input: ProjectHideInput): boolean {
  return (rawHide as (arg: ProjectHideInput) => boolean)(input);
}
