'use client';

import { useRef, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { PerspectiveCamera, Line, Box, Torus } from '@react-three/drei';
import * as THREE from 'three';
import { AudioAnalysisData } from '../../../hooks/useAudioAnalyzer';

// 霓虹網格
function NeonGrid({ 
  lowEnergy, 
  beat 
}: { 
  lowEnergy: number, 
  beat: boolean 
}) {
  const linesRef = useRef<THREE.Group>(null);
  const { size } = useThree();
  
  // 創建網格線
  const gridSize = 20;
  const gridDivisions = 20;
  const stepSize = gridSize / gridDivisions;
  
  const horizontalLines = [];
  const verticalLines = [];
  
  for (let i = 0; i <= gridDivisions; i++) {
    const pos = -gridSize / 2 + i * stepSize;
    
    // 水平線
    const hPoints = [];
    hPoints.push(new THREE.Vector3(-gridSize / 2, 0, pos));
    hPoints.push(new THREE.Vector3(gridSize / 2, 0, pos));
    horizontalLines.push(hPoints);
    
    // 垂直線
    const vPoints = [];
    vPoints.push(new THREE.Vector3(pos, 0, -gridSize / 2));
    vPoints.push(new THREE.Vector3(pos, 0, gridSize / 2));
    verticalLines.push(vPoints);
  }
  
  // 動畫
  useFrame((_state, delta) => {
    if (!linesRef.current) return;
    
    // 節拍時脈衝效果
    if (beat) {
      linesRef.current.scale.set(1.05, 1, 1.05);
    } else {
      linesRef.current.scale.x = THREE.MathUtils.lerp(linesRef.current.scale.x, 1, delta * 2);
      linesRef.current.scale.z = THREE.MathUtils.lerp(linesRef.current.scale.z, 1, delta * 2);
    }
    
    // 隨著低頻脈動
    linesRef.current.position.y = -5 - lowEnergy * 2;
  });
  
  return (
    <group ref={linesRef} rotation={[Math.PI / 2, 0, 0]}>
      {/* 水平線 */}
      {horizontalLines.map((points, idx) => (
        <Line
          key={`h-${idx}`}
          points={points}
          color="#FF00FF"
          lineWidth={1}
          transparent
          opacity={0.6}
        />
      ))}
      
      {/* 垂直線 */}
      {verticalLines.map((points, idx) => (
        <Line
          key={`v-${idx}`}
          points={points}
          color="#00FFFF"
          lineWidth={1}
          transparent
          opacity={0.6}
        />
      ))}
    </group>
  );
}

// 霓虹建築
function NeonBuildings({
  frequencyData,
  highEnergy
}: {
  frequencyData: Uint8Array,
  highEnergy: number
}) {
  const buildingsRef = useRef<THREE.Group>(null);
  
  // 動畫
  useFrame((_state, delta) => {
    if (!buildingsRef.current) return;
    
    // 旋轉
    buildingsRef.current.rotation.y += delta * 0.1;
  });
  
  // 取樣頻譜數據
  const sampleCount = 32;
  const sampleData = [];
  
  for (let i = 0; i < sampleCount; i++) {
    const index = Math.floor(i * (frequencyData.length / sampleCount));
    const value = frequencyData[index] / 255;
    sampleData.push(value);
  }
  
  return (
    <group ref={buildingsRef} position={[0, -5, 0]}>
      {sampleData.map((value, idx) => {
        const angle = (idx / sampleCount) * Math.PI * 2;
        const radius = 10;
        const x = Math.cos(angle) * radius;
        const z = Math.sin(angle) * radius;
        
        // 建築高度由頻譜數據決定
        const height = 0.5 + value * 8 + highEnergy * 3;
        
        // 交替顏色
        const color = idx % 2 === 0 ? "#FF00FF" : "#00FFFF";
        
        return (
          <Box 
            key={idx}
            args={[0.8, height, 0.8]} 
            position={[x, height / 2, z]}
          >
            <meshBasicMaterial 
              color={color} 
              transparent 
              opacity={0.7}
              wireframe={idx % 3 === 0}
            />
          </Box>
        );
      })}
    </group>
  );
}

// 霓虹光環
function NeonHalos({ 
  midEnergy, 
  beat 
}: { 
  midEnergy: number, 
  beat: boolean 
}) {
  const halosRef = useRef<THREE.Group>(null);
  
  // 動畫
  useFrame((_state, delta) => {
    if (!halosRef.current) return;
    
    // 每個子元素旋轉
    halosRef.current.children.forEach((child, idx) => {
      const mesh = child as THREE.Mesh;
      const rotSpeed = (idx + 1) * 0.1 * (1 + midEnergy);
      
      mesh.rotation.x += delta * rotSpeed;
      mesh.rotation.y += delta * rotSpeed * 0.7;
      
      // 節拍反應
      if (beat) {
        mesh.scale.set(1.1, 1.1, 1.1);
      } else {
        mesh.scale.x = THREE.MathUtils.lerp(mesh.scale.x, 1, delta * 2);
        mesh.scale.y = THREE.MathUtils.lerp(mesh.scale.y, 1, delta * 2);
        mesh.scale.z = THREE.MathUtils.lerp(mesh.scale.z, 1, delta * 2);
      }
    });
  });
  
  // 生成不同大小的環
  const halos = [];
  const count = 5;
  
  for (let i = 0; i < count; i++) {
    const radius = 2 + i * 1.5;
    const tubeRadius = 0.03 + i * 0.01;
    
    halos.push(
      <Torus 
        key={i}
        args={[radius, tubeRadius, 16, 100]}
        rotation={[Math.random() * Math.PI, Math.random() * Math.PI, 0]}
      >
        <meshBasicMaterial 
          color={i % 2 === 0 ? "#FF00FF" : "#00FFFF"} 
          transparent
          opacity={0.8}
        />
      </Torus>
    );
  }
  
  return (
    <group ref={halosRef} position={[0, 0, 0]}>
      {halos}
    </group>
  );
}

// 場景容器
function Scene({ analysisData }: { analysisData: AudioAnalysisData }) {
  const cameraRef = useRef<THREE.PerspectiveCamera>(null);
  
  // 相機動畫
  useFrame((_state, delta) => {
    if (!cameraRef.current) return;
    
    // 隨著中頻調整相機視角
    cameraRef.current.position.y = 5 + analysisData.midEnergy * 3;
    
    // 緩慢晃動
    cameraRef.current.position.x = Math.sin(Date.now() * 0.0005) * 2;
    cameraRef.current.position.z = 15 + Math.sin(Date.now() * 0.0003) * 3;
  });
  
  return (
    <>
      <PerspectiveCamera
        ref={cameraRef}
        makeDefault
        position={[0, 5, 15]}
        fov={60}
      />
      
      <hemisphereLight args={["#FFFFFF", "#000000", 1]} />
      
      <fog attach="fog" args={["#000000", 10, 50]} />
      
      <NeonGrid 
        lowEnergy={analysisData.lowEnergy}
        beat={analysisData.beat}
      />
      
      <NeonBuildings 
        frequencyData={analysisData.frequencyData}
        highEnergy={analysisData.highEnergy}
      />
      
      <NeonHalos 
        midEnergy={analysisData.midEnergy}
        beat={analysisData.beat}
      />
    </>
  );
}

// 賽博朋克霓虹可視化主題
export default function CyberpunkNeon({ analysisData }: { analysisData: AudioAnalysisData }) {
  return (
    <Canvas 
      className="w-full h-full"
      style={{
        background: 'linear-gradient(to bottom, #000000 0%, #1a0033 100%)'
      }}
    >
      <Scene analysisData={analysisData} />
    </Canvas>
  );
} 