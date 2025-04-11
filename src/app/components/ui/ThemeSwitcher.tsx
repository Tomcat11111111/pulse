'use client';

import { motion } from 'framer-motion';
import { usePlayerStore } from '../../store/usePlayerStore';
import type { VisualizerTheme } from '../../store/usePlayerStore';

// 主題選項配置
const THEMES = [
  {
    id: 'abstract-geometry',
    name: '幾何抽象',
    description: '極簡線條與幾何圖形',
    color: 'from-indigo-500 to-purple-600',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"></polygon>
        <line x1="12" y1="22" x2="12" y2="15.5"></line>
        <polyline points="22 8.5 12 15.5 2 8.5"></polyline>
      </svg>
    ),
  },
  {
    id: 'cyberpunk-neon',
    name: '賽博朋克',
    description: '霓虹燈與未來感',
    color: 'from-pink-500 to-cyan-400',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M5.67 19.74A7.97 7.97 0 0 0 12 22a7.97 7.97 0 0 0 6.33-2.26c.88-.83.67-2.27-.42-2.83L12 13l-5.91 3.91c-1.09.56-1.3 2-.42 2.83Z"></path>
        <path d="M19.14 4.93A7.97 7.97 0 0 0 12 2a7.97 7.97 0 0 0-7.14 2.93c-.85.86-.64 2.28.43 2.85L12 11l6.71-3.22c1.07-.57 1.28-1.99.43-2.85Z"></path>
      </svg>
    ),
  },
  {
    id: 'retro-wave',
    name: '復古波浪',
    description: '80年代復古風格',
    color: 'from-rose-500 to-indigo-700',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="m8 2 10 20"></path>
        <path d="M18 2 8 22"></path>
        <path d="M2 12h20"></path>
      </svg>
    ),
  },
  {
    id: 'techno-data',
    name: '科技數據',
    description: '數據驅動可視化',
    color: 'from-emerald-500 to-cyan-500',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M10 2v7.31"></path>
        <path d="M14 9.3V1.99"></path>
        <path d="M8.5 2h7"></path>
        <path d="M14 9.3a6 6 0 1 1-4 0"></path>
        <path d="M5.58 16.5h12.85"></path>
      </svg>
    ),
  }
];

export default function ThemeSwitcher() {
  const { currentTheme, setCurrentTheme } = usePlayerStore();
  
  return (
    <motion.div 
      className="theme-selector"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="p-4 pb-2 flex justify-between items-center">
        <h3 className="text-base font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">視覺主題風格</h3>
        <span className="text-xs text-gray-400">4種風格</span>
      </div>
      
      <div className="px-3 pb-4">
        <div className="grid grid-cols-2 gap-2">
          {THEMES.map((theme) => {
            const isActive = currentTheme === theme.id;
            
            return (
              <motion.button
                key={theme.id}
                onClick={() => setCurrentTheme(theme.id as VisualizerTheme)}
                className={`
                  theme-button relative rounded-lg p-3
                  ${isActive 
                    ? 'bg-gradient-to-br ' + theme.color + ' shadow-lg' 
                    : 'bg-black/20 hover:bg-black/30'
                  }
                `}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <div className="flex flex-col items-center">
                  <div className={`mb-1.5 ${isActive ? 'text-white' : 'text-gray-300'}`}>
                    {theme.icon}
                  </div>
                  <span className={`text-sm font-medium ${isActive ? 'text-white' : 'text-gray-300'}`}>
                    {theme.name}
                  </span>
                  <span className={`text-xs mt-0.5 ${isActive ? 'text-white/80' : 'text-gray-500'}`}>
                    {theme.description}
                  </span>
                  
                  {isActive && (
                    <motion.div 
                      className="absolute top-1 right-1 h-2 w-2 rounded-full bg-white"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      layoutId="activeIndicator"
                    />
                  )}
                </div>
                
                {isActive && (
                  <motion.div 
                    className="absolute inset-0 rounded-lg"
                    initial={{ opacity: 0 }}
                    animate={{ 
                      opacity: [0.3, 0.1, 0.3], 
                      boxShadow: [
                        `0 0 0 1px rgba(255, 255, 255, 0.1)`,
                        `0 0 0 3px rgba(255, 255, 255, 0.05)`,
                        `0 0 0 1px rgba(255, 255, 255, 0.1)`
                      ]
                    }}
                    transition={{ 
                      repeat: Infinity,
                      duration: 3,
                      ease: "easeInOut" 
                    }}
                  />
                )}
              </motion.button>
            );
          })}
        </div>
        
        <div className="mt-4 text-center">
          <span className="text-xs text-gray-400 inline-flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
            視覺效果會隨著音樂節奏而變化
          </span>
        </div>
      </div>
    </motion.div>
  );
} 