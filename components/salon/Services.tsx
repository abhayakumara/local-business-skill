'use client';

import { useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { services, serviceCategories } from '@/content/salon';
import type { Service } from '@/lib/types';
import { ClockIcon } from './icons';

export function Services() {
  const [active, setActive] = useState<string>(serviceCategories[0].id);
  const reduce = useReducedMotion();

  const visible = services.filter((s) => s.category === active);
  const activeCategory = serviceCategories.find((c) => c.id === active);

  return (
    <section id="services" className="scroll-mt-20 bg-ivory py-24 sm:py-32">
      <div className="container-page">
        <div className="flex flex-col items-center text-center">
          <span className="eyebrow">
            <span className="h-px w-6 bg-gold-400" aria-hidden />
            Services & Pricing
          </span>
          <h2 className="heading-display mt-4 text-4xl text-ink sm:text-5xl">
            Rituals for hair, skin & body
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink/65 sm:text-lg">
            Every service begins with a moment to understand what you need.
            Prices are a starting point — your stylist will confirm on the day.
          </p>
        </div>

        {/* Category tabs */}
        <div
          className="mt-12 flex flex-wrap justify-center gap-2"
          role="tablist"
          aria-label="Service categories"
        >
          {serviceCategories.map((cat) => {
            const isActive = cat.id === active;
            return (
              <button
                key={cat.id}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActive(cat.id)}
                className={`relative rounded-full px-5 py-2.5 text-sm font-semibold transition-colors ${
                  isActive ? 'text-white' : 'text-ink/70 hover:text-ink'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="service-tab"
                    className="absolute inset-0 rounded-full bg-mauve-600"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative">{cat.name}</span>
              </button>
            );
          })}
        </div>

        {activeCategory?.description && (
          <p className="mt-5 text-center text-sm text-ink/55">
            {activeCategory.description}
          </p>
        )}

        {/* Service grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? undefined : { opacity: 0, y: -8 }}
            transition={{ duration: 0.35 }}
          >
            {visible.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-3xl bg-white shadow-soft ring-1 ring-ink/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lift hover:ring-mauve-200">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={service.image}
          alt={service.imageAlt}
          fill
          loading="lazy"
          sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {service.isSignature && (
          <span className="absolute left-3 top-3 rounded-full bg-gold-400 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-wider text-ink shadow-soft">
            Signature
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="heading-display text-xl text-ink">{service.name}</h3>
          <span className="shrink-0 text-base font-semibold text-mauve-600">
            {service.price}
          </span>
        </div>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-ink/60">
          {service.description}
        </p>
        <div className="mt-4 flex items-center gap-2 text-xs font-medium text-ink/50">
          <ClockIcon width={15} height={15} className="text-gold-500" />
          {service.duration}
        </div>
      </div>
    </article>
  );
}
