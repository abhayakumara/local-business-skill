'use client';

import { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { schedule } from '@/content/gym';
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { BoltIcon } from './icons';

const intensityStyles = {
  Low: 'bg-volt-50 text-volt-800 border-volt-200',
  Moderate: 'bg-forge-50 text-forge-700 border-forge-200',
  High: 'bg-forge-500 text-white border-forge-500',
} as const;

// Industry-signature section: the live weekly timetable with day tabs.
// This is the section gym members actually visit the site for.
export function Schedule() {
  const reduce = useReducedMotion();
  const [activeId, setActiveId] = useState(schedule[0]?.id ?? 'mon');
  const active = schedule.find((d) => d.id === activeId) ?? schedule[0];

  return (
    <section id="schedule" className="relative scroll-mt-20 py-24 sm:py-32">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-b from-forge-50/70 via-transparent to-transparent"
      />
      <div className="container-page flex flex-col gap-12">
        <SectionHeading
          eyebrow="This week at Apex"
          title="Pick a class. Show up. We handle the rest."
          description="Every class is coach-led and capped for quality. First one's free — drop into whichever fits your day."
        />

        <Reveal>
          <div
            role="tablist"
            aria-label="Day of the week"
            className="flex flex-wrap justify-center gap-2"
          >
            {schedule.map((d) => (
              <button
                key={d.id}
                role="tab"
                aria-selected={d.id === activeId}
                onClick={() => setActiveId(d.id)}
                className={`btn !px-6 !py-2.5 text-sm ${
                  d.id === activeId
                    ? 'bg-ink font-bold uppercase tracking-wide text-white shadow-soft'
                    : 'border border-ink/15 bg-white/70 font-bold uppercase tracking-wide text-ink/60 hover:border-forge-400 hover:text-forge-600'
                }`}
              >
                <span className="sm:hidden">{d.short}</span>
                <span className="hidden sm:inline">{d.day}</span>
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mx-auto w-full max-w-3xl">
          <AnimatePresence mode="wait">
            <motion.ul
              key={active.id}
              initial={reduce ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduce ? undefined : { opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="flex flex-col gap-3"
              aria-label={`${active.day} classes`}
            >
              {active.sessions.map((s) => (
                <li
                  key={`${active.id}-${s.time}-${s.name}`}
                  className="group flex flex-wrap items-center gap-x-6 gap-y-2 rounded-3xl border border-ink/10 bg-white/85 px-6 py-5 shadow-glass transition-all duration-300 hover:-translate-y-0.5 hover:border-forge-300 hover:shadow-soft"
                >
                  <p className="heading-display w-24 shrink-0 text-xl text-forge-600">
                    {s.time}
                  </p>
                  <div className="min-w-0 flex-1">
                    <p className="heading-display text-lg text-ink">{s.name}</p>
                    <p className="text-sm text-ink/50">Coach {s.coach}</p>
                  </div>
                  <span
                    className={`inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-wider ${intensityStyles[s.intensity]}`}
                  >
                    <BoltIcon width={12} height={12} aria-hidden />
                    {s.intensity}
                  </span>
                </li>
              ))}
            </motion.ul>
          </AnimatePresence>
        </div>

        <Reveal className="mx-auto">
          <a href="#join" className="btn-forge text-base">
            Claim your free class
          </a>
        </Reveal>
      </div>
    </section>
  );
}
