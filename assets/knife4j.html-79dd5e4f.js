const a=JSON.parse(`{"key":"v-4e118aef","path":"/se/framework/doc/swagger/knife4j.html","title":"页面 404","lang":"en-US","frontmatter":{"description":"页面 404 默认情况下并不需要添加此配置即可访问 很多朋友在使用 SpringBoot 集成 swagger-bootstrap-ui 后，都无法访问 doc.html 界面，此时，你可能需要实现 SpringBoot 的WebMvcConfigurer接口，添加相关的 ResourceHandler,代码如下： @SpringBootApplication public class SwaggerBootstrapUiDemoApplication implements WebMvcConfigurer{ @Override public void addResourceHandlers(ResourceHandlerRegistry registry) { registry.addResourceHandler(\\"doc.html\\").addResourceLocations(\\"classpath*:/META-INF/resources/\\"); registry.addResourceHandler(\\"/webjars/**\\").addResourceLocations(\\"classpath*:/META-INF/resources/webjars/\\"); } }","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/se/framework/doc/swagger/knife4j.html"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"页面 404"}],["meta",{"property":"og:description","content":"页面 404 默认情况下并不需要添加此配置即可访问 很多朋友在使用 SpringBoot 集成 swagger-bootstrap-ui 后，都无法访问 doc.html 界面，此时，你可能需要实现 SpringBoot 的WebMvcConfigurer接口，添加相关的 ResourceHandler,代码如下： @SpringBootApplication public class SwaggerBootstrapUiDemoApplication implements WebMvcConfigurer{ @Override public void addResourceHandlers(ResourceHandlerRegistry registry) { registry.addResourceHandler(\\"doc.html\\").addResourceLocations(\\"classpath*:/META-INF/resources/\\"); registry.addResourceHandler(\\"/webjars/**\\").addResourceLocations(\\"classpath*:/META-INF/resources/webjars/\\"); } }"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-08-21T10:17:45.000Z"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2023-08-21T10:17:45.000Z"}],["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://davidliuk.github.io/blog/blog/zh/se/framework/doc/swagger/knife4j.html"}]]},"headers":[],"git":{"createdTime":1691648992000,"updatedTime":1692613065000,"contributors":[{"name":"davidliu","email":"liudawei47@jd.com","commits":1},{"name":"liudawei47","email":"liudawei47@jd.com","commits":1}]},"readingTime":{"minutes":0.62,"words":186},"localizedDate":"August 10, 2023","filePathRelative":"se/framework/doc/swagger/knife4j.md","excerpt":"<h1> 页面 404</h1>\\n<p>默认情况下并不需要添加此配置即可访问</p>\\n<p>很多朋友在使用 SpringBoot 集成 swagger-bootstrap-ui 后，都无法访问 doc.html 界面，此时，你可能需要实现 SpringBoot 的<code>WebMvcConfigurer</code>接口，添加相关的 ResourceHandler,代码如下：</p>\\n<div class=\\"language-java line-numbers-mode\\" data-ext=\\"java\\"><pre class=\\"language-java\\"><code><span class=\\"token annotation punctuation\\">@SpringBootApplication</span>\\n<span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">class</span> <span class=\\"token class-name\\">SwaggerBootstrapUiDemoApplication</span>  <span class=\\"token keyword\\">implements</span> <span class=\\"token class-name\\">WebMvcConfigurer</span><span class=\\"token punctuation\\">{</span>\\n\\n    <span class=\\"token annotation punctuation\\">@Override</span>\\n    <span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">void</span> <span class=\\"token function\\">addResourceHandlers</span><span class=\\"token punctuation\\">(</span><span class=\\"token class-name\\">ResourceHandlerRegistry</span> registry<span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n        registry<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">addResourceHandler</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"doc.html\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">.</span><span class=\\"token function\\">addResourceLocations</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"classpath*:/META-INF/resources/\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n        registry<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">addResourceHandler</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"/webjars/**\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">.</span><span class=\\"token function\\">addResourceLocations</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"classpath*:/META-INF/resources/webjars/\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token punctuation\\">}</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{a as data};