---
lang: en
slug: ask-and-trust
title: Ask&Trust
status: Completed
dates: 2025 → 2025 # February 2025 → October 2025 (git commits)
description: "A SaaS platform for creating and distributing professional surveys, featuring an end-to-end typed GraphQL API and integrated Stripe payments."
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
      React 19 + TypeScript 5.7 SPA built with Vite 6. Data layer powered by
      Apollo Client 3.13 (GraphQL cache), routing with React Router 7, forms with
      react-hook-form. UI built on Radix UI (accessible components) and TailwindCSS
      4 with class-variance-authority for variants, Motion (Framer Motion)
      animations, Sonner notifications, and SEO via react-helmet-async. Front-end
      payment integration with @stripe/react-stripe-js. Custom domain hooks
      (useSurvey, useQuestions, useAnswers, useDebounce, etc.).
  - label: Backend / API
    value: >-
      Code-first GraphQL API with Apollo Server 4 and Type-GraphQL 2.0 (schema
      generated from TypeScript decorators). Persistence via TypeORM 0.3 on
      PostgreSQL 15, with decorated entities exposed directly to the GraphQL
      schema. Domain-separated resolvers (auth, survey, questions, answers,
      category, payment, survey-responses). Input validation with class-validator.
  - label: Security & Auth
    value: >-
      JWT authentication stored in an HTTP-only, secure, sameSite-strict, signed
      cookie (XSS/CSRF protection). Passwords hashed with Argon2. Role-based access
      control via a custom Type-GraphQL AuthChecker. Hand-rolled native rate
      limiter (in-memory sliding window) with distinct thresholds per operation
      type (auth, mutations, searches, queries), plus timeout and email-masking
      middleware.
  - label: Payments
    value: >-
      Server-side Stripe 18 integration: PaymentIntent creation for purchasing
      survey-quota packs, payment persistence in the database, and webhook handling
      (payment_intent.succeeded / payment_failed) with signature verification.
  - label: Architecture & Infrastructure
    value: >-
      npm workspaces monorepo (app/frontend + app/backend). Multi-environment
      Docker Compose containerization (dev, staging, prod, test) with a healthchecked
      PostgreSQL and Nginx reverse proxy. Versioned TypeORM migrations (init schema,
      category seeding, cascade delete). Caddy and deployment scripts on the prod
      side, with a documented disaster recovery plan.
  - label: Quality & CI/CD
    value: >-
      GitHub Actions pipelines (lint + audit, client tests, staging/prod Docker
      builds, docs generation, PR source-branch checks). Jest tests on the backend
      (resolvers + API) and Vitest + Testing Library on the frontend. Husky Git
      hooks + lint-staged, ESLint, Prettier, Conventional Commits with automated
      versioning (standard-version), and TypeDoc documentation published to GitHub
      Pages.
repo: https://github.com/WildCodeSchool/2409-wns-rouge-ask-and-trust
context: >-
  Ask&Trust is a SaaS platform that lets professionals create, distribute and
  analyze online surveys, monetized through survey-quota purchases. The project
  was built by a 4-developer team as part of the Wild Code School program, with
  the goal of delivering a complete, secure and production-deployable full-stack
  application.
features:
  - >-
    Survey editor with a toolbox to compose questions of various types (text,
    single choice/radio, multiple choice/checkbox), whose options are stored as
    JSONB.
  - >-
    Pre-publication survey preview and sharing of a public response link
    accessible without an account.
  - >-
    Collection of participant responses and result consultation by the survey
    creator.
  - >-
    Full authentication (sign-up, sign-in, roles) with account management:
    password change and GDPR-compliant account deletion (double confirmation via
    password + validation text).
  - >-
    Purchase of survey-quota packs via Stripe card payment, with payment history
    tracking.
  - >-
    Admin area and dashboard for managing content and users.
demonstrates: >-
  This project showcases command of a modern full-stack TypeScript stack and an
  end-to-end typed GraphQL API (Type-GraphQL + Apollo + TypeORM). It demonstrates
  genuine attention to application security: signed HTTP-only JWT cookies, Argon2
  hashing, role-based access control, a custom rate limiter and GDPR compliance.
  Managing a containerized multi-environment monorepo, database migrations, a
  payment integration with webhooks, and a polished CI/CD and quality chain
  (tests, linting, conventional commits, generated docs) reflects a rigorous,
  production-oriented engineering approach within a team setting.
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
