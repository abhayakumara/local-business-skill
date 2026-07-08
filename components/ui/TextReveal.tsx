'use client';

import { motion, useReducedMotion } from 'framer-motion';

interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
  /** 'mount' animates on load (heroes); 'view' when scrolled into view. */
  mode?: 'mount' | 'view';
}

// Masked word-by-word rise: each word slides up out of its own clip box with
// a stagger — the signature "premium" headline entrance. The in-view trigger
// lives on the (always visible) container, not the clipped words themselves —
// a fully clipped element never intersects the viewport, so observing it
// directly would deadlock the animation. Falls back to plain text for
// reduced-motion visitors.
export function TextReveal({
  text,
  className,
  delay = 0,
  stagger = 0.055,
  mode = 'mount',
}: TextRevealProps) {
  const reduce = useReducedMotion();
  const words = text.split(' ');

  if (reduce) return <span className={className}>{text}</span>;

  return (
    <motion.span
      className={className}
      initial="hidden"
      {...(mode === 'mount'
        ? { animate: 'shown' }
        : { whileInView: 'shown', viewport: { once: true, margin: '-60px' } })}
    >
      {words.map((word, i) => (
        <span
          key={`${word}-${i}`}
          className="-mb-[0.12em] inline-block overflow-hidden pb-[0.12em] align-bottom"
        >
          <motion.span
            className="inline-block will-change-transform"
            variants={{
              hidden: { y: '118%' },
              shown: {
                y: '0%',
                transition: {
                  duration: 0.85,
                  delay: delay + i * stagger,
                  ease: [0.21, 0.47, 0.32, 0.98],
                },
              },
            }}
          >
            {word}
            {i < words.length - 1 ? ' ' : null}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}
