# 祁克果网站

一个关于丹麦哲学家索伦·祁克果的完整网站系统，提供全面的生平介绍、哲学思想解析、主要著作展示、名言警句和研究资源。

## 项目特色

- 🎨 **现代设计**: 采用现代网页设计理念，响应式布局，支持深色模式
- 📚 **全面内容**: 涵盖祁克果的生平、思想、著作、影响等各个方面
- 🔍 **智能搜索**: 支持名言警句的搜索和分类筛选
- 📱 **响应式**: 完美适配桌面、平板和手机设备
- 🌙 **深色模式**: 支持明暗主题切换
- ⚡ **高性能**: 基于Vite构建，快速加载和热更新

## 技术栈

- **前端框架**: React 18 + TypeScript
- **构建工具**: Vite
- **样式框架**: Tailwind CSS
- **路由**: React Router DOM
- **图标**: Lucide React
- **状态管理**: React Context

## 项目结构

```
src/
├── components/          # 可复用组件
│   ├── Header.tsx      # 导航头部
│   ├── Footer.tsx      # 页脚
│   └── Layout.tsx      # 布局组件
├── contexts/           # React Context
│   └── ThemeContext.tsx # 主题管理
├── pages/              # 页面组件
│   ├── Home.tsx        # 首页
│   ├── Biography.tsx   # 生平传记
│   ├── Philosophy.tsx  # 哲学思想
│   ├── Works.tsx       # 主要著作
│   ├── Influence.tsx   # 思想影响
│   ├── Quotes.tsx      # 名言警句
│   ├── Resources.tsx   # 研究资源
│   └── About.tsx       # 关于页面
├── App.tsx             # 主应用组件
├── main.tsx            # 应用入口
└── index.css           # 全局样式
```

## 快速开始

### 环境要求

- Node.js 16.0 或更高版本
- npm 或 yarn 包管理器

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

项目将在 `http://localhost:5173` 启动

### 构建生产版本

```bash
npm run build
```

### 预览生产版本

```bash
npm run preview
```

## 功能特性

### 主要页面

1. **首页** - 网站概览和核心思想介绍
2. **生平传记** - 祁克果的成长历程和重要事件
3. **哲学思想** - 核心哲学概念的深入解析
4. **主要著作** - 重要作品的详细介绍和解读
5. **思想影响** - 对现代哲学、神学、文学的影响
6. **名言警句** - 经典名言的分类展示和搜索
7. **研究资源** - 推荐书籍、学术论文、视频讲座等
8. **关于** - 网站介绍和团队信息

### 交互功能

- 响应式导航菜单
- 深色/浅色主题切换
- 名言警句搜索和筛选
- 收藏功能
- 复制到剪贴板
- 平滑滚动和动画效果

## 开发说明

### 添加新页面

1. 在 `src/pages/` 目录下创建新的页面组件
2. 在 `src/App.tsx` 中添加路由配置
3. 在 `src/components/Header.tsx` 中添加导航链接

### 自定义主题

主题配置在 `tailwind.config.js` 中，可以修改颜色、字体等设计系统变量。

### 内容管理

网站内容直接写在React组件中，可以根据需要修改或扩展。

## 部署

### 静态部署

项目构建后生成静态文件，可以部署到任何静态文件服务器：

- Vercel
- Netlify
- GitHub Pages
- 阿里云OSS
- 腾讯云COS

### 部署命令

```bash
# 构建
npm run build

# 预览构建结果
npm run preview
```

## 贡献指南

欢迎提交Issue和Pull Request来改进这个项目！

### 开发流程

1. Fork 项目
2. 创建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 打开 Pull Request

## 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情

## 致谢

- 感谢所有为祁克果研究做出贡献的学者们
- 感谢开源社区提供的优秀工具和库
- 感谢所有使用和反馈这个项目的用户

## 联系方式

- 项目地址: [GitHub Repository]
- 问题反馈: [GitHub Issues]
- 邮箱: contact@kierkegaard.com

---

Made with ❤️ for philosophy lovers
