# Sree Padmanabha Rebuild — Build Plan

Rebuild of a Kerala sadhya catering site from a generic v0 template into a
distinctive, fast, high-converting site with a full admin dashboard.

## How this works

Eleven phases, each in its own file. An agent reads `PROGRESS.md` to find the current
phase, reads only that phase's file, executes it, updates `PROGRESS.md`, then stops
for review.

Phases are split into separate files deliberately — loading all eleven into every
session wastes context on work that isn't happening yet.

## Phases

| # | Phase | What it delivers |
|---|---|---|
| 00 | **Triage** | Fixes live bugs: four 404 CTAs, impossible stats, contradictory pricing, placeholder images |
| 01 | **Design system** | Ela palette, Fraunces/General Sans/Manjari type, motion primitives, `/styleguide` |
| 02 | **App shell** | Nav, mobile menu, page transitions, footer, kills the preloader |
| 03 | **Homepage** | Unfurling-leaf hero, scroll-pinned sadhya explainer, menu tiers, stats, gallery |
| 04 | **Sadya leaf** | The signature feature — interactive banana leaf menu with 36 dishes |
| 05 | **Booking** | Book Sadhya modal, live cost calculator, availability calendar, WhatsApp handoff |
| 06 | **Pages** | Packages, service areas, gallery, case studies, about, FAQ, Onam/Vishu, contact |
| 07 | **Backend** | Express + MongoDB + TypeScript API, auth, Cloudinary, email, quote PDFs |
| 08 | **Admin** | Dashboard: enquiries pipeline, pricing config, offers, brochures, gallery, settings |
| 09 | **Integration** | Wire frontend to backend, remove all mock data |
| 10 | **Launch** | Schema markup, unique metadata, performance targets, mobile QA, analytics |

## Priority

If time is short, phases **00, 03, 04, 05 and 08** deliver most of the value.
Phase 00 should be run immediately regardless — it fixes bugs losing bookings today.

## Rules

- Run phases in order. Later phases assume earlier ones landed.
- Commit after every phase. If one goes wrong, roll back one phase, not the build.
- Review on a real phone after every visual phase — not the browser device emulator.
- The design system in `/CLAUDE.md` is locked. Point the agent back at it if it drifts.

## Files

- `PROGRESS.md` — current state, read first every session
- `ASSETS-NEEDED.md` — photos, content and accounts the user must supply
- `PHASE-*.md` — the eleven phase specs
- `/CLAUDE.md` (repo root) — auto-loaded context: design system, voice, non-negotiables
