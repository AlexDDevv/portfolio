import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const projects = defineCollection({
  // Un projet = un fichier Markdown dans src/content/projects/<lang>/<slug>.md
  // generateId conserve le dossier de langue pour éviter toute collision
  // d'identifiant entre les versions FR et EN d'un même slug.
  loader: glob({
    pattern: "**/*.md",
    base: "./src/content/projects",
    generateId: ({ entry }) => entry.replace(/\.md$/, ""),
  }),
  schema: ({ image }) =>
    z.object({
    lang: z.enum(["fr", "en"]),
    slug: z.string(),
    title: z.string(),
    /** Statut affiché en badge (ex. "En cours"). Vide = pas de badge. */
    status: z.string().default(""),
    dates: z.string(),
    /** Résumé court utilisé sur la carte d'accueil et en meta description. */
    description: z.string(),
    /** Ordre d'affichage (croissant). */
    order: z.number().default(99),
    stack: z.array(z.string()).default([]),
    /** Détail optionnel de la stack (ex. Frontend → …, Backend → …). */
    stackDetail: z
      .array(z.object({ label: z.string(), value: z.string() }))
      .default([]),
    repo: z.string().url().optional(),
    demo: z.string().url().optional(),
    context: z.string(),
    features: z.array(z.string()).default([]),
    demonstrates: z.string(),
    gallery: z
      .array(
        z.object({
          caption: z.string(),
          // Image optionnelle, relative au fichier .md (ex.
          // ../../../assets/projects/<slug>/accueil.png). Optimisée au build
          // par astro:assets. Sans image, un emplacement vide est affiché.
          image: image().optional(),
        }),
      )
      .default([]),
    }),
});

export const collections = { projects };
