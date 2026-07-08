'use client';

import { useEffect, useState } from 'react';
import { business } from '@/content/salon';
import { PhoneIcon } from './icons';

const links = [
  { href: '#about', label: 'About' },
  { href: '#ritual', label: 'The Ritual' },
  { href: '#services', label: 'Services' },
  { href: '#team', label: 'Team' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#visit', label: 'Visit' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass shadow-glass' : 'bg-transparent'
      }`}
    >
      <nav
        className="container-page flex h-20 items-center justify-between"
        aria-label="Primary"
      >
        <a
          href="#main"
          className={`heading-display text-xl font-bold tracking-tight transition-colors text-ink`}
        >
          {business.shortName}
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`text-sm font-medium transition-colors hover:text-gold-500 text-ink/80`}
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a href="#book" className="btn-primary">
              Book Now
            </a>
          </li>
        </ul>

        <div className="flex items-center gap-3 md:hidden">
          <a
            href={`tel:${business.phone.replace(/[^\d+]/g, '')}`}
            className={`rounded-full p-2 text-ink`}
            aria-label={`Call ${business.name}`}
          >
            <PhoneIcon />
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className={`rounded-full p-2 text-ink`}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label="Toggle menu"
          >
            <span className="sr-only">Menu</span>
            <div className="flex w-6 flex-col gap-1.5" aria-hidden>
              <span
                className={`h-0.5 w-full bg-current transition-transform ${open ? 'translate-y-2 rotate-45' : ''}`}
              />
              <span
                className={`h-0.5 w-full bg-current transition-opacity ${open ? 'opacity-0' : ''}`}
              />
              <span
                className={`h-0.5 w-full bg-current transition-transform ${open ? '-translate-y-2 -rotate-45' : ''}`}
              />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        id="mobile-menu"
        className={`glass overflow-hidden border-t border-white/40 md:hidden ${
          open ? 'max-h-96' : 'max-h-0'
        } transition-[max-height] duration-300 ease-in-out`}
      >
        <ul className="container-page flex flex-col gap-1 py-4">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-4 py-3 text-base font-medium text-ink/80 hover:bg-mauve-50 hover:text-mauve-700"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li className="px-1 pt-2">
            <a
              href="#book"
              onClick={() => setOpen(false)}
              className="btn-primary w-full"
            >
              Book Now
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
