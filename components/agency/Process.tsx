import { processSteps } from '@/content/agency';
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';

export function Process() {
  return (
    <section id="process" className="relative scroll-mt-24 py-28 sm:py-36">
      <div className="container-page flex flex-col gap-16">
        <SectionHeading
          eyebrow="How it works"
          title="From first call to live site in a week"
          description="A process built for busy owners: one call, one focused review, zero homework. You keep running the business — we handle everything else."
        />

        <ol className="relative grid gap-10 lg:grid-cols-4 lg:gap-6">
          {/* Connecting line (desktop) */}
          <span
            aria-hidden
            className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-white/20 to-transparent lg:block"
          />
          {processSteps.map((step, i) => (
            <Reveal key={step.id} as="li" delay={i * 0.12} className="relative flex flex-col gap-4">
              <span className="glass-dark heading-display relative z-10 grid h-14 w-14 place-items-center rounded-2xl text-lg font-bold text-aurora-cyan shadow-glow">
                {step.number}
              </span>
              <div>
                <div className="flex items-baseline gap-3">
                  <h3 className="heading-display text-2xl text-white">{step.name}</h3>
                  <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-aurora-violet">
                    {step.duration}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-white/55">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
