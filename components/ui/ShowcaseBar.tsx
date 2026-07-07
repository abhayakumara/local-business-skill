import Link from 'next/link';

const demos = [
  { slug: 'restaurant', label: 'Restaurant' },
  { slug: 'salon', label: 'Salon' },
  { slug: 'dental', label: 'Dental' },
  { slug: 'gym', label: 'Gym' },
] as const;

// Floating "agency chrome" pill shown on every demo: lets a prospect hop
// between industries during a live walkthrough without touching the URL bar.
export function ShowcaseBar({ current }: { current: (typeof demos)[number]['slug'] }) {
  return (
    <nav
      aria-label="Showcase demos"
      className="fixed bottom-4 left-1/2 z-50 flex -translate-x-1/2 items-center gap-0.5 rounded-full border border-white/10 bg-zinc-950/85 p-1.5 text-[11px] font-medium text-zinc-300 shadow-2xl backdrop-blur-xl print:hidden"
    >
      <Link
        href="/"
        className="rounded-full px-3 py-1.5 transition-colors hover:bg-white/10 hover:text-white"
      >
        <span aria-hidden>←</span> Agency
      </Link>
      <span className="mx-0.5 h-4 w-px bg-white/15" aria-hidden />
      {demos.map((d) => (
        <Link
          key={d.slug}
          href={`/${d.slug}`}
          aria-current={d.slug === current ? 'page' : undefined}
          className={
            d.slug === current
              ? 'rounded-full bg-white px-3 py-1.5 text-zinc-950'
              : 'rounded-full px-3 py-1.5 transition-colors hover:bg-white/10 hover:text-white'
          }
        >
          {d.label}
        </Link>
      ))}
    </nav>
  );
}
