import { clientNames } from '@/content/agency';
import { Marquee } from '@/components/ui/Marquee';

export function TrustMarquee() {
  return (
    <section aria-label="Businesses we work with" className="border-y border-white/[0.07] py-10">
      <div className="container-page mb-6 text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-white/35">
          Trusted by local businesses like
        </p>
      </div>
      <Marquee trackClassName="gap-14 pr-14">
        {clientNames.map((name) => (
          <span
            key={name}
            className="heading-display whitespace-nowrap text-2xl font-medium text-white/25 transition-colors hover:text-white/60"
          >
            {name}
          </span>
        ))}
      </Marquee>
    </section>
  );
}
