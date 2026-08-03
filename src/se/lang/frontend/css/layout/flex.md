# Flexbox

Flexbox 用于沿一个主轴分配空间，并在交叉轴上对齐 item。它最适合一维布局；需要同时严格控制行和列时通常考虑 Grid。

## Layout Algorithm

1. `flex-direction` 定义 main axis。
2. item 以 `flex-basis` 作为初始尺寸参与计算。
3. 剩余空间按 `flex-grow` 分配，不足空间按 `flex-shrink` 收缩。
4. `justify-content` 分配主轴额外空间。
5. `align-items` / `align-self` 控制交叉轴对齐。

## Common Traps

- flex item 默认 `min-width: auto`，长内容可能拒绝收缩；常用 `min-width: 0` 修复。
- `flex: 1` 通常意味着 basis 为 0，与“按内容宽度再分配”不同。
- `gap` 表达 item 间距，比对子元素设置 margin 更稳定。
- `order` 只改变视觉顺序，不能替代正确的 DOM 与键盘顺序。
- 绝对定位的子元素不参与 flex layout。

## Choose Flex or Grid

| Need | Prefer |
| --- | --- |
| navigation、toolbar、单行 card actions | Flexbox |
| 二维 page / card matrix | Grid |
| 内容驱动的一维排列与换行 | Flexbox |
| 对齐到共享行列轨道 | Grid |
