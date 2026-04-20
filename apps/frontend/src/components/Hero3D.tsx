/*
 * =====================================================
 * Desenvolvido por: Pedro Uva (Mr. Uva)
 * Full-Stack Engineer & AI Strategist | Estrategista Digital
 * 
 * Website: https://mruva.com.br/
 * LinkedIn: https://www.linkedin.com/in/mruva/
 * 
 * Copyright © 2026 Pedro Uva. Todos os direitos reservados.
 * 
 * Este repositório é público. Se você clonar, fizer fork ou utilizar
 * este código em seus projetos, por favor, mantenha este aviso de
 * créditos intacto no topo de cada arquivo.
 * 
 * Agradeço pelo respeito ao meu trabalho e à minha contribuição
 * para a comunidade open-source.
 * 
 * Excelência desde 1997 • +25 anos de experiência em Full-Stack,
 * Inteligência Artificial e estratégias digitais.
 * =====================================================
 */

/**
 * OMNIVIS Hero 3D - Globo Holográfico Interativo
 * Representa o Grafo de Conexões Ativas do OMNIVIS
 * Vanguarda 2026 - Dossiê Técnico de Engenharia de Front-End
 * Implementado com @react-three/fiber e @react-three/drei
 */

'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sphere, MeshDistortMaterial, Stars, OrbitControls, Icosahedron } from '@react-three/drei';
import { useRef, useMemo } from 'react';
import * as THREE from 'three';

// Componente de Partículas - "Força de Todos" convergindo
function Particles({ count = 2000 }) {
  const mesh = useRef<THREE.Points>(null);
  
  const [positions, colors] = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    
    for (let i = 0; i < count; i++) {
      // Distribuição esférica para simular globo
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      const radius = 5 + Math.random() * 3;
      
      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);
      
      // Cores OMNIVIS Vanguarda 2026 (Neon Cyan)
      const color = new THREE.Color();
      color.setHSL(0.5 + Math.random() * 0.1, 1, 0.6 + Math.random() * 0.4);
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }
    
    return [positions, colors];
  }, [count]);
  
  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.y = state.clock.elapsedTime * 0.05;
      mesh.current.rotation.x = state.clock.elapsedTime * 0.02;
    }
  });
  
  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={count}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        vertexColors
        transparent
        opacity={0.6}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

// Componente de Globo Holográfico
function HolographicGlobe() {
  const mesh = useRef<THREE.Mesh>(null);
  const wireframeRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.y = state.clock.elapsedTime * 0.2;
    }
    if (wireframeRef.current) {
      wireframeRef.current.rotation.y = state.clock.elapsedTime * 0.2;
      wireframeRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
    }
  });
  
  return (
    <Float speed={2} rotationIntensity={0.3} floatIntensity={0.3}>
      <group>
        {/* Globo Principal */}
        <Sphere ref={mesh} args={[3, 64, 64]}>
          <MeshDistortMaterial
            color="#00F2FF"
            attach="material"
            distort={0.2}
            speed={1.5}
            roughness={0.1}
            metalness={0.9}
            transparent
            opacity={0.3}
            wireframe
          />
        </Sphere>
        
        {/* Wireframe Overlay */}
        <Icosahedron ref={wireframeRef} args={[3.1, 2]}>
          <meshBasicMaterial
            color="#00F2FF"
            transparent
            opacity={0.15}
            wireframe
          />
        </Icosahedron>
      </group>
    </Float>
  );
}

// Componente de Conexões (Matches de Apoio)
function Connections() {
  const groupRef = useRef<THREE.Group>(null);
  
  const lines = useMemo(() => {
    const linePositions: number[] = [];
    for (let i = 0; i < 50; i++) {
      const start = new THREE.Vector3(
        (Math.random() - 0.5) * 6,
        (Math.random() - 0.5) * 6,
        (Math.random() - 0.5) * 6
      );
      const end = new THREE.Vector3(
        (Math.random() - 0.5) * 6,
        (Math.random() - 0.5) * 6,
        (Math.random() - 0.5) * 6
      );
      linePositions.push(start.x, start.y, start.z, end.x, end.y, end.z);
    }
    return new Float32Array(linePositions);
  }, []);
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.1;
    }
  });
  
  return (
    <group ref={groupRef}>
      <lineSegments>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={lines.length / 3}
            array={lines}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial
          color="#00F2FF"
          transparent
          opacity={0.3}
          blending={THREE.AdditiveBlending}
        />
      </lineSegments>
    </group>
  );
}

// Componente Principal
interface Hero3DProps {
  className?: string;
}

export default function Hero3D({ className = '' }: Hero3DProps) {
  return (
    <div className={`w-full h-full ${className}`}>
      <Canvas
        camera={{ position: [0, 0, 12], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]}
      >
        {/* Iluminação Neon Cyan */}
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={2} color="#00F2FF" />
        <pointLight position={[-10, -10, -10]} intensity={1} color="#00A8FF" />
        
        {/* Componentes 3D - Globo Holográfico */}
        <Particles count={1500} />
        <HolographicGlobe />
        <Connections />
        <Stars radius={100} depth={50} count={3000} factor={4} saturation={0} fade speed={1} />
        
        {/* Controles de órbita - auto-rotate lento */}
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate={true}
          autoRotateSpeed={0.5}
          maxPolarAngle={Math.PI / 1.5}
          minPolarAngle={Math.PI / 3}
        />
      </Canvas>
    </div>
  );
}
