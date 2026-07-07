'use client';

import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from 'framer-motion';
import { useRef, type ReactNode, type MouseEvent } from 'react';

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  /** Max tilt in degrees. */
  tilt?: number;
  /** Show a cursor-following light spot. */
  glare?: boolean;
}

// 3D tilt card with a cursor-aware glare highlight. GPU-only transforms,
// springs back on leave, fully disabled for reduced motion / touch.
export function TiltCard({ children, className, tilt = 7, glare = true }: TiltCardProps) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);

  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const gx = useMotionValue(50);
  const gy = useMotionValue(50);
  const srx = useSpring(rx, { stiffness: 180, damping: 18 });
  const sry = useSpring(ry, { stiffness: 180, damping: 18 });
  const glareBg = useMotionTemplate`radial-gradient(320px circle at ${gx}% ${gy}%, rgb(255 255 255 / 0.14), transparent 65%)`;

  function onMouseMove(e: MouseEvent<HTMLDivElement>) {
    if (reduce || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    ry.set((px - 0.5) * tilt * 2);
    rx.set((0.5 - py) * tilt * 2);
    gx.set(px * 100);
    gy.set(py * 100);
  }

  function onMouseLeave() {
    rx.set(0);
    ry.set(0);
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      style={
        reduce
          ? undefined
          : {
              rotateX: srx,
              rotateY: sry,
              transformStyle: 'preserve-3d',
              transformPerspective: 900,
            }
      }
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      {children}
      {glare && !reduce && (
        <motion.span
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{ background: glareBg }}
        />
      )}
    </motion.div>
  );
}
