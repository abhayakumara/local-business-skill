'use client';

import { motion, useScroll, useSpring } from 'framer-motion';

// Thin gradient reading-progress bar pinned above the navbar.
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 24, mass: 0.4 });

  return (
    <motion.div
      aria-hidden
      className="fixed inset-x-0 top-0 z-[60] h-0.5 origin-left bg-gradient-to-r from-aurora-violet via-aurora-iris to-aurora-cyan"
      style={{ scaleX }}
    />
  );
}
