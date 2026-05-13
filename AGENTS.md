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
│   ├── layouts/        # 页面布局
│   ├── pages/          # 页面路由
│   └── styles/         # 全局样式
├── astro.config.mjs    # Astro 配置
├── tsconfig.json       # TypeScript 配置
└── package.json
```

## Code Conventions

- 使用 TypeScript strict 模式
- 组件文件使用 `.astro` 扩展名
- 页面文件放在 `src/pages/` 下，遵循 Astro 文件路由
- 中文注释，英文代码命名
- 遵循 Astro 官方推荐的代码风格

## Notes

- 项目使用中文作为主要语言
- 设计风格应体现苏打绿乐队的音乐元素与美学
