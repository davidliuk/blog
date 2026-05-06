# Algorithm

这部分不只是“题型仓库”，更像一个算法学习和面试准备的知识地图。现在入口改成了先分清主线，再决定从哪条路径开始学: 数据结构负责“存什么”，搜索负责“怎么枚举”，优化负责“怎么更快”，课程和 framework 则负责“怎么形成自己的解题方法”。

<div class="section-hero">
  <p class="section-eyebrow">Algorithm Knowledge Map</p>
  <h2>从复杂度与正确性出发，再进入数据结构、搜索与优化</h2>
  <p>
    如果你是第一次来这块，建议先看 <a href="./data-structure/">Data Structure</a>、
    <a href="./search/">Search</a> 和 <a href="./optimization/">Optimization</a> 这三条主线。
    想系统准备面试，可以再配合 <a href="./course/">Course</a> 和
    <a href="./framework/">Framework</a> 一起读。
  </p>
  <div class="section-pill-row">
    <span class="section-pill">Complexity</span>
    <span class="section-pill">Correctness</span>
    <span class="section-pill">Data Structure</span>
    <span class="section-pill">DFS / BFS / FOR</span>
    <span class="section-pill">Dynamic Programming</span>
    <span class="section-pill">Interview Prep</span>
  </div>
</div>

## Topic Map

<div class="section-card-grid">
  <a class="section-card" href="./data-structure/">
    <span class="section-card__eyebrow">Core objects</span>
    <h3>Data Structure</h3>
    <p>数组、链表、树、图、集合这些“状态长什么样”的问题，决定了后面很多算法写法。</p>
  </a>
  <a class="section-card" href="./search/">
    <span class="section-card__eyebrow">Enumeration</span>
    <h3>Search</h3>
    <p>FOR、DFS、BFS 三种主要枚举方式，适合处理组合、路径、连通性和最短路问题。</p>
  </a>
  <a class="section-card" href="./optimization/">
    <span class="section-card__eyebrow">Make it faster</span>
    <h3>Optimization</h3>
    <p>从减治、贪心、动态规划到结构优化，关注怎么减少无效状态与重复计算。</p>
  </a>
  <a class="section-card" href="./course/">
    <span class="section-card__eyebrow">Study track</span>
    <h3>Course</h3>
    <p>把零散知识点整理成学习路线，更适合系统复习和阶段式刷题。</p>
  </a>
  <a class="section-card" href="./framework/">
    <span class="section-card__eyebrow">How to think</span>
    <h3>Framework</h3>
    <p>总结怎么分类题目、怎么传参、怎么写出 bug-free 代码，是辅助方法论层。</p>
  </a>
  <a class="section-card" href="./faq/">
    <span class="section-card__eyebrow">High-frequency patterns</span>
    <h3>FAQ</h3>
    <p>高频技巧、面试陷阱和分类速查，适合做查漏补缺和最后一轮巩固。</p>
  </a>
</div>

## Recommended Paths

<div class="section-path-grid">
  <div class="section-path-card">
    <h3>Path 1: Build the Core Mental Model</h3>
    <ol>
      <li>复杂度分析与数据规模估算</li>
      <li><a href="./data-structure/">Data Structure</a></li>
      <li><a href="./search/">Search</a></li>
      <li><a href="./optimization/">Optimization</a></li>
      <li><a href="./framework/">Framework</a></li>
    </ol>
  </div>
  <div class="section-path-card">
    <h3>Path 2: Interview Coding Track</h3>
    <ol>
      <li>边界情况、代码质量、沟通方式</li>
      <li><a href="./framework/quality/">Coding Quality</a></li>
      <li><a href="./faq/">FAQ</a></li>
      <li><a href="./course/jz/">JZ Course</a></li>
      <li>结合题单和公司高频题练习</li>
    </ol>
  </div>
  <div class="section-path-card">
    <h3>Path 3: Topic-driven Review</h3>
    <ol>
      <li><a href="./search/DFS/">DFS</a> / <a href="./search/BFS/">BFS</a></li>
      <li><a href="./optimization/dynamic-programming/">Dynamic Programming</a></li>
      <li><a href="./optimization/decrease-conquer/binary/">Binary</a></li>
      <li><a href="./faq/range/">Range Tricks</a></li>
      <li><a href="./faq/string/">String</a> / <a href="./faq/big-data/">Big Data</a></li>
    </ol>
  </div>
</div>

## What Lives Where

- `Data Structure / Search / Optimization`: 算法区的三条主线，回答“学什么”。
- `Course`: 把知识点串成学习顺序，回答“先学什么，后学什么”。
- `Framework`: 总结分类、顺序、传参、代码质量等方法论，回答“做题时怎么想”。
- `FAQ`: 高频模式与面试坑位速查，回答“遇到题时先想到什么”。

## High-Value Notes

- 复杂度与正确性: 主方法、循环不变式、DP 最优子结构、贪心选择性
- 搜索基础: [FOR](./search/FOR/), [DFS](./search/DFS/), [BFS](./search/BFS/)
- 经典优化: [Dynamic Programming](./optimization/dynamic-programming/), [Binary](./optimization/decrease-conquer/binary/), [2 Pointers](./optimization/decrease-conquer/2ptr/)
- 面试辅助: [Framework](./framework/), [FAQ](./faq/), [JZ Course](./course/jz/)

## Interview Checklist

1. 先问清数据范围和输入约束。
2. 先给出 working solution，再说明优化点。
3. 明确边界情况、空输入、越界和重复状态。
4. 写完后主动验证复杂度、正确性和可读性。

## Practice Resources

- [Grind 75](https://www.techinterviewhandbook.org/grind75/)
- [NeetCode Roadmap](https://neetcode.io/roadmap)
- [LeetCode Top Interview 150](https://leetcode.com/studyplan/top-interview-150/)
- [CodeTop](https://codetop.cc/)
- [Hello Algo](https://www.hello-algo.com/)
- [OI-Wiki](https://oi-wiki.org/)
