'use client';

import { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { agencyFaqs } from '@/content/agency';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';

export function FAQ() {
  const reduce = useReducedMotion();
  const [openId, setOpenId] = useState<string | null>(agencyFaqs[0]?.id ?? null);

  return (
    <section id="faq" className="scroll-mt-24 py-28 sm:py-36">
      <div className="container-page grid gap-14 lg:grid-cols-[1fr_1.4fr]">
        <SectionHeading
          align="left"
          eyebrow="FAQ"
          title="Answers before you even ask"
          description="Anything else on your mind? The first call is free and pitch-free — ask us anything."
        />

        <Reveal className="flex flex-col gap-3">
          {agencyFaqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`overflow-hidden rounded-3xl border transition-colors duration-300 ${
                  isOpen ? 'border-aurora-violet/40 bg-white/[0.05]' : 'border-white/10 bg-white/[0.02]'
                }`}
              >
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                  onClick={() => setOpenId(isOpen ? null : faq.id)}
                >
                  <span className="text-base font-semibold text-white">{faq.question}</span>
                  <motion.span
                    aria-hidden
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: reduce ? 0 : 0.3 }}
                    className={`grid h-8 w-8 shrink-0 place-items-center rounded-full border text-lg leading-none ${
                      isOpen
                        ? 'border-aurora-violet/50 text-aurora-cyan'
                        : 'border-white/15 text-white/60'
                    }`}
                  >
                    +
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={reduce ? false : { height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={reduce ? undefined : { height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.21, 0.47, 0.32, 0.98] }}
                    >
                      <p className="px-6 pb-6 text-sm leading-relaxed text-white/60">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
