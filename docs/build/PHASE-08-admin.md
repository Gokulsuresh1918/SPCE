# Phase 08 — Admin Dashboard

> Part of the Sree Padmanabha rebuild. Read `CLAUDE.md` at the repo root first —
> it holds the locked design system that this phase depends on.

**Prerequisites:** Phase 7 complete — the admin dashboard consumes the Phase 7 API.

---

## Task

Everything you asked for: pricing config, brochures, offers, events.


Build the admin dashboard at /admin in the Next.js app, consuming the Phase 7 API.

FIRST: search the codebase for any existing admin route, auth setup, or dashboard
components. If something exists, extend it rather than replacing it and tell me
what you found. If nothing exists, build fresh.

DESIGN: This is an internal tool used daily by non-technical staff, possibly on a
phone. Prioritise clarity and speed over decoration. Use the Ela palette but
restrained — mostly rice background, ela-deep sidebar, turmeric for active
states. Dense, scannable, fast.

SCREENS

1. LOGIN — email + password, JWT, remember me, rate-limited.

2. OVERVIEW
   New enquiries today / this week / this month
   Conversion funnel: new → contacted → quoted → confirmed
   Revenue booked this month vs last
   Upcoming events in the next 30 days
   Recent enquiries feed
   Most-viewed dishes and most-downloaded brochures

3. ENQUIRIES (most-used screen — make it excellent)
   Table with filters: status, date range, event type, guest count
   Click a row → detail panel with full submission, estimated total, and the
   ability to add internal notes
   Drag-and-drop status pipeline (kanban) as an alternative view
   One-tap "Call" and "WhatsApp" buttons on each enquiry — staff will use this
   from a phone
   Export to CSV
   Unread indicator and a browser notification on new enquiry

4. PRICING — the screen you specifically need
   Edit per-plate price for each tier (26/36/64)
   Edit every add-on rate: extra payasam, live counters, non-veg sides, serving
   staff, leaf sourcing, cutlery
   Distance-based charges by district
   Peak-season multiplier with a date-range picker
   Minimum guest count
   A LIVE PREVIEW panel showing what a sample 300-guest quote would cost with the
   current settings — so staff can see the impact before saving
   Change history: who changed what price when

5. MENU — CRUD on dishes. Drag to reorder. Visual leaf-position editor: drag a
   dish onto a leaf diagram to set its position. Assign dishes to tiers via
   checkboxes. Bulk activate/deactivate. Image upload.

6. AVAILABILITY — calendar view. Click a date to cycle available → limited →
   booked. Bulk-select a range. Attach a note to any date. Links booked dates to
   their confirmed enquiry.

7. OFFERS — create and manage promotions. Title, description, discount type
   (percent or flat), value, valid date range, banner image, and a toggle for
   "show as site-wide banner". Live preview of how the banner will appear.
   Auto-expire past the end date.

8. BROCHURES — upload PDFs with a title, description and category. Thumbnail
   auto-generated from page one. Reorder. See download counts. Toggle visibility.

9. GALLERY & EVENTS — create albums for each catered event with title, date,
   guest count, location, menu served, and a client quote. Bulk image upload with
   drag-to-reorder. Mark items featured for the homepage. Publish/unpublish.

10. TESTIMONIALS — add, edit, approve. Feature on homepage toggle.

11. SETTINGS — phone numbers with labels, email, address, WhatsApp number, social
    links, hero headline and subhead, stated response time. Everything here must
    flow through to the live site immediately.

12. USERS — admin only. Add staff accounts, set roles.

REQUIREMENTS
- Fully responsive. Staff will check enquiries on a phone between events, so the
  enquiries screen especially must work well at 360px.
- Optimistic UI updates with rollback on failure
- Toast confirmations on every save — "Pricing updated", not "Success"
- Unsaved-changes warning before navigating away
- Confirmation dialog on every destructive action
- Empty states that invite action, not blank screens
- Loading skeletons, never spinners on full pages

Use TanStack Query for server state, react-hook-form + zod for all forms.

---

## Definition of done

- [ ] Every screen listed is built and functional
- [ ] Pricing changes reflect on the live site
- [ ] Enquiries screen is fully usable at 360px
- [ ] Every save shows a specific confirmation toast
- [ ] Destructive actions require confirmation

---

## Completion protocol

Do all of the following before ending this phase:

1. Run the build and confirm it compiles with no errors.
2. Verify every item in the definition of done above. Report honestly on any you could not meet.
3. Update `docs/build/PROGRESS.md`: mark Phase 08 complete, add the date, and write
   2-4 lines under "Notes" covering decisions you made, anything you deviated from,
   and anything the user must supply before the next phase.
4. Commit with the message: `Phase 08: Admin Dashboard`
5. Give the user a summary: what changed, which files, what to review, what is
   outstanding.

**Then stop.** Do not begin the next phase. Wait for the user to approve this one.
When approved, the next phase is `docs/build/PHASE-09-integration.md`.
