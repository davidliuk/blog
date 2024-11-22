import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,d as n,o as l}from"./app-DtA_0glx.js";const t={};function e(h,i){return l(),a("div",null,i[0]||(i[0]=[n(`<h1 id="java-17" tabindex="-1"><a class="header-anchor" href="#java-17"><span>Java 17</span></a></h1><h2 id="switch" tabindex="-1"><a class="header-anchor" href="#switch"><span>Switch</span></a></h2><h3 id="表达式扩展" tabindex="-1"><a class="header-anchor" href="#表达式扩展"><span>表达式扩展</span></a></h3><h3 id="模式匹配" tabindex="-1"><a class="header-anchor" href="#模式匹配"><span>模式匹配</span></a></h3><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">static</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> String</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> formatterPatternSwitch</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">(</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">Object</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> o) {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    return</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> switch</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> (o) {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        case</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> null</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> -</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;null&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        case</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> Integer</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> i</span><span style="--shiki-light:#C18401;--shiki-dark:#C678DD;">-&gt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> String</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">format</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;int %d&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,i);</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        case</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> Long</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> l </span><span style="--shiki-light:#C18401;--shiki-dark:#C678DD;">-&gt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> String</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">format</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;long %d&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,l);</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        case</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> Double</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> d </span><span style="--shiki-light:#C18401;--shiki-dark:#C678DD;">-&gt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> String</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">format</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;double %f&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,d);</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        case</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> String</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> s </span><span style="--shiki-light:#C18401;--shiki-dark:#C678DD;">-&gt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> String</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">format</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;String %s&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,s);</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        default</span><span style="--shiki-light:#C18401;--shiki-dark:#C678DD;"> -&gt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> o</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">getclass</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">().</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">getSimpleName</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">()</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">+</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">+</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">o</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">    }</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="instanceof-模式匹配" tabindex="-1"><a class="header-anchor" href="#instanceof-模式匹配"><span>Instanceof 模式匹配</span></a></h3><blockquote><p>JDK 14</p></blockquote><p>新的instanceof模式匹配 ，新的模式匹配的用法如下所示，在<code>instanceof</code>的类型之后添加了变量<code>str</code>。如果<code>instanceof</code>对<code>obj</code>的类型检查通过，<code>obj</code>会被转换成<code>str</code>表示的<code>String</code>类型。在新的用法中，<code>String</code>类型仅出现一次。</p><p>如果obj是String的实例，则将其强制转换为String并分配给绑定变量s。绑定变量在if语句的true块中，而不在if语句的false块中。</p><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">if</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> (obj </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">instanceof</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> String</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> s) {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    // 使用s</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">} </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">else</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    // 不能使用s</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="gc" tabindex="-1"><a class="header-anchor" href="#gc"><span>GC</span></a></h2><h3 id="删除-cms-垃圾回收器" tabindex="-1"><a class="header-anchor" href="#删除-cms-垃圾回收器"><span>删除 CMS 垃圾回收器</span></a></h3><blockquote><p>Java 14</p></blockquote><p>CMS 是老年代垃圾回收算法，通过标记-清除的方式进行内存回收，在内存回收过程中能够与用户线程并行执行。CMS 回收器可以与 Serial 回收器和 Parallel New 回收器搭配使用，CMS 主要通过并发的方式，适当减少系统的吞吐量以达到追求响应速度的目的，比较适合在追求 GC 速度的服务器上使用。</p><p>Java 9 中，就已经决定放弃使用 CMS 回收器了，而这次在 Java 14 中，是继之前 Java 9 中放弃使用 CMS 之后，彻底将其禁用，并删除与 CMS 有关的选项，同时清除与 CMS 有关的文档内容，至此曾经辉煌一度的 CMS 回收器，也将成为历史。</p><h3 id="g1-的-numa-可识别内存分配" tabindex="-1"><a class="header-anchor" href="#g1-的-numa-可识别内存分配"><span>G1 的 NUMA 可识别内存分配</span></a></h3><blockquote><p>Java 14</p></blockquote><h3 id="弃用-parallelscavenge-和-serialold-gc-的组合使用" tabindex="-1"><a class="header-anchor" href="#弃用-parallelscavenge-和-serialold-gc-的组合使用"><span><strong>弃用 ParallelScavenge 和 SerialOld GC 的组合使用</strong></span></a></h3><h3 id="禁用偏向锁定" tabindex="-1"><a class="header-anchor" href="#禁用偏向锁定"><span><strong>禁用偏向锁定</strong></span></a></h3><blockquote><p>Java 15</p></blockquote>`,20)]))}const r=s(t,[["render",e],["__file","java17.html.vue"]]),d=JSON.parse(`{"path":"/se/lang/java/feature/java17.html","title":"Java 17","lang":"en-US","frontmatter":{"description":"Java 17 Switch 表达式扩展 模式匹配 Instanceof 模式匹配 JDK 14 新的instanceof模式匹配 ，新的模式匹配的用法如下所示，在instanceof的类型之后添加了变量str。如果instanceof对obj的类型检查通过，obj会被转换成str表示的String类型。在新的用法中，String类型仅出现一次。 如果...","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/se/lang/java/feature/java17.html"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"Java 17"}],["meta",{"property":"og:description","content":"Java 17 Switch 表达式扩展 模式匹配 Instanceof 模式匹配 JDK 14 新的instanceof模式匹配 ，新的模式匹配的用法如下所示，在instanceof的类型之后添加了变量str。如果instanceof对obj的类型检查通过，obj会被转换成str表示的String类型。在新的用法中，String类型仅出现一次。 如果..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-05-08T07:35:02.000Z"}],["meta",{"property":"article:modified_time","content":"2024-05-08T07:35:02.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Java 17\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-05-08T07:35:02.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[{"level":2,"title":"Switch","slug":"switch","link":"#switch","children":[{"level":3,"title":"表达式扩展","slug":"表达式扩展","link":"#表达式扩展","children":[]},{"level":3,"title":"模式匹配","slug":"模式匹配","link":"#模式匹配","children":[]},{"level":3,"title":"Instanceof 模式匹配","slug":"instanceof-模式匹配","link":"#instanceof-模式匹配","children":[]}]},{"level":2,"title":"GC","slug":"gc","link":"#gc","children":[{"level":3,"title":"删除 CMS 垃圾回收器","slug":"删除-cms-垃圾回收器","link":"#删除-cms-垃圾回收器","children":[]},{"level":3,"title":"G1 的 NUMA 可识别内存分配","slug":"g1-的-numa-可识别内存分配","link":"#g1-的-numa-可识别内存分配","children":[]},{"level":3,"title":"弃用 ParallelScavenge 和 SerialOld GC 的组合使用","slug":"弃用-parallelscavenge-和-serialold-gc-的组合使用","link":"#弃用-parallelscavenge-和-serialold-gc-的组合使用","children":[]},{"level":3,"title":"禁用偏向锁定","slug":"禁用偏向锁定","link":"#禁用偏向锁定","children":[]}]}],"git":{"createdTime":1700646963000,"updatedTime":1715153702000,"contributors":[{"name":"davidliu","email":"liudawei47@jd.com","commits":1},{"name":"刘大维","email":"davidliu@liudaweideMacBook-Pro.local","commits":1}]},"readingTime":{"minutes":1.48,"words":443},"filePathRelative":"se/lang/java/feature/java17.md","localizedDate":"November 22, 2023","excerpt":"\\n<h2>Switch</h2>\\n<h3>表达式扩展</h3>\\n<h3>模式匹配</h3>\\n<div class=\\"language-java line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"java\\" data-title=\\"java\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\">static</span><span style=\\"--shiki-light:#C18401;--shiki-dark:#E5C07B\\"> String</span><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\"> formatterPatternSwitch</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\">(</span><span style=\\"--shiki-light:#C18401;--shiki-dark:#E5C07B\\">Object</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\"> o) {</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\">    return</span><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\"> switch</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\"> (o) {</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\">        case</span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\"> null</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#56B6C2\\"> -</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">\\"null\\"</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">;</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\">        case</span><span style=\\"--shiki-light:#C18401;--shiki-dark:#E5C07B\\"> Integer</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\"> i</span><span style=\\"--shiki-light:#C18401;--shiki-dark:#C678DD\\">-&gt;</span><span style=\\"--shiki-light:#E45649;--shiki-dark:#E5C07B\\"> String</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">.</span><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">format</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">(</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">\\"int %d\\"</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">,i);</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\">        case</span><span style=\\"--shiki-light:#C18401;--shiki-dark:#E5C07B\\"> Long</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\"> l </span><span style=\\"--shiki-light:#C18401;--shiki-dark:#C678DD\\">-&gt;</span><span style=\\"--shiki-light:#E45649;--shiki-dark:#E5C07B\\"> String</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">.</span><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">format</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">(</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">\\"long %d\\"</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">,l);</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\">        case</span><span style=\\"--shiki-light:#C18401;--shiki-dark:#E5C07B\\"> Double</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\"> d </span><span style=\\"--shiki-light:#C18401;--shiki-dark:#C678DD\\">-&gt;</span><span style=\\"--shiki-light:#E45649;--shiki-dark:#E5C07B\\"> String</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">.</span><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">format</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">(</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">\\"double %f\\"</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">,d);</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\">        case</span><span style=\\"--shiki-light:#C18401;--shiki-dark:#E5C07B\\"> String</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\"> s </span><span style=\\"--shiki-light:#C18401;--shiki-dark:#C678DD\\">-&gt;</span><span style=\\"--shiki-light:#E45649;--shiki-dark:#E5C07B\\"> String</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">.</span><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">format</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">(</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">\\"String %s\\"</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">,s);</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\">        default</span><span style=\\"--shiki-light:#C18401;--shiki-dark:#C678DD\\"> -&gt;</span><span style=\\"--shiki-light:#E45649;--shiki-dark:#E5C07B\\"> o</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">.</span><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">getclass</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">().</span><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">getSimpleName</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">()</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#56B6C2\\">+</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">\\"\\"</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#56B6C2\\">+</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\">o</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">;</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\">    }</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">;</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\">}</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{r as comp,d as data};
