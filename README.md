# Lumen Studio — Local Business Website Showcase

One Next.js application, five experiences: a premium **agency landing page**
plus a complete, production-ready **demo website for each industry** — all
served from a single deployment, switchable by URL.

Built to win clients during a live demo: open `/`, let them pick their
industry, and show them their future website.

| Route | What it is | Brand | Signature section |
|-------|------------|-------|-------------------|
| `/` | Agency landing page | **Lumen Studio** — dark, aurora gradients, interactive 3D hero | Live demo gallery |
| `/restaurant` | Restaurant demo | **Saffron & Sage** — saffron / sage, Cormorant | Filterable menu |
| `/salon` | Salon & spa demo | **Maison Lumière** — mauve / gold, Cormorant | Treatment menu + team |
| `/dental` | Dental practice demo | **Northway Dental Studio** — sky / mint, Fraunces | Insurance & payment band |
| `/gym` | Gym & fitness demo | **Apex Athletic Club** — forge / volt, Oswald | Membership pricing tiers |

A floating showcase bar on every demo lets prospects hop between industries
(and back to the agency page) without touching the URL bar.

---

## ✨ What's inside

- **Next.js 14** (App Router) + **TypeScript**, fully statically prerendered
- **Tailwind CSS** — one design system, five brands via CSS-variable theming
- **Framer Motion** — scroll reveals, staggered headlines, magnetic buttons,
  tilt cards, animated counters, cinematic hero push-ins, marquees,
  depth-staged hero parallax, scroll-drawn process line
- **Lenis** — buttery inertial scrolling site-wide (anchor-aware, disabled
  for `prefers-reduced-motion`)
- **React Three Fiber** — interactive 3D hero on the landing page with
  iridescent glass shapes and a revolving particle field (lazy-loaded,
  WebGL-gated, wrapped in an error boundary, skipped for
  `prefers-reduced-motion`)
- **SEO** — per-route metadata + Open Graph, industry JSON-LD
  (`Restaurant`, `BeautySalon`, `Dentist`, `ExerciseGym`,
  `ProfessionalService`, `FAQPage`), `sitemap.xml`, `robots.txt`
- **Accessible** — keyboard nav, visible focus rings, ARIA labels, skip link,
  reduced-motion support throughout
- Working forms with **zero backend** (they compose an email) — swap in a
  form service later without touching markup

## 🚀 Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (all routes static)
npm run lint
```

## ☁️ Deploy to Vercel — one project, every demo

1. Push this repo to GitHub.
2. Import it at [vercel.com/new](https://vercel.com/new) — the Next.js preset
   is auto-detected. **Accept the defaults.** No environment variables, no
   database, no extra config.
3. Every route deploys together: `your-app.vercel.app/`, `/restaurant`,
   `/salon`, `/dental`, `/gym`.

Optionally set `NEXT_PUBLIC_SITE_URL` to your production origin so canonical
URLs, the sitemap, and JSON-LD reference the right domain (defaults live in
`lib/site.ts`).

## 📁 Structure

```
app/
  layout.tsx            root layout (agency metadata, fonts, skip link)
  page.tsx              agency landing page
  globals.css           one stylesheet, five theme scopes (.theme-*)
  restaurant|salon|dental|gym/
    layout.tsx          per-demo theme wrapper, font, metadata, JSON-LD
    page.tsx            the demo one-pager
components/
  agency/               landing page sections (Hero, Showcase, Process, …)
  restaurant|salon|dental|gym/   demo sections
  ui/                   shared primitives: Reveal, SectionHeading, Magnetic,
                        TiltCard, AnimatedCounter, Marquee, ShowcaseBar,
                        social icons
content/
  agency.ts             ← landing page copy, demos, FAQs
  restaurant|salon|dental|gym/  ← per-demo business content (personalize here)
lib/
  types.ts              content type definitions (guard rails for editors)
  site.ts               deployed origin (NEXT_PUBLIC_SITE_URL override)
public/images/<demo>/   1:1 named placeholder art (drop in real .webp photos)
scripts/placeholders/   regenerate any demo's placeholder art
```

## 🎨 How the theming works

Each demo route wraps its page in a `.theme-*` class that sets four CSS
variables — ink (text), brand (accent), surface (background), and the display
font. Shared components (`SectionHeading`, `.btn-primary`, `.field`, shadows,
focus rings) resolve those variables, so the same component renders on-brand
inside every demo. Adding a sixth vertical means: new theme block in
`globals.css`, new palette in `tailwind.config.ts`, new `content/<vertical>/`
folder, new route — the component library comes for free.

## 🖊️ Personalizing a demo for a real client

**Edit `/content/<demo>` and swap images — no component code.**

Every field is type-checked against `lib/types.ts`. Images map 1:1 to content
by filename (`Masala Dosa → masala-dosa.webp`); the shipped SVG placeholders
are drop-in replaceable with real photography. Regenerate placeholder art any
time:

```bash
node scripts/placeholders/restaurant.mjs   # or salon / dental / gym / agency
```

---

Built as a client-facing sales tool. Open the landing page, share your
screen, and let the demos close the deal.
