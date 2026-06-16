---
lang: fr
slug: ask-and-trust
title: Ask&Trust
status: Terminé
dates: 2025 → 2025 # février 2025 → octobre 2025 (commits git)
description: "Plateforme SaaS de création et de diffusion de sondages professionnels, avec API GraphQL typée de bout en bout et paiement Stripe intégré."
order: 2
stack:
  [
    React,
    TypeScript,
    GraphQL,
    Apollo,
    Node.js,
    TypeORM,
    PostgreSQL,
    Stripe,
    Docker,
    Nginx,
  ]
stackDetail:
  - label: Frontend
    value: >-
      SPA React 19 + TypeScript 5.7 buildée avec Vite 6. Couche data via Apollo
      Client 3.13 (cache GraphQL), routing avec React Router 7, formulaires avec
      react-hook-form. UI construite sur Radix UI (composants accessibles) et
      TailwindCSS 4 avec class-variance-authority pour les variantes, animations
      Motion (Framer Motion), notifications Sonner, SEO via react-helmet-async.
      Intégration paiement front avec @stripe/react-stripe-js. Hooks métier
      personnalisés (useSurvey, useQuestions, useAnswers, useDebounce, etc.).
  - label: Backend / API
    value: >-
      API GraphQL code-first avec Apollo Server 4 et Type-GraphQL 2.0 (schéma
      généré depuis les décorateurs TypeScript). Persistance via TypeORM 0.3 sur
      PostgreSQL 15, avec entités décorées exposées directement au schéma GraphQL.
      Resolvers séparés par domaine (auth, survey, questions, answers, category,
      payment, survey-responses). Validation des entrées avec class-validator.
  - label: Sécurité & Auth
    value: >-
      Authentification JWT stockée dans un cookie HTTP-only, secure, sameSite
      strict et signé (protection XSS/CSRF). Mots de passe hachés avec Argon2.
      Contrôle d'accès basé sur les rôles via un AuthChecker Type-GraphQL custom.
      Rate limiter natif maison (fenêtre glissante en mémoire) avec des seuils
      distincts par type d'opération (auth, mutations, recherches, requêtes), plus
      middleware de timeout et masquage d'email.
  - label: Paiement
    value: >-
      Intégration Stripe 18 côté serveur : création de PaymentIntent pour l'achat
      de packs de quotas de sondages, persistance des paiements en base, et
      traitement des webhooks (payment_intent.succeeded / payment_failed) avec
      vérification de signature.
  - label: Architecture & Infrastructure
    value: >-
      Monorepo en npm workspaces (app/frontend + app/backend). Conteneurisation
      Docker Compose multi-environnements (dev, staging, prod, test) avec
      PostgreSQL en healthcheck et Nginx en reverse proxy. Migrations TypeORM
      versionnées (init schema, seed catégories, cascade delete). Caddy et scripts
      de déploiement côté prod, plan de reprise après sinistre documenté.
  - label: Qualité & CI/CD
    value: >-
      Pipelines GitHub Actions (lint + audit, tests client, build Docker
      staging/prod, génération de doc, contrôle de la branche source des PR).
      Tests Jest côté backend (resolvers + API) et Vitest + Testing Library côté
      frontend. Hooks Git Husky + lint-staged, ESLint, Prettier, Conventional
      Commits avec versioning automatisé (standard-version) et documentation
      TypeDoc publiée sur GitHub Pages.
repo: https://github.com/WildCodeSchool/2409-wns-rouge-ask-and-trust
context: >-
  Ask&Trust est une plateforme SaaS permettant à des professionnels de créer,
  diffuser et analyser des sondages en ligne, monétisée via l'achat de quotas de
  sondages. Le projet a été développé en équipe (4 développeurs) dans le cadre de
  la formation Wild Code School, avec l'objectif de livrer une application
  full-stack complète, sécurisée et déployable en production.
features:
  - >-
    Éditeur de sondages avec une boîte à outils permettant de composer des
    questions de types variés (texte, choix unique/radio, choix multiple/checkbox)
    dont les options sont stockées en JSONB.
  - >-
    Prévisualisation du sondage avant publication et partage d'un lien public de
    réponse accessible sans compte.
  - >-
    Collecte des réponses des participants et consultation des résultats par le
    créateur du sondage.
  - >-
    Authentification complète (inscription, connexion, rôles) avec gestion de
    compte : changement de mot de passe et suppression de compte conforme RGPD
    (double confirmation par mot de passe + texte de validation).
  - >-
    Achat de packs de quotas de sondages via paiement par carte Stripe, avec suivi
    de l'historique des paiements.
  - >-
    Espace d'administration et tableau de bord pour la gestion des contenus et des
    utilisateurs.
demonstrates: >-
  Ce projet illustre la maîtrise d'une stack TypeScript full-stack moderne et
  d'une API GraphQL typée de bout en bout (Type-GraphQL + Apollo + TypeORM). Il
  démontre une vraie attention à la sécurité applicative : JWT en cookie
  HTTP-only signé, hachage Argon2, contrôle d'accès par rôles, rate limiting
  maison et conformité RGPD. La gestion d'un monorepo conteneurisé multi-
  environnements, des migrations de base, de l'intégration d'un système de
  paiement avec webhooks, ainsi qu'une chaîne CI/CD et qualité aboutie
  (tests, lint, commits conventionnels, doc générée) témoignent d'une approche
  d'ingénierie rigoureuse et orientée production, dans un contexte de travail en
  équipe.
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
