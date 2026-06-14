---
lang: en
slug: nuit-d-encre
title: Nuit d'Encre
status: In progress
dates: 2025 → ongoing
description: "Social online-library platform: hybrid book search, gamification, reviews and recommendations."
featured: true
order: 1
stack: [TypeScript, React 19, GraphQL, TypeORM, PostgreSQL, Tailwind CSS, Docker]
stackDetail:
  - label: Frontend
    value: >-
      React 19 + TypeScript (Vite), React Router v7 (lazy loading, role-based
      guards), Apollo Client, React Hook Form, Tailwind CSS 4 (custom design
      system, accessibility, loading skeletons).
  - label: Backend
    value: >-
      Apollo Server 4, TypeGraphQL, TypeORM + PostgreSQL 15. JWT authentication
      in an HTTP-only cookie (Argon2), user/admin role management, two-layer
      validation (frontend + class-validator).
  - label: Architecture
    value: >-
      pnpm-workspaces monorepo, Docker Compose deployment (frontend, backend and
      PostgreSQL 15 as isolated services).
repo: https://github.com/AlexDDevv/Nuit-d-Encre
context: >-
  Full-stack design and development of a social online-library platform that
  brings together book discovery and reading tracking in a sober, fast
  interface.
features:
  - >-
    Hybrid book search (internal database + Google Books API + Open Library)
    with import and progressive enrichment of book records.
  - >-
    Gamification system: XP per action, level computation, unlockable titles and
    badges.
  - >-
    Reviews and votes (one review per user per book, XP bonus) and
    recommendations.
  - "Image uploads (covers, avatars, banners) via Cloudinary."
demonstrates: >-
  This project shows my ability to design and ship a complete full-stack
  application on my own, from data modelling to the interface. It highlights the
  design of an end-to-end typed GraphQL API, securing authentication and
  role-based authorization, integrating third-party APIs, and industrializing
  the environment through a containerized architecture. Beyond the technical
  side, the gamification and social features reflect product thinking focused on
  reader engagement.
gallery:
  - caption: Fig. 1 — Home page
  - caption: Fig. 2 — Book and author search
  - caption: Fig. 3 — Personal library
---
