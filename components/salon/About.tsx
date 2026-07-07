import Image from 'next/image';
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { AnimatedCounter } from '@/components/ui/AnimatedCounter';

const stats = [
  { value: 12, suffix: '+', label: 'Years caring for clients' },
  { value: 8, suffix: '', label: 'Specialist stylists & therapists' },
  { value: 4.9, suffix: '★', decimals: 1, label: 'Average client rating' },
];

export function About() {
  return (
    <section id="about" className="relative scroll-mt-20 py-24 sm:py-32">
      <div className="container-page grid items-center gap-14 lg:grid-cols-2">
        <Reveal className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-4xl shadow-lift">
            <Image
              src="/images/salon/about-studio.svg"
              alt="Soft daylight across the Maison Lumière styling floor"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-4 hidden w-48 rounded-3xl bg-white p-5 shadow-soft sm:block">
            <p className="heading-display text-3xl text-mauve-600">est. 2012</p>
            <p className="mt-1 text-sm text-ink/60">
              A neighbourhood sanctuary for hair & skin.
            </p>
          </div>
          <div
            className="absolute -left-6 -top-6 -z-10 h-40 w-40 rounded-4xl bg-mauve-100"
            aria-hidden
          />
        </Reveal>

        <div className="flex flex-col gap-8">
          <SectionHeading
            align="left"
            eyebrow="Our Philosophy"
            title="A calm space to feel like yourself"
            description="Maison Lumière was built on a simple idea: that looking after yourself should feel restful, not rushed. We pair genuine craft with the kind of warm, unhurried care that makes you want to stay a little longer."
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
