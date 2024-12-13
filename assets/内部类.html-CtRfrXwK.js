import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,d as t,o as e}from"./app-DIqbhby7.js";const n={};function l(h,i){return e(),a("div",null,i[0]||(i[0]=[t(`<h1 id="内部类" tabindex="-1"><a class="header-anchor" href="#内部类"><span>内部类</span></a></h1><p>必要性：</p><p>每一个内部类都可以继承一个类，或者实现若干个接口，从而达到多继承的目的</p><h2 id="匿名内部类" tabindex="-1"><a class="header-anchor" href="#匿名内部类"><span>匿名内部类</span></a></h2><p>无自己的构造方法，但是可以有初始化块</p><p>常用于：</p><ol><li><p>一个 final 的 HashMap 初始化，可以直接一条语句写完很方便。</p><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">Map</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">State</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> State</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">[]</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">&gt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> table </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> new</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> HashMap</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">State</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> State</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">[]</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">() {{
    put(State.START, new State[]{State.START, State.SIGNED, State.IN_NUMBER, State.END});
    put(State.SIGNED, new State[]{State.END, State.END, State.IN_NUMBER, State.END});
    put(State.IN_NUMBER, new State[]{State.END, State.END, State.IN_NUMBER, State.END});
    put(State.END, new State[]{State.END, State.END, State.END, State.END});
}}</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>拓展 PriorityQueue 功能，让他可以直接引用别人的数组且有自己的比较器，来不占用别人的空间，实现原地堆排序（Onlogn, O1），普通的 int[]还是直接 Arrays.sort 即可，这个没法实现，哎，因为是 private</p><p>常用于一个二维 int 按某一位比较，如：xx，实现不了，看来堆排序只能手撕了，不需要堆排的时候老老实实 Arrays.sort 吧</p><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">[][] values</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// values = xxx;</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">PriorityQueue</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#C18401;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">[][]</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">&gt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> pq </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> new</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> PriorityQueue</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#C18401;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">[][]</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">((a</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> b) </span><span style="--shiki-light:#C18401;--shiki-dark:#C678DD;">-&gt;</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> a[</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">] </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> b[</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">]) {{
    queue = values;
    size = values.size;
    heapify();
}}</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li></li></ol><p>文章：</p><p><a href="https://www.jianshu.com/p/4eb6afb74c82" target="_blank" rel="noopener noreferrer">https://www.jianshu.com/p/4eb6afb74c82</a></p><p><a href="https://www.jb51.net/article/233479.htm" target="_blank" rel="noopener noreferrer">https://www.jb51.net/article/233479.htm</a></p><p><a href="http://www.bjpowernode.com/javazixun/4712.html" target="_blank" rel="noopener noreferrer">http://www.bjpowernode.com/javazixun/4712.html</a></p>`,11)]))}const r=s(n,[["render",l],["__file","内部类.html.vue"]]),d=JSON.parse(`{"path":"/se/lang/java/basic/class/%E5%86%85%E9%83%A8%E7%B1%BB.html","title":"内部类","lang":"en-US","frontmatter":{"description":"内部类 必要性： 每一个内部类都可以继承一个类，或者实现若干个接口，从而达到多继承的目的 匿名内部类 无自己的构造方法，但是可以有初始化块 常用于： 一个 final 的 HashMap 初始化，可以直接一条语句写完很方便。 拓展 PriorityQueue 功能，让他可以直接引用别人的数组且有自己的比较器，来不占用别人的空间，实现原地堆排序（Onlo...","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/se/lang/java/basic/class/%E5%86%85%E9%83%A8%E7%B1%BB.html"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"内部类"}],["meta",{"property":"og:description","content":"内部类 必要性： 每一个内部类都可以继承一个类，或者实现若干个接口，从而达到多继承的目的 匿名内部类 无自己的构造方法，但是可以有初始化块 常用于： 一个 final 的 HashMap 初始化，可以直接一条语句写完很方便。 拓展 PriorityQueue 功能，让他可以直接引用别人的数组且有自己的比较器，来不占用别人的空间，实现原地堆排序（Onlo..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-08-21T10:17:45.000Z"}],["meta",{"property":"article:modified_time","content":"2023-08-21T10:17:45.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"内部类\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-08-21T10:17:45.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[{"level":2,"title":"匿名内部类","slug":"匿名内部类","link":"#匿名内部类","children":[]}],"git":{"createdTime":1673495221000,"updatedTime":1692613065000,"contributors":[{"name":"刘大维","email":"davidliu@liudaweideMacBook-Pro.local","commits":2},{"name":"davidliuk","email":"l729641074@163.com","commits":1},{"name":"liudawei47","email":"liudawei47@jd.com","commits":1}]},"readingTime":{"minutes":0.9,"words":270},"filePathRelative":"se/lang/java/basic/class/内部类.md","localizedDate":"January 12, 2023","excerpt":"\\n<p>必要性：</p>\\n<p>每一个内部类都可以继承一个类，或者实现若干个接口，从而达到多继承的目的</p>\\n<h2>匿名内部类</h2>\\n<p>无自己的构造方法，但是可以有初始化块</p>\\n<p>常用于：</p>\\n<ol>\\n<li>\\n<p>一个 final 的 HashMap 初始化，可以直接一条语句写完很方便。</p>\\n<div class=\\"language-java line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"java\\" data-title=\\"java\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span style=\\"--shiki-light:#C18401;--shiki-dark:#E5C07B\\">Map</span><span style=\\"--shiki-light:#E45649;--shiki-dark:#ABB2BF\\">&lt;</span><span style=\\"--shiki-light:#C18401;--shiki-dark:#E5C07B\\">State</span><span style=\\"--shiki-light:#E45649;--shiki-dark:#ABB2BF\\">,</span><span style=\\"--shiki-light:#C18401;--shiki-dark:#E5C07B\\"> State</span><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\">[]</span><span style=\\"--shiki-light:#E45649;--shiki-dark:#ABB2BF\\">&gt;</span><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\"> table </span><span style=\\"--shiki-light:#383A42;--shiki-dark:#56B6C2\\">=</span><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\"> new</span><span style=\\"--shiki-light:#C18401;--shiki-dark:#E5C07B\\"> HashMap</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">&lt;</span><span style=\\"--shiki-light:#C18401;--shiki-dark:#E5C07B\\">State</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">,</span><span style=\\"--shiki-light:#C18401;--shiki-dark:#E5C07B\\"> State</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\">[]</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">&gt;</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\">() {{\\n    put(State.START, new State[]{State.START, State.SIGNED, State.IN_NUMBER, State.END});\\n    put(State.SIGNED, new State[]{State.END, State.END, State.IN_NUMBER, State.END});\\n    put(State.IN_NUMBER, new State[]{State.END, State.END, State.IN_NUMBER, State.END});\\n    put(State.END, new State[]{State.END, State.END, State.END, State.END});\\n}}</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">;</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div></li>\\n<li>\\n<p>拓展 PriorityQueue 功能，让他可以直接引用别人的数组且有自己的比较器，来不占用别人的空间，实现原地堆排序（Onlogn, O1），普通的 int[]还是直接 Arrays.sort 即可，这个没法实现，哎，因为是 private</p>\\n<p>常用于一个二维 int 按某一位比较，如：xx，实现不了，看来堆排序只能手撕了，不需要堆排的时候老老实实 Arrays.sort 吧</p>\\n<div class=\\"language-java line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"java\\" data-title=\\"java\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span style=\\"--shiki-light:#C18401;--shiki-dark:#C678DD\\">int</span><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\">[][] values</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">;</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\">// values = xxx;</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#C18401;--shiki-dark:#E5C07B\\">PriorityQueue</span><span style=\\"--shiki-light:#E45649;--shiki-dark:#ABB2BF\\">&lt;</span><span style=\\"--shiki-light:#C18401;--shiki-dark:#C678DD\\">int</span><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\">[][]</span><span style=\\"--shiki-light:#E45649;--shiki-dark:#ABB2BF\\">&gt;</span><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\"> pq </span><span style=\\"--shiki-light:#383A42;--shiki-dark:#56B6C2\\">=</span><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\"> new</span><span style=\\"--shiki-light:#C18401;--shiki-dark:#E5C07B\\"> PriorityQueue</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">&lt;</span><span style=\\"--shiki-light:#C18401;--shiki-dark:#C678DD\\">int</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\">[][]</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">&gt;</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\">((a</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">,</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\"> b) </span><span style=\\"--shiki-light:#C18401;--shiki-dark:#C678DD\\">-&gt;</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\"> a[</span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\">1</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\">] </span><span style=\\"--shiki-light:#383A42;--shiki-dark:#56B6C2\\">-</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\"> b[</span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\">1</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\">]) {{\\n    queue = values;\\n    size = values.size;\\n    heapify();\\n}}</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">;</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div></li>\\n<li></li>\\n</ol>","autoDesc":true}`);export{r as comp,d as data};
