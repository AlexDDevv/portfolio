---
lang: en
slug: nuit-d-encre
title: Nuit d'Encre
status: Finished
dates: 2024 → 2026
description: "Full-stack social reading platform: personal library, reviews, activity feed and gamification, powered by an end-to-end typed GraphQL API."
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
      React 19 + Vite 5 SPA in strict TypeScript 5.9 (noUnusedLocals/Parameters), React Router 7 with every page except the home page lazy-loaded (15 lazy routes, each with a dedicated skeleton) and manual bundle splitting into vendor chunks (react-vendor, apollo, ui-vendor, icons) for better browser caching. Apollo Client 3.14 is the only data layer, with a hybrid caching strategy: cache-and-network / cache-first by default, explicit network-only for freshness-critical views (whoami, banners, favorites) and refetchQueries after mutations. Fetch logic is encapsulated in one hook per domain, and pure business logic is isolated in lib/ (profile statistics, filter mappings, formatting). The only global state is an AuthContext hydrated by the WHOAMI query. UI built with Tailwind CSS 4 + CVA + tailwind-merge, Radix UI primitives, React Hook Form (password rules aligned with the backend), Motion, Sonner, react-helmet-async, and Google sign-in via @react-oauth/google scoped to the authentication screens. Self-hosted fonts.
  - label: Backend
    value: >-
      Apollo Server 4 + TypeGraphQL 2 (rc) GraphQL API: 18 resolvers organized by domain, 13 TypeORM 0.3 entities serving as both database model and GraphQL types. Server-side computed fields via FieldResolvers (average rating, review count, library presence…) batched through per-request DataLoaders to eliminate N+1 queries. Authorization through @Authorized() and a customAuthChecker reading a signed JWT stored in an HTTP-only cookie (SameSite=Strict). Argon2 hashing, a password policy also enforced on password changes, Google OAuth (google-auth-library), class-validator validation, and a custom fixed-window rate limiter on login, sign-up, Google auth and book import. Server-signed Cloudinary uploads, with no key exposed to the browser.
  - label: Data & external integrations
    value: >-
      PostgreSQL 15 with UUID primary keys (gen_random_uuid()) and /<uuid>-<slug> URLs. Schema versioned through TypeORM migrations (synchronize: false), replayed at boot along with idempotent seeding of the admin account and gamification titles. Business constraints enforced at the database level (one review per user per book, unique author full name). Google Books API and Open Library services queried in parallel (Promise.allSettled) with ISBN-13 deduplication.
  - label: Gamification
    value: >-
      Transactional XP service: the XP update and its audit log (UserActions) are written in the same transaction. Each gain carries a stable key (book id, ISBN, author or review/voter pair), and a partial PostgreSQL unique index on (user, type, xpKey) guarantees at the database level that an action is credited only once per target. The unique violation (code 23505) is caught to handle concurrent requests. Removing and re-adding a recommendation therefore earns nothing, while recommending another book is credited normally. Levels derived from total XP, titles unlocked at thresholds, and a bonus for reviews over 200 characters.
  - label: Testing & quality
    value: >-
      A testing strategy targeting sensitive logic rather than exhaustive coverage. Backend: 20 Jest files covering authentication (login, JWT session, password change, Google OAuth), GraphQL access control, authorization rules, XP (including per-target deduplication), GDPR (export and erasure), the rate limiter and mutation resolvers (reviews, votes, comments, recommendations, library, follows, favorites). These tests call resolver methods directly with factories (makeUser, makeContext, stubPersistence) and TypeORM statics mocked via jest.spyOn, with no database; worker count is capped to keep ts-jest memory in check. Frontend: 7 Vitest files on pure logic (activity log aggregation and labels with a frozen clock via vi.setSystemTime, filter labels sent to the server, display helpers, password policy, JSON export, activity feed links, form validation). Zero-warning ESLint 9 on both workspaces, Prettier with Tailwind class sorting, conventional commits.
  - label: Infrastructure & DevOps
    value: >-
      pnpm workspace monorepo (app/frontend, app/backend). Development on Docker Compose (front, back, PostgreSQL 15 with healthcheck, isolated networks, hot reload) with a Vite /api proxy. Node 24 Alpine images, multi-stage production builds, frontend served by nginx-unprivileged. Production on CapRover as three apps: PostgreSQL, a Node backend, and an nginx frontend serving the SPA and proxying /api over the internal network (same origin, preserving the SameSite=Strict cookie), plus a staging environment. GitHub Actions CI with two parallel jobs (lint, tests and Vite build on the frontend; lint, typecheck and tests on the backend): steps ordered from cheapest to most expensive, read-only token, per-job timeout, cancellation of stale runs. The master branch is protected by a GitHub ruleset (required CI checks, no force push), so a commit only lands there after passing on the test branch.
