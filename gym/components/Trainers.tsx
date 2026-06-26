import Image from 'next/image';
import { trainers } from '@/content';
import { Reveal } from './ui/Reveal';
import { SectionHeading } from './ui/SectionHeading';

export function Trainers() {
  return (
    <section id="trainers" className="scroll-mt-20 py-24 sm:py-32">
      <div className="container-page">
        <SectionHeading
          eyebrow="The Coaches"
          title="Trained by the best"
          description="Certified, experienced coaches who actually program your training and learn your name — not influencers with a clipboard."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {trainers.map((member, i) => (
            <Reveal key={member.id} delay={i * 0.06}>
              <article className="group flex flex-col">
                <div className="relative aspect-[3/4] overflow-hidden rounded-3xl shadow-soft">
                  <Image
                    src={member.image}
                    alt={member.imageAlt}
                    fill
                    loading="lazy"
                    sizes="(min-width: 1024px) 23vw, (min-width: 640px) 45vw, 90vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-ink/75 via-transparent to-transparent"
                    aria-hidden
                  />
                  <div className="absolute inset-x-0 bottom-0 p-4 text-white">
                    <p className="text-xs font-bold uppercase tracking-wide text-volt-300">
                      {member.specialty}
                    </p>
                  </div>
                </div>
                <div className="mt-4">
                  <h3 className="heading-display text-xl text-ink">
                    {member.name}
                  </h3>
                  <p className="mt-0.5 text-sm text-ink/55">{member.role}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
