'use client';

import { animate, useInView, useReducedMotion } from 'framer-motion';
import { useEffect, useRef } from 'react';

interface AnimatedCounterProps {
  /** Final value, e.g. 120 for "120+". */
  to: number;
  /** Rendered before the number, e.g. "$". */
  prefix?: string;
  /** Rendered after the number, e.g. "+", "★", "k". */
  suffix?: string;
  /** Decimal places to keep while counting. */
  decimals?: number;
  duration?: number;
  className?: string;
}

// Counts up from 0 when scrolled into view. Renders the final value
// immediately for reduced motion (and for crawlers via SSR markup).
export function AnimatedCounter({
  to,
  prefix = '',
  suffix = '',
  decimals = 0,
  duration = 1.6,
  className,
}: AnimatedCounterProps) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const formatted = (v: number) => `${prefix}${v.toFixed(decimals)}${suffix}`;

  useEffect(() => {
    if (!inView || reduce || !ref.current) return;
    const node = ref.current;
    const controls = animate(0, to, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => {
        node.textContent = formatted(v);
      },
    });
    return () => controls.stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, reduce, to, duration]);

  // SSR + reduced-motion fallback: the real number is always in the markup.
  return (
    <span ref={ref} className={className}>
      {formatted(to)}
    </span>
  );
}
