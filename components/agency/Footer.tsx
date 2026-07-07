import Link from 'next/link';
import { agency, demoSites, footerNav } from '@/content/agency';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.07]">
      <div className="container-page grid gap-12 py-16 md:grid-cols-3">
        <div className="flex flex-col gap-4">
          <p className="heading-display flex items-center gap-2.5 text-2xl font-bold text-white">
            <span
              aria-hidden
              className="grid h-8 w-8 place-items-center rounded-xl bg-gradient-to-br from-aurora-violet to-aurora-cyan text-sm font-black"
            >
              L
            </span>
            {agency.name}
          </p>
          <p className="max-w-xs text-sm leading-relaxed text-white/45">
            {agency.tagline}. Based in {agency.city}, working with local
            businesses everywhere.
          </p>
        </div>

        <nav aria-label="Footer" className="flex flex-col gap-3">
          <p className="text-xs font-bold uppercase tracking-wider text-white/35">Studio</p>
          {footerNav.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="w-fit text-sm text-white/60 transition-colors hover:text-aurora-cyan"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <nav aria-label="Live demos" className="flex flex-col gap-3">
          <p className="text-xs font-bold uppercase tracking-wider text-white/35">Live demos</p>
          {demoSites.map((d) => (
            <Link
              key={d.slug}
              href={`/${d.slug}`}
              className="w-fit text-sm text-white/60 transition-colors hover:text-aurora-cyan"
            >
              {d.name} — {d.industry}
            </Link>
          ))}
        </nav>
      </div>

      <div className="border-t border-white/[0.07]">
        <div className="container-page flex flex-col items-center justify-between gap-2 py-6 text-xs text-white/35 sm:flex-row">
          <p>
            © {year} {agency.name}. All rights reserved.
          </p>
          <p>Every demo on this site is real, live, and ready to become yours.</p>
        </div>
      </div>
    </footer>
  );
}
