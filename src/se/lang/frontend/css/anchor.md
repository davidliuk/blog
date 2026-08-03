# CSS Anchor Positioning

Anchor positioning 让一个元素相对另一个已命名元素定位，适合 tooltip、popover、menu 和 callout 等浮层关系。

## Mental Model

```text
anchor element
  → exposes anchor name / geometry
  → positioned element references anchor
  → fallback handles insufficient space
```

## Design Questions

- Anchor 和浮层是否处于可兼容的 containing block？
- top/bottom/inline 方向是否适应不同 writing mode？
- viewport 边缘空间不足时怎样 flip、shift 或 hide？
- keyboard focus、escape、outside click 和 screen reader 语义由谁处理？
- 不支持该能力时是否有普通布局或脚本 fallback？

Anchor positioning 只解决几何关系；focus management、dismiss behavior 和 accessibility 仍属于组件逻辑。
