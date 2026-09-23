---
lang: en
slug: grindrise
title: Grindrise
status: In progress
dates: 2026 → ongoing # first commit on 2026-08-10, last on 2026-08-27
description: "Mobile fitness tracker that turns every workout into RPG progression (classes, XP, levels, unlockable story), backed by an anti-cheat model enforced entirely server-side."
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
      Expo SDK 57 (managed workflow, no native folders), React Native 0.86, React 19.2 and TypeScript 6.0.
      Navigation with React Navigation 7: an onboarding stack, three tabs and nested stacks.
      Global state with Zustand 5. The onboarding draft is persisted to AsyncStorage through the `persist` middleware,
      and the in-progress strength session lives in a store that delegates every action to tested pure functions.
      The code is organized by feature (auth, onboarding, strength, programs, narrative, progression…).
      The "Ember & parchment" design system is built from centralized tokens (colors, typography, spacing, effects):
      no hard-coded values outside `theme/`. Custom SVG components with react-native-svg (level medallion, hexagons, cut-corner surfaces).
      A drag-and-drop reorderable list is written with no native dependency (PanResponder + Animated):
      a single list-level responder, a dedicated handle, edge auto-scroll and springs running on the native driver.
  - label: Backend
    value: >-
      NestJS 11 API built as a modular monolith: isolated modules (workouts, gamification, narrative, programs, exercises,
      notifications, entitlements) that only communicate through their exported services.
      A global guard verifies Supabase JWTs locally against the public JWKS with `jose`, with no network round-trip.
      Algorithms are allow-listed (ES256/RS256) to close algorithm-confusion attacks, and public routes use a `@Public` decorator.
      DTOs are validated with class-validator, including custom coherence validators.
      Configuration is validated at startup: the API refuses to boot if a variable is missing.
      XP, streak and narrative unlock rules are isolated as pure functions, testable without a database.
  - label: Database
    value: >-
      Supabase (PostgreSQL 17, Auth) with 16 tables and deny-by-default Row Level Security.
      The mobile client reads directly with the `anon` key, but every sensitive write goes through the API (`service_role` key).
      A workout and its XP are written in a single transaction through a Postgres RPC function (`log_workout_with_xp`).
      The `xp_events` table is append-only, enforced by a trigger.
      The level curve is stored in the database, so rebalancing is retroactive (`recomputeProgress`) without rewriting history.
      SQL migrations are versioned, and TypeScript types are generated from the schema and shared between the API and the mobile app.
  - label: Messaging & notifications
    value: >-
      BullMQ producer on Redis (ioredis) for level-up emails, consumed by a separately deployed worker.
      The producer is tuned to fail fast (no offline queue, single retry) so it never slows down a user request.
      Unsubscribe links are signed with HMAC-SHA256, checked with constant-time comparison and carry a versioned scope in the signed message.
      They work without a session. Sign-in uses a one-time code sent by email (Brevo SMTP relay wired into Supabase Auth, custom templates).
  - label: Infrastructure
    value: >-
      Multi-stage Docker image (node:22-alpine): build, production-only dependencies, then runtime image.
      The image runs as a non-root user, with tini as PID 1 for graceful SIGTERM shutdown and a HEALTHCHECK on `/health`.
      Deployed to an OVH VPS through CapRover, with two isolated environments (production and test: separate Supabase projects, Redis instances and workers).
      Cloud mobile builds through EAS Build with three profiles (development, preview, production).
      The pnpm monorepo deliberately has no workspace, because the Metro and Nest CLI toolchains are disjoint.
  - label: Quality & testing
    value: >-
      About 450 test cases in total, with Jest throughout.
      On the API side, unit tests for business rules and services, plus e2e tests with Supertest and a mock JWKS server.
      On the mobile side, jest-expo on pure logic (session state, duration, stats, payload building).
      Migrations and RLS policies are tested in an embedded Postgres (PGlite in WASM), with no Docker. These tests check in particular that a client cannot grant itself XP.
      ESLint and Prettier round out the tooling, and the history follows Conventional Commits.
repo: https://github.com/AlexDDevv/GrindRise
context: >-
  Grindrise is a mobile fitness tracker (running, strength training and other endurance sports) that adds an RPG gamification layer to keep users consistent.
  Players pick a class, earn XP with every workout, level up and unlock story fragments.
  The core challenge is making that progression credible: since any user-entered metric can be faked, only the server awards XP, using a scoring model designed so that cheating pays very little.
  The project is under active development: the workout → XP → level loop works end to end, while history, progression analytics and the first published mobile build are still to come.
features:
  - >-
    Guided multi-step onboarding (welcome, sport choice, class choice) followed by passwordless sign-in with a one-time code sent by email.
    The draft is kept if the user leaves the app to fetch their code.
  - >-
    Per-sport workout logging with server-side XP: 60 XP for showing up and up to 40 XP for effort on a concave curve.
    Anti-cheat guardrails apply (two credited workouts per day, at least 30 minutes apart, backfill limited to 7 days).
    An animation announces each level milestone.
  - >-
    Strength tracking exercise by exercise and set by set, with a catalog filterable by muscle group.
    Users can create their own exercises, follow live session stats and review a final summary.
  - >-
    Custom training programs organized into template days with drag-and-drop reorderable exercises.
    A workout can be started directly from a template day.
  - >-
    Streak counted in local days based on the player's time zone, with fixed bonuses at milestones (3, 7, 14, 30 days, then every 30 days).
  - >-
    Narrative system under construction: the unlock mechanism (main storyline tied to overall level, side storylines per sport) is in place on the server, while the story content and codex are still to come.
    Level-up emails are sent, with one-click unsubscribe.
demonstrates: >-
  This project shows the ability to design a complete end-to-end system (mobile, API, database, infrastructure) by reasoning from a threat model first.
  The client never writes XP, RLS is tested automatically and the scoring model is designed so that cheating pays very little.
  It also reflects real engineering discipline: business logic isolated in pure functions tested edge case by edge case, atomic database transactions,
  trade-offs explicitly documented in the code (local JWT verification versus immediate revocation, JS-thread gestures versus a native dependency)
  and a hardened containerized deployment across two isolated environments.
  Finally, product thinking shows in decisions like removing the effort bonus for strength training (tonnage is too easy to inflate) or computing streaks in the player's local time zone.
gallery:
---
