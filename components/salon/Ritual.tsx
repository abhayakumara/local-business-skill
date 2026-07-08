import Image from 'next/image';
import { ritualSteps } from '@/content/salon';
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { TiltCard } from '@/components/ui/TiltCard';

// Industry-signature section: the salon experience told as a slow, numbered
// story with alternating imagery — the anti-price-list.
export function Ritual() {
  return (
    <section id="ritual" className="relative scroll-mt-20 overflow-hidden py-24 sm:py-32">
      {/* Soft blush wash + hairline center guide */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-b from-mauve-50/80 via-transparent to-gold-50/60"
      />
      <div className="container-page flex flex-col gap-20">
        <SectionHeading
          eyebrow="The Lumière ritual"
          title="An hour that belongs entirely to you"
          description="Every visit follows the same unhurried rhythm — whether you're here for a trim or a full spa day."
        />

        <ol className="relative flex flex-col gap-20 lg:gap-28">
          {/* Vertical guide line */}
          <span
            aria-hidden
            className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-gold-300/60 to-transparent lg:block"
          />
          {ritualSteps.map((step, i) => {
            const flip = i % 2 === 1;
            return (
              <li key={step.id} className="grid items-center gap-10 lg:grid-cols-2 lg:gap-20">
                <Reveal
                  delay={0.1}
                  className={`relative ${flip ? 'lg:order-2' : ''}`}
                >
                  <TiltCard
                    tilt={4}
                    className={`group relative overflow-hidden shadow-soft ${
                      i === 1 ? 'rounded-4xl' : 'rounded-t-[10rem] rounded-b-4xl'
                    }`}
                  >
                    <div className="relative aspect-[4/5] sm:aspect-[5/4] lg:aspect-[4/5]">
                      <Image
                        src={step.image}
                        alt={step.imageAlt}
                        fill
                        sizes="(min-width: 1024px) 44vw, 92vw"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                      />
                    </div>
                  </TiltCard>
                  <span
                    aria-hidden
                    className={`absolute -z-10 h-36 w-36 rounded-full bg-gold-100 ${
                      flip ? '-right-8 -top-8' : '-left-8 -top-8'
                    }`}
                  />
                </Reveal>

                <Reveal delay={0.2} className={flip ? 'lg:order-1 lg:text-right' : ''}>
                  <div className={`flex flex-col gap-5 ${flip ? 'lg:items-end' : ''}`}>
                    <span className="heading-display bg-white/70 inline-flex h-16 w-16 items-center justify-center rounded-full border border-gold-300/70 text-2xl text-gold-600 shadow-glass backdrop-blur">
                      {step.number}
                    </span>
                    <h3 className="heading-display text-3xl text-ink sm:text-4xl">
                      {step.name}
                    </h3>
                    <p className="max-w-md text-base leading-relaxed text-ink/65">
                      {step.description}
                    </p>
                  </div>
                </Reveal>
              </li>
            );
          })}
        </ol>

        <Reveal className="mx-auto">
          <a href="#book" className="btn-gold text-base">
            Begin your ritual
          </a>
        </Reveal>
      </div>
    </section>
  );
}
