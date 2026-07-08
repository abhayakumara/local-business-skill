'use client';

import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { business } from '@/content/dental';
import { Ambient3D } from '@/components/ui/Ambient3D';
import { TextReveal } from '@/components/ui/TextReveal';
import { ArrowIcon, ClockIcon, ShieldIcon, StarIcon } from './icons';

// Dental hero: bright clinical-calm split layout — ink copy on cloud, imagery
// in a soft rounded frame with floating trust cards. Structurally distinct
// from the other demos' heroes.
export function Hero() {
  const reduce = useReducedMotion();

  const fadeUp = (delay: number) => ({
    initial: reduce ? false : { opacity: 0, y: 26 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] as const },
  });

  return (
    <section className="relative overflow-hidden pb-20 pt-32 sm:pt-36 lg:min-h-[100svh]">
      {/* Fresh clinical atmosphere */}
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="absolute -right-32 -top-24 h-[30rem] w-[30rem] rounded-full bg-sky-100/90 blur-[110px]" />
        <div className="absolute bottom-0 left-[-8rem] h-96 w-96 rounded-full bg-mint-100/80 blur-[100px]" />
        <svg
          className="absolute bottom-0 left-0 w-full text-sky-100/60"
          viewBox="0 0 1440 120"
          fill="currentColor"
          preserveAspectRatio="none"
          aria-hidden
        >
          <path d="M0 80 C 360 20, 720 120, 1080 60 S 1440 40, 1440 40 V120 H0 Z" />
        </svg>
      </div>

      {/* Calm glass orbs drifting through the air */}
      <Ambient3D
        variant="orbs"
        className="pointer-events-none absolute inset-0 z-0"
      />

      <div className="container-page relative z-10 grid items-center gap-14 lg:grid-cols-[1.05fr_1fr] lg:gap-10">
        {/* Copy */}
        <div className="max-w-xl">
          <motion.span
            {...fadeUp(0)}
            className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-sky-700 shadow-glass backdrop-blur"
          >
            <span className="flex gap-0.5 text-mint-500" aria-hidden>
              {Array.from({ length: 5 }).map((_, i) => (
                <StarIcon key={i} width={12} height={12} />
              ))}
            </span>
            Trusted across {business.address.city}
          </motion.span>

          <h1 className="heading-display mt-7 text-5xl leading-[1.06] text-ink sm:text-6xl lg:text-7xl">
            <TextReveal text="Healthy smiles," delay={0.12} />
            <span className="block text-sky-600">
              <TextReveal text="without the dread." delay={0.4} />
            </span>
          </h1>

          <motion.p
            {...fadeUp(0.24)}
            className="mt-7 max-w-lg text-lg leading-relaxed text-ink/65"
          >
            {business.description}
          </motion.p>

          <motion.div {...fadeUp(0.36)} className="mt-10 flex flex-wrap items-center gap-4">
            <a href="#book" className="btn-primary text-base">
              Book an Appointment
              <ArrowIcon width={18} height={18} />
            </a>
            <a href="#services" className="btn-mint text-base">
              Explore Treatments
            </a>
          </motion.div>

          <motion.p {...fadeUp(0.48)} className="mt-8 text-sm text-ink/55">
            New patients welcome · Cashless insurance · Same-day emergencies
          </motion.p>
        </div>

        {/* Framed imagery with floating trust cards */}
        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.94, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          <span
            aria-hidden
            className="absolute -inset-5 rounded-[3.5rem] border border-sky-200/80"
          />
          <motion.div
            animate={reduce ? undefined : { y: [0, -8, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            className="relative overflow-hidden rounded-[3rem] shadow-lift"
          >
            <div className="relative aspect-[4/5] sm:aspect-square lg:aspect-[4/5]">
              <Image
                src="/images/dental/hero.svg"
                alt="The calm, light-filled treatment space at Northway Dental Studio"
                fill
                priority
                sizes="(min-width: 1024px) 44vw, 92vw"
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* Floating trust cards */}
          <motion.div
            initial={reduce ? false : { opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.65 }}
            className="glass absolute -left-4 top-10 flex items-center gap-3 rounded-3xl px-5 py-4 shadow-soft sm:-left-10"
          >
            <span className="grid h-11 w-11 place-items-center rounded-2xl bg-mint-100 text-mint-700">
              <ShieldIcon width={20} height={20} />
            </span>
            <div>
              <p className="heading-display text-lg leading-none text-ink">Cashless</p>
              <p className="mt-1 text-xs text-ink/55">All major insurers</p>
            </div>
          </motion.div>
          <motion.div
            initial={reduce ? false : { opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="glass absolute -bottom-6 right-0 flex items-center gap-3 rounded-3xl px-5 py-4 shadow-soft sm:-right-6"
          >
            <span className="grid h-11 w-11 place-items-center rounded-2xl bg-sky-100 text-sky-700">
              <ClockIcon width={20} height={20} />
            </span>
            <div>
              <p className="heading-display text-lg leading-none text-ink">Same-day</p>
              <p className="mt-1 text-xs text-ink/55">Emergency slots daily</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
