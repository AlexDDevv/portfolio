---
lang: fr
slug: grindrise
title: Grindrise
status: En cours
dates: 2026 → en cours # premier commit le 10/08/2026, dernier le 27/08/2026
description: "Application mobile de suivi sportif qui transforme chaque séance en progression RPG (classes, XP, niveaux, récit à débloquer), avec un modèle anti-triche entièrement arbitré par le serveur."
order:
stack:
  [
    React Native,
    Expo,
    TypeScript,
    Zustand,
    NestJS,
    Supabase,
    PostgreSQL,
    Redis,
    BullMQ,
    Docker,
    CapRover,
    Jest,
  ]
stackDetail:
  - label: Mobile
    value: >-
      Expo SDK 57 (workflow managed, sans dossiers natifs), React Native 0.86, React 19.2 et TypeScript 6.0.
      Navigation avec React Navigation 7 : une pile d'onboarding, trois onglets et des piles imbriquées.
      État global avec Zustand 5. Le brouillon d'onboarding est persisté dans AsyncStorage via le middleware
      `persist`, et la séance de musculation en cours vit dans un store qui délègue chaque action à des fonctions pures testées.
      Le code est organisé par feature (auth, onboarding, strength, programs, narrative, progression…).
      Le design system « Braise & parchemin » est fait de tokens centralisés (couleurs, typo, espacements, effets) :
      aucune valeur en dur hors de `theme/`. Composants SVG sur mesure avec react-native-svg (médaillon de niveau, hexagones, surfaces à coins coupés).
      Une liste réordonnable par glisser-déposer est écrite sans dépendance native (PanResponder + Animated) :
      un seul responder au niveau de la liste, poignée dédiée, défilement automatique aux bords et ressorts exécutés en natif.
  - label: Backend
    value: >-
      API NestJS 11 en modular monolith : modules étanches (workouts, gamification, narrative, programs, exercises,
      notifications, entitlements) qui ne communiquent que par leurs services exportés.
      Un guard global vérifie localement les JWT Supabase contre le JWKS public avec `jose`, sans aller-retour réseau.
      Les algorithmes sont en liste blanche (ES256/RS256) pour fermer l'attaque par confusion d'algorithme, et les routes publiques passent par un décorateur `@Public`.
      Les DTO sont validés avec class-validator, y compris des validateurs de cohérence sur mesure.
      La configuration est validée au démarrage : l'API refuse de démarrer si une variable manque.
      Les règles d'XP, de streak et de déblocage narratif sont isolées en fonctions pures, testables sans base.
  - label: Base de données
    value: >-
      Supabase (PostgreSQL 17, Auth) avec 16 tables et une Row Level Security deny-by-default.
      Le client mobile lit en direct avec la clé `anon`, mais toute écriture sensible passe par l'API (clé `service_role`).
      Une séance et son XP sont écrites dans une même transaction via une fonction RPC Postgres (`log_workout_with_xp`).
      La table `xp_events` est append-only, garantie par un trigger.
      La courbe de niveaux est stockée en base, si bien qu'un rééquilibrage est rétroactif (`recomputeProgress`) sans réécrire l'historique.
      Les migrations SQL sont versionnées et les types TypeScript générés depuis le schéma, puis partagés entre l'API et le mobile.
  - label: Messagerie & notifications
    value: >-
      Producteur BullMQ sur Redis (ioredis) pour les emails de passage de niveau, consommés par un worker déployé séparément.
      Le producteur est réglé pour échouer vite (pas de file hors ligne, une seule tentative) afin de ne jamais ralentir une requête utilisateur.
      Les liens de désabonnement sont signés en HMAC-SHA256 avec comparaison à temps constant et une portée versionnée dans le message signé.
      Ils fonctionnent sans session. Connexion par code OTP à usage unique envoyé par email (relais SMTP Brevo branché sur Supabase Auth, gabarits sur mesure).
  - label: Infrastructure
    value: >-
      Image Docker multi-stage (node:22-alpine) : compilation, dépendances de production seules, puis image d'exécution.
      L'image tourne en utilisateur non-root, avec tini comme PID 1 pour un arrêt propre sur SIGTERM et un HEALTHCHECK sur `/health`.
      Déploiement sur un VPS OVH via CapRover, avec deux environnements isolés (production et test : projets Supabase, instances Redis et workers distincts).
      Builds mobiles cloud via EAS Build avec trois profils (development, preview, production).
      Le monorepo pnpm n'utilise volontairement pas de workspace, parce que les toolchains Metro et Nest CLI sont disjointes.
  - label: Qualité & tests
    value: >-
      Environ 450 cas de test au total, avec Jest partout.
      Côté API, tests unitaires des règles métier et des services, plus des tests e2e avec Supertest et un serveur JWKS simulé.
      Côté mobile, jest-expo sur la logique pure (état de séance, durée, statistiques, construction du payload).
      Les migrations et les policies RLS sont testées dans un Postgres embarqué (PGlite en WASM), sans Docker. Ces tests vérifient notamment qu'un client ne peut pas s'attribuer d'XP.
      ESLint et Prettier complètent l'outillage, et l'historique suit les Conventional Commits.
