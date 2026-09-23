---
lang: fr
slug: nuit-d-encre
title: Nuit d'Encre
status: Terminé
dates: 2024 → 2026
description: "Plateforme sociale de lecture full-stack : bibliothèque personnelle, critiques, fil d'activité et gamification, portée par une API GraphQL typée de bout en bout."
order: 1
stack:
  [
    React 19,
    TypeScript,
    Vite,
    Tailwind CSS 4,
    Apollo Client,
    GraphQL,
    Apollo Server 4,
    TypeGraphQL,
    TypeORM,
    PostgreSQL 15,
    Vitest,
    Jest,
    Docker,
    pnpm,
    GitHub Actions,
    CapRover,
    nginx,
    Cloudinary,
  ]
stackDetail:
  - label: Frontend
    value: >-
      SPA React 19 + Vite 5 en TypeScript 5.9 strict (noUnusedLocals/Parameters), React Router 7 avec lazy loading de toutes les pages sauf l'accueil (15 routes lazy, skeleton dédié par page) et découpage manuel du bundle en chunks vendor (react-vendor, apollo, ui-vendor, icons) pour optimiser le cache navigateur. Apollo Client 3.14 comme unique couche de données, avec une stratégie de cache hybride : cache-and-network / cache-first par défaut, network-only explicite pour les vues critiques (whoami, bannières, favoris) et refetchQueries après mutation. Logique de fetch encapsulée dans un hook par domaine, logique métier pure isolée dans lib/ (statistiques de profil, mappings de filtres, formatage). Seul état global : un AuthContext hydraté par la query WHOAMI. UI en Tailwind CSS 4 + CVA + tailwind-merge, primitives Radix UI, React Hook Form (règles de mot de passe alignées sur le backend), Motion, Sonner, react-helmet-async, auth Google via @react-oauth/google limitée aux écrans d'authentification. Polices auto-hébergées.
  - label: Backend
    value: >-
      API GraphQL Apollo Server 4 + TypeGraphQL 2 (rc) : 18 resolvers organisés par domaine, 13 entités TypeORM 0.3 servant à la fois de modèle de base et de types GraphQL. Champs calculés côté serveur via FieldResolvers (note moyenne, nombre de critiques, présence en bibliothèque…) batchés par des DataLoaders instanciés par requête pour éliminer les N+1. Autorisation par @Authorized() et un customAuthChecker lisant un JWT en cookie HTTP-only signé (SameSite=Strict). Hachage Argon2, politique de mot de passe imposée aussi au changement de mot de passe, OAuth Google (google-auth-library), validation class-validator, rate limiter maison en fenêtre fixe sur login, inscription, auth Google et import de livres. Uploads Cloudinary signés côté serveur, aucune clé exposée au navigateur.
  - label: Données & intégrations externes
    value: >-
      PostgreSQL 15 avec PK UUID (gen_random_uuid()), URLs de la forme /<uuid>-<slug>. Schéma versionné par migrations TypeORM (synchronize: false), rejouées au boot avec seed idempotent de l'admin et des titres de gamification. Contraintes métier garanties en base (une critique par utilisateur et par livre, unicité du nom d'auteur). Services Google Books API et Open Library interrogés en parallèle (Promise.allSettled) avec dédoublonnage par ISBN-13.
  - label: Gamification
    value: >-
      Service d'attribution d'XP transactionnel : la mise à jour de l'XP et son journal d'audit (UserActions) sont écrits dans une même transaction. Déduplication par clé stable (utilisateur, type d'action, xpKey basée sur l'id du livre, l'ISBN ou le couple critique/votant) : annuler puis refaire une action ne rapporte rien de plus. Niveaux dérivés du total d'XP, titres débloqués par paliers, bonus pour les critiques de plus de 200 caractères.
  - label: Tests & qualité
    value: >-
      Stratégie de tests ciblée sur la logique sensible plutôt que sur une couverture exhaustive. Backend : 20 fichiers Jest couvrant l'authentification, le contrôle d'accès GraphQL, les règles d'autorisation, l'XP (y compris la déduplication par cible), le RGPD (export et effacement), le rate limiter et les resolvers de mutations (critiques, votes, commentaires, recommandations, bibliothèque, abonnements, favoris). Ces tests appellent directement les méthodes des resolvers avec des factories (makeUser, makeContext, stubPersistence) et des statiques TypeORM mockés via jest.spyOn, sans base de données ; nombre de workers plafonné pour maîtriser la mémoire de ts-jest. Frontend : 7 fichiers Vitest sur la logique pure (agrégation et libellés du journal d'activité avec horloge figée via vi.setSystemTime, libellés de filtres envoyés au serveur, helpers d'affichage, politique de mot de passe, export JSON, liens du fil d'activité, validation de formulaire). ESLint 9 à zéro warning sur les deux workspaces, Prettier avec tri des classes Tailwind, commits conventionnels.
  - label: Infrastructure & DevOps
    value: >-
      Monorepo pnpm workspace (app/frontend, app/backend). Développement sous Docker Compose (front, back, PostgreSQL 15 avec healthcheck, réseaux séparés, hot reload), proxy Vite /api. Images Node 24 Alpine, builds de production multi-stage, frontend servi par nginx-unprivileged. Production sur CapRover en trois apps : PostgreSQL, backend Node, frontend nginx servant la SPA et proxifiant /api sur le réseau interne (même origine, cookie SameSite=Strict préservé), avec un environnement de staging. CI GitHub Actions en deux jobs parallèles (lint, tests, build Vite côté front ; lint, typecheck, tests côté back) : étapes ordonnées de la moins coûteuse à la plus coûteuse, jeton en lecture seule, timeout par job, annulation des runs obsolètes. Branche master protégée par un ruleset GitHub (checks CI requis, force push interdit) : un commit n'y arrive qu'après validation sur la branche test.
repo: https://github.com/AlexDDevv/Nuit-d-Encre
context: >-
  Nuit d'Encre est une bibliothèque sociale en ligne où chaque lecteur tient sa bibliothèque, suit ses lectures, publie des critiques et suit d'autres lecteurs, dans une direction artistique nocturne assumée. Démarré fin 2024, le projet a été repris et amené vers un niveau production (sécurité, RGPD, tests, CI, déploiement) avec pour objectif d'en faire une vitrine technique crédible, et non un simple CRUD. Il est déployé sur nuitdencre.fr.
features:
  - >-
    Recherche hybride de livres qui combine la base interne, Google Books et Open Library, avec import d'un ouvrage externe via une page de prévisualisation par ISBN et création automatique de la fiche auteur.
  - >-
    Bibliothèque personnelle avec statuts de lecture, progression, notes et livres favoris, filtrable par statut, format et langue.
  - >-
    Couche sociale complète : critiques (une par livre et par lecteur), commentaires, votes « utile », recommandations, abonnements entre lecteurs et fil d'activité des personnes suivies.
  - >-
    Gamification : XP à chaque action, niveaux, titres débloqués par paliers, et signalement des fiches incomplètes récompensées quand un lecteur les complète.
  - >-
    Panel d'administration avec dashboard analytique et gestion des utilisateurs, livres, auteurs, catégories, critiques et bannières contextuelles publiées sur le site.
  - >-
    Compte sécurisé et conforme RGPD : connexion par e-mail/mot de passe ou Google, réglages de confidentialité, export des données personnelles et suppression du compte.
demonstrates: >-
  Ce projet illustre la capacité à concevoir et faire évoluer une application full-stack typée de bout en bout, de la base de données jusqu'au déploiement, sur près de deux ans. Plusieurs choix montrent une vraie maîtrise des problèmes classiques du GraphQL et des données : DataLoaders par requête contre les N+1, calculs centralisés côté serveur, contraintes métier garanties en base, et attribution d'XP transactionnelle et idempotente. La stratégie de tests est pensée plutôt que subie : elle cible ce qui coûte cher en cas de bug (autorisations, XP, RGPD, logique d'affichage dérivée) et isole la logique pure pour la rendre testable sans infrastructure lourde. Plusieurs bugs réels ont d'ailleurs été corrigés au fil de cette mise sous tests. Combinée à une CI stricte, une branche protégée et une infrastructure de production documentée, cette démarche reflète une exigence d'ingénieur qui livre du code maintenable et fiable, pas seulement fonctionnel.
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
