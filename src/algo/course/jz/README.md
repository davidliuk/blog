# JZ Course

这条课程线更偏面试准备: 不是把算法当成纯理论体系来学，而是把复杂度、数据结构、二分、双指针、DFS、BFS、DP 这些高频模块整理成一套可复习、可刷题的路径。

## Course Structure

<div class="section-card-grid">
  <a class="section-card" href="./ds/18.%20%E5%93%88%E5%B8%8C%E8%A1%A8.html">
    <span class="section-card__eyebrow">Data structure</span>
    <h3>DS</h3>
    <p>哈希表、堆和数据结构设计，适合补面试最常见的底层组件。</p>
  </a>
  <a class="section-card" href="./2ptr/4.%20%E5%8F%8C%E6%8C%87%E9%92%88.html">
    <span class="section-card__eyebrow">Linear tricks</span>
    <h3>2 Pointers</h3>
    <p>回文、滑动窗口、快慢指针和分区问题，属于最常用的一层线性优化。</p>
  </a>
  <a class="section-card" href="./bs/7.%20%E4%BA%8C%E5%88%86%E6%B3%95.html">
    <span class="section-card__eyebrow">Ordered structure</span>
    <h3>Binary Search</h3>
    <p>传统二分、二分答案和实战变形，是最典型的减治方法。</p>
  </a>
  <a class="section-card" href="./dfs/6.%20%E9%80%92%E5%BD%92.html">
    <span class="section-card__eyebrow">State enumeration</span>
    <h3>DFS</h3>
    <p>递归、分治、组合型与排列型搜索，是搜索问题的核心套路。</p>
  </a>
  <a class="section-card" href="./bfs/11.%20BFS.html">
    <span class="section-card__eyebrow">Shortest path mindset</span>
    <h3>BFS</h3>
    <p>层序、最短步数、双向 BFS 和状态扩展问题。</p>
  </a>
  <a class="section-card" href="./dp/23.%20%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92.html">
    <span class="section-card__eyebrow">Reuse subproblems</span>
    <h3>Dynamic Programming</h3>
    <p>从使用场景到背包、区间、匹配、划分、接龙等常见类型。</p>
  </a>
</div>

## Recommended Order

1. 先看 `1. 真实案例`、`3. 代码质量`、`4. 复杂度理论`，建立面试语境。
2. 然后按 `DS -> 2ptr -> BS -> DFS -> BFS -> DP` 走主模块。
3. 最后回到 `31. 低于On的算法`、`39. 外排序算法与数组合并类` 这类专题做补充。

## How This Differs from Main Algo Tree

- 主树负责按知识点分类。
- 课程线负责按复习顺序组织。
- 如果你在这里看到一个主题想深入，优先回跳到 `/algo/` 主树下对应模块继续读。
