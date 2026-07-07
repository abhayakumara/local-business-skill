// Single source of truth for the deployed origin. Swap this for the real
// production domain (or set NEXT_PUBLIC_SITE_URL on Vercel) — every canonical
// URL, sitemap entry, and JSON-LD block derives from it.
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://lumen-studio-demos.vercel.app';
