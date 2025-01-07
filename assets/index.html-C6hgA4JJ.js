import{_ as l}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as s,d as a,o as n}from"./app-ChU1gMRF.js";const e={};function t(p,i){return n(),s("div",null,i[0]||(i[0]=[a(`<h1 id="two-pointers" tabindex="-1"><a class="header-anchor" href="#two-pointers"><span>Two Pointers</span></a></h1><p>双指针</p><p>核心：利用单调性，不走回头路，使 On2 -&gt; On</p><p>按方向划分：</p><ul><li><p>同向</p></li><li><p>相向</p></li><li><p>背向</p><p>判断回文串、中心往外扩散</p></li><li><p>平行</p><p>两个序列</p></li></ul><p>按逻辑划分：</p><ul><li>同向：每轮循环中，j走一步，满足条件时i走若干步，i的总步数往往小于j <ul><li>可是相向、背向、平行</li><li>累积：滑动窗口</li><li>数对 <ul><li>去重</li><li>端点</li><li>匹配</li><li>划分</li></ul></li></ul></li><li>逆向：每轮循环中，满足条件时i走一步，不满足条件时j走一步 <ul><li>可是相向、背向、平行</li><li>累积：前后缀</li><li>数对 <ul><li>2Sum</li><li>merge</li><li>Z型遍历</li><li>翻转 <ul><li>partition</li></ul></li></ul></li></ul></li></ul><h2 id="同向双指针" tabindex="-1"><a class="header-anchor" href="#同向双指针"><span>同向双指针</span></a></h2><p>每轮循环中，j走一步，满足条件时i走若干步，i的总步数往往小于j</p><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// [i, j], i是，在右边界为j时，符合条件下最靠左的位置</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">for</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> (</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> i </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> j </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> j </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&lt;</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> n</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> j</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">++</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">) {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    // 操作1</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    while</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> (i </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&lt;</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> j </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&amp;&amp;</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> check</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">(i</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> j)) {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">        // 答案1</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">        // 操作2</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">        i</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">++;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">    }</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    // 答案2</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>eg. 快排、归并、KMP 都是</p><h3 id="滑窗双指针" tabindex="-1"><a class="header-anchor" href="#滑窗双指针"><span>滑窗双指针</span></a></h3><p>同向双指针之间的窗口始终维护一个性质，如和、积、元素种类数等</p><h2 id="逆向双指针" tabindex="-1"><a class="header-anchor" href="#逆向双指针"><span>逆向双指针</span></a></h2><p>每轮循环中，满足条件时i走一步，不满足条件时j走一步</p><ul><li>同向遍历</li><li>相向遍历</li><li>Z形遍历</li></ul><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><hr><ul><li><p>同向双指针</p><ul><li>数对</li><li>滑窗</li><li>匹配</li></ul></li><li><p>逆向双指针（相向）</p><ul><li>2sum</li></ul></li></ul>`,19)]))}const k=l(e,[["render",t],["__file","index.html.vue"]]),d=JSON.parse(`{"path":"/algo/summary/optimise/decrease-conquer/2ptr/","title":"Two Pointers","lang":"en-US","frontmatter":{"description":"Two Pointers 双指针 核心：利用单调性，不走回头路，使 On2 -> On 按方向划分： 同向 相向 背向 判断回文串、中心往外扩散 平行 两个序列 按逻辑划分： 同向：每轮循环中，j走一步，满足条件时i走若干步，i的总步数往往小于j 可是相向、背向、平行 累积：滑动窗口 数对 去重 端点 匹配 划分 逆向：每轮循环中，满足条件时i走一步，...","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/algo/summary/optimise/decrease-conquer/2ptr/"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"Two Pointers"}],["meta",{"property":"og:description","content":"Two Pointers 双指针 核心：利用单调性，不走回头路，使 On2 -> On 按方向划分： 同向 相向 背向 判断回文串、中心往外扩散 平行 两个序列 按逻辑划分： 同向：每轮循环中，j走一步，满足条件时i走若干步，i的总步数往往小于j 可是相向、背向、平行 累积：滑动窗口 数对 去重 端点 匹配 划分 逆向：每轮循环中，满足条件时i走一步，..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2025-01-01T21:36:31.000Z"}],["meta",{"property":"article:modified_time","content":"2025-01-01T21:36:31.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Two Pointers\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-01-01T21:36:31.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[{"level":2,"title":"同向双指针","slug":"同向双指针","link":"#同向双指针","children":[{"level":3,"title":"滑窗双指针","slug":"滑窗双指针","link":"#滑窗双指针","children":[]}]},{"level":2,"title":"逆向双指针","slug":"逆向双指针","link":"#逆向双指针","children":[]}],"git":{"createdTime":1735767391000,"updatedTime":1735767391000,"contributors":[{"name":"刘大维","email":"davidliu@liudaweideMacBook-Pro-3.local","commits":1}]},"readingTime":{"minutes":1.16,"words":349},"filePathRelative":"algo/summary/optimise/decrease-conquer/2ptr/README.md","localizedDate":"January 1, 2025","excerpt":"\\n<p>双指针</p>\\n<p>核心：利用单调性，不走回头路，使 On2 -&gt; On</p>\\n<p>按方向划分：</p>\\n<ul>\\n<li>\\n<p>同向</p>\\n</li>\\n<li>\\n<p>相向</p>\\n</li>\\n<li>\\n<p>背向</p>\\n<p>判断回文串、中心往外扩散</p>\\n</li>\\n<li>\\n<p>平行</p>\\n<p>两个序列</p>\\n</li>\\n</ul>\\n<p>按逻辑划分：</p>\\n<ul>\\n<li>同向：每轮循环中，j走一步，满足条件时i走若干步，i的总步数往往小于j\\n<ul>\\n<li>可是相向、背向、平行</li>\\n<li>累积：滑动窗口</li>\\n<li>数对\\n<ul>\\n<li>去重</li>\\n<li>端点</li>\\n<li>匹配</li>\\n<li>划分</li>\\n</ul>\\n</li>\\n</ul>\\n</li>\\n<li>逆向：每轮循环中，满足条件时i走一步，不满足条件时j走一步\\n<ul>\\n<li>可是相向、背向、平行</li>\\n<li>累积：前后缀</li>\\n<li>数对\\n<ul>\\n<li>2Sum</li>\\n<li>merge</li>\\n<li>Z型遍历</li>\\n<li>翻转\\n<ul>\\n<li>partition</li>\\n</ul>\\n</li>\\n</ul>\\n</li>\\n</ul>\\n</li>\\n</ul>","autoDesc":true}`);export{k as comp,d as data};
