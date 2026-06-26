'use client';

import { useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { programs, programCategories } from '@/content';
import type { Program } from '@/lib/types';
import { ClockIcon } from './ui/icons';

export function Programs() {
  const [active, setActive] = useState<string>(programCategories[0].id);
  const reduce = useReducedMotion();

  const visible = programs.filter((p) => p.category === active);
  const activeCategory = programCategories.find((c) => c.id === active);

  return (
    <section id="programs" className="scroll-mt-20 bg-ink py-24 sm:py-32">
      <div className="container-page">
        <div className="flex flex-col items-center text-center">
          <span className="eyebrow text-forge-400">
            <span className="h-px w-6 bg-forge-500" aria-hidden />
            Programs
          </span>
          <h2 className="heading-display mt-4 text-4xl text-white sm:text-5xl">
            Find your training
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/65 sm:text-lg">
            Every class is coached, scalable, and built to move the needle —
            whether it&apos;s your first session or your thousandth.
          </p>
        </div>

        {/* Category tabs */}
        <div
          className="mt-12 flex flex-wrap justify-center gap-2"
          role="tablist"
          aria-label="Program categories"
        >
          {programCategories.map((cat) => {
            const isActive = cat.id === active;
            return (
              <button
                key={cat.id}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActive(cat.id)}
                className={`relative rounded-full px-5 py-2.5 text-sm font-bold uppercase tracking-wide transition-colors ${
                  isActive ? 'text-ink' : 'text-white/70 hover:text-white'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="program-tab"
                    className="absolute inset-0 rounded-full bg-volt-300"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative">{cat.name}</span>
              </button>
            );
          })}
        </div>

        {activeCategory?.description && (
          <p className="mt-5 text-center text-sm text-white/55">
            {activeCategory.description}
          </p>
        )}

        {/* Program grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? undefined : { opacity: 0, y: -8 }}
            transition={{ duration: 0.35 }}
          >
            {visible.map((program) => (
              <ProgramCard key={program.id} program={program} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

function ProgramCard({ program }: { program: Program }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-3xl bg-concrete shadow-soft ring-1 ring-white/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={program.image}
          alt={program.imageAlt}
          fill
          loading="lazy"
          sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {program.isSignature && (
          <span className="absolute left-3 top-3 rounded-full bg-forge-500 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-wider text-white shadow-soft">
            Signature
          </span>
        )}
        <span className="absolute bottom-3 left-3 rounded-full bg-ink/80 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-wider text-volt-300 backdrop-blur-sm">
          {program.level}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="heading-display text-xl text-ink">{program.name}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-ink/60">
          {program.description}
        </p>
        <div className="mt-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-ink/50">
          <ClockIcon width={15} height={15} className="text-forge-500" />
          {program.duration}
        </div>
      </div>
    </article>
  );
}
