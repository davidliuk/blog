# Optimisation Decision Guide

这里不再把优化讲成第二棵主树，而是只保留“怎么判断该往哪一类优化走”的心智模型。

## Quick Choice

- `减治`: 问题里存在单调性、有序性、可删除的无效状态
- `动态规划`: 子问题重叠，重复计算明显，且依赖方向无环
- `贪心`: 局部选择能稳定导向全局目标

## Typical Signals

- 有序 / 单调 / 二值性: 优先看减治
- 最优子结构 + 重叠子问题: 优先看动态规划
- 排序后局部策略天然成立: 优先检查贪心

## Canonical Docs

- [Optimization Overview](../../optimization/)
- [Decrease & Conquer](../../optimization/decrease-conquer/)
- [Dynamic Programming](../../optimization/dynamic-programming/)
- [Greedy](../../optimization/decrease-conquer/greedy/)
