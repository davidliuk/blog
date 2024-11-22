import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as t,d as a,o as e}from"./app-B6s9NXTg.js";const l={};function n(h,i){return e(),t("div",null,i[0]||(i[0]=[a(`<h1 id="closure-闭包" tabindex="-1"><a class="header-anchor" href="#closure-闭包"><span>Closure 闭包</span></a></h1><h3 id="防抖" tabindex="-1"><a class="header-anchor" href="#防抖"><span>防抖</span></a></h3><p>请你编写一个函数，接收参数为另一个函数和一个以毫秒为单位的时间 <code>t</code> ，并返回该函数的 <strong>函数防抖</strong> 后的结果。</p><p><strong>函数防抖</strong> 方法是一个函数，它的执行被延迟了 <code>t</code> 毫秒，如果在这个时间窗口内再次调用它，它的执行将被取消。你编写的防抖函数也应该接收传递的参数。</p><p>例如，假设 <code>t = 50ms</code> ，函数分别在 <code>30ms</code> 、 <code>60ms</code> 和 <code>100ms</code> 时调用。前两个函数调用将被取消，第三个函数调用将在 <code>150ms</code> 执行。如果改为 <code>t = 35ms</code> ，则第一个调用将被取消，第二个调用将在 <code>95ms</code> 执行，第三个调用将在 <code>135ms</code> 执行。</p><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">/**</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> * </span><span style="--shiki-light:#383A42;--shiki-light-font-style:italic;--shiki-dark:#C678DD;--shiki-dark-font-style:italic;">@</span><span style="--shiki-light:#A626A4;--shiki-light-font-style:italic;--shiki-dark:#C678DD;--shiki-dark-font-style:italic;">param</span><span style="--shiki-light:#C18401;--shiki-light-font-style:italic;--shiki-dark:#E5C07B;--shiki-dark-font-style:italic;"> {Function}</span><span style="--shiki-light:#E45649;--shiki-light-font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;"> fn</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> * </span><span style="--shiki-light:#383A42;--shiki-light-font-style:italic;--shiki-dark:#C678DD;--shiki-dark-font-style:italic;">@</span><span style="--shiki-light:#A626A4;--shiki-light-font-style:italic;--shiki-dark:#C678DD;--shiki-dark-font-style:italic;">param</span><span style="--shiki-light:#C18401;--shiki-light-font-style:italic;--shiki-dark:#E5C07B;--shiki-dark-font-style:italic;"> {number}</span><span style="--shiki-light:#E45649;--shiki-light-font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;"> t</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> milliseconds</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> * </span><span style="--shiki-light:#383A42;--shiki-light-font-style:italic;--shiki-dark:#C678DD;--shiki-dark-font-style:italic;">@</span><span style="--shiki-light:#A626A4;--shiki-light-font-style:italic;--shiki-dark:#C678DD;--shiki-dark-font-style:italic;">return</span><span style="--shiki-light:#C18401;--shiki-light-font-style:italic;--shiki-dark:#E5C07B;--shiki-dark-font-style:italic;"> {Function}</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> */</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">var</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> debounce</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> function</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">fn</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">t</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    let</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> timeout</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    return</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> function</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">...</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">args</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">        clearTimeout</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">timeout</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">        timeout</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> setTimeout</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(() </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">=&gt;</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> fn</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">...</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">args</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">), </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">t</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">};</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6)]))}const r=s(l,[["render",n],["__file","closure.html.vue"]]),o=JSON.parse(`{"path":"/se/lang/frontend/js/closure.html","title":"Closure 闭包","lang":"en-US","frontmatter":{"description":"Closure 闭包 防抖 请你编写一个函数，接收参数为另一个函数和一个以毫秒为单位的时间 t ，并返回该函数的 函数防抖 后的结果。 函数防抖 方法是一个函数，它的执行被延迟了 t 毫秒，如果在这个时间窗口内再次调用它，它的执行将被取消。你编写的防抖函数也应该接收传递的参数。 例如，假设 t = 50ms ，函数分别在 30ms 、 60ms 和 1...","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/se/lang/frontend/js/closure.html"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"Closure 闭包"}],["meta",{"property":"og:description","content":"Closure 闭包 防抖 请你编写一个函数，接收参数为另一个函数和一个以毫秒为单位的时间 t ，并返回该函数的 函数防抖 后的结果。 函数防抖 方法是一个函数，它的执行被延迟了 t 毫秒，如果在这个时间窗口内再次调用它，它的执行将被取消。你编写的防抖函数也应该接收传递的参数。 例如，假设 t = 50ms ，函数分别在 30ms 、 60ms 和 1..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-05-08T07:35:02.000Z"}],["meta",{"property":"article:modified_time","content":"2024-05-08T07:35:02.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Closure 闭包\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-05-08T07:35:02.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[{"level":3,"title":"防抖","slug":"防抖","link":"#防抖","children":[]}],"git":{"createdTime":1703688112000,"updatedTime":1715153702000,"contributors":[{"name":"刘大维","email":"davidliu@liudaweideMacBook-Pro.local","commits":1}]},"readingTime":{"minutes":0.73,"words":220},"filePathRelative":"se/lang/frontend/js/closure.md","localizedDate":"December 27, 2023","excerpt":"\\n<h3>防抖</h3>\\n<p>请你编写一个函数，接收参数为另一个函数和一个以毫秒为单位的时间 <code>t</code> ，并返回该函数的 <strong>函数防抖</strong> 后的结果。</p>\\n<p><strong>函数防抖</strong> 方法是一个函数，它的执行被延迟了 <code>t</code> 毫秒，如果在这个时间窗口内再次调用它，它的执行将被取消。你编写的防抖函数也应该接收传递的参数。</p>\\n<p>例如，假设 <code>t = 50ms</code> ，函数分别在 <code>30ms</code> 、 <code>60ms</code> 和 <code>100ms</code> 时调用。前两个函数调用将被取消，第三个函数调用将在 <code>150ms</code> 执行。如果改为 <code>t = 35ms</code> ，则第一个调用将被取消，第二个调用将在 <code>95ms</code> 执行，第三个调用将在 <code>135ms</code> 执行。</p>","autoDesc":true}`);export{r as comp,o as data};
