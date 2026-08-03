---
title: Algorithms
description: A structured algorithm knowledge base covering data structures, search, optimization, dynamic programming, and interview problem solving.
icon: sitemap
---

# Algorithms

算法不是模板的集合，而是一套把问题逐步压缩成可执行程序的方法。这个 section 以四个连续问题组织内容：**状态如何表示、解空间如何展开、无效计算如何消除、答案如何验证**。

<div class="section-hero knowledge-hero">
  <p class="section-eyebrow">Algorithm Knowledge System</p>
  <h2>Model the state. Explore the space. Optimize the work. Verify the answer.</h2>
  <p>
    面对新题时，先判断数据结构和状态，再选择 FOR / DFS / BFS 展开解空间；
    当暴力不够快时，利用单调性、重复子问题或数学性质做优化；
    最后用不变量、边界用例和复杂度分析验证方案。
  </p>
  <div class="section-pill-row">
    <span class="section-pill">Complexity</span>
    <span class="section-pill">Data Structures</span>
    <span class="section-pill">Search</span>
    <span class="section-pill">Dynamic Programming</span>
    <span class="section-pill">Correctness</span>
  </div>
</div>

## The Problem-Solving Loop

<div class="knowledge-flow" aria-label="Algorithm problem-solving loop">
  <div class="knowledge-flow__item">
    <span class="knowledge-flow__index">01</span>
    <strong>Model</strong>
    <p>识别输入、状态、关系和约束，选择数组、树、图、集合或自定义状态。</p>
  </div>
  <div class="knowledge-flow__item">
    <span class="knowledge-flow__index">02</span>
    <strong>Explore</strong>
    <p>用 FOR、DFS 或 BFS 系统地枚举候选解，先得到一个正确的 working solution。</p>
  </div>
  <div class="knowledge-flow__item">
    <span class="knowledge-flow__index">03</span>
    <strong>Optimize</strong>
    <p>利用有序性、单调性、剪枝、缓存、状态复用或数学结构减少工作量。</p>
  </div>
  <div class="knowledge-flow__item">
    <span class="knowledge-flow__index">04</span>
    <strong>Verify</strong>
    <p>检查不变量、边界、复杂度和反例，让“看起来能跑”变成可以解释的正确性。</p>
  </div>
</div>

## Knowledge Map

<div class="section-card-grid">
  <a class="section-card" href="./data-structure/">
    <span class="section-card__eyebrow">01 · State</span>
    <h3>Data Structures</h3>
    <p>数组、链表、树、图、哈希、栈与队列：数据怎样组织，决定算法怎样表达。</p>
  </a>
  <a class="section-card" href="./search/">
    <span class="section-card__eyebrow">02 · Enumeration</span>
    <h3>Search</h3>
    <p>FOR、DFS、BFS 与回溯：如何完整、无重复地展开状态空间。</p>
  </a>
  <a class="section-card" href="./optimization/">
    <span class="section-card__eyebrow">03 · Efficiency</span>
    <h3>Optimization</h3>
    <p>二分、双指针、贪心、动态规划与数学：如何消除无效状态和重复计算。</p>
  </a>
  <a class="section-card" href="./framework/">
    <span class="section-card__eyebrow">04 · Reasoning</span>
    <h3>Problem-Solving Framework</h3>
    <p>分类、遍历顺序、参数传递、代码质量与验证方法，形成稳定的解题过程。</p>
  </a>
  <a class="section-card" href="./course/">
    <span class="section-card__eyebrow">Guided practice</span>
    <h3>Study Tracks</h3>
    <p>把知识点串成阶段式训练路线，适合系统复习、面试准备和集中刷题。</p>
  </a>
  <a class="section-card" href="./faq/">
    <span class="section-card__eyebrow">Pattern index</span>
    <h3>FAQ & Patterns</h3>
    <p>区间、字符串、图、贪心与大数据高频模式，用于复盘和快速定位切入口。</p>
  </a>
</div>

## Choose a Learning Path

<div class="section-path-grid">
  <div class="section-path-card">
    <span class="section-card__eyebrow">Foundation</span>
    <h3>建立算法心智模型</h3>
    <ol>
      <li>数据规模与复杂度估算</li>
      <li><a href="./data-structure/">Data Structures</a></li>
      <li><a href="./search/">FOR / DFS / BFS</a></li>
      <li><a href="./optimization/">Optimization</a></li>
      <li><a href="./framework/">Correctness & Code Quality</a></li>
    </ol>
  </div>
  <div class="section-path-card">
    <span class="section-card__eyebrow">Interview</span>
    <h3>面试编码路线</h3>
    <ol>
      <li><a href="./framework/quality/">边界处理与代码质量</a></li>
      <li><a href="./optimization/decrease-conquer/2ptr/">Two Pointers</a></li>
      <li><a href="./search/DFS/">DFS</a> / <a href="./search/BFS/">BFS</a></li>
      <li><a href="./optimization/dynamic-programming/">Dynamic Programming</a></li>
      <li><a href="./faq/">FAQ & Pattern Review</a></li>
    </ol>
  </div>
  <div class="section-path-card">
    <span class="section-card__eyebrow">Deep dive</span>
    <h3>专题强化路线</h3>
    <ol>
      <li><a href="./data-structure/graph/">Graph</a> 与连通性</li>
      <li><a href="./optimization/decrease-conquer/binary/">Binary Search</a></li>
      <li><a href="./optimization/dynamic-programming/">DP 状态设计</a></li>
      <li><a href="./faq/range/">Range / Prefix / Difference</a></li>
      <li><a href="./faq/big-data/">Big Data Problems</a></li>
    </ol>
  </div>
</div>

## First Diagnostic Question

| 题目信号 | 第一反应 | 继续检查 |
| --- | --- | --- |
| 最短步数、层数、无权图距离 | BFS | 状态是否会重复；是否需要双向 BFS |
| 枚举组合、排列、路径、决策序列 | DFS / Backtracking | 选择、递归出口、撤销、剪枝 |
| 有序、单调、答案可判定 | Binary Search / Two Pointers | 搜索边界与单调 predicate |
| 重叠子问题、最优子结构 | DP / Memoization | 状态、转移、初始化、遍历顺序 |
| 连通性、分组、动态合并 | Graph / Union-Find | 图的存储、方向、权重 |
| 海量数据、内存受限 | Hash / Bitmap / Heap / External Sort | 可接受的误差、I/O 与空间预算 |

## How the Sections Connect

<div class="knowledge-crosslinks">
  <a href="../cs/">CS foundations explain the runtime cost behind an algorithm →</a>
  <a href="../ai/">AI applies optimization, search, probability, and matrix computation at scale →</a>
  <a href="./framework/">The problem-solving framework turns individual techniques into a repeatable process →</a>
</div>

## Practice Resources

- [Grind 75](https://www.techinterviewhandbook.org/grind75/)
- [NeetCode Roadmap](https://neetcode.io/roadmap)
- [LeetCode Top Interview 150](https://leetcode.com/studyplan/top-interview-150/)
- [Hello Algo](https://www.hello-algo.com/)
- [OI-Wiki](https://oi-wiki.org/)
