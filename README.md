# CogniAND 平台手册

CogniAND心理学实验平台的完整使用手册，基于VitePress构建。

## 快速开始

### 安装依赖

```bash
npm install
```

### 本地开发

```bash
npm run dev
```

服务器将在 `http://localhost:5173` 启动

### 构建生产版本

```bash
npm run build
```

### 预览生产版本

```bash
npm run preview
```

## 项目结构

```
cogniand-manual/
├── .vitepress/
│   └── config.mts              # VitePress配置文件
├── 1-FAQ/                      # 常见问题
├── 2-experimenter-manual/      # 主试手册
├── 3-subject-manual/           # 被试手册
├── 4-platform-info/            # 平台信息
├── 5-data-privacy/             # 数据与隐私
├── 6-troubleshooting/          # 故障排除
├── 7-technical-support/        # 技术支持
├── images/                     # 图片资源
├── index.md                    # 首页
└── package.json                # 项目配置
```

## 内容编辑

所有内容使用Markdown格式编写，文件位于各个模块目录中。

### 添加新页面

1. 在相应目录创建 `.md` 文件
2. 在 `.vitepress/config.mts` 中添加侧边栏配置
3. 保存后自动热更新

### 添加图片

1. 将图片放入 `images/` 目录
2. 在Markdown中引用：`![描述](/images/filename.png)`

### Markdown语法

VitePress支持标准Markdown语法，以及一些扩展功能：

- 代码块语法高亮
- 自定义容器（提示、警告、危险等）
- 表格
- Emoji
- 目录（TOC）

详见：https://vitepress.dev/guide/markdown

## 当前状态

### ✅ 已完成

- 完整的目录结构
- VitePress配置
- 首页和各模块首页
- 常见问题FAQ（完整内容）
- 主试手册和被试手册（框架和部分内容）
- 占位页面（待补充详细内容）

### 📝 待补充

- 各子页面的详细内容
- 截图和示意图
- 实验范式详细列表
- 更多实际案例

## 技术栈

- **VitePress**: 1.6.4
- **Node.js**: 建议 16.x 或更高版本
- **npm**: 建议 7.x 或更高版本

## 参考

本手册参考了脑岛平台手册的结构和样式。

## 许可证

Copyright © 2026 CogniAND Team
