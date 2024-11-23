import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,d as n,o as l}from"./app-CrF8c6p-.js";const e={};function h(t,i){return l(),a("div",null,i[0]||(i[0]=[n(`<h1 id="算法总结" tabindex="-1"><a class="header-anchor" href="#算法总结"><span>算法总结</span></a></h1><p>特殊条件：</p><ul><li><p>有序</p><ul><li>二分法</li><li>双指针</li></ul></li><li><p>在一个长度为 n 的数组 nums 里的所有数字都在 0 ~ n-1 的范围内</p><p>原地交换（哈希映射）</p></li><li><p>子串/子数组</p><ul><li>滑动窗口</li><li>区间型动态规划</li><li>前缀和/差分数组</li></ul></li><li><p>子序列</p></li></ul><h2 id="按时间复杂度区分" tabindex="-1"><a class="header-anchor" href="#按时间复杂度区分"><span>按时间复杂度区分</span></a></h2><p>a, max</p><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> max </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> a[</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">0</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">]</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">for</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">(</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> i </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> i </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> a</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">length</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> i</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">++</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">) {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">	max </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> Math</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">max</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(max, a[i])</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1 2 3 4 5</p><p>12[345]678</p><p>3</p><p>1 2 3 4 5 6</p><p>2</p><p>2 1 3 4 2 3 5 3 6</p><p>| |</p><p>A k</p><p>4</p><p>1 2 3 4 5</p><p>| |</p><h3 id="on" tabindex="-1"><a class="header-anchor" href="#on"><span>On</span></a></h3><ul><li><p>打擂台，求max或者min</p></li><li><p>双指针</p><ul><li><p>背向双指针，回文串</p><p>1 2 3 4 3 2 1</p><p>​ II</p></li><li><p>同向双指针</p><ul><li><p>快慢指针（一个一步、一个两步）</p><p>链表，求中点、求交点、判求环</p></li><li><p>滑动窗口</p><ul><li><p>大小恒定的窗口</p><p>连续的k个数中的最值、中位数</p></li><li><p>大小不定的窗口（待学）</p></li></ul></li><li><p>归并排序的merge算法</p><p>合并两个有序数组或链表</p></li></ul></li><li><p>相向双指针</p><ul><li>快速排序的partition算法</li><li>两数之和</li></ul></li></ul></li><li><p>快速选择</p></li><li><p>所有链表问题</p></li></ul><h3 id="onlogn" tabindex="-1"><a class="header-anchor" href="#onlogn"><span>Onlogn</span></a></h3><ul><li><p>归并、快速排序</p></li><li><p>n次logn的运算</p><p>n次二分</p><p>n次插入堆</p></li></ul><h3 id="on-1" tabindex="-1"><a class="header-anchor" href="#on-1"><span>&lt;On</span></a></h3><h4 id="bfs" tabindex="-1"><a class="header-anchor" href="#bfs"><span>BFS</span></a></h4><h4 id="dfs" tabindex="-1"><a class="header-anchor" href="#dfs"><span>DFS</span></a></h4><h2 id="按算法类型区分" tabindex="-1"><a class="header-anchor" href="#按算法类型区分"><span>按算法类型区分</span></a></h2><h3 id="bs二分查找" tabindex="-1"><a class="header-anchor" href="#bs二分查找"><span>BS二分查找</span></a></h3><p>logn</p><p>用途</p><ul><li><p>有序数组中找一个元素</p><p>2</p><p>1 2 3 4 5</p></li><li><p>二分答案</p><p>0 max</p></li><li><p>非排序序数组中找一个元素</p></li></ul><h3 id="遍历" tabindex="-1"><a class="header-anchor" href="#遍历"><span>遍历</span></a></h3><p>线性的：数组、链表</p><ul><li>迭代遍历</li><li>递归遍历</li></ul><p>数组 for</p><p>链表</p><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">while</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">(node </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">!=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> null</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">) {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">    访问node</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">    node </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> node</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">next</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// 1 -&gt; 2 -&gt; 3</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">void</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> traverse</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">(</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">Node</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> node) {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    if</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> (node </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">!=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> null</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">) {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        return</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">    }</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    // 先序访问node;</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    traverse</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">(</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">node</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">next</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">)</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    // 后序访问node;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>树形的：二叉树、多叉树</p><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// 1 -&gt; 2 -&gt; 3</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">void</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> traverse</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">(</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">TreeNode</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> node) {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    if</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> (node </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">!=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> null</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">) {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        return</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">    }</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    // 先序访问node;</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    traverse</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">(</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">node</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">left</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">)</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    // 中序访问node;</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    traverse</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">(</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">node</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">right</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">)</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    // 后序访问node;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// 1 -&gt; 2 -&gt; 3</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">class</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> TreeNode</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> val</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">    ArrayList</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">TreeNode</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">&gt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> chilren</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">void</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> traverse</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">(</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">TreeNode</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> node) {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    if</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> (node </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">!=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> null</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">) {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        return</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">    }</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    // 先序访问node;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    for</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> (</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">TreeNode</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> child</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">:</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> node</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">children</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">) {</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">        traverse</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">(child)</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">    }</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    // 后序访问node;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="dfs-1" tabindex="-1"><a class="header-anchor" href="#dfs-1"><span>DFS</span></a></h3><h3 id="bfs-1" tabindex="-1"><a class="header-anchor" href="#bfs-1"><span>BFS</span></a></h3><p>宽度优先搜索</p><hr><ul><li>二分法: 传统2分/翻转2分/Sqrt/median of 2 sorted arrays</li><li>HashTable: 2 sum/isomorphic string/group anagram</li><li>动态规划(DP): 漆房子/Coin Change2小ump Ga</li><li>BFS: Number of Island, BT Level order traversal</li><li>DFS: Subsets/Combo Sum/Permutation/Phone Combination</li><li>其他: Add String Numbers/Multiply String Numbers/Remove Nth node from Linked List/Product of Array Except Self</li></ul>`,43)]))}const d=s(e,[["render",h],["__file","index.html.vue"]]),r=JSON.parse(`{"path":"/algo/jiuzhang/","title":"算法总结","lang":"en-US","frontmatter":{"description":"算法总结 特殊条件： 有序 二分法 双指针 在一个长度为 n 的数组 nums 里的所有数字都在 0 ~ n-1 的范围内 原地交换（哈希映射） 子串/子数组 滑动窗口 区间型动态规划 前缀和/差分数组 子序列 按时间复杂度区分 a, max 1 2 3 4 5 12[345]678 3 1 2 3 4 5 6 2 2 1 3 4 2 3 5 3 6 ...","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/algo/jiuzhang/"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"算法总结"}],["meta",{"property":"og:description","content":"算法总结 特殊条件： 有序 二分法 双指针 在一个长度为 n 的数组 nums 里的所有数字都在 0 ~ n-1 的范围内 原地交换（哈希映射） 子串/子数组 滑动窗口 区间型动态规划 前缀和/差分数组 子序列 按时间复杂度区分 a, max 1 2 3 4 5 12[345]678 3 1 2 3 4 5 6 2 2 1 3 4 2 3 5 3 6 ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-11-23T18:49:10.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-23T18:49:10.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"算法总结\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-23T18:49:10.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[{"level":2,"title":"按时间复杂度区分","slug":"按时间复杂度区分","link":"#按时间复杂度区分","children":[{"level":3,"title":"On","slug":"on","link":"#on","children":[]},{"level":3,"title":"Onlogn","slug":"onlogn","link":"#onlogn","children":[]},{"level":3,"title":"<On","slug":"on-1","link":"#on-1","children":[]}]},{"level":2,"title":"按算法类型区分","slug":"按算法类型区分","link":"#按算法类型区分","children":[{"level":3,"title":"BS二分查找","slug":"bs二分查找","link":"#bs二分查找","children":[]},{"level":3,"title":"遍历","slug":"遍历","link":"#遍历","children":[]},{"level":3,"title":"DFS","slug":"dfs-1","link":"#dfs-1","children":[]},{"level":3,"title":"BFS","slug":"bfs-1","link":"#bfs-1","children":[]}]}],"git":{"createdTime":1732244737000,"updatedTime":1732387750000,"contributors":[{"name":"David Liu","email":"liudawei@seas.upenn.edu","commits":1}]},"readingTime":{"minutes":1.86,"words":557},"filePathRelative":"algo/jiuzhang/README.md","localizedDate":"November 22, 2024","excerpt":"\\n<p>特殊条件：</p>\\n<ul>\\n<li>\\n<p>有序</p>\\n<ul>\\n<li>二分法</li>\\n<li>双指针</li>\\n</ul>\\n</li>\\n<li>\\n<p>在一个长度为 n 的数组 nums 里的所有数字都在 0 ~ n-1 的范围内</p>\\n<p>原地交换（哈希映射）</p>\\n</li>\\n<li>\\n<p>子串/子数组</p>\\n<ul>\\n<li>滑动窗口</li>\\n<li>区间型动态规划</li>\\n<li>前缀和/差分数组</li>\\n</ul>\\n</li>\\n<li>\\n<p>子序列</p>\\n</li>\\n</ul>\\n<h2>按时间复杂度区分</h2>\\n<p>a, max</p>\\n<div class=\\"language-java line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"java\\" data-title=\\"java\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\">int</span><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\"> max </span><span style=\\"--shiki-light:#383A42;--shiki-dark:#56B6C2\\">=</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\"> a[</span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\">0</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\">]</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">;</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\">for</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\">(</span><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\">int</span><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\"> i </span><span style=\\"--shiki-light:#383A42;--shiki-dark:#56B6C2\\">=</span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\"> 0</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">;</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\"> i </span><span style=\\"--shiki-light:#383A42;--shiki-dark:#56B6C2\\">&lt;</span><span style=\\"--shiki-light:#E45649;--shiki-dark:#E5C07B\\"> a</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">.</span><span style=\\"--shiki-light:#E45649;--shiki-dark:#E5C07B\\">length</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">;</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\"> i</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">++</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\">) {</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\">\\tmax </span><span style=\\"--shiki-light:#383A42;--shiki-dark:#56B6C2\\">=</span><span style=\\"--shiki-light:#E45649;--shiki-dark:#E5C07B\\"> Math</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">.</span><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">max</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">(max, a[i])</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\">}</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{d as comp,r as data};
