'use client';

import { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Icosahedron, Torus, TorusKnot } from '@react-three/drei';
import * as THREE from 'three';
import { AudioAnalysisData } from '../../../hooks/useAudioAnalyzer';

// 粒子系統
function ParticleSystem({ 
  count = 300, 
  lowEnergy, 
  midEnergy 
}: { 
  count?: number, 
  lowEnergy: number, 
  midEnergy: number, 
  highEnergy?: number  // 可選參數
}) {
  const meshRef = useRef<THREE.Points>(null);
  const geometryRef = useRef<THREE.BufferGeometry>(null);
  
  // 初始化粒子系統
  useEffect(() => {
    if (!geometryRef.current) return;
    
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const sizes = new Float32Array(count);
    
    for (let i = 0; i < count; i++) {
      // 位置
      const theta = Math.random() * Math.PI * 2;
      const radius = 5 + Math.random() * 10;
      
      positions[i * 3] = radius * Math.sin(theta); // x
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10; // y
      positions[i * 3 + 2] = radius * Math.cos(theta); // z
      
      // 隨機顏色：藍紫色調
      colors[i * 3] = 0.3 + Math.random() * 0.2; // r
      colors[i * 3 + 1] = 0.2 + Math.random() * 0.3; // g
      colors[i * 3 + 2] = 0.8 + Math.random() * 0.2; // b
      
      // 尺寸
      sizes[i] = 0.5 + Math.random();
    }
    
    geometryRef.current.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometryRef.current.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    geometryRef.current.setAttribute('size', new THREE.BufferAttribute(sizes, 1));
  }, [count]);
  
  // 動畫
  useFrame((_state, delta) => {
    if (!meshRef.current || !geometryRef.current) return;
    
    // 確保屬性存在
    if (!geometryRef.current.attributes.position || 
        !geometryRef.current.attributes.size || 
        !geometryRef.current.attributes.position.array || 
        !geometryRef.current.attributes.size.array) {
      return;
    }
    
    // 獲取當前粒子位置
    const positions = geometryRef.current.attributes.position.array as Float32Array;
    const sizes = geometryRef.current.attributes.size.array as Float32Array;
    
    // 更新粒子位置和大小
    for (let i = 0; i < count; i++) {
      // 使用低頻能量擴散粒子
      const spreadFactor = lowEnergy * 2;
      
      // 位置增量
      positions[i * 3] += Math.sin(i) * delta * spreadFactor;
      positions[i * 3 + 1] += Math.cos(i) * delta * spreadFactor;
      positions[i * 3 + 2] += Math.sin(i * 0.1) * delta * spreadFactor;
      
      // 更新尺寸，由中頻控制
      sizes[i] = (0.5 + Math.random()) * (1 + midEnergy * 3);
    }
    
    // 更新幾何體
    geometryRef.current.attributes.position.needsUpdate = true;
    geometryRef.current.attributes.size.needsUpdate = true;
    
    // 旋轉粒子系統
    meshRef.current.rotation.y += delta * 0.05 * (1 + lowEnergy);
  });
  
  return (
    <points ref={meshRef}>
      <bufferGeometry ref={geometryRef} />
      <pointsMaterial 
        size={1.5}
        vertexColors
        transparent
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

// 中央幾何體
function CentralGeometry({ 
  beat, 
  lowEnergy, 
  midEnergy, 
  highEnergy 
}: { 
  beat: boolean, 
  lowEnergy: number, 
  midEnergy: number, 
  highEnergy: number 
}) {
  const icosaRef = useRef<THREE.Mesh>(null);
  const torusRef = useRef<THREE.Mesh>(null);
  const knotRef = useRef<THREE.Mesh>(null);
  
  // 動畫
  useFrame((_state, delta) => {
    if (!icosaRef.current || !torusRef.current || !knotRef.current) return;
    
    // 節拍觸發動畫
    if (beat) {
      icosaRef.current.scale.set(
        1 + highEnergy * 0.5,
        1 + highEnergy * 0.5,
        1 + highEnergy * 0.5
      );
    } else {
      // 緩慢恢復原大小
      icosaRef.current.scale.x = THREE.MathUtils.lerp(icosaRef.current.scale.x, 1, delta * 2);
      icosaRef.current.scale.y = THREE.MathUtils.lerp(icosaRef.current.scale.y, 1, delta * 2);
      icosaRef.current.scale.z = THREE.MathUtils.lerp(icosaRef.current.scale.z, 1, delta * 2);
    }
    
    // 旋轉
    icosaRef.current.rotation.x += delta * 0.2 * (1 + midEnergy);
    icosaRef.current.rotation.y += delta * 0.3 * (1 + midEnergy);
    
    torusRef.current.rotation.x += delta * 0.3 * (1 + lowEnergy);
    torusRef.current.rotation.y += delta * 0.2 * (1 + lowEnergy);
    
    knotRef.current.rotation.x -= delta * 0.2 * (1 + highEnergy);
    knotRef.current.rotation.z -= delta * 0.3 * (1 + highEnergy);
  });
  
  return (
    <group>
      <Icosahedron ref={icosaRef} args={[1, 1]} position={[0, 0, 0]}>
        <meshBasicMaterial 
          wireframe 
          color="#8b5cf6"
        />
      </Icosahedron>
      
      <Torus ref={torusRef} args={[2, 0.2, 16, 50]} position={[0, 0, 0]}>
        <meshBasicMaterial 
          wireframe 
          color="#6366f1"
        />
      </Torus>
      
      <TorusKnot ref={knotRef} args={[1.5, 0.1, 128, 32]} position={[0, 0, 0]}>
        <meshBasicMaterial 
          wireframe 
          color="#3b82f6"
        />
      </TorusKnot>
    </group>
  );
}

// 場景容器
function Scene({ analysisData }: { analysisData: AudioAnalysisData }) {
  // 添加數據驗證，確保所有必要的屬性都存在
  const validData = analysisData && 
    typeof analysisData.lowEnergy === 'number' && 
    typeof analysisData.midEnergy === 'number' && 
    typeof analysisData.highEnergy === 'number' && 
    typeof analysisData.beat === 'boolean' &&
    analysisData.frequencyData instanceof Uint8Array;
  
  // 如果數據無效，提供默認值
  const safeData = validData ? analysisData : {
    lowEnergy: 0,
    midEnergy: 0,
    highEnergy: 0,
    beat: false,
    frequencyData: new Uint8Array(1024).fill(0)
  };
  
  return (
    <>
      <ambientLight intensity={0.5} />
      <ParticleSystem 
        count={300}
        lowEnergy={safeData.lowEnergy}
        midEnergy={safeData.midEnergy}
      />
      <CentralGeometry 
        beat={safeData.beat}
        lowEnergy={safeData.lowEnergy}
        midEnergy={safeData.midEnergy}
        highEnergy={safeData.highEnergy}
      />
      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
    </>
  );
}

// 抽象幾何可視化主題
export default function AbstractGeometry({ analysisData }: { analysisData: AudioAnalysisData }) {
  return (
    <Canvas 
      className="w-full h-full"
      camera={{ position: [0, 0, 15], fov: 60 }}
      style={{
        background: 'radial-gradient(circle at center, #1e1b4b 0%, #030712 100%)'
      }}
    >
      <Scene analysisData={analysisData} />
    </Canvas>
  );
} 