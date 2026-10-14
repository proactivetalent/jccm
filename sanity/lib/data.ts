import "server-only";

import { sanityFetch } from "@/sanity/lib/live";
import {
  PORTFOLIO_FILTERS_QUERY,
  PORTFOLIO_PROJECTS_QUERY,
  PROJECT_BY_SLUG_QUERY,
  PROJECT_SLUGS_QUERY,
} from "@/sanity/queries/projects";
import { PORTFOLIO_SETTINGS_QUERY } from "@/sanity/queries/settings";

export async function getPortfolioProjects() {
  const { data } = await sanityFetch({ query: PORTFOLIO_PROJECTS_QUERY });
  return data;
}

export async function getProjectBySlug(slug: string) {
  const { data } = await sanityFetch({
    query: PROJECT_BY_SLUG_QUERY,
    params: { slug },
  });

  return data;
}

export async function getProjectSlugs() {
  const { data } = await sanityFetch({ query: PROJECT_SLUGS_QUERY });
  return data;
}

export async function getPortfolioFilters() {
  const { data } = await sanityFetch({ query: PORTFOLIO_FILTERS_QUERY });
  return data;
}

export async function getPortfolioSettings() {
  const { data } = await sanityFetch({ query: PORTFOLIO_SETTINGS_QUERY });
  return data;
}
