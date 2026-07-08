'use client';

import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useEffect, useMemo, useRef } from 'react';
import * as THREE from 'three';

// Interactive 3D backdrop for the hero: iridescent glass-like shapes drifting
// on sine waves inside a slowly revolving field of brand-colored particles,
// the whole scene tilting gently toward the cursor while the camera breathes.
// Loaded lazily (see Hero.tsx) and never mounted when the visitor prefers
// reduced motion.

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

const VIOLET = new THREE.Color('#8b5cf6');
const CYAN = new THREE.Color('#22d3ee');

function FloatingShape({ spec }: { spec: ShapeSpec }) {
  const mesh = useRef<THREE.Mesh>(null);

  const geometry = useMemo(() => {
    switch (spec.kind) {
      case 'knot':
        return new THREE.TorusKnotGeometry(0.7, 0.22, 160, 28);
      case 'torus':
        return new THREE.TorusGeometry(0.7, 0.26, 28, 72);
      default:
        return new THREE.IcosahedronGeometry(0.85, 1);
    }
  }, [spec.kind]);

  useFrame(({ clock }) => {
    if (!mesh.current) return;
    const t = clock.elapsedTime * spec.speed + spec.phase;
    mesh.current.position.y = spec.position[1] + Math.sin(t) * 0.35;
    mesh.current.position.x = spec.position[0] + Math.cos(t * 0.6) * 0.12;
    mesh.current.rotation.x = t * 0.4;
    mesh.current.rotation.y = t * 0.55;
  });

  return (
    <mesh ref={mesh} geometry={geometry} position={spec.position} scale={spec.scale}>
      {/* Clearcoat + iridescence reads as blown glass under the colored lights */}
      <meshPhysicalMaterial
        color="#beb6ff"
        metalness={0.55}
        roughness={0.16}
        clearcoat={1}
        clearcoatRoughness={0.22}
        iridescence={0.85}
        iridescenceIOR={1.4}
        emissive="#2a1f5e"
        emissiveIntensity={0.35}
      />
    </mesh>
  );
}

// A revolving shell of luminous dust between violet and cyan — cheap (one
// draw call), but it gives the scene depth the shapes alone can't.
function ParticleField({ count = 750 }: { count?: number }) {
  const points = useRef<THREE.Points>(null);

  const { positions, colors } = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const rng = (min: number, max: number) => min + Math.random() * (max - min);
    for (let i = 0; i < count; i++) {
      // Spherical shell so particles never crowd the headline dead-center.
      const radius = rng(4.5, 11);
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(rng(-1, 1));
      pos[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta) * 0.6;
      pos[i * 3 + 2] = radius * Math.cos(phi) * 0.7 - 2;
      const c = VIOLET.clone().lerp(CYAN, Math.random());
      col[i * 3] = c.r;
      col[i * 3 + 1] = c.g;
      col[i * 3 + 2] = c.b;
    }
    return { positions: pos, colors: col };
  }, [count]);

  useFrame(({ clock }) => {
    if (!points.current) return;
    points.current.rotation.y = clock.elapsedTime * 0.02;
    points.current.rotation.x = Math.sin(clock.elapsedTime * 0.05) * 0.06;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute attach="attributes-color" count={count} array={colors} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial
        size={0.045}
        vertexColors
        transparent
        opacity={0.65}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

// Slow sinusoidal drift on the camera so the scene never feels frozen, even
// before the cursor moves.
function CameraRig() {
  const { camera } = useThree();
  useFrame(({ clock }) => {
    const t = clock.elapsedTime;
    camera.position.y = Math.sin(t * 0.18) * 0.25;
    camera.position.x = Math.cos(t * 0.14) * 0.2;
    camera.lookAt(0, 0, -1.5);
  });
  return null;
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
    const ease = Math.min(delta * 2.5, 1);
    group.current.rotation.y += (target.x * 0.22 - group.current.rotation.y) * ease;
    group.current.rotation.x += (target.y * -0.12 - group.current.rotation.x) * ease;
  });

  return (
    <>
      <ambientLight intensity={0.35} />
      <pointLight position={[6, 4, 6]} intensity={70} color="#8b5cf6" />
      <pointLight position={[-6, -3, 4]} intensity={55} color="#22d3ee" />
      <pointLight position={[0, 6, -4]} intensity={30} color="#fb7185" />
      <group ref={group}>
        <ParticleField />
        {SHAPES.map((s, i) => (
          <FloatingShape key={i} spec={s} />
        ))}
      </group>
      <CameraRig />
      <fog attach="fog" args={['#07070d', 6, 15]} />
    </>
  );
}

// `active` gates the render loop: Hero.tsx flips it off once the hero leaves
// the viewport, so the scene costs nothing while the visitor reads the page.
export default function Hero3D({ active = true }: { active?: boolean }) {
  return (
    <Canvas
      aria-hidden
      className="pointer-events-none"
      dpr={[1, 1.5]}
      frameloop={active ? 'always' : 'never'}
      camera={{ position: [0, 0, 8], fov: 42 }}
      gl={{ alpha: true, antialias: true, powerPreference: 'low-power' }}
    >
      <Scene />
    </Canvas>
  );
}
