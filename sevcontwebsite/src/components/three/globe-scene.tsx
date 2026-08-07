"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Line, Sphere, Stars } from "@react-three/drei";
import * as THREE from "three";
import { siteConfig } from "@/lib/site";
import { latLngToVector3, quadraticBezier, arcControlPoint } from "./geo";

const RADIUS = 2;

const ROUTES: [number, number][] = [
  [0, 1],
  [1, 2],
  [1, 3],
  [3, 4],
  [1, 5],
  [3, 6],
  [2, 7],
];

function GlobeCore() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.08;
    }
  });

  const markers = useMemo(
    () =>
      siteConfig.markets.map((m) => ({
        ...m,
        position: latLngToVector3(m.lat, m.lng, RADIUS * 1.01),
      })),
    []
  );

  const arcs = useMemo(
    () =>
      ROUTES.map(([a, b]) => {
        const p0 = markers[a].position;
        const p2 = markers[b].position;
        const control = arcControlPoint(p0, p2, RADIUS, 1.35);
        const points = Array.from({ length: 48 }, (_, i) =>
          quadraticBezier(p0, control, p2, i / 47)
        );
        return { points, p0, control, p2 };
      }),
    [markers]
  );

  return (
    <group ref={groupRef}>
      <Sphere args={[RADIUS, 64, 64]}>
        <meshStandardMaterial
          color="#0a1930"
          roughness={0.7}
          metalness={0.15}
          emissive="#071426"
          emissiveIntensity={0.4}
        />
      </Sphere>

      <Sphere args={[RADIUS * 1.001, 32, 32]}>
        <meshBasicMaterial color="#35597e" wireframe transparent opacity={0.12} />
      </Sphere>

      {arcs.map((arc, i) => (
        <Line
          key={i}
          points={arc.points}
          color="#d4af37"
          lineWidth={1.1}
          transparent
          opacity={0.55}
        />
      ))}

      {arcs.map((arc, i) => (
        <ArcParticle key={i} points={arc.points} offset={i * 0.13} />
      ))}

      {markers.map((m) => (
        <Marker key={m.code} position={m.position} live={m.live} />
      ))}
    </group>
  );
}

function ArcParticle({ points, offset }: { points: THREE.Vector3[]; offset: number }) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (!ref.current) return;
    const t = (clock.elapsedTime * 0.15 + offset) % 1;
    const idx = Math.min(points.length - 1, Math.floor(t * points.length));
    const p = points[idx];
    ref.current.position.copy(p);
  });

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[0.02, 8, 8]} />
      <meshBasicMaterial color="#eeda98" />
    </mesh>
  );
}

function Marker({ position, live }: { position: THREE.Vector3; live: boolean }) {
  const ringRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (!ringRef.current) return;
    const t = (clock.elapsedTime % 2) / 2;
    const scale = 1 + t * 2.2;
    ringRef.current.scale.setScalar(scale);
    const material = ringRef.current.material as THREE.MeshBasicMaterial;
    material.opacity = Math.max(0, 0.6 * (1 - t));
  });

  return (
    <group position={position}>
      <mesh>
        <sphereGeometry args={[0.03, 12, 12]} />
        <meshBasicMaterial color={live ? "#d4af37" : "#6b85a3"} />
      </mesh>
      {live && (
        <mesh ref={ringRef} rotation={[Math.PI / 2, 0, 0]}>
          <ringGeometry args={[0.04, 0.05, 24]} />
          <meshBasicMaterial
            color="#d4af37"
            transparent
            opacity={0.6}
            side={THREE.DoubleSide}
            depthWrite={false}
          />
        </mesh>
      )}
    </group>
  );
}

export function GlobeScene() {
  return (
    <>
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 3, 5]} intensity={1.2} color="#e2c665" />
      <pointLight position={[-5, -2, -5]} intensity={0.4} color="#35597e" />
      <Stars radius={60} depth={30} count={1800} factor={2.4} fade speed={0.6} />
      <GlobeCore />
    </>
  );
}
