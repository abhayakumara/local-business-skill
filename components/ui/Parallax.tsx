'use client';

import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { useRef, type ReactNode } from 'react';

interface ParallaxProps {
  children: ReactNode;
  /** Total drift in px across the element's scroll journey. */
  drift?: number;
  className?: string;
}

// Scroll-linked parallax drift: the wrapped element glides slower than the
// page, adding depth to imagery. Motion values run on the compositor, and the
// effect is skipped for reduced-motion visitors.
export function Parallax({ children, drift = 56, className }: ParallaxProps) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], [drift, -drift]);

  return (
    <motion.div ref={ref} style={reduce ? undefined : { y }} className={className}>
      {children}
    </motion.div>
  );
}
