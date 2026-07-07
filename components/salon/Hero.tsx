'use client';

import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { business } from '@/content/salon';
import { ArrowIcon, StarIcon } from './icons';

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden">
      {/* Slow cinematic push-in on load (skipped for reduced motion) */}
      <motion.div
        className="absolute inset-0"
        initial={reduce ? false : { scale: 1.08 }}
        animate={reduce ? undefined : { scale: 1 }}
        transition={{ duration: 2.4, ease: [0.21, 0.47, 0.32, 0.98] }}
      >
        <Image
          src="/images/salon/hero.svg"
          alt="Calm, light-filled interior of Maison Lumière salon and spa"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>
      {/* Layered scrims for depth + text legibility */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/45 to-ink/30"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_75%_25%,rgba(141,94,130,0.4),transparent_55%)]"
        aria-hidden
      />

      {!reduce && (
        <motion.div
          aria-hidden
          className="absolute right-[10%] top-[24%] hidden h-28 w-28 rounded-4xl bg-white/10 backdrop-blur-md lg:block"
          animate={{ y: [0, -16, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        />
      )}

      <div className="container-page relative z-10 py-32">
        <motion.div
          className="max-w-3xl"
          initial={reduce ? false : { opacity: 0, y: 28 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-sm">
            <span className="flex gap-0.5 text-gold-300" aria-hidden>
              {Array.from({ length: 5 }).map((_, i) => (
                <StarIcon key={i} width={12} height={12} />
              ))}
            </span>
            Loved across {business.address.city}
          </span>

          <h1 className="heading-display mt-6 text-5xl leading-[1.05] text-white sm:text-6xl lg:text-7xl">
            Beauty, unhurried.
            <span className="block text-gold-200">{business.tagline}.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/85">
            {business.description}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a href="#book" className="btn-gold text-base">
              Book an Appointment
              <ArrowIcon width={18} height={18} />
            </a>
            <a
              href="#services"
              className="btn border border-white/30 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20"
            >
              View Services
            </a>
          </div>
        </motion.div>
      </div>

      <div
        className="absolute bottom-20 left-1/2 z-10 -translate-x-1/2 text-white/70"
        aria-hidden
      >
        <div className="flex h-10 w-6 justify-center rounded-full border border-white/40 pt-2">
          <motion.span
            className="h-2 w-1 rounded-full bg-white/80"
            animate={reduce ? undefined : { y: [0, 8, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
      </div>
    </section>
  );
}
