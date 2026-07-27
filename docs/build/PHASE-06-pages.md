# Phase 06 — Remaining Pages

> Part of the Sree Padmanabha rebuild. Read `CLAUDE.md` at the repo root first —
> it holds the locked design system that this phase depends on.

**Prerequisites:** Phases 1-5 complete.

---

## Task

Build out every remaining page using the established design system. Server-render
all content.

1. /packages — currently 404 and linked from every footer. Three tiers (Essential
   / Signature / Grand). Comparison table that becomes swipeable cards on mobile.
   Each package opens the booking modal pre-filled.

2. /service-areas — currently 404. A Kerala map with served districts
   highlighted. Individual sections per district (Thiruvananthapuram, Kollam,
   Pathanamthitta, Alappuzha, Kottayam, and any others). Each needs unique local
   copy — this is how we win local search. Generate a route per district at
   /service-areas/[district] with unique metadata.

3. /gallery — rebuild. Masonry with category filters (Weddings, Corporate,
   Festivals, Sadhya, Decorations). Lightbox with keyboard nav and swipe on
   mobile. Lazy-load with blur placeholders. Must be server-rendered — currently
   it renders "Loading gallery..." to crawlers and is invisible to Google.

4. /gallery/[event] — case study pages. "800-guest wedding in Kollam" with photo
   set, guest count, menu served, timeline, and a client quote. Far more
   persuasive than a testimonial line. Build 3 templates.

5. /about — the family story. Three generations, thirty years, 1993 to today. A
   scroll-driven timeline with photos. This is the moat against newer
   competitors, so give it real weight and real narrative copy.

6. /services — restyle. Replace emoji icons with the custom SVG set. Each service
   expands to reveal detail.

7. /testimonials — grid, filterable by event type. Embed live Google Reviews
   rather than hardcoding.

8. /faq — with FAQPage schema. Answer the real questions: what does sadhya cost
   per plate, how far in advance to book, do you travel outside Thiruvananthapuram,
   what's included, do you offer tastings, what's the cancellation policy,
   advance payment terms. This captures a lot of long-tail search.

9. /onam and /vishu — seasonal landing pages. These see huge, predictable annual
   search spikes. Build now so they age and gain authority before the season.

10. /contact — rebuild. Short form, labelled phone numbers, embedded map,
    response-time expectation ("We reply within 4 hours"), WhatsApp CTA.

11. /brochures — downloadable PDF menus and company brochure, managed from the
    admin panel in Phase 8. Track downloads.

Every page needs: unique title, unique meta description, OpenGraph image, and
appropriate schema. The current site serves the IDENTICAL title and description
on every single page, which caps our search visibility badly.

---

## Definition of done

- [ ] No route returns 404
- [ ] Every page has unique title and meta description
- [ ] All content is server-rendered
- [ ] Every page verified at 360px

---

## Completion protocol

Do all of the following before ending this phase:

1. Run the build and confirm it compiles with no errors.
2. Verify every item in the definition of done above. Report honestly on any you could not meet.
3. Update `docs/build/PROGRESS.md`: mark Phase 06 complete, add the date, and write
   2-4 lines under "Notes" covering decisions you made, anything you deviated from,
   and anything the user must supply before the next phase.
4. Commit with the message: `Phase 06: Remaining Pages`
5. Give the user a summary: what changed, which files, what to review, what is
   outstanding.

**Then stop.** Do not begin the next phase. Wait for the user to approve this one.
When approved, the next phase is `docs/build/PHASE-07-backend.md`.