repo: https://github.com/AlexDDevv/GrindRise
context: >-
  Grindrise est une application mobile de suivi sportif (course, musculation et autres sports d'endurance) qui ajoute une couche de gamification RPG pour entretenir la régularité.
  Le joueur choisit une classe, gagne de l'XP à chaque séance, monte de niveau et débloque des fragments de récit.
  L'enjeu central est de rendre cette progression crédible : comme toute métrique saisie est falsifiable, le serveur est seul à attribuer l'XP, selon un barème pensé pour que tricher rapporte peu.
  Le projet est en développement actif : la boucle séance → XP → niveau fonctionne de bout en bout, tandis que l'historique, les analytics de progression et le premier build mobile publié restent à venir.
features:
  - >-
    Onboarding guidé en plusieurs étapes (bienvenue, choix du sport, choix de la classe) puis connexion sans mot de passe par code à usage unique reçu par email.
    Le brouillon est conservé si l'utilisateur quitte l'app pour aller chercher son code.
  - >-
    Enregistrement de séances par sport avec calcul d'XP côté serveur : 60 XP de présence et jusqu'à 40 XP d'effort sur une courbe concave.
    Des garde-fous anti-triche s'appliquent (deux séances créditées par jour, 30 minutes minimum entre deux, 7 jours d'antériorité maximum).
    Une animation annonce le palier franchi.
  - >-
    Suivi de musculation exercice par exercice et série par série, avec un catalogue filtrable par groupe musculaire.
    L'utilisateur peut créer ses propres exercices, suivre des statistiques de séance en direct et consulter un récapitulatif final.
  - >-
    Programmes d'entraînement personnalisés, organisés en jours types avec exercices réordonnables par glisser-déposer.
    Une séance peut être démarrée directement depuis un jour type.
  - >-
    Streak calculé en jours locaux selon le fuseau horaire du joueur, avec des bonus fixes aux paliers (3, 7, 14, 30 jours, puis tous les 30 jours).
  - >-
    Système narratif en cours de construction : le mécanisme de déblocage (trame principale liée au niveau global, trames annexes par sport) est en place côté serveur, le contenu et le codex restent à intégrer.
    Des emails de passage de niveau sont envoyés, avec un désabonnement en un clic.
demonstrates: >-
  Ce projet illustre une capacité à concevoir un système complet de bout en bout (mobile, API, base, infrastructure) en raisonnant d'abord en termes de modèle de menace.
  Le client n'écrit jamais d'XP, la RLS est testée automatiquement et le barème est conçu pour que tricher rapporte peu.
  Il montre aussi une vraie discipline d'ingénierie : logique métier isolée en fonctions pures testées cas limite par cas limite, transactions atomiques en base,
  compromis explicitement documentés dans le code (vérification JWT locale contre révocation immédiate, geste en thread JS contre dépendance native)
  et un déploiement conteneurisé durci sur deux environnements isolés.
  Enfin, la réflexion produit est visible dans des choix comme le retrait du bonus d'effort en musculation (le tonnage est trop facile à gonfler) ou le streak calé sur le fuseau local du joueur.
gallery:
---
