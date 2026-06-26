'use client';

import { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { faqs } from '@/content';
import { SectionHeading } from './ui/SectionHeading';

export function FAQ() {
  const [open, setOpen] = useState<string | null>(faqs[0]?.id ?? null);
  const reduce = useReducedMotion();

  return (
    <section className="py-24 sm:py-32">
      <div className="container-page">
        <SectionHeading eyebrow="Good to Know" title="Questions, answered" />

        <div className="mx-auto mt-12 max-w-3xl divide-y divide-ink/10 rounded-4xl bg-white p-2 shadow-soft sm:p-4">
          {faqs.map((faq) => {
            const isOpen = open === faq.id;
            return (
              <div key={faq.id}>
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : faq.id)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left"
                  >
                    <span className="text-base font-semibold text-ink sm:text-lg">
                      {faq.question}
                    </span>
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-mauve-50 text-mauve-600 transition-transform duration-300 ${
                        isOpen ? 'rotate-45' : ''
                      }`}
                      aria-hidden
                    >
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      >
                        <path d="M12 5v14M5 12h14" />
                      </svg>
                    </span>
                  </button>
                </h3>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={reduce ? false : { height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={reduce ? undefined : { height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-6 text-sm leading-relaxed text-ink/65 sm:text-base">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
