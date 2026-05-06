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
