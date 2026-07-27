# Sree Padmanabha — Project Instructions

Kerala sadhya catering and event management company. Operating since 1993 in
Thiruvananthapuram, Kerala. Next.js site, currently a v0-generated template being
rebuilt into a distinctive, high-converting site.

**Audience:** families planning weddings, temple festival committees, and corporate
event organisers in Kerala. Many are non-technical and browsing on mid-range Android
phones on 4G. The person paying is often an older family member.

**The site's single job:** turn a visitor into a sadhya enquiry.

---

## How to work on this project

This rebuild runs as a sequence of phases in `docs/build/`.

1. **Always read `docs/build/PROGRESS.md` first.** It tells you which phase is next.
2. Read only that phase's file. Do not load other phase files — it wastes context.
3. Execute that phase fully.
4. Follow the completion protocol at the bottom of the phase file.
5. **Stop and wait for approval.** Never chain into the next phase unprompted.

If asked to do something outside the current phase, do it — but say which phase it
belongs to, and don't let it silently expand into that phase's scope.

---

## Locked design system

Do not change these between phases. If a phase seems to call for a different colour
or typeface, stop and ask rather than improvising — visual drift across phases is
the main way this build could fail.

**Concept: "Ela" (ഇല — the banana leaf).** Sadhya is served on a fresh banana leaf.
The leaf is the brand's central object and every design decision derives from it.
Deliberately *not* the gold-and-maroon Indian wedding palette every competitor uses.

### Colour

| Token | Hex | Use |
|---|---|---|
| `ela-deep` | `#14342B` | Dark sections, primary surface |
| `ela-mid` | `#2F5D50` | Cards on dark, borders |
| `ela-fresh` | `#6A994E` | Accents, success states |
| `rice` | `#FBF7EC` | Light sections |
| `turmeric` | `#D9A521` | Highlights, active states |
| `kumkum` | `#A02C2C` | Primary CTAs only — use sparingly |
| `charcoal` | `#191A17` | Body text on light |

Dark sections: `ela-deep` background, `rice` text. Light sections: `rice` background,
`charcoal` text. Never hardcode hex in components — always reference the token.

### Type

- **Display:** Fraunces (variable — exercise the `opsz` and `SOFT` axes)
- **Body:** General Sans (Fontshare)
- **Malayalam:** Manjari
- **Numbers:** General Sans with `font-variant-numeric: tabular-nums`

Fluid scale via `clamp()`, from 360px to 1920px.

### Motion

- Easing: `cubic-bezier(0.22, 1, 0.36, 1)` · Durations 0.4–0.8s
- Framer Motion for components, GSAP + ScrollTrigger for scroll choreography
- Lenis for smooth scroll — **disabled on touch devices**
- Every animation respects `prefers-reduced-motion`

### Signature element

The interactive sadya leaf (Phase 04). Spend the boldness there. Everything around it
stays quiet and disciplined.

---

## Non-negotiables

**Mobile first.** A large share of traffic is mid-range Android on 4G. Test every
change at 360px. Animations must hold 60fps under 4x CPU throttle. No horizontal
overflow, ever. Tap targets 44px minimum.

**Server-render all content.** The original site rendered "Loading dishes..." and
"Loading gallery..." to Google's crawler, making the entire menu and portfolio
invisible to search. Every content page must be fully readable with JavaScript
disabled. This is the single biggest problem being fixed.

**Unique metadata per page.** The original served identical title and description on
every page. Every route needs its own.

**Accessibility floor.** Visible keyboard focus, correct ARIA, keyboard navigable,
`prefers-reduced-motion` honoured. Not optional, not a later phase.

**One source of truth for pricing.** All pricing logic lives in `lib/pricing.ts`.
The calculator, booking modal, quote PDFs and admin panel all read from it. Never
duplicate a rate.

---

## Copy voice

Write like someone who has actually served sadhya for thirty years, not like a
marketing agency. Specific over clever. Use the real vocabulary — sadya, ela,
payasam, avial, Valiya Sadya, muhurtham — and get the Malayalam right.

Never invent statistics or credentials. If a number is needed and unknown, leave a
`TODO` and tell the user rather than inventing one. The site previously claimed
1 crore guests served, which was mathematically impossible and destroyed trust.
Do not recreate that class of error.

Buttons say what happens: "Send enquiry", not "Submit". An action keeps the same
name through the whole flow. Errors say what went wrong and how to fix it.

---

## Stack

Next.js (app router) · TypeScript · Tailwind · Framer Motion · GSAP · Lenis
Backend from Phase 07: Express + MongoDB (Mongoose) + TypeScript, in `/server`
Images: Cloudinary · Forms: react-hook-form + zod · Server state: TanStack Query

Shared types in `/shared/types.ts`, imported by both frontend and backend so the API
contract cannot drift.

---

## Reference

- `docs/build/README.md` — phase index and overview
- `docs/build/PROGRESS.md` — current state, updated after every phase
- `docs/build/ASSETS-NEEDED.md` — photos, content and accounts the user must supply
