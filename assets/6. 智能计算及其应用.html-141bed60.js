import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{o as n,c as s,d as e}from"./app-9107e99b.js";const p={},t=e(`<h1 id="智能计算及其应用" tabindex="-1"><a class="header-anchor" href="#智能计算及其应用" aria-hidden="true">#</a> 智能计算及其应用</h1><h3 id="进化算法" tabindex="-1"><a class="header-anchor" href="#进化算法" aria-hidden="true">#</a> 进化算法</h3><p>遗传算法GA：占绝大多数</p><p>遗传规划</p><p>进化策略</p><p>进化规划</p><h4 id="设计原则" tabindex="-1"><a class="header-anchor" href="#设计原则" aria-hidden="true">#</a> 设计原则</h4><ol><li>适用性原则</li><li>可靠性原则</li><li>收敛性原则</li><li>稳定性原则</li><li>生物类比原则</li></ol><p>遗传算法的基本思想：</p><p>在求解问题时从多个解开始。。。</p><p>初始种群，通常是随机的（不过对后面的影响其实是很大的，不过要求不高，通常随机即可）</p><p>编码</p><ol><li><p>位串编码</p><p>一维染色体编码方法</p></li><li><p>二进制编码</p><p>二进制编码：用若干二进制数表示一个个体，原问题的解空间映射到位串空间B={0, 1}上，然后再位串空间上进行遗传操作</p><p>优点：</p><p>类似于</p></li></ol><p>15:01111</p><p>16:10000</p><p>Gray 码，解决海明距离问题</p><p>实数编码，</p><p>种群规模过大时，又容易降低效率</p><p>初始种群主要是，20-50个</p><p>适应度函数</p><p>过早收敛</p><p>停滞现象</p><h3 id="自适应函数" tabindex="-1"><a class="header-anchor" href="#自适应函数" aria-hidden="true">#</a> 自适应函数</h3><p>线性变换</p><p>个体选择概率分配方法</p><p>线性排序</p><h4 id="交叉" tabindex="-1"><a class="header-anchor" href="#交叉" aria-hidden="true">#</a> 交叉</h4><ol><li>一点交叉</li><li>二点交叉</li></ol><p>属于遗传，不会产生革命性的变化</p><h4 id="变异" tabindex="-1"><a class="header-anchor" href="#变异" aria-hidden="true">#</a> 变异</h4><ul><li>位点</li><li>逆转</li><li>插入</li><li>互换</li><li>移动</li></ul><p>遗传算法，莫范Python，第六章，解决tsp问题</p><h2 id="群智能算法" tabindex="-1"><a class="header-anchor" href="#群智能算法" aria-hidden="true">#</a> 群智能算法</h2><h3 id="粒子群优化算法" tabindex="-1"><a class="header-anchor" href="#粒子群优化算法" aria-hidden="true">#</a> 粒子群优化算法</h3><h4 id="基本原理" tabindex="-1"><a class="header-anchor" href="#基本原理" aria-hidden="true">#</a> 基本原理</h4><p>解决车辆路径问题(VRP)的问题</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">int</span> <span class="token operator">*</span>a<span class="token punctuation">;</span>
<span class="token keyword">int</span> b <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
a <span class="token operator">=</span> <span class="token operator">&amp;</span>b<span class="token punctuation">;</span>

cout<span class="token operator">&lt;&lt;</span>a<span class="token punctuation">;</span>
cout<span class="token operator">&lt;&lt;</span><span class="token operator">*</span>a<span class="token punctuation">;</span>

ListNode <span class="token operator">*</span>a<span class="token punctuation">;</span>
ListNode b <span class="token operator">=</span> new <span class="token function">ListNode</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
a <span class="token operator">=</span> <span class="token operator">&amp;</span>b<span class="token punctuation">;</span>

cout<span class="token operator">&lt;&lt;</span>a<span class="token punctuation">;</span>
cout<span class="token operator">&lt;&lt;</span><span class="token punctuation">(</span><span class="token operator">*</span>a<span class="token punctuation">)</span><span class="token punctuation">.</span>val<span class="token punctuation">;</span>
cout<span class="token operator">&lt;&lt;</span>a<span class="token operator">-&gt;</span>val<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>蚁群算法</p>`,38),i=[t];function l(o,c){return n(),s("div",null,i)}const u=a(p,[["render",l],["__file","6. 智能计算及其应用.html.vue"]]);export{u as default};
