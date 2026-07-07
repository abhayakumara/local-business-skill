import Image from 'next/image';
import { gallery } from '@/content/gym';
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';

const spanClass: Record<string, string> = {
  wide: 'sm:col-span-2',
  tall: 'sm:row-span-2',
  normal: '',
};

export function Gallery() {
  return (
    <section id="gallery" className="scroll-mt-20 bg-forge-50 py-24 sm:py-32">
      <div className="container-page">
        <SectionHeading
          eyebrow="The Space"
          title="Built to train hard"
          description="Platforms, rigs, free weights, and a serious conditioning zone. Take a look before you walk in."
        />

        <div className="mt-14 grid auto-rows-[220px] grid-cols-1 gap-4 sm:grid-cols-3">
          {gallery.map((img, i) => (
            <Reveal
              key={img.id}
              delay={i * 0.05}
              className={`group relative overflow-hidden rounded-3xl shadow-soft ${
                spanClass[img.span ?? 'normal']
              }`}
            >
              <Image
                src={img.image}
                alt={img.alt}
                fill
                loading="lazy"
                sizes="(min-width: 640px) 33vw, 100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-ink/55 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                aria-hidden
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
