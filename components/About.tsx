import Image from 'next/image';
import { Reveal } from './ui/Reveal';
import { SectionHeading } from './ui/SectionHeading';

const stats = [
  { value: '15+', label: 'Years of family recipes' },
  { value: '40', label: 'Spices ground in-house' },
  { value: '4.9★', label: 'Average guest rating' },
];

export function About() {
  return (
    <section id="about" className="relative scroll-mt-20 py-24 sm:py-32">
      <div className="container-page grid items-center gap-14 lg:grid-cols-2">
        {/* Imagery with layered depth */}
        <Reveal className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-4xl shadow-lift">
            <Image
              src="/images/about-chef.svg"
              alt="Head chef plating a dish in the open kitchen"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-4 hidden w-48 rounded-3xl bg-white p-5 shadow-soft sm:block">
            <p className="heading-display text-3xl text-saffron-600">est. 2009</p>
            <p className="mt-1 text-sm text-charcoal/60">
              A neighbourhood favourite, refined.
            </p>
          </div>
          <div
            className="absolute -left-6 -top-6 -z-10 h-40 w-40 rounded-4xl bg-saffron-100"
            aria-hidden
          />
        </Reveal>

        <div className="flex flex-col gap-8">
          <SectionHeading
            align="left"
            eyebrow="Our Story"
            title="Rooted in tradition, plated for today"
            description="What began as a family kitchen has grown into one of the city's most loved tables — without ever losing the soul of home cooking. We source seasonally, grind our own masalas daily, and treat every guest like they've been invited over for dinner."
          />

          <Reveal>
            <dl className="grid grid-cols-3 gap-6 border-t border-charcoal/10 pt-8">
              {stats.map((s) => (
                <div key={s.label} className="flex flex-col gap-1">
                  <dt className="heading-display text-3xl text-charcoal sm:text-4xl">
                    {s.value}
                  </dt>
                  <dd className="text-xs leading-snug text-charcoal/55 sm:text-sm">
                    {s.label}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
