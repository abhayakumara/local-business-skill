'use client';

import Image from 'next/image';
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from 'framer-motion';
import { useRef } from 'react';
import { business } from '@/content/restaurant';
import { Ambient3D } from '@/components/ui/Ambient3D';
import { TextReveal } from '@/components/ui/TextReveal';
import { ArrowIcon, StarIcon } from './icons';

export function Hero() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);

  // Depth on scroll: the photograph drifts slower than the page while the
  // copy glides ahead and fades — a layered, cinematic exit.
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '22%']);
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '34%']);
  const contentFade = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  return (
    <section ref={ref} className="relative flex min-h-[100svh] items-center overflow-hidden">
      {/* Background photography */}
      {/* Slow cinematic push-in on load (skipped for reduced motion) */}
      <motion.div
        className="absolute inset-0"
        style={reduce ? undefined : { y: bgY }}
        initial={reduce ? false : { scale: 1.08 }}
        animate={reduce ? undefined : { scale: 1 }}
        transition={{ duration: 2.4, ease: [0.21, 0.47, 0.32, 0.98] }}
      >
        <Image
          src="/images/restaurant/hero.svg"
          alt="Candle-lit table set with signature dishes at Saffron & Sage"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>
      {/* Layered gradient scrims for depth + text legibility */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/55 to-charcoal/40"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(217,121,21,0.35),transparent_55%)]"
        aria-hidden
      />

      {/* Warm embers drifting up through the candlelight */}
      <Ambient3D
        variant="embers"
        className="pointer-events-none absolute inset-0 z-[5]"
      />

      {/* Floating glass accent */}
      {!reduce && (
        <motion.div
          aria-hidden
          className="absolute right-[8%] top-[22%] hidden h-32 w-32 rounded-4xl bg-white/10 backdrop-blur-md lg:block"
          animate={{ y: [0, -18, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        />
      )}

      <div className="container-page relative z-10 py-32">
        <motion.div
          className="max-w-3xl"
          style={reduce ? undefined : { y: contentY, opacity: contentFade }}
        >
          <motion.span
            initial={reduce ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-sm"
          >
            <span className="flex gap-0.5 text-saffron-300" aria-hidden>
              {Array.from({ length: 5 }).map((_, i) => (
                <StarIcon key={i} width={12} height={12} />
              ))}
            </span>
            Loved across {business.address.city}
          </motion.span>

          <h1 className="heading-display mt-6 text-5xl leading-[1.05] text-white sm:text-6xl lg:text-7xl">
            <TextReveal text={business.tagline} delay={0.15} />
            <span className="block text-saffron-300">
              <TextReveal text="worth the table." delay={0.45} />
            </span>
          </h1>

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-white/85"
          >
            {business.description}
          </motion.p>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.85, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a href="#reserve" className="btn-primary text-base">
              Reserve a Table
              <ArrowIcon width={18} height={18} />
            </a>
            <a
              href="#menu"
              className="btn border border-white/30 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20"
            >
              Explore the Menu
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll cue */}
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
