import { insurance } from '@/content';
import { Reveal } from './ui/Reveal';
import { ShieldIcon } from './ui/icons';

// Industry-specific trust band: reassures patients about cost and coverage
// before they ever pick up the phone. All copy + plans live in content/insurance.
export function Insurance() {
  return (
    <section className="scroll-mt-20 py-20 sm:py-24">
      <div className="container-page">
        <div className="overflow-hidden rounded-4xl bg-sky-700 shadow-lift">
          <div className="relative grid gap-10 p-10 sm:p-14 lg:grid-cols-2 lg:items-center">
            <div
              className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(63,191,156,0.30),transparent_60%)]"
              aria-hidden
            />
            <Reveal className="relative">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-mint-200">
                <ShieldIcon width={16} height={16} />
                Cover & Costs
              </span>
              <h2 className="heading-display mt-5 text-3xl text-white sm:text-4xl">
                {insurance.heading}
              </h2>
              <p className="mt-4 max-w-md text-base leading-relaxed text-white/75">
                {insurance.description}
              </p>
              <p className="mt-6 rounded-2xl bg-white/10 p-4 text-sm leading-relaxed text-mint-100">
                {insurance.membershipNote}
              </p>
            </Reveal>

            <Reveal delay={0.1} className="relative">
              <p className="text-xs font-semibold uppercase tracking-wider text-white/50">
                Plans we accept
              </p>
              <ul className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {insurance.plans.map((plan) => (
                  <li
                    key={plan.id}
                    className="flex items-center justify-center rounded-2xl bg-white/95 px-3 py-5 text-center text-sm font-semibold text-sky-800 shadow-soft"
                  >
                    {plan.name}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-xs text-white/55">
                Don&apos;t see your provider? Call us — we likely work with them too.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
