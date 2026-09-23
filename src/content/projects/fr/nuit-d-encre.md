---
lang: fr
slug: nuit-d-encre
title: Nuit d'Encre
status: En cours
dates: 2025 → en cours
description: "Plateforme sociale de bibliothèque en ligne : recherche hybride de livres, gamification, critiques et recommandations."
order: 1
stack:
  [TypeScript, React 19, GraphQL, TypeORM, PostgreSQL, Tailwind CSS, Docker]
stackDetail:
  - label: Frontend
    value: >-
      React 19 + TypeScript (Vite), React Router v7 (lazy loading, guards par
      rôle), Apollo Client, React Hook Form, Tailwind CSS 4 (design system
      maison, accessibilité, skeletons de chargement).
  - label: Backend
    value: >-
      Apollo Server 4, TypeGraphQL, TypeORM + PostgreSQL 15. Authentification
      JWT en cookie HTTP-only (Argon2), gestion des rôles utilisateur/admin,
      validation double couche (frontend + class-validator).
  - label: Architecture
    value: >-
      Monorepo pnpm workspaces, déploiement Docker Compose (frontend, backend et
      PostgreSQL 15 en services isolés).
repo: https://github.com/AlexDDevv/Nuit-d-Encre
demo: https://nuitdencre.fr/
context: >-
  Conception et développement full-stack d'une plateforme sociale de
  bibliothèque en ligne, qui réunit la découverte d'ouvrages et le suivi de ses
  lectures dans une interface sobre et rapide.
features:
  - >-
    Recherche hybride de livres (base interne + Google Books API + Open Library)
    avec import et complétion progressive des fiches.
  - >-
    Système de gamification : XP par action, calcul de niveaux, titres et badges
    débloquables.
  - >-
    Critiques et votes (une critique par utilisateur et par livre, bonus d'XP)
    et recommandations.
  - "Upload d'images (couvertures, avatars, bannières) via Cloudinary."
demonstrates: >-
  Ce projet illustre ma capacité à concevoir et livrer seul une application
  full-stack complète, de la modélisation des données jusqu'à l'interface. Il
  met en avant la conception d'une API GraphQL typée de bout en bout, la
  sécurisation de l'authentification et des autorisations par rôles,
  l'intégration d'APIs tierces et l'industrialisation de l'environnement via une
  architecture conteneurisée. Au-delà de la technique, la gamification et la
  dimension sociale traduisent une réflexion produit centrée sur l'engagement
  des lecteurs.
gallery:
  - caption: "Fig. 1 : Recherche de livres"
    description: "Page catalogue avec recherche hybride combinant base interne, Google Books API et Open Library, avec complétion progressive des fiches importées."
    image: ../../../assets/projects/nuit-d-encre/books.png
  - caption: "Fig. 2 : Fiche d'un livre"
    description: "Détail d'un ouvrage : notes moyennes calculées côté serveur, critiques (une par utilisateur, bonus XP si détaillée), recommandations et votes."
    image: ../../../assets/projects/nuit-d-encre/bookDetails.png
  - caption: "Fig. 3 : Fiche auteur"
    description: "Présentation et bibliographie de l'auteur, alimentée automatiquement lors de l'import d'un livre."
    image: ../../../assets/projects/nuit-d-encre/authorDetails.png
  - caption: "Fig. 4 : Bibliothèque personnelle"
    description: "Suivi de lecture par statut ('Vos rayons'), avec filtres par format, langue et statut."
    image: ../../../assets/projects/nuit-d-encre/userLibrary.png
  - caption: "Fig. 5 : Profil utilisateur"
    description: "Page profil : statistiques de lecture, progression XP, badges débloqués."
    image: ../../../assets/projects/nuit-d-encre/profil_1.png
  - caption: "Fig. 6 : Profil utilisateur"
    image: ../../../assets/projects/nuit-d-encre/profil_2.png
  - caption: "Fig. 7 : Profil utilisateur"
    image: ../../../assets/projects/nuit-d-encre/profil_3.png
  - caption: "Fig. 8 : Fil d'activité social"
    description: "Activité des lecteurs suivis : abonnements, critiques publiées, recommandations."
    image: ../../../assets/projects/nuit-d-encre/activity.png
  - caption: "Fig. 9 : Panel admin"
    description: "Back-office : 7 onglets (utilisateurs, livres, auteurs, catégories, critiques, bannières) et dashboard analytique."
    image: ../../../assets/projects/nuit-d-encre/admin.png
---
