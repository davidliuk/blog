import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,d as n,o as e}from"./app-D4ZvIHfO.js";const t={};function l(h,s){return e(),a("div",null,s[0]||(s[0]=[n(`<h1 id="decorators-装饰器" tabindex="-1"><a class="header-anchor" href="#decorators-装饰器"><span>Decorators 装饰器</span></a></h1><blockquote><p>类似于Java的注解，实现类似于AOP，但是是通过闭包的形式</p></blockquote><p><strong>说明</strong>：装饰器可以用来装饰类或函数，为其提供额外的能力，属于设计模式中的<strong>代理模式</strong>。</p><p><strong>装饰器本身也可以参数化</strong>，例如上面的例子中，如果不希望在终端中显示函数的执行时间而是希望由调用者来决定如何输出函数的执行时间，可以通过参数化装饰器的方式来做到，代码如下所示。</p><div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">from</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> functools </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> wraps</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">def</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> singleton</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#E5C07B;--shiki-dark-font-style:italic;">cls</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">):</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    &quot;&quot;&quot;单例类装饰器&quot;&quot;&quot;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    instances </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    @wraps</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">cls</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    def</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> wrapper</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(*</span><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#D19A66;--shiki-dark-font-style:italic;">args</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> **</span><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#D19A66;--shiki-dark-font-style:italic;">kwargs</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">):</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        if</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> cls</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> not</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> in</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> instances:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">            instances[</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">cls</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">] </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> cls</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(*args, **kwargs)</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        return</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> instances[</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">cls</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    return</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> wrapper</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">@singleton</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">class</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> President</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    pass</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>扩展</strong>：装饰器是Python中非常有特色的语法，用一个函数去装饰另一个函数或类，为其添加额外的能力。通常通过装饰来实现的功能都属横切关注功能，也就是跟正常的业务逻辑没有必然联系，可以动态添加或移除的功能。装饰器可以为代码提供缓存、代理、上下文环境等服务，它是对设计模式中代理模式的践行。在写装饰器的时候，带装饰功能的函数（上面代码中的<code>wrapper</code>函数）通常都会用<code>functools</code>模块中的<code>wraps</code>再加以装饰，这个装饰器最重要的作用是给被装饰的类或函数动态添加一个<code>__wrapped__</code>属性，这个属性会将被装饰之前的类或函数保留下来，这样在我们不需要装饰功能的时候，可以通过它来取消装饰器，例如可以使用<code>President = President.__wrapped__</code>来取消对<code>President</code>类做的单例处理。需要提醒大家的是：上面的单例并不是线程安全的，如果要做到线程安全，需要对创建对象的代码进行加锁的处理。在Python中可以使用<code>threading</code>模块的<code>RLock</code>对象来提供锁，可以使用锁对象的<code>acquire</code>和<code>release</code>方法来实现加锁和解锁的操作。当然，更为简便的做法是使用锁对象的<code>with</code>上下文语法来进行隐式的加锁和解锁操作。</p></blockquote>`,6)]))}const r=i(t,[["render",l],["__file","decorators.html.vue"]]),d=JSON.parse(`{"path":"/se/lang/python/decorators.html","title":"Decorators 装饰器","lang":"en-US","frontmatter":{"description":"Decorators 装饰器 类似于Java的注解，实现类似于AOP，但是是通过闭包的形式 说明：装饰器可以用来装饰类或函数，为其提供额外的能力，属于设计模式中的代理模式。 装饰器本身也可以参数化，例如上面的例子中，如果不希望在终端中显示函数的执行时间而是希望由调用者来决定如何输出函数的执行时间，可以通过参数化装饰器的方式来做到，代码如下所示。 扩展：...","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/se/lang/python/decorators.html"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"Decorators 装饰器"}],["meta",{"property":"og:description","content":"Decorators 装饰器 类似于Java的注解，实现类似于AOP，但是是通过闭包的形式 说明：装饰器可以用来装饰类或函数，为其提供额外的能力，属于设计模式中的代理模式。 装饰器本身也可以参数化，例如上面的例子中，如果不希望在终端中显示函数的执行时间而是希望由调用者来决定如何输出函数的执行时间，可以通过参数化装饰器的方式来做到，代码如下所示。 扩展：..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-11-22T02:01:32.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-22T02:01:32.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Decorators 装饰器\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-22T02:01:32.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[],"git":{"createdTime":1732240892000,"updatedTime":1732240892000,"contributors":[{"name":"David Liu","email":"liudawei@seas.upenn.edu","commits":1}]},"readingTime":{"minutes":1.9,"words":571},"filePathRelative":"se/lang/python/decorators.md","localizedDate":"November 22, 2024","excerpt":"\\n<blockquote>\\n<p>类似于Java的注解，实现类似于AOP，但是是通过闭包的形式</p>\\n</blockquote>\\n<p><strong>说明</strong>：装饰器可以用来装饰类或函数，为其提供额外的能力，属于设计模式中的<strong>代理模式</strong>。</p>\\n<p><strong>装饰器本身也可以参数化</strong>，例如上面的例子中，如果不希望在终端中显示函数的执行时间而是希望由调用者来决定如何输出函数的执行时间，可以通过参数化装饰器的方式来做到，代码如下所示。</p>\\n<div class=\\"language-python line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"python\\" data-title=\\"python\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\">from</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> functools </span><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\">import</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> wraps</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\">def</span><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\"> singleton</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">(</span><span style=\\"--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#E5C07B;--shiki-dark-font-style:italic\\">cls</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">):</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">    \\"\\"\\"单例类装饰器\\"\\"\\"</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">    instances </span><span style=\\"--shiki-light:#383A42;--shiki-dark:#56B6C2\\">=</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> {}</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">    @wraps</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">(</span><span style=\\"--shiki-light:#E45649;--shiki-dark:#E5C07B\\">cls</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">)</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\">    def</span><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\"> wrapper</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">(*</span><span style=\\"--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#D19A66;--shiki-dark-font-style:italic\\">args</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">,</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> **</span><span style=\\"--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#D19A66;--shiki-dark-font-style:italic\\">kwargs</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">):</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\">        if</span><span style=\\"--shiki-light:#E45649;--shiki-dark:#E5C07B\\"> cls</span><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\"> not</span><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\"> in</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> instances:</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">            instances[</span><span style=\\"--shiki-light:#E45649;--shiki-dark:#E5C07B\\">cls</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">] </span><span style=\\"--shiki-light:#383A42;--shiki-dark:#56B6C2\\">=</span><span style=\\"--shiki-light:#E45649;--shiki-dark:#E5C07B\\"> cls</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">(*args, **kwargs)</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\">        return</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> instances[</span><span style=\\"--shiki-light:#E45649;--shiki-dark:#E5C07B\\">cls</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">]</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\">    return</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> wrapper</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">@singleton</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\">class</span><span style=\\"--shiki-light:#C18401;--shiki-dark:#E5C07B\\"> President</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">:</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\">    pass</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{r as comp,d as data};
