# Apex Athletic Club — Premium Gym & Fitness Website

A production-ready, content-driven marketing website for a strength &
conditioning gym. Built as a **reusable starter** on the same architecture as
the restaurant, salon, and dental starters in this repo: the design system,
components, and animations stay put while everything business-specific lives in
editable content files.

Deploy to Vercel with zero configuration. No database, no server.

![Apex Athletic Club](public/images/og-image.svg)

---

## ✨ What's inside

- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind CSS** design system (bold athletic forge / volt / concrete palette)
- **Framer Motion** scroll reveals, animated program tabs, testimonial carousel
- Fully **responsive**, **accessible** (keyboard nav, focus rings, ARIA, reduced-motion)
- **SEO**: metadata, Open Graph, JSON-LD (`ExerciseGym` + `FAQPage`), `sitemap.xml`, `robots.txt`
- **Statically prerendered** — every route is HTML
- Working join / free-class form (composes an email — no backend required)
- **Membership pricing tiers** — an industry-specific section with a featured
  plan, perks, and per-tier CTAs

### Sections
Hero · About · Programs (filterable) · Coaches · Membership · Gallery · Testimonials · Join · Visit/Map · FAQ · Footer

---

## 🚀 Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

---

## 🖊️ Personalize for a new gym

**You only edit `/content` and swap images — no component code.**

| File | What it controls |
|------|------------------|
| `content/business.ts` | Name, tagline, hours, address, phone, email, socials, map, geo |
| `content/programs.ts` | Program categories + classes (name, level, length, image) |
| `content/trainers.ts` | Coaches (name, role, specialty, photo) |
| `content/membership.ts` | Membership tiers (price, cadence, perks, featured flag, CTA) |
| `content/gallery.ts` | Gym floor + community photos |
| `content/testimonials.ts` | Member reviews + star ratings |
| `content/faqs.ts` | Frequently asked questions |

Every field is **type-checked** against `lib/types.ts`.

### Swapping in real images
Images map **1:1** to their content by filename. The demo ships branded SVG
placeholders; replace them with real photography (ideally `.webp`) and update
the path in the content file.

```
public/images/
  programs/  olympic-lifting.svg   →  olympic-lifting.webp
  trainers/  marcus-reid.svg       →  marcus-reid.webp
  gallery/   training-floor.svg    →  training-floor.webp
  hero.svg, about-gym.svg, og-image.svg
```

> Keep the program↔file naming convention (`Olympic Lifting → olympic-lifting.webp`).
> It keeps content readable and replacements unambiguous.

Regenerate the placeholder set any time with:

```bash
node scripts/generate-placeholders.mjs
```

---

## ☁️ Deploy to Vercel

1. Push to GitHub.
2. Import at [vercel.com/new](https://vercel.com/new). **Set the root directory to `gym/`.**
3. Framework preset **Next.js** is auto-detected — accept the defaults and deploy.

No environment variables required.

---

Built as a client-facing sales demo. Make it yours.
