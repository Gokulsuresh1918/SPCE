# Phase 02 — App Shell

> Part of the Sree Padmanabha rebuild. Read `CLAUDE.md` at the repo root first —
> it holds the locked design system that this phase depends on.

**Prerequisites:** Phase 1 complete — design tokens and motion primitives must exist.

---

## Task

Rebuild the global shell using the Phase 1 design system.

1. NAVIGATION
   - Transparent over the hero, then on scroll past 100vh it solidifies to
     ela-deep with a backdrop blur and a subtle bottom hairline. Animate the
     transition, don't snap it.
   - Logo: wordmark in Fraunces. Add a small leaf glyph that subtly unfurls on
     hover.
   - Desktop links: Home, About, Services, Sadhya Menu, Gallery, Packages,
     Contact. Underline that draws from left on hover using a transform, not a
     width transition.
   - A persistent "Book Sadhya" button in kumkum, always visible. On mobile it
     stays visible in the header even when the menu is closed — this is the
     primary conversion action and must never be more than one tap away.
   - Fix the current bug where nav items are scroll-anchors that only work on the
     homepage. They must work as real routes from every page.

2. MOBILE MENU — full-screen overlay, ela-deep background. Links stagger in from
   below with a mask reveal. Include phone numbers and a WhatsApp link at the
   bottom of the overlay. Must be dismissible via backdrop tap, close button, and
   Escape key. Lock body scroll while open.

3. PAGE TRANSITIONS — a leaf-green wipe between routes using framer-motion
   AnimatePresence with the Next.js app router. Keep it under 600ms total. It
   must not block interaction or cause layout shift.

4. SMOOTH SCROLL — wire up Lenis. Disable it entirely on touch devices; native
   scrolling on mobile is better than any JS smoothing and Lenis on low-end
   Android causes jank.

5. FOOTER — rebuild on ela-deep. Four columns desktop, accordion on mobile.
   Include: brand blurb, labelled phone numbers as tel: links, email, a properly
   formatted address, service area list, and an embedded Google Map. Format the
   address correctly — it's currently unformatted lowercase:
     Shantharaghavam, Punayalkonam, Perumkadavila P.O.,
     Thiruvananthapuram, Kerala 695124

6. FLOATING WHATSAPP — keep it, but restyle to match the system and make sure it
   never overlaps the mobile nav or any CTA. Add a gentle attention pulse that
   fires once after 8 seconds, then stops.

7. KILL THE PRELOADER — the current full-screen "Loading... 0%" screen is a
   conversion killer on slow Kerala mobile data. Remove it. Replace with per-
   section skeleton states that don't block the hero.

Accessibility floor: visible keyboard focus rings on every interactive element,
correct ARIA on the mobile menu, and full keyboard navigability. Verify at 360px.

---

## Definition of done

- [ ] Nav routes work correctly from every page, not just the homepage
- [ ] Mobile menu opens, traps focus, closes on Escape and backdrop tap
- [ ] Book Sadhya CTA is visible on mobile without opening the menu
- [ ] Page transitions complete under 600ms with no layout shift
- [ ] The full-screen preloader is gone
- [ ] Footer address is correctly formatted with a working map

---

## Completion protocol

Do all of the following before ending this phase:

1. Run the build and confirm it compiles with no errors.
2. Verify every item in the definition of done above. Report honestly on any you could not meet.
3. Update `docs/build/PROGRESS.md`: mark Phase 02 complete, add the date, and write
   2-4 lines under "Notes" covering decisions you made, anything you deviated from,
   and anything the user must supply before the next phase.
4. Commit with the message: `Phase 02: App Shell`
5. Give the user a summary: what changed, which files, what to review, what is
   outstanding.

**Then stop.** Do not begin the next phase. Wait for the user to approve this one.
When approved, the next phase is `docs/build/PHASE-03-homepage.md`.
