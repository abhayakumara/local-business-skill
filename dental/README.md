# Northway Dental Studio — Premium Dental Practice Website

A production-ready, content-driven marketing website for a dental practice.
Built as a **reusable starter** on the same architecture as the restaurant and
salon starters in this repo: the design system, components, and animations stay
put while everything business-specific lives in editable content files.

Deploy to Vercel with zero configuration. No database, no server.

![Northway Dental Studio](public/images/og-image.svg)

---

## ✨ What's inside

- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind CSS** design system (clean clinical sky / mint / cloud palette)
- **Framer Motion** scroll reveals, animated treatment tabs, testimonial carousel
- Fully **responsive**, **accessible** (keyboard nav, focus rings, ARIA, reduced-motion)
- **SEO**: metadata, Open Graph, JSON-LD (`Dentist` + `FAQPage`), `sitemap.xml`, `robots.txt`
- **Statically prerendered** — every route is HTML
- Working appointment form (composes an email — no backend required)
- **Insurance & payment** trust band — an industry-specific section that
  reassures patients about cost and coverage before they call

### Sections
Hero · About · Treatments & Pricing (filterable) · Team · Insurance · Gallery · Testimonials · Book · Visit/Map · FAQ · Footer

---

## 🚀 Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

---

## 🖊️ Personalize for a new practice

**You only edit `/content` and swap images — no component code.**

| File | What it controls |
|------|------------------|
| `content/business.ts` | Name, tagline, hours, address, phone, email, socials, map, geo |
| `content/services.ts` | Treatment categories + treatments (name, price, appt length, image) |
| `content/team.ts` | Dentists & hygienists (name, role, specialty, photo) |
| `content/insurance.ts` | Accepted plans + membership note for the trust band |
| `content/gallery.ts` | Practice photos |
| `content/testimonials.ts` | Patient reviews + star ratings |
| `content/faqs.ts` | Frequently asked questions |

Every field is **type-checked** against `lib/types.ts`.

### Swapping in real images
Images map **1:1** to their content by filename. The demo ships branded SVG
placeholders; replace them with real photography (ideally `.webp`) and update
the path in the content file.

```
public/images/
  services/  teeth-whitening.svg   →  teeth-whitening.webp
  team/      dr-elena-marsh.svg    →  dr-elena-marsh.webp
  gallery/   treatment-room.svg    →  treatment-room.webp
  hero.svg, about-practice.svg, og-image.svg
```

> Keep the treatment↔file naming convention (`Teeth Whitening → teeth-whitening.webp`).
> It keeps content readable and replacements unambiguous.

Regenerate the placeholder set any time with:

```bash
node scripts/generate-placeholders.mjs
```

---

## ☁️ Deploy to Vercel

1. Push to GitHub.
2. Import at [vercel.com/new](https://vercel.com/new). **Set the root directory to `dental/`.**
3. Framework preset **Next.js** is auto-detected — accept the defaults and deploy.

No environment variables required.

---

Built as a client-facing sales demo. Make it yours.
