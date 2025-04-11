'use client';

import { useState, useEffect } from 'react';
import AudioPlayer from './components/ui/AudioPlayer';
import ThemeSwitcher from './components/ui/ThemeSwitcher';
import VisualizerContainer from './components/visualizers/VisualizerContainer';
import { motion } from 'framer-motion';

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);
  
  // 自動隱藏介紹文字
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 5000);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative overflow-hidden">
      {/* 背景視覺化 */}
      <div className="absolute inset-0 z-0">
        <VisualizerContainer />
      </div>
      
      {/* 頂部標題 */}
      <header className="relative z-10 w-full max-w-5xl flex items-center justify-between p-4 sm:p-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-white"
        >
          <h1 className="text-2xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
            PULSE
          </h1>
          <p className="text-sm sm:text-base text-white/70">
            音樂可視化播放器
          </p>
        </motion.div>
        
        <motion.a
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          href="https://github.com/yourusername/pulse"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-purple-300 transition"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
          </svg>
        </motion.a>
      </header>
      
      {/* 介紹文字 */}
      {showIntro && (
        <motion.div 
          className="absolute inset-0 flex items-center justify-center z-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="bg-black/60 backdrop-blur-md p-6 sm:p-10 rounded-xl max-w-xl text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              歡迎使用 PULSE
            </h2>
            <p className="text-gray-300 mb-6">
              上傳您喜愛的音樂，體驗動態視覺效果的饗宴。
              選擇不同視覺主題，沉浸在音樂的視覺表現中。
            </p>
            <button 
              onClick={() => setShowIntro(false)}
              className="px-6 py-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg text-white font-medium hover:from-purple-700 hover:to-blue-700 transition"
            >
              開始體驗
            </button>
          </div>
        </motion.div>
      )}
      
      {/* 主要內容區域 */}
      <div className="relative z-10 flex flex-col sm:flex-row items-center sm:items-start justify-center gap-4 sm:gap-8 w-full max-w-7xl p-4 sm:p-8 mt-auto">
        {/* 主題切換器 */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="w-full sm:w-64"
        >
          <ThemeSwitcher />
        </motion.div>
        
        {/* 播放控制區 */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="w-full"
        >
          <AudioPlayer />
        </motion.div>
      </div>
      
      {/* 頁腳 */}
      <footer className="relative z-10 w-full max-w-5xl p-4 sm:p-8 text-center text-white/60 text-sm">
        <p>
          Created with 💜 &amp; Next.js, Three.js, WebGL &amp; Web Audio API | &copy; {new Date().getFullYear()} Pulse
        </p>
      </footer>
    </main>
  );
}
