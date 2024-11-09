import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as e,b as a,o as s}from"./app-B3ooTv29.js";const l={};function n(d,i){return s(),e("div",null,i[0]||(i[0]=[a(`<h1 id="基本数据类型" tabindex="-1"><a class="header-anchor" href="#基本数据类型"><span>基本数据类型</span></a></h1><p>Java 中有 8 种基本数据类型，分别为：</p><ul><li>6 种数字类型： <ul><li>4 种整数型：<code>byte</code>、<code>short</code>、<code>int</code>、<code>long</code></li><li>2 种浮点型：<code>float</code>、<code>double</code></li></ul></li><li>1 种字符类型：<code>char</code></li><li>1 种布尔型：<code>boolean</code></li></ul><p>间的大小如下：</p><table><thead><tr><th>基本类型</th><th>位数</th><th>字节</th><th>默认值</th></tr></thead><tbody><tr><td>int</td><td>32</td><td>4</td><td>0</td></tr><tr><td>short</td><td>16</td><td>2</td><td>0</td></tr><tr><td>long</td><td>64</td><td>8</td><td>0L</td></tr><tr><td>byte</td><td>8</td><td>1</td><td>0</td></tr><tr><td>char</td><td>16</td><td>2</td><td>&#39;u0000&#39;</td></tr><tr><td>float</td><td>32</td><td>4</td><td>0f</td></tr><tr><td>double</td><td>64</td><td>8</td><td>0d</td></tr><tr><td>boolean</td><td>1</td><td></td><td>false</td></tr></tbody></table><h2 id="数字精度" tabindex="-1"><a class="header-anchor" href="#数字精度"><span>数字精度</span></a></h2><h3 id="浮点数丢精" tabindex="-1"><a class="header-anchor" href="#浮点数丢精"><span>浮点数丢精</span></a></h3><p><a href="https://juejin.cn/post/7322313142922559498?utm_source=gold_browser_extension#heading-0" target="_blank" rel="noopener noreferrer">问题</a></p><p>浮点数的存储采用IEEE754协议</p><p>0.1不能被精确表达</p><p>0.1+0.2不等于0.3，是0.300000000000004</p><p>解决方法</p><ol><li><code>(0.1*10+0.2*10)/10</code></li><li>BigDecimal</li></ol><h3 id="大整数存储" tabindex="-1"><a class="header-anchor" href="#大整数存储"><span>大整数存储</span></a></h3><h2 id="包装类型" tabindex="-1"><a class="header-anchor" href="#包装类型"><span>包装类型</span></a></h2><h3 id="常量池技术-缓存机制" tabindex="-1"><a class="header-anchor" href="#常量池技术-缓存机制"><span>常量池技术/缓存机制</span></a></h3><p><code>Byte</code>,<code>Short</code>,<code>Integer</code>,<code>Long</code> 这 4 种包装类默认创建了数值 <strong>[-128，127]</strong> 的相应类型的缓存数据，</p><p><code>Character</code> 创建了数值在 <strong>[0,127]</strong> 范围的缓存数据</p><p><code>Boolean</code> 包装了 TRUE 和 FALSE 两个对象。直接返回 <code>True</code> or <code>False</code>。</p><p>两种浮点数类型的包装类 Float,Double 并没有实现常量池技术。</p><p>记住：<strong>所有整型包装类对象之间值的比较，全部使用 equals 方法比较</strong>。</p><h3 id="自动拆装箱" tabindex="-1"><a class="header-anchor" href="#自动拆装箱"><span>自动拆装箱</span></a></h3><p>从字节码中，我们发现装箱其实就是调用了 包装类的<code>valueOf()</code>方法，拆箱其实就是调用了 <code>xxxValue()</code>方法。</p><p>由于可能是null对象，所以自动拆箱的时候可能产生NPE。</p><p><strong>三目运算符使用不当会导致诡异的 NPE 异常</strong>：</p><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> class</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> Main</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> static</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> void</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> main</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">String</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[] </span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">args</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">        Integer</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> i</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> null</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">        Boolean</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> flag</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> false</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">        System</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">out</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">println</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(flag </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">?</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 0</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> :</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> i);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="类型对齐" tabindex="-1"><a class="header-anchor" href="#类型对齐"><span>类型对齐</span></a></h3>`,27)]))}const r=t(l,[["render",n],["__file","基本类型.html.vue"]]),p=JSON.parse(`{"path":"/se/lang/java/basic/type/%E5%9F%BA%E6%9C%AC%E7%B1%BB%E5%9E%8B.html","title":"基本数据类型","lang":"en-US","frontmatter":{"description":"基本数据类型 Java 中有 8 种基本数据类型，分别为： 6 种数字类型： 4 种整数型：byte、short、int、long 2 种浮点型：float、double 1 种字符类型：char 1 种布尔型：boolean 间的大小如下： 数字精度 浮点数丢精 问题 浮点数的存储采用IEEE754协议 0.1不能被精确表达 0.1+0.2不等于0....","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/se/lang/java/basic/type/%E5%9F%BA%E6%9C%AC%E7%B1%BB%E5%9E%8B.html"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"基本数据类型"}],["meta",{"property":"og:description","content":"基本数据类型 Java 中有 8 种基本数据类型，分别为： 6 种数字类型： 4 种整数型：byte、short、int、long 2 种浮点型：float、double 1 种字符类型：char 1 种布尔型：boolean 间的大小如下： 数字精度 浮点数丢精 问题 浮点数的存储采用IEEE754协议 0.1不能被精确表达 0.1+0.2不等于0...."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-05-08T07:35:02.000Z"}],["meta",{"property":"article:modified_time","content":"2024-05-08T07:35:02.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"基本数据类型\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-05-08T07:35:02.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[{"level":2,"title":"数字精度","slug":"数字精度","link":"#数字精度","children":[{"level":3,"title":"浮点数丢精","slug":"浮点数丢精","link":"#浮点数丢精","children":[]},{"level":3,"title":"大整数存储","slug":"大整数存储","link":"#大整数存储","children":[]}]},{"level":2,"title":"包装类型","slug":"包装类型","link":"#包装类型","children":[{"level":3,"title":"常量池技术/缓存机制","slug":"常量池技术-缓存机制","link":"#常量池技术-缓存机制","children":[]},{"level":3,"title":"自动拆装箱","slug":"自动拆装箱","link":"#自动拆装箱","children":[]},{"level":3,"title":"类型对齐","slug":"类型对齐","link":"#类型对齐","children":[]}]}],"git":{"createdTime":1679321449000,"updatedTime":1715153702000,"contributors":[{"name":"刘大维","email":"davidliu@liudaweideMacBook-Pro.local","commits":3},{"name":"davidliuk","email":"l729641074@163.com","commits":2},{"name":"davidliu","email":"liudawei47@jd.com","commits":1},{"name":"liudawei47","email":"liudawei47@jd.com","commits":1}]},"readingTime":{"minutes":1.32,"words":396},"filePathRelative":"se/lang/java/basic/type/基本类型.md","localizedDate":"March 20, 2023","excerpt":"\\n<p>Java 中有 8 种基本数据类型，分别为：</p>\\n<ul>\\n<li>6 种数字类型：\\n<ul>\\n<li>4 种整数型：<code>byte</code>、<code>short</code>、<code>int</code>、<code>long</code></li>\\n<li>2 种浮点型：<code>float</code>、<code>double</code></li>\\n</ul>\\n</li>\\n<li>1 种字符类型：<code>char</code></li>\\n<li>1 种布尔型：<code>boolean</code></li>\\n</ul>\\n<p>间的大小如下：</p>","autoDesc":true}`);export{r as comp,p as data};
