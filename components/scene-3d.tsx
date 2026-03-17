"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  Float,
  MeshDistortMaterial,
  MeshWobbleMaterial,
  Sphere,
  Torus,
  Box,
  Icosahedron,
  Octahedron,
  Dodecahedron,
  TorusKnot,
  Environment,
  Stars,
  Trail,
  Sparkles,
} from "@react-three/drei";
import { useRef, useMemo, useState } from "react";
import * as THREE from "three";

// Central animated sphere with distortion
function CentralSphere() {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.1;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.15;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.5}>
      <Sphere
        ref={meshRef}
        args={[2, 128, 128]}
        position={[0, 0, 0]}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <MeshDistortMaterial
          color={hovered ? "#a855f7" : "#7c3aed"}
          roughness={0.1}
          metalness={0.9}
          distort={hovered ? 0.6 : 0.35}
          speed={hovered ? 4 : 2}
          envMapIntensity={1}
        />
      </Sphere>
    </Float>
  );
}

// Orbiting geometric shapes
function OrbitingShapes() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.15;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
    }
  });

  const shapes = useMemo(() => [
    { Component: Icosahedron, args: [0.4, 0], position: [4, 0, 0], color: "#8b5cf6", speed: 1 },
    { Component: Octahedron, args: [0.5, 0], position: [-4, 0.5, 1], color: "#a855f7", speed: 1.2 },
    { Component: Dodecahedron, args: [0.35, 0], position: [0, 3.5, -2], color: "#c084fc", speed: 0.8 },
    { Component: Box, args: [0.6, 0.6, 0.6], position: [2, -3, 2], color: "#d946ef", speed: 1.5 },
    { Component: Torus, args: [0.5, 0.2, 32, 64], position: [-3, -2, -2], color: "#e879f9", speed: 0.9 },
  ], []);

  return (
    <group ref={groupRef}>
      {shapes.map((shape, index) => (
        <Float
          key={index}
          speed={shape.speed}
          rotationIntensity={1.5}
          floatIntensity={1}
        >
          <shape.Component args={shape.args as never} position={shape.position as [number, number, number]}>
            <meshStandardMaterial
              color={shape.color}
              roughness={0.2}
              metalness={0.8}
              emissive={shape.color}
              emissiveIntensity={0.15}
            />
          </shape.Component>
        </Float>
      ))}
    </group>
  );
}

// Animated torus knot
function AnimatedTorusKnot() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.5;
    }
  });

  return (
    <Trail
      width={2}
      length={6}
      color="#8b5cf6"
      attenuation={(t) => t * t}
    >
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.3}>
        <TorusKnot
          ref={meshRef}
          args={[0.8, 0.25, 128, 32]}
          position={[5, 2, -4]}
        >
          <MeshWobbleMaterial
            color="#a855f7"
            factor={0.3}
            speed={2}
            roughness={0.1}
            metalness={0.9}
          />
        </TorusKnot>
      </Float>
    </Trail>
  );
}

// Floating rings
function FloatingRings() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.z = state.clock.elapsedTime * 0.05;
    }
  });

  return (
    <group ref={groupRef}>
      {[3.5, 4.5, 5.5].map((radius, i) => (
        <Torus
          key={i}
          args={[radius, 0.02, 16, 100]}
          rotation={[Math.PI / 2 + i * 0.2, i * 0.3, 0]}
          position={[0, 0, -2]}
        >
          <meshStandardMaterial
            color="#7c3aed"
            transparent
            opacity={0.4 - i * 0.1}
            emissive="#7c3aed"
            emissiveIntensity={0.5}
          />
        </Torus>
      ))}
    </group>
  );
}

// Enhanced particles system
function ParticleField() {
  const count = 500;
  const particlesRef = useRef<THREE.Points>(null);

  const [positions, sizes] = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const sizes = new Float32Array(count);

    for (let i = 0; i < count; i++) {
      const radius = 15 + Math.random() * 20;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI;

      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);

      sizes[i] = Math.random() * 0.5 + 0.1;
    }

    return [positions, sizes];
  }, []);

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.02;
      particlesRef.current.rotation.x = state.clock.elapsedTime * 0.01;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-size" args={[sizes, 1]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.08}
        color="#a855f7"
        transparent
        opacity={0.6}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

// Mouse-following light
function MouseLight() {
  const lightRef = useRef<THREE.PointLight>(null);
  const { viewport } = useThree();

  useFrame((state) => {
    if (lightRef.current) {
      lightRef.current.position.x = (state.pointer.x * viewport.width) / 2;
      lightRef.current.position.y = (state.pointer.y * viewport.height) / 2;
    }
  });

  return (
    <pointLight
      ref={lightRef}
      position={[0, 0, 5]}
      intensity={2}
      color="#c084fc"
      distance={15}
    />
  );
}

// Glowing background orbs
function GlowingOrbs() {
  const orbsRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (orbsRef.current) {
      orbsRef.current.children.forEach((child, i) => {
        child.position.y += Math.sin(state.clock.elapsedTime + i) * 0.002;
      });
    }
  });

  const orbs = useMemo(() => [
    { position: [-8, 5, -10], color: "#7c3aed", scale: 2 },
    { position: [10, -3, -15], color: "#a855f7", scale: 3 },
    { position: [-5, -8, -12], color: "#c084fc", scale: 1.5 },
    { position: [8, 8, -20], color: "#8b5cf6", scale: 2.5 },
  ], []);

  return (
    <group ref={orbsRef}>
      {orbs.map((orb, i) => (
        <Sphere key={i} args={[orb.scale, 32, 32]} position={orb.position as [number, number, number]}>
          <meshBasicMaterial color={orb.color} transparent opacity={0.15} />
        </Sphere>
      ))}
    </group>
  );
}

export function Scene3D() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 12], fov: 50 }}
        gl={{ antialias: true, alpha: false }}
        dpr={[1, 2]}
      >
        {/* Background */}
        <color attach="background" args={["#030014"]} />
        <fog attach="fog" args={["#030014", 10, 40]} />

        {/* Stars background */}
        <Stars
          radius={50}
          depth={50}
          count={2000}
          factor={4}
          saturation={0.5}
          fade
          speed={0.5}
        />

        {/* Sparkles for magical effect */}
        <Sparkles
          count={100}
          scale={15}
          size={2}
          speed={0.3}
          color="#a855f7"
        />

        {/* Lighting */}
        <ambientLight intensity={0.15} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#7c3aed" />
        <pointLight position={[-10, -10, -10]} intensity={1} color="#a855f7" />
        <pointLight position={[0, 10, -10]} intensity={0.8} color="#c084fc" />
        <spotLight
          position={[0, 15, 0]}
          intensity={1}
          color="#8b5cf6"
          angle={0.4}
          penumbra={1}
          castShadow
        />
        <MouseLight />

        {/* 3D Elements */}
        <CentralSphere />
        <OrbitingShapes />
        <AnimatedTorusKnot />
        <FloatingRings />
        <ParticleField />
        <GlowingOrbs />

        {/* Environment for reflections */}
        <Environment preset="night" />
      </Canvas>
    </div>
  );
}
