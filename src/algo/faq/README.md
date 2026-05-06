# Frequently Asked Questions

`faq/` 不是第二棵算法主树，而是高频模式、面试陷阱和速查索引。适合在你已经学过主线知识后，用来做查漏补缺和快速联想。

## What Lives Here

<div class="section-card-grid">
  <a class="section-card" href="./range/">
    <span class="section-card__eyebrow">Intervals and prefix tricks</span>
    <h3>Range</h3>
    <p>前缀和、差分、RMQ、bit 与区间类技巧，是很多题目的加速器。</p>
  </a>
  <a class="section-card" href="./string/">
    <span class="section-card__eyebrow">Patterns</span>
    <h3>String</h3>
    <p>括号、字符串结构和高频字符串题的分类入口。</p>
  </a>
  <a class="section-card" href="./list/">
    <span class="section-card__eyebrow">Contiguous vs non-contiguous</span>
    <h3>List and Sequence</h3>
    <p>subarray、substring、subsequence 这些最容易混淆的概念统一放在这里。</p>
  </a>
  <a class="section-card" href="./graph/">
    <span class="section-card__eyebrow">Connectivity patterns</span>
    <h3>Graph</h3>
    <p>图、矩阵、岛屿类和树图转化问题，适合集中回顾连通性套路。</p>
  </a>
  <a class="section-card" href="./greedy/">
    <span class="section-card__eyebrow">Selection heuristics</span>
    <h3>Greedy</h3>
    <p>区间、LIS 相关等常见贪心切入点的专题整理。</p>
  </a>
  <a class="section-card" href="./big-data/">
    <span class="section-card__eyebrow">System scale</span>
    <h3>Big Data</h3>
    <p>位图、布隆过滤器、外排序、MapReduce、TopK 等更偏系统侧的题。</p>
  </a>
</div>

## Quick Heuristics

- 连续问题：优先想 `substring / subarray / window / prefix / diff`
- 非连续问题：优先想 `subsequence / DFS / DP`
- 最小化最大值 / 最大化最小值：优先检查是否能二分答案
- 数据范围很小：优先接受指数级搜索
- 数据范围极大：优先考虑 `log n`、哈希或数学性质

## Good Time to Read This Section

1. 你已经知道主算法，但做题时经常想不起来切入口。
2. 你在面试前想快速复盘高频套路。
3. 你发现自己会知识点，但不会根据题目条件做“第一步分类”。
