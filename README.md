# Saffron & Sage — Premium Restaurant Website

A production-ready, content-driven marketing website for a local restaurant.
Built as a **reusable starter**: the design system, components, and animations
stay put while everything business-specific lives in editable content files.

Deploy to Vercel with zero configuration. No database, no server.

![Saffron & Sage](public/images/og-image.svg)

> **Looking for another industry?** A second starter built on the same
> architecture — **Maison Lumière**, a hair salon & day spa — lives in
> [`salon/`](salon/). Same component system and design philosophy, a calm
> mauve/gold palette, and a services/team/booking content model.

---

## ✨ What's inside

- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind CSS** design system (warm saffron / sage / cream palette)
- **Framer Motion** scroll reveals, animated menu tabs, testimonial carousel
- Fully **responsive**, **accessible** (keyboard nav, focus rings, ARIA, reduced-motion)
- **SEO**: metadata, Open Graph, JSON-LD (`Restaurant` + `FAQPage`), `sitemap.xml`, `robots.txt`
- **Statically prerendered** — every route is HTML, ~138 kB first load
- Working reservation form (composes an email — no backend required)

### Sections
Hero · About · Filterable Menu · Gallery · Testimonials · Reservation · Visit/Map · FAQ · Footer

---

## 🚀 Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

---

## 🖊️ Personalize for a new business

**You only edit `/content` and swap images — no component code.**

| File | What it controls |
|------|------------------|
| `content/business.ts` | Name, tagline, hours, address, phone, email, socials, map, geo |
| `content/menu.ts` | Menu categories + dishes (name, price, image, veg/spice, signature) |
| `content/gallery.ts` | Gallery photos |
| `content/testimonials.ts` | Guest reviews + star ratings |
| `content/faqs.ts` | Frequently asked questions |

Every field is **type-checked** against `lib/types.ts`, so you get autocomplete
and guard rails while editing.

### Swapping in real images
Images map **1:1** to their content by filename. The demo ships branded SVG
placeholders; replace them with real photography (ideally `.webp`) and update
the path in the content file.

```
public/images/
  menu/      paneer-butter-masala.svg  →  paneer-butter-masala.webp
  gallery/   dining-room.svg           →  dining-room.webp
  hero.svg, about-chef.svg, og-image.svg
```

> Keep the dish↔file naming convention (`Masala Dosa → masala-dosa.webp`).
> It keeps the content readable and replacements unambiguous.

Regenerate the placeholder set any time with:

```bash
node scripts/generate-placeholders.mjs
```

---

## 🍴 Reusing for another restaurant

1. Duplicate the repo.
2. Rewrite the five `/content` files with the new brand.
3. Drop in real photos under `public/images`.
4. (Optional) Re-theme by editing the `saffron` / `sage` colors in
   `tailwind.config.ts`.
5. Push to Vercel.

The application logic never needs to change.

---

## ☁️ Deploy to Vercel

1. Push this repo to GitHub.
2. Import it at [vercel.com/new](https://vercel.com/new).
3. Framework preset **Next.js** is auto-detected — accept the defaults and deploy.

No environment variables required.

---

## 📁 Structure

```
app/            layout, page, globals, sitemap, robots, favicon
components/      section components (Hero, Menu, Gallery, …)
components/ui/   Reveal, SectionHeading, icons (no icon library)
content/         ← personalize here
lib/types.ts     content type definitions
public/images/   placeholder assets (replace with real photos)
scripts/         placeholder image generator
```

---

Built as a client-facing sales demo. Make it yours.
