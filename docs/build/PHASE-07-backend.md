# Phase 07 — Express Backend

> Part of the Sree Padmanabha rebuild. Read `CLAUDE.md` at the repo root first —
> it holds the locked design system that this phase depends on.

**Prerequisites:** Phases 1-6 complete. Backend is independent of frontend styling but shares types.

---

## Task

Build the backend. Node + Express + MongoDB (Mongoose) + TypeScript, in a
/server directory in the same repo.

MODELS
  Dish          name, malayalamName, description, category, leafPosition,
                tiers[], ingredients[], isVegan, allergens[], image, order, active
  MenuTier      name, dishCount, pricePerPlate, inclusions[], popular, active
  Package       name, description, price, inclusions[], tier, image, active
  PricingConfig baseRates, addOnRates, distanceCharges, staffCharges,
                peakSeasonMultiplier, minimumGuests
  Enquiry       eventType, date, guestCount, tier, addOns[], name, phone, email,
                venue, notes, estimatedTotal, status (new/contacted/quoted/
                confirmed/completed/lost), assignedTo, internalNotes[], source,
                createdAt
  Availability  date, status (available/limited/booked), note, eventId
  Offer         title, description, discountType, discountValue, validFrom,
                validTo, bannerImage, active, showAsBanner
  Brochure      title, description, category, fileUrl, thumbnail,
                downloadCount, active
  GalleryItem   title, category, image, eventDate, guestCount, location,
                featured, order, albumId
  Album         title, slug, description, coverImage, eventType, guestCount,
                location, date, menuServed, clientQuote, published
  Testimonial   name, event, location, date, rating, quote, image, featured,
                approved
  SiteSettings  phones[{label,number}], email, address, socialLinks,
                heroContent, whatsappNumber, responseTime

ENDPOINTS
  Public (read-only, cached):
    GET  /api/dishes, /api/tiers, /api/packages, /api/gallery, /api/albums/:slug,
         /api/testimonials, /api/offers/active, /api/brochures,
         /api/availability?month=, /api/settings
    POST /api/enquiries          — create lead, triggers notifications
    POST /api/quote              — calculate + generate PDF
    POST /api/brochures/:id/download  — increment counter

  Admin (JWT protected):
    Full CRUD on every model
    POST  /api/admin/auth/login, /refresh, /logout
    GET   /api/admin/enquiries?status=&from=&to=
    PATCH /api/admin/enquiries/:id/status
    POST  /api/admin/upload      — Cloudinary
    GET   /api/admin/stats       — dashboard metrics

INFRASTRUCTURE
  - JWT with refresh tokens in httpOnly cookies. Bcrypt on passwords. Roles:
    admin and staff (staff can't change pricing or delete).
  - Cloudinary for all images — auto format, auto quality, responsive
    transformations. Do not store images on the server; there will be hundreds of
    food photos and Vercel's handling won't cut it.
  - Nodemailer or Resend: enquiry confirmation to the customer, notification to
    the team.
  - WhatsApp Business API (Gupshup or Twilio) for enquiry alerts to the team.
  - Puppeteer for branded quote PDF generation.
  - Zod validation on every endpoint. Rate limiting on public POST routes.
    Helmet, CORS locked to our domain, mongo-sanitize.
  - Structured error handling — never leak stack traces.
  - Seed script populating all 36 dishes, 3 tiers, and default pricing.

Write it in TypeScript with shared types in /shared/types.ts that the frontend
imports, so the API contract can't drift.

---

## Definition of done

- [ ] Every endpoint is documented and returns correct status codes
- [ ] Seed script populates 36 dishes, 3 tiers and default pricing
- [ ] Auth works with refresh token rotation
- [ ] Zod validation rejects malformed input on every route
- [ ] Shared types compile against the frontend

---

## Completion protocol

Do all of the following before ending this phase:

1. Run the build and confirm it compiles with no errors.
2. Verify every item in the definition of done above. Report honestly on any you could not meet.
3. Update `docs/build/PROGRESS.md`: mark Phase 07 complete, add the date, and write
   2-4 lines under "Notes" covering decisions you made, anything you deviated from,
   and anything the user must supply before the next phase.
4. Commit with the message: `Phase 07: Express Backend`
5. Give the user a summary: what changed, which files, what to review, what is
   outstanding.

**Then stop.** Do not begin the next phase. Wait for the user to approve this one.
When approved, the next phase is `docs/build/PHASE-08-admin.md`.
