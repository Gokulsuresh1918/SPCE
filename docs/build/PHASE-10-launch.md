# Phase 10 — SEO, Performance, Launch

> Part of the Sree Padmanabha rebuild. Read `CLAUDE.md` at the repo root first —
> it holds the locked design system that this phase depends on.

**Prerequisites:** All previous phases complete.

---

## Task

Final pass. Get the site fast, findable and production-ready.

SEO
1. Unique title and meta description on every page. The current site serves
   IDENTICAL metadata across homepage, services, gallery, dishes and booking —
   Google treats these as duplicates and ranks only one.
2. Schema markup: LocalBusiness + Caterer on the homepage with real address,
   phone, geo coordinates, opening hours and price range. FAQPage on /faq.
   ImageObject on gallery. Review schema on testimonials. BreadcrumbList
   site-wide.
3. Generate sitemap.xml and robots.txt properly via the app router.
4. OpenGraph and Twitter card images per page — generate dynamically with
   @vercel/og.
5. Canonical URLs on every page.
6. Verify every content page is server-rendered and fully visible with JavaScript
   disabled. Test this explicitly — it was the site's biggest SEO failure.

PERFORMANCE
7. Audit every image: correct next/image sizes, AVIF/WebP, blur placeholders,
   priority only on the hero.
8. Code-split GSAP and heavy animation libraries. Nothing animation-related
   should be in the initial bundle.
9. Font subsetting — Malayalam glyphs are heavy, load Manjari only on pages that
   need it.
10. Targets: Lighthouse mobile 90+ performance, 100 accessibility, 100 SEO.
    LCP under 2.5s, CLS under 0.1, INP under 200ms on a throttled mid-range
    Android profile. Report the actual numbers.

MOBILE QA
11. Test every page and every interactive element at 360px, 390px and 768px.
12. Verify: booking modal as a full-screen sheet, sadhya leaf usable, horizontal-
    scroll sections converted to vertical, all tap targets 44px minimum, no
    horizontal overflow anywhere, animations at 60fps under 4x CPU throttle.
13. Test with prefers-reduced-motion enabled — the site must remain fully
    functional and still look good.

FINAL
14. Custom 404 and 500 pages, on brand, with useful navigation.
15. Google Analytics 4 with conversion events on enquiry submit, WhatsApp click,
    brochure download and calculator completion.
16. Google Search Console verification.
17. Set up Google Business Profile linkage.
18. Full accessibility audit — axe-core clean, keyboard-only navigable, screen
    reader tested.
19. Security headers, CSP, and a final dependency audit.

Give me a launch checklist with everything verified and anything still
outstanding.

---

## Definition of done

- [ ] Lighthouse mobile: performance 90+, accessibility 100, SEO 100
- [ ] Every page renders fully with JavaScript disabled
- [ ] Schema markup validates in Google Rich Results Test
- [ ] No horizontal overflow at 360px on any page
- [ ] axe-core reports zero violations
- [ ] Analytics conversion events fire correctly

---

## Completion protocol

Do all of the following before ending this phase:

1. Run the build and confirm it compiles with no errors.
2. Verify every item in the definition of done above. Report honestly on any you could not meet.
3. Update `docs/build/PROGRESS.md`: mark Phase 10 complete, add the date, and write
   2-4 lines under "Notes" covering decisions you made, anything you deviated from,
   and anything the user must supply before the next phase.
4. Commit with the message: `Phase 10: SEO, Performance, Launch`
5. Give the user a summary: what changed, which files, what to review, what is
   outstanding.

**Then stop.** Do not begin the next phase. Wait for the user to approve this one.
This is the final phase.
