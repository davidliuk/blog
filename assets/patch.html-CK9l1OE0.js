import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,d as n,o}from"./app-UiaY2OnX.js";const s={};function i(c,e){return o(),a("div",null,e[0]||(e[0]=[n(`<h1 id="path" tabindex="-1"><a class="header-anchor" href="#path"><span>Path</span></a></h1><h4 id="谈谈你对-猴子补丁-monkey-patching-的理解。" tabindex="-1"><a class="header-anchor" href="#谈谈你对-猴子补丁-monkey-patching-的理解。"><span>谈谈你对“猴子补丁”（monkey patching）的理解。</span></a></h4><p>“猴子补丁”是动态类型语言的一个特性，代码运行时在不修改源代码的前提下改变代码中的方法、属性、函数等以达到热补丁（hot patch）的效果。很多系统的安全补丁也是通过猴子补丁的方式来实现的，但实际开发中应该避免对猴子补丁的使用，以免造成代码行为不一致的问题。</p><p>在使用<code>gevent</code>库的时候，我们会在代码开头的地方执行<code>gevent.monkey.patch_all()</code>，这行代码的作用是把标准库中的<code>socket</code>模块给替换掉，这样我们在使用<code>socket</code>的时候，不用修改任何代码就可以实现对代码的协程化，达到提升性能的目的，这就是对猴子补丁的应用。</p><p>另外，如果希望用<code>ujson</code>三方库替换掉标准库中的<code>json</code>，也可以使用猴子补丁的方式，代码如下所示。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>import json, ujson</span></span>
<span class="line"><span></span></span>
<span class="line"><span>json.__name__ = &#39;ujson&#39;</span></span>
<span class="line"><span>json.dumps = ujson.dumps</span></span>
<span class="line"><span>json.loads = ujson.loads</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>单元测试中的<code>Mock</code>技术也是对猴子补丁的应用，Python中的<code>unittest.mock</code>模块就是解决单元测试中用<code>Mock</code>对象替代被测对象所依赖的对象的模块。</p>`,7)]))}const l=t(s,[["render",i],["__file","patch.html.vue"]]),r=JSON.parse(`{"path":"/se/lang/python/patch.html","title":"Path","lang":"en-US","frontmatter":{"description":"Path 谈谈你对“猴子补丁”（monkey patching）的理解。 “猴子补丁”是动态类型语言的一个特性，代码运行时在不修改源代码的前提下改变代码中的方法、属性、函数等以达到热补丁（hot patch）的效果。很多系统的安全补丁也是通过猴子补丁的方式来实现的，但实际开发中应该避免对猴子补丁的使用，以免造成代码行为不一致的问题。 在使用gevent...","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/se/lang/python/patch.html"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"Path"}],["meta",{"property":"og:description","content":"Path 谈谈你对“猴子补丁”（monkey patching）的理解。 “猴子补丁”是动态类型语言的一个特性，代码运行时在不修改源代码的前提下改变代码中的方法、属性、函数等以达到热补丁（hot patch）的效果。很多系统的安全补丁也是通过猴子补丁的方式来实现的，但实际开发中应该避免对猴子补丁的使用，以免造成代码行为不一致的问题。 在使用gevent..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-11-22T02:01:32.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-22T02:01:32.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Path\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-22T02:01:32.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[],"git":{"createdTime":1732240892000,"updatedTime":1732240892000,"contributors":[{"name":"David Liu","email":"liudawei@seas.upenn.edu","commits":1}]},"readingTime":{"minutes":1.07,"words":320},"filePathRelative":"se/lang/python/patch.md","localizedDate":"November 22, 2024","excerpt":"\\n<h4>谈谈你对“猴子补丁”（monkey patching）的理解。</h4>\\n<p>“猴子补丁”是动态类型语言的一个特性，代码运行时在不修改源代码的前提下改变代码中的方法、属性、函数等以达到热补丁（hot patch）的效果。很多系统的安全补丁也是通过猴子补丁的方式来实现的，但实际开发中应该避免对猴子补丁的使用，以免造成代码行为不一致的问题。</p>\\n<p>在使用<code>gevent</code>库的时候，我们会在代码开头的地方执行<code>gevent.monkey.patch_all()</code>，这行代码的作用是把标准库中的<code>socket</code>模块给替换掉，这样我们在使用<code>socket</code>的时候，不用修改任何代码就可以实现对代码的协程化，达到提升性能的目的，这就是对猴子补丁的应用。</p>","autoDesc":true}`);export{l as comp,r as data};
