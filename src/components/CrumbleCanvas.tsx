'use client';

import React, { Component, ReactNode, useCallback, useEffect, useRef, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useReducedMotion } from 'framer-motion';
import * as THREE from 'three';
import { useTheme } from './ThemeProvider';

class ErrorBoundary extends Component<{ children: ReactNode; fallback: ReactNode }, { hasError: boolean }> {
  constructor(props: { children: ReactNode; fallback: ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    return this.state.hasError ? this.props.fallback : this.props.children;
  }
}

function WebGLContextGuard({ onLost, onRestored }: { onLost: () => void; onRestored: () => void }) {
  const { gl } = useThree();

  useEffect(() => {
    const canvas = gl.domElement;
    const handleContextLost = (event: Event) => {
      event.preventDefault();
      onLost();
    };

    canvas.addEventListener('webglcontextlost', handleContextLost, false);
    canvas.addEventListener('webglcontextrestored', onRestored, false);

    return () => {
      canvas.removeEventListener('webglcontextlost', handleContextLost);
      canvas.removeEventListener('webglcontextrestored', onRestored);
    };
  }, [gl, onLost, onRestored]);

  return null;
}

function CelestialTransition({ theme, reducedMotion }: { theme: 'light' | 'dark'; reducedMotion: boolean }) {
  const groupRef = useRef<THREE.Group>(null);
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<THREE.MeshStandardMaterial>(null);
  const progressRef = useRef(0);

  useFrame((state, delta) => {
    const group = groupRef.current;
    const mesh = meshRef.current;
    const material = materialRef.current;
    if (!group || !mesh || !material) return;

    progressRef.current = reducedMotion ? 1 : Math.min(progressRef.current + delta / 1.35, 1);
    const progress = progressRef.current;
    const eased = 1 - Math.pow(1 - progress, 3);
    const enteringFromRight = theme === 'dark';
    const startX = enteringFromRight ? 7 : -7;
    const arc = reducedMotion ? 0 : Math.sin(progress * Math.PI) * 3.5;

    group.position.set(THREE.MathUtils.lerp(startX, 0, eased), arc, 4);
    group.rotation.z = reducedMotion ? 0 : state.clock.elapsedTime * 0.15;
    mesh.rotation.y += reducedMotion ? 0 : delta * 0.35;
    mesh.scale.setScalar(0.85 + Math.sin(progress * Math.PI) * 0.2);
    material.opacity = reducedMotion ? 1 : Math.min(1, progress * 4, (1 - progress) * 4);
  });

  const isSun = theme === 'light';

  return (
    <group ref={groupRef}>
      <pointLight color={isSun ? '#ffd166' : '#9ec5ff'} intensity={isSun ? 5 : 1.2} distance={12} />
      <mesh ref={meshRef}>
        <sphereGeometry args={[isSun ? 1.9 : 1.7, 32, 32]} />
        <meshStandardMaterial
          ref={materialRef}
          color={isSun ? '#ffb703' : '#b8c4d6'}
          emissive={isSun ? '#ff7b00' : '#25324a'}
          emissiveIntensity={isSun ? 1.8 : 0.15}
          roughness={isSun ? 0.25 : 0.9}
          transparent
          depthWrite={false}
        />
      </mesh>
      <mesh scale={isSun ? 1.45 : 1.3}>
        <sphereGeometry args={[isSun ? 1.9 : 1.7, 24, 24]} />
        <meshBasicMaterial color={isSun ? '#ffd166' : '#9ec5ff'} transparent opacity={isSun ? 0.12 : 0.08} depthWrite={false} />
      </mesh>
    </group>
  );
}

export default function CrumbleCanvas() {
  const { theme } = useTheme();
  const reducedMotion = useReducedMotion() ?? false;
  const [transitioning, setTransitioning] = useState(false);
  const [contextLost, setContextLost] = useState(false);
  const previousThemeRef = useRef(theme);
  const handleContextLost = useCallback(() => setContextLost(true), []);
  const handleContextRestored = useCallback(() => setContextLost(false), []);

  useEffect(() => {
    if (previousThemeRef.current === theme) return;

    previousThemeRef.current = theme;
    setContextLost(false);
    setTransitioning(true);
    const timer = window.setTimeout(() => setTransitioning(false), reducedMotion ? 350 : 1500);
    return () => window.clearTimeout(timer);
  }, [reducedMotion, theme]);

  if (!transitioning) return null;

  return (
    <div className={`fixed inset-0 z-20 pointer-events-none transition-opacity duration-200 ${contextLost ? 'opacity-0' : 'opacity-90'}`} aria-hidden="true">
      <ErrorBoundary fallback={null}>
        <Canvas
          camera={{ position: [0, 0, 15], fov: 50 }}
          dpr={[1, 1.5]}
          frameloop={reducedMotion ? 'demand' : 'always'}
          gl={{ alpha: true, antialias: false, powerPreference: 'low-power' }}
          style={{ background: 'transparent' }}
          onCreated={({ gl }) => {
            gl.setClearColor('#000000', 0);
            gl.setClearAlpha(0);
          }}
        >
          <WebGLContextGuard onLost={handleContextLost} onRestored={handleContextRestored} />
          <ambientLight intensity={1.25} />
          <directionalLight position={[10, 10, 10]} intensity={1.5} />
          <CelestialTransition theme={theme} reducedMotion={reducedMotion} />
        </Canvas>
      </ErrorBoundary>
    </div>
  );
}
