import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,d as e,o as n}from"./app-DIqbhby7.js";const h={};function l(t,i){return n(),a("div",null,i[0]||(i[0]=[e(`<h1 id="股票问题" tabindex="-1"><a class="header-anchor" href="#股票问题"><span>股票问题</span></a></h1><p>那么对于这道题，我们具体到每一天，看看总共有几种可能的「状态」，再找出每个「状态」对应的「选择」。我们要穷举所有「状态」，穷举的目的是根据对应的「选择」更新状态。听起来抽象，你只要记住「状态」和「选择」两个词就行，下面实操一下就很容易明白了。</p><h3 id="选择" tabindex="-1"><a class="header-anchor" href="#选择"><span>选择</span></a></h3><p><strong>每天都有三种「选择」</strong>：买入、卖出、无操作，我们用 <code>buy</code>, <code>sell</code>, <code>rest</code> 表示这三种选择。</p><h3 id="限制" tabindex="-1"><a class="header-anchor" href="#限制"><span>限制</span></a></h3><p><code>sell</code> 必须在 <code>buy</code> 之后，<code>buy</code> 必须在 <code>sell</code> 之后。那么 <code>rest</code> 操作还应该分两种状态，一种是 <code>buy</code> 之后的 <code>rest</code>（持有了股票），一种是 <code>sell</code> 之后的 <code>rest</code>（没有持有股票）。</p><p>还有交易次数 <code>k</code> 的限制，就是说你 <code>buy</code> 还只能在 <code>k &gt; 0</code> 的前提下操作。</p><h3 id="状态" tabindex="-1"><a class="header-anchor" href="#状态"><span>状态</span></a></h3><p><strong>这个问题的「状态」有三个</strong>，</p><ol><li>第一个是天数，</li><li>第二个是允许交易的最大次数，</li><li>第三个是当前的持有状态（即之前说的 <code>rest</code> 的状态，我们不妨用 1 表示持有，0 表示没有持有）。</li></ol><p>然后我们用一个三维数组就可以装下这几种状态的全部组合：</p><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">dp[i][k][</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">0</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> or </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">]</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">0</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> &lt;=</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> i </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&lt;=</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> n </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 1</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> &lt;=</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> k </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&lt;=</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> K</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">n 为天数，大 K 为交易数的上限，</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">0</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> 和 </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> 代表是否持有股票。</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">此问题共 n × K × </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">2</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> 种状态，全部穷举就能搞定。</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="答案" tabindex="-1"><a class="header-anchor" href="#答案"><span>答案</span></a></h3><p>我们想求的最终答案是 <code>dp[n - 1][K][0]</code>，即最后一天，最多允许 <code>K</code> 次交易，最多获得多少利润。</p><h3 id="状态转移" tabindex="-1"><a class="header-anchor" href="#状态转移"><span>状态转移</span></a></h3><p><a href="https://labuladong.gitee.io/algo/images/%E8%82%A1%E7%A5%A8%E9%97%AE%E9%A2%98/1.png" target="_blank" rel="noopener noreferrer"><img src="https://labuladong.gitee.io/algo/images/股票问题/1.png" alt="img" loading="lazy"></a></p><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">base </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">case</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">：</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">dp[</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">][</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">...</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">][</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">0</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">] </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> dp[</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">...</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">][</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">0</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">][</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">0</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">] </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 0</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">dp[</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">][</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">...</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">][</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">] </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> dp[</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">...</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">][</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">0</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">][</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">] </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> -</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">infinity</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">状态转移方程：</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">dp[i][k][</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">0</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">] </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> max</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">(dp[i</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">][k][</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">0</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">]</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> dp[i</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">][k][</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">] </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">+</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> prices[i])</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">dp[i][k][</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">] </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> max</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">(dp[i</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">][k][</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">]</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> dp[i</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">][k</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">][</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">0</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">] </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> prices[i])</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,17)]))}const d=s(h,[["render",l],["__file","股票问题.html.vue"]]),r=JSON.parse(`{"path":"/algo/summary/optimise/dynamic-programming/combine/combine/%E8%82%A1%E7%A5%A8%E9%97%AE%E9%A2%98.html","title":"股票问题","lang":"en-US","frontmatter":{"description":"股票问题 那么对于这道题，我们具体到每一天，看看总共有几种可能的「状态」，再找出每个「状态」对应的「选择」。我们要穷举所有「状态」，穷举的目的是根据对应的「选择」更新状态。听起来抽象，你只要记住「状态」和「选择」两个词就行，下面实操一下就很容易明白了。 选择 每天都有三种「选择」：买入、卖出、无操作，我们用 buy, sell, rest 表示这三种选...","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/algo/summary/optimise/dynamic-programming/combine/combine/%E8%82%A1%E7%A5%A8%E9%97%AE%E9%A2%98.html"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"股票问题"}],["meta",{"property":"og:description","content":"股票问题 那么对于这道题，我们具体到每一天，看看总共有几种可能的「状态」，再找出每个「状态」对应的「选择」。我们要穷举所有「状态」，穷举的目的是根据对应的「选择」更新状态。听起来抽象，你只要记住「状态」和「选择」两个词就行，下面实操一下就很容易明白了。 选择 每天都有三种「选择」：买入、卖出、无操作，我们用 buy, sell, rest 表示这三种选..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://labuladong.gitee.io/algo/images/股票问题/1.png"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-11-22T03:05:37.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-22T03:05:37.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"股票问题\\",\\"image\\":[\\"https://labuladong.gitee.io/algo/images/股票问题/1.png\\"],\\"dateModified\\":\\"2024-11-22T03:05:37.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[{"level":3,"title":"选择","slug":"选择","link":"#选择","children":[]},{"level":3,"title":"限制","slug":"限制","link":"#限制","children":[]},{"level":3,"title":"状态","slug":"状态","link":"#状态","children":[]},{"level":3,"title":"答案","slug":"答案","link":"#答案","children":[]},{"level":3,"title":"状态转移","slug":"状态转移","link":"#状态转移","children":[]}],"git":{"createdTime":1732244737000,"updatedTime":1732244737000,"contributors":[{"name":"David Liu","email":"liudawei@seas.upenn.edu","commits":1}]},"readingTime":{"minutes":1.63,"words":489},"filePathRelative":"algo/summary/optimise/dynamic-programming/combine/combine/股票问题.md","localizedDate":"November 22, 2024","excerpt":"\\n<p>那么对于这道题，我们具体到每一天，看看总共有几种可能的「状态」，再找出每个「状态」对应的「选择」。我们要穷举所有「状态」，穷举的目的是根据对应的「选择」更新状态。听起来抽象，你只要记住「状态」和「选择」两个词就行，下面实操一下就很容易明白了。</p>\\n<h3>选择</h3>\\n<p><strong>每天都有三种「选择」</strong>：买入、卖出、无操作，我们用 <code>buy</code>, <code>sell</code>, <code>rest</code> 表示这三种选择。</p>\\n<h3>限制</h3>\\n<p><code>sell</code> 必须在 <code>buy</code> 之后，<code>buy</code> 必须在 <code>sell</code> 之后。那么 <code>rest</code> 操作还应该分两种状态，一种是 <code>buy</code> 之后的 <code>rest</code>（持有了股票），一种是 <code>sell</code> 之后的 <code>rest</code>（没有持有股票）。</p>","autoDesc":true}`);export{d as comp,r as data};
