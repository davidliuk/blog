---
title: Data Structures
description: Choose data structures by state shape, required operations, invariants, and complexity.
icon: layer-group
---

# Data Structures

数据结构回答的是“状态长什么样”。很多题目表面上是算法题，本质上先要判断数据是线性的、树形的、图形的还是集合式的，后面的遍历方式和优化方法才会自然出现。

## Topic Map

<div class="section-card-grid">
  <a class="section-card" href="./linear/">
    <span class="section-card__eyebrow">Sequential states</span>
    <h3>Linear</h3>
    <p>数组、字符串、链表等线性结构，是最常见的题目载体。</p>
  </a>
  <a class="section-card" href="./tree/binary-tree/">
    <span class="section-card__eyebrow">Hierarchy</span>
    <h3>Tree</h3>
    <p>二叉树、多叉树与递归结构，重点在遍历顺序和父子关系。</p>
  </a>
  <a class="section-card" href="./graph/">
    <span class="section-card__eyebrow">Connectivity</span>
    <h3>Graph</h3>
    <p>图结构、邻接关系和可达性问题，通常与 DFS / BFS 强绑定。</p>
  </a>
  <a class="section-card" href="./set/">
    <span class="section-card__eyebrow">Existence and counting</span>
    <h3>Set</h3>
    <p>集合、哈希与“是否存在 / 出现次数”类问题。</p>
  </a>
  <a class="section-card" href="./advanced/stack/">
    <span class="section-card__eyebrow">Specialized tools</span>
    <h3>Advanced</h3>
    <p>栈、队列、Trie 等更偏工具型的数据结构，常作为算法加速器。</p>
  </a>
</div>

## Suggested Reading Order

1. 先看 `Linear`，这是绝大多数题的基础状态表示。
2. 再看 `Tree` 和 `Graph`，理解递归与连通性。
3. 最后补 `Set / Advanced`，把哈希、栈、队列这类高频工具用起来。

## How It Connects to Other Sections

- 结构确定后，通常要去 [Search](../search/) 选择遍历方式。
- 如果结构上有单调性、有序性或重复子问题，再去 [Optimization](../optimization/) 找优化手段。

## Choose by Operations

| 需求 | 优先考虑 | 需要确认 |
| --- | --- | --- |
| 随机访问、连续区间、原地修改 | Array / String | 插入删除是否频繁 |
| 频繁插入删除、节点关系重要 | Linked List | 是否真的无法使用数组 |
| 层级关系、递归定义 | Tree | 是否需要父指针、顺序或平衡性 |
| 任意连接、路径和可达性 | Graph | 有向/无向、权重、存储方式 |
| 存在性、去重、计数 | Hash Set / Map | 键是否稳定、碰撞与空间 |
| 最值、优先处理 | Heap | 需要全排序还是只需要 Top-K |
| 窗口极值、最近更大/更小 | Monotonic Queue / Stack | 淘汰条件是否单调 |

## Invariant First

实现复杂结构前，先写出必须始终成立的不变量。例如：

- 二叉搜索树左子树小于当前节点、右子树大于当前节点；
- 单调队列中的元素按值保持单调，同时按下标保持时间顺序；
- 并查集的 parent 链最终指向集合代表；
- 哈希表中一个逻辑键只能对应一个有效位置。
