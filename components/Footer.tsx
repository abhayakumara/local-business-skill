import { business } from '@/content';
import { socialIcons } from './ui/icons';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#menu', label: 'Menu' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#reserve', label: 'Reservations' },
  { href: '#visit', label: 'Visit' },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-white">
      <div className="container-page grid gap-12 py-16 md:grid-cols-3">
        <div className="flex flex-col gap-4">
          <p className="heading-display text-2xl font-bold">{business.name}</p>
          <p className="max-w-xs text-sm leading-relaxed text-white/55">
            {business.tagline}. {business.address.city}, {business.address.region}.
          </p>
          <div className="mt-2 flex gap-3">
            {business.social.map((s) => {
              const Icon = socialIcons[s.icon];
              return (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white/80 transition-colors hover:bg-saffron-500 hover:text-white"
                >
                  <Icon />
                </a>
              );
            })}
          </div>
        </div>

        <nav aria-label="Footer" className="flex flex-col gap-3">
          <p className="text-xs font-semibold uppercase tracking-wider text-white/40">
            Explore
          </p>
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-white/70 transition-colors hover:text-saffron-300"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex flex-col gap-3">
          <p className="text-xs font-semibold uppercase tracking-wider text-white/40">
            Get in touch
          </p>
          <a
            href={`tel:${business.phone.replace(/[^\d+]/g, '')}`}
            className="text-sm text-white/70 transition-colors hover:text-saffron-300"
          >
            {business.phone}
          </a>
          <a
            href={`mailto:${business.email}`}
            className="text-sm text-white/70 transition-colors hover:text-saffron-300"
          >
            {business.email}
          </a>
          <p className="mt-2 text-sm text-white/55">
            {business.address.street}
            <br />
            {business.address.city}, {business.address.region}{' '}
            {business.address.postalCode}
          </p>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col items-center justify-between gap-2 py-6 text-xs text-white/40 sm:flex-row">
          <p>
            © {year} {business.name}. All rights reserved.
          </p>
          <p>Crafted as a launch-ready demo · Personalize in /content.</p>
        </div>
      </div>
    </footer>
  );
}
