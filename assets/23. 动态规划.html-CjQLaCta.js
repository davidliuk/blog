import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,d as n,o as l}from"./app-CrF8c6p-.js";const p={};function h(t,i){return l(),a("div",null,i[0]||(i[0]=[n(`<h1 id="动态规划" tabindex="-1"><a class="header-anchor" href="#动态规划"><span>动态规划</span></a></h1><p>核心思想：小大化小</p><p>大规模问题的依赖于小规模问题</p><p>类似思想算法的还有：递归，分治法</p><p>动态规划 DP</p><p>贪心法 Greedy</p><h3 id="实现方式" tabindex="-1"><a class="header-anchor" href="#实现方式"><span>实现方式</span></a></h3><ol><li><p>记忆化搜索</p><p>（自顶向下的动态规划）</p></li><li><p>多重循环</p><p>（自底向上的动态规划）</p></li></ol><p>状态：坐标</p><p>方程：到哪去</p><p>初始化：终点</p><p>答案：起点</p><p>什么东西需要初始化：可以直接放在公式里面求出来的部分</p><p>可以套公式：不会出现越界或者是算不出来的情况的</p><p>自底向上、自顶向下</p><p>自底向上：正着依赖，倒着循环</p><p>自顶向下：正着循环，倒着依赖</p><p>三大类问题</p><ol><li>最值</li><li>可行性</li><li>方案总数</li></ol><h3 id="动归四要素" tabindex="-1"><a class="header-anchor" href="#动归四要素"><span>动归四要素</span></a></h3><p>动规的状态State — 递归的定义</p><ul><li>用 f[i]或者f[i] 代表在某些特定条件下某个规模更小的问题的答案</li><li>规模更小用参数 i 之类的来划定</li></ul><p>动规的方程Function --- 递归的拆解</p><ul><li>上一步从哪来</li><li>大问题如何拆解为小问题</li><li>f[i]t] = 通过规模更小的一些状态求 max / min / sum / or 来进行推导</li></ul><p>动规的初始化Initialize - 递归的出口</p><ul><li>设定无法再拆解的极限小的状态下的值</li><li>如f[i][0]或者 f[0][i]</li></ul><p>动规的答案Answer — 递归的调用</p><ul><li>最后要求的答案是什么</li><li>如f[n][m]或者 max(f[n][0], f[n][1] …f[n][m])</li></ul><p>这也就是为什么动态规划可以使用</p><p>“递归”版本的记忆化搜索来解决的原因！</p><p>算法难的就是递归和动规</p><p>不同的路径 Unique Path</p><p>dp[i][j] = dp[i-1][j] + dp[i][j-1]</p><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">void</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> uniquePath</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">(</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> m</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> int</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> n) {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    // state: dp[i][j] 代表0, 0走到i, j的方案数</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#C678DD;">    int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">[][] dp </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> new</span><span style="--shiki-light:#C18401;--shiki-dark:#C678DD;"> int</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">[m][n]</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">    </span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    // init</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    for</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> (</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> i </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> i </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&lt;</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> m</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> i</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">++</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">) {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">        dp[i][</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">0</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">] </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 1</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">    }</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    for</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> (</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> j </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> j </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&lt;</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> n</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> j</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">++</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">) {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">        dp[</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">0</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">][j] </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 1</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">    }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">    </span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    for</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> (</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> i </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> i </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&lt;</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> m</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> i</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">++</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">) {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        for</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> (</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> j </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> j </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&lt;</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> n</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> j</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">++</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">) {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">            dp[i][j] </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> dp[i </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 1</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">][j] </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">+</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> dp[i][j </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 1</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">]</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">        }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">    }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">    </span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    return</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> dp[m </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 1</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">][n </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 1</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">]</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,34)]))}const d=s(p,[["render",h],["__file","23. 动态规划.html.vue"]]),r=JSON.parse(`{"path":"/algo/jiuzhang/23.%20%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92.html","title":"动态规划","lang":"en-US","frontmatter":{"description":"动态规划 核心思想：小大化小 大规模问题的依赖于小规模问题 类似思想算法的还有：递归，分治法 动态规划 DP 贪心法 Greedy 实现方式 记忆化搜索 （自顶向下的动态规划） 多重循环 （自底向上的动态规划） 状态：坐标 方程：到哪去 初始化：终点 答案：起点 什么东西需要初始化：可以直接放在公式里面求出来的部分 可以套公式：不会出现越界或者是算不出...","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/algo/jiuzhang/23.%20%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92.html"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"动态规划"}],["meta",{"property":"og:description","content":"动态规划 核心思想：小大化小 大规模问题的依赖于小规模问题 类似思想算法的还有：递归，分治法 动态规划 DP 贪心法 Greedy 实现方式 记忆化搜索 （自顶向下的动态规划） 多重循环 （自底向上的动态规划） 状态：坐标 方程：到哪去 初始化：终点 答案：起点 什么东西需要初始化：可以直接放在公式里面求出来的部分 可以套公式：不会出现越界或者是算不出..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-11-23T18:49:10.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-23T18:49:10.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"动态规划\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-23T18:49:10.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[{"level":3,"title":"实现方式","slug":"实现方式","link":"#实现方式","children":[]},{"level":3,"title":"动归四要素","slug":"动归四要素","link":"#动归四要素","children":[]}],"git":{"createdTime":1732244737000,"updatedTime":1732387750000,"contributors":[{"name":"David Liu","email":"liudawei@seas.upenn.edu","commits":1}]},"readingTime":{"minutes":1.77,"words":530},"filePathRelative":"algo/jiuzhang/23. 动态规划.md","localizedDate":"November 22, 2024","excerpt":"\\n<p>核心思想：小大化小</p>\\n<p>大规模问题的依赖于小规模问题</p>\\n<p>类似思想算法的还有：递归，分治法</p>\\n<p>动态规划 DP</p>\\n<p>贪心法 Greedy</p>\\n<h3>实现方式</h3>\\n<ol>\\n<li>\\n<p>记忆化搜索</p>\\n<p>（自顶向下的动态规划）</p>\\n</li>\\n<li>\\n<p>多重循环</p>\\n<p>（自底向上的动态规划）</p>\\n</li>\\n</ol>\\n<p>状态：坐标</p>\\n<p>方程：到哪去</p>\\n<p>初始化：终点</p>\\n<p>答案：起点</p>\\n<p>什么东西需要初始化：可以直接放在公式里面求出来的部分</p>\\n<p>可以套公式：不会出现越界或者是算不出来的情况的</p>","autoDesc":true}`);export{d as comp,r as data};
