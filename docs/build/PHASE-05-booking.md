# Phase 05 — Booking Modal, Calculator & Availability

> Part of the Sree Padmanabha rebuild. Read `CLAUDE.md` at the repo root first —
> it holds the locked design system that this phase depends on.

**Prerequisites:** Phases 1-3 complete. The booking modal is triggered from CTAs built in Phase 3.

---

## Task

The revenue engine. This is where visitors become leads.


Build the booking system. Frontend only for now — persist to localStorage and a
mock API layer that we'll swap for the real backend in Phase 9.

1. BOOK SADHYA MODAL
A modal that opens from every "Book Sadhya" CTA site-wide. Must be genuinely
well-executed, not a bolted-on form.

  Step 1 — Event
    Event type (Wedding / Festival / Corporate / House warming / Other) as
    selectable cards with icons, not a dropdown
    Date via calendar (see availability below)
    Guest count via a slider with a number input, 50–2000

  Step 2 — Menu
    Tier selection: 26 / 36 / 64 dish, showing per-plate price
    Add-ons as toggles: extra payasam varieties, live counters, non-veg sides,
    serving staff, banana leaf sourcing, disposable cutlery
    LIVE RUNNING TOTAL, always visible, updating as they choose

  Step 3 — Details
    Name, phone, email, venue location, special requirements
    Keep this step SHORT — every extra field loses enquiries

  Step 4 — Confirm
    Full summary, estimated total with a clear "final quote after consultation"
    note, and two actions: "Send enquiry" and "Continue on WhatsApp"

  MODAL BEHAVIOUR:
  - On mobile it becomes a full-screen sheet that slides up, not a cramped modal
  - Progress indicator across the top
  - State persists if they close and reopen
  - Smooth height transitions between steps, no jumping
  - Escape to close, backdrop click to close, focus trapped inside, focus
    returned to the trigger on close
  - Deep-linkable: /?book=true opens it, and tier cards pre-select their tier

2. LIVE COST CALCULATOR — a standalone /calculator page using the same engine.
   Guest count x tier x add-ons, with a live-updating breakdown and a shareable
   result. This is the number one thing every visitor wants and nobody in Kerala
   offers it. It also pre-qualifies leads — anyone who sees Rs 4L and continues
   is a serious buyer.
   Add a "Download quote as PDF" button.

3. AVAILABILITY CALENDAR
   Month view with three states: Available (ela-fresh), Limited (turmeric),
   Booked (muted). Mark Onam, Vishu, Thiruvathira and known muhurtham dates as
   high-demand with a note that these book out months ahead. Creates real urgency
   and saves phone calls. Booked dates are unselectable in the modal.

4. WHATSAPP DEEP-LINKING
   Every quote and enquiry action builds a prefilled WhatsApp message containing
   their actual selections — event type, date, guest count, tier, add-ons,
   estimated total. WhatsApp is where the deal actually closes in this market, so
   this handoff must be seamless.

5. Validation with react-hook-form + zod. Clear, specific error messages — say
   what's wrong and how to fix it, never just "Invalid input". Indian phone
   number validation.

Build lib/pricing.ts as a single source of truth for all pricing logic so the
calculator, modal and future admin panel share one implementation.

---

## Definition of done

- [ ] Modal opens from every Book Sadhya CTA site-wide
- [ ] Running total updates live and matches lib/pricing.ts exactly
- [ ] Modal is a full-screen sheet on mobile, not a cramped dialog
- [ ] Focus is trapped, Escape closes, focus returns to trigger on close
- [ ] State persists across close and reopen
- [ ] WhatsApp handoff contains the complete selection
- [ ] Booked dates are unselectable

---

## Completion protocol

Do all of the following before ending this phase:

1. Run the build and confirm it compiles with no errors.
2. Verify every item in the definition of done above. Report honestly on any you could not meet.
3. Update `docs/build/PROGRESS.md`: mark Phase 05 complete, add the date, and write
   2-4 lines under "Notes" covering decisions you made, anything you deviated from,
   and anything the user must supply before the next phase.
4. Commit with the message: `Phase 05: Booking Modal, Calculator & Availability`
5. Give the user a summary: what changed, which files, what to review, what is
   outstanding.

**Then stop.** Do not begin the next phase. Wait for the user to approve this one.
When approved, the next phase is `docs/build/PHASE-06-pages.md`.
