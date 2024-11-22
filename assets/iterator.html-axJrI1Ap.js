import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as e,d as t,o as a}from"./app-UiaY2OnX.js";const n={};function l(r,i){return a(),e("div",null,i[0]||(i[0]=[t(`<h1 id="iterator" tabindex="-1"><a class="header-anchor" href="#iterator"><span>Iterator</span></a></h1><ul><li><code>enumerate(iterable, start=0)</code></li><li><code>range(start, stop, step)</code></li></ul><h3 id="iterator-vs-iterable" tabindex="-1"><a class="header-anchor" href="#iterator-vs-iterable"><span>Iterator vs Iterable</span></a></h3><ul><li>可迭代类，必须自定义__iter__()魔法方法，range，list类的实例化对象都是可迭代对象</li><li>迭代器类，必须自定义__iter__()和__next__()魔法方法，用iter()函数可以创建可迭代对象的迭代器</li></ul><h2 id="generators" tabindex="-1"><a class="header-anchor" href="#generators"><span>Generators</span></a></h2><p>生成器是一种可迭代对象，可以挂起并保持当前的状态</p><p>生成器遇到yield处会停止执行，调用next()或send()才会继续执行</p><p>定义一个生成器有两种方式，</p><ol><li>生成器推导式</li><li>生成器函数，在函数中添加yield语句并实例化</li></ol><div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(expression </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">for</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> item </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">in</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> iterable </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> condition)</span><span style="--shiki-light:#000000;--shiki-dark:#FFFFFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">def</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> frange</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#D19A66;--shiki-dark-font-style:italic;">start</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#D19A66;--shiki-dark-font-style:italic;"> stop</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#D19A66;--shiki-dark-font-style:italic;"> increment</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">):</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    x </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> start</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    while</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> x </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&lt;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> stop:</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        yield</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> x</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        x </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">+=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> increment</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">for</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> n </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">in</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF;"> frange</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">0.5</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">):</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">    print</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(n)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>生成器(generator)可以简单理解为懒人版本的迭代器。</p><p>它相比于迭代器的优势是，生成器并不会像迭代器一样占用大量内存。比如声明一个迭代器：<code>[i for i in range(100000000)]</code>就可以声明一个包含一亿个元素的列表，每个元素在生成后都会保存到内存中。但实际上我们也许并不需要保存那么多东西，只希望在你用 next() 函数的时候，才会生成下一个变量，因此生成器应运而生，在python中的写法为(i for i in range(100000000))</p><p>此外，生成器还可以有别的形式，比如生成器函数，通过yield关键字，把结果返回到next()方法中，举个例子：</p><p>相比于迭代器，生成器具有以下优点：</p><ol><li>减少内存</li><li>延迟计算</li><li>有效提高代码可读性</li></ol>`,15)]))}const k=s(n,[["render",l],["__file","iterator.html.vue"]]),d=JSON.parse(`{"path":"/se/lang/python/iterator.html","title":"Iterator","lang":"en-US","frontmatter":{"description":"Iterator enumerate(iterable, start=0) range(start, stop, step) Iterator vs Iterable 可迭代类，必须自定义__iter__()魔法方法，range，list类的实例化对象都是可迭代对象 迭代器类，必须自定义__iter__()和__next__()魔法方法，用iter()...","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/se/lang/python/iterator.html"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"Iterator"}],["meta",{"property":"og:description","content":"Iterator enumerate(iterable, start=0) range(start, stop, step) Iterator vs Iterable 可迭代类，必须自定义__iter__()魔法方法，range，list类的实例化对象都是可迭代对象 迭代器类，必须自定义__iter__()和__next__()魔法方法，用iter()..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-11-22T02:01:32.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-22T02:01:32.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Iterator\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-22T02:01:32.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[{"level":3,"title":"Iterator vs Iterable","slug":"iterator-vs-iterable","link":"#iterator-vs-iterable","children":[]},{"level":2,"title":"Generators","slug":"generators","link":"#generators","children":[]}],"git":{"createdTime":1732240892000,"updatedTime":1732240892000,"contributors":[{"name":"David Liu","email":"liudawei@seas.upenn.edu","commits":1}]},"readingTime":{"minutes":1.41,"words":424},"filePathRelative":"se/lang/python/iterator.md","localizedDate":"November 22, 2024","excerpt":"\\n<ul>\\n<li><code>enumerate(iterable, start=0)</code></li>\\n<li><code>range(start, stop, step)</code></li>\\n</ul>\\n<h3>Iterator vs Iterable</h3>\\n<ul>\\n<li>可迭代类，必须自定义__iter__()魔法方法，range，list类的实例化对象都是可迭代对象</li>\\n<li>迭代器类，必须自定义__iter__()和__next__()魔法方法，用iter()函数可以创建可迭代对象的迭代器</li>\\n</ul>\\n<h2>Generators</h2>\\n<p>生成器是一种可迭代对象，可以挂起并保持当前的状态</p>","autoDesc":true}`);export{k as comp,d as data};
