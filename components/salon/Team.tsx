import Image from 'next/image';
import { team } from '@/content/salon';
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';

export function Team() {
  return (
    <section id="team" className="scroll-mt-20 py-24 sm:py-32">
      <div className="container-page">
        <SectionHeading
          eyebrow="The People"
          title="Meet the makers"
          description="A small, specialist team who genuinely love what they do — and remember how you take your coffee."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member, i) => (
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
                    className="absolute inset-0 bg-gradient-to-t from-ink/55 via-transparent to-transparent"
                    aria-hidden
                  />
                  <div className="absolute inset-x-0 bottom-0 p-4 text-white">
                    <p className="text-xs font-medium uppercase tracking-wide text-gold-200">
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
