---
title: Search
description: A unified view of FOR, DFS, BFS, backtracking, pruning, and state-space search.
icon: magnifying-glass
---

# Search

搜索的本质是枚举状态空间。很多题目的第一步不是“上什么模板”，而是先判断状态该怎么展开: 固定层数的 FOR、递归树式的 DFS，还是按层推进的 BFS。

## Topic Map

<div class="section-card-grid">
  <a class="section-card" href="./FOR/">
    <span class="section-card__eyebrow">Fixed-depth enumeration</span>
    <h3>FOR</h3>
    <p>适合枚举固定层数的状态，比如区间、子数组或有限层嵌套循环。</p>
  </a>
  <a class="section-card" href="./DFS/">
    <span class="section-card__eyebrow">Recursive search</span>
    <h3>DFS</h3>
    <p>适合组合、排列、树上分治、回溯和需要后序传值的题目。</p>
  </a>
  <a class="section-card" href="./BFS/">
    <span class="section-card__eyebrow">Layer expansion</span>
    <h3>BFS</h3>
    <p>适合最短步数、层次遍历、拓扑排序和状态图最短路。</p>
  </a>
</div>

## How to Choose

- 结果与“最少步数 / 最短路径”有关：先想 `BFS`
- 需要枚举所有可能、回溯选择过程、或做后序传值：先想 `DFS`
- 层数固定、状态是直接枚举区间或下标：先想 `FOR`

## High-Value Links

- [DFS](./DFS/)
- [BFS](./BFS/)
- [FOR](./FOR/)
- [Combination DFS](./DFS/enumerate/combination/)
- [Permutation DFS](./DFS/enumerate/permutation/)

## A Search State Has Five Parts

1. **State**：当前已经知道什么。
2. **Choices**：下一步可以做什么。
3. **Transition**：选择后状态如何变化。
4. **Goal / Exit**：什么时候得到答案或停止扩展。
5. **Dedup / Pruning**：哪些状态无需再次访问。

| 方法 | Frontier | 最适合 | 常见风险 |
| --- | --- | --- | --- |
| FOR | 固定层数循环 | 区间、下标、有限深度枚举 | 漏边界、重复枚举 |
| DFS | 调用栈 / 显式栈 | 组合、排列、路径、树上汇总 | 忘记撤销、递归语义不清 |
| BFS | 队列 | 无权最短路、层序、拓扑 | visited 时机错误、状态过大 |

## Correctness Checklist

- 每个合法答案是否都能被生成？
- 同一个答案或状态是否会被重复生成？
- 剪枝条件是否只删除不可能产生答案的分支？
- 搜索一定终止吗？状态空间的上界是什么？
