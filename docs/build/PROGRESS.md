# Build Progress

**Read this file first at the start of every session.** It is the source of truth for
where the build stands.

---

## Current state

**Next phase to run:** `PHASE-02-app-shell.md`
**Last updated:** 2026-07-27

---

## Phases

| # | Phase | File | Status | Date |
|---|---|---|---|---|
| 00 | Triage — stop the bleeding | `PHASE-00-triage.md` | ✅ Complete | 2026-07-27 |
| 01 | Design system & motion | `PHASE-01-design-system.md` | ✅ Complete | 2026-07-27 |
| 02 | App shell | `PHASE-02-app-shell.md` | ⬜ Not started | |
| 03 | Homepage | `PHASE-03-homepage.md` | ⬜ Not started | |
| 04 | Interactive sadya leaf | `PHASE-04-sadhya-leaf.md` | ⬜ Not started | |
| 05 | Booking modal & calculator | `PHASE-05-booking.md` | ⬜ Not started | |
| 06 | Remaining pages | `PHASE-06-pages.md` | ⬜ Not started | |
| 07 | Express backend | `PHASE-07-backend.md` | ⬜ Not started | |
| 08 | Admin dashboard | `PHASE-08-admin.md` | ⬜ Not started | |
| 09 | Integration | `PHASE-09-integration.md` | ⬜ Not started | |
| 10 | SEO, performance, launch | `PHASE-10-launch.md` | ⬜ Not started | |

Status values: ⬜ Not started · 🟡 In progress · ✅ Complete · ⚠️ Complete with caveats

---

## Notes

Append a dated entry after each phase. Keep it short and honest — this is what a
future session reads to understand decisions already made.

Record: key decisions and why, anything that deviated from the phase spec, anything
deferred, and anything the user must supply before continuing.

### Phase 00 — 2026-07-27
Fixed the 4 spec'd 404s (`/book-sadhya`, `/sadhya-menu` redirect into the real
booking/dishes flows; `/service-areas`, `/packages` got minimal placeholder pages) plus
6 more found in the full link audit (`/vendors`, `/testimonials`, `/privacy-policy`,
`/terms-of-service`, `/sitemap`, `/book-event`). `/testimonials` renders the existing
live Testimonials component rather than a dead-end, since it's now reachable from the
main nav. Unplanned but in-scope fix: `header.tsx` was intercepting every nav click
except Home/Contact with `preventDefault()` and a "Coming Soon" modal — Services,
Gallery, etc. were unreachable from the header despite the pages working. Removed that
gate.

Stats corrected to spec (1000+ Events Catered | 10 Lakh+ Guests Served | 30 Years | 4.9
Rating). Dish-count language switched to 26/36/64-dish tiers everywhere. Pricing: used
the phase spec's ₹450/plate sadhya-only figure (codebase had ₹1,200/plate — spec's
number wins since the user didn't override it when asked); reconciled the
₹3,50,000-vs-₹50,000 wedding contradiction by labelling the booking calculator's
₹50,000 as an add-on base, distinct from full wedding planning packages.

All ~57 `/placeholder.svg` references across 17 files replaced with one shared branded
SVG asset (`public/branded-placeholder.svg`) rather than a full component — lower risk
for a bug-fix-only phase, easy to upgrade to a proper styled component during Phase 01.
File paths still needing real photos are listed in `ASSETS-NEEDED.md`. Footer social
icons (all `href="#"`) removed; phone numbers labelled (Bookings/Sadhya Enquiry/Office)
and made `tel:` links; `v0.dev` generator tag and deprecated `keywords` meta removed.

Deferred, not touched: `/menu` and `/dashboard` are both orphaned routes (unlinked from
anywhere in the app, `/menu` duplicates `/dishes` with stale hardcoded data) — flagged
for cleanup in a later phase rather than fixed in place. The pre-existing `/private`
admin dashboard and Express/MongoDB backend in `/server` predate this phase plan, which
assumes both arrive in Phases 07–08 — worth reconciling before those phases start.
Build passes with no errors.

### Phase 01 — 2026-07-27
Built the Ela design system as a foundation layer, additive to the existing v0
maroon/gold styling rather than replacing it in place — CLAUDE.md says later phases
(02–06) migrate pages over, so ripping out `gold-500`/`maroon-900` usage now would have
been out of scope and broken every existing page. What did change site-wide: fonts
(Fraunces/General Sans/Manjari replaced Playfair/Poppins via the `font-serif`/`font-sans`
Tailwind keys) and the fluid type scale (`text-xs` through `text-7xl` are now clamp()'d
between 360px and 1920px, with min bounds matched to the old static sizes so nothing
should visually jump).

New: `ela`/`rice`/`turmeric`/`kumkum`/`charcoal` color tokens as CSS custom properties
(RGB triplets, `rgb(var(--x) / <alpha-value>)` pattern for opacity-modifier support) —
the 7 named tokens are the locked spec values, the 50–900 ela/rice ramps are generated
tint/shade interpolations and worth a design pass rather than treating as final.
General Sans isn't on Google Fonts, so it's self-hosted from Fontshare
(`app/fonts/general-sans/*.woff2`) rather than pulled from their CDN at runtime — matters
for the 4G non-negotiable. Motion primitives (`lib/motion.ts`): fadeUp, staggerContainer,
revealMask, scaleIn, drawPath, useCounterUp, all gated through a `useReducedMotion` hook,
plus a global CSS reduced-motion fallback for anything not yet using it. gsap+ScrollTrigger
registration helper in `lib/gsap.ts`. Lenis smooth-scroll hook built in `lib/lenis.ts` but
**not mounted anywhere** — wiring it into the root layout is an app-shell decision
(scroll-lock, fixed header interaction) that belongs to Phase 02, not this one.

New Ela button/card/section/eyebrow/split-text components live in `components/ela/`,
separate from the legacy `components/ui/button.tsx` etc. — kept both instead of editing
the existing shadcn Button, since its variant names (`outline`, `default`, ...) are
referenced across every existing page and swapping the variant set to
primary/secondary/ghost/leaf would have broken the whole build.

Caught in browser testing, not just the build: the first version of the `secondary` and
`ghost` button variants used `text-ela-deep`, which is invisible against an `ela-deep`
dark section — dark-on-dark. Fixed to `turmeric` (secondary) and `text-inherit`
(ghost) so both read correctly on light and dark sections without a tone prop.

Not verified: DoD asks for 360px overflow testing, but `resize_window` didn't actually
shrink the render viewport in this environment (`window.innerWidth` stayed at 1536
after resizing to 360) — confirmed via `document.documentElement.scrollWidth` that
there's no overflow at the current viewport, and the clamp() min-bounds were chosen to
match the old static sizes, but this needs a real phone check per CLAUDE.md's own
instruction, not just this session's word for it.

<!-- Example format:

### Phase 00 — 2026-07-28
Fixed all four 404 routes with placeholder pages. Found two additional broken links
in the services page footer that weren't in the spec. Stats and dish counts corrected.
Replaced placeholder.svg with a branded fallback — 6 real photos still needed, paths
listed in ASSETS-NEEDED.md.

-->

---

## Blocked on the user

Anything the build cannot proceed without. Add items here as they come up.

- [ ] Professional food photography — see `ASSETS-NEEDED.md`
- [ ] 6+ recent testimonials (current site has one, from December 2022)
- [ ] Confirmed per-plate pricing for each tier
- [ ] Real family story content for the About page
