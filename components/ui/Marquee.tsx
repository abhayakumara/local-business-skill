import type { ReactNode } from 'react';

interface MarqueeProps {
  children: ReactNode;
  className?: string;
  /** Extra classes for the moving track (e.g. gap sizing). */
  trackClassName?: string;
}

// CSS-only infinite marquee: content is duplicated once and the track slides
// -50%. Pauses on hover; the duplicate is aria-hidden so screen readers hear
// the content exactly once. Reduced motion freezes it via the global CSS rule.
export function Marquee({ children, className = '', trackClassName = '' }: MarqueeProps) {
  return (
    <div
      className={`group/marquee overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)] ${className}`}
    >
      <div
        className={`flex w-max animate-marquee items-center group-hover/marquee:[animation-play-state:paused] ${trackClassName}`}
      >
        <div className={`flex shrink-0 items-center ${trackClassName}`}>{children}</div>
        <div aria-hidden className={`flex shrink-0 items-center ${trackClassName}`}>
          {children}
        </div>
      </div>
    </div>
  );
}
