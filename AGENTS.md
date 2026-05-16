# AGENTS.md

## Project Overview

SodaPlay 是一个面向苏打绿（Sodagreen）粉丝的网页小游戏集合项目。项目名为「属于打粉的专属游乐场」。

## Tech Stack

- **Framework**: Astro v6
- **Language**: TypeScript (strict mode)
- **Dev Server Port**: 5356
- **Package Manager**: npm

## Commands

- `npm run dev` — 启动开发服务器 (port 5356)
- `npm run build` — 构建生产版本
- `npm run preview` — 预览生产构建 (port 5356)

## Project Structure

```
soda-play/
├── public/             # 静态资源
├── src/
│   ├── components/     # 可复用 UI 组件
│   │   ├── Footer.astro
│   │   ├── GameCard.astro
│   │   └── Hero.astro
│   ├── data/           # 游戏数据
│   │   ├── events.ts   # 苏打时间线事件数据（42条）
│   │   ├── votes.ts    # 苏打AB面投票数据（5组对决）
│   │   ├── songs/      # 苏打AI猜歌曲数据（8张专辑，40+首歌）
│   │   └── PROMPT.md   # 歌曲AI描述生成指南
│   ├── layouts/        # 页面布局
│   ├── lib/            # 工具库
│   │   └── cloudbase.ts # 苏打AB面投票存储（localStorage）
│   ├── pages/          # 页面路由
│   │   ├── index.astro # 首页（游戏列表）
│   │   └── games/      # 游戏页面
│   │       ├── soda-ab-side/   # 苏打AB面
│   │       ├── soda-ai-guess/  # 苏打AI猜
│   │       └── soda-timeline/  # 苏打时间线
│   └── styles/         # 全局样式
├── astro.config.mjs    # Astro 配置
├── tsconfig.json       # TypeScript 配置
└── package.json
```

## Games

每个游戏均包含 `index.astro`（介绍页）和 `play.astro`（游戏页），采用移动端优先的响应式设计，数据通过 `<script type="application/json">` 序列化到页面中，全部逻辑在客户端运行。

### 苏打AB面 (Soda A/B Side)

- **路由**: `/games/soda-ab-side`
- **主题色**: 紫色 `#9B7FD4`
- **玩法**: 1v1 歌曲投票，每轮展示两首有主题关联的苏打绿歌曲，玩家选择偏好，投票后查看全站统计（百分比+票数）
- **数据**: `src/data/votes.ts`（5组对决话题）
- **存储**: `src/lib/cloudbase.ts`，使用 localStorage 模拟多人投票，预置种子数据
- **特色**: 支持重新投票，模拟多人参与感

### 苏打AI猜 (Soda AI Guess)

- **路由**: `/games/soda-ai-guess`
- **主题色**: 青绿色 `#5BB8A6`
- **玩法**: AI 用幽默分析的方式描述一首苏打绿的歌，玩家从4个选项中猜出歌名，每轮15题
- **数据**: `src/data/songs/`（8张专辑：苏打绿、小宇宙、无与伦比的美丽、春·日光、夏/狂热、你在烦恼什么、秋：故事、冬 未了）
- **难度**: 普通模式（同专辑选项+专辑提示）、困难模式（全曲库选项+无提示）
- **特色**: 每首歌3条AI描述随机抽取，答错后显示AI解析和完整歌词

### 苏打时间线 (Soda Timeline)

- **路由**: `/games/soda-timeline`
- **主题色**: 金黄色 `#F6C343`
- **玩法**: 将打乱的苏打绿历史事件按时间顺序排列，共5关，支持拖拽排序和点击交换
- **数据**: `src/data/events.ts`（42条事件，2000-2026年）
- **难度**: 普通模式（不同年份事件，3-5条/关）、困难模式（可能同年事件，5-7条/关）
- **外部依赖**: sortablejs（拖拽排序）
- **计分**: 正确位置100分，差一位50分，其他0分

## Code Conventions

- 使用 TypeScript strict 模式
- 组件文件使用 `.astro` 扩展名
- 页面文件放在 `src/pages/` 下，遵循 Astro 文件路由
- 中文注释，英文代码命名
- 遵循 Astro 官方推荐的代码风格

## Notes

- 项目使用中文作为主要语言
- 设计风格应体现苏打绿乐队的音乐元素与美学
- 所有页面和交互必须兼顾移动端适配，采用移动端优先（Mobile First）的响应式设计策略
