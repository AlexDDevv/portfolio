import type { Lang } from "@/i18n/config";

export const NAME = "Alexis Delporte";

/** Liens de contact, à compléter avec les vrais. */
export const CONTACT = {
  email: "alexddevs@gmail.com",
  linkedin: "https://www.linkedin.com/in/alexis-delporte",
  github: "https://github.com/AlexDDevv",
  Téléphone: "06.68.05.34.83",
};

export interface ContactItem {
  label: string;
  href: string;
}

/** CV au format PDF, un par langue ; fichiers à déposer dans public/. */
export const CV_PATHS: Record<Lang, string> = {
  fr: "/cv_alexis_delporte_fr.pdf",
  en: "/cv_alexis_delporte_en.pdf",
};

const baseContactItems: ContactItem[] = [
  { label: "Email", href: `mailto:${CONTACT.email}` },
  { label: "LinkedIn", href: CONTACT.linkedin },
  { label: "GitHub", href: CONTACT.github },
  { label: "Téléphone", href: `tel:${CONTACT.Téléphone}` },
];

/** Liens de contact pour une langue (CV en tête). */
export function getContactItems(lang: Lang): ContactItem[] {
  return [{ label: "CV", href: CV_PATHS[lang] }, ...baseContactItems];
}

export interface SkillRow {
  label: string;
  value: string;
}

export interface Experience {
  role: string;
  org: string;
  dates: string;
}

export interface Formation {
  title: string;
  org: string;
  dates: string;
}

export interface Profile {
  subtitle: string;
  location: string;
  accroche: string;
  experiences: Experience[];
  formations: Formation[];
}

export const profile: Record<Lang, Profile> = {
  fr: {
    subtitle: "Concepteur Développeur d'Applications · Développeur full-stack",
    location: "Écully, Auvergne-Rhône-Alpes, France",
    accroche:
      "Développeur full-stack chez Likewatt depuis 2024 (React, TypeScript, NestJS). En parallèle, je conçois et développe mes propres applications : en voici une sélection, avec le code, les démos et mes choix techniques.",
    experiences: [
      {
        role: "Développeur Full Stack",
        org: "Likewatt, éditeur de logiciel, Villeurbanne",
        dates: "Nov. 2025 → présent",
      },
      {
        role: "Développeur Full Stack en alternance",
        org: "Likewatt, éditeur de logiciel, Villeurbanne",
        dates: "Sept. 2024 → Nov. 2025",
      },
    ],
    formations: [
      {
        title: "Concepteur Développeur d'Applications",
        org: "Wild Code School (alternance) · RNCP niveau 6",
        dates: "2024-2025",
      },
      {
        title: "Développeur Intégrateur Web",
        org: "OpenClassrooms (en ligne) · RNCP niveau 5",
        dates: "2023-2024",
      },
    ],
  },
  en: {
    subtitle: "Application Designer-Developer · Full-stack developer",
    location: "Écully, Auvergne-Rhône-Alpes, France",
    accroche:
      "Full-stack developer at Likewatt since 2024 (React, TypeScript, NestJS). On the side, I design and build my own applications: here is a selection, with the code, the demos and the technical choices behind them.",
    experiences: [
      {
        role: "Full Stack developer",
        org: "Likewatt, software vendor, Villeurbanne",
        dates: "Nov. 2025 → present",
      },
      {
        role: "Full Stack developer (work-study)",
        org: "Likewatt, software vendor, Villeurbanne",
        dates: "Sept. 2024 → Nov. 2025",
      },
    ],
    formations: [
      {
        title: "Application Designer-Developer",
        org: "Wild Code School (work-study) · RNCP level 6",
        dates: "2024-2025",
      },
      {
        title: "Web Developer-Integrator",
        org: "OpenClassrooms (online) · RNCP level 5",
        dates: "2023-2024",
      },
    ],
  },
};
