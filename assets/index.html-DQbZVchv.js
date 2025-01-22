import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as n,d as a,o as l}from"./app-ktFCNIob.js";const e={};function t(p,i){return l(),n("div",null,i[0]||(i[0]=[a(`<h1 id="二值有序" tabindex="-1"><a class="header-anchor" href="#二值有序"><span>二值有序</span></a></h1><p>每一个元素在目标函数上都只有两种取值，然后可以唯一对应到两种操作，可以避免走回头路，可以做到：</p><ul><li>将On2的问题优化到On <ul><li>双指针本来为组合问题，复杂度应为On2</li></ul></li><li>将On的问题优化到Ologn</li></ul><p>特殊有序</p><ul><li></li></ul><p>二分答案</p><ul><li>线性扫描</li><li>逆向双针</li><li>滑动窗口</li><li>Z型遍历</li><li>动态规划</li></ul><p>滑动窗口</p><hr><p>有序数组</p><p>去重：</p><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">if</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> (j </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&lt;</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> n </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 1</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> &amp;&amp;</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> nums[j] </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">==</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> nums[j </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">+</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 1</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">]) {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    // 跳过所有与i重的元素</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    // 保留最后一个，在双指针的时候可以枚举到唯一一对相同值的数对</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    continue</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">}</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">if</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> (i </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&gt;</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 0</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> &amp;&amp;</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> nums[i] </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">==</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> nums[i </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 1</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">]) {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    // 跳过所有与i重的元素</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    // 保留第一个，这种写法就是组合II那种去重思路</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    continue</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12)]))}const k=s(e,[["render",t],["__file","index.html.vue"]]),d=JSON.parse(`{"path":"/algo/summary/optimise/decrease-conquer/binary/","title":"二值有序","lang":"en-US","frontmatter":{"description":"二值有序 每一个元素在目标函数上都只有两种取值，然后可以唯一对应到两种操作，可以避免走回头路，可以做到： 将On2的问题优化到On 双指针本来为组合问题，复杂度应为On2 将On的问题优化到Ologn 特殊有序 二分答案 线性扫描 逆向双针 滑动窗口 Z型遍历 动态规划 滑动窗口 有序数组 去重：","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/algo/summary/optimise/decrease-conquer/binary/"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"二值有序"}],["meta",{"property":"og:description","content":"二值有序 每一个元素在目标函数上都只有两种取值，然后可以唯一对应到两种操作，可以避免走回头路，可以做到： 将On2的问题优化到On 双指针本来为组合问题，复杂度应为On2 将On的问题优化到Ologn 特殊有序 二分答案 线性扫描 逆向双针 滑动窗口 Z型遍历 动态规划 滑动窗口 有序数组 去重："}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-11-22T03:05:37.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-22T03:05:37.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"二值有序\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-22T03:05:37.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[],"git":{"createdTime":1732244737000,"updatedTime":1732244737000,"contributors":[{"name":"David Liu","email":"liudawei@seas.upenn.edu","commits":1}]},"readingTime":{"minutes":0.7,"words":211},"filePathRelative":"algo/summary/optimise/decrease-conquer/binary/README.md","localizedDate":"November 22, 2024","excerpt":"\\n<p>每一个元素在目标函数上都只有两种取值，然后可以唯一对应到两种操作，可以避免走回头路，可以做到：</p>\\n<ul>\\n<li>将On2的问题优化到On\\n<ul>\\n<li>双指针本来为组合问题，复杂度应为On2</li>\\n</ul>\\n</li>\\n<li>将On的问题优化到Ologn</li>\\n</ul>\\n<p>特殊有序</p>\\n<ul>\\n<li></li>\\n</ul>\\n<p>二分答案</p>\\n<ul>\\n<li>线性扫描</li>\\n<li>逆向双针</li>\\n<li>滑动窗口</li>\\n<li>Z型遍历</li>\\n<li>动态规划</li>\\n</ul>\\n<p>滑动窗口</p>\\n<hr>\\n<p>有序数组</p>","autoDesc":true}`);export{k as comp,d as data};
