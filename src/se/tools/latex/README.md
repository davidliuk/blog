# LaTeX

LaTeX 适合公式密集、交叉引用复杂和需要稳定排版的技术文档。内容结构与表现分离，使章节、图表、公式和引用可以自动编号。

## Authoring Structure

```text
document class
  → packages and macros
  → title / abstract
  → sections
  → figures, tables, equations
  → bibliography
```

## Notes

- [Blocks](./block.md)
- [Operators](./operator.md)

## Practices

- 为重复语义定义 macro，不为一次性视觉效果滥用命令。
- 图片保存可复现来源，并用 label/reference 而不是手写编号。
- 公式中的变量在正文解释，避免只有推导没有含义。
- 大文档拆分 source，但保持单一入口和统一 bibliography。
- 编译警告中的 undefined reference、overfull box 和 missing citation 需要处理。

可视化公式辅助工具：[Mathcha](https://www.mathcha.io/)。
