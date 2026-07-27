# Phase 09 — Integration

> Part of the Sree Padmanabha rebuild. Read `CLAUDE.md` at the repo root first —
> it holds the locked design system that this phase depends on.

**Prerequisites:** Phases 1-8 complete. This is the wiring phase.

---

## Task

Wire the frontend to the real backend, replacing all mock data.

1. Replace every hardcoded data import and mock API call with real fetches.
   Search the codebase for remaining mock/static data and list what you find
   before changing anything.

2. Server components fetch directly with appropriate Next.js cache tags. Use
   revalidateTag from the admin mutations so an admin edit reflects on the live
   site within seconds without a full rebuild.

3. Wire the booking modal to POST /api/enquiries. On success: confirmation email
   to the customer, WhatsApp alert to the team, and the enquiry appears live in
   the admin dashboard.

4. Wire lib/pricing.ts to read from the PricingConfig API so admin price changes
   take effect immediately across the calculator, the modal and quote PDFs. This
   must be a single source of truth — no duplicated rates anywhere.

5. Wire the availability calendar to real data both directions.

6. Active offers render as a site-wide banner when enabled in admin.

7. Brochures list from the API with working download tracking.

8. Error handling: proper error boundaries, retry with backoff, and graceful
   degradation. If the API is down the site must still render cached content
   rather than showing a broken page.

9. Set up environment variables properly for local, preview and production.

10. Write integration tests for the booking flow end to end: modal → API →
    database → admin dashboard.

Deploy the backend (Railway or Render) and confirm the full loop works in
production.

---

## Definition of done

- [ ] No mock or hardcoded data remains anywhere in the frontend
- [ ] An admin price change appears on the live site within seconds
- [ ] Booking flow works end to end: modal to database to admin dashboard
- [ ] Site degrades gracefully if the API is unreachable

---

## Completion protocol

Do all of the following before ending this phase:

1. Run the build and confirm it compiles with no errors.
2. Verify every item in the definition of done above. Report honestly on any you could not meet.
3. Update `docs/build/PROGRESS.md`: mark Phase 09 complete, add the date, and write
   2-4 lines under "Notes" covering decisions you made, anything you deviated from,
   and anything the user must supply before the next phase.
4. Commit with the message: `Phase 09: Integration`
5. Give the user a summary: what changed, which files, what to review, what is
   outstanding.

**Then stop.** Do not begin the next phase. Wait for the user to approve this one.
When approved, the next phase is `docs/build/PHASE-10-launch.md`.