repo: https://github.com/AlexDDevv/Nuit-d-Encre
demo: https://nuitdencre.fr/
context: >-
  Nuit d'Encre is an online social library where each reader keeps a personal library, tracks their reading, publishes reviews and follows other readers, all within a distinctive nocturnal art direction. Started in late 2024, the project was taken up again and brought to production level (security, GDPR, testing, CI, deployment), with the goal of making it a credible technical showcase rather than a simple CRUD app. It is deployed at nuitdencre.fr.
features:
  - >-
    Hybrid book search combining the internal database, Google Books and Open Library, with import of external titles through an ISBN-based preview page and automatic creation of the author page.
  - >-
    Personal library with reading statuses, progress, ratings and favorite books, filterable by status, format and language.
  - >-
    Complete social layer: reviews (one per book per reader), comments, "helpful" votes, recommendations, follows between readers and an activity feed of followed users.
  - >-
    Gamification: XP for every action, levels, titles unlocked at thresholds, and flagging of incomplete book pages, with rewards for readers who complete them.
  - >-
    Admin panel with an analytics dashboard and management of users, books, authors, categories, reviews and contextual site banners.
  - >-
    Secure, GDPR-compliant accounts: email/password or Google sign-in, privacy settings, personal data export and account deletion.
demonstrates: >-
  This project shows the ability to design and evolve an end-to-end typed full-stack application, from database to deployment, over nearly two years. Several choices reflect real command of classic GraphQL and data problems: per-request DataLoaders against N+1 queries, calculations centralized on the server, business constraints enforced in the database, and transactional, idempotent XP granting guaranteed at the database level. The testing strategy is deliberate rather than an afterthought: it targets what is costly when broken (authorization, XP, GDPR, derived display logic) and isolates pure logic so it can be tested without heavy infrastructure. Together with a strict CI, a protected branch and a documented production infrastructure, this approach reflects a genuine commitment to shipping code that is maintainable and reliable, not just functional.
gallery:
  - caption: "Fig. 1: Book search"
    description: "Catalog page with hybrid search combining the internal database, Google Books API and Open Library, with progressive completion of imported book pages."
    image: ../../../assets/projects/nuit-d-encre/books.png
  - caption: "Fig. 2: Book page"
    description: "Book detail: server-computed average ratings, reviews (one per user, XP bonus for detailed ones), recommendations and votes."
    image: ../../../assets/projects/nuit-d-encre/bookDetails.png
  - caption: "Fig. 3: Author page"
    description: "Author presentation and bibliography, populated automatically when a book is imported."
    image: ../../../assets/projects/nuit-d-encre/authorDetails.png
  - caption: "Fig. 4: Personal library"
    description: "Reading tracking by status ('Your shelves'), with filters by format, language and status."
    image: ../../../assets/projects/nuit-d-encre/userLibrary.png
  - caption: "Fig. 5: User profile"
    description: "Profile page: reading statistics, XP progression, unlocked badges."
    image: ../../../assets/projects/nuit-d-encre/profil_1.png
  - caption: "Fig. 6: User profile"
    image: ../../../assets/projects/nuit-d-encre/profil_2.png
  - caption: "Fig. 7: User profile"
    image: ../../../assets/projects/nuit-d-encre/profil_3.png
  - caption: "Fig. 8: Social activity feed"
    description: "Activity of followed readers: follows, published reviews, recommendations."
    image: ../../../assets/projects/nuit-d-encre/activity.png
  - caption: "Fig. 9: Admin panel"
    description: "Back office: 7 tabs (users, books, authors, categories, reviews, banners) and an analytics dashboard."
    image: ../../../assets/projects/nuit-d-encre/admin.png
---
