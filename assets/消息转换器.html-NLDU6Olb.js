import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,d as e,o as t}from"./app-DIqbhby7.js";const n={};function l(h,i){return t(),a("div",null,i[0]||(i[0]=[e(`<h1 id="消息转换器" tabindex="-1"><a class="header-anchor" href="#消息转换器"><span>消息转换器</span></a></h1><p>收发消息都可以传递Object，SpringAMQP默认会自动把对象利用JDK做序列化，但是可读性差且字节数太多，推荐使用Jackson</p><div class="language-xml line-numbers-mode" data-highlighter="shiki" data-ext="xml" data-title="xml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">dependency</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    &lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">groupId</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;com.fasterxml.jackson.core&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">groupId</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    &lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">artifactId</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;jackson-databind&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">artifactId</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">dependency</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/截屏2023-02-09 18.27.32.png" alt="截屏2023-02-09 18.27.32" loading="lazy"></p><p>接收的地方用Map接收</p><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">@</span><span style="--shiki-light:#A626A4;--shiki-dark:#E5C07B;">Bean</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">public</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> MessageConverter</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> messageConverter</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">() {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    return</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> new</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> Jackson2JsonMessageConverter</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">()</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6)]))}const d=s(n,[["render",l],["__file","消息转换器.html.vue"]]),k=JSON.parse(`{"path":"/cs/middleware/rabbitmq/%E6%B6%88%E6%81%AF%E8%BD%AC%E6%8D%A2%E5%99%A8.html","title":"消息转换器","lang":"en-US","frontmatter":{"description":"消息转换器 收发消息都可以传递Object，SpringAMQP默认会自动把对象利用JDK做序列化，但是可读性差且字节数太多，推荐使用Jackson 截屏2023-02-09 18.27.32 接收的地方用Map接收","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/cs/middleware/rabbitmq/%E6%B6%88%E6%81%AF%E8%BD%AC%E6%8D%A2%E5%99%A8.html"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"消息转换器"}],["meta",{"property":"og:description","content":"消息转换器 收发消息都可以传递Object，SpringAMQP默认会自动把对象利用JDK做序列化，但是可读性差且字节数太多，推荐使用Jackson 截屏2023-02-09 18.27.32 接收的地方用Map接收"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/%E6%88%AA%E5%B1%8F2023-02-09%2018.27.32.png"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-04-11T10:23:43.000Z"}],["meta",{"property":"article:modified_time","content":"2023-04-11T10:23:43.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"消息转换器\\",\\"image\\":[\\"https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/%E6%88%AA%E5%B1%8F2023-02-09%2018.27.32.png\\"],\\"dateModified\\":\\"2023-04-11T10:23:43.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[],"git":{"createdTime":1677504602000,"updatedTime":1681208623000,"contributors":[{"name":"刘大维","email":"davidliu@liudaweideMacBook-Pro.local","commits":2}]},"readingTime":{"minutes":0.32,"words":95},"filePathRelative":"cs/middleware/rabbitmq/消息转换器.md","localizedDate":"February 27, 2023","excerpt":"\\n<p>收发消息都可以传递Object，SpringAMQP默认会自动把对象利用JDK做序列化，但是可读性差且字节数太多，推荐使用Jackson</p>\\n<div class=\\"language-xml line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"xml\\" data-title=\\"xml\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">&lt;</span><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\">dependency</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">&gt;</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">    &lt;</span><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\">groupId</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">&gt;com.fasterxml.jackson.core&lt;/</span><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\">groupId</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">&gt;</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">    &lt;</span><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\">artifactId</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">&gt;jackson-databind&lt;/</span><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\">artifactId</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">&gt;</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">&lt;/</span><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\">dependency</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">&gt;</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{d as comp,k as data};
