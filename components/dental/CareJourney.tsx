import { journeySteps } from '@/content/dental';
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { TiltCard } from '@/components/ui/TiltCard';
import { ClockIcon, ShieldIcon, SparkleIcon, ToothIcon } from './icons';

const iconMap = {
  tooth: ToothIcon,
  shield: ShieldIcon,
  sparkle: SparkleIcon,
  clock: ClockIcon,
} as const;

// Industry-signature section: the new-patient journey as a connected
// timeline — designed to remove the fear factor before anyone calls.
export function CareJourney() {
  return (
    <section id="journey" className="relative scroll-mt-20 py-24 sm:py-32">
      {/* Soft clinical wash */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-b from-sky-50/80 via-transparent to-mint-50/60"
      />
      <div className="container-page flex flex-col gap-16">
        <SectionHeading
          eyebrow="Your first visit"
          title="Nervous? Here's exactly how it goes."
          description="No surprises, no pressure, no surprise bills. Four steps, and the scary part turns out to be… nothing."
        />

        <ol className="relative grid gap-8 md:grid-cols-2 xl:grid-cols-4 xl:gap-6">
          {/* Connecting line (desktop) */}
          <span
            aria-hidden
            className="absolute left-0 right-0 top-9 hidden h-0.5 bg-gradient-to-r from-sky-200 via-mint-300 to-sky-200 xl:block"
          />
          {journeySteps.map((step, i) => {
            const Icon = iconMap[step.icon];
            return (
              <Reveal key={step.id} as="li" delay={i * 0.12} className="h-full">
                <TiltCard
                  tilt={5}
                  className="group relative flex h-full flex-col gap-4 rounded-4xl border border-sky-100 bg-white/80 p-7 shadow-soft backdrop-blur transition-shadow duration-500 hover:shadow-lift"
                >
                  <div className="flex items-center justify-between">
                    <span className="relative z-10 grid h-[4.5rem] w-[4.5rem] place-items-center rounded-3xl bg-gradient-to-br from-sky-500 to-mint-500 text-white shadow-glass transition-transform duration-500 group-hover:scale-105 group-hover:rotate-3">
                      <Icon width={26} height={26} />
                    </span>
                    <span className="heading-display text-4xl text-sky-100 transition-colors duration-500 group-hover:text-sky-200">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="heading-display text-2xl text-ink">{step.name}</h3>
                  <p className="text-sm leading-relaxed text-ink/60">{step.description}</p>
                  <p className="mt-auto inline-flex w-fit items-center gap-2 rounded-full bg-mint-50 px-3.5 py-1.5 text-xs font-semibold text-mint-700">
                    <span className="h-1.5 w-1.5 rounded-full bg-mint-400" aria-hidden />
                    {step.note}
                  </p>
                </TiltCard>
              </Reveal>
            );
          })}
        </ol>

        <Reveal className="mx-auto flex flex-wrap items-center justify-center gap-4">
          <a href="#book" className="btn-primary text-base">
            Start at step one
          </a>
          <p className="text-sm text-ink/50">
            Still unsure? Call us — a human answers.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
