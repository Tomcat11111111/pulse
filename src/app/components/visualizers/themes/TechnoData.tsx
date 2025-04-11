'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { PerspectiveCamera, Line, Text, Environment } from '@react-three/drei';
import * as THREE from 'three';
import { AudioAnalysisData } from '../../../hooks/useAudioAnalyzer';

// 波形視覺化
function Waveform({ 
  timeData, 
  color = '#00ff88',
  position = [0, 0, 0],
  scale = [1, 1, 1]
}: { 
  timeData: Uint8Array,
  color?: string,
  position?: [number, number, number],
  scale?: [number, number, number]
}) {
  const lineRef = useRef<THREE.Group>(null);
  
  // 創建波形線的點
  const points = useMemo(() => {
    const sampleCount = Math.min(timeData.length, 128);
    const pts = [];
    
    for (let i = 0; i < sampleCount; i++) {
      const x = (i / sampleCount) * 10 - 5;
      // 歸一化數據到 -1 至 1
      const y = ((timeData[i] / 255) * 2 - 1) * 0.5;
      pts.push(new THREE.Vector3(x, y, 0));
    }
    
    return pts;
  }, [timeData]);
  
  return (
    <group ref={lineRef} position={new THREE.Vector3(...position)} scale={scale}>
      <Line
        points={points}
        color={color}
        lineWidth={2}
      />
    </group>
  );
}

// 頻譜視覺化
function FrequencyBars({ 
  frequencyData,
  midEnergy,
  highEnergy,
  position = [0, 0, 0],
  height = 3,
  width = 10,
  barCount = 64
}: { 
  frequencyData: Uint8Array,
  midEnergy: number,
  highEnergy: number,
  position?: [number, number, number],
  height?: number,
  width?: number,
  barCount?: number
}) {
  const barsRef = useRef<THREE.Group>(null);
  
  // 計算採樣間隔
  const sampleStep = Math.floor(frequencyData.length / barCount);
  
  // 創建頻譜條
  const bars = useMemo(() => {
    const elements = [];
    const barWidth = width / barCount;
    
    for (let i = 0; i < barCount; i++) {
      const x = (i / barCount) * width - width / 2;
      
      // 採樣頻譜數據
      const index = i * sampleStep;
      const value = frequencyData[index] / 255;
      
      // 根據頻率位置選擇顏色
      let color;
      if (i < barCount * 0.33) {
        color = new THREE.Color('#00ffaa');
      } else if (i < barCount * 0.66) {
        color = new THREE.Color('#00aaff');
      } else {
        color = new THREE.Color('#aa00ff');
      }
      
      // 計算條高
      const barHeight = value * height;
      
      elements.push(
        <mesh key={i} position={[x, barHeight / 2, 0]}>
          <boxGeometry args={[barWidth * 0.8, barHeight || 0.05, 0.1]} />
          <meshBasicMaterial color={color} transparent opacity={0.8} />
        </mesh>
      );
    }
    
    return elements;
  }, [frequencyData, barCount, width, height, sampleStep]);
  
  // 動畫
  useFrame((_state, delta) => {
    if (!barsRef.current) return;
    
    // 根據中高頻能量旋轉
    barsRef.current.rotation.z = Math.sin(Date.now() * 0.001) * 0.1 * midEnergy;
    barsRef.current.rotation.x = Math.sin(Date.now() * 0.0005) * 0.05 * highEnergy;
  });
  
  return (
    <group ref={barsRef} position={new THREE.Vector3(...position)}>
      {bars}
    </group>
  );
}

// 資料圓環
function DataCircle({ 
  frequencyData, 
  lowEnergy,
  beat 
}: { 
  frequencyData: Uint8Array,
  lowEnergy: number,
  beat: boolean
}) {
  const circleRef = useRef<THREE.Group>(null);
  
  // 創建圓環上的數據點
  const dataPoints = useMemo(() => {
    const count = 128;
    const points = [];
    
    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2;
      const sampledIndex = Math.floor(i * (frequencyData.length / count));
      const value = frequencyData[sampledIndex] / 255;
      
      // 基本半徑加上頻譜數據
      const radius = 4 + value * 1.5;
      
      const x = Math.cos(angle) * radius;
      const y = Math.sin(angle) * radius;
      
      points.push(new THREE.Vector3(x, y, 0));
    }
    
    // 閉合路徑
    points.push(points[0].clone());
    
    return points;
  }, [frequencyData]);
  
  // 動畫
  useFrame((_state, delta) => {
    if (!circleRef.current) return;
    
    // 旋轉
    circleRef.current.rotation.z += delta * 0.1;
    
    // 節拍時脈衝
    if (beat) {
      circleRef.current.scale.set(1.05, 1.05, 1.05);
    } else {
      circleRef.current.scale.x = THREE.MathUtils.lerp(circleRef.current.scale.x, 1, delta * 3);
      circleRef.current.scale.y = THREE.MathUtils.lerp(circleRef.current.scale.y, 1, delta * 3);
      circleRef.current.scale.z = THREE.MathUtils.lerp(circleRef.current.scale.z, 1, delta * 3);
    }
  });
  
  return (
    <group ref={circleRef}>
      <Line
        points={dataPoints}
        color="#00ffaa"
        lineWidth={3}
      />
    </group>
  );
}

