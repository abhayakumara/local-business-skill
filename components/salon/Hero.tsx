'use client';

import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { business } from '@/content/salon';
import { Ambient3D } from '@/components/ui/Ambient3D';
import { TextReveal } from '@/components/ui/TextReveal';
import { ArrowIcon, SparkleIcon, StarIcon } from './icons';

// Salon hero: light, editorial split layout — copy on ivory, portrait in an
// arched frame with gold orbit rings. Deliberately different in structure
// from the cinematic full-bleed heroes of the other demos.
export function Hero() {
  const reduce = useReducedMotion();

  const fadeUp = (delay: number) => ({
    initial: reduce ? false : { opacity: 0, y: 26 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] as const },
  });

  return (
    <section className="noise relative overflow-hidden pb-20 pt-32 sm:pt-36 lg:min-h-[100svh]">
      {/* Soft blush atmosphere */}
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="absolute -left-32 -top-24 h-96 w-96 rounded-full bg-mauve-100/80 blur-[100px]" />
        <div className="absolute right-[-8rem] top-1/4 h-[28rem] w-[28rem] rounded-full bg-gold-100/70 blur-[110px]" />
        <div className="absolute bottom-[-10rem] left-1/4 h-80 w-80 rounded-full bg-mauve-200/50 blur-[120px]" />
      </div>

      {/* Blush petals drifting down across the hero */}
      <Ambient3D
        variant="petals"
        className="pointer-events-none absolute inset-0 z-0"
      />

      <div className="container-page relative z-10 grid items-center gap-14 lg:grid-cols-[1.05fr_1fr] lg:gap-10">
        {/* Copy */}
        <div className="max-w-xl">
          <motion.span
            {...fadeUp(0)}
            className="inline-flex items-center gap-2 rounded-full border border-gold-300/70 bg-white/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-mauve-600 shadow-glass backdrop-blur"
          >
            <span className="flex gap-0.5 text-gold-500" aria-hidden>
              {Array.from({ length: 5 }).map((_, i) => (
                <StarIcon key={i} width={12} height={12} />
              ))}
            </span>
            Loved across {business.address.city}
          </motion.span>

          <h1 className="heading-display mt-7 text-5xl leading-[1.06] text-ink sm:text-6xl lg:text-7xl">
            <TextReveal text="Beauty, unhurried." delay={0.12} />
            <motion.span {...fadeUp(0.45)} className="mt-1 block italic text-mauve-500">
              {business.tagline}.
            </motion.span>
          </h1>

          <motion.p
            {...fadeUp(0.24)}
            className="mt-7 max-w-lg text-lg leading-relaxed text-ink/65"
          >
            {business.description}
          </motion.p>

          <motion.div {...fadeUp(0.36)} className="mt-10 flex flex-wrap items-center gap-4">
            <a href="#book" className="btn-gold text-base">
              Book an Appointment
              <ArrowIcon width={18} height={18} />
            </a>
            <a href="#services" className="btn-ghost text-base">
              View Services
            </a>
          </motion.div>

          <motion.p {...fadeUp(0.48)} className="mt-8 flex items-center gap-2 text-sm text-ink/50">
            <SparkleIcon width={16} height={16} className="text-gold-500" aria-hidden />
            Bandra West, Mumbai · Open 7 days · Walk-ins welcome before noon
          </motion.p>
        </div>

        {/* Arched portrait */}
        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.94, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          {/* Gold orbit rings */}
          <span
            aria-hidden
            className="absolute -inset-6 rounded-t-full rounded-b-[2.5rem] border border-gold-300/50"
          />
          <span
            aria-hidden
            className="absolute -inset-12 hidden rounded-t-full rounded-b-[3rem] border border-dashed border-gold-300/40 sm:block"
          />
          <motion.div
            animate={reduce ? undefined : { y: [0, -10, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
            className="relative overflow-hidden rounded-t-full rounded-b-[2.5rem] shadow-lift"
          >
            <div className="relative aspect-[4/5]">
              <Image
                src="/images/salon/hero.svg"
                alt="Calm, light-filled interior of Maison Lumière salon and spa"
                fill
                priority
                sizes="(min-width: 1024px) 44vw, 92vw"
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* Floating proof card */}
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="glass absolute -bottom-6 -left-4 flex items-center gap-3 rounded-3xl px-5 py-4 shadow-soft sm:-left-10"
          >
            <span className="grid h-11 w-11 place-items-center rounded-2xl bg-mauve-100 text-mauve-600">
              <SparkleIcon width={20} height={20} />
            </span>
            <div>
              <p className="heading-display text-xl leading-none text-ink">4.9★</p>
              <p className="mt-1 text-xs text-ink/55">1,200+ happy clients</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
