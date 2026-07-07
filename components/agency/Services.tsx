import { services } from '@/content/agency';
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { CheckIcon, icons } from './icons';

export function Services() {
  return (
    <section id="services" className="relative scroll-mt-24 py-28 sm:py-36">
      {/* Faint radial glow anchoring the section */}
      <div
        aria-hidden
        className="absolute left-1/2 top-0 -z-10 h-[24rem] w-[52rem] max-w-full -translate-x-1/2 rounded-full bg-aurora-iris/10 blur-[130px]"
      />
      <div className="container-page flex flex-col gap-16">
        <SectionHeading
          eyebrow="What we do"
          title="Everything your website needs to earn its keep"
          description="Design is only half the job. We handle the words, the search rankings, and the upkeep — so the site keeps working long after launch day."
        />

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {services.map((service, i) => {
            const Icon = icons[service.icon];
            return (
              <Reveal key={service.id} delay={i * 0.08} className="h-full">
                <article className="group relative flex h-full flex-col gap-5 overflow-hidden rounded-4xl border border-white/10 bg-white/[0.03] p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-aurora-violet/40 hover:bg-white/[0.05] hover:shadow-glow">
                  {/* Hover halo */}
                  <span
                    aria-hidden
                    className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-aurora-violet/15 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  />
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-aurora-violet/30 to-aurora-cyan/20 text-aurora-cyan transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="heading-display text-xl text-white">{service.name}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/55">
                      {service.description}
                    </p>
                  </div>
                  <ul className="mt-auto flex flex-col gap-2 border-t border-white/10 pt-4">
                    {service.points.map((point) => (
                      <li key={point} className="flex items-center gap-2.5 text-sm text-white/60">
                        <CheckIcon className="h-3.5 w-3.5 shrink-0 text-aurora-cyan" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
