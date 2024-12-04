import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,d as e,o as n}from"./app-CybQbXIt.js";const t={};function l(p,i){return n(),a("div",null,i[0]||(i[0]=[e(`<h1 id="用法" tabindex="-1"><a class="header-anchor" href="#用法"><span>用法</span></a></h1><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">execution</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">(方法表达式)</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">execution</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">(</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">*</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> cn</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">sunpiaoliang</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">service</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">..</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">*</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">*</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">(</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">..</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">))</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">cn</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">sunpiaoliang</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">service</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> 这个路径下的包或子包所有方法和所有类型的参数 返回值为任何类型</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">@</span><span style="--shiki-light:#A626A4;--shiki-dark:#E5C07B;">Pointcut</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;execution(void com.itheima.dao.BookDao.update())&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注：</p><ul><li><p>第一个 “*” 任何类型返回值</p></li><li><p>cn.sunpiaoliang.service 路径</p></li><li><p>.. ：包或子包</p></li><li><p>第二个“*” 所有类</p></li><li><p><code>cn.*Service</code>任何 service 结尾的包</p></li><li><p>任何方法<br> (..) 任意方法 （*）只有一个参数 （）不带参数</p></li></ul><p>@annotation</p><p>匹配当前执行方法持有指定注解的方法，可以直接写注解，也可以直接写全路径</p><p>@within</p><p>匹配所以持有指定注解类型内的方法，全路径</p><p>aop 主要是通过代理实现</p><p>1、JDK 代理，实现接口的<br> 2、CGlib 代理</p><p>通配符</p><p>表达式内可以使用通配符描述切入点，快速描述</p><ol><li><p><code>*</code>：单个独立的任意符号，可以独立出现的，可以作为前缀或者后缀的匹配符出现（必有一个）</p><p><code>execution(public * com.itheima.*.UserService.find*(*))</code><br> 匹配 com.itheima 包下的任意包中的 UserService 类或接口中所有的 find 开头的带有一个参数的方法</p></li><li><p><code>..</code> ：多个连续的任意符号，可以独立出现，常用于简化包名与参数的书写（有或者没有都 ok）</p><p><code>execution(public User com..UserService.findById(..))</code><br> 匹配 com 包下的任意包中的 UserService 类或接口中所有名称为 findById 的方法</p></li><li><p><code>+</code>：专用于匹配子类类型（表示子类）</p><p><code> execution(**..*Service+.*（..）)</code></p></li></ol><p><img src="https://cdn.jsdelivr.net/gh/davidliuk/images@master/blog/e4ce4399fbed44ee8f32401d06df5a2a.jpeg" alt="img" loading="lazy"></p>`,14)]))}const r=s(t,[["render",l],["__file","用法.html.vue"]]),d=JSON.parse(`{"path":"/se/lang/java/framework/spring/core/aop/%E7%94%A8%E6%B3%95.html","title":"用法","lang":"en-US","frontmatter":{"description":"用法 注： 第一个 “*” 任何类型返回值 cn.sunpiaoliang.service 路径 .. ：包或子包 第二个“*” 所有类 cn.*Service任何 service 结尾的包 任何方法 (..) 任意方法 （*）只有一个参数 （）不带参数 @annotation 匹配当前执行方法持有指定注解的方法，可以直接写注解，也可以直接写全路径 @...","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/se/lang/java/framework/spring/core/aop/%E7%94%A8%E6%B3%95.html"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"用法"}],["meta",{"property":"og:description","content":"用法 注： 第一个 “*” 任何类型返回值 cn.sunpiaoliang.service 路径 .. ：包或子包 第二个“*” 所有类 cn.*Service任何 service 结尾的包 任何方法 (..) 任意方法 （*）只有一个参数 （）不带参数 @annotation 匹配当前执行方法持有指定注解的方法，可以直接写注解，也可以直接写全路径 @..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/davidliuk/images@master/blog/e4ce4399fbed44ee8f32401d06df5a2a.jpeg"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-11-09T18:37:53.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-09T18:37:53.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"用法\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/davidliuk/images@master/blog/e4ce4399fbed44ee8f32401d06df5a2a.jpeg\\"],\\"dateModified\\":\\"2024-11-09T18:37:53.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[],"git":{"createdTime":1680492546000,"updatedTime":1731177473000,"contributors":[{"name":"刘大维","email":"davidliu@liudaweideMacBook-Pro-3.local","commits":1}]},"readingTime":{"minutes":1.22,"words":365},"filePathRelative":"se/lang/java/framework/spring/core/aop/用法.md","localizedDate":"April 3, 2023","excerpt":"\\n<div class=\\"language-java line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"java\\" data-title=\\"java\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">execution</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\">(方法表达式)</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">execution</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\">(</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#56B6C2\\">*</span><span style=\\"--shiki-light:#E45649;--shiki-dark:#E5C07B\\"> cn</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">.</span><span style=\\"--shiki-light:#E45649;--shiki-dark:#E5C07B\\">sunpiaoliang</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">.</span><span style=\\"--shiki-light:#E45649;--shiki-dark:#E5C07B\\">service</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">..</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#56B6C2\\">*</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">.</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#56B6C2\\">*</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\">(</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">..</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\">))</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#E45649;--shiki-dark:#E5C07B\\">cn</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">.</span><span style=\\"--shiki-light:#E45649;--shiki-dark:#E5C07B\\">sunpiaoliang</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">.</span><span style=\\"--shiki-light:#E45649;--shiki-dark:#E5C07B\\">service</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\"> 这个路径下的包或子包所有方法和所有类型的参数 返回值为任何类型</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">@</span><span style=\\"--shiki-light:#A626A4;--shiki-dark:#E5C07B\\">Pointcut</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\">(</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">\\"execution(void com.itheima.dao.BookDao.update())\\"</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\">)</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{r as comp,d as data};
