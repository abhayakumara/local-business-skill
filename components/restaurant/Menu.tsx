'use client';

import { useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { dishes, menuCategories } from '@/content/restaurant';
import type { Dish } from '@/lib/types';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { FlameIcon, LeafIcon } from './icons';

export function Menu() {
  const [active, setActive] = useState<string>(menuCategories[0].id);
  const reduce = useReducedMotion();

  const visible = dishes.filter((d) => d.category === active);
  const activeCategory = menuCategories.find((c) => c.id === active);

  return (
    <section
      id="menu"
      className="relative scroll-mt-20 overflow-hidden bg-charcoal py-24 text-white sm:py-32"
    >
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(217,121,21,0.18),transparent_60%)]"
        aria-hidden
      />
      <div className="container-page relative">
        <div className="flex flex-col items-center text-center">
          <span className="eyebrow text-saffron-300">
            <span className="h-px w-6 bg-saffron-400" aria-hidden />
            The Menu
          </span>
          <h2 className="heading-display mt-4 text-4xl sm:text-5xl">
            Crafted to be shared
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/65 sm:text-lg">
            A seasonal selection of our most-requested plates. Ask our team about
            the chef&apos;s off-menu specials.
          </p>
        </div>

        {/* Category tabs */}
        <div
          className="mt-12 flex flex-wrap justify-center gap-2"
          role="tablist"
          aria-label="Menu categories"
        >
          {menuCategories.map((cat) => {
            const isActive = cat.id === active;
            return (
              <button
                key={cat.id}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActive(cat.id)}
                className={`relative rounded-full px-5 py-2.5 text-sm font-semibold transition-colors ${
                  isActive
                    ? 'text-charcoal'
                    : 'text-white/70 hover:text-white'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="menu-tab"
                    className="absolute inset-0 rounded-full bg-saffron-300"
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

        {/* Dish grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? undefined : { opacity: 0, y: -8 }}
            transition={{ duration: 0.35 }}
          >
            {visible.map((dish) => (
              <DishCard key={dish.id} dish={dish} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

function DishCard({ dish }: { dish: Dish }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-3xl bg-white/5 ring-1 ring-white/10 transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 hover:ring-saffron-300/40">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={dish.image}
          alt={dish.imageAlt}
          fill
          loading="lazy"
          sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {dish.isSignature && (
          <span className="absolute left-3 top-3 rounded-full bg-saffron-500 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-wider text-white shadow-soft">
            Signature
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="heading-display text-xl text-white">{dish.name}</h3>
          <span className="shrink-0 text-lg font-semibold text-saffron-300">
            {dish.price}
          </span>
        </div>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-white/60">
          {dish.description}
        </p>
        <div className="mt-4 flex items-center gap-2">
          {dish.isVegetarian && (
            <Tag tone="sage">
              <LeafIcon width={13} height={13} /> Veg
            </Tag>
          )}
          {dish.spiceLevel ? (
            <Tag tone="saffron">
              <span className="flex" aria-hidden>
                {Array.from({ length: dish.spiceLevel }).map((_, i) => (
                  <FlameIcon key={i} width={13} height={13} />
                ))}
              </span>
              <span className="sr-only">
                Spice level {dish.spiceLevel} of 3
              </span>
              Spice
            </Tag>
          ) : null}
        </div>
      </div>
    </article>
  );
}

function Tag({
  children,
  tone,
}: {
  children: React.ReactNode;
  tone: 'sage' | 'saffron';
}) {
  const tones = {
    sage: 'bg-sage-400/15 text-sage-200 ring-sage-300/30',
    saffron: 'bg-saffron-500/15 text-saffron-200 ring-saffron-300/30',
  };
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[0.7rem] font-semibold ring-1 ${tones[tone]}`}
    >
      {children}
    </span>
  );
}
