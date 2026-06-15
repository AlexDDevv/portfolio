# Portfolio - Alexis Delporte

Minimalist, SEO-first bilingual (FR/EN) developer portfolio. Fast, zero-JS, with LaTeX-inspired typography. Built with Astro and TypeScript.

**Live:** https://alexis-delporte.vercel.app

## Highlights

- **Zero JavaScript** shipped: fully static output, image lightbox via the native HTML Popover API.
- **Bilingual (FR/EN)** with native Astro i18n routing (`/` and `/en/`) and reciprocal `hreflang`.
- **SEO-first**: JSON-LD (`Person`, `SoftwareSourceCode`), OpenGraph, multilingual sitemap, canonical URLs.
- **Optimized images**: `astro:assets` + Sharp generate responsive WebP/AVIF automatically.
- **Self-hosted Computer Modern font** (no third-party request, GDPR-friendly).
- **Content as data**: projects are typed Markdown files (Astro Content Collections + Zod).

## Tech stack

| Area | Choice |
| :--- | :--- |
| Framework | Astro 5 (static SSG) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 + scoped CSS |
| Content | Astro Content Collections, Zod, Markdown |
| Images | `astro:assets`, Sharp |
| SEO | sitemap, hreflang, JSON-LD, OpenGraph |
| Tooling | pnpm |
| Hosting | Vercel |

## Project structure

```text
src/
├── components/        # reusable UI (Section, ProjectCard, Gallery, ...)
├── content/projects/  # one Markdown file per project, per language (fr/, en/)
├── data/profile.ts    # CV content (skills, experience, education), bilingual
├── i18n/              # languages, UI labels, path helpers
├── layouts/           # base layout + SEO meta
├── lib/               # content helpers
├── pages/             # routes (/, /en/, /projets/[slug], /en/projects/[slug], 404)
└── styles/            # design tokens + self-hosted fonts
public/                # fonts, favicons, OG image, CV, robots.txt
```

## Commands

| Command | Action |
| :--- | :--- |
| `pnpm install` | Install dependencies |
| `pnpm dev` | Start the dev server at `localhost:4321` |
| `pnpm build` | Build the production site to `./dist/` |
| `pnpm preview` | Preview the production build locally |
| `pnpm astro check` | Type-check the project |

## Adding a project

1. Duplicate an existing project file in **both** languages:
   `src/content/projects/fr/<slug>.md` and `src/content/projects/en/<slug>.md`
   (keep the same `slug`, set `lang` accordingly).
2. Drop screenshots in `src/assets/projects/<slug>/` (PNG or JPG) and reference
   them under `gallery` with `image: ../../../assets/projects/<slug>/<file>`.
3. Run `pnpm dev`. The project page and its home card are generated automatically.

## Deployment

Static build on Vercel (auto-detected, no adapter needed). If the deployed URL
changes, update the `SITE` constant in `astro.config.mjs`.
