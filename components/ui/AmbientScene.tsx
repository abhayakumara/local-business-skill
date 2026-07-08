'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { useEffect, useMemo, useRef, type ReactNode } from 'react';
import * as THREE from 'three';

// One lazy-loaded ambient 3D layer, themed per industry:
//   embers  — warm sparks drifting up through the restaurant's candlelight
//   petals  — soft blush petals falling across the salon's ivory hero
//   orbs    — calm glass bubbles rising through the dental studio's air
//   energy  — wireframe geometry + volt sparks charging the gym hero
// Every variant shares the same particle engine and cursor-parallax rig, so
// the whole system ships as a single code-split chunk reused by all demos.

export type AmbientVariant = 'embers' | 'petals' | 'orbs' | 'energy';

function makeSpriteTexture(): THREE.Texture {
  const size = 64;
  const canvas = document.createElement('canvas');
  canvas.width = canvas.height = size;
  const ctx = canvas.getContext('2d')!;
  const g = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
  g.addColorStop(0, 'rgba(255,255,255,1)');
  g.addColorStop(0.35, 'rgba(255,255,255,0.75)');
  g.addColorStop(1, 'rgba(255,255,255,0)');
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, size, size);
  return new THREE.CanvasTexture(canvas);
}

interface FieldProps {
  count: number;
  colors: string[];
  size: number;
  speed: number;
  direction: 1 | -1; // 1 rises, -1 falls
  sway: number;
  opacity: number;
  additive?: boolean;
}

function ParticleField({
  count,
  colors,
  size,
  speed,
  direction,
  sway,
  opacity,
  additive = false,
}: FieldProps) {
  const points = useRef<THREE.Points>(null);
  const texture = useMemo(makeSpriteTexture, []);

  const { positions, colorArr, seeds } = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colorArr = new Float32Array(count * 3);
    const seeds = new Float32Array(count * 2); // phase, speed jitter
    const palette = colors.map((c) => new THREE.Color(c));
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 14;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 2] = -Math.random() * 4;
      const c = palette[i % palette.length];
      colorArr[i * 3] = c.r;
      colorArr[i * 3 + 1] = c.g;
      colorArr[i * 3 + 2] = c.b;
      seeds[i * 2] = Math.random() * Math.PI * 2;
      seeds[i * 2 + 1] = 0.5 + Math.random();
    }
    return { positions, colorArr, seeds };
  }, [count, colors]);

  useFrame(({ clock }, delta) => {
    const geo = points.current?.geometry;
    if (!geo) return;
    const pos = geo.attributes.position.array as Float32Array;
    const t = clock.elapsedTime;
    const step = Math.min(delta, 0.05);
    for (let i = 0; i < count; i++) {
      let y = pos[i * 3 + 1] + direction * speed * seeds[i * 2 + 1] * step;
      if (direction === 1 && y > 5.2) y = -5.2;
      if (direction === -1 && y < -5.2) y = 5.2;
      pos[i * 3 + 1] = y;
      pos[i * 3] += Math.sin(t * 0.6 + seeds[i * 2]) * sway * step;
    }
    geo.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colorArr, 3]} />
      </bufferGeometry>
      <pointsMaterial
        map={texture}
        size={size}
        vertexColors
        transparent
        opacity={opacity}
        depthWrite={false}
        sizeAttenuation
        blending={additive ? THREE.AdditiveBlending : THREE.NormalBlending}
      />
    </points>
  );
}

interface OrbSpec {
  position: [number, number, number];
  scale: number;
  speed: number;
  phase: number;
  color: string;
}

function FloatOrbs({ colors }: { colors: [string, string] }) {
  const specs = useMemo<OrbSpec[]>(
    () =>
      Array.from({ length: 7 }, (_, i) => ({
        position: [
          (Math.random() - 0.5) * 11,
          (Math.random() - 0.5) * 7,
          -1.5 - Math.random() * 3,
        ],
        scale: 0.35 + Math.random() * 0.75,
        speed: 0.25 + Math.random() * 0.4,
        phase: i * 1.7,
        color: colors[i % 2],
      })),
    [colors],
  );
  const group = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (!group.current) return;
    const t = clock.elapsedTime;
    group.current.children.forEach((child, i) => {
      const s = specs[i];
      child.position.y = s.position[1] + Math.sin(t * s.speed + s.phase) * 0.5;
      child.position.x = s.position[0] + Math.cos(t * s.speed * 0.7 + s.phase) * 0.25;
    });
  });

  return (
    <group ref={group}>
      {specs.map((s, i) => (
        <mesh key={i} position={s.position} scale={s.scale}>
          <sphereGeometry args={[0.8, 32, 32]} />
          <meshStandardMaterial
            color={s.color}
            transparent
            opacity={0.34}
            roughness={0.15}
            metalness={0.1}
          />
        </mesh>
      ))}
    </group>
  );
}

