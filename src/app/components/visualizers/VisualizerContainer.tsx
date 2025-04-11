'use client';

import { useRef, useEffect } from 'react';
import { usePlayerStore } from '../../store/usePlayerStore';
import AbstractGeometry from './themes/AbstractGeometry';
import CyberpunkNeon from './themes/CyberpunkNeon';
import RetroWave from './themes/RetroWave';
import TechnoData from './themes/TechnoData';

export default function VisualizerContainer() {
  const { currentTheme, analysisData } = usePlayerStore();
  const containerRef = useRef<HTMLDivElement>(null);

  // 渲染基於當前主題的可視化效果
  const renderVisualizer = () => {
    if (!analysisData) return null;

    switch (currentTheme) {
      case 'abstract-geometry':
        return <AbstractGeometry analysisData={analysisData} />;
      case 'cyberpunk-neon':
        return <CyberpunkNeon analysisData={analysisData} />;
      case 'retro-wave':
        return <RetroWave analysisData={analysisData} />;
      case 'techno-data':
        return <TechnoData analysisData={analysisData} />;
      default:
        return <AbstractGeometry analysisData={analysisData} />;
    }
  };

  return (
    <div 
      ref={containerRef}
      className="absolute inset-0 overflow-hidden z-0"
    >
      {renderVisualizer()}
    </div>
  );
} 