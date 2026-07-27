# Phase 01 — Design System & Motion Foundation

> Part of the Sree Padmanabha rebuild. Read `CLAUDE.md` at the repo root first —
> it holds the locked design system that this phase depends on.

**Prerequisites:** Phase 0 complete.

---

## Task

Set up the design system for a full visual redesign. Read the existing Tailwind
config and globals first, then replace the theme.

CONCEPT: "Ela" — the banana leaf. Sree Padmanabha serves traditional Kerala
sadhya on fresh banana leaves. The leaf is the brand's central object and every
design decision derives from it. Do NOT use the generic Indian-wedding gold-and-
maroon palette that every competitor uses.

1. COLOR TOKENS — add to Tailwind config as semantic names, and as CSS custom
   properties in globals.css:
     ela-deep    #14342B
     ela-mid     #2F5D50
     ela-fresh   #6A994E
     rice        #FBF7EC
     turmeric    #D9A521
     kumkum      #A02C2C
     charcoal    #191A17
   Generate 50–900 scales for ela and rice. Dark sections use ela-deep as
   background with rice text; light sections use rice background with charcoal
   text. Turmeric for highlights and active states. Kumkum ONLY for primary CTAs.

2. TYPOGRAPHY — via next/font:
     Display: Fraunces (variable — exercise the opsz and SOFT axes)
     Body:    General Sans (Fontshare)
     Malayalam: Manjari
   Build a type scale with clamp() so it's fluid from 360px to 1920px. Display
   sizes should be genuinely large on desktop (hero up to 8rem) but must not
   overflow on a 360px phone. Set tabular-nums on all numeric/price displays.

3. MOTION PRIMITIVES — install framer-motion, gsap (with ScrollTrigger), and
   @studio-freight/lenis. Create lib/motion.ts exporting reusable variants:
     fadeUp, staggerContainer, revealMask, scaleIn, drawPath, counterUp
   Standard easing: cubic-bezier(0.22, 1, 0.36, 1). Durations 0.4–0.8s.
   CRITICAL: every animation must respect prefers-reduced-motion. Build a
   useReducedMotion hook and wire it into all primitives so motion degrades to
   instant, not broken.

4. TEXTURE — create subtle SVG assets: a banana-leaf vein pattern for section
   dividers (3% opacity max), and a kasavu gold-border motif for card edges.
   Restraint: these are suggestion, not costume.

5. BASE COMPONENTS in components/ui/: Button (primary/secondary/ghost/leaf
   variants), Card, Section wrapper (handles light/dark alternation and vertical
   rhythm), Eyebrow label, and a SplitText component for character-level reveals.

6. Build a /styleguide route rendering every token, type size, button state and
   motion primitive so I can review it in one place.

MOBILE IS NOT OPTIONAL: a large share of traffic is mid-range Android on 4G in
Kerala. Design mobile-first. Test every token at 360px.

Show me /styleguide when done.

---

## Definition of done

- [ ] /styleguide renders every token, type size, button state and motion primitive
- [ ] All colors resolve from CSS custom properties, no hardcoded hex in components
- [ ] Type scale is fluid and does not overflow at 360px
- [ ] prefers-reduced-motion degrades every animation gracefully

---

## Completion protocol

Do all of the following before ending this phase:

1. Run the build and confirm it compiles with no errors.
2. Verify every item in the definition of done above. Report honestly on any you could not meet.
3. Update `docs/build/PROGRESS.md`: mark Phase 01 complete, add the date, and write
   2-4 lines under "Notes" covering decisions you made, anything you deviated from,
   and anything the user must supply before the next phase.
4. Commit with the message: `Phase 01: Design System & Motion Foundation`
5. Give the user a summary: what changed, which files, what to review, what is
   outstanding.

**Then stop.** Do not begin the next phase. Wait for the user to approve this one.
When approved, the next phase is `docs/build/PHASE-02-app-shell.md`.
