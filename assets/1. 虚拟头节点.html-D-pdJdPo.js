import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,d as e,o as t}from"./app-CrF8c6p-.js";const l={};function n(h,i){return t(),a("div",null,i[0]||(i[0]=[e(`<h1 id="虚拟头节点" tabindex="-1"><a class="header-anchor" href="#虚拟头节点"><span>虚拟头节点</span></a></h1><h3 id="基本使用" tabindex="-1"><a class="header-anchor" href="#基本使用"><span>基本使用</span></a></h3><p>定义：</p><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">ListNode</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> dummy </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> new</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> ListNode</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">(</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> head)</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>使用：</p><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// 取得头节点，所有最后需要返回head的情况下都要用这个</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">dummy</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">next</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// 删除头节点，如删除符合条件节点时</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">dummy</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">next</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> dummy</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">next</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">next</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// 插入头节点，如反转链表时</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">node</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">next</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> dummy</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">next</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">dummy</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">next</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> node</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>好处：</p><ul><li>增加和删除节点的时候不需要对头处进行特判</li><li>创建一个新的链表，初始无法判断是否为空时，无需讨论是否一个空head</li><li>head 频繁变更时，随时获取最终的head</li></ul><h3 id="使用场景" tabindex="-1"><a class="header-anchor" href="#使用场景"><span>使用场景</span></a></h3><ol><li>头节点不确定时，如创建一个新的链表，初始时无法判断是否为空 <ul><li>合并链表（到一个新的链表）merge</li><li>划分链表（到两个新的链表）partition</li></ul></li><li>头节点可能被变动时，如添加、删除、移动 <ul><li>删除节点 <ul><li>链表去重</li><li>删除值为x的节点</li></ul></li><li>移动 <ul><li>反转链表</li><li>交换链表节点</li></ul></li></ul></li></ol>`,10)]))}const p=s(l,[["render",n],["__file","1. 虚拟头节点.html.vue"]]),r=JSON.parse(`{"path":"/algo/summary/structure/linear/linked/1.%20%E8%99%9A%E6%8B%9F%E5%A4%B4%E8%8A%82%E7%82%B9.html","title":"虚拟头节点","lang":"en-US","frontmatter":{"description":"虚拟头节点 基本使用 定义： 使用： 好处： 增加和删除节点的时候不需要对头处进行特判 创建一个新的链表，初始无法判断是否为空时，无需讨论是否一个空head head 频繁变更时，随时获取最终的head 使用场景 头节点不确定时，如创建一个新的链表，初始时无法判断是否为空 合并链表（到一个新的链表）merge 划分链表（到两个新的链表）partitio...","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/algo/summary/structure/linear/linked/1.%20%E8%99%9A%E6%8B%9F%E5%A4%B4%E8%8A%82%E7%82%B9.html"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"虚拟头节点"}],["meta",{"property":"og:description","content":"虚拟头节点 基本使用 定义： 使用： 好处： 增加和删除节点的时候不需要对头处进行特判 创建一个新的链表，初始无法判断是否为空时，无需讨论是否一个空head head 频繁变更时，随时获取最终的head 使用场景 头节点不确定时，如创建一个新的链表，初始时无法判断是否为空 合并链表（到一个新的链表）merge 划分链表（到两个新的链表）partitio..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-11-23T18:49:10.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-23T18:49:10.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"虚拟头节点\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-23T18:49:10.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[{"level":3,"title":"基本使用","slug":"基本使用","link":"#基本使用","children":[]},{"level":3,"title":"使用场景","slug":"使用场景","link":"#使用场景","children":[]}],"git":{"createdTime":1732244737000,"updatedTime":1732387750000,"contributors":[{"name":"David Liu","email":"liudawei@seas.upenn.edu","commits":1}]},"readingTime":{"minutes":0.82,"words":246},"filePathRelative":"algo/summary/structure/linear/linked/1. 虚拟头节点.md","localizedDate":"November 22, 2024","excerpt":"\\n<h3>基本使用</h3>\\n<p>定义：</p>\\n<div class=\\"language-java line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"java\\" data-title=\\"java\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span style=\\"--shiki-light:#C18401;--shiki-dark:#E5C07B\\">ListNode</span><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\"> dummy </span><span style=\\"--shiki-light:#383A42;--shiki-dark:#56B6C2\\">=</span><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\"> new</span><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\"> ListNode</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\">(</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#56B6C2\\">-</span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\">1</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">,</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\"> head)</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">;</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{p as comp,r as data};
