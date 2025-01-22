import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as e,d as l,o as n}from"./app-ktFCNIob.js";const a={};function o(r,i){return n(),e("div",null,i[0]||(i[0]=[l('<h1 id="optimization" tabindex="-1"><a class="header-anchor" href="#optimization"><span>Optimization</span></a></h1><h2 id="算法优化" tabindex="-1"><a class="header-anchor" href="#算法优化"><span>算法优化</span></a></h2><ol><li><strong>贪心算法</strong>： <ul><li>特点：在每一步选择中都采取在当前状态下最好或最优（即最有利）的选择，从而希望导致结果是全局最好或最优的算法。</li><li>适用场景：问题满足贪心选择性质（局部最优解能决定全局最优解）和最优子结构。</li><li>例子：霍夫曼编码、最小生成树、Dijkstra。</li></ul></li><li><strong>动态规划</strong>： <ul><li>特点：将复杂问题分解成简单子问题，以递归的方式解决子问题。不同于分治，动态规划会保存子问题的解，避免重复计算。</li><li>适用场景：问题具有最优子结构，且子问题重叠（不是互斥的）。</li><li>例子：斐波那契数列、背包问题等。</li></ul></li><li><strong>减治法</strong>： <ul><li>特点：与分治法相似，但在每一步仅解决问题的一部分，减小问题规模，直到问题简单到可以直接求解。</li><li>适用场景：问题可以通过减少一部分来简化。</li><li>例子：插入排序、最大堆构建等。</li></ul></li></ol><p><strong>联系与区别</strong>：</p><ul><li>区别： <ul><li>贪心算法在每步只考</li></ul></li></ul><h2 id="结构优化" tabindex="-1"><a class="header-anchor" href="#结构优化"><span>结构优化</span></a></h2><p>典型：前缀和/后缀和</p><p>空间换时间：</p><h2 id="中途相遇法" tabindex="-1"><a class="header-anchor" href="#中途相遇法"><span>中途相遇法</span></a></h2><p>双向搜索，或者叫折半搜索</p><p>典型应用</p><ol><li>双向BFS，两头相对的bfs枚举+哈希表</li><li>两数之和，哈希表解法</li><li>数组的均值分割，二进制状压枚举+哈希表</li></ol><p>可以令原时间复杂度<strong>开根号</strong></p><p>折半搜索，又称为meet-in-the-middle。其做法为将整个搜索的过程分为两部分，然后每部分分别进行搜索，最后将得到两个答案序列，再将答案序列进行合并，即可得到最终的答案。</p><p>我们知道，搜索的时间复杂度往往是指数级别的。</p><p>比如，在每一层搜索时，假如都有两种选择，那么其时间复杂度为 𝑂(2𝑛) 。当 𝑛 较大时，往往会导致超时。此时，如果使用折半搜索，其时间复杂度将缩小为合并操作的时间复杂度𝑂(2𝑛/2+合并操作的时间复杂度) 。</p><hr><p>直接使用「二进制枚举」，是指用二进制表示中的 0 和 1 分别代表在划分数组两边。</p><p>如果直接对原数组进行「二进制枚举」，由于每个 nums[i] 都有两种决策（归属于数组 A 或 B），共有 2^{30} 个状态需要计算。同时每个状态 state 而言，需要 O(n) 的时间复杂度来判定，但整个过程只需要有限个变量。</p><p>因此直接使用「二进制枚举」是一个无须额外空间 TLE 做法。</p><p>提示三：空间换时间</p><p>我们不可避免需要使用「枚举」的思路，也不可避免对每个 nums[i] 有两种决策。但我们可以考虑缩减每次搜索的长度，将搜索分多次进行。</p><p>具体的，我们可以先对 nums 的前半部分进行搜索，并将搜索记录以「二元组 (tot,cnt)的形式」进行缓存（map 套 set），其中 tot 为划分元素总和，cnt 为划分元素个数；随后再对 nums 的后半部分进行搜索，假设当前搜索到结果为 (tot′,cnt′)，假设我们能够通过“某种方式”算得另外一半的结果为何值，并能在缓存结果中查得该结果，则说明存在合法划分方案，返回 true。</p><p>通过「折半 + 缓存结果」的做法，将「累乘」的计算过程优化成「累加」计算过程。</p><h2 id="构造法" tabindex="-1"><a class="header-anchor" href="#构造法"><span>构造法</span></a></h2>',25)]))}const m=t(a,[["render",o],["__file","index.html.vue"]]),d=JSON.parse(`{"path":"/algo/summary/optimise/","title":"Optimization","lang":"en-US","frontmatter":{"description":"Optimization 算法优化 贪心算法： 特点：在每一步选择中都采取在当前状态下最好或最优（即最有利）的选择，从而希望导致结果是全局最好或最优的算法。 适用场景：问题满足贪心选择性质（局部最优解能决定全局最优解）和最优子结构。 例子：霍夫曼编码、最小生成树、Dijkstra。 动态规划： 特点：将复杂问题分解成简单子问题，以递归的方式解决子问题。...","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/algo/summary/optimise/"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"Optimization"}],["meta",{"property":"og:description","content":"Optimization 算法优化 贪心算法： 特点：在每一步选择中都采取在当前状态下最好或最优（即最有利）的选择，从而希望导致结果是全局最好或最优的算法。 适用场景：问题满足贪心选择性质（局部最优解能决定全局最优解）和最优子结构。 例子：霍夫曼编码、最小生成树、Dijkstra。 动态规划： 特点：将复杂问题分解成简单子问题，以递归的方式解决子问题。..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2025-01-01T21:36:31.000Z"}],["meta",{"property":"article:modified_time","content":"2025-01-01T21:36:31.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Optimization\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-01-01T21:36:31.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[{"level":2,"title":"算法优化","slug":"算法优化","link":"#算法优化","children":[]},{"level":2,"title":"结构优化","slug":"结构优化","link":"#结构优化","children":[]},{"level":2,"title":"中途相遇法","slug":"中途相遇法","link":"#中途相遇法","children":[]},{"level":2,"title":"构造法","slug":"构造法","link":"#构造法","children":[]}],"git":{"createdTime":1732244737000,"updatedTime":1735767391000,"contributors":[{"name":"David Liu","email":"liudawei@seas.upenn.edu","commits":2},{"name":"刘大维","email":"davidliu@liudaweideMacBook-Pro-3.local","commits":1}]},"readingTime":{"minutes":3.05,"words":915},"filePathRelative":"algo/summary/optimise/README.md","localizedDate":"November 22, 2024","excerpt":"\\n<h2>算法优化</h2>\\n<ol>\\n<li><strong>贪心算法</strong>：\\n<ul>\\n<li>特点：在每一步选择中都采取在当前状态下最好或最优（即最有利）的选择，从而希望导致结果是全局最好或最优的算法。</li>\\n<li>适用场景：问题满足贪心选择性质（局部最优解能决定全局最优解）和最优子结构。</li>\\n<li>例子：霍夫曼编码、最小生成树、Dijkstra。</li>\\n</ul>\\n</li>\\n<li><strong>动态规划</strong>：\\n<ul>\\n<li>特点：将复杂问题分解成简单子问题，以递归的方式解决子问题。不同于分治，动态规划会保存子问题的解，避免重复计算。</li>\\n<li>适用场景：问题具有最优子结构，且子问题重叠（不是互斥的）。</li>\\n<li>例子：斐波那契数列、背包问题等。</li>\\n</ul>\\n</li>\\n<li><strong>减治法</strong>：\\n<ul>\\n<li>特点：与分治法相似，但在每一步仅解决问题的一部分，减小问题规模，直到问题简单到可以直接求解。</li>\\n<li>适用场景：问题可以通过减少一部分来简化。</li>\\n<li>例子：插入排序、最大堆构建等。</li>\\n</ul>\\n</li>\\n</ol>","autoDesc":true}`);export{m as comp,d as data};
