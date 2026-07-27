# Phase 00 — Triage: Stop the Bleeding

> Part of the Sree Padmanabha rebuild. Read `CLAUDE.md` at the repo root first —
> it holds the locked design system that this phase depends on.

**Prerequisites:** None. This is the starting point.

---

## Task

Fixes live money-losing bugs. Do this today even if you build nothing else this week.


I have a Next.js catering website for "Sree Padmanabha", a Kerala sadhya and event
management company operating for 30 years in Thiruvananthapuram, Kerala.

There are critical bugs costing real bookings. Fix these before anything else.

1. BROKEN LINKS (all currently 404):
   - /book-sadhya      — linked from homepage hero CTA, twice
   - /sadhya-menu      — linked from homepage "View Complete Menu"
   - /service-areas    — linked from homepage "Service Areas"
   - /packages         — linked from footer on EVERY page + services page CTA
   For now, create minimal placeholder pages at each route that inherit the
   existing layout and redirect intent sensibly (e.g. /book-sadhya → the booking
   flow, /sadhya-menu → /dishes). We build them properly in later phases.
   Then audit EVERY internal link in the codebase and report any others that 404.

2. FALSE STATISTICS — the homepage claims "1 Cr + Happy Guests" alongside
   "1000+ Sadhya Events". That's 10,000 guests per event, which is impossible and
   destroys credibility. Change the stats block to:
     1000+ Events Catered | 10 Lakh+ Guests Served | 30 Years | 4.9 Rating

3. WRONG DISH COUNT — homepage says "150+ authentic dishes", /dishes says "25+".
   A real Kerala sadya is 26–36 dishes. Replace all "150+ dishes" language with
   tier language: "26-dish, 36-dish and 64-dish (Valiya Sadya) menus".

4. PRICING CONTRADICTION — /services says Wedding Planning from Rs 3,50,000 but
   /booking says Wedding starts at Rs 50,000. Standardise: full wedding event
   management from Rs 3,50,000; sadhya-only catering from Rs 450/plate. Make the
   distinction explicit in the UI so they no longer contradict.

5. PLACEHOLDER IMAGES — the homepage still renders placeholder.svg for the About
   section image and the testimonial avatar. Find every placeholder.svg reference
   and replace with a proper styled fallback component (branded, not a grey box).
   List each file path where a real photo is still needed.

6. DEAD SOCIAL LINKS — all four footer social icons are href="#". Remove them
   entirely for now rather than shipping dead links.

7. Remove the `meta-generator: v0.dev` tag and the deprecated meta keywords tag.

8. Label the three phone numbers in the footer:
   7902371571 (Bookings) / 9746235003 (Sadhya Enquiry) / 9567431555 (Office)
   Make each a tel: link.

Show me a summary table of every change with the file path. Do not restyle
anything yet — this phase is bug fixes only.

---

## Definition of done

- [ ] No internal link returns 404
- [ ] Stats are believable and internally consistent
- [ ] Dish counts use tier language, not '150+'
- [ ] Pricing is consistent across every page
- [ ] No placeholder.svg renders anywhere
- [ ] All phone numbers are labelled tel: links

---

## Completion protocol

Do all of the following before ending this phase:

1. Run the build and confirm it compiles with no errors.
2. Verify every item in the definition of done above. Report honestly on any you could not meet.
3. Update `docs/build/PROGRESS.md`: mark Phase 00 complete, add the date, and write
   2-4 lines under "Notes" covering decisions you made, anything you deviated from,
   and anything the user must supply before the next phase.
4. Commit with the message: `Phase 00: Triage: Stop the Bleeding`
5. Give the user a summary: what changed, which files, what to review, what is
   outstanding.

**Then stop.** Do not begin the next phase. Wait for the user to approve this one.
When approved, the next phase is `docs/build/PHASE-01-design-system.md`.
