# Phase 04 — The Interactive Sadya Leaf

> Part of the Sree Padmanabha rebuild. Read `CLAUDE.md` at the repo root first —
> it holds the locked design system that this phase depends on.

**Prerequisites:** Phases 1-3 complete.

---

## Task

The differentiator. No competitor in Kerala has anything like this.


Build the interactive sadya leaf — the signature feature of the site — at
/sadhya-menu, and make /dishes redirect to it.

THE CORE COMPONENT
A large, detailed SVG banana leaf rendered full-width. Every dish sits at its
correct traditional position on the leaf. This is anatomically meaningful — the
placement order is real culinary tradition, so get it right:

  Top-left to top-right (upper leaf): pickles (naranga, inji puli), then
  chutneys, thoran varieties, mezhukkupuratti, kichadi, pachadi, olan, avial,
  kalan, erissery
  Bottom-left: pappadam, banana chips (upperi), sharkara varatti
  Centre-bottom: rice, served with parippu and ghee, then sambar, then rasam
  Right: payasam varieties
  Far-left edge: a small banana

INTERACTION
- Hover on desktop / tap on mobile → a card appears showing the dish name in
  Malayalam (Manjari font) and English, a short description, key ingredients,
  and a veg/vegan/allergen tag
- The hovered dish gently scales and lifts with a soft shadow; the rest of the
  leaf dims to 60%
- A serving-order mode: a "Watch the sequence" button that animates dishes
  appearing in the correct traditional order, with a caption naming each step.
  This is genuinely educational and highly shareable.
- Tier toggle: 26 / 36 / 64 dish. Switching tiers animates dishes in and out of
  the leaf with a stagger. Price per plate updates live.

MOBILE VERSION
Do NOT just shrink the leaf — it becomes unusable. Instead:
- The leaf renders as a scrollable, pinch-zoomable canvas, OR
- Falls back to a beautiful sectioned list grouped by leaf position, with a small
  leaf diagram at the top showing where each group sits
Decide which is better and justify your choice. Test at 360px.

DATA
Create data/dishes.ts with a full typed dish list. Every dish needs: id, name,
malayalamName, description, category, leafPosition {x, y}, tier (26/36/64),
ingredients[], isVegan, image. Populate all 36 dishes for the premium tier with
real, accurate Kerala sadhya dishes and correct Malayalam names. Flag which ones
need photos from me.

ALSO BUILD: a "Sadhya Leaf Guide" section below the leaf — an explainer on why
each dish sits where it does, why you eat left to right, why the leaf tip faces
left. This is a major SEO asset and positions us as the authority rather than
just another vendor.

Server-render everything. This page must be fully crawlable.

---

## Definition of done

- [ ] All 36 dishes render at correct leaf positions with accurate Malayalam names
- [ ] Tier toggle animates dishes in and out and updates price live
- [ ] Serving-order animation plays in correct traditional sequence
- [ ] Mobile version is genuinely usable at 360px, not a shrunken desktop leaf
- [ ] Page is fully crawlable with JavaScript disabled

---

## Completion protocol

Do all of the following before ending this phase:

1. Run the build and confirm it compiles with no errors.
2. Verify every item in the definition of done above. Report honestly on any you could not meet.
3. Update `docs/build/PROGRESS.md`: mark Phase 04 complete, add the date, and write
   2-4 lines under "Notes" covering decisions you made, anything you deviated from,
   and anything the user must supply before the next phase.
4. Commit with the message: `Phase 04: The Interactive Sadya Leaf`
5. Give the user a summary: what changed, which files, what to review, what is
   outstanding.

**Then stop.** Do not begin the next phase. Wait for the user to approve this one.
When approved, the next phase is `docs/build/PHASE-05-booking.md`.
