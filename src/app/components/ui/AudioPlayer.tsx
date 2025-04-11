'use client';

import { useEffect, useRef } from 'react';
import { usePlayerStore } from '../../store/usePlayerStore';
import { useAudioAnalyzer } from '../../hooks/useAudioAnalyzer';
import { motion } from 'framer-motion';

// 格式化時間 (秒 -> mm:ss)
const formatTime = (seconds: number): string => {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
};

export default function AudioPlayer() {
  // 文件上傳 ref
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  // 播放器狀態
  const {
    audioFile, 
    audioUrl,
    isPlaying,
    volume,
    currentTime,
    duration,
    setIsPlaying,
    setCurrentTime,
    setDuration,
    setAnalysisData,
    setAudioFile
  } = usePlayerStore();
  
  // 音頻分析器 hook
  const { 
    loadAudio, 
    playAudio, 
    pauseAudio, 
    analysisData,
    audioElement 
  } = useAudioAnalyzer({
    fftSize: 2048,
    beatDetectionThreshold: 1.2
  });
  
  // 使用ref來追蹤上次更新時間，用於限制更新頻率
  const lastUpdateTimeRef = useRef(0);
  
  // 進度更新
  useEffect(() => {
    if (!audioElement) return;
    
    // 設置音量
    audioElement.volume = volume;
    
    // 時間更新事件
    const handleTimeUpdate = () => {
      setCurrentTime(audioElement.currentTime);
    };
    
    // 持續時間變更事件
    const handleDurationChange = () => {
      setDuration(audioElement.duration || 0);
    };
    
    // 添加事件監聽
    audioElement.addEventListener('timeupdate', handleTimeUpdate);
    audioElement.addEventListener('durationchange', handleDurationChange);
    
    return () => {
      // 移除事件監聽
      audioElement.removeEventListener('timeupdate', handleTimeUpdate);
      audioElement.removeEventListener('durationchange', handleDurationChange);
    };
  }, [audioElement, setCurrentTime, setDuration, volume]);
  
  // 更新分析數據 (使用節流來減少更新頻率)
  useEffect(() => {
    if (analysisData) {
      const now = Date.now();
      // 每50ms最多更新一次，減少不必要的狀態更新
      if (now - lastUpdateTimeRef.current > 50) {
        setAnalysisData(analysisData);
        lastUpdateTimeRef.current = now;
      }
    }
  }, [analysisData, setAnalysisData]);
  
  // 處理文件上傳
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;
    
    const file = files[0];
    
    // 檢查文件類型
    if (!file.type.startsWith('audio/')) {
      alert('請上傳有效的音頻文件');
      return;
    }
    
    console.log(`正在處理上傳的文件: ${file.name}, 類型: ${file.type}, 大小: ${file.size} 字節`);
    
    // 如果當前正在播放，先停止播放
    if (isPlaying) {
      setIsPlaying(false);
    }
    
    // 延遲一下再設置新文件，確保先前的播放已停止
    setTimeout(() => {
      // 設置音頻文件
      setAudioFile(file);
      console.log(`文件已設置: ${file.name}`);
    }, 100);
  };
  
  // 處理播放/暫停點擊
  const handlePlayPause = () => {
    if (!audioUrl) {
      console.log('沒有可播放的音頻文件');
      return;
    }
    
    console.log(`切換播放狀態: ${!isPlaying ? '播放' : '暫停'}`);
    setIsPlaying(!isPlaying);
  };
  
  // 處理上傳按鈕點擊
  const handleUploadClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };
  
  // 處理滑塊變化
  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = parseFloat(e.target.value);
    if (audioElement) {
      audioElement.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };
  
  // 加載音頻文件
  useEffect(() => {
    if (audioUrl) {
      console.log(`準備加載音頻: ${audioUrl}`);
      // 確保先停止之前的播放
      pauseAudio();
      // 延遲加載，避免冲突
      const loadTimer = setTimeout(() => {
        console.log(`加載音頻: ${audioUrl}`);
        loadAudio(audioUrl);
      }, 300); // 增加延時以確保前一個操作完成
      
      return () => clearTimeout(loadTimer);
    }
  }, [audioUrl, loadAudio, pauseAudio]);
  
  // 自動播放
  useEffect(() => {
    // 當音頻加載完成後自動播放一次
    if (audioUrl && duration > 0 && !isPlaying) {
      console.log('音頻已加載完成，嘗試自動播放');
      setIsPlaying(true);
    }
  }, [audioUrl, duration, isPlaying, setIsPlaying]);
  
  // 播放/暫停控制
  useEffect(() => {
    if (isPlaying) {
      console.log('播放控制: 播放');
      playAudio();
    } else {
      console.log('播放控制: 暫停');
      pauseAudio();
    }
  }, [isPlaying, playAudio, pauseAudio]);
  
  return (
    <motion.div 
      className="player-container w-full max-w-3xl p-5 text-white"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* 隱藏的文件輸入 */}
      <input 
        type="file" 
        ref={fileInputRef} 
        onChange={handleFileUpload} 
        accept="audio/*" 
        className="hidden"
      />
      
      {/* 上傳按鈕和標題 */}
      <div className="flex justify-between items-center mb-5">
        <div className="flex flex-col">
          <h2 className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
            {audioFile ? audioFile.name.length > 30 
              ? audioFile.name.substring(0, 30) + '...' 
              : audioFile.name 
              : '無音樂文件'}
          </h2>
          {audioFile && (
            <span className="text-xs text-gray-400 mt-1">
              {audioFile.type.replace('audio/', '')} · {Math.round(audioFile.size / 1024)} KB
            </span>
          )}
        </div>
        <motion.button 
          onClick={handleUploadClick}
          className="btn-glow px-4 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full text-sm font-medium shadow-lg hover:shadow-purple-600/20"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
            </svg>
            上傳音頻
          </div>
        </motion.button>
      </div>
      
      {/* 頻譜預覽 (簡單版) */}
      <div className="mb-5 relative">
        <div className="h-16 w-full flex items-end gap-0.5 rounded-lg overflow-hidden bg-black/20 backdrop-blur-sm p-1">
          {analysisData ? (
            Array.from({ length: 64 }).map((_, i) => {
              // 從頻譜數據中抽樣
              const index = Math.floor(i * (analysisData.frequencyData.length / 64));
              const value = analysisData.frequencyData[index] / 255;
              
              return (
                <motion.div 
                  key={i}
                  className={`flex-1 rounded-t ${i % 2 === 0 ? 'bg-gradient-to-t from-indigo-600 to-purple-500' : 'bg-gradient-to-t from-blue-600 to-indigo-500'}`}
                  style={{ 
                    height: `${Math.max(5, value * 100)}%`,
                    animationDelay: `${i * 0.01}s` 
                  }}
                  initial={{ height: '5%' }}
                  animate={{ height: `${Math.max(5, value * 100)}%` }}
                  transition={{ duration: 0.1 }}
                />
              );
            })
          ) : (
            <div className="w-full h-full flex justify-center items-center text-xs text-gray-400">
              等待音頻...
            </div>
          )}
        </div>

        {/* 音頻能量指標 */}
        {analysisData && (
          <div className="absolute top-2 right-3 flex gap-2 text-xs">
            <span className="px-2 py-1 rounded-full bg-black/30 text-blue-300">
              低頻: {Math.round(analysisData.lowEnergy * 100)}%
            </span>
            <span className="px-2 py-1 rounded-full bg-black/30 text-indigo-300">
              中頻: {Math.round(analysisData.midEnergy * 100)}%
            </span>
            <span className="px-2 py-1 rounded-full bg-black/30 text-purple-300">
              高頻: {Math.round(analysisData.highEnergy * 100)}%
            </span>
          </div>
        )}
      </div>
      
      {/* 進度條 */}
      <div className="mb-4">
        <input 
          type="range"
          min={0}
          max={duration || 100}
          value={currentTime}
          onChange={handleSeek}
          className="w-full"
          style={{
            backgroundSize: `${(currentTime / (duration || 1)) * 100}% 100%`,
            backgroundImage: 'linear-gradient(to right, #8b5cf6, #3b82f6)'
          }}
        />
        <div className="flex justify-between text-xs text-gray-300 mt-1 px-1">
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(duration)}</span>
        </div>
      </div>
      
      {/* 控制按鈕 */}
      <div className="flex justify-center items-center">
        <motion.button 
          onClick={handlePlayPause}
          disabled={!audioUrl}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className={`
            w-14 h-14 rounded-full flex items-center justify-center shadow-xl
            ${audioUrl 
              ? 'bg-gradient-to-br from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700' 
              : 'bg-gray-700/50 cursor-not-allowed'
            }
            transition-all duration-300
          `}
        >
          {isPlaying ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="6" y="4" width="4" height="16"></rect>
              <rect x="14" y="4" width="4" height="16"></rect>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="5 3 19 12 5 21 5 3"></polygon>
            </svg>
          )}
        </motion.button>
        
        {/* 節拍指示器 */}
        {analysisData && analysisData.beat && (
          <motion.div 
            className="absolute w-24 h-24 rounded-full"
            initial={{ opacity: 0.8, scale: 0.8 }}
            animate={{ opacity: 0, scale: 1.5 }}
            transition={{ duration: 0.4 }}
            style={{ 
              background: 'radial-gradient(circle, rgba(139, 92, 246, 0.3) 0%, rgba(59, 130, 246, 0) 70%)'
            }}
          />
        )}
      </div>
      
      {/* 音量條 (小螢幕隱藏) */}
      <div className="mt-4 hidden sm:flex items-center justify-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
          <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
          <path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path>
        </svg>
        <input 
          type="range"
          min={0}
          max={1}
          step={0.01}
          value={volume}
          onChange={(e) => audioElement && (audioElement.volume = parseFloat(e.target.value))}
          className="w-24"
          style={{
            backgroundSize: `${volume * 100}% 100%`,
            backgroundImage: 'linear-gradient(to right, #8b5cf6, #3b82f6)'
          }}
        />
      </div>
    </motion.div>
  );
} 