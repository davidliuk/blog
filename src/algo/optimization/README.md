---
title: Optimization
description: Reduce search space and repeated computation with monotonicity, pruning, dynamic programming, and mathematics.
icon: gauge-high
---

# Optimization

优化这部分关注的是“怎样减少浪费”。有的题是排除无效状态，有的题是避免重复计算，还有的题是通过更好的结构把暴力降下来。

## Topic Map

<div class="section-card-grid">
  <a class="section-card" href="./decrease-conquer/">
    <span class="section-card__eyebrow">Prune invalid states</span>
    <h3>Decrease & Conquer</h3>
    <p>二分、双指针、贪心等常见技巧，本质上都在减少需要检查的状态。</p>
  </a>
  <a class="section-card" href="./dynamic-programming/">
    <span class="section-card__eyebrow">Reuse subproblems</span>
    <h3>Dynamic Programming</h3>
    <p>当子问题重叠时，把重复计算变成查表，是最典型的时间优化。</p>
  </a>
  <a class="section-card" href="./math/">
    <span class="section-card__eyebrow">Property shortcuts</span>
    <h3>Math</h3>
    <p>通过数论、公式和数学性质减少搜索或遍历，是最优雅的一类优化。</p>
  </a>
</div>

## Typical Signals

- 有序 / 单调：优先想 `Binary Search`、`2 Pointers`
- 局部选择能推出全局：优先检查 `Greedy`
- 最优子结构 + 重叠子问题：优先想 `Dynamic Programming`
- 可以把状态拆成两半：优先想折半搜索或结构优化

## High-Value Links

- [Binary](./decrease-conquer/binary/)
- [2 Pointers](./decrease-conquer/2ptr/)
- [Greedy](./decrease-conquer/greedy/)
- [Dynamic Programming](./dynamic-programming/)
- [Math](./math/)

## Optimization Is a Proof

优化不能只凭“这个写法更快”。每次降低复杂度都需要说明被省略的工作为什么不可能影响答案。

| 优化来源 | 典型方法 | 证明重点 |
| --- | --- | --- |
| 有序或单调 | Binary Search, Two Pointers | 被跳过区间为什么不含目标 |
| 无效候选可永久淘汰 | Greedy, Monotonic Structure | 淘汰后是否仍保留最优解 |
| 子问题重复 | Memoization, DP | 状态是否包含未来所需全部信息 |
| 状态可以分解 | Divide & Conquer, Meet-in-the-Middle | 子问题组合是否完整且不重叠 |
| 输入具有代数性质 | Math, Prefix, Modular Arithmetic | 推导是否覆盖边界和整数语义 |

## Before and After

1. 写出可工作的基线方案和复杂度。
2. 找到真正的瓶颈：状态数量、每状态转移数，还是数据结构操作。
3. 指出被消除的工作及其正确性理由。
4. 重新计算时间、空间和实现复杂度；不要用更高 bug 风险换取没有必要的优化。
