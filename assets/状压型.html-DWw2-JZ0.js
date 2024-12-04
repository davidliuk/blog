import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,d as n,o as l}from"./app-CybQbXIt.js";const t={};function h(e,i){return l(),a("div",null,i[0]||(i[0]=[n(`<h1 id="状压型" tabindex="-1"><a class="header-anchor" href="#状压型"><span>状压型</span></a></h1><p>状态压缩DP，State Compression DP，又称Bitmask DP。</p><p>排列类问题，往往可以用状压型DP解决</p><p>通常的dp是用一个变量（如dp[i], dp[j]）表示一个状态，而Bitmask DP使用一个bitmask变量（dp[bitmask]），来表示一个集合的状态。bitmask是一个二进制或多进制数，是一个整数，状态压缩也就是将集合的状态压缩为一个整数来表示。</p><p>技巧：</p><p>如果用二进制表示子集并进行动态规划，集合中的元素就隐含了阶段信息。例如，</p><ol><li>可以把集合中的最大元素当作“阶段”</li><li>可以把集合中的一的个数当作阶段</li></ol><h2 id="位集合操作" tabindex="-1"><a class="header-anchor" href="#位集合操作"><span>位集合操作</span></a></h2><p>「二进制」中的「子集枚举」，具体表示为对给定的一个整数 xxx，不重复地枚举 <code>mask</code> 的「二进制」表示的非空子集 <code>sub</code>，其中 <code>y</code> 满足 <code>y&amp;mask=y</code>。</p><h3 id="二进制" tabindex="-1"><a class="header-anchor" href="#二进制"><span>二进制</span></a></h3><p>子集</p><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// 降序遍历 mask 的非空子集</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">for</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> (</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> sub </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> mask</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> sub </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">!=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> sub </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> (sub </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 1</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">) </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&amp;</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> mask) {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    // sub 是 mask 的一个非空子集</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>遍历</p><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// 升序遍历 mask 的每一位1</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">for</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> (</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> j </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> j </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&lt;</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> n</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> j</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">++</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">) {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">	if</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> ((s </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&amp;</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> (</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> &lt;&lt;</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> j)) </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">!=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 0</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">) {}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// 更快的升序遍历 mask 的每一位1</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">for</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> (</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> mask </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">!=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> mask </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&amp;=</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> (mask </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 1</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">)</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">) {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    // 取出最后一位1</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> position </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> mask </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&amp;</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> (</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">mask)</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    // 去掉最后一位1</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="多进制" tabindex="-1"><a class="header-anchor" href="#多进制"><span>多进制</span></a></h3><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// R 是 radix 进制的简称</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> R </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 3</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// 遍历R进制mask的所有位</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">for</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> (</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> j </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> dummy </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> mask</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> w </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> j </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&lt;</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> n</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> j</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">++,</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> dummy </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">/=</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> R</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> w </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">*=</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> R) {}</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">for</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> (</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> j </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> dummy </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> mask</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> w </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> dummy </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&gt;</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> j</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">++,</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> dummy </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">/=</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> R</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> w </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">*=</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> R) {}</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// 遍历R进制mask的所有非零位</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">for</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> (</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> dummy </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> mask</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> w </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> dummy </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&gt;</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> dummy </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">/=</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> R</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> w </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">*=</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> R) {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">	if</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> (dummy </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">%</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> R </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">!=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 0</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">) {}</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="排列" tabindex="-1"><a class="header-anchor" href="#排列"><span>排列</span></a></h2><p>优美的排列</p><p>状态：<code>f[s]</code>表示用集合s中的i个元素的方案数</p><p>转移：<code>f[s]=sum{f[s^(1&lt;&lt;j)]|(j+1)%i!=0 &amp;&amp; i%(j+1)!=0}</code></p><p>边界：<code>f[0]=1</code></p><p>答案：<code>sum{f[(1&lt;&lt;n)-1]}</code></p><hr><p>特殊的排列</p><p>状态：<code>f[s][i]</code>表示用集合s中的元素生成以num[i]结尾的序列的方案数（状压+状态</p><p>转移：<code>f[s][i]=sum{f[s^i][j]}</code></p><p>边界：<code>f[1 &lt;&lt; i][i]=1</code></p><p>答案：<code>sum{f[i][(1&lt;&lt;n)-1]}</code></p><hr><p>状态：<code>f[i][s]</code>表示用集合s中的元素生成以num[i]结尾的序列的方案数（状压+状态</p><p>转移：<code>f[i][s]=sum{f[j][s^j]}</code></p><p>边界：<code>f[i][0]=1</code></p><p>答案：<code>sum{f[i][((1&lt;&lt;n)-1)^(1&lt;&lt;i)]}</code></p><h2 id="匹配" tabindex="-1"><a class="header-anchor" href="#匹配"><span>匹配</span></a></h2><h3 id="一对一" tabindex="-1"><a class="header-anchor" href="#一对一"><span>一对一</span></a></h3><blockquote><p>2进制，0表示位置没装，1表示位置装了1个</p></blockquote><p>两个数组最小的异或之和</p><p>状态：<code>f[s]</code>表示用集合s是nums2的i个元素与nums1的前i位匹配生成的最小异或和</p><p>转移：<code>f[s]=min{f[s^j]+nums[i-1]^nums[j]}</code></p><p>边界：<code>f[s]=Inf, f[0]=0</code></p><p>答案：<code>f[(1&lt;&lt;n)-1]</code></p><hr><p>两个数组最小的距离之和</p><p>状态：<code>f[s]</code>表示用集合s是nums2的i个元素与nums1的前i位匹配生成的最小距离和</p><p>转移：<code>f[s]=min{f[s^j]+abs(nums[i-1]-nums[j])}</code></p><p>边界：<code>f[s]=Inf, f[0]=0</code></p><p>答案：<code>f[(1&lt;&lt;n)-1]</code></p><h3 id="多对多" tabindex="-1"><a class="header-anchor" href="#多对多"><span>多对多</span></a></h3><blockquote><p>2进制，0表示位置没装，1表示位置装了1个或多个</p></blockquote><p>连通两组点的最小成本</p><p>状态：<code>f[i][s]</code>表示用nums1的前i个元素匹配nums2的集合s的元素的最小成本</p><p>转移：<code>f[i][s]=min{min{f[i][s^j],f[i-1][s^j],f[i-1][s]}+cost[i-1][j]}</code></p><p>边界：<code>f[0][s]=Inf, f[0][0]=0</code></p><p>答案：<code>f[n][(1&lt;&lt;n)-1]</code></p><h3 id="多对多-带最大个数限制" tabindex="-1"><a class="header-anchor" href="#多对多-带最大个数限制"><span>多对多（带最大个数限制）</span></a></h3><blockquote><p>n进制，表示每个位置装的个数，n是最大的对应个数</p></blockquote><p>数组的最大与和</p><blockquote><p>每个篮子可以装0-2个元素，求最大的 元素值与篮子编号的与 和</p><p>3进制，表示每个位置装的个数</p><p>注意到题目的数据范围并不大，因此我们可以考虑使用状态压缩。可供压缩的有两种，即数和篮子：</p><p>最多有 18 个数，每个数被放入篮子或不放入篮子总计 2 种情况，因此状态的数量为 2^18=262144</p><p>最多有 9 个篮子，每个篮子可以被放入 0,1,2 个数，总计 3 种情况，因此状态的数量为 3^9 = 196833</p><p>第二种压缩方法的状态数量明显较小，因此我们考虑对篮子进行压缩。</p></blockquote><p>状态：<code>f[s]</code>表示用集合s是篮子的元素各位和为i与nums1的前i位匹配生成的最大与和</p><p>转移：<code>f[s]=max{f[sub] + (nums[i - 1] &amp; (j + 1))}</code></p><p>边界：<code>f[0]=0</code></p><p>答案：<code>max{f[s]|i==n}</code></p><h2 id="dag" tabindex="-1"><a class="header-anchor" href="#dag"><span>DAG</span></a></h2><p>并行课程II</p><p>状态：<code>f[s]</code>表示完成s中的元素至少需要多少学期</p><p>转移：<code>f[s]=min{f[s-{k}]}+1</code></p><p>边界：</p><hr><p>最小的必要团队</p><blockquote><p>0-1背包+状压DP lc1125.</p></blockquote><p>状态：<code>f[s]</code>表示完成s中的元素至少需要多少学期</p><p>转移：</p><p><a href="https://leetcode.cn/problems/closest-subsequence-sum/solutions/1369378/by-mountain-ocean-1s0v/" target="_blank" rel="noopener noreferrer">https://leetcode.cn/problems/closest-subsequence-sum/solutions/1369378/by-mountain-ocean-1s0v/</a></p><p><a href="https://leetcode.cn/problems/special-permutations/solutions/2312798/zhuang-ya-dp-by-endlesscheng-4jkr/" target="_blank" rel="noopener noreferrer">状压型题单</a></p><p>转化为经典哈密顿通路问题，使用状压DP转移</p><p>首先，我们要想到把数列转为一张图去做，对于两个数字，如果满足条件（<code>nums[i]%nums[j]==0||nums[j]%nums[i]==0</code>），我们对他们连一条边，那么我们符合条件的一个排列就相当于图上的一个哈密顿通路。</p>`,76)]))}const d=s(t,[["render",h],["__file","状压型.html.vue"]]),r=JSON.parse(`{"path":"/algo/summary/optimise/dynamic-programming/%E7%8A%B6%E5%8E%8B%E5%9E%8B.html","title":"状压型","lang":"en-US","frontmatter":{"description":"状压型 状态压缩DP，State Compression DP，又称Bitmask DP。 排列类问题，往往可以用状压型DP解决 通常的dp是用一个变量（如dp[i], dp[j]）表示一个状态，而Bitmask DP使用一个bitmask变量（dp[bitmask]），来表示一个集合的状态。bitmask是一个二进制或多进制数，是一个整数，状态压缩也...","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/algo/summary/optimise/dynamic-programming/%E7%8A%B6%E5%8E%8B%E5%9E%8B.html"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"状压型"}],["meta",{"property":"og:description","content":"状压型 状态压缩DP，State Compression DP，又称Bitmask DP。 排列类问题，往往可以用状压型DP解决 通常的dp是用一个变量（如dp[i], dp[j]）表示一个状态，而Bitmask DP使用一个bitmask变量（dp[bitmask]），来表示一个集合的状态。bitmask是一个二进制或多进制数，是一个整数，状态压缩也..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-11-22T03:05:37.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-22T03:05:37.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"状压型\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-22T03:05:37.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[{"level":2,"title":"位集合操作","slug":"位集合操作","link":"#位集合操作","children":[{"level":3,"title":"二进制","slug":"二进制","link":"#二进制","children":[]},{"level":3,"title":"多进制","slug":"多进制","link":"#多进制","children":[]}]},{"level":2,"title":"排列","slug":"排列","link":"#排列","children":[]},{"level":2,"title":"匹配","slug":"匹配","link":"#匹配","children":[{"level":3,"title":"一对一","slug":"一对一","link":"#一对一","children":[]},{"level":3,"title":"多对多","slug":"多对多","link":"#多对多","children":[]},{"level":3,"title":"多对多（带最大个数限制）","slug":"多对多-带最大个数限制","link":"#多对多-带最大个数限制","children":[]}]},{"level":2,"title":"DAG","slug":"dag","link":"#dag","children":[]}],"git":{"createdTime":1732244737000,"updatedTime":1732244737000,"contributors":[{"name":"David Liu","email":"liudawei@seas.upenn.edu","commits":1}]},"readingTime":{"minutes":4.51,"words":1353},"filePathRelative":"algo/summary/optimise/dynamic-programming/状压型.md","localizedDate":"November 22, 2024","excerpt":"\\n<p>状态压缩DP，State Compression DP，又称Bitmask DP。</p>\\n<p>排列类问题，往往可以用状压型DP解决</p>\\n<p>通常的dp是用一个变量（如dp[i], dp[j]）表示一个状态，而Bitmask DP使用一个bitmask变量（dp[bitmask]），来表示一个集合的状态。bitmask是一个二进制或多进制数，是一个整数，状态压缩也就是将集合的状态压缩为一个整数来表示。</p>\\n<p>技巧：</p>\\n<p>如果用二进制表示子集并进行动态规划，集合中的元素就隐含了阶段信息。例如，</p>\\n<ol>\\n<li>可以把集合中的最大元素当作“阶段”</li>\\n<li>可以把集合中的一的个数当作阶段</li>\\n</ol>","autoDesc":true}`);export{d as comp,r as data};
