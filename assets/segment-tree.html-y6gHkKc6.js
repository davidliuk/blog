import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as l,d as e,o as n}from"./app-Cv-jMnVl.js";const a={};function t(p,i){return n(),l("div",null,i[0]||(i[0]=[e(`<h1 id="segment-tree" tabindex="-1"><a class="header-anchor" href="#segment-tree"><span>Segment Tree</span></a></h1><p>线段树</p><p>区间求和：前缀和/线段树</p><p>但是前缀和无法应对数组频繁修改：离线查询</p><p>线段树</p><p>在线处理区间类问题</p><p>实用、稍显复杂的数据结构</p><hr><p>离线算法：数组保持不变</p><p>在线算法：数组会动态变化修改</p><p>RMQ(Range Minimum/Maximum Query) 区间最值查询</p><ul><li>线段树</li><li>树状数组</li><li>ST表</li></ul><ol><li>每个节点代表一个区间，节点的值就是该区间的和</li><li>节点的值可以根据题目要求换成自己满足 “区间加法” 的表示，例如 <ol><li>最大公因数 GCD：总GCD = gcd (左区间GCD，右区间GCD)</li><li>最大值：总最大值 = max (左区间最大值，右区间最大值)</li><li>最小值：</li></ol></li><li>有些不符合 “区间加法” 的表示需要注意，例如： <ol><li>众数：根据左右区间的众数不能求出总区间的众数</li><li>01序列的最长连续零：根据左右区间的最长连续零，没法知道总的最长连续零</li></ol></li><li>根节点代表的区间是问题的总区间，例如上图中数据的长度就是 [0, 4]</li><li>线段树是一棵近似的完全二叉树，如上图，但也有不是完全二叉树的情况</li><li>建立线段树的过程就是不断把区间 “平分” 的过程，直到区间长度为1</li></ol><h3 id="线段树简介" tabindex="-1"><a class="header-anchor" href="#线段树简介"><span>线段树简介</span></a></h3><p>主要用途:</p><ul><li>存放对应区间(线段)的信息</li></ul><p>基本操作:</p><ul><li><p>区间查询(如:区间极值等)</p></li><li><p>单点修改(修改某个点的值)</p></li></ul><p>进阶操作:</p><ul><li>区间修改(如:更新一段区间的所有值)</li></ul><p>特点:</p><ul><li>高度为 log(总区间长度)</li><li>树上节点个数量级为 区间大小 * 2</li></ul><hr><h3 id="线段树结构" tabindex="-1"><a class="header-anchor" href="#线段树结构"><span>线段树结构</span></a></h3><p>线段数是一棵二叉树</p><p>线段树节点</p><ul><li>非叶子节点:表示区间 [i, j]</li><li>叶子节点:表示单点 [i, i]</li></ul><p>节点维护的值</p><ul><li>左、右区间端点 [L, R]</li><li>左、右儿子</li><li>其他权值(如:区间和、区间极值等)</li></ul><p>左右儿子表示的区间各为根节点的一半长</p><h3 id="线段树构造" tabindex="-1"><a class="header-anchor" href="#线段树构造"><span>线段树构造</span></a></h3><ul><li>树上节点对应的区间已经给出</li><li>每个点的点权是?</li><li>对于 [i, i]:root.val = num[i]</li><li>对于 [i, j]:root.val = left.val + right.val</li><li>使用后序遍历一遍即可</li></ul><p>递归函数体(数组，赋值区间起点，赋值区间终点)</p><ul><li>声明新的线段树节点 node</li><li>更新 node 的管辖区间</li><li>左端点 == 右端点(递归出口) <ul><li>单点赋值:node.val = nums[start]</li></ul></li><li>左端点 &lt; 右端点 <ul><li>求区间中点 mid</li><li>递归 [start, mid] 和 [mid + 1, end] 获得儿子</li><li>更新 node 的左右儿子</li></ul></li><li>返回 node</li></ul><hr><p>分治法函数体(当前节点，待修改索引，修改值)</p><p>• 分(Divide):</p><p>• node.start == node.end(递归出口)</p><p>• 叶子节点修改:node.val = value</p><p>• node.start != node.end</p><p>• 待修改索引在当前节点的左子树 • 向左子树递归</p><p>• 待修改索引在当前节点的右子树 • 向右子树递归</p><p>• 治(Conquer):</p><p>• 非叶子节点修改:node.val = node.left.val + node.right.val</p><hr><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">class</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> SegmentTreeNode</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> start</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> end</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">    SegmentTreeNode</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> left</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> right</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> sum</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">class</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> SegmentTree</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">    SegmentTreeNode</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> root</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    public</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> SegmentTree</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#C18401;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[] </span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">nums</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;"> start</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;"> end</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        root </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> construct</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(nums, start, end);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="区间修改" tabindex="-1"><a class="header-anchor" href="#区间修改"><span>区间修改</span></a></h3><p>在 ZKW 线段树中实现区间修改（区间增加或区间赋值等操作）需要稍微修改树的结构和操作逻辑。区间修改通常涉及延迟传播（Lazy Propagation），这是一种优化技术，用于推迟更新操作直到真正需要这些更新的值时才执行。</p><p>延迟传播/动态开点</p><hr><h2 id="递推线段树-zkw线段树" tabindex="-1"><a class="header-anchor" href="#递推线段树-zkw线段树"><span>递推线段树：zkw线段树</span></a></h2><p>2n大小，完全二叉树一个空间都不浪费（出了下标0的位置）</p><p>zkw线段树也支持区间修改，但是由于很难做到<code>pushdown</code>，所以zkw线段树采用标记永久化的方式进行区间修改。</p><p>ZKW 线段树使用两倍数组长度的空间来存储所有元素，这足以容纳所有叶子节点和非叶子节点。这种存储方式的合理性和高效性源于 ZKW 线段树的特殊结构和构建方法。为了理解为什么两倍长度的空间就足够，让我们来看看 ZKW 线段树的特点和存储方式：</p><ol><li><strong>叶子节点的存储</strong>：在 ZKW 线段树中，所有叶子节点（即原始数组的元素）直接存储在数组的后半部分。如果原始数组的长度为 <code>n</code>，那么叶子节点就存储在索引 <code>n</code> 到 <code>2n - 1</code> 的位置。</li><li><strong>非叶子节点的存储</strong>：非叶子节点（即用于表示区间信息的内部节点）存储在数组的前半部分，即索引 <code>1</code> 到 <code>n - 1</code> 的位置。这些节点是通过组合叶子节点的信息计算得出的。</li><li><strong>完全二叉树的性质</strong>：线段树本质上是一棵完全二叉树。在完全二叉树中，叶子节点的数量大约等于所有内部节点的数量总和加一。由于 ZKW 线段树省略了树的最顶层（根节点）并且使用迭代而非递归，它只需要 <code>n - 1</code> 的空间来存储非叶子节点。</li><li><strong>空间需求</strong>：因此，整个线段树需要的总空间大约是 <code>2n</code>：<code>n</code> 用于存储叶子节点，<code>n - 1</code> 用于存储非叶子节点，加上一个额外的空间作为根节点。这就是为什么使用两倍原始数组长度作为线段树数组长度的原因。</li></ol><p>总结来说，ZKW 线段树之所以使用两倍长度的数组，是因为它结合了完全二叉树的性质和迭代构建方法的空间效率，确保了所有的叶子节点和非叶子节点都能被有效地存储和更新。</p><hr><p>到目前为止zkw线段树还是比较简短的</p><p>可能有人觉得这个和树状数组有点像，这就对了</p><p><em>zkw：树状数组究竟是什么？就是省掉一半空间后的线段树加上中序遍历</em></p><p>这里我们采用<strong>标记永久化</strong>的思想（就是<strong>不下推lazy tag</strong><s>让他彻底lazy下去QwQ</s>）</p><div class="language-cpp line-numbers-mode" data-highlighter="shiki" data-ext="cpp" data-title="cpp" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> add</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[MAXN</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">&lt;&lt;</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">];</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> //这个lazy tag表示当前节点已经更新完，需要更新子节点</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>我们需要在自底向上时更新节点的值，所以我们还需要一个变量记录该节点<strong>包含元素的个数</strong></p><p>另外要注意<strong>修改某个节点的标记时要更新上面的值</strong></p><p><a href="https://zhuanlan.zhihu.com/p/656702623" target="_blank" rel="noopener noreferrer">https://zhuanlan.zhihu.com/p/656702623</a></p><p><a href="https://www.luogu.com.cn/blog/82152/Introduction-of-zkwSegmentTree" target="_blank" rel="noopener noreferrer">https://www.luogu.com.cn/blog/82152/Introduction-of-zkwSegmentTree</a></p>`,66)]))}const d=s(a,[["render",t],["__file","segment-tree.html.vue"]]),k=JSON.parse(`{"path":"/algo/faq/range/segment-tree.html","title":"Segment Tree","lang":"en-US","frontmatter":{"description":"Segment Tree 线段树 区间求和：前缀和/线段树 但是前缀和无法应对数组频繁修改：离线查询 线段树 在线处理区间类问题 实用、稍显复杂的数据结构 离线算法：数组保持不变 在线算法：数组会动态变化修改 RMQ(Range Minimum/Maximum Query) 区间最值查询 线段树 树状数组 ST表 每个节点代表一个区间，节点的值就是该区...","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/algo/faq/range/segment-tree.html"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"Segment Tree"}],["meta",{"property":"og:description","content":"Segment Tree 线段树 区间求和：前缀和/线段树 但是前缀和无法应对数组频繁修改：离线查询 线段树 在线处理区间类问题 实用、稍显复杂的数据结构 离线算法：数组保持不变 在线算法：数组会动态变化修改 RMQ(Range Minimum/Maximum Query) 区间最值查询 线段树 树状数组 ST表 每个节点代表一个区间，节点的值就是该区..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-11-22T03:36:46.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-22T03:36:46.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Segment Tree\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-22T03:36:46.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[{"level":3,"title":"线段树简介","slug":"线段树简介","link":"#线段树简介","children":[]},{"level":3,"title":"线段树结构","slug":"线段树结构","link":"#线段树结构","children":[]},{"level":3,"title":"线段树构造","slug":"线段树构造","link":"#线段树构造","children":[]},{"level":3,"title":"区间修改","slug":"区间修改","link":"#区间修改","children":[]},{"level":2,"title":"递推线段树：zkw线段树","slug":"递推线段树-zkw线段树","link":"#递推线段树-zkw线段树","children":[]}],"git":{"createdTime":1732244737000,"updatedTime":1732246606000,"contributors":[{"name":"David Liu","email":"liudawei@seas.upenn.edu","commits":1}]},"readingTime":{"minutes":5.5,"words":1650},"filePathRelative":"algo/faq/range/segment-tree.md","localizedDate":"November 22, 2024","excerpt":"\\n<p>线段树</p>\\n<p>区间求和：前缀和/线段树</p>\\n<p>但是前缀和无法应对数组频繁修改：离线查询</p>\\n<p>线段树</p>\\n<p>在线处理区间类问题</p>\\n<p>实用、稍显复杂的数据结构</p>\\n<hr>\\n<p>离线算法：数组保持不变</p>\\n<p>在线算法：数组会动态变化修改</p>\\n<p>RMQ(Range Minimum/Maximum Query) 区间最值查询</p>\\n<ul>\\n<li>线段树</li>\\n<li>树状数组</li>\\n<li>ST表</li>\\n</ul>\\n<ol>\\n<li>每个节点代表一个区间，节点的值就是该区间的和</li>\\n<li>节点的值可以根据题目要求换成自己满足 “区间加法” 的表示，例如\\n<ol>\\n<li>最大公因数 GCD：总GCD = gcd (左区间GCD，右区间GCD)</li>\\n<li>最大值：总最大值 = max (左区间最大值，右区间最大值)</li>\\n<li>最小值：</li>\\n</ol>\\n</li>\\n<li>有些不符合 “区间加法” 的表示需要注意，例如：\\n<ol>\\n<li>众数：根据左右区间的众数不能求出总区间的众数</li>\\n<li>01序列的最长连续零：根据左右区间的最长连续零，没法知道总的最长连续零</li>\\n</ol>\\n</li>\\n<li>根节点代表的区间是问题的总区间，例如上图中数据的长度就是 [0, 4]</li>\\n<li>线段树是一棵近似的完全二叉树，如上图，但也有不是完全二叉树的情况</li>\\n<li>建立线段树的过程就是不断把区间 “平分” 的过程，直到区间长度为1</li>\\n</ol>","autoDesc":true}`);export{d as comp,k as data};
