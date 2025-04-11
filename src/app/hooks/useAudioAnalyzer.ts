import { useRef, useState, useEffect } from 'react';

// 音頻分析結果的接口
export interface AudioAnalysisData {
  // FFT 數據 (頻率域)
  frequencyData: Uint8Array;
  // 波形數據 (時間域)
  timeData: Uint8Array;
  // 低中高音頻段能量
  lowEnergy: number;
  midEnergy: number;
  highEnergy: number;
  // 總體響度
  volume: number;
  // 峰值檢測
  beat: boolean;
  // 頻率平均值
  frequencyAverage: number;
}

// 配置選項
interface AudioAnalyzerOptions {
  fftSize?: number;
  smoothingTimeConstant?: number;
  minDecibels?: number;
  maxDecibels?: number;
  beatDetectionThreshold?: number;
  beatDetectionDelay?: number;
}

// 默認配置
const DEFAULT_OPTIONS: AudioAnalyzerOptions = {
  fftSize: 2048,
  smoothingTimeConstant: 0.8,
  minDecibels: -100,
  maxDecibels: -30,
  beatDetectionThreshold: 1.15,
  beatDetectionDelay: 200,
};

/**
 * 音頻分析 Hook
 * 提供實時音頻分析功能，支持頻譜、波形和節拍檢測
 */
