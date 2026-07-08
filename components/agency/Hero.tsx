'use client';

import dynamic from 'next/dynamic';
import { motion, useInView, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { Component, useEffect, useRef, useState, type ReactNode } from 'react';
import { agency, heroStats } from '@/content/agency';
import { Magnetic } from '@/components/ui/Magnetic';
import { AnimatedCounter } from '@/components/ui/AnimatedCounter';

// Heavy 3D scene is code-split and only requested client-side after mount —
// the hero paints instantly with the CSS aurora while three.js streams in.
const Hero3D = dynamic(() => import('./Hero3D'), { ssr: false });

// If WebGL is unavailable (or three.js throws), silently fall back to the
// CSS aurora backdrop — the page must never crash over a decoration.
class ThreeErrorBoundary extends Component<{ children: ReactNode }, { failed: boolean }> {
  state = { failed: false };
  static getDerivedStateFromError() {
    return { failed: true };
  }
  render() {
    return this.state.failed ? null : this.props.children;
  }
}

function supportsWebGL(): boolean {
  try {
    const canvas = document.createElement('canvas');
    return Boolean(canvas.getContext('webgl2') || canvas.getContext('webgl'));
  } catch {
    return false;
  }
}

const HEADLINE = ['Websites', 'that', 'make', 'local', 'businesses'];

export function Hero() {
  const reduce = useReducedMotion();
  const [show3d, setShow3d] = useState(false);
  useEffect(() => {
    setShow3d(supportsWebGL());
  }, []);

  // Depth-staged parallax: as the visitor scrolls away, the 3D scene sinks
  // and dissolves, the aurora drifts at a middle rate, and the copy trails
  // last — three layers moving apart is what sells the depth.
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });
  // Once the hero has fully scrolled away the canvas is invisible — halt its
  // render loop so the GPU/main thread is free for the rest of the page. The
  // margin resumes it a beat before re-entry, so no blank first frame.
  const heroInView = useInView(sectionRef, { margin: '120px' });

  const sceneY = useTransform(scrollYProgress, [0, 1], [0, 190]);
  const sceneOpacity = useTransform(scrollYProgress, [0, 0.75], [0.7, 0]);
  const auroraY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 70]);
  const contentOpacity = useTransform(scrollYProgress, [0.15, 0.9], [1, 0]);

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } },
  };
  const word = {
    hidden: { opacity: 0, y: 28, rotateX: 45 },
    show: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: { duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] },
    },
  };

  return (
    <section
      ref={sectionRef}
      className="noise relative flex min-h-screen flex-col justify-center overflow-hidden pb-24 pt-32 sm:pt-36"
    >
      {/* Aurora wash */}
      <motion.div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={reduce ? undefined : { y: auroraY }}
      >
        <div className="absolute -left-40 -top-40 h-[34rem] w-[34rem] animate-aurora rounded-full bg-aurora-violet/25 blur-[120px]" />
        <div className="absolute -right-32 top-24 h-[28rem] w-[28rem] animate-aurora rounded-full bg-aurora-cyan/15 blur-[110px] [animation-delay:-6s]" />
        <div className="absolute bottom-[-12rem] left-1/3 h-[30rem] w-[30rem] animate-aurora rounded-full bg-aurora-iris/20 blur-[130px] [animation-delay:-12s]" />
      </motion.div>

      {/* Interactive 3D layer */}
      {show3d && !reduce && (
        <motion.div
          aria-hidden
          className="absolute inset-0 -z-[5]"
          style={{ y: sceneY, opacity: sceneOpacity }}
        >
          <ThreeErrorBoundary>
            <Hero3D active={heroInView} />
          </ThreeErrorBoundary>
        </motion.div>
      )}

      <motion.div
        className="container-page relative"
        style={reduce ? undefined : { y: contentY, opacity: contentOpacity }}
      >
        <motion.p
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="eyebrow"
        >
          <span className="h-px w-6 bg-aurora-cyan" aria-hidden />
          {agency.name} — digital studio for local businesses
        </motion.p>

        <motion.h1
          variants={container}
          initial={reduce ? false : 'hidden'}
          animate="show"
          className="heading-display mt-6 max-w-5xl text-5xl leading-[1.04] text-white sm:text-7xl lg:text-8xl"
          style={{ perspective: 800 }}
        >
          {HEADLINE.map((w) => (
            <motion.span key={w} variants={word} className="mr-[0.28em] inline-block">
              {w}
            </motion.span>
          ))}
          <motion.span variants={word} className="text-gradient inline-block">
            unforgettable.
          </motion.span>
        </motion.h1>

        <motion.p
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="mt-8 max-w-2xl text-lg leading-relaxed text-white/60 sm:text-xl"
        >
          {agency.description}
        </motion.p>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <Magnetic>
            <a href="#work" className="btn-aurora !px-9 !py-4 !text-base">
              Explore live demos
            </a>
          </Magnetic>
          <Magnetic strength={10}>
            <a href="#contact" className="btn-ghost !px-9 !py-4 !text-base">
              Start a project
            </a>
          </Magnetic>
        </motion.div>

        <motion.dl
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-20 grid max-w-3xl grid-cols-2 gap-x-8 gap-y-8 sm:grid-cols-4"
        >
          {heroStats.map((s) => (
            <div key={s.id} className="flex flex-col gap-1">
              <dt className="order-2 text-xs uppercase tracking-[0.18em] text-white/40">
                {s.label}
              </dt>
              <dd className="heading-display order-1 text-3xl text-white sm:text-4xl">
                <AnimatedCounter
                  to={s.value}
                  suffix={s.suffix}
                  decimals={'decimals' in s ? s.decimals : 0}
                />
              </dd>
            </div>
          ))}
        </motion.dl>
      </motion.div>

      {/* Scroll hint */}
      <motion.a
        href="#work"
        aria-label="Scroll to work"
        initial={reduce ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-white/35 transition-colors hover:text-white/70 sm:flex"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <span className="block h-9 w-5 rounded-full border border-current p-1" aria-hidden>
          <span className="block h-2 w-1.5 animate-float rounded-full bg-current [animation-duration:1.8s]" />
        </span>
      </motion.a>
    </section>
  );
}
