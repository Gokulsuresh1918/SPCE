# Phase 03 — Homepage

> Part of the Sree Padmanabha rebuild. Read `CLAUDE.md` at the repo root first —
> it holds the locked design system that this phase depends on.

**Prerequisites:** Phases 1-2 complete — design system and app shell must exist.

---

## Task

Rebuild the homepage. This is the most important page on the site — it must look
genuinely stunning and load fast on a mid-range Android phone.

SECTION 1 — HERO (the signature moment)
An orchestrated page-load sequence, not scattered effects:
  1. A banana leaf unfurls across the viewport — animate an SVG path draw plus a
     clip-path reveal, ~1.2s
  2. Sadhya dishes place themselves onto the leaf one by one in the correct
     traditional serving order, staggered ~80ms apart
  3. Headline reveals character-by-character with a mask
  4. CTAs fade up last
Headline: "Thirty years on one leaf" with subhead naming the craft. Do not write
generic marketing copy — write like someone who knows sadhya.
Two CTAs: "Book Your Sadhya" (kumkum, opens the booking modal in Phase 5) and
"See the Menu" (ghost).
Subtle SVG steam wisps rising from the hot dishes — this sells "freshly made"
better than any headline. Keep it barely perceptible.
MOBILE: replace the full leaf animation with a simplified 3-dish version. Test
that it runs at 60fps on a throttled 4x-slowdown CPU profile.

SECTION 2 — THE SADHYA, EXPLAINED
Horizontal scroll-pinned section (GSAP ScrollTrigger) walking through the leaf
left to right: parippu, then the curries, then rice and sambar, then payasam.
Each stage pins, the dish scales in, Malayalam and English names appear.
MOBILE: convert to vertical scroll-snap cards. Never horizontal-scroll on mobile.

SECTION 3 — MENU TIERS
Three cards: 26-dish Sadya, 36-dish Premium Sadya, 64-dish Valiya Sadya. Per-plate
price, dish count, what's included. Middle tier marked "Most chosen". Cards lift
and the kasavu border illuminates on hover. Each opens the booking modal
pre-filled with that tier.

SECTION 4 — SERVICES
Replace the current emoji icons (very cheap-looking) with custom line-drawn SVG
icons in the Ela style. Seven services, staggered scroll reveal.

SECTION 5 — STATS
Counter-up on scroll into view with easing. Use the CORRECTED numbers from
Phase 0: 1000+ Events, 10 Lakh+ Guests, 30 Years, 4.9 Rating.

SECTION 6 — GALLERY PREVIEW
Masonry grid, 6 images, parallax at different scroll speeds. Links to /gallery.

SECTION 7 — TESTIMONIALS
Carousel, auto-advancing, pausable. The current site shows ONE testimonial dated
December 2022 — build for at least 6 and flag that I need to supply fresh ones.

SECTION 8 — CLOSING CTA
Full-bleed ela-deep, leaf vein texture, large Fraunces headline, single CTA
opening the booking modal.

TECHNICAL REQUIREMENTS:
- All content data server-rendered, not client-fetched. The current site renders
  "Loading dishes..." and "Loading gallery..." to Google's crawler, making the
  entire menu and portfolio invisible to search. This is the single biggest SEO
  problem on the site. Use server components.
- next/image everywhere with proper sizes, blur placeholders, priority on hero
- Lazy-load GSAP ScrollTrigger below the fold
- Target Lighthouse mobile performance 85+
- prefers-reduced-motion kills all decorative motion

---

## Definition of done

- [ ] Hero animation runs at 60fps under 4x CPU throttle
- [ ] All content is server-rendered and visible with JavaScript disabled
- [ ] No section horizontal-scrolls on mobile
- [ ] Lighthouse mobile performance is 85 or above
- [ ] Every CTA opens the correct destination

---

## Completion protocol

Do all of the following before ending this phase:

1. Run the build and confirm it compiles with no errors.
2. Verify every item in the definition of done above. Report honestly on any you could not meet.
3. Update `docs/build/PROGRESS.md`: mark Phase 03 complete, add the date, and write
   2-4 lines under "Notes" covering decisions you made, anything you deviated from,
   and anything the user must supply before the next phase.
4. Commit with the message: `Phase 03: Homepage`
5. Give the user a summary: what changed, which files, what to review, what is
   outstanding.

**Then stop.** Do not begin the next phase. Wait for the user to approve this one.
When approved, the next phase is `docs/build/PHASE-04-sadhya-leaf.md`.
