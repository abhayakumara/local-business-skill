import { membershipPlans } from '@/content';
import { Reveal } from './ui/Reveal';
import { SectionHeading } from './ui/SectionHeading';
import { CheckIcon } from './ui/icons';

// Industry-specific section: clear membership pricing tiers with one highlighted
// plan. All plans + perks live in content/membership — set isFeatured to move
// the spotlight.
export function Membership() {
  return (
    <section id="membership" className="scroll-mt-20 bg-concrete py-24 sm:py-32">
      <div className="container-page">
        <SectionHeading
          eyebrow="Membership"
          title="Pick your plan"
          description="No lock-in contracts. No hidden fees. Just month-to-month training with everything you need to get strong — cancel or pause anytime."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {membershipPlans.map((plan, i) => (
            <Reveal key={plan.id} delay={i * 0.08}>
              <article
                className={`relative flex h-full flex-col rounded-4xl p-8 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift ${
                  plan.isFeatured
                    ? 'bg-ink text-white ring-2 ring-forge-500'
                    : 'bg-white text-ink ring-1 ring-ink/5'
                }`}
              >
                {plan.isFeatured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-forge-500 px-4 py-1 text-[0.65rem] font-bold uppercase tracking-wider text-white shadow-soft">
                    Most popular
                  </span>
                )}

                <h3
                  className={`heading-display text-2xl ${
                    plan.isFeatured ? 'text-volt-300' : 'text-ink'
                  }`}
                >
                  {plan.name}
                </h3>
                <p
                  className={`mt-2 text-sm leading-relaxed ${
                    plan.isFeatured ? 'text-white/65' : 'text-ink/60'
                  }`}
                >
                  {plan.description}
                </p>

                <div className="mt-6 flex items-end gap-1">
                  <span className="heading-display text-5xl">{plan.price}</span>
                  <span
                    className={`pb-1.5 text-sm font-medium ${
                      plan.isFeatured ? 'text-white/55' : 'text-ink/50'
                    }`}
                  >
                    {plan.cadence}
                  </span>
                </div>

                <ul className="mt-7 flex flex-1 flex-col gap-3">
                  {plan.perks.map((perk) => (
                    <li key={perk} className="flex items-start gap-3 text-sm">
                      <span
                        className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                          plan.isFeatured
                            ? 'bg-volt-300 text-ink'
                            : 'bg-forge-100 text-forge-600'
                        }`}
                      >
                        <CheckIcon width={13} height={13} />
                      </span>
                      <span
                        className={plan.isFeatured ? 'text-white/85' : 'text-ink/75'}
                      >
                        {perk}
                      </span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#join"
                  className={`mt-8 w-full ${
                    plan.isFeatured ? 'btn-volt' : 'btn-primary'
                  }`}
                >
                  {plan.ctaLabel}
                </a>
              </article>
            </Reveal>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-ink/55">
          Not sure which fits? Your first class is free — come train and we&apos;ll
          help you choose.
        </p>
      </div>
    </section>
  );
}
