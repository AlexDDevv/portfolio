export const LANGUAGES = ["fr", "en"] as const;
export type Lang = (typeof LANGUAGES)[number];

export const DEFAULT_LANG: Lang = "fr";

/** Langue déduite de l'URL (`/en/...` → "en", sinon "fr"). */
export function getLangFromUrl(url: URL): Lang {
  const [, seg] = url.pathname.split("/");
  return (LANGUAGES as readonly string[]).includes(seg) ? (seg as Lang) : DEFAULT_LANG;
}

/** L'autre langue (pour le sélecteur FR · EN). */
export function otherLang(lang: Lang): Lang {
  return lang === "fr" ? "en" : "fr";
}

/** URL de l'accueil pour une langue. */
export function homePath(lang: Lang): string {
  return lang === "fr" ? "/" : "/en/";
}

/** URL d'une page projet pour une langue. */
export function projectPath(lang: Lang, slug: string): string {
  return lang === "fr" ? `/projets/${slug}` : `/en/projects/${slug}`;
}

export const htmlLang: Record<Lang, string> = {
  fr: "fr-FR",
  en: "en-US",
};
