import Image from 'next/image';
import Link from 'next/link';
import { demoSites } from '@/content/agency';
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { TiltCard } from '@/components/ui/TiltCard';
import { ArrowIcon } from './icons';

// The heart of the pitch: every industry demo as a live, clickable site.
export function Showcase() {
  return (
    <section id="work" className="relative scroll-mt-24 py-28 sm:py-36">
      <div className="container-page flex flex-col gap-16">
        <div className="flex flex-col items-end justify-between gap-8 md:flex-row">
          <SectionHeading
            align="left"
            eyebrow="Live demos"
            title="Pick your industry. See your future website."
            description="These aren’t mockups — every card below is a complete, production-ready website you can browse right now. Imagine your name on it."
          />
          <Reveal delay={0.15} className="shrink-0">
            <p className="max-w-[16rem] text-sm leading-relaxed text-white/40">
              Each demo ships with booking flows, local SEO, and 95+ Lighthouse
              scores as standard.
            </p>
          </Reveal>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {demoSites.map((demo, i) => (
            <Reveal key={demo.slug} delay={i * 0.08} className="h-full">
              {/* No overflow-hidden on the card itself — clipping would flatten
                  the 3D context and kill the preview's translateZ pop. */}
              <TiltCard
                tilt={4}
                className="group relative h-full rounded-4xl [transform-style:preserve-3d]"
              >
                <Link
                  href={`/${demo.slug}`}
                  className="flex h-full flex-col rounded-4xl [transform-style:preserve-3d] focus-visible:outline-none"
                  aria-label={`View the ${demo.name} ${demo.industry.toLowerCase()} demo`}
                >
                  {/* Backplate */}
                  <span
                    aria-hidden
                    className="absolute inset-0 rounded-4xl border border-white/10 bg-white/[0.03] transition-all duration-500 group-hover:border-aurora-violet/40 group-hover:shadow-glow"
                  />

                  {/* Browser-chrome preview — lifts off the card plane on hover */}
                  <div
                    className={`relative overflow-hidden rounded-t-4xl bg-gradient-to-br p-5 pb-0 transition-transform duration-500 ease-out group-hover:[transform:translateZ(36px)] sm:p-7 sm:pb-0 ${demo.wash}`}
                  >
                    <div className="overflow-hidden rounded-t-2xl border border-white/10 border-b-0 shadow-2xl">
                      <div className="flex items-center gap-1.5 bg-zinc-900/90 px-4 py-2.5">
                        <span className="h-2.5 w-2.5 rounded-full bg-white/15" aria-hidden />
                        <span className="h-2.5 w-2.5 rounded-full bg-white/15" aria-hidden />
                        <span className="h-2.5 w-2.5 rounded-full bg-white/15" aria-hidden />
                        <span className="ml-3 hidden truncate rounded-md bg-white/10 px-2.5 py-0.5 text-[10px] text-white/50 sm:block">
                          /{demo.slug}
                        </span>
                      </div>
                      <div className="relative aspect-[1200/630] overflow-hidden">
                        <Image
                          src={demo.image}
                          alt={`${demo.name} website preview`}
                          fill
                          sizes="(min-width: 768px) 44vw, 92vw"
                          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Content plane rises less than the preview (36px), so the
                      two layers visibly separate instead of moving as one. */}
                  <div className="relative flex flex-1 flex-col gap-4 p-6 transition-transform duration-500 ease-out group-hover:[transform:translateZ(18px)] sm:p-8">
                    <div className="flex items-center justify-between gap-4">
                      <p className={`text-xs font-semibold uppercase tracking-[0.22em] ${demo.accent}`}>
                        {demo.industry}
                      </p>
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-white/45">
                        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" aria-hidden />
                        Live demo
                      </span>
                    </div>
                    <div>
                      <h3 className="heading-display text-2xl text-white sm:text-3xl">
                        {demo.name}
                      </h3>
                      <p className="mt-1 text-sm italic text-white/40">{demo.tagline}</p>
                    </div>
                    <p className="text-sm leading-relaxed text-white/55">{demo.blurb}</p>
                    <ul className="flex flex-wrap gap-2">
                      {demo.chips.map((chip) => (
                        <li
                          key={chip}
                          className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] text-white/55"
                        >
                          {chip}
                        </li>
                      ))}
                    </ul>
                    <span className="mt-auto inline-flex items-center gap-2 pt-2 text-sm font-semibold text-white transition-colors group-hover:text-aurora-cyan">
                      View live demo
                      <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
