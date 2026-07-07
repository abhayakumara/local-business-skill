import { pricingTiers } from '@/content/agency';
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { CheckIcon } from './icons';

export function Pricing() {
  return (
    <section id="pricing" className="relative scroll-mt-24 py-28 sm:py-36">
      <div className="container-page flex flex-col gap-16">
        <SectionHeading
          eyebrow="Pricing"
          title="Simple pricing. No surprises."
          description="Flat project fees, everything included. Most clients earn it back within the first quarter."
        />

        <div className="grid items-stretch gap-6 lg:grid-cols-3">
          {pricingTiers.map((tier, i) => (
            <Reveal key={tier.id} delay={i * 0.1} className="h-full">
              <article
                className={`relative flex h-full flex-col gap-6 rounded-4xl p-8 transition-transform duration-500 hover:-translate-y-1.5 ${
                  tier.isFeatured
                    ? 'border border-aurora-violet/50 bg-gradient-to-b from-aurora-violet/[0.14] to-transparent shadow-glow'
                    : 'border border-white/10 bg-white/[0.03]'
                }`}
              >
                {tier.isFeatured && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-aurora-violet to-aurora-cyan px-4 py-1 text-[11px] font-bold uppercase tracking-wider text-white shadow-glow">
                    Most popular
                  </span>
                )}
                <div>
                  <h3 className="heading-display text-xl text-white">{tier.name}</h3>
                  <p className="mt-1 text-sm text-white/50">{tier.description}</p>
                </div>
                <p className="flex items-baseline gap-2">
                  <span className="heading-display text-5xl text-white">{tier.price}</span>
                  <span className="text-sm text-white/45">{tier.cadence}</span>
                </p>
                <ul className="flex flex-col gap-3">
                  {tier.perks.map((perk) => (
                    <li key={perk} className="flex items-start gap-2.5 text-sm text-white/65">
                      <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-aurora-cyan" />
                      {perk}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className={`${tier.isFeatured ? 'btn-aurora' : 'btn-ghost'} mt-auto w-full`}
                >
                  {tier.ctaLabel}
                </a>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="text-center">
          <p className="text-sm text-white/40">
            Every project includes hosting setup, SSL, analytics, and a launch checklist —
            no hidden line items.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
