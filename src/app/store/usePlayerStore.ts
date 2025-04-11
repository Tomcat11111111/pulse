import { create } from 'zustand';
import { AudioAnalysisData } from '../hooks/useAudioAnalyzer';

// 視覺主題類型
export type VisualizerTheme = 
  | 'abstract-geometry' 
  | 'cyberpunk-neon' 
  | 'retro-wave' 
  | 'techno-data';

// 播放器狀態接口
interface PlayerState {
  // 音頻文件
  audioFile: File | null;
  audioUrl: string | null;
  // 播放控制
  isPlaying: boolean;
  volume: number;
  currentTime: number;
  duration: number;
  // 音頻分析數據
  analysisData: AudioAnalysisData | null;
  // 視覺化主題
  currentTheme: VisualizerTheme;
  // 是否顯示控制面板
  showControls: boolean;
  // 動作
  setAudioFile: (file: File) => void;
  setAudioUrl: (url: string) => void;
  clearAudio: () => void;
  setIsPlaying: (isPlaying: boolean) => void;
  setVolume: (volume: number) => void;
  setCurrentTime: (time: number) => void;
  setDuration: (duration: number) => void;
  setAnalysisData: (data: AudioAnalysisData | null) => void;
  setCurrentTheme: (theme: VisualizerTheme) => void;
  toggleControls: () => void;
}

// 創建播放器狀態管理
export const usePlayerStore = create<PlayerState>((set) => ({
  // 初始狀態
  audioFile: null,
  audioUrl: null,
  isPlaying: false,
  volume: 0.8,
  currentTime: 0,
  duration: 0,
  analysisData: null,
  currentTheme: 'abstract-geometry',
  showControls: true,
  
  // 動作
  setAudioFile: (file: File) => 
    set({ 
      audioFile: file, 
      audioUrl: URL.createObjectURL(file),
      currentTime: 0,
      isPlaying: false
    }),
  
  setAudioUrl: (url: string) => 
    set({ 
      audioUrl: url, 
      audioFile: null,
      currentTime: 0,
      isPlaying: false
    }),
  
  clearAudio: () => 
    set({ 
      audioFile: null, 
      audioUrl: null, 
      currentTime: 0, 
      duration: 0, 
      isPlaying: false 
    }),
  
  setIsPlaying: (isPlaying: boolean) => set({ isPlaying }),
  
  setVolume: (volume: number) => set({ volume }),
  
  setCurrentTime: (currentTime: number) => set({ currentTime }),
  
  setDuration: (duration: number) => set({ duration }),
  
  setAnalysisData: (analysisData: AudioAnalysisData | null) => set({ analysisData }),
  
  setCurrentTheme: (currentTheme: VisualizerTheme) => set({ currentTheme }),
  
  toggleControls: () => set((state) => ({ showControls: !state.showControls }))
}));

export default usePlayerStore; 