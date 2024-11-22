import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,d as s,o as n}from"./app-DtA_0glx.js";const t={};function l(p,i){return n(),a("div",null,i[0]||(i[0]=[s(`<h1 id="枚举-宽树搜索" tabindex="-1"><a class="header-anchor" href="#枚举-宽树搜索"><span>枚举：宽树搜索</span></a></h1><p>枚举类问题的特点：</p><ol><li><p>深度线性</p><p>解空间的深度小于等于传入序列的长度</p><p>故栈空间占用始终是线性可解的</p></li><li><p>宽度指数</p><p>解空间的宽度呈现指数级别增长</p><p>每个节点可以扩散0-n个</p></li></ol><p>搜索</p><h2 id="简单枚举" tabindex="-1"><a class="header-anchor" href="#简单枚举"><span>简单枚举</span></a></h2><p>xxx</p><h2 id="排列枚举" tabindex="-1"><a class="header-anchor" href="#排列枚举"><span>排列枚举</span></a></h2><h3 id="序列全排列" tabindex="-1"><a class="header-anchor" href="#序列全排列"><span>序列全排列</span></a></h3><h3 id="下一个排列" tabindex="-1"><a class="header-anchor" href="#下一个排列"><span>下一个排列</span></a></h3><h2 id="子集枚举" tabindex="-1"><a class="header-anchor" href="#子集枚举"><span>子集枚举</span></a></h2><p>从代码量看，枚举子集的最简单方法是二进制法</p><h3 id="增量构造法" tabindex="-1"><a class="header-anchor" href="#增量构造法"><span>增量构造法</span></a></h3><p>需要使用定序的技巧，避免同一个集合枚举多次</p><h3 id="位向量法" tabindex="-1"><a class="header-anchor" href="#位向量法"><span>位向量法</span></a></h3><p>解答树的节点略多，但是大多数情况下也足够使用</p><h3 id="二进制法" tabindex="-1"><a class="header-anchor" href="#二进制法"><span>二进制法</span></a></h3><p>二进制表达子集S，从右往左第i位（从0开始编号），表示元素i是否在集合S中（0为不在，1为在）</p><p>二进制集合的运算，交并对称差：<code>&amp;|^</code></p><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">for</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> (</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> s </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> s </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&lt;</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> (</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> &lt;&lt;</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> n)</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> s</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">++</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">) {</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    printSubset</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">(s)</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,19)]))}const d=e(t,[["render",l],["__file","index.html.vue"]]),o=JSON.parse(`{"path":"/algo/summary/search/DFS/enumerate/","title":"枚举：宽树搜索","lang":"en-US","frontmatter":{"description":"枚举：宽树搜索 枚举类问题的特点： 深度线性 解空间的深度小于等于传入序列的长度 故栈空间占用始终是线性可解的 宽度指数 解空间的宽度呈现指数级别增长 每个节点可以扩散0-n个 搜索 简单枚举 xxx 排列枚举 序列全排列 下一个排列 子集枚举 从代码量看，枚举子集的最简单方法是二进制法 增量构造法 需要使用定序的技巧，避免同一个集合枚举多次 位向量法...","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/algo/summary/search/DFS/enumerate/"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"枚举：宽树搜索"}],["meta",{"property":"og:description","content":"枚举：宽树搜索 枚举类问题的特点： 深度线性 解空间的深度小于等于传入序列的长度 故栈空间占用始终是线性可解的 宽度指数 解空间的宽度呈现指数级别增长 每个节点可以扩散0-n个 搜索 简单枚举 xxx 排列枚举 序列全排列 下一个排列 子集枚举 从代码量看，枚举子集的最简单方法是二进制法 增量构造法 需要使用定序的技巧，避免同一个集合枚举多次 位向量法..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-11-22T03:05:37.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-22T03:05:37.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"枚举：宽树搜索\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-22T03:05:37.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[{"level":2,"title":"简单枚举","slug":"简单枚举","link":"#简单枚举","children":[]},{"level":2,"title":"排列枚举","slug":"排列枚举","link":"#排列枚举","children":[{"level":3,"title":"序列全排列","slug":"序列全排列","link":"#序列全排列","children":[]},{"level":3,"title":"下一个排列","slug":"下一个排列","link":"#下一个排列","children":[]}]},{"level":2,"title":"子集枚举","slug":"子集枚举","link":"#子集枚举","children":[{"level":3,"title":"增量构造法","slug":"增量构造法","link":"#增量构造法","children":[]},{"level":3,"title":"位向量法","slug":"位向量法","link":"#位向量法","children":[]},{"level":3,"title":"二进制法","slug":"二进制法","link":"#二进制法","children":[]}]}],"git":{"createdTime":1732244737000,"updatedTime":1732244737000,"contributors":[{"name":"David Liu","email":"liudawei@seas.upenn.edu","commits":1}]},"readingTime":{"minutes":0.81,"words":243},"filePathRelative":"algo/summary/search/DFS/enumerate/README.md","localizedDate":"November 22, 2024","excerpt":"\\n<p>枚举类问题的特点：</p>\\n<ol>\\n<li>\\n<p>深度线性</p>\\n<p>解空间的深度小于等于传入序列的长度</p>\\n<p>故栈空间占用始终是线性可解的</p>\\n</li>\\n<li>\\n<p>宽度指数</p>\\n<p>解空间的宽度呈现指数级别增长</p>\\n<p>每个节点可以扩散0-n个</p>\\n</li>\\n</ol>\\n<p>搜索</p>\\n<h2>简单枚举</h2>\\n<p>xxx</p>\\n<h2>排列枚举</h2>\\n<h3>序列全排列</h3>\\n<h3>下一个排列</h3>\\n<h2>子集枚举</h2>\\n<p>从代码量看，枚举子集的最简单方法是二进制法</p>\\n<h3>增量构造法</h3>","autoDesc":true}`);export{d as comp,o as data};
