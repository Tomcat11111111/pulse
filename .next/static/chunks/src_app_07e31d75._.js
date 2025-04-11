(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_app_07e31d75._.js", {

"[project]/src/app/store/usePlayerStore.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__),
    "usePlayerStore": (()=>usePlayerStore)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/react.mjs [app-client] (ecmascript)");
;
const usePlayerStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"])((set)=>({
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
        setAudioFile: (file)=>set({
                audioFile: file,
                audioUrl: URL.createObjectURL(file),
                currentTime: 0,
                isPlaying: false
            }),
        setAudioUrl: (url)=>set({
                audioUrl: url,
                audioFile: null,
                currentTime: 0,
                isPlaying: false
            }),
        clearAudio: ()=>set({
                audioFile: null,
                audioUrl: null,
                currentTime: 0,
                duration: 0,
                isPlaying: false
            }),
        setIsPlaying: (isPlaying)=>set({
                isPlaying
            }),
        setVolume: (volume)=>set({
                volume
            }),
        setCurrentTime: (currentTime)=>set({
                currentTime
            }),
        setDuration: (duration)=>set({
                duration
            }),
        setAnalysisData: (analysisData)=>set({
                analysisData
            }),
        setCurrentTheme: (currentTheme)=>set({
                currentTheme
            }),
        toggleControls: ()=>set((state)=>({
                    showControls: !state.showControls
                }))
    }));
const __TURBOPACK__default__export__ = usePlayerStore;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/hooks/useAudioAnalyzer.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__),
    "useAudioAnalyzer": (()=>useAudioAnalyzer)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
