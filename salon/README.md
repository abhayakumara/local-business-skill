# Maison Lumière — Premium Salon & Spa Website

A production-ready, content-driven marketing website for a hair salon & day spa.
Built as a **reusable starter** on the same architecture as the restaurant
starter in this repo: the design system, components, and animations stay put
while everything business-specific lives in editable content files.

Deploy to Vercel with zero configuration. No database, no server.

![Maison Lumière](public/images/og-image.svg)

---

## ✨ What's inside

- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind CSS** design system (calm mauve / gold / ivory palette)
- **Framer Motion** scroll reveals, animated service tabs, testimonial carousel
- Fully **responsive**, **accessible** (keyboard nav, focus rings, ARIA, reduced-motion)
- **SEO**: metadata, Open Graph, JSON-LD (`BeautySalon` + `FAQPage`), `sitemap.xml`, `robots.txt`
- **Statically prerendered** — every route is HTML
- Working booking form (composes an email — no backend required)

### Sections
Hero · About · Services & Pricing (filterable) · Team · Gallery · Testimonials · Booking · Visit/Map · FAQ · Footer

---

## 🚀 Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

---

## 🖊️ Personalize for a new salon

**You only edit `/content` and swap images — no component code.**

| File | What it controls |
|------|------------------|
| `content/business.ts` | Name, tagline, hours, address, phone, email, socials, map, geo |
| `content/services.ts` | Service categories + services (name, price, duration, image, signature) |
| `content/team.ts` | Stylists & therapists (name, role, specialty, photo) |
| `content/gallery.ts` | Interior & result photos |
| `content/testimonials.ts` | Client reviews + star ratings |
| `content/faqs.ts` | Frequently asked questions |

Every field is **type-checked** against `lib/types.ts`.

### Swapping in real images
Images map **1:1** to their content by filename. The demo ships branded SVG
placeholders; replace them with real photography (ideally `.webp`) and update
the path in the content file.

```
public/images/
  services/  hair-spa.svg       →  hair-spa.webp
  team/      amara-okafor.svg   →  amara-okafor.webp
  gallery/   spa-room.svg       →  spa-room.webp
  hero.svg, about-studio.svg, og-image.svg
```

> Keep the service↔file naming convention (`Hair Spa → hair-spa.webp`,
> `Facial → facial.webp`). It keeps content readable and replacements
> unambiguous.

Regenerate the placeholder set any time with:

```bash
node scripts/generate-placeholders.mjs
```

---

## ☁️ Deploy to Vercel

1. Push to GitHub.
2. Import at [vercel.com/new](https://vercel.com/new). **Set the root directory to `salon/`.**
3. Framework preset **Next.js** is auto-detected — accept the defaults and deploy.

No environment variables required.

---

Built as a client-facing sales demo. Make it yours.
