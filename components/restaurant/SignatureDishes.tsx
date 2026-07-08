import Image from 'next/image';
import { dishes } from '@/content/restaurant';
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ArrowIcon, LeafIcon } from './icons';

// Industry-signature section: the chef's signature dishes as a cinematic
// horizontal gallery. CSS scroll-snap keeps it buttery on touch and trackpad
// with zero JavaScript.
export function SignatureDishes() {
  const signatures = dishes.filter((d) => d.isSignature);
  if (signatures.length === 0) return null;

  return (
    <section id="signatures" className="relative scroll-mt-20 overflow-hidden py-24 sm:py-32">
      {/* Warm backdrop wash */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 -z-10 h-full bg-gradient-to-b from-saffron-50/70 via-transparent to-transparent"
      />
      <div className="container-page flex flex-col gap-4">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            align="left"
            eyebrow="From the tandoor"
            title="The dishes people cross the city for"
            description="A handful of plates define us. Cooked the same way since day one — over charcoal, without shortcuts."
          />
          <Reveal delay={0.15}>
            <p className="hidden items-center gap-2 text-sm font-medium text-charcoal/50 sm:inline-flex">
              Scroll to taste
              <ArrowIcon width={16} height={16} aria-hidden />
            </p>
          </Reveal>
        </div>
      </div>

      <Reveal className="mt-12">
        <ul
          className="flex snap-x snap-mandatory gap-6 overflow-x-auto px-5 pb-8 sm:px-8 lg:px-[max(3rem,calc((100vw-80rem)/2+3rem))] [scrollbar-width:thin]"
          aria-label="Signature dishes"
        >
          {signatures.map((dish, i) => (
            <li
              key={dish.id}
              className="group relative w-[82vw] max-w-md shrink-0 snap-center overflow-hidden rounded-4xl shadow-soft transition-shadow duration-500 hover:shadow-lift sm:w-[420px] sm:snap-start"
            >
              <div className="relative aspect-[4/5]">
                <Image
                  src={dish.image}
                  alt={dish.imageAlt}
                  fill
                  sizes="(min-width: 640px) 420px, 82vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/20 to-transparent"
                />
                <span
                  aria-hidden
                  className="heading-display absolute right-6 top-5 text-5xl text-white/25 transition-colors duration-500 group-hover:text-white/50"
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="absolute inset-x-0 bottom-0 flex flex-col gap-2 p-7">
                  {dish.isVegetarian && (
                    <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-sage-100/90 px-3 py-1 text-[11px] font-semibold text-sage-700">
                      <LeafIcon width={12} height={12} /> Vegetarian
                    </span>
                  )}
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="heading-display text-3xl text-white">{dish.name}</h3>
                    <p className="heading-display shrink-0 text-2xl text-saffron-300">
                      {dish.price}
                    </p>
                  </div>
                  <p className="text-sm leading-relaxed text-white/75">{dish.description}</p>
                </div>
              </div>
            </li>
          ))}
          {/* End card nudging towards the full menu */}
          <li className="flex w-[62vw] max-w-xs shrink-0 snap-center items-center justify-center rounded-4xl border-2 border-dashed border-saffron-300/60 sm:snap-start">
            <a
              href="#menu"
              className="flex flex-col items-center gap-3 p-10 text-center text-saffron-700 transition-colors hover:text-saffron-600"
            >
              <span className="heading-display text-2xl">And 40+ more</span>
              <span className="inline-flex items-center gap-2 text-sm font-semibold">
                Browse the full menu <ArrowIcon width={16} height={16} />
              </span>
            </a>
          </li>
        </ul>
      </Reveal>
    </section>
  );
}
