# Pulse - 音樂可視化播放器

![Pulse Logo](public/pulse-logo.png)

Pulse 是一個高度互動的音樂可視化播放器，結合了現代前端技術與創意視覺效果，提供沉浸式的音樂體驗。

## ✨ 特性

- 🎵 本地音樂文件上傳與播放
- 🔊 實時音頻分析與可視化
- 🎨 多種視覺主題風格
  - Abstract Geometry (極簡線條、幾何圖形)
  - Cyberpunk Neon (粒子、光暈、雷射線)
  - 80s Retro Wave (霓虹、格狀背景)
  - Techno Data (數據驅動動畫)
- ⚡ 高性能 Canvas 和 WebGL 渲染
- 🔄 互動式控制面板
- 📱 響應式設計，適配各種設備

## 🛠️ 技術棧

- **框架**: Next.js (App Router), TypeScript
- **UI**: Tailwind CSS, shadcn/ui
- **狀態管理**: Zustand
- **音訊處理**: Web Audio API
- **3D/視覺效果**: Three.js, WebGL, GLSL Shader
- **動畫**: Framer Motion
- **渲染**: React Three Fiber, React Three Drei

## 🚀 快速開始

### 前提條件

- Node.js 18+
- npm 或 yarn

### 安裝

```bash
# 克隆倉庫
git clone https://github.com/yourusername/pulse.git
cd pulse

# 安裝依賴
npm install
# 或
yarn install

# 開發模式運行
npm run dev
# 或
yarn dev
```

訪問 [http://localhost:3000](http://localhost:3000) 查看應用。

## 📁 項目結構

```
pulse/
├── public/                  # 靜態資源
├── src/
│   ├── app/                 # Next.js App Router
│   │   ├── components/      # 組件
│   │   │   ├── ui/          # UI 組件
│   │   │   ├── visualizers/ # 視覺化效果組件
│   │   ├── hooks/           # 自定義 React Hooks
│   │   ├── lib/             # 工具函數和庫
│   │   │   ├── audio/       # 音頻處理邏輯
│   │   │   ├── shaders/     # GLSL 著色器
│   │   ├── store/           # Zustand 狀態管理
│   │   ├── page.tsx         # 主頁
│   │   └── layout.tsx       # 布局
└── ...配置文件
```

## 🎯 開發路線圖

- [x] 專案設置和基本結構
- [ ] 基本播放器 UI 和功能
- [ ] 音頻分析和數據提取
- [ ] 第一個視覺化渲染器
- [ ] 多主題支持
- [ ] 效能優化
- [ ] 額外功能 (Spotify API, 錄製功能)

## 🤝 貢獻

歡迎貢獻！請查看 `CONTRIBUTING.md` 了解更多關於如何貢獻的信息。

## 📄 許可

本項目採用 MIT 許可證 - 詳情請查看 [LICENSE](LICENSE) 文件。

## 👏 致謝

- 靈感來源於多種音樂可視化作品
- [Three.js](https://threejs.org/) 社區的優秀示例
- [shadcn/ui](https://ui.shadcn.com/) 提供的精美組件
