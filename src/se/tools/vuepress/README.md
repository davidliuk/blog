---
title: VuePress
description: Notes on organizing, building, and maintaining this VuePress knowledge base.
icon: book
---

# VuePress

VuePress 把 Markdown 转换为可导航的静态站点。对这个仓库而言，内容架构比主题配置更重要：每个目录负责一个问题域，`README.md` 建立地图，专题页解释一个完整概念。

## Content Conventions

- 目录入口说明范围、阅读顺序、关键问题和子页面。
- 专题页优先使用稳定路径；文件移动时同步修复入站链接。
- 标题层级从一个 `#` 开始，不用空标题制造视觉间距。
- 相同概念只保留一个主要解释，其他位置使用 cross-link。
- 易变化的规则、版本和产品行为附官方来源或验证日期。

## Authoring Loop

1. 新建或更新 Markdown。
2. 检查相对链接、图片和 frontmatter。
3. 运行本地开发站点查看内容组织。
4. 执行完整 production build。
5. 发布后验证关键入口和旧链接重定向。

## Notes

- [Troubleshooting](./bugfix.md)
- [Interactive Content](./it.md)

站点构建成功只证明页面可以生成；内容质量还需要检查阅读路径、事实来源和页面之间的重复。
