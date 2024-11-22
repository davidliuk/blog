import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,d as n,o as l}from"./app-DtA_0glx.js";const e={};function p(t,i){return l(),a("div",null,i[0]||(i[0]=[n(`<h1 id="智能计算及其应用" tabindex="-1"><a class="header-anchor" href="#智能计算及其应用"><span>智能计算及其应用</span></a></h1><h3 id="进化算法" tabindex="-1"><a class="header-anchor" href="#进化算法"><span>进化算法</span></a></h3><p>遗传算法GA：占绝大多数</p><p>遗传规划</p><p>进化策略</p><p>进化规划</p><h4 id="设计原则" tabindex="-1"><a class="header-anchor" href="#设计原则"><span>设计原则</span></a></h4><ol><li>适用性原则</li><li>可靠性原则</li><li>收敛性原则</li><li>稳定性原则</li><li>生物类比原则</li></ol><p>遗传算法的基本思想：</p><p>在求解问题时从多个解开始。。。</p><p>初始种群，通常是随机的（不过对后面的影响其实是很大的，不过要求不高，通常随机即可）</p><p>编码</p><ol><li><p>位串编码</p><p>一维染色体编码方法</p></li><li><p>二进制编码</p><p>二进制编码：用若干二进制数表示一个个体，原问题的解空间映射到位串空间B={0, 1}上，然后再位串空间上进行遗传操作</p><p>优点：</p><p>类似于</p></li></ol><p>15:01111</p><p>16:10000</p><p>Gray 码，解决海明距离问题</p><p>实数编码，</p><p>种群规模过大时，又容易降低效率</p><p>初始种群主要是，20-50个</p><p>适应度函数</p><p>过早收敛</p><p>停滞现象</p><h3 id="自适应函数" tabindex="-1"><a class="header-anchor" href="#自适应函数"><span>自适应函数</span></a></h3><p>线性变换</p><p>个体选择概率分配方法</p><p>线性排序</p><h4 id="交叉" tabindex="-1"><a class="header-anchor" href="#交叉"><span>交叉</span></a></h4><ol><li>一点交叉</li><li>二点交叉</li></ol><p>属于遗传，不会产生革命性的变化</p><h4 id="变异" tabindex="-1"><a class="header-anchor" href="#变异"><span>变异</span></a></h4><ul><li>位点</li><li>逆转</li><li>插入</li><li>互换</li><li>移动</li></ul><p>遗传算法，莫范Python，第六章，解决tsp问题</p><h2 id="群智能算法" tabindex="-1"><a class="header-anchor" href="#群智能算法"><span>群智能算法</span></a></h2><h3 id="粒子群优化算法" tabindex="-1"><a class="header-anchor" href="#粒子群优化算法"><span>粒子群优化算法</span></a></h3><h4 id="基本原理" tabindex="-1"><a class="header-anchor" href="#基本原理"><span>基本原理</span></a></h4><p>解决车辆路径问题(VRP)的问题</p><div class="language-c line-numbers-mode" data-highlighter="shiki" data-ext="c" data-title="c" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> *</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">a;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> b </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 3</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">a </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">=</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> &amp;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">b;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">cout</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">&lt;&lt;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">a;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">cout</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">&lt;&lt;*</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">a;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">ListNode </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">*</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">a;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">ListNode b </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> new </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">ListNode</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">a </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">=</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> &amp;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">b;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">cout</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">&lt;&lt;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">a;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">cout</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">&lt;&lt;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">*</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">a).val;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">cout</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">&lt;&lt;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">a</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">-&gt;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">val;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>蚁群算法</p>`,38)]))}const r=s(e,[["render",p],["__file","6. 智能计算及其应用.html.vue"]]),k=JSON.parse(`{"path":"/education/bs/ai-intro/6.%20%E6%99%BA%E8%83%BD%E8%AE%A1%E7%AE%97%E5%8F%8A%E5%85%B6%E5%BA%94%E7%94%A8.html","title":"智能计算及其应用","lang":"en-US","frontmatter":{"description":"智能计算及其应用 进化算法 遗传算法GA：占绝大多数 遗传规划 进化策略 进化规划 设计原则 适用性原则 可靠性原则 收敛性原则 稳定性原则 生物类比原则 遗传算法的基本思想： 在求解问题时从多个解开始。。。 初始种群，通常是随机的（不过对后面的影响其实是很大的，不过要求不高，通常随机即可） 编码 位串编码 一维染色体编码方法 二进制编码 二进制编码：...","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/education/bs/ai-intro/6.%20%E6%99%BA%E8%83%BD%E8%AE%A1%E7%AE%97%E5%8F%8A%E5%85%B6%E5%BA%94%E7%94%A8.html"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"智能计算及其应用"}],["meta",{"property":"og:description","content":"智能计算及其应用 进化算法 遗传算法GA：占绝大多数 遗传规划 进化策略 进化规划 设计原则 适用性原则 可靠性原则 收敛性原则 稳定性原则 生物类比原则 遗传算法的基本思想： 在求解问题时从多个解开始。。。 初始种群，通常是随机的（不过对后面的影响其实是很大的，不过要求不高，通常随机即可） 编码 位串编码 一维染色体编码方法 二进制编码 二进制编码：..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-11-09T03:55:12.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-09T03:55:12.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"智能计算及其应用\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-09T03:55:12.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[{"level":3,"title":"进化算法","slug":"进化算法","link":"#进化算法","children":[]},{"level":3,"title":"自适应函数","slug":"自适应函数","link":"#自适应函数","children":[]},{"level":2,"title":"群智能算法","slug":"群智能算法","link":"#群智能算法","children":[{"level":3,"title":"粒子群优化算法","slug":"粒子群优化算法","link":"#粒子群优化算法","children":[]}]}],"git":{"createdTime":1700646963000,"updatedTime":1731124512000,"contributors":[{"name":"刘大维","email":"davidliu@liudaweideMacBook-Pro-3.local","commits":1}]},"readingTime":{"minutes":1.32,"words":395},"filePathRelative":"education/bs/ai-intro/6. 智能计算及其应用.md","localizedDate":"November 22, 2023","excerpt":"\\n<h3>进化算法</h3>\\n<p>遗传算法GA：占绝大多数</p>\\n<p>遗传规划</p>\\n<p>进化策略</p>\\n<p>进化规划</p>\\n<h4>设计原则</h4>\\n<ol>\\n<li>适用性原则</li>\\n<li>可靠性原则</li>\\n<li>收敛性原则</li>\\n<li>稳定性原则</li>\\n<li>生物类比原则</li>\\n</ol>\\n<p>遗传算法的基本思想：</p>\\n<p>在求解问题时从多个解开始。。。</p>\\n<p>初始种群，通常是随机的（不过对后面的影响其实是很大的，不过要求不高，通常随机即可）</p>\\n<p>编码</p>\\n<ol>\\n<li>\\n<p>位串编码</p>\\n<p>一维染色体编码方法</p>\\n</li>\\n<li>\\n<p>二进制编码</p>\\n<p>二进制编码：用若干二进制数表示一个个体，原问题的解空间映射到位串空间B={0, 1}上，然后再位串空间上进行遗传操作</p>\\n<p>优点：</p>\\n<p>类似于</p>\\n</li>\\n</ol>","autoDesc":true}`);export{r as comp,k as data};
