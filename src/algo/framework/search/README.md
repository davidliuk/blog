# Search Decision Guide

这里不再重复讲 `FOR / DFS / BFS` 的完整内容，而只回答一个问题: **看到一道题时，先怎么判断该用哪种搜索方式。**

## Quick Choice

- `FOR`: 状态层数固定，直接枚举区间、下标或固定重循环。
- `DFS`: 需要回溯、枚举所有方案、做后序传值，或问题天然长成递归树。
- `BFS`: 需要最短步数、层序扩展、拓扑排序，或者状态图最自然按层推进。

## Strong Signals

- 最短路 / 最少操作数 / 层数: 优先看 `BFS`
- 组合、排列、分割、路径枚举: 优先看 `DFS`
- 子数组、固定层枚举、固定维度循环: 优先看 `FOR`

## Canonical Docs

- [Search Overview](../../search/)
- [FOR](../../search/FOR/)
- [DFS](../../search/DFS/)
- [BFS](../../search/BFS/)
