import Image from 'next/image';
import { Parallax } from '@/components/ui/Parallax';
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { AnimatedCounter } from '@/components/ui/AnimatedCounter';

const stats = [
  { value: 15, suffix: '+', label: 'Years caring for the neighbourhood' },
  { value: 12, suffix: 'k+', label: 'Healthy smiles looked after' },
  { value: 4.9, suffix: '★', decimals: 1, label: 'Average patient rating' },
];

export function About() {
  return (
    <section id="about" className="relative scroll-mt-20 py-24 sm:py-32">
      <div className="container-page grid items-center gap-14 lg:grid-cols-2">
        <Reveal className="relative">
          <Parallax drift={36}>
            <div className="relative aspect-[4/5] overflow-hidden rounded-4xl shadow-lift">
              <Image
                src="/images/dental/about-practice.svg"
                alt="Calm, modern treatment room at Northway Dental Studio"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </Parallax>
          <div className="absolute -bottom-6 -right-4 hidden w-48 rounded-3xl bg-white p-5 shadow-soft sm:block">
            <p className="heading-display text-3xl text-sky-600">est. 2009</p>
            <p className="mt-1 text-sm text-ink/60">
              Gentle, modern care for the whole family.
            </p>
          </div>
          <div
            className="absolute -left-6 -top-6 -z-10 h-40 w-40 rounded-4xl bg-sky-100"
            aria-hidden
          />
        </Reveal>

        <div className="flex flex-col gap-8">
          <SectionHeading
            align="left"
            eyebrow="Our Approach"
            title="Dentistry that puts you at ease"
            description="Northway was founded on a simple belief: that going to the dentist should feel calm, honest, and unhurried. We take the time to listen, explain your options clearly, and never pressure you — just genuine care and craft you can trust."
          />

          <Reveal>
            <dl className="grid grid-cols-3 gap-6 border-t border-ink/10 pt-8">
              {stats.map((s) => (
                <div key={s.label} className="flex flex-col gap-1">
                  <dt className="heading-display text-3xl text-ink sm:text-4xl">
                    <AnimatedCounter
                      to={s.value}
                      suffix={s.suffix}
                      decimals={'decimals' in s ? s.decimals : 0}
                    />
                  </dt>
                  <dd className="text-xs leading-snug text-ink/55 sm:text-sm">
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
