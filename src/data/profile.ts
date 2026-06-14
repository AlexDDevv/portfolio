import type { Lang } from "@/i18n/config";

export const NAME = "Alexis Delporte";

/** Liens de contact — à compléter avec les vrais. */
export const CONTACT = {
  email: "alexddevs@gmail.com",
  linkedin: "https://www.linkedin.com/in/alexis-delporte",
  github: "https://github.com/AlexDDevv",
  x: "https://x.com/Sport_DevWeb",
};

export interface ContactItem {
  label: string;
  href: string;
}

/** CV au format PDF, un par langue — fichiers à déposer dans public/. */
export const CV_PATHS: Record<Lang, string> = {
  fr: "/cv-alexis-delporte-fr.pdf",
  en: "/cv-alexis-delporte-en.pdf",
};

const baseContactItems: ContactItem[] = [
  { label: "Email", href: `mailto:${CONTACT.email}` },
  { label: "LinkedIn", href: CONTACT.linkedin },
  { label: "GitHub", href: CONTACT.github },
  { label: "X", href: CONTACT.x },
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
  stackLine: string;
  bullets: string[];
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
  skills: SkillRow[];
  experiences: Experience[];
  formations: Formation[];
}

export const profile: Record<Lang, Profile> = {
  fr: {
    subtitle: "Concepteur Développeur d'Applications · Développeur full-stack",
    location: "Écully, Auvergne-Rhône-Alpes, France",
    accroche:
      "Développeur full-stack diplômé (CDA, RNCP 6), formé en alternance. Conception, développement et maintenance d'applications web, avec un focus React / TypeScript et un écosystème Node (NestJS).",
    skills: [
      { label: "Langages", value: "TypeScript / JavaScript" },
      {
        label: "Frontend",
        value:
          "React, Next, TanStack (Query, Router, Table, Start), Zustand, Tailwind, Styled Components, accessibilité",
      },
      { label: "Backend", value: "NestJS, PostgreSQL, MongoDB, Firebase" },
      { label: "Outils", value: "Docker, Jest, Bruno, Postman, Git, Figma" },
      { label: "Gestion de projet", value: "Kanban, SCRUM, méthodes agiles" },
      { label: "Langues", value: "Français (natif), Anglais (C1)" },
    ],
    experiences: [
      {
        role: "Développeur Full Stack junior",
        org: "Likewatt — éditeur de logiciel, Villeurbanne",
        dates: "Nov. 2025 → présent",
        stackLine:
          "React, Tailwind, TanStack, Zustand, NestJS, MongoDB, Docker.",
        bullets: [
          "Développement de nouvelles fonctionnalités du logiciel.",
          "Maintenance et amélioration continue de l'application.",
          "Conception de maquettes et intégration de design.",
        ],
      },
      {
        role: "Développeur Full Stack en alternance",
        org: "Likewatt — éditeur de logiciel, Villeurbanne",
        dates: "Sept. 2024 → Nov. 2025",
        stackLine: "React, Styled Components, NestJS, Docker, Firebase.",
        bullets: [
          "Prise en main progressive du code existant et compréhension de l'architecture du logiciel.",
          "Approfondissement de React et Styled Components via l'amélioration de fonctionnalités existantes et le développement de nouvelles.",
          "Participation aux rituels d'équipe (réunions, points techniques) et au suivi des tâches.",
          "Première expérience concrète avec NestJS et l'écosystème backend en environnement professionnel.",
          "Sensibilisation aux bonnes pratiques : refacto, amélioration du code existant et revues de code.",
        ],
      },
    ],
    formations: [
      {
        title: "Concepteur Développeur d'Applications",
        org: "Wild Code School (alternance) · RNCP niveau 6",
        dates: "2024 – 2025",
      },
      {
        title: "Développeur Intégrateur Web",
        org: "OpenClassrooms (en ligne) · RNCP niveau 5",
        dates: "2023 – 2024",
      },
    ],
  },
  en: {
    subtitle: "Application Designer-Developer · Full-stack developer",
    location: "Écully, Auvergne-Rhône-Alpes, France",
    accroche:
      "Graduate full-stack developer (CDA, RNCP 6), trained through a work-study program. Design, development and maintenance of web applications, with a focus on React / TypeScript and a Node ecosystem (NestJS).",
    skills: [
      { label: "Languages", value: "TypeScript / JavaScript" },
      {
        label: "Frontend",
        value:
          "React, Next, TanStack (Query, Router, Table, Start), Zustand, Tailwind, Styled Components, accessibility",
      },
      { label: "Backend", value: "NestJS, PostgreSQL, MongoDB, Firebase" },
      { label: "Tools", value: "Docker, Jest, Bruno, Postman, Git, Figma" },
      { label: "Project mgmt", value: "Kanban, SCRUM, agile methods" },
      { label: "Spoken", value: "French (native), English (C1)" },
    ],
    experiences: [
      {
        role: "Junior Full Stack developer",
        org: "Likewatt — software vendor, Villeurbanne",
        dates: "Nov. 2025 → present",
        stackLine:
          "React, Tailwind, TanStack, Zustand, NestJS, MongoDB, Docker.",
        bullets: [
          "Development of new software features.",
          "Maintenance and continuous improvement of the application.",
          "Mockup design and design integration.",
        ],
      },
      {
        role: "Full Stack developer (work-study)",
        org: "Likewatt — software vendor, Villeurbanne",
        dates: "Sept. 2024 → Nov. 2025",
        stackLine: "React, Styled Components, NestJS, Docker, Firebase.",
        bullets: [
          "Progressive onboarding onto the existing codebase and understanding of the software architecture.",
          "Deepened React and Styled Components skills by improving existing features and building new ones.",
          "Participation in team rituals (meetings, technical syncs) and task tracking.",
          "First hands-on experience with NestJS and the backend ecosystem in a professional setting.",
          "Exposure to best practices: refactoring, improving existing code and code reviews.",
        ],
      },
    ],
    formations: [
      {
        title: "Application Designer-Developer",
        org: "Wild Code School (work-study) · RNCP level 6",
        dates: "2024 – 2025",
      },
      {
        title: "Web Developer-Integrator",
        org: "OpenClassrooms (online) · RNCP level 5",
        dates: "2023 – 2024",
      },
    ],
  },
};