// 資料指標
function DataMetrics({ 
  analysisData,
  position = [0, 4, 0] 
}: { 
  analysisData: AudioAnalysisData,
  position?: [number, number, number]
}) {
  return (
    <group position={new THREE.Vector3(...position)}>
      <Text
        position={[0, 0, 0]}
        fontSize={0.3}
        color="#00ffaa"
        anchorX="center"
        anchorY="middle"
      >
        {`PULSE DATA ANALYZER`}
      </Text>
      
      <Text
        position={[-2, -0.5, 0]}
        fontSize={0.25}
        color="#00aaff"
        anchorX="left"
        anchorY="middle"
      >
        {`VOLUME: ${(analysisData.volume * 100).toFixed(1)}%`}
      </Text>
      
      <Text
        position={[-2, -0.9, 0]}
        fontSize={0.25}
        color="#00aaff"
        anchorX="left"
        anchorY="middle"
      >
        {`LOW: ${(analysisData.lowEnergy * 100).toFixed(1)}%`}
      </Text>
      
      <Text
        position={[-2, -1.3, 0]}
        fontSize={0.25}
        color="#00aaff"
        anchorX="left"
        anchorY="middle"
      >
        {`MID: ${(analysisData.midEnergy * 100).toFixed(1)}%`}
      </Text>
      
      <Text
        position={[2, -0.9, 0]}
        fontSize={0.25}
        color="#00aaff"
        anchorX="right"
        anchorY="middle"
      >
        {`HIGH: ${(analysisData.highEnergy * 100).toFixed(1)}%`}
      </Text>
      
      <Text
        position={[2, -1.3, 0]}
        fontSize={0.25}
        color="#00aaff"
        anchorX="right"
        anchorY="middle"
      >
        {`BEAT: ${analysisData.beat ? 'ACTIVE' : 'IDLE'}`}
      </Text>
    </group>
  );
}

// 場景容器
function Scene({ analysisData }: { analysisData: AudioAnalysisData }) {
  const cameraRef = useRef<THREE.PerspectiveCamera>(null);
  
  useFrame((_state, delta) => {
    if (!cameraRef.current) return;
    
    // 相機平滑移動
    const time = Date.now() * 0.0005;
    cameraRef.current.position.x = Math.sin(time * 0.5) * 2;
    cameraRef.current.position.y = 2 + Math.sin(time * 0.3) * 1;
    cameraRef.current.position.z = 8 + Math.sin(time * 0.2) * 2;
  });
  
  return (
    <>
      <PerspectiveCamera
        ref={cameraRef}
        makeDefault
        position={[0, 2, 10]}
        fov={60}
      />
      
      <color attach="background" args={['#041024']} />
      <fog attach="fog" args={['#041024', 5, 30]} />
      <Environment preset="night" />
      
      <DataCircle 
        frequencyData={analysisData.frequencyData}
        lowEnergy={analysisData.lowEnergy}
        beat={analysisData.beat}
      />
      
      <FrequencyBars 
        frequencyData={analysisData.frequencyData}
        midEnergy={analysisData.midEnergy}
        highEnergy={analysisData.highEnergy}
        position={[0, -2, 0]}
        height={3}
      />
      
      <Waveform 
        timeData={analysisData.timeData}
        color="#00aaff"
        position={[0, 0, -1]}
        scale={[1, 2, 1]}
      />
      
      <DataMetrics 
        analysisData={analysisData}
        position={[0, 4, 0]}
      />
    </>
  );
}

// 科技數據可視化主題
export default function TechnoData({ analysisData }: { analysisData: AudioAnalysisData }) {
  return (
    <Canvas 
      className="w-full h-full"
      style={{
        background: 'radial-gradient(circle at center, #042a38 0%, #041024 100%)'
      }}
    >
      <Scene analysisData={analysisData} />
    </Canvas>
  );
} 