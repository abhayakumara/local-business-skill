'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { useEffect, useMemo, useRef } from 'react';
import * as THREE from 'three';

// Lightweight interactive 3D backdrop for the hero: a handful of floating
// glass-like shapes lit by the brand gradient, drifting on sine waves and
// tilting gently toward the cursor. Loaded lazily (see Hero.tsx) and never
// mounted when the visitor prefers reduced motion.

interface ShapeSpec {
  position: [number, number, number];
  scale: number;
  speed: number;
  phase: number;
  kind: 'ico' | 'torus' | 'knot';
}

const SHAPES: ShapeSpec[] = [
  { position: [3.4, 1.1, -1], scale: 1.15, speed: 0.55, phase: 0, kind: 'knot' },
  { position: [-3.8, -0.4, -2], scale: 0.9, speed: 0.4, phase: 1.4, kind: 'ico' },
  { position: [-2.2, 1.9, -3.5], scale: 0.55, speed: 0.7, phase: 2.6, kind: 'torus' },
  { position: [2.4, -1.8, -2.5], scale: 0.6, speed: 0.6, phase: 3.4, kind: 'ico' },
  { position: [0.4, 2.6, -4.5], scale: 0.45, speed: 0.5, phase: 4.2, kind: 'torus' },
];

function FloatingShape({ spec }: { spec: ShapeSpec }) {
  const mesh = useRef<THREE.Mesh>(null);

  const geometry = useMemo(() => {
    switch (spec.kind) {
      case 'knot':
        return new THREE.TorusKnotGeometry(0.7, 0.22, 128, 24);
      case 'torus':
        return new THREE.TorusGeometry(0.7, 0.26, 24, 64);
      default:
        return new THREE.IcosahedronGeometry(0.85, 0);
    }
  }, [spec.kind]);

  useFrame(({ clock }) => {
    if (!mesh.current) return;
    const t = clock.elapsedTime * spec.speed + spec.phase;
    mesh.current.position.y = spec.position[1] + Math.sin(t) * 0.35;
    mesh.current.rotation.x = t * 0.4;
    mesh.current.rotation.y = t * 0.55;
  });

  return (
    <mesh ref={mesh} geometry={geometry} position={spec.position} scale={spec.scale}>
      <meshStandardMaterial
        color="#c9c4ff"
        metalness={0.85}
        roughness={0.18}
        envMapIntensity={0.8}
      />
    </mesh>
  );
}

function Scene() {
  const group = useRef<THREE.Group>(null);
  const pointer = useRef({ x: 0, y: 0 });

  // The canvas is pointer-events-none so links stay clickable — track the
  // cursor on the window instead of relying on canvas events.
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      pointer.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      pointer.current.y = (e.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener('mousemove', onMove, { passive: true });
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  useFrame((_, delta) => {
    if (!group.current) return;
    const target = pointer.current;
    group.current.rotation.y += (target.x * 0.22 - group.current.rotation.y) * Math.min(delta * 2.5, 1);
    group.current.rotation.x += (target.y * -0.12 - group.current.rotation.x) * Math.min(delta * 2.5, 1);
  });

  return (
    <>
      <ambientLight intensity={0.35} />
      <pointLight position={[6, 4, 6]} intensity={60} color="#8b5cf6" />
      <pointLight position={[-6, -3, 4]} intensity={45} color="#22d3ee" />
      <pointLight position={[0, 6, -4]} intensity={25} color="#fb7185" />
      <group ref={group}>
        {SHAPES.map((s, i) => (
          <FloatingShape key={i} spec={s} />
        ))}
      </group>
      <fog attach="fog" args={['#07070d', 6, 14]} />
    </>
  );
}

export default function Hero3D() {
  return (
    <Canvas
      aria-hidden
      className="pointer-events-none"
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 8], fov: 42 }}
      gl={{ alpha: true, antialias: true, powerPreference: 'low-power' }}
    >
      <Scene />
    </Canvas>
  );
}
