import { getCollection, type CollectionEntry } from "astro:content";
import type { Lang } from "@/i18n/config";

export type ProjectEntry = CollectionEntry<"projects">;

/** Tous les projets d'une langue, triés par `order` croissant. */
export async function getProjects(lang: Lang): Promise<ProjectEntry[]> {
  const entries = await getCollection("projects", (e) => e.data.lang === lang);
  return entries.sort((a, b) => a.data.order - b.data.order);
}
