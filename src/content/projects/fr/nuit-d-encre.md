---
lang: fr
slug: nuit-d-encre
title: Nuit d'Encre
status: En cours
dates: 2025 → en cours
description: "Plateforme sociale de bibliothèque en ligne : recherche hybride de livres, gamification, critiques et recommandations."
featured: true
order: 1
stack: [TypeScript, React 19, GraphQL, TypeORM, PostgreSQL, Tailwind CSS, Docker]
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
    image: ../../../assets/projects/nuit-d-encre/books.png
  - caption: "Fig. 2 : Fiche d'un livre"
    image: ../../../assets/projects/nuit-d-encre/bookDetails.png
  - caption: "Fig. 3 : Fiche d'un auteur"
    image: ../../../assets/projects/nuit-d-encre/authorDetails.png
  - caption: "Fig. 4 : Bibliothèque personnelle"
    image: ../../../assets/projects/nuit-d-encre/userLibrary.png
---
