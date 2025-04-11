'use client';

import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { PerspectiveCamera, Grid, Box, Text } from '@react-three/drei';
import * as THREE from 'three';
import { AudioAnalysisData } from '../../../hooks/useAudioAnalyzer';

// 太陽效果
function RetroSun({ beat, highEnergy }: { beat: boolean, highEnergy: number }) {
  const sunRef = useRef<THREE.Mesh>(null);
  
  useFrame((_state, delta) => {
    if (!sunRef.current) return;
    
    // 節拍時脈動
    if (beat) {
      sunRef.current.scale.set(1.1, 1.1, 1.1);
    } else {
      sunRef.current.scale.x = THREE.MathUtils.lerp(sunRef.current.scale.x, 1, delta * 2);
      sunRef.current.scale.y = THREE.MathUtils.lerp(sunRef.current.scale.y, 1, delta * 2);
      sunRef.current.scale.z = THREE.MathUtils.lerp(sunRef.current.scale.z, 1, delta * 2);
    }
  });
  
  return (
    <mesh ref={sunRef} position={[0, 5, -30]}>
      <circleGeometry args={[8, 64]} />
      <meshBasicMaterial 
        color={new THREE.Color('#ff2975')} 
        transparent
        opacity={0.9}
      />
    </mesh>
  );
}

// 山脈效果
function Mountains({ frequencyData }: { frequencyData: Uint8Array }) {
  const mountainsRef = useRef<THREE.Group>(null);
  
  // 取樣頻譜數據
  const sampleCount = 128;
  const sampleData = [];
  
  for (let i = 0; i < sampleCount; i++) {
    const index = Math.floor(i * (frequencyData.length / sampleCount));
    const value = frequencyData[index] / 255;
    sampleData.push(value);
  }
  
  return (
    <group ref={mountainsRef} position={[0, -1, -20]}>
      {/* 遠處山脈 - 藍色 */}
      <group position={[0, 0, -15]}>
        {sampleData.slice(0, 64).map((value, idx) => {
          const width = 0.8;
          const x = (idx - 32) * width;
          const height = value * 3 + 1;
          
          return (
            <Box 
              key={`far-${idx}`}
              args={[width, height, 0.1]} 
              position={[x, height / 2, 0]}
            >
              <meshBasicMaterial 
                color="#4361EE" 
                transparent 
                opacity={0.9}
              />
            </Box>
          );
        })}
      </group>
      
      {/* 中間山脈 - 紫色 */}
      <group position={[0, 0, -5]}>
        {sampleData.slice(64, 128).map((value, idx) => {
          const width = 0.8;
          const x = (idx - 32) * width;
          const height = value * 5 + 0.5;
          
          return (
            <Box 
              key={`mid-${idx}`}
              args={[width, height, 0.1]} 
              position={[x, height / 2, 0]}
            >
              <meshBasicMaterial 
                color="#9f43ee" 
                transparent 
                opacity={0.9}
              />
            </Box>
          );
        })}
      </group>
    </group>
  );
}

// 網格地面
function RetroPlatform({ lowEnergy }: { lowEnergy: number }) {
  const platformRef = useRef<THREE.Group>(null);
  
  useFrame((_state, delta) => {
    if (!platformRef.current) return;
    
    // 地面隨低頻上下移動
    platformRef.current.position.y = -1.5 - lowEnergy * 1.5;
  });
  
  return (
    <group ref={platformRef}>
      <Grid 
        position={[0, -0.01, 0]} 
        args={[50, 50]} 
        cellSize={1} 
        cellThickness={1} 
        cellColor="#ff2975" 
        sectionSize={3} 
        sectionThickness={1.5} 
        sectionColor="#4CC9F0" 
        fadeDistance={50} 
        infiniteGrid 
        fadeStrength={1} 
      />
    </group>
  );
}

// 復古文字
function RetroText({ beat }: { beat: boolean }) {
  const textRef = useRef<THREE.Group>(null);
  
  useFrame((_state, delta) => {
    if (!textRef.current) return;
    
    // 節拍時閃爍
    if (beat) {
      textRef.current.visible = !textRef.current.visible;
    }
  });
  
  return (
    <group ref={textRef} position={[0, 5, -20]}>
      <Text
        fontSize={3}
        color="#ff2975"
        font="/fonts/VCR_OSD_MONO.ttf"
        anchorX="center"
        anchorY="middle"
      >
        PULSE
      </Text>
    </group>
  );
}

// 場景容器
function Scene({ analysisData }: { analysisData: AudioAnalysisData }) {
  const cameraRef = useRef<THREE.PerspectiveCamera>(null);
  
  useFrame((_state, delta) => {
    if (!cameraRef.current) return;
    
    // 相機緩慢移動
    cameraRef.current.position.y = 1 + Math.sin(Date.now() * 0.001) * 0.5;
    cameraRef.current.position.x = Math.sin(Date.now() * 0.0003) * 2;
  });
  
  return (
    <>
      <PerspectiveCamera
        ref={cameraRef}
        makeDefault
        position={[0, 1, 5]}
        fov={70}
      />
      
      <color attach="background" args={['#0d0221']} />
      <fog attach="fog" args={['#0d0221', 5, 50]} />
      
      <RetroSun 
        beat={analysisData.beat} 
        highEnergy={analysisData.highEnergy} 
      />
      
      <Mountains 
        frequencyData={analysisData.frequencyData} 
      />
      
      <RetroPlatform 
        lowEnergy={analysisData.lowEnergy} 
      />
      
      <RetroText 
        beat={analysisData.beat} 
      />
    </>
  );
}

// 復古波浪可視化主題
export default function RetroWave({ analysisData }: { analysisData: AudioAnalysisData }) {
  return (
    <Canvas className="w-full h-full">
      <Scene analysisData={analysisData} />
    </Canvas>
  );
} 