function EnergyShapes() {
  const ico = useRef<THREE.Mesh>(null);
  const torus = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    const t = clock.elapsedTime;
    if (ico.current) {
      ico.current.rotation.x = t * 0.25;
      ico.current.rotation.y = t * 0.35;
      ico.current.position.y = 1 + Math.sin(t * 0.5) * 0.3;
    }
    if (torus.current) {
      torus.current.rotation.x = t * -0.3;
      torus.current.rotation.z = t * 0.2;
      torus.current.position.y = -1.6 + Math.sin(t * 0.4 + 2) * 0.35;
    }
  });

  return (
    <>
      <mesh ref={ico} position={[4.4, 1, -2]} scale={1.7}>
        <icosahedronGeometry args={[1, 1]} />
        <meshBasicMaterial color="#b6f93f" wireframe transparent opacity={0.4} />
      </mesh>
      <mesh ref={torus} position={[-4.8, -1.6, -2.5]} scale={1.3}>
        <torusGeometry args={[1, 0.32, 12, 48]} />
        <meshBasicMaterial color="#ff9568" wireframe transparent opacity={0.32} />
      </mesh>
    </>
  );
}

// Gentle cursor parallax shared by every variant. The canvas itself is
// pointer-events-none, so track the window instead of canvas events.
function PointerRig({ children }: { children: ReactNode }) {
  const group = useRef<THREE.Group>(null);
  const pointer = useRef({ x: 0, y: 0 });

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
    const ease = Math.min(delta * 2.5, 1);
    group.current.rotation.y += (pointer.current.x * 0.16 - group.current.rotation.y) * ease;
    group.current.rotation.x += (pointer.current.y * -0.08 - group.current.rotation.x) * ease;
  });

  return <group ref={group}>{children}</group>;
}

function Variant({ variant }: { variant: AmbientVariant }) {
  switch (variant) {
    case 'embers':
      return (
        <ParticleField
          count={110}
          colors={['#e9ad53', '#e2922b', '#f9e7c8']}
          size={0.17}
          speed={0.5}
          direction={1}
          sway={0.3}
          opacity={0.85}
          additive
        />
      );
    case 'petals':
      return (
        <>
          <ParticleField
            count={34}
            colors={['#c4a8bd', '#dcb35f', '#ddccd8']}
            size={0.32}
            speed={0.32}
            direction={-1}
            sway={0.55}
            opacity={0.5}
          />
          <ParticleField
            count={20}
            colors={['#dcb35f']}
            size={0.12}
            speed={0.22}
            direction={-1}
            sway={0.3}
            opacity={0.4}
          />
        </>
      );
    case 'orbs':
      return (
        <>
          <ambientLight intensity={1.1} />
          <pointLight position={[6, 4, 4]} intensity={40} color="#79bade" />
          <pointLight position={[-6, -2, 4]} intensity={30} color="#71d8ba" />
          <FloatOrbs colors={['#aed6ec', '#a8ead4']} />
          <ParticleField
            count={36}
            colors={['#79bade', '#71d8ba']}
            size={0.13}
            speed={0.3}
            direction={1}
            sway={0.15}
            opacity={0.4}
          />
        </>
      );
    case 'energy':
      return (
        <>
          <EnergyShapes />
          <ParticleField
            count={90}
            colors={['#b6f93f', '#fc6a37', '#ffffff']}
            size={0.13}
            speed={1.5}
            direction={1}
            sway={0.12}
            opacity={0.8}
            additive
          />
        </>
      );
  }
}

export default function AmbientScene({ variant }: { variant: AmbientVariant }) {
  return (
    <Canvas
      aria-hidden
      className="pointer-events-none"
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 8], fov: 45 }}
      gl={{ alpha: true, antialias: true, powerPreference: 'low-power' }}
    >
      <PointerRig>
        <Variant variant={variant} />
      </PointerRig>
    </Canvas>
  );
}
