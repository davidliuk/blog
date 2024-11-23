import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,d as l,o as n}from"./app-Cv-jMnVl.js";const e={};function t(h,i){return n(),a("div",null,i[0]||(i[0]=[l(`<h1 id="双指针" tabindex="-1"><a class="header-anchor" href="#双指针"><span>双指针</span></a></h1><p>核心：不走回头路</p><p>On2 -&gt; On</p><p>按方向划分：</p><ul><li>同向</li><li>相向</li><li>背向</li><li>平行</li></ul><p>按逻辑划分：</p><ul><li>同向 <ul><li>一个每轮循环走一步，一个每轮循环不定步</li></ul></li><li>逆向 <ul><li>可是相向、背向、平行</li></ul></li></ul><h2 id="同向双指针" tabindex="-1"><a class="header-anchor" href="#同向双指针"><span>同向双指针</span></a></h2><p>一个动的快，一个动的慢</p><p>快排、归并、KMP 都是</p><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// [j, i], j是i符合条件下最靠左的位置</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">for</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> (</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> i </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> j </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> j </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&lt;</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> n</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> j</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">++</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">) {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">    </span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    while</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> (i </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&lt;</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> j </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&amp;&amp;</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> check</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">(i</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> j)) {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">        // 操作1</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">        i</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">++;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">    }</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    // 操作2</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="逆向双指针" tabindex="-1"><a class="header-anchor" href="#逆向双指针"><span>逆向双指针</span></a></h2><p>针对一个判断函数，一个指针动，另一个指针不动</p><ul><li>同向遍历</li><li>相向遍历</li><li>Z形遍历</li></ul><h2 id="滑窗双指针" tabindex="-1"><a class="header-anchor" href="#滑窗双指针"><span>滑窗双指针</span></a></h2><p>窗口中始终维护一个性质</p><hr><ul><li><p>同向双指针</p><ul><li>数对</li><li>滑窗</li><li>匹配</li></ul></li><li><p>逆向双指针（相向）</p><ul><li>2sum</li></ul></li></ul><p>背向双指针</p><p>基本上就判断回文串、中心往外扩散</p>`,20)]))}const r=s(e,[["render",t],["__file","index.html.vue"]]),d=JSON.parse(`{"path":"/algo/summary/optimise/decrease-conquer/binary/dual-pointer/","title":"双指针","lang":"en-US","frontmatter":{"description":"双指针 核心：不走回头路 On2 -> On 按方向划分： 同向 相向 背向 平行 按逻辑划分： 同向 一个每轮循环走一步，一个每轮循环不定步 逆向 可是相向、背向、平行 同向双指针 一个动的快，一个动的慢 快排、归并、KMP 都是 逆向双指针 针对一个判断函数，一个指针动，另一个指针不动 同向遍历 相向遍历 Z形遍历 滑窗双指针 窗口中始终维护一个性...","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/algo/summary/optimise/decrease-conquer/binary/dual-pointer/"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"双指针"}],["meta",{"property":"og:description","content":"双指针 核心：不走回头路 On2 -> On 按方向划分： 同向 相向 背向 平行 按逻辑划分： 同向 一个每轮循环走一步，一个每轮循环不定步 逆向 可是相向、背向、平行 同向双指针 一个动的快，一个动的慢 快排、归并、KMP 都是 逆向双指针 针对一个判断函数，一个指针动，另一个指针不动 同向遍历 相向遍历 Z形遍历 滑窗双指针 窗口中始终维护一个性..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-11-22T03:05:37.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-22T03:05:37.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"双指针\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-22T03:05:37.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[{"level":2,"title":"同向双指针","slug":"同向双指针","link":"#同向双指针","children":[]},{"level":2,"title":"逆向双指针","slug":"逆向双指针","link":"#逆向双指针","children":[]},{"level":2,"title":"滑窗双指针","slug":"滑窗双指针","link":"#滑窗双指针","children":[]}],"git":{"createdTime":1732244737000,"updatedTime":1732244737000,"contributors":[{"name":"David Liu","email":"liudawei@seas.upenn.edu","commits":1}]},"readingTime":{"minutes":0.72,"words":216},"filePathRelative":"algo/summary/optimise/decrease-conquer/binary/dual-pointer/README.md","localizedDate":"November 22, 2024","excerpt":"\\n<p>核心：不走回头路</p>\\n<p>On2 -&gt; On</p>\\n<p>按方向划分：</p>\\n<ul>\\n<li>同向</li>\\n<li>相向</li>\\n<li>背向</li>\\n<li>平行</li>\\n</ul>\\n<p>按逻辑划分：</p>\\n<ul>\\n<li>同向\\n<ul>\\n<li>一个每轮循环走一步，一个每轮循环不定步</li>\\n</ul>\\n</li>\\n<li>逆向\\n<ul>\\n<li>可是相向、背向、平行</li>\\n</ul>\\n</li>\\n</ul>\\n<h2>同向双指针</h2>\\n<p>一个动的快，一个动的慢</p>\\n<p>快排、归并、KMP 都是</p>\\n<div class=\\"language-java line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"java\\" data-title=\\"java\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\">// [j, i], j是i符合条件下最靠左的位置</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\">for</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\"> (</span><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\">int</span><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\"> i </span><span style=\\"--shiki-light:#383A42;--shiki-dark:#56B6C2\\">=</span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\"> 0</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">,</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\"> j </span><span style=\\"--shiki-light:#383A42;--shiki-dark:#56B6C2\\">=</span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\"> 0</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">;</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\"> j </span><span style=\\"--shiki-light:#383A42;--shiki-dark:#56B6C2\\">&lt;</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\"> n</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">;</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\"> j</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">++</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\">) {</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\">    </span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\">    while</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\"> (i </span><span style=\\"--shiki-light:#383A42;--shiki-dark:#56B6C2\\">&lt;</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\"> j </span><span style=\\"--shiki-light:#383A42;--shiki-dark:#56B6C2\\">&amp;&amp;</span><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\"> check</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\">(i</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">,</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\"> j)) {</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\">        // 操作1</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\">        i</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">++;</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\">    }</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\">    // 操作2</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\">}</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{r as comp,d as data};
