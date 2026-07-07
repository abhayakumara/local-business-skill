'use client';

import { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { testimonials } from '@/content/salon';
import { StarIcon } from './icons';

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const reduce = useReducedMotion();
  const active = testimonials[index];

  const go = (dir: number) =>
    setIndex((i) => (i + dir + testimonials.length) % testimonials.length);

  return (
    <section className="relative overflow-hidden bg-ivory py-24 sm:py-32">
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(141,94,130,0.10),transparent_50%)]"
        aria-hidden
      />
      <div className="container-page relative">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <span className="eyebrow">
            <span className="h-px w-6 bg-gold-400" aria-hidden />
            Client Love
          </span>

          <div className="relative mt-8 min-h-[220px] w-full">
            <AnimatePresence mode="wait">
              <motion.figure
                key={active.id}
                initial={reduce ? false : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduce ? undefined : { opacity: 0, y: -16 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col items-center gap-6"
              >
                <div className="flex gap-1 text-gold-400" aria-hidden>
                  {Array.from({ length: active.rating }).map((_, i) => (
                    <StarIcon key={i} width={20} height={20} />
                  ))}
                </div>
                <blockquote className="heading-display text-2xl leading-snug text-ink sm:text-3xl">
                  &ldquo;{active.quote}&rdquo;
                </blockquote>
                <figcaption className="text-sm text-ink/60">
                  <span className="font-semibold text-ink">{active.author}</span>{' '}
                  · {active.context}
                </figcaption>
              </motion.figure>
            </AnimatePresence>
          </div>

          <div className="mt-10 flex items-center gap-4">
            <NavButton dir={-1} onClick={() => go(-1)} />
            <div
              className="flex gap-2"
              role="tablist"
              aria-label="Choose testimonial"
            >
              {testimonials.map((t, i) => (
                <button
                  key={t.id}
                  onClick={() => setIndex(i)}
                  role="tab"
                  aria-selected={i === index}
                  aria-label={`Review ${i + 1} by ${t.author}`}
                  className={`h-2.5 rounded-full transition-all ${
                    i === index
                      ? 'w-7 bg-mauve-600'
                      : 'w-2.5 bg-mauve-300 hover:bg-mauve-400'
                  }`}
                />
              ))}
            </div>
            <NavButton dir={1} onClick={() => go(1)} />
          </div>
        </div>
      </div>
    </section>
  );
}

function NavButton({ dir, onClick }: { dir: -1 | 1; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={dir === -1 ? 'Previous review' : 'Next review'}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/15 bg-white text-ink transition-colors hover:border-gold-400 hover:text-gold-500"
    >
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
        className={dir === 1 ? '' : 'rotate-180'}
      >
        <path d="M5 12h14M13 6l6 6-6 6" />
      </svg>
    </button>
  );
}
