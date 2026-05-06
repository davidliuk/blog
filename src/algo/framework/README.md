# Framework

`framework/` 不再作为算法区的主分类，而是作为辅助方法论层存在。主线内容还是 `data-structure/`、`search/`、`optimization/`；这里更关注做题时如何分类、如何传参、如何组织代码。

## What This Section Solves

- 看到一道题时，先按什么维度分类？
- 递归、遍历、分治、动态规划之间怎么区分？
- 写题时前序 / 后序、局部变量 / 全局变量、返回值 / 引用传递该怎么选？
- 如何把题解写得更稳定、可读、bug 更少？

## Topic Map

<div class="section-card-grid">
  <a class="section-card" href="./structure/">
    <span class="section-card__eyebrow">Classification</span>
    <h3>Structure</h3>
    <p>按线、树、图、集合来理解状态结构，帮助决定遍历和建模方式。</p>
  </a>
  <a class="section-card" href="./search/">
    <span class="section-card__eyebrow">Enumeration</span>
    <h3>Search</h3>
    <p>FOR / DFS / BFS 三种搜索方式的差别，以及它们对应的题型线索。</p>
  </a>
  <a class="section-card" href="./optimise/">
    <span class="section-card__eyebrow">Optimization mindset</span>
    <h3>Optimise</h3>
    <p>减治、分治、动规这些优化思路在方法论层的统一视角。</p>
  </a>
  <a class="section-card" href="./order/">
    <span class="section-card__eyebrow">Traversal order</span>
    <h3>Order</h3>
    <p>前序、后序、访问时机与节点关系，决定代码到底在哪里做事。</p>
  </a>
  <a class="section-card" href="./parameter/">
    <span class="section-card__eyebrow">State passing</span>
    <h3>Parameter</h3>
    <p>局部变量、返回值和全局变量应该怎么用，状态怎么从父传子或从子传父。</p>
  </a>
  <a class="section-card" href="./quality/">
    <span class="section-card__eyebrow">Interview coding</span>
    <h3>Quality</h3>
    <p>代码质量、边界处理和 bug free 写法，是面试中很容易拉开差距的一层。</p>
  </a>
</div>

## How to Use It

1. 先在主线区学知识点。
2. 遇到“这题到底该怎么分类、怎么写递归、怎么传状态”的问题，再回到 `framework/`。
3. 把这里当成一套稳定的思考模板，而不是第二套重复目录。


