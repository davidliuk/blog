import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as e,d as s,e as l,o as t,r as p}from"./app-B6s9NXTg.js";const h={};function d(r,i){const a=p("Mermaid");return t(),e("div",null,[i[0]||(i[0]=s(`<h1 id="类型转换-type-casting" tabindex="-1"><a class="header-anchor" href="#类型转换-type-casting"><span>类型转换 Type Casting</span></a></h1><p>类型系统通过各种机制和特性，如类型提升、泛型、自动装箱/拆箱、方法重载和重写等，确保了类型在操作中的一致性和兼容性。这些都是Java作为一种强类型语言的重要特征。</p><h2 id="类型转换" tabindex="-1"><a class="header-anchor" href="#类型转换"><span>类型转换</span></a></h2><h3 id="自动类型转换" tabindex="-1"><a class="header-anchor" href="#自动类型转换"><span>自动类型转换</span></a></h3><p>Widening</p><p>自动类型转换是指：数字表示范围小的数据类型可以自动转换成范围大的数据类型。</p><h3 id="强制类型转换" tabindex="-1"><a class="header-anchor" href="#强制类型转换"><span>强制类型转换</span></a></h3><p>强制类型转换我们再清楚不过了，即强制显示的把一个数据类型转换为另外一种数据类型。</p><p>如：</p><div class="language-text line-numbers-mode" data-highlighter="shiki" data-ext="text" data-title="text" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>short s = 199;</span></span>
<span class="line"><span>int i = s;// 199</span></span>
<span class="line"><span></span></span>
<span class="line"><span>double d = 10.24;</span></span>
<span class="line"><span>long ll = (long) d;// 10</span></span>
<span class="line"><span></span></span>
<span class="line"><span>int a = 30;</span></span>
<span class="line"><span>char c = (char) a;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以上的转换结果都在我们的预期之内，属于正常的转换和丢失精度的情况，下面的例子就一样属于数据溢出的情况。</p><div class="language-text line-numbers-mode" data-highlighter="shiki" data-ext="text" data-title="text" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>int ii = 300;</span></span>
<span class="line"><span>byte b = (byte)ii;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>300 已经超出了 byte 类型表示的范围，所以会转换成一个毫无意义的数字（溢出的位直接丢掉）。</p><p>精度丢失</p><h3 id="类型提升" tabindex="-1"><a class="header-anchor" href="#类型提升"><span>类型提升</span></a></h3><p>数据类型按精度大小排序为：</p>`,16)),l(a,{id:"mermaid-44",code:"eJxLL0osyFDwCbLmUgCC5IzEIgVdXTuFzLwSiEhSZUkqWKQ4I78IKgZmoioDMsACOfl56RAREAsslJaTnwhVBWaCBVPyS5NyUq25AImRIl4="}),i[1]||(i[1]=s(`<p>类型提升：在多种不同数据类型的表达式中，类型会自动向范围表示大的值的数据类型提升。</p><p>把上面的溢出的例子再改下。</p><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> i </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 100</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">    </span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">long</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> l </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> i</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">  // 无需类型转换</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">float</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> f </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> l</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">  // long 自动提升为 float</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">byte</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> b </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 25</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> ni </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> b</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">   // byte 自动提升为 int</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">char</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> ch </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;A&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> chi </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> ch</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> // char 自动提升为 int</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当我们把精度（容量）大的数据类型赋值给精度（容量）小的数据类型，就会报错，反之则自动转换。</p><h2 id="转型-casting" tabindex="-1"><a class="header-anchor" href="#转型-casting"><span>转型 Casting</span></a></h2><h3 id="向上转型" tabindex="-1"><a class="header-anchor" href="#向上转型"><span>向上转型</span></a></h3><p>谢谢</p><h3 id="向下转型" tabindex="-1"><a class="header-anchor" href="#向下转型"><span>向下转型</span></a></h3><p>谢谢</p><h2 id="类型对齐" tabindex="-1"><a class="header-anchor" href="#类型对齐"><span>类型对齐</span></a></h2>`,10))])}const g=n(h,[["render",d],["__file","类型转换.html.vue"]]),o=JSON.parse(`{"path":"/se/lang/java/basic/type/%E7%B1%BB%E5%9E%8B%E8%BD%AC%E6%8D%A2.html","title":"类型转换 Type Casting","lang":"en-US","frontmatter":{"description":"类型转换 Type Casting 类型系统通过各种机制和特性，如类型提升、泛型、自动装箱/拆箱、方法重载和重写等，确保了类型在操作中的一致性和兼容性。这些都是Java作为一种强类型语言的重要特征。 类型转换 自动类型转换 Widening 自动类型转换是指：数字表示范围小的数据类型可以自动转换成范围大的数据类型。 强制类型转换 强制类型转换我们再清楚...","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/se/lang/java/basic/type/%E7%B1%BB%E5%9E%8B%E8%BD%AC%E6%8D%A2.html"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"类型转换 Type Casting"}],["meta",{"property":"og:description","content":"类型转换 Type Casting 类型系统通过各种机制和特性，如类型提升、泛型、自动装箱/拆箱、方法重载和重写等，确保了类型在操作中的一致性和兼容性。这些都是Java作为一种强类型语言的重要特征。 类型转换 自动类型转换 Widening 自动类型转换是指：数字表示范围小的数据类型可以自动转换成范围大的数据类型。 强制类型转换 强制类型转换我们再清楚..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-01-08T03:06:14.000Z"}],["meta",{"property":"article:modified_time","content":"2024-01-08T03:06:14.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"类型转换 Type Casting\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-01-08T03:06:14.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[{"level":2,"title":"类型转换","slug":"类型转换","link":"#类型转换","children":[{"level":3,"title":"自动类型转换","slug":"自动类型转换","link":"#自动类型转换","children":[]},{"level":3,"title":"强制类型转换","slug":"强制类型转换","link":"#强制类型转换","children":[]},{"level":3,"title":"类型提升","slug":"类型提升","link":"#类型提升","children":[]}]},{"level":2,"title":"转型 Casting","slug":"转型-casting","link":"#转型-casting","children":[{"level":3,"title":"向上转型","slug":"向上转型","link":"#向上转型","children":[]},{"level":3,"title":"向下转型","slug":"向下转型","link":"#向下转型","children":[]}]},{"level":2,"title":"类型对齐","slug":"类型对齐","link":"#类型对齐","children":[]}],"git":{"createdTime":1704683174000,"updatedTime":1704683174000,"contributors":[{"name":"davidliu","email":"liudawei47@jd.com","commits":1}]},"readingTime":{"minutes":1.6,"words":481},"filePathRelative":"se/lang/java/basic/type/类型转换.md","localizedDate":"January 8, 2024","excerpt":"\\n<p>类型系统通过各种机制和特性，如类型提升、泛型、自动装箱/拆箱、方法重载和重写等，确保了类型在操作中的一致性和兼容性。这些都是Java作为一种强类型语言的重要特征。</p>\\n<h2>类型转换</h2>\\n<h3>自动类型转换</h3>\\n<p>Widening</p>\\n<p>自动类型转换是指：数字表示范围小的数据类型可以自动转换成范围大的数据类型。</p>\\n<h3>强制类型转换</h3>\\n<p>强制类型转换我们再清楚不过了，即强制显示的把一个数据类型转换为另外一种数据类型。</p>\\n<p>如：</p>\\n<div class=\\"language-text line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"text\\" data-title=\\"text\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span>short s = 199;</span></span>\\n<span class=\\"line\\"><span>int i = s;// 199</span></span>\\n<span class=\\"line\\"><span></span></span>\\n<span class=\\"line\\"><span>double d = 10.24;</span></span>\\n<span class=\\"line\\"><span>long ll = (long) d;// 10</span></span>\\n<span class=\\"line\\"><span></span></span>\\n<span class=\\"line\\"><span>int a = 30;</span></span>\\n<span class=\\"line\\"><span>char c = (char) a;</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{g as comp,o as data};