// 默認配置
const DEFAULT_OPTIONS = {
    fftSize: 2048,
    smoothingTimeConstant: 0.8,
    minDecibels: -100,
    maxDecibels: -30,
    beatDetectionThreshold: 1.15,
    beatDetectionDelay: 200
};
function useAudioAnalyzer(options = {}) {
    _s();
    // 合併用戶選項和默認選項
    const config = {
        ...DEFAULT_OPTIONS,
        ...options
    };
    // 狀態和引用
    const [isInitialized, setIsInitialized] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isPlaying, setIsPlaying] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [audioSource, setAudioSource] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [analysisData, setAnalysisData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // 引用音頻相關對象
    const audioContextRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const audioElementRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const sourceNodeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const analyzerNodeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const lastBeatTimeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const animationFrameRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // 初始化音頻上下文和分析器
    const initAudioContext = ()=>{
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
            analyzerNode.fftSize = config.fftSize;
            analyzerNode.smoothingTimeConstant = config.smoothingTimeConstant;
            analyzerNode.minDecibels = config.minDecibels;
            analyzerNode.maxDecibels = config.maxDecibels;
            analyzerNodeRef.current = analyzerNode;
            console.log(`分析器節點已創建，FFT大小: ${config.fftSize}`);
            // 連接節點: 源 -> 分析器 -> 輸出
            sourceNode.connect(analyzerNode);
            analyzerNode.connect(audioContextRef.current.destination);
            console.log('音頻節點已連接');
            // 監聽播放狀態變化
            audioElement.addEventListener('play', ()=>{
                console.log('音頻開始播放');
                setIsPlaying(true);
            });
            audioElement.addEventListener('pause', ()=>{
                console.log('音頻已暫停');
                setIsPlaying(false);
            });
            audioElement.addEventListener('ended', ()=>{
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
    const analyzeAudio = ()=>{
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
        const lowEnd = Math.floor(bufferLength * 0.1); // 低頻 0-10%
        const midEnd = Math.floor(bufferLength * 0.5); // 中頻 10-50%
        let lowSum = 0;
        let midSum = 0;
        let highSum = 0;
        let totalSum = 0;
        // 計算各頻段能量
        for(let i = 0; i < bufferLength; i++){
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
        if (volume > config.beatDetectionThreshold * 0.5 && now - lastBeatTimeRef.current > config.beatDetectionDelay) {
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
    const loadAudio = (source)=>{
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
        let url;
        if (typeof source === 'string') {
            url = source;
            console.log(`加載音頻URL: ${url}`);
        } else {
            // 處理文件對象
            url = URL.createObjectURL(source);
            console.log(`從文件創建Blob URL: ${url}, 文件類型: ${source.type}`);
        }
        // 添加音頻加載事件監聽器
        const loadStartHandler = ()=>console.log('音頻開始加載');
        const loadedMetadataHandler = ()=>console.log('音頻元數據已加載');
        const canPlayHandler = ()=>console.log('音頻可以開始播放');
        const errorHandler = (e)=>console.error('音頻加載錯誤:', e);
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
        setTimeout(()=>{
            if (audioElementRef.current) {
                audioElementRef.current.removeEventListener('loadstart', loadStartHandler);
                audioElementRef.current.removeEventListener('loadedmetadata', loadedMetadataHandler);
                audioElementRef.current.removeEventListener('canplay', canPlayHandler);
                audioElementRef.current.removeEventListener('error', errorHandler);
            }
        }, 10000);
    };
    // 播放音頻
    const playAudio = async ()=>{
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
            if (audioElementRef.current.readyState < 2) {
                console.log('等待音頻數據加載...');
                // 等待音頻加載到足夠播放的程度
                await new Promise((resolve)=>{
                    const canPlayHandler = ()=>{
                        console.log('音頻可以播放了');
                        audioElementRef.current?.removeEventListener('canplay', canPlayHandler);
                        resolve();
                    };
                    const errorHandler = (e)=>{
                        console.error('音頻加載錯誤:', e);
                        audioElementRef.current?.removeEventListener('error', errorHandler);
                        resolve(); // 即使有錯誤也解析，以避免卡住
                    };
                    audioElementRef.current.addEventListener('canplay', canPlayHandler);
                    audioElementRef.current.addEventListener('error', errorHandler);
                    // 添加超時，避免無限等待
                    setTimeout(()=>{
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
                cancelAnimationFrame(animationFrameRef.current);
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
    const pauseAudio = ()=>{
        if (!audioElementRef.current) return;
        audioElementRef.current.pause();
        // 停止分析
        if (animationFrameRef.current) {
            cancelAnimationFrame(animationFrameRef.current);
        }
    };
    // 清理函數
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useAudioAnalyzer.useEffect": ()=>{
            return ({
                "useAudioAnalyzer.useEffect": ()=>{
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
                }
            })["useAudioAnalyzer.useEffect"];
        }
    }["useAudioAnalyzer.useEffect"], [
        audioSource
    ]);
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
_s(useAudioAnalyzer, "PTG/df5DLR7MVv9DM79pmM+2E3A=");
const __TURBOPACK__default__export__ = useAudioAnalyzer;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/components/ui/AudioPlayer.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>AudioPlayer)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$store$2f$usePlayerStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/store/usePlayerStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$hooks$2f$useAudioAnalyzer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/hooks/useAudioAnalyzer.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
// 格式化時間 (秒 -> mm:ss)
const formatTime = (seconds)=>{
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
};
function AudioPlayer() {
    _s();
    // 文件上傳 ref
    const fileInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // 播放器狀態
    const { audioFile, audioUrl, isPlaying, volume, currentTime, duration, setIsPlaying, setCurrentTime, setDuration, setAnalysisData, setAudioFile } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$store$2f$usePlayerStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePlayerStore"])();
    // 音頻分析器 hook
    const { loadAudio, playAudio, pauseAudio, analysisData, audioElement } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$hooks$2f$useAudioAnalyzer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAudioAnalyzer"])({
        fftSize: 2048,
        beatDetectionThreshold: 1.2
    });
    // 使用ref來追蹤上次更新時間，用於限制更新頻率
    const lastUpdateTimeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    // 進度更新
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AudioPlayer.useEffect": ()=>{
            if (!audioElement) return;
            // 設置音量
            audioElement.volume = volume;
            // 時間更新事件
            const handleTimeUpdate = {
                "AudioPlayer.useEffect.handleTimeUpdate": ()=>{
                    setCurrentTime(audioElement.currentTime);
                }
            }["AudioPlayer.useEffect.handleTimeUpdate"];
            // 持續時間變更事件
            const handleDurationChange = {
                "AudioPlayer.useEffect.handleDurationChange": ()=>{
                    setDuration(audioElement.duration || 0);
                }
            }["AudioPlayer.useEffect.handleDurationChange"];
            // 添加事件監聽
            audioElement.addEventListener('timeupdate', handleTimeUpdate);
            audioElement.addEventListener('durationchange', handleDurationChange);
            return ({
                "AudioPlayer.useEffect": ()=>{
                    // 移除事件監聽
                    audioElement.removeEventListener('timeupdate', handleTimeUpdate);
                    audioElement.removeEventListener('durationchange', handleDurationChange);
                }
            })["AudioPlayer.useEffect"];
        }
    }["AudioPlayer.useEffect"], [
        audioElement,
        setCurrentTime,
        setDuration,
        volume
    ]);
    // 更新分析數據 (使用節流來減少更新頻率)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AudioPlayer.useEffect": ()=>{
            if (analysisData) {
                const now = Date.now();
                // 每50ms最多更新一次，減少不必要的狀態更新
                if (now - lastUpdateTimeRef.current > 50) {
                    setAnalysisData(analysisData);
                    lastUpdateTimeRef.current = now;
                }
            }
        }
    }["AudioPlayer.useEffect"], [
        analysisData,
        setAnalysisData
    ]);
    // 處理文件上傳
    const handleFileUpload = (e)=>{
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
        setTimeout(()=>{
            // 設置音頻文件
            setAudioFile(file);
            console.log(`文件已設置: ${file.name}`);
        }, 100);
    };
    // 處理播放/暫停點擊
    const handlePlayPause = ()=>{
        if (!audioUrl) {
            console.log('沒有可播放的音頻文件');
            return;
        }
        console.log(`切換播放狀態: ${!isPlaying ? '播放' : '暫停'}`);
        setIsPlaying(!isPlaying);
    };
    // 處理上傳按鈕點擊
    const handleUploadClick = ()=>{
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };
    // 處理滑塊變化
    const handleSeek = (e)=>{
        const newTime = parseFloat(e.target.value);
        if (audioElement) {
            audioElement.currentTime = newTime;
            setCurrentTime(newTime);
        }
    };
    // 加載音頻文件
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AudioPlayer.useEffect": ()=>{
            if (audioUrl) {
                console.log(`準備加載音頻: ${audioUrl}`);
                // 確保先停止之前的播放
                pauseAudio();
                // 延遲加載，避免冲突
                const loadTimer = setTimeout({
                    "AudioPlayer.useEffect.loadTimer": ()=>{
                        console.log(`加載音頻: ${audioUrl}`);
                        loadAudio(audioUrl);
                    }
                }["AudioPlayer.useEffect.loadTimer"], 300); // 增加延時以確保前一個操作完成
                return ({
                    "AudioPlayer.useEffect": ()=>clearTimeout(loadTimer)
                })["AudioPlayer.useEffect"];
            }
        }
    }["AudioPlayer.useEffect"], [
        audioUrl,
        loadAudio,
        pauseAudio
    ]);
    // 自動播放
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AudioPlayer.useEffect": ()=>{
            // 當音頻加載完成後自動播放一次
            if (audioUrl && duration > 0 && !isPlaying) {
                console.log('音頻已加載完成，嘗試自動播放');
                setIsPlaying(true);
            }
        }
    }["AudioPlayer.useEffect"], [
        audioUrl,
        duration,
        isPlaying,
        setIsPlaying
    ]);
    // 播放/暫停控制
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AudioPlayer.useEffect": ()=>{
            if (isPlaying) {
                console.log('播放控制: 播放');
                playAudio();
            } else {
                console.log('播放控制: 暫停');
                pauseAudio();
            }
        }
    }["AudioPlayer.useEffect"], [
        isPlaying,
        playAudio,
        pauseAudio
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        className: "player-container w-full max-w-3xl p-5 text-white",
        initial: {
            opacity: 0,
            y: 20
        },
        animate: {
            opacity: 1,
            y: 0
        },
        transition: {
            duration: 0.5
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "file",
                ref: fileInputRef,
                onChange: handleFileUpload,
                accept: "audio/*",
                className: "hidden"
            }, void 0, false, {
                fileName: "[project]/src/app/components/ui/AudioPlayer.tsx",
                lineNumber: 188,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between items-center mb-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400",
                                children: audioFile ? audioFile.name.length > 30 ? audioFile.name.substring(0, 30) + '...' : audioFile.name : '無音樂文件'
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/ui/AudioPlayer.tsx",
                                lineNumber: 199,
                                columnNumber: 11
                            }, this),
                            audioFile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs text-gray-400 mt-1",
                                children: [
                                    audioFile.type.replace('audio/', ''),
                                    " · ",
                                    Math.round(audioFile.size / 1024),
                                    " KB"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/ui/AudioPlayer.tsx",
                                lineNumber: 206,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/ui/AudioPlayer.tsx",
                        lineNumber: 198,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                        onClick: handleUploadClick,
                        className: "btn-glow px-4 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full text-sm font-medium shadow-lg hover:shadow-purple-600/20",
                        whileHover: {
                            scale: 1.05
                        },
                        whileTap: {
                            scale: 0.98
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    className: "h-4 w-4 mr-1.5",
                                    fill: "none",
                                    viewBox: "0 0 24 24",
                                    stroke: "currentColor",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: 2,
                                        d: "M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/ui/AudioPlayer.tsx",
                                        lineNumber: 219,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/ui/AudioPlayer.tsx",
                                    lineNumber: 218,
                                    columnNumber: 13
                                }, this),
                                "上傳音頻"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/ui/AudioPlayer.tsx",
                            lineNumber: 217,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/ui/AudioPlayer.tsx",
                        lineNumber: 211,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/ui/AudioPlayer.tsx",
                lineNumber: 197,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-5 relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-16 w-full flex items-end gap-0.5 rounded-lg overflow-hidden bg-black/20 backdrop-blur-sm p-1",
                        children: analysisData ? Array.from({
                            length: 64
                        }).map((_, i)=>{
                            // 從頻譜數據中抽樣
                            const index = Math.floor(i * (analysisData.frequencyData.length / 64));
                            const value = analysisData.frequencyData[index] / 255;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                className: `flex-1 rounded-t ${i % 2 === 0 ? 'bg-gradient-to-t from-indigo-600 to-purple-500' : 'bg-gradient-to-t from-blue-600 to-indigo-500'}`,
                                style: {
                                    height: `${Math.max(5, value * 100)}%`,
                                    animationDelay: `${i * 0.01}s`
                                },
                                initial: {
                                    height: '5%'
                                },
                                animate: {
                                    height: `${Math.max(5, value * 100)}%`
                                },
                                transition: {
                                    duration: 0.1
                                }
                            }, i, false, {
                                fileName: "[project]/src/app/components/ui/AudioPlayer.tsx",
                                lineNumber: 236,
                                columnNumber: 17
                            }, this);
                        }) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full h-full flex justify-center items-center text-xs text-gray-400",
                            children: "等待音頻..."
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/ui/AudioPlayer.tsx",
                            lineNumber: 250,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/ui/AudioPlayer.tsx",
                        lineNumber: 228,
                        columnNumber: 9
                    }, this),
                    analysisData && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-2 right-3 flex gap-2 text-xs",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "px-2 py-1 rounded-full bg-black/30 text-blue-300",
                                children: [
                                    "低頻: ",
                                    Math.round(analysisData.lowEnergy * 100),
                                    "%"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/ui/AudioPlayer.tsx",
                                lineNumber: 259,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "px-2 py-1 rounded-full bg-black/30 text-indigo-300",
                                children: [
                                    "中頻: ",
                                    Math.round(analysisData.midEnergy * 100),
                                    "%"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/ui/AudioPlayer.tsx",
                                lineNumber: 262,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "px-2 py-1 rounded-full bg-black/30 text-purple-300",
                                children: [
                                    "高頻: ",
                                    Math.round(analysisData.highEnergy * 100),
                                    "%"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/ui/AudioPlayer.tsx",
                                lineNumber: 265,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/ui/AudioPlayer.tsx",
                        lineNumber: 258,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/ui/AudioPlayer.tsx",
                lineNumber: 227,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "range",
                        min: 0,
                        max: duration || 100,
                        value: currentTime,
                        onChange: handleSeek,
                        className: "w-full",
                        style: {
                            backgroundSize: `${currentTime / (duration || 1) * 100}% 100%`,
                            backgroundImage: 'linear-gradient(to right, #8b5cf6, #3b82f6)'
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/ui/AudioPlayer.tsx",
                        lineNumber: 274,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between text-xs text-gray-300 mt-1 px-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: formatTime(currentTime)
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/ui/AudioPlayer.tsx",
                                lineNumber: 287,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: formatTime(duration)
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/ui/AudioPlayer.tsx",
                                lineNumber: 288,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/ui/AudioPlayer.tsx",
                        lineNumber: 286,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/ui/AudioPlayer.tsx",
                lineNumber: 273,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-center items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                        onClick: handlePlayPause,
                        disabled: !audioUrl,
                        whileHover: {
                            scale: 1.1
                        },
                        whileTap: {
                            scale: 0.95
                        },
                        className: `
            w-14 h-14 rounded-full flex items-center justify-center shadow-xl
            ${audioUrl ? 'bg-gradient-to-br from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700' : 'bg-gray-700/50 cursor-not-allowed'}
            transition-all duration-300
          `,
                        children: isPlaying ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "24",
                            height: "24",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            stroke: "currentColor",
                            strokeWidth: "2.5",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                    x: "6",
                                    y: "4",
                                    width: "4",
                                    height: "16"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/ui/AudioPlayer.tsx",
                                    lineNumber: 310,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                    x: "14",
                                    y: "4",
                                    width: "4",
                                    height: "16"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/ui/AudioPlayer.tsx",
                                    lineNumber: 311,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/ui/AudioPlayer.tsx",
                            lineNumber: 309,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "24",
                            height: "24",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            stroke: "currentColor",
                            strokeWidth: "2.5",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                                points: "5 3 19 12 5 21 5 3"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/ui/AudioPlayer.tsx",
                                lineNumber: 315,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/ui/AudioPlayer.tsx",
                            lineNumber: 314,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/ui/AudioPlayer.tsx",
                        lineNumber: 294,
                        columnNumber: 9
                    }, this),
                    analysisData && analysisData.beat && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "absolute w-24 h-24 rounded-full",
                        initial: {
                            opacity: 0.8,
                            scale: 0.8
                        },
                        animate: {
                            opacity: 0,
                            scale: 1.5
                        },
                        transition: {
                            duration: 0.4
                        },
                        style: {
                            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.3) 0%, rgba(59, 130, 246, 0) 70%)'
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/ui/AudioPlayer.tsx",
                        lineNumber: 322,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/ui/AudioPlayer.tsx",
                lineNumber: 293,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4 hidden sm:flex items-center justify-center gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "16",
                        height: "16",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "2",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        className: "text-gray-400",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                                points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/ui/AudioPlayer.tsx",
                                lineNumber: 337,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M15.54 8.46a5 5 0 0 1 0 7.07"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/ui/AudioPlayer.tsx",
                                lineNumber: 338,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M19.07 4.93a10 10 0 0 1 0 14.14"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/ui/AudioPlayer.tsx",
                                lineNumber: 339,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/ui/AudioPlayer.tsx",
                        lineNumber: 336,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "range",
                        min: 0,
                        max: 1,
                        step: 0.01,
                        value: volume,
                        onChange: (e)=>audioElement && (audioElement.volume = parseFloat(e.target.value)),
                        className: "w-24",
                        style: {
                            backgroundSize: `${volume * 100}% 100%`,
                            backgroundImage: 'linear-gradient(to right, #8b5cf6, #3b82f6)'
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/ui/AudioPlayer.tsx",
                        lineNumber: 341,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/ui/AudioPlayer.tsx",
                lineNumber: 335,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/ui/AudioPlayer.tsx",
        lineNumber: 181,
        columnNumber: 5
    }, this);
}
_s(AudioPlayer, "VnSHNYJlL54NVayQgaM6uAaZk+Q=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$store$2f$usePlayerStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePlayerStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$hooks$2f$useAudioAnalyzer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAudioAnalyzer"]
    ];
});
_c = AudioPlayer;
var _c;
__turbopack_context__.k.register(_c, "AudioPlayer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/components/ui/ThemeSwitcher.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>ThemeSwitcher)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$store$2f$usePlayerStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/store/usePlayerStore.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
// 主題選項配置
const THEMES = [
    {
        id: 'abstract-geometry',
        name: '幾何抽象',
        description: '極簡線條與幾何圖形',
        color: 'from-indigo-500 to-purple-600',
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            className: "w-6 h-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                    points: "12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"
                }, void 0, false, {
                    fileName: "[project]/src/app/components/ui/ThemeSwitcher.tsx",
                    lineNumber: 16,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "12",
                    y1: "22",
                    x2: "12",
                    y2: "15.5"
                }, void 0, false, {
                    fileName: "[project]/src/app/components/ui/ThemeSwitcher.tsx",
                    lineNumber: 17,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                    points: "22 8.5 12 15.5 2 8.5"
                }, void 0, false, {
                    fileName: "[project]/src/app/components/ui/ThemeSwitcher.tsx",
                    lineNumber: 18,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/ui/ThemeSwitcher.tsx",
            lineNumber: 15,
            columnNumber: 7
        }, this)
    },
    {
        id: 'cyberpunk-neon',
        name: '賽博朋克',
        description: '霓虹燈與未來感',
        color: 'from-pink-500 to-cyan-400',
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            className: "w-6 h-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M5.67 19.74A7.97 7.97 0 0 0 12 22a7.97 7.97 0 0 0 6.33-2.26c.88-.83.67-2.27-.42-2.83L12 13l-5.91 3.91c-1.09.56-1.3 2-.42 2.83Z"
                }, void 0, false, {
                    fileName: "[project]/src/app/components/ui/ThemeSwitcher.tsx",
                    lineNumber: 29,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M19.14 4.93A7.97 7.97 0 0 0 12 2a7.97 7.97 0 0 0-7.14 2.93c-.85.86-.64 2.28.43 2.85L12 11l6.71-3.22c1.07-.57 1.28-1.99.43-2.85Z"
                }, void 0, false, {
                    fileName: "[project]/src/app/components/ui/ThemeSwitcher.tsx",
                    lineNumber: 30,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/ui/ThemeSwitcher.tsx",
            lineNumber: 28,
            columnNumber: 7
        }, this)
    },
    {
        id: 'retro-wave',
        name: '復古波浪',
        description: '80年代復古風格',
        color: 'from-rose-500 to-indigo-700',
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            className: "w-6 h-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "m8 2 10 20"
                }, void 0, false, {
                    fileName: "[project]/src/app/components/ui/ThemeSwitcher.tsx",
                    lineNumber: 41,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M18 2 8 22"
                }, void 0, false, {
                    fileName: "[project]/src/app/components/ui/ThemeSwitcher.tsx",
                    lineNumber: 42,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M2 12h20"
                }, void 0, false, {
                    fileName: "[project]/src/app/components/ui/ThemeSwitcher.tsx",
                    lineNumber: 43,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/ui/ThemeSwitcher.tsx",
            lineNumber: 40,
            columnNumber: 7
        }, this)
    },
    {
        id: 'techno-data',
        name: '科技數據',
        description: '數據驅動可視化',
        color: 'from-emerald-500 to-cyan-500',
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            className: "w-6 h-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M10 2v7.31"
                }, void 0, false, {
                    fileName: "[project]/src/app/components/ui/ThemeSwitcher.tsx",
                    lineNumber: 54,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M14 9.3V1.99"
                }, void 0, false, {
                    fileName: "[project]/src/app/components/ui/ThemeSwitcher.tsx",
                    lineNumber: 55,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M8.5 2h7"
                }, void 0, false, {
                    fileName: "[project]/src/app/components/ui/ThemeSwitcher.tsx",
                    lineNumber: 56,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M14 9.3a6 6 0 1 1-4 0"
                }, void 0, false, {
                    fileName: "[project]/src/app/components/ui/ThemeSwitcher.tsx",
                    lineNumber: 57,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M5.58 16.5h12.85"
                }, void 0, false, {
                    fileName: "[project]/src/app/components/ui/ThemeSwitcher.tsx",
                    lineNumber: 58,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/ui/ThemeSwitcher.tsx",
            lineNumber: 53,
            columnNumber: 7
        }, this)
    }
];
function ThemeSwitcher() {
    _s();
    const { currentTheme, setCurrentTheme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$store$2f$usePlayerStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePlayerStore"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        className: "theme-selector",
        initial: {
            opacity: 0,
            y: 20
        },
        animate: {
            opacity: 1,
            y: 0
        },
        transition: {
            duration: 0.5,
            delay: 0.2
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4 pb-2 flex justify-between items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-base font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400",
                        children: "視覺主題風格"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/ui/ThemeSwitcher.tsx",
                        lineNumber: 75,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-xs text-gray-400",
                        children: "4種風格"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/ui/ThemeSwitcher.tsx",
                        lineNumber: 76,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/ui/ThemeSwitcher.tsx",
                lineNumber: 74,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-3 pb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 gap-2",
                        children: THEMES.map((theme)=>{
                            const isActive = currentTheme === theme.id;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                                onClick: ()=>setCurrentTheme(theme.id),
                                className: `
                  theme-button relative rounded-lg p-3
                  ${isActive ? 'bg-gradient-to-br ' + theme.color + ' shadow-lg' : 'bg-black/20 hover:bg-black/30'}
                `,
                                whileHover: {
                                    scale: 1.03
                                },
                                whileTap: {
                                    scale: 0.97
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col items-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `mb-1.5 ${isActive ? 'text-white' : 'text-gray-300'}`,
                                                children: theme.icon
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/ui/ThemeSwitcher.tsx",
                                                lineNumber: 99,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `text-sm font-medium ${isActive ? 'text-white' : 'text-gray-300'}`,
                                                children: theme.name
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/ui/ThemeSwitcher.tsx",
                                                lineNumber: 102,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `text-xs mt-0.5 ${isActive ? 'text-white/80' : 'text-gray-500'}`,
                                                children: theme.description
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/ui/ThemeSwitcher.tsx",
                                                lineNumber: 105,
                                                columnNumber: 19
                                            }, this),
                                            isActive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                className: "absolute top-1 right-1 h-2 w-2 rounded-full bg-white",
                                                initial: {
                                                    scale: 0
                                                },
                                                animate: {
                                                    scale: 1
                                                },
                                                layoutId: "activeIndicator"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/ui/ThemeSwitcher.tsx",
                                                lineNumber: 110,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/components/ui/ThemeSwitcher.tsx",
                                        lineNumber: 98,
                                        columnNumber: 17
                                    }, this),
                                    isActive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        className: "absolute inset-0 rounded-lg",
                                        initial: {
                                            opacity: 0
                                        },
                                        animate: {
                                            opacity: [
                                                0.3,
                                                0.1,
                                                0.3
                                            ],
                                            boxShadow: [
                                                `0 0 0 1px rgba(255, 255, 255, 0.1)`,
                                                `0 0 0 3px rgba(255, 255, 255, 0.05)`,
                                                `0 0 0 1px rgba(255, 255, 255, 0.1)`
                                            ]
                                        },
                                        transition: {
                                            repeat: Infinity,
                                            duration: 3,
                                            ease: "easeInOut"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/ui/ThemeSwitcher.tsx",
                                        lineNumber: 120,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, theme.id, true, {
                                fileName: "[project]/src/app/components/ui/ThemeSwitcher.tsx",
                                lineNumber: 85,
                                columnNumber: 15
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/ui/ThemeSwitcher.tsx",
                        lineNumber: 80,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-4 text-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-xs text-gray-400 inline-flex items-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    width: "12",
                                    height: "12",
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    stroke: "currentColor",
                                    strokeWidth: "2",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    className: "mr-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                            cx: "12",
                                            cy: "12",
                                            r: "10"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/ui/ThemeSwitcher.tsx",
                                            lineNumber: 146,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                            points: "12 6 12 12 16 14"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/ui/ThemeSwitcher.tsx",
                                            lineNumber: 147,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/components/ui/ThemeSwitcher.tsx",
                                    lineNumber: 145,
                                    columnNumber: 13
                                }, this),
                                "視覺效果會隨著音樂節奏而變化"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/ui/ThemeSwitcher.tsx",
                            lineNumber: 144,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/ui/ThemeSwitcher.tsx",
                        lineNumber: 143,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/ui/ThemeSwitcher.tsx",
                lineNumber: 79,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/ui/ThemeSwitcher.tsx",
        lineNumber: 68,
        columnNumber: 5
    }, this);
}
_s(ThemeSwitcher, "T0lUbK6CiD/uMvNJuSIEvHc1hK4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$store$2f$usePlayerStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePlayerStore"]
    ];
});
_c = ThemeSwitcher;
var _c;
__turbopack_context__.k.register(_c, "ThemeSwitcher");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/components/visualizers/themes/AbstractGeometry.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>AbstractGeometry)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$react$2d$three$2d$fiber$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/react-three-fiber.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$dc44c1b8$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useFrame$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/events-dc44c1b8.esm.js [app-client] (ecmascript) <export C as useFrame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$OrbitControls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/core/OrbitControls.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$shapes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/core/shapes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
;
;
// 粒子系統
function ParticleSystem({ count = 300, lowEnergy, midEnergy }) {
    _s();
    const meshRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const geometryRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // 初始化粒子系統
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ParticleSystem.useEffect": ()=>{
            if (!geometryRef.current) return;
            const positions = new Float32Array(count * 3);
            const colors = new Float32Array(count * 3);
            const sizes = new Float32Array(count);
            for(let i = 0; i < count; i++){
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
            geometryRef.current.setAttribute('position', new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BufferAttribute"](positions, 3));
            geometryRef.current.setAttribute('color', new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BufferAttribute"](colors, 3));
            geometryRef.current.setAttribute('size', new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BufferAttribute"](sizes, 1));
        }
    }["ParticleSystem.useEffect"], [
        count
    ]);
    // 動畫
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$dc44c1b8$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useFrame$3e$__["useFrame"])({
        "ParticleSystem.useFrame": (_state, delta)=>{
            if (!meshRef.current || !geometryRef.current) return;
            // 確保屬性存在
            if (!geometryRef.current.attributes.position || !geometryRef.current.attributes.size || !geometryRef.current.attributes.position.array || !geometryRef.current.attributes.size.array) {
                return;
            }
            // 獲取當前粒子位置
            const positions = geometryRef.current.attributes.position.array;
            const sizes = geometryRef.current.attributes.size.array;
            // 更新粒子位置和大小
            for(let i = 0; i < count; i++){
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
        }
    }["ParticleSystem.useFrame"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("points", {
        ref: meshRef,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("bufferGeometry", {
                ref: geometryRef
            }, void 0, false, {
                fileName: "[project]/src/app/components/visualizers/themes/AbstractGeometry.tsx",
                lineNumber: 94,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pointsMaterial", {
                size: 1.5,
                vertexColors: true,
                transparent: true,
                blending: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AdditiveBlending"],
                depthWrite: false
            }, void 0, false, {
                fileName: "[project]/src/app/components/visualizers/themes/AbstractGeometry.tsx",
                lineNumber: 95,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/visualizers/themes/AbstractGeometry.tsx",
        lineNumber: 93,
        columnNumber: 5
    }, this);
}
_s(ParticleSystem, "7BFQD0VJA8zyjBdpaxyFFEuIizE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$dc44c1b8$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useFrame$3e$__["useFrame"]
    ];
});
_c = ParticleSystem;
// 中央幾何體
function CentralGeometry({ beat, lowEnergy, midEnergy, highEnergy }) {
    _s1();
    const icosaRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const torusRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const knotRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // 動畫
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$dc44c1b8$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useFrame$3e$__["useFrame"])({
        "CentralGeometry.useFrame": (_state, delta)=>{
            if (!icosaRef.current || !torusRef.current || !knotRef.current) return;
            // 節拍觸發動畫
            if (beat) {
                icosaRef.current.scale.set(1 + highEnergy * 0.5, 1 + highEnergy * 0.5, 1 + highEnergy * 0.5);
            } else {
                // 緩慢恢復原大小
                icosaRef.current.scale.x = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MathUtils"].lerp(icosaRef.current.scale.x, 1, delta * 2);
                icosaRef.current.scale.y = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MathUtils"].lerp(icosaRef.current.scale.y, 1, delta * 2);
                icosaRef.current.scale.z = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MathUtils"].lerp(icosaRef.current.scale.z, 1, delta * 2);
            }
            // 旋轉
            icosaRef.current.rotation.x += delta * 0.2 * (1 + midEnergy);
            icosaRef.current.rotation.y += delta * 0.3 * (1 + midEnergy);
            torusRef.current.rotation.x += delta * 0.3 * (1 + lowEnergy);
            torusRef.current.rotation.y += delta * 0.2 * (1 + lowEnergy);
            knotRef.current.rotation.x -= delta * 0.2 * (1 + highEnergy);
            knotRef.current.rotation.z -= delta * 0.3 * (1 + highEnergy);
        }
    }["CentralGeometry.useFrame"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$shapes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icosahedron"], {
                ref: icosaRef,
                args: [
                    1,
                    1
                ],
                position: [
                    0,
                    0,
                    0
                ],
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshBasicMaterial", {
                    wireframe: true,
                    color: "#8b5cf6"
                }, void 0, false, {
                    fileName: "[project]/src/app/components/visualizers/themes/AbstractGeometry.tsx",
                    lineNumber: 154,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/components/visualizers/themes/AbstractGeometry.tsx",
                lineNumber: 153,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$shapes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Torus"], {
                ref: torusRef,
                args: [
                    2,
                    0.2,
                    16,
                    50
                ],
                position: [
                    0,
                    0,
                    0
                ],
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshBasicMaterial", {
                    wireframe: true,
                    color: "#6366f1"
                }, void 0, false, {
                    fileName: "[project]/src/app/components/visualizers/themes/AbstractGeometry.tsx",
                    lineNumber: 161,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/components/visualizers/themes/AbstractGeometry.tsx",
                lineNumber: 160,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$shapes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TorusKnot"], {
                ref: knotRef,
                args: [
                    1.5,
                    0.1,
                    128,
                    32
                ],
                position: [
                    0,
                    0,
                    0
                ],
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshBasicMaterial", {
                    wireframe: true,
                    color: "#3b82f6"
                }, void 0, false, {
                    fileName: "[project]/src/app/components/visualizers/themes/AbstractGeometry.tsx",
                    lineNumber: 168,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/components/visualizers/themes/AbstractGeometry.tsx",
                lineNumber: 167,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/visualizers/themes/AbstractGeometry.tsx",
        lineNumber: 152,
        columnNumber: 5
    }, this);
}
_s1(CentralGeometry, "XAI+nyyFFyGquYYl1TpKAJQxG8k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$dc44c1b8$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useFrame$3e$__["useFrame"]
    ];
});
_c1 = CentralGeometry;
// 場景容器
function Scene({ analysisData }) {
    // 添加數據驗證，確保所有必要的屬性都存在
    const validData = analysisData && typeof analysisData.lowEnergy === 'number' && typeof analysisData.midEnergy === 'number' && typeof analysisData.highEnergy === 'number' && typeof analysisData.beat === 'boolean' && analysisData.frequencyData instanceof Uint8Array;
    // 如果數據無效，提供默認值
    const safeData = validData ? analysisData : {
        lowEnergy: 0,
        midEnergy: 0,
        highEnergy: 0,
        beat: false,
        frequencyData: new Uint8Array(1024).fill(0)
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ambientLight", {
                intensity: 0.5
            }, void 0, false, {
                fileName: "[project]/src/app/components/visualizers/themes/AbstractGeometry.tsx",
                lineNumber: 198,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ParticleSystem, {
                count: 300,
                lowEnergy: safeData.lowEnergy,
                midEnergy: safeData.midEnergy
            }, void 0, false, {
                fileName: "[project]/src/app/components/visualizers/themes/AbstractGeometry.tsx",
                lineNumber: 199,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CentralGeometry, {
                beat: safeData.beat,
                lowEnergy: safeData.lowEnergy,
                midEnergy: safeData.midEnergy,
                highEnergy: safeData.highEnergy
            }, void 0, false, {
                fileName: "[project]/src/app/components/visualizers/themes/AbstractGeometry.tsx",
                lineNumber: 204,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$OrbitControls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OrbitControls"], {
                enableZoom: false,
                enablePan: false,
                autoRotate: true,
                autoRotateSpeed: 0.5
            }, void 0, false, {
                fileName: "[project]/src/app/components/visualizers/themes/AbstractGeometry.tsx",
                lineNumber: 210,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_c2 = Scene;
function AbstractGeometry({ analysisData }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$react$2d$three$2d$fiber$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Canvas"], {
        className: "w-full h-full",
        camera: {
            position: [
                0,
                0,
                15
            ],
            fov: 60
        },
        style: {
            background: 'radial-gradient(circle at center, #1e1b4b 0%, #030712 100%)'
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Scene, {
            analysisData: analysisData
        }, void 0, false, {
            fileName: "[project]/src/app/components/visualizers/themes/AbstractGeometry.tsx",
            lineNumber: 225,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/components/visualizers/themes/AbstractGeometry.tsx",
        lineNumber: 218,
        columnNumber: 5
    }, this);
}
_c3 = AbstractGeometry;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "ParticleSystem");
__turbopack_context__.k.register(_c1, "CentralGeometry");
__turbopack_context__.k.register(_c2, "Scene");
__turbopack_context__.k.register(_c3, "AbstractGeometry");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/components/visualizers/themes/CyberpunkNeon.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>CyberpunkNeon)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$react$2d$three$2d$fiber$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/react-three-fiber.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$dc44c1b8$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useFrame$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/events-dc44c1b8.esm.js [app-client] (ecmascript) <export C as useFrame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$dc44c1b8$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__A__as__useThree$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/events-dc44c1b8.esm.js [app-client] (ecmascript) <export A as useThree>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$PerspectiveCamera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/core/PerspectiveCamera.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/core/Line.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$shapes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/core/shapes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature();
'use client';
;
;
;
;
// 霓虹網格
function NeonGrid({ lowEnergy, beat }) {
    _s();
    const linesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { size } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$dc44c1b8$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__A__as__useThree$3e$__["useThree"])();
    // 創建網格線
    const gridSize = 20;
    const gridDivisions = 20;
    const stepSize = gridSize / gridDivisions;
    const horizontalLines = [];
    const verticalLines = [];
    for(let i = 0; i <= gridDivisions; i++){
        const pos = -gridSize / 2 + i * stepSize;
        // 水平線
        const hPoints = [];
        hPoints.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](-gridSize / 2, 0, pos));
        hPoints.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](gridSize / 2, 0, pos));
        horizontalLines.push(hPoints);
        // 垂直線
        const vPoints = [];
        vPoints.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](pos, 0, -gridSize / 2));
        vPoints.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](pos, 0, gridSize / 2));
        verticalLines.push(vPoints);
    }
    // 動畫
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$dc44c1b8$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useFrame$3e$__["useFrame"])({
        "NeonGrid.useFrame": (_state, delta)=>{
            if (!linesRef.current) return;
            // 節拍時脈衝效果
            if (beat) {
                linesRef.current.scale.set(1.05, 1, 1.05);
            } else {
                linesRef.current.scale.x = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MathUtils"].lerp(linesRef.current.scale.x, 1, delta * 2);
                linesRef.current.scale.z = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MathUtils"].lerp(linesRef.current.scale.z, 1, delta * 2);
            }
            // 隨著低頻脈動
            linesRef.current.position.y = -5 - lowEnergy * 2;
        }
    }["NeonGrid.useFrame"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        ref: linesRef,
        rotation: [
            Math.PI / 2,
            0,
            0
        ],
        children: [
            horizontalLines.map((points, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Line"], {
                    points: points,
                    color: "#FF00FF",
                    lineWidth: 1,
                    transparent: true,
                    opacity: 0.6
                }, `h-${idx}`, false, {
                    fileName: "[project]/src/app/components/visualizers/themes/CyberpunkNeon.tsx",
                    lineNumber: 64,
                    columnNumber: 9
                }, this)),
            verticalLines.map((points, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Line"], {
                    points: points,
                    color: "#00FFFF",
                    lineWidth: 1,
                    transparent: true,
                    opacity: 0.6
                }, `v-${idx}`, false, {
                    fileName: "[project]/src/app/components/visualizers/themes/CyberpunkNeon.tsx",
                    lineNumber: 76,
                    columnNumber: 9
                }, this))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/visualizers/themes/CyberpunkNeon.tsx",
        lineNumber: 61,
        columnNumber: 5
    }, this);
}
_s(NeonGrid, "ls4k59IWjeIL3v6RpHww72aUMhk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$dc44c1b8$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__A__as__useThree$3e$__["useThree"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$dc44c1b8$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useFrame$3e$__["useFrame"]
    ];
});
_c = NeonGrid;
// 霓虹建築
function NeonBuildings({ frequencyData, highEnergy }) {
    _s1();
    const buildingsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // 動畫
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$dc44c1b8$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useFrame$3e$__["useFrame"])({
        "NeonBuildings.useFrame": (_state, delta)=>{
            if (!buildingsRef.current) return;
            // 旋轉
            buildingsRef.current.rotation.y += delta * 0.1;
        }
    }["NeonBuildings.useFrame"]);
    // 取樣頻譜數據
    const sampleCount = 32;
    const sampleData = [];
    for(let i = 0; i < sampleCount; i++){
        const index = Math.floor(i * (frequencyData.length / sampleCount));
        const value = frequencyData[index] / 255;
        sampleData.push(value);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        ref: buildingsRef,
        position: [
            0,
            -5,
            0
        ],
        children: sampleData.map((value, idx)=>{
            const angle = idx / sampleCount * Math.PI * 2;
            const radius = 10;
            const x = Math.cos(angle) * radius;
            const z = Math.sin(angle) * radius;
            // 建築高度由頻譜數據決定
            const height = 0.5 + value * 8 + highEnergy * 3;
            // 交替顏色
            const color = idx % 2 === 0 ? "#FF00FF" : "#00FFFF";
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$shapes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Box"], {
                args: [
                    0.8,
                    height,
                    0.8
                ],
                position: [
                    x,
                    height / 2,
                    z
                ],
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshBasicMaterial", {
                    color: color,
                    transparent: true,
                    opacity: 0.7,
                    wireframe: idx % 3 === 0
                }, void 0, false, {
                    fileName: "[project]/src/app/components/visualizers/themes/CyberpunkNeon.tsx",
                    lineNumber: 137,
                    columnNumber: 13
                }, this)
            }, idx, false, {
                fileName: "[project]/src/app/components/visualizers/themes/CyberpunkNeon.tsx",
                lineNumber: 132,
                columnNumber: 11
            }, this);
        })
    }, void 0, false, {
        fileName: "[project]/src/app/components/visualizers/themes/CyberpunkNeon.tsx",
        lineNumber: 118,
        columnNumber: 5
    }, this);
}
_s1(NeonBuildings, "KrhIbMEqdrjq2I8r1ATcETDb10E=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$dc44c1b8$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useFrame$3e$__["useFrame"]
    ];
});
_c1 = NeonBuildings;
// 霓虹光環
function NeonHalos({ midEnergy, beat }) {
    _s2();
    const halosRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // 動畫
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$dc44c1b8$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useFrame$3e$__["useFrame"])({
        "NeonHalos.useFrame": (_state, delta)=>{
            if (!halosRef.current) return;
            // 每個子元素旋轉
            halosRef.current.children.forEach({
                "NeonHalos.useFrame": (child, idx)=>{
                    const mesh = child;
                    const rotSpeed = (idx + 1) * 0.1 * (1 + midEnergy);
                    mesh.rotation.x += delta * rotSpeed;
                    mesh.rotation.y += delta * rotSpeed * 0.7;
                    // 節拍反應
                    if (beat) {
                        mesh.scale.set(1.1, 1.1, 1.1);
                    } else {
                        mesh.scale.x = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MathUtils"].lerp(mesh.scale.x, 1, delta * 2);
                        mesh.scale.y = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MathUtils"].lerp(mesh.scale.y, 1, delta * 2);
                        mesh.scale.z = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MathUtils"].lerp(mesh.scale.z, 1, delta * 2);
                    }
                }
            }["NeonHalos.useFrame"]);
        }
    }["NeonHalos.useFrame"]);
    // 生成不同大小的環
    const halos = [];
    const count = 5;
    for(let i = 0; i < count; i++){
        const radius = 2 + i * 1.5;
        const tubeRadius = 0.03 + i * 0.01;
        halos.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$shapes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Torus"], {
            args: [
                radius,
                tubeRadius,
                16,
                100
            ],
            rotation: [
                Math.random() * Math.PI,
                Math.random() * Math.PI,
                0
            ],
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshBasicMaterial", {
                color: i % 2 === 0 ? "#FF00FF" : "#00FFFF",
                transparent: true,
                opacity: 0.8
            }, void 0, false, {
                fileName: "[project]/src/app/components/visualizers/themes/CyberpunkNeon.tsx",
                lineNumber: 197,
                columnNumber: 9
            }, this)
        }, i, false, {
            fileName: "[project]/src/app/components/visualizers/themes/CyberpunkNeon.tsx",
            lineNumber: 192,
            columnNumber: 7
        }, this));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        ref: halosRef,
        position: [
            0,
            0,
            0
        ],
        children: halos
    }, void 0, false, {
        fileName: "[project]/src/app/components/visualizers/themes/CyberpunkNeon.tsx",
        lineNumber: 207,
        columnNumber: 5
    }, this);
}
_s2(NeonHalos, "V/B6vxzzmpNKtviz/Tud0m57Zi4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$dc44c1b8$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useFrame$3e$__["useFrame"]
    ];
});
_c2 = NeonHalos;
// 場景容器
function Scene({ analysisData }) {
    _s3();
    const cameraRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // 相機動畫
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$dc44c1b8$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useFrame$3e$__["useFrame"])({
        "Scene.useFrame": (_state, delta)=>{
            if (!cameraRef.current) return;
            // 隨著中頻調整相機視角
            cameraRef.current.position.y = 5 + analysisData.midEnergy * 3;
            // 緩慢晃動
            cameraRef.current.position.x = Math.sin(Date.now() * 0.0005) * 2;
            cameraRef.current.position.z = 15 + Math.sin(Date.now() * 0.0003) * 3;
        }
    }["Scene.useFrame"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$PerspectiveCamera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PerspectiveCamera"], {
                ref: cameraRef,
                makeDefault: true,
                position: [
                    0,
                    5,
                    15
                ],
                fov: 60
            }, void 0, false, {
                fileName: "[project]/src/app/components/visualizers/themes/CyberpunkNeon.tsx",
                lineNumber: 231,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("hemisphereLight", {
                args: [
                    "#FFFFFF",
                    "#000000",
                    1
                ]
            }, void 0, false, {
                fileName: "[project]/src/app/components/visualizers/themes/CyberpunkNeon.tsx",
                lineNumber: 238,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("fog", {
                attach: "fog",
                args: [
                    "#000000",
                    10,
                    50
                ]
            }, void 0, false, {
                fileName: "[project]/src/app/components/visualizers/themes/CyberpunkNeon.tsx",
                lineNumber: 240,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NeonGrid, {
                lowEnergy: analysisData.lowEnergy,
                beat: analysisData.beat
            }, void 0, false, {
                fileName: "[project]/src/app/components/visualizers/themes/CyberpunkNeon.tsx",
                lineNumber: 242,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NeonBuildings, {
                frequencyData: analysisData.frequencyData,
                highEnergy: analysisData.highEnergy
            }, void 0, false, {
                fileName: "[project]/src/app/components/visualizers/themes/CyberpunkNeon.tsx",
                lineNumber: 247,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NeonHalos, {
                midEnergy: analysisData.midEnergy,
                beat: analysisData.beat
            }, void 0, false, {
                fileName: "[project]/src/app/components/visualizers/themes/CyberpunkNeon.tsx",
                lineNumber: 252,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s3(Scene, "hJVU1VJhV3D7gaub54nOAyWFt8k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$dc44c1b8$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useFrame$3e$__["useFrame"]
    ];
});
_c3 = Scene;
function CyberpunkNeon({ analysisData }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$react$2d$three$2d$fiber$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Canvas"], {
        className: "w-full h-full",
        style: {
            background: 'linear-gradient(to bottom, #000000 0%, #1a0033 100%)'
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Scene, {
            analysisData: analysisData
        }, void 0, false, {
            fileName: "[project]/src/app/components/visualizers/themes/CyberpunkNeon.tsx",
            lineNumber: 269,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/components/visualizers/themes/CyberpunkNeon.tsx",
        lineNumber: 263,
        columnNumber: 5
    }, this);
}
_c4 = CyberpunkNeon;
var _c, _c1, _c2, _c3, _c4;
__turbopack_context__.k.register(_c, "NeonGrid");
__turbopack_context__.k.register(_c1, "NeonBuildings");
__turbopack_context__.k.register(_c2, "NeonHalos");
__turbopack_context__.k.register(_c3, "Scene");
__turbopack_context__.k.register(_c4, "CyberpunkNeon");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/components/visualizers/themes/RetroWave.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>RetroWave)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$react$2d$three$2d$fiber$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/react-three-fiber.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$dc44c1b8$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useFrame$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/events-dc44c1b8.esm.js [app-client] (ecmascript) <export C as useFrame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$PerspectiveCamera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/core/PerspectiveCamera.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Grid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/core/Grid.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$shapes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/core/shapes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/core/Text.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature(), _s4 = __turbopack_context__.k.signature();
'use client';
;
;
;
;
// 太陽效果
function RetroSun({ beat, highEnergy }) {
    _s();
    const sunRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$dc44c1b8$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useFrame$3e$__["useFrame"])({
        "RetroSun.useFrame": (_state, delta)=>{
            if (!sunRef.current) return;
            // 節拍時脈動
            if (beat) {
                sunRef.current.scale.set(1.1, 1.1, 1.1);
            } else {
                sunRef.current.scale.x = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MathUtils"].lerp(sunRef.current.scale.x, 1, delta * 2);
                sunRef.current.scale.y = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MathUtils"].lerp(sunRef.current.scale.y, 1, delta * 2);
                sunRef.current.scale.z = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MathUtils"].lerp(sunRef.current.scale.z, 1, delta * 2);
            }
        }
    }["RetroSun.useFrame"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
        ref: sunRef,
        position: [
            0,
            5,
            -30
        ],
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circleGeometry", {
                args: [
                    8,
                    64
                ]
            }, void 0, false, {
                fileName: "[project]/src/app/components/visualizers/themes/RetroWave.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshBasicMaterial", {
                color: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"]('#ff2975'),
                transparent: true,
                opacity: 0.9
            }, void 0, false, {
                fileName: "[project]/src/app/components/visualizers/themes/RetroWave.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/visualizers/themes/RetroWave.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, this);
}
_s(RetroSun, "QPhTQhJGFKH7vBZVyvXvbDUH9uY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$dc44c1b8$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useFrame$3e$__["useFrame"]
    ];
});
_c = RetroSun;
// 山脈效果
function Mountains({ frequencyData }) {
    _s1();
    const mountainsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // 取樣頻譜數據
    const sampleCount = 128;
    const sampleData = [];
    for(let i = 0; i < sampleCount; i++){
        const index = Math.floor(i * (frequencyData.length / sampleCount));
        const value = frequencyData[index] / 255;
        sampleData.push(value);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        ref: mountainsRef,
        position: [
            0,
            -1,
            -20
        ],
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
                position: [
                    0,
                    0,
                    -15
                ],
                children: sampleData.slice(0, 64).map((value, idx)=>{
                    const width = 0.8;
                    const x = (idx - 32) * width;
                    const height = value * 3 + 1;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$shapes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Box"], {
                        args: [
                            width,
                            height,
                            0.1
                        ],
                        position: [
                            x,
                            height / 2,
                            0
                        ],
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshBasicMaterial", {
                            color: "#4361EE",
                            transparent: true,
                            opacity: 0.9
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/visualizers/themes/RetroWave.tsx",
                            lineNumber: 67,
                            columnNumber: 15
                        }, this)
                    }, `far-${idx}`, false, {
                        fileName: "[project]/src/app/components/visualizers/themes/RetroWave.tsx",
                        lineNumber: 62,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/src/app/components/visualizers/themes/RetroWave.tsx",
                lineNumber: 55,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
                position: [
                    0,
                    0,
                    -5
                ],
                children: sampleData.slice(64, 128).map((value, idx)=>{
                    const width = 0.8;
                    const x = (idx - 32) * width;
                    const height = value * 5 + 0.5;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$shapes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Box"], {
                        args: [
                            width,
                            height,
                            0.1
                        ],
                        position: [
                            x,
                            height / 2,
                            0
                        ],
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshBasicMaterial", {
                            color: "#9f43ee",
                            transparent: true,
                            opacity: 0.9
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/visualizers/themes/RetroWave.tsx",
                            lineNumber: 90,
                            columnNumber: 15
                        }, this)
                    }, `mid-${idx}`, false, {
                        fileName: "[project]/src/app/components/visualizers/themes/RetroWave.tsx",
                        lineNumber: 85,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/src/app/components/visualizers/themes/RetroWave.tsx",
                lineNumber: 78,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/visualizers/themes/RetroWave.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
_s1(Mountains, "QEhpi4EOGnGcNh7bzMws2ZI2Yr8=");
_c1 = Mountains;
// 網格地面
function RetroPlatform({ lowEnergy }) {
    _s2();
    const platformRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$dc44c1b8$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useFrame$3e$__["useFrame"])({
        "RetroPlatform.useFrame": (_state, delta)=>{
            if (!platformRef.current) return;
            // 地面隨低頻上下移動
            platformRef.current.position.y = -1.5 - lowEnergy * 1.5;
        }
    }["RetroPlatform.useFrame"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        ref: platformRef,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Grid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Grid"], {
            position: [
                0,
                -0.01,
                0
            ],
            args: [
                50,
                50
            ],
            cellSize: 1,
            cellThickness: 1,
            cellColor: "#ff2975",
            sectionSize: 3,
            sectionThickness: 1.5,
            sectionColor: "#4CC9F0",
            fadeDistance: 50,
            infiniteGrid: true,
            fadeStrength: 1
        }, void 0, false, {
            fileName: "[project]/src/app/components/visualizers/themes/RetroWave.tsx",
            lineNumber: 116,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/components/visualizers/themes/RetroWave.tsx",
        lineNumber: 115,
        columnNumber: 5
    }, this);
}
_s2(RetroPlatform, "7ePhxtwYXx3nUoDcWd+2Y8VMeyk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$dc44c1b8$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useFrame$3e$__["useFrame"]
    ];
});
_c2 = RetroPlatform;
// 復古文字
function RetroText({ beat }) {
    _s3();
    const textRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$dc44c1b8$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useFrame$3e$__["useFrame"])({
        "RetroText.useFrame": (_state, delta)=>{
            if (!textRef.current) return;
            // 節拍時閃爍
            if (beat) {
                textRef.current.visible = !textRef.current.visible;
            }
        }
    }["RetroText.useFrame"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        ref: textRef,
        position: [
            0,
            5,
            -20
        ],
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
            fontSize: 3,
            color: "#ff2975",
            font: "/fonts/VCR_OSD_MONO.ttf",
            anchorX: "center",
            anchorY: "middle",
            children: "PULSE"
        }, void 0, false, {
            fileName: "[project]/src/app/components/visualizers/themes/RetroWave.tsx",
            lineNumber: 148,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/components/visualizers/themes/RetroWave.tsx",
        lineNumber: 147,
        columnNumber: 5
    }, this);
}
_s3(RetroText, "q6QS2zhhHxoIGUSLYGYZcMWJvgU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$dc44c1b8$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useFrame$3e$__["useFrame"]
    ];
});
_c3 = RetroText;
// 場景容器
function Scene({ analysisData }) {
    _s4();
    const cameraRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$dc44c1b8$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useFrame$3e$__["useFrame"])({
        "Scene.useFrame": (_state, delta)=>{
            if (!cameraRef.current) return;
            // 相機緩慢移動
            cameraRef.current.position.y = 1 + Math.sin(Date.now() * 0.001) * 0.5;
            cameraRef.current.position.x = Math.sin(Date.now() * 0.0003) * 2;
        }
    }["Scene.useFrame"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$PerspectiveCamera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PerspectiveCamera"], {
                ref: cameraRef,
                makeDefault: true,
                position: [
                    0,
                    1,
                    5
                ],
                fov: 70
            }, void 0, false, {
                fileName: "[project]/src/app/components/visualizers/themes/RetroWave.tsx",
                lineNumber: 175,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("color", {
                attach: "background",
                args: [
                    '#0d0221'
                ]
            }, void 0, false, {
                fileName: "[project]/src/app/components/visualizers/themes/RetroWave.tsx",
                lineNumber: 182,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("fog", {
                attach: "fog",
                args: [
                    '#0d0221',
                    5,
                    50
                ]
            }, void 0, false, {
                fileName: "[project]/src/app/components/visualizers/themes/RetroWave.tsx",
                lineNumber: 183,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RetroSun, {
                beat: analysisData.beat,
                highEnergy: analysisData.highEnergy
            }, void 0, false, {
                fileName: "[project]/src/app/components/visualizers/themes/RetroWave.tsx",
                lineNumber: 185,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Mountains, {
                frequencyData: analysisData.frequencyData
            }, void 0, false, {
                fileName: "[project]/src/app/components/visualizers/themes/RetroWave.tsx",
                lineNumber: 190,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RetroPlatform, {
                lowEnergy: analysisData.lowEnergy
            }, void 0, false, {
                fileName: "[project]/src/app/components/visualizers/themes/RetroWave.tsx",
                lineNumber: 194,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RetroText, {
                beat: analysisData.beat
            }, void 0, false, {
                fileName: "[project]/src/app/components/visualizers/themes/RetroWave.tsx",
                lineNumber: 198,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s4(Scene, "hJVU1VJhV3D7gaub54nOAyWFt8k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$dc44c1b8$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useFrame$3e$__["useFrame"]
    ];
});
_c4 = Scene;
function RetroWave({ analysisData }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$react$2d$three$2d$fiber$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Canvas"], {
        className: "w-full h-full",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Scene, {
            analysisData: analysisData
        }, void 0, false, {
            fileName: "[project]/src/app/components/visualizers/themes/RetroWave.tsx",
            lineNumber: 209,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/components/visualizers/themes/RetroWave.tsx",
        lineNumber: 208,
        columnNumber: 5
    }, this);
}
_c5 = RetroWave;
var _c, _c1, _c2, _c3, _c4, _c5;
__turbopack_context__.k.register(_c, "RetroSun");
__turbopack_context__.k.register(_c1, "Mountains");
__turbopack_context__.k.register(_c2, "RetroPlatform");
__turbopack_context__.k.register(_c3, "RetroText");
__turbopack_context__.k.register(_c4, "Scene");
__turbopack_context__.k.register(_c5, "RetroWave");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/components/visualizers/themes/TechnoData.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>TechnoData)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$react$2d$three$2d$fiber$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/react-three-fiber.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$dc44c1b8$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useFrame$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/events-dc44c1b8.esm.js [app-client] (ecmascript) <export C as useFrame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$PerspectiveCamera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/core/PerspectiveCamera.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/core/Line.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/core/Text.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Environment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/core/Environment.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature();
'use client';
;
;
;
;
// 波形視覺化
function Waveform({ timeData, color = '#00ff88', position = [
    0,
    0,
    0
], scale = [
    1,
    1,
    1
] }) {
    _s();
    const lineRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // 創建波形線的點
    const points = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Waveform.useMemo[points]": ()=>{
            const sampleCount = Math.min(timeData.length, 128);
            const pts = [];
            for(let i = 0; i < sampleCount; i++){
                const x = i / sampleCount * 10 - 5;
                // 歸一化數據到 -1 至 1
                const y = (timeData[i] / 255 * 2 - 1) * 0.5;
                pts.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](x, y, 0));
            }
            return pts;
        }
    }["Waveform.useMemo[points]"], [
        timeData
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        ref: lineRef,
        position: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](...position),
        scale: scale,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Line"], {
            points: points,
            color: color,
            lineWidth: 2
        }, void 0, false, {
            fileName: "[project]/src/app/components/visualizers/themes/TechnoData.tsx",
            lineNumber: 40,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/components/visualizers/themes/TechnoData.tsx",
        lineNumber: 39,
        columnNumber: 5
    }, this);
}
_s(Waveform, "u6DxREwq1jUGdDQnNFG/0E8+6Ac=");
_c = Waveform;
// 頻譜視覺化
function FrequencyBars({ frequencyData, midEnergy, highEnergy, position = [
    0,
    0,
    0
], height = 3, width = 10, barCount = 64 }) {
    _s1();
    const barsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // 計算採樣間隔
    const sampleStep = Math.floor(frequencyData.length / barCount);
    // 創建頻譜條
    const bars = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "FrequencyBars.useMemo[bars]": ()=>{
            const elements = [];
            const barWidth = width / barCount;
            for(let i = 0; i < barCount; i++){
                const x = i / barCount * width - width / 2;
                // 採樣頻譜數據
                const index = i * sampleStep;
                const value = frequencyData[index] / 255;
                // 根據頻率位置選擇顏色
                let color;
                if (i < barCount * 0.33) {
                    color = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"]('#00ffaa');
                } else if (i < barCount * 0.66) {
                    color = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"]('#00aaff');
                } else {
                    color = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"]('#aa00ff');
                }
                // 計算條高
                const barHeight = value * height;
                elements.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                    position: [
                        x,
                        barHeight / 2,
                        0
                    ],
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("boxGeometry", {
                            args: [
                                barWidth * 0.8,
                                barHeight || 0.05,
                                0.1
                            ]
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/visualizers/themes/TechnoData.tsx",
                            lineNumber: 99,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshBasicMaterial", {
                            color: color,
                            transparent: true,
                            opacity: 0.8
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/visualizers/themes/TechnoData.tsx",
                            lineNumber: 100,
                            columnNumber: 11
                        }, this)
                    ]
                }, i, true, {
                    fileName: "[project]/src/app/components/visualizers/themes/TechnoData.tsx",
                    lineNumber: 98,
                    columnNumber: 9
                }, this));
            }
            return elements;
        }
    }["FrequencyBars.useMemo[bars]"], [
        frequencyData,
        barCount,
        width,
        height,
        sampleStep
    ]);
    // 動畫
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$dc44c1b8$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useFrame$3e$__["useFrame"])({
        "FrequencyBars.useFrame": (_state, delta)=>{
            if (!barsRef.current) return;
            // 根據中高頻能量旋轉
            barsRef.current.rotation.z = Math.sin(Date.now() * 0.001) * 0.1 * midEnergy;
            barsRef.current.rotation.x = Math.sin(Date.now() * 0.0005) * 0.05 * highEnergy;
        }
    }["FrequencyBars.useFrame"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        ref: barsRef,
        position: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](...position),
        children: bars
    }, void 0, false, {
        fileName: "[project]/src/app/components/visualizers/themes/TechnoData.tsx",
        lineNumber: 118,
        columnNumber: 5
    }, this);
}
_s1(FrequencyBars, "Ckp659ZwUgW0x/tLXAPim+e+QEU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$dc44c1b8$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useFrame$3e$__["useFrame"]
    ];
});
_c1 = FrequencyBars;
// 資料圓環
function DataCircle({ frequencyData, lowEnergy, beat }) {
    _s2();
    const circleRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // 創建圓環上的數據點
    const dataPoints = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "DataCircle.useMemo[dataPoints]": ()=>{
            const count = 128;
            const points = [];
            for(let i = 0; i < count; i++){
                const angle = i / count * Math.PI * 2;
                const sampledIndex = Math.floor(i * (frequencyData.length / count));
                const value = frequencyData[sampledIndex] / 255;
                // 基本半徑加上頻譜數據
                const radius = 4 + value * 1.5;
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;
                points.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](x, y, 0));
            }
            // 閉合路徑
            points.push(points[0].clone());
            return points;
        }
    }["DataCircle.useMemo[dataPoints]"], [
        frequencyData
    ]);
    // 動畫
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$dc44c1b8$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useFrame$3e$__["useFrame"])({
        "DataCircle.useFrame": (_state, delta)=>{
            if (!circleRef.current) return;
            // 旋轉
            circleRef.current.rotation.z += delta * 0.1;
            // 節拍時脈衝
            if (beat) {
                circleRef.current.scale.set(1.05, 1.05, 1.05);
            } else {
                circleRef.current.scale.x = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MathUtils"].lerp(circleRef.current.scale.x, 1, delta * 3);
                circleRef.current.scale.y = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MathUtils"].lerp(circleRef.current.scale.y, 1, delta * 3);
                circleRef.current.scale.z = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MathUtils"].lerp(circleRef.current.scale.z, 1, delta * 3);
            }
        }
    }["DataCircle.useFrame"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        ref: circleRef,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Line"], {
            points: dataPoints,
            color: "#00ffaa",
            lineWidth: 3
        }, void 0, false, {
            fileName: "[project]/src/app/components/visualizers/themes/TechnoData.tsx",
            lineNumber: 180,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/components/visualizers/themes/TechnoData.tsx",
        lineNumber: 179,
        columnNumber: 5
    }, this);
}
_s2(DataCircle, "v9kpbJhYHqM93/Xh2u3PD9tiw5Y=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$dc44c1b8$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useFrame$3e$__["useFrame"]
    ];
});
_c2 = DataCircle;
// 資料指標
function DataMetrics({ analysisData, position = [
    0,
    4,
    0
] }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        position: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](...position),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                position: [
                    0,
                    0,
                    0
                ],
                fontSize: 0.3,
                color: "#00ffaa",
                anchorX: "center",
                anchorY: "middle",
                children: `PULSE DATA ANALYZER`
            }, void 0, false, {
                fileName: "[project]/src/app/components/visualizers/themes/TechnoData.tsx",
                lineNumber: 199,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                position: [
                    -2,
                    -0.5,
                    0
                ],
                fontSize: 0.25,
                color: "#00aaff",
                anchorX: "left",
                anchorY: "middle",
                children: `VOLUME: ${(analysisData.volume * 100).toFixed(1)}%`
            }, void 0, false, {
                fileName: "[project]/src/app/components/visualizers/themes/TechnoData.tsx",
                lineNumber: 209,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                position: [
                    -2,
                    -0.9,
                    0
                ],
                fontSize: 0.25,
                color: "#00aaff",
                anchorX: "left",
                anchorY: "middle",
                children: `LOW: ${(analysisData.lowEnergy * 100).toFixed(1)}%`
            }, void 0, false, {
                fileName: "[project]/src/app/components/visualizers/themes/TechnoData.tsx",
                lineNumber: 219,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                position: [
                    -2,
                    -1.3,
                    0
                ],
                fontSize: 0.25,
                color: "#00aaff",
                anchorX: "left",
                anchorY: "middle",
                children: `MID: ${(analysisData.midEnergy * 100).toFixed(1)}%`
            }, void 0, false, {
                fileName: "[project]/src/app/components/visualizers/themes/TechnoData.tsx",
                lineNumber: 229,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                position: [
                    2,
                    -0.9,
                    0
                ],
                fontSize: 0.25,
                color: "#00aaff",
                anchorX: "right",
                anchorY: "middle",
                children: `HIGH: ${(analysisData.highEnergy * 100).toFixed(1)}%`
            }, void 0, false, {
                fileName: "[project]/src/app/components/visualizers/themes/TechnoData.tsx",
                lineNumber: 239,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                position: [
                    2,
                    -1.3,
                    0
                ],
                fontSize: 0.25,
                color: "#00aaff",
                anchorX: "right",
                anchorY: "middle",
                children: `BEAT: ${analysisData.beat ? 'ACTIVE' : 'IDLE'}`
            }, void 0, false, {
                fileName: "[project]/src/app/components/visualizers/themes/TechnoData.tsx",
                lineNumber: 249,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/visualizers/themes/TechnoData.tsx",
        lineNumber: 198,
        columnNumber: 5
    }, this);
}
_c3 = DataMetrics;
// 場景容器
function Scene({ analysisData }) {
    _s3();
    const cameraRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$dc44c1b8$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useFrame$3e$__["useFrame"])({
        "Scene.useFrame": (_state, delta)=>{
            if (!cameraRef.current) return;
            // 相機平滑移動
            const time = Date.now() * 0.0005;
            cameraRef.current.position.x = Math.sin(time * 0.5) * 2;
            cameraRef.current.position.y = 2 + Math.sin(time * 0.3) * 1;
            cameraRef.current.position.z = 8 + Math.sin(time * 0.2) * 2;
        }
    }["Scene.useFrame"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$PerspectiveCamera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PerspectiveCamera"], {
                ref: cameraRef,
                makeDefault: true,
                position: [
                    0,
                    2,
                    10
                ],
                fov: 60
            }, void 0, false, {
                fileName: "[project]/src/app/components/visualizers/themes/TechnoData.tsx",
                lineNumber: 278,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("color", {
                attach: "background",
                args: [
                    '#041024'
                ]
            }, void 0, false, {
                fileName: "[project]/src/app/components/visualizers/themes/TechnoData.tsx",
                lineNumber: 285,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("fog", {
                attach: "fog",
                args: [
                    '#041024',
                    5,
                    30
                ]
            }, void 0, false, {
                fileName: "[project]/src/app/components/visualizers/themes/TechnoData.tsx",
                lineNumber: 286,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Environment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Environment"], {
                preset: "night"
            }, void 0, false, {
                fileName: "[project]/src/app/components/visualizers/themes/TechnoData.tsx",
                lineNumber: 287,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DataCircle, {
                frequencyData: analysisData.frequencyData,
                lowEnergy: analysisData.lowEnergy,
                beat: analysisData.beat
            }, void 0, false, {
                fileName: "[project]/src/app/components/visualizers/themes/TechnoData.tsx",
                lineNumber: 289,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FrequencyBars, {
                frequencyData: analysisData.frequencyData,
                midEnergy: analysisData.midEnergy,
                highEnergy: analysisData.highEnergy,
                position: [
                    0,
                    -2,
                    0
                ],
                height: 3
            }, void 0, false, {
                fileName: "[project]/src/app/components/visualizers/themes/TechnoData.tsx",
                lineNumber: 295,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Waveform, {
                timeData: analysisData.timeData,
                color: "#00aaff",
                position: [
                    0,
                    0,
                    -1
                ],
                scale: [
                    1,
                    2,
                    1
                ]
            }, void 0, false, {
                fileName: "[project]/src/app/components/visualizers/themes/TechnoData.tsx",
                lineNumber: 303,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DataMetrics, {
                analysisData: analysisData,
                position: [
                    0,
                    4,
                    0
                ]
            }, void 0, false, {
                fileName: "[project]/src/app/components/visualizers/themes/TechnoData.tsx",
                lineNumber: 310,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s3(Scene, "hJVU1VJhV3D7gaub54nOAyWFt8k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$dc44c1b8$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useFrame$3e$__["useFrame"]
    ];
});
_c4 = Scene;
function TechnoData({ analysisData }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$react$2d$three$2d$fiber$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Canvas"], {
        className: "w-full h-full",
        style: {
            background: 'radial-gradient(circle at center, #042a38 0%, #041024 100%)'
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Scene, {
            analysisData: analysisData
        }, void 0, false, {
            fileName: "[project]/src/app/components/visualizers/themes/TechnoData.tsx",
            lineNumber: 327,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/components/visualizers/themes/TechnoData.tsx",
        lineNumber: 321,
        columnNumber: 5
    }, this);
}
_c5 = TechnoData;
var _c, _c1, _c2, _c3, _c4, _c5;
__turbopack_context__.k.register(_c, "Waveform");
__turbopack_context__.k.register(_c1, "FrequencyBars");
__turbopack_context__.k.register(_c2, "DataCircle");
__turbopack_context__.k.register(_c3, "DataMetrics");
__turbopack_context__.k.register(_c4, "Scene");
__turbopack_context__.k.register(_c5, "TechnoData");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/components/visualizers/VisualizerContainer.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>VisualizerContainer)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$store$2f$usePlayerStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/store/usePlayerStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$visualizers$2f$themes$2f$AbstractGeometry$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/visualizers/themes/AbstractGeometry.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$visualizers$2f$themes$2f$CyberpunkNeon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/visualizers/themes/CyberpunkNeon.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$visualizers$2f$themes$2f$RetroWave$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/visualizers/themes/RetroWave.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$visualizers$2f$themes$2f$TechnoData$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/visualizers/themes/TechnoData.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
function VisualizerContainer() {
    _s();
    const { currentTheme, analysisData } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$store$2f$usePlayerStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePlayerStore"])();
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // 渲染基於當前主題的可視化效果
    const renderVisualizer = ()=>{
        if (!analysisData) return null;
        switch(currentTheme){
            case 'abstract-geometry':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$visualizers$2f$themes$2f$AbstractGeometry$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    analysisData: analysisData
                }, void 0, false, {
                    fileName: "[project]/src/app/components/visualizers/VisualizerContainer.tsx",
                    lineNumber: 20,
                    columnNumber: 16
                }, this);
            case 'cyberpunk-neon':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$visualizers$2f$themes$2f$CyberpunkNeon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    analysisData: analysisData
                }, void 0, false, {
                    fileName: "[project]/src/app/components/visualizers/VisualizerContainer.tsx",
                    lineNumber: 22,
                    columnNumber: 16
                }, this);
            case 'retro-wave':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$visualizers$2f$themes$2f$RetroWave$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    analysisData: analysisData
                }, void 0, false, {
                    fileName: "[project]/src/app/components/visualizers/VisualizerContainer.tsx",
                    lineNumber: 24,
                    columnNumber: 16
                }, this);
            case 'techno-data':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$visualizers$2f$themes$2f$TechnoData$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    analysisData: analysisData
                }, void 0, false, {
                    fileName: "[project]/src/app/components/visualizers/VisualizerContainer.tsx",
                    lineNumber: 26,
                    columnNumber: 16
                }, this);
            default:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$visualizers$2f$themes$2f$AbstractGeometry$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    analysisData: analysisData
                }, void 0, false, {
                    fileName: "[project]/src/app/components/visualizers/VisualizerContainer.tsx",
                    lineNumber: 28,
                    columnNumber: 16
                }, this);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        className: "absolute inset-0 overflow-hidden z-0",
        children: renderVisualizer()
    }, void 0, false, {
        fileName: "[project]/src/app/components/visualizers/VisualizerContainer.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
_s(VisualizerContainer, "yufhSAXgs3ZoIYkdm2HtX5xIv3g=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$store$2f$usePlayerStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePlayerStore"]
    ];
});
_c = VisualizerContainer;
var _c;
__turbopack_context__.k.register(_c, "VisualizerContainer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Home)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ui$2f$AudioPlayer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/ui/AudioPlayer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ui$2f$ThemeSwitcher$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/ui/ThemeSwitcher.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$visualizers$2f$VisualizerContainer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/visualizers/VisualizerContainer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
function Home() {
    _s();
    const [showIntro, setShowIntro] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    // 自動隱藏介紹文字
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            const timer = setTimeout({
                "Home.useEffect.timer": ()=>{
                    setShowIntro(false);
                }
            }["Home.useEffect.timer"], 5000);
            return ({
                "Home.useEffect": ()=>clearTimeout(timer)
            })["Home.useEffect"];
        }
    }["Home.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "flex min-h-screen flex-col items-center justify-between relative overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 z-0",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$visualizers$2f$VisualizerContainer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 25,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "relative z-10 w-full max-w-5xl flex items-center justify-between p-4 sm:p-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            y: -20
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: 0.5
                        },
                        className: "text-white",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-2xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500",
                                children: "PULSE"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 36,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm sm:text-base text-white/70",
                                children: "音樂可視化播放器"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 39,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 30,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].a, {
                        initial: {
                            opacity: 0,
                            scale: 0.8
                        },
                        animate: {
                            opacity: 1,
                            scale: 1
                        },
                        transition: {
                            duration: 0.5,
                            delay: 0.2
                        },
                        href: "https://github.com/yourusername/pulse",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "text-white hover:text-purple-300 transition",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "24",
                            height: "24",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            stroke: "currentColor",
                            strokeWidth: "2",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 64,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 53,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 44,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this),
            showIntro && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "absolute inset-0 flex items-center justify-center z-20",
                initial: {
                    opacity: 0
                },
                animate: {
                    opacity: 1
                },
                exit: {
                    opacity: 0
                },
                transition: {
                    duration: 1
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-black/60 backdrop-blur-md p-6 sm:p-10 rounded-xl max-w-xl text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-2xl sm:text-3xl font-bold text-white mb-4",
                            children: "歡迎使用 PULSE"
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 79,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-300 mb-6",
                            children: "上傳您喜愛的音樂，體驗動態視覺效果的饗宴。 選擇不同視覺主題，沉浸在音樂的視覺表現中。"
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 82,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setShowIntro(false),
                            className: "px-6 py-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg text-white font-medium hover:from-purple-700 hover:to-blue-700 transition",
                            children: "開始體驗"
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 86,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 78,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 71,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 flex flex-col sm:flex-row items-center sm:items-start justify-center gap-4 sm:gap-8 w-full max-w-7xl p-4 sm:p-8 mt-auto",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            x: -20
                        },
                        animate: {
                            opacity: 1,
                            x: 0
                        },
                        transition: {
                            duration: 0.5,
                            delay: 0.3
                        },
                        className: "w-full sm:w-64",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ui$2f$ThemeSwitcher$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 105,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 99,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: 0.5,
                            delay: 0.1
                        },
                        className: "w-full",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ui$2f$AudioPlayer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 115,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 109,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 97,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                className: "relative z-10 w-full max-w-5xl p-4 sm:p-8 text-center text-white/60 text-sm",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: [
                        "Created with 💜 & Next.js, Three.js, WebGL & Web Audio API | © ",
                        new Date().getFullYear(),
                        " Pulse"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 121,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 120,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, this);
}
_s(Home, "OGB/xKWSMyW8CkJFVedYWsEOFBo=");
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_app_07e31d75._.js.map