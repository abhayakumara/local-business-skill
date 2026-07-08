'use client';

import Lenis from 'lenis';
import { usePathname } from 'next/navigation';
import { useEffect, useRef } from 'react';

// Site-wide inertial scrolling (Lenis). Wheel input is eased through an
// exponential curve so every scroll glides instead of stepping. Fully
// disabled for prefers-reduced-motion — those visitors keep native scroll.
export function SmoothScroll() {
  const lenisRef = useRef<Lenis | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 0.95,
      touchMultiplier: 1.6,
    });
    lenisRef.current = lenis;

    let raf = requestAnimationFrame(function loop(time: number) {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    });

    // Same-page anchor links glide instead of jumping. Keyboard activations
    // (e.detail === 0) keep native behavior so focus lands in the target —
    // this also leaves the "skip to content" link fully accessible.
    function onClick(e: MouseEvent) {
      if (e.detail === 0 || e.defaultPrevented || e.metaKey || e.ctrlKey) return;
      const anchor = (e.target as HTMLElement).closest?.('a[href^="#"]');
      if (!anchor) return;
      const hash = anchor.getAttribute('href');
      if (!hash || hash === '#') return;
      const target = document.getElementById(hash.slice(1));
      if (!target) return;
      e.preventDefault();
      history.pushState(null, '', hash);
      lenis.scrollTo(target, { offset: -88 });
    }
    document.addEventListener('click', onClick);

    return () => {
      document.removeEventListener('click', onClick);
      cancelAnimationFrame(raf);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  // New route → start at the top instantly (mirrors native app-router behavior).
  useEffect(() => {
    lenisRef.current?.scrollTo(0, { immediate: true, force: true });
  }, [pathname]);

  return null;
}
