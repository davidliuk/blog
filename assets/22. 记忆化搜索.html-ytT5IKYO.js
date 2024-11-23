import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,d as n,o as p}from"./app-CrF8c6p-.js";const e={};function l(t,i){return p(),a("div",null,i[0]||(i[0]=[n(`<h1 id="记忆化搜索" tabindex="-1"><a class="header-anchor" href="#记忆化搜索"><span>记忆化搜索</span></a></h1><p>记忆化搜索复杂度分析</p><p>多少种组合*每层耗费</p><p>记忆化搜索 = 分治 + hashmap</p><p>会变化的参数放在hashmap里</p><p>函数的限制：</p><ol><li><p>要有返回值（DC）</p><p>和Cache很像</p></li><li><p>函数的结果，只与输入的参数有关，与其他信息无关</p><p>叫做pure function（类似前端的纯函数，与其他全局变量无关）</p></li></ol><p>重复计算</p><p>记忆化搜索 = 动态规划</p><p>（只是说是用搜索的方式实现的DP）</p><h3 id="博弈问题非常适合记忆化搜索" tabindex="-1"><a class="header-anchor" href="#博弈问题非常适合记忆化搜索"><span>博弈问题非常适合记忆化搜索</span></a></h3><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">boolean</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> memoSearch</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">(</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> n</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> Map</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&lt;</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">Integer</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> Boolean</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&gt;</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> memo) {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    if</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> (n </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&lt;</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 3</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">) {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        return</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> true</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">    }</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    if</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">(</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">memo</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">containsKey</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(n)</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">) {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        return</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> memo</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">get</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(n);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">    }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">    </span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    for</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> (</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> i </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> i </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&lt;=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 3</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> i</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">++</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">) {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        if</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> (</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">!</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">memoSearch</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">(n </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> i</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> memo)) {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">            memo</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">put</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(n, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">true</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">            return</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> true</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">        }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">    }</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    return</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> false</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>问题：会栈溢出</p><p>如果时间复杂度和递归深度都是On级别时，会栈溢出</p><p>如果时间复杂度On2、递归深度都是On级别时，就不会</p><p>记忆化搜索的缺点：不适合解决时间复杂度On的DP问题，有栈溢出的风险</p><p>记忆化搜索，模式简单，就在搜索上加几行代码</p><p>循环DP需要考虑循环先后顺序的问题</p>`,18)]))}const r=s(e,[["render",l],["__file","22. 记忆化搜索.html.vue"]]),d=JSON.parse(`{"path":"/algo/jiuzhang/22.%20%E8%AE%B0%E5%BF%86%E5%8C%96%E6%90%9C%E7%B4%A2.html","title":"记忆化搜索","lang":"en-US","frontmatter":{"description":"记忆化搜索 记忆化搜索复杂度分析 多少种组合*每层耗费 记忆化搜索 = 分治 + hashmap 会变化的参数放在hashmap里 函数的限制： 要有返回值（DC） 和Cache很像 函数的结果，只与输入的参数有关，与其他信息无关 叫做pure function（类似前端的纯函数，与其他全局变量无关） 重复计算 记忆化搜索 = 动态规划 （只是说是用搜...","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/algo/jiuzhang/22.%20%E8%AE%B0%E5%BF%86%E5%8C%96%E6%90%9C%E7%B4%A2.html"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"记忆化搜索"}],["meta",{"property":"og:description","content":"记忆化搜索 记忆化搜索复杂度分析 多少种组合*每层耗费 记忆化搜索 = 分治 + hashmap 会变化的参数放在hashmap里 函数的限制： 要有返回值（DC） 和Cache很像 函数的结果，只与输入的参数有关，与其他信息无关 叫做pure function（类似前端的纯函数，与其他全局变量无关） 重复计算 记忆化搜索 = 动态规划 （只是说是用搜..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-11-23T18:49:10.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-23T18:49:10.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"记忆化搜索\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-23T18:49:10.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[{"level":3,"title":"博弈问题非常适合记忆化搜索","slug":"博弈问题非常适合记忆化搜索","link":"#博弈问题非常适合记忆化搜索","children":[]}],"git":{"createdTime":1732244737000,"updatedTime":1732387750000,"contributors":[{"name":"David Liu","email":"liudawei@seas.upenn.edu","commits":1}]},"readingTime":{"minutes":0.98,"words":294},"filePathRelative":"algo/jiuzhang/22. 记忆化搜索.md","localizedDate":"November 22, 2024","excerpt":"\\n<p>记忆化搜索复杂度分析</p>\\n<p>多少种组合*每层耗费</p>\\n<p>记忆化搜索 = 分治 + hashmap</p>\\n<p>会变化的参数放在hashmap里</p>\\n<p>函数的限制：</p>\\n<ol>\\n<li>\\n<p>要有返回值（DC）</p>\\n<p>和Cache很像</p>\\n</li>\\n<li>\\n<p>函数的结果，只与输入的参数有关，与其他信息无关</p>\\n<p>叫做pure function（类似前端的纯函数，与其他全局变量无关）</p>\\n</li>\\n</ol>\\n<p>重复计算</p>\\n<p>记忆化搜索 = 动态规划</p>\\n<p>（只是说是用搜索的方式实现的DP）</p>\\n","autoDesc":true}`);export{r as comp,d as data};
