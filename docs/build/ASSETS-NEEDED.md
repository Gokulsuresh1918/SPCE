# Assets & Accounts Needed

Claude Code cannot invent these. Gather them in parallel with the build.


Claude Code can't invent these. Gather them in parallel with the build:

**Photography (highest priority)** — a professional shoot is the single best investment you can make here. Food is the product.
- 30+ dish shots, overhead, on banana leaf, natural light
- A full sadhya leaf, laid out correctly, shot from above
- Kitchen and prep — the 4am chopping, the vessels, the chefs' hands
- 20+ real event photos across weddings, festivals and corporate
- Team and family portraits for the About page

**Content**
- 6+ recent testimonials with names, event type, location and date (your only current one is from December 2022)
- The real family story — 1993 to today, three generations
- Confirmed per-plate pricing for each tier
- Actual list of districts you serve
- Real dish names in Malayalam, verified

**Specific placeholder spots (Phase 00)** — these now show a branded fallback graphic
instead of a grey box, but still need a real photo dropped in:
- `client/app/page.tsx` — About-section image, testimonial avatar
- `client/app/about/page.tsx` — hero banner, founder portrait, 6 leadership headshots
- `client/app/services/page.tsx` / `client/components/home/services-grid.tsx` — 7 service card images
- `client/components/home/call-to-action.tsx` — full-bleed background image
- `client/components/home/partner-network.tsx` — 8 partner logos
- `client/app/dashboard/page.tsx` — client avatar, event image (note: `/dashboard` isn't linked
  from anywhere yet — confirm if it's still needed before investing in photos here)
- `client/app/menu/page.tsx` — 6 dish images (note: this route also isn't linked from
  anywhere and duplicates `/dishes`, which now pulls real dish data from the API — worth
  deciding whether to delete `/menu` in a later phase rather than photograph it)
- Dishes, gallery, testimonials and team photos are fetched live from the database via
  `/private` — upload real images there rather than editing the frontend

**Accounts**
- Cloudinary (free tier is fine to start)
- MongoDB Atlas
- Resend or Gmail SMTP
- WhatsApp Business API — Gupshup is cheapest for India
- Railway or Render for the backend
- A real domain — move off the vercel.app subdomain before launch; it hurts credibility with premium wedding clients

---

