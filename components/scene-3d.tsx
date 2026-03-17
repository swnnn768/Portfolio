"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sphere, Torus, Box, Environment } from "@react-three/drei";
import { useRef, useMemo } from "react";
import * as THREE from "three";

function FloatingShapes() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.05;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Main sphere with distortion */}
      <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
        <Sphere args={[1.5, 64, 64]} position={[0, 0, 0]}>
          <MeshDistortMaterial
            color="#8b5cf6"
            roughness={0.1}
            metalness={0.8}
            distort={0.4}
            speed={2}
          />
        </Sphere>
      </Float>

      {/* Floating torus */}
      <Float speed={1.5} rotationIntensity={1} floatIntensity={0.8}>
        <Torus args={[0.8, 0.2, 32, 64]} position={[3, 1, -2]} rotation={[Math.PI / 4, 0, 0]}>
          <meshStandardMaterial color="#a855f7" roughness={0.2} metalness={0.9} />
        </Torus>
      </Float>

      {/* Small floating boxes */}
      <Float speed={2.5} rotationIntensity={2} floatIntensity={1.2}>
        <Box args={[0.5, 0.5, 0.5]} position={[-3, -1, -1]} rotation={[0.5, 0.5, 0]}>
          <meshStandardMaterial color="#c084fc" roughness={0.3} metalness={0.7} />
        </Box>
      </Float>

      <Float speed={1.8} rotationIntensity={1.5} floatIntensity={0.6}>
        <Box args={[0.3, 0.3, 0.3]} position={[2.5, -1.5, 1]} rotation={[0.3, 0.8, 0.2]}>
          <meshStandardMaterial color="#e879f9" roughness={0.2} metalness={0.8} />
        </Box>
      </Float>

      {/* Additional decorative spheres */}
      <Float speed={3} rotationIntensity={0.3} floatIntensity={1.5}>
        <Sphere args={[0.2, 32, 32]} position={[-2, 2, -3]}>
          <meshStandardMaterial color="#f0abfc" roughness={0.4} metalness={0.6} emissive="#8b5cf6" emissiveIntensity={0.3} />
        </Sphere>
      </Float>

      <Float speed={2.2} rotationIntensity={0.4} floatIntensity={1}>
        <Sphere args={[0.15, 32, 32]} position={[3.5, 0, 0]}>
          <meshStandardMaterial color="#d946ef" roughness={0.3} metalness={0.7} emissive="#a855f7" emissiveIntensity={0.4} />
        </Sphere>
      </Float>
    </group>
  );
}

function Particles() {
  const count = 200;
  const particlesRef = useRef<THREE.Points>(null);

  const [positions, colors] = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20;

      const color = new THREE.Color();
      color.setHSL(0.75 + Math.random() * 0.1, 0.8, 0.6);
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }

    return [positions, colors];
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
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.05} vertexColors transparent opacity={0.8} sizeAttenuation />
    </points>
  );
}

export function Scene3D() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        <color attach="background" args={["#050505"]} />
        <fog attach="fog" args={["#050505", 5, 25]} />
        
        <ambientLight intensity={0.2} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#8b5cf6" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#a855f7" />
        <spotLight position={[0, 10, 0]} intensity={0.8} color="#c084fc" angle={0.3} penumbra={1} />
        
        <FloatingShapes />
        <Particles />
        
        <Environment preset="night" />
      </Canvas>
    </div>
  );
}