export function useAudioAnalyzer(options: AudioAnalyzerOptions = {}) {
  // 合併用戶選項和默認選項
  const config = { ...DEFAULT_OPTIONS, ...options };
  
  // 狀態和引用
  const [isInitialized, setIsInitialized] = useState<boolean>(false);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [audioSource, setAudioSource] = useState<string | null>(null);
  const [analysisData, setAnalysisData] = useState<AudioAnalysisData | null>(null);
  
  // 引用音頻相關對象
  const audioContextRef = useRef<AudioContext | null>(null);
  const audioElementRef = useRef<HTMLAudioElement | null>(null);
  const sourceNodeRef = useRef<MediaElementAudioSourceNode | null>(null);
  const analyzerNodeRef = useRef<AnalyserNode | null>(null);
  const lastBeatTimeRef = useRef<number>(0);
  const animationFrameRef = useRef<number | null>(null);
  
  // 初始化音頻上下文和分析器
  const initAudioContext = () => {
    if (isInitialized) {
      console.log('音頻上下文已經初始化過');
      return;
    }
    
    try {
      console.log('開始初始化音頻上下文...');
      // 創建音頻上下文
      // @ts-expect-error: 處理瀏覽器兼容性問題
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      
      if (!AudioContext) {
        console.error('瀏覽器不支持 AudioContext');
        return;
      }
      
      audioContextRef.current = new AudioContext();
      console.log(`音頻上下文已創建，狀態: ${audioContextRef.current.state}`);
      
      // 創建音頻元素
      const audioElement = new Audio();
      audioElement.crossOrigin = 'anonymous';
      audioElementRef.current = audioElement;
      console.log('音頻元素已創建');
      
      // 創建音頻源節點
      const sourceNode = audioContextRef.current.createMediaElementSource(audioElement);
      sourceNodeRef.current = sourceNode;
      console.log('音頻源節點已創建');
      
      // 創建分析器節點
      const analyzerNode = audioContextRef.current.createAnalyser();
      analyzerNode.fftSize = config.fftSize!;
      analyzerNode.smoothingTimeConstant = config.smoothingTimeConstant!;
      analyzerNode.minDecibels = config.minDecibels!;
      analyzerNode.maxDecibels = config.maxDecibels!;
      analyzerNodeRef.current = analyzerNode;
      console.log(`分析器節點已創建，FFT大小: ${config.fftSize}`);
      
      // 連接節點: 源 -> 分析器 -> 輸出
      sourceNode.connect(analyzerNode);
      analyzerNode.connect(audioContextRef.current.destination);
      console.log('音頻節點已連接');
      
      // 監聽播放狀態變化
      audioElement.addEventListener('play', () => {
        console.log('音頻開始播放');
        setIsPlaying(true);
      });
      audioElement.addEventListener('pause', () => {
        console.log('音頻已暫停');
        setIsPlaying(false);
      });
      audioElement.addEventListener('ended', () => {
        console.log('音頻播放完成');
        setIsPlaying(false);
      });
      
      setIsInitialized(true);
      console.log('音頻上下文初始化完成');
    } catch (error) {
      console.error('初始化音頻上下文失敗:', error);
    }
  };
  
  // 分析音頻數據
  const analyzeAudio = () => {
    if (!analyzerNodeRef.current || !isPlaying) {
      return;
    }
    
    // 創建數據緩衝區
    const bufferLength = analyzerNodeRef.current.frequencyBinCount;
    const frequencyData = new Uint8Array(bufferLength);
    const timeData = new Uint8Array(bufferLength);
    
    // 獲取頻率和時間域數據
    analyzerNodeRef.current.getByteFrequencyData(frequencyData);
    analyzerNodeRef.current.getByteTimeDomainData(timeData);
    
    // 計算頻段能量
    const lowEnd = Math.floor(bufferLength * 0.1);  // 低頻 0-10%
    const midEnd = Math.floor(bufferLength * 0.5);  // 中頻 10-50%
    
    let lowSum = 0;
    let midSum = 0;
    let highSum = 0;
    let totalSum = 0;
    
    // 計算各頻段能量
    for (let i = 0; i < bufferLength; i++) {
      const value = frequencyData[i];
      
      if (i < lowEnd) {
        lowSum += value;
      } else if (i < midEnd) {
        midSum += value;
      } else {
        highSum += value;
      }
      
      totalSum += value;
    }
    
    // 歸一化能量值 (0-1)
    const lowEnergy = lowSum / (lowEnd * 255);
    const midEnergy = midSum / ((midEnd - lowEnd) * 255);
    const highEnergy = highSum / ((bufferLength - midEnd) * 255);
    
    // 總體音量 (0-1)
    const volume = totalSum / (bufferLength * 255);
    
    // 頻率平均值
    const frequencyAverage = totalSum / bufferLength;
    
    // 節拍檢測
    let beat = false;
    const now = Date.now();
    
    if (volume > config.beatDetectionThreshold! * 0.5 && 
        now - lastBeatTimeRef.current > config.beatDetectionDelay!) {
      beat = true;
      lastBeatTimeRef.current = now;
    }
    
    // 更新分析數據
    setAnalysisData({
      frequencyData,
      timeData,
      lowEnergy,
      midEnergy,
      highEnergy,
      volume,
      beat,
      frequencyAverage
    });
    
    // 請求下一幀分析
    animationFrameRef.current = requestAnimationFrame(analyzeAudio);
  };
  
  // 加載並播放音頻
  const loadAudio = (source: string | File) => {
    console.log('loadAudio 被調用');
    
    // 如果未初始化，先初始化
    if (!isInitialized) {
      console.log('音頻上下文尚未初始化，正在初始化...');
      initAudioContext();
    }
    
    if (!audioElementRef.current) {
      console.error('音頻元素不存在，無法加載音頻');
      return;
    }
    
    let url: string;
    
    if (typeof source === 'string') {
      url = source;
      console.log(`加載音頻URL: ${url}`);
    } else {
      // 處理文件對象
      url = URL.createObjectURL(source);
      console.log(`從文件創建Blob URL: ${url}, 文件類型: ${source.type}`);
    }
    
    // 添加音頻加載事件監聽器
    const loadStartHandler = () => console.log('音頻開始加載');
    const loadedMetadataHandler = () => console.log('音頻元數據已加載');
    const canPlayHandler = () => console.log('音頻可以開始播放');
    const errorHandler = (e: Event) => console.error('音頻加載錯誤:', e);
    
    audioElementRef.current.addEventListener('loadstart', loadStartHandler);
    audioElementRef.current.addEventListener('loadedmetadata', loadedMetadataHandler);
    audioElementRef.current.addEventListener('canplay', canPlayHandler);
    audioElementRef.current.addEventListener('error', errorHandler);
    
    // 設置音頻源
    audioElementRef.current.src = url;
    setAudioSource(url);
    
    // 預加載音頻
    audioElementRef.current.load();
    console.log('音頻加載操作已觸發');
    
    // 一段時間後移除事件監聽器
    setTimeout(() => {
      if (audioElementRef.current) {
        audioElementRef.current.removeEventListener('loadstart', loadStartHandler);
        audioElementRef.current.removeEventListener('loadedmetadata', loadedMetadataHandler);
        audioElementRef.current.removeEventListener('canplay', canPlayHandler);
        audioElementRef.current.removeEventListener('error', errorHandler);
      }
    }, 10000);
  };
  
  // 播放音頻
  const playAudio = async () => {
    if (!audioElementRef.current || !audioContextRef.current) {
      console.log('音頻元素或上下文不存在');
      return;
    }
    
    try {
      // 添加音頻狀態調試信息
      console.log(`音頻準備狀態: ${audioElementRef.current.readyState}, 當前源: ${audioElementRef.current.src}`);
      console.log(`音頻上下文狀態: ${audioContextRef.current.state}`);
      
      // 嘗試恢復音頻上下文 (如果被暫停)
      if (audioContextRef.current.state === 'suspended') {
        console.log('嘗試恢復已暫停的音頻上下文...');
        await audioContextRef.current.resume();
        console.log('音頻上下文已恢復');
      }
      
      // 檢查音頻是否已準備好
      if (audioElementRef.current.readyState < 2) { // HAVE_CURRENT_DATA
        console.log('等待音頻數據加載...');
        // 等待音頻加載到足夠播放的程度
        await new Promise<void>((resolve) => {
          const canPlayHandler = () => {
            console.log('音頻可以播放了');
            audioElementRef.current?.removeEventListener('canplay', canPlayHandler);
            resolve();
          };
          
          const errorHandler = (e: Event) => {
            console.error('音頻加載錯誤:', e);
            audioElementRef.current?.removeEventListener('error', errorHandler);
            resolve(); // 即使有錯誤也解析，以避免卡住
          };
          
          audioElementRef.current!.addEventListener('canplay', canPlayHandler);
          audioElementRef.current!.addEventListener('error', errorHandler);
          
          // 添加超時，避免無限等待
          setTimeout(() => {
            console.log('音頻加載超時');
            audioElementRef.current?.removeEventListener('canplay', canPlayHandler);
            audioElementRef.current?.removeEventListener('error', errorHandler);
            resolve();
          }, 5000); // 5秒超時
        });
      }
      
      // 再次檢查音頻元素
      if (!audioElementRef.current) {
        console.log('音頻元素已被釋放');
        return;
      }
      
      // 如果音頻已暫停或未播放，則嘗試播放
      if (audioElementRef.current.paused) {
        console.log('嘗試播放音頻...');
        // 播放
        await audioElementRef.current.play();
        console.log('音頻播放中');
        
        // 確保音量已經設置
        if (audioElementRef.current.volume === 0) {
          audioElementRef.current.volume = 0.8; // 默認音量
        }
        
        // 開始分析
        cancelAnimationFrame(animationFrameRef.current!);
        analyzeAudio();
      } else {
        console.log('音頻已經在播放中');
      }
    } catch (error) {
      // 處理AbortError (播放請求被中斷)
      if (error instanceof Error) {
        if (error.name === 'AbortError') {
          console.log('播放請求被中斷，可能是新音頻正在加載');
        } else if (error.name === 'NotAllowedError') {
          console.error('播放被瀏覽器阻止。需要用戶交互才能播放音頻。');
          // 可以在這裡添加用戶提示
        } else {
          // 其他錯誤
          console.error('播放音頻時發生錯誤:', error);
        }
      } else {
        console.error('未知錯誤:', error);
      }
    }
  };
  
  // 暫停音頻
  const pauseAudio = () => {
    if (!audioElementRef.current) return;
    audioElementRef.current.pause();
    
    // 停止分析
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }
  };
  
  // 清理函數
  useEffect(() => {
    return () => {
      // 停止播放
      if (audioElementRef.current) {
        audioElementRef.current.pause();
      }
      
      // 取消動畫幀
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      
      // 釋放 URL 對象
      if (audioSource && audioSource.startsWith('blob:')) {
        URL.revokeObjectURL(audioSource);
      }
      
      // 斷開節點連接
      if (sourceNodeRef.current && analyzerNodeRef.current) {
        sourceNodeRef.current.disconnect();
        analyzerNodeRef.current.disconnect();
      }
      
      // 關閉音頻上下文
      if (audioContextRef.current) {
        audioContextRef.current.close();
      }
    };
  }, [audioSource]);
  
  return {
    isInitialized,
    isPlaying,
    analysisData,
    loadAudio,
    playAudio,
    pauseAudio,
    audioElement: audioElementRef.current
  };
}

export default useAudioAnalyzer; 