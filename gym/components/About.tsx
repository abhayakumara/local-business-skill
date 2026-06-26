import Image from 'next/image';
import { Reveal } from './ui/Reveal';
import { SectionHeading } from './ui/SectionHeading';

const stats = [
  { value: '600+', label: 'Active members' },
  { value: '50+', label: 'Coached classes each week' },
  { value: '4.9★', label: 'Average member rating' },
];

export function About() {
  return (
    <section id="about" className="relative scroll-mt-20 py-24 sm:py-32">
      <div className="container-page grid items-center gap-14 lg:grid-cols-2">
        <Reveal className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-4xl shadow-lift">
            <Image
              src="/images/about-gym.svg"
              alt="The training floor at Apex Athletic Club"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-4 hidden w-48 rounded-3xl bg-ink p-5 shadow-soft sm:block">
            <p className="heading-display text-3xl text-volt-300">est. 2016</p>
            <p className="mt-1 text-sm text-white/70">
              Coaching this city to get genuinely strong.
            </p>
          </div>
          <div
            className="absolute -left-6 -top-6 -z-10 h-40 w-40 rounded-4xl bg-forge-100"
            aria-hidden
          />
        </Reveal>

        <div className="flex flex-col gap-8">
          <SectionHeading
            align="left"
            eyebrow="Who We Are"
            title="Coaching, not just a gym floor"
            description="Apex isn't a treadmill warehouse you visit alone. It's expert coaches, smart programming, and a community that pushes you — built around one promise: that you leave stronger than you came, every single week."
          />

          <Reveal>
            <dl className="grid grid-cols-3 gap-6 border-t border-ink/10 pt-8">
              {stats.map((s) => (
                <div key={s.label} className="flex flex-col gap-1">
                  <dt className="heading-display text-3xl text-ink sm:text-4xl">
                    {s.value}
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
