'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { agency, footerNav } from '@/content/agency';

// Fixed glass navbar: transparent over the hero, frosted after scroll.
export function Navbar() {
  const reduce = useReducedMotion();
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
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? 'glass-dark shadow-2xl' : 'border-b border-transparent'
      }`}
    >
      <div className="container-page flex h-16 items-center justify-between sm:h-20">
        <Link
          href="/"
          className="heading-display flex items-center gap-2.5 text-lg font-bold tracking-tight text-white"
          onClick={() => setOpen(false)}
        >
          <span
            aria-hidden
            className="grid h-8 w-8 place-items-center rounded-xl bg-gradient-to-br from-aurora-violet to-aurora-cyan text-sm font-black text-white shadow-glow"
          >
            L
          </span>
          {agency.name}
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          {footerNav.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full px-4 py-2 text-sm text-white/70 transition-colors hover:bg-white/5 hover:text-white"
            >
              {l.label}
            </a>
          ))}
          <a href="#contact" className="btn-aurora ml-3 !px-6 !py-2.5">
            Start a project
          </a>
        </nav>

        <button
          type="button"
          className="grid h-11 w-11 place-items-center rounded-full border border-white/15 text-white lg:hidden"
          aria-expanded={open}
          aria-controls="agency-mobile-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="relative block h-3.5 w-5" aria-hidden>
            <span
              className={`absolute left-0 top-0 h-0.5 w-full bg-current transition-transform duration-300 ${open ? 'translate-y-1.5 rotate-45' : ''}`}
            />
            <span
              className={`absolute left-0 top-1.5 h-0.5 w-full bg-current transition-opacity duration-300 ${open ? 'opacity-0' : ''}`}
            />
            <span
              className={`absolute left-0 top-3 h-0.5 w-full bg-current transition-transform duration-300 ${open ? '-translate-y-1.5 -rotate-45' : ''}`}
            />
          </span>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="agency-mobile-nav"
            aria-label="Mobile"
            initial={reduce ? false : { opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={reduce ? undefined : { opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="glass-dark overflow-hidden border-t border-white/10 lg:hidden"
          >
            <div className="container-page flex flex-col gap-1 py-4">
              {footerNav.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="rounded-2xl px-4 py-3 text-base text-white/80 transition-colors hover:bg-white/5 hover:text-white"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#contact"
                className="btn-aurora mt-2"
                onClick={() => setOpen(false)}
              >
                Start a project
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
