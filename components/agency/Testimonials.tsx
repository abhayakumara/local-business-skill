import { agencyTestimonials } from '@/content/agency';
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { StarIcon } from './icons';

export function Testimonials() {
  return (
    <section className="relative py-28 sm:py-36">
      <div
        aria-hidden
        className="absolute right-0 top-1/3 -z-10 h-[22rem] w-[36rem] rounded-full bg-aurora-rose/[0.07] blur-[120px]"
      />
      <div className="container-page flex flex-col gap-16">
        <SectionHeading
          eyebrow="Results"
          title="Owners don’t want a website. They want what it brings."
          description="More bookings, more calls, more walk-ins who already trust you. Here’s what that sounds like."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {agencyTestimonials.map((t, i) => (
            <Reveal key={t.id} delay={i * 0.1} className="h-full">
              <figure className="gradient-border relative flex h-full flex-col gap-6 rounded-4xl p-8">
                <div className="flex text-aurora-cyan" aria-label="5 out of 5 stars" role="img">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <StarIcon key={s} className="h-4 w-4" />
                  ))}
                </div>
                <blockquote className="text-base leading-relaxed text-white/75">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-auto flex flex-col gap-3 border-t border-white/10 pt-5">
                  <div>
                    <p className="font-semibold text-white">{t.author}</p>
                    <p className="text-sm text-white/45">{t.role}</p>
                  </div>
                  <p className="inline-flex w-fit items-center gap-2 rounded-full bg-aurora-violet/15 px-3.5 py-1.5 text-xs font-semibold text-violet-300">
                    <span aria-hidden>↗</span> {t.result}
                  </p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
