'use client';

import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import { useReducedMotion } from 'framer-motion';
import { supportsWebGL, ThreeErrorBoundary } from './three';
import type { AmbientVariant } from './AmbientScene';

// Guarded mount point for the themed 3D layer: code-split, client-only,
// skipped without WebGL or when the visitor prefers reduced motion, and
// error-bounded so a GPU hiccup can never take the page down.
const AmbientScene = dynamic(() => import('./AmbientScene'), { ssr: false });

interface Ambient3DProps {
  variant: AmbientVariant;
  className?: string;
}

export function Ambient3D({ variant, className }: Ambient3DProps) {
  const reduce = useReducedMotion();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(supportsWebGL());
  }, []);

  if (!ready || reduce) return null;

  return (
    <div
      aria-hidden
      className={className ?? 'pointer-events-none absolute inset-0'}
    >
      <ThreeErrorBoundary>
        <AmbientScene variant={variant} />
      </ThreeErrorBoundary>
    </div>
  );
}
