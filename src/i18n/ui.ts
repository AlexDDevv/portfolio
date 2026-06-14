import type { Lang } from "./config";

export interface UIStrings {
  // titres de sections
  tSkills: string;
  tExperience: string;
  tEducation: string;
  tProjects: string;
  tContact: string;
  // libellés génériques
  tCode: string;
  tDemo: string;
  backLabel: string;
  // page projet
  dStackLabel: string;
  dContextLabel: string;
  dFeaturesLabel: string;
  dDemonstratesLabel: string;
  dPreviewsLabel: string;
  previewPlaceholder: string;
  // meta
  metaHomeTitle: string;
  metaHomeDescription: string;
}

export const ui: Record<Lang, UIStrings> = {
  fr: {
    tSkills: "Compétences techniques",
    tExperience: "Expériences",
    tEducation: "Formations",
    tProjects: "Projets",
    tContact: "Contact",
    tCode: "Code",
    tDemo: "Démo",
    backLabel: "← Retour à l'accueil",
    dStackLabel: "Stack technique",
    dContextLabel: "Contexte",
    dFeaturesLabel: "Fonctionnalités clés",
    dDemonstratesLabel: "Ce que le projet démontre",
    dPreviewsLabel: "Aperçus",
    previewPlaceholder: "Aperçu à venir",
    metaHomeTitle: "Alexis Delporte - Développeur web full-stack",
    metaHomeDescription:
      "Alexis Delporte, développeur full-stack (React, TypeScript, NestJS) basé à Écully, près de Lyon. Conception, développement et maintenance d'applications web.",
  },
  en: {
    tSkills: "Technical skills",
    tExperience: "Experience",
    tEducation: "Education",
    tProjects: "Projects",
    tContact: "Contact",
    tCode: "Code",
    tDemo: "Demo",
    backLabel: "← Back to home",
    dStackLabel: "Tech stack",
    dContextLabel: "Context",
    dFeaturesLabel: "Key features",
    dDemonstratesLabel: "What it demonstrates",
    dPreviewsLabel: "Previews",
    previewPlaceholder: "Preview coming soon",
    metaHomeTitle: "Alexis Delporte - Full-stack web developer",
    metaHomeDescription:
      "Alexis Delporte, full-stack web developer (React, TypeScript, NestJS) based near Lyon, France. Design, development and maintenance of web applications.",
  },
};
