import{_ as n,V as a,W as s,Z as p}from"./framework-e5d7a6b2.js";const t={},e=p(`<h1 id="最长回文子串" tabindex="-1"><a class="header-anchor" href="#最长回文子串" aria-hidden="true">#</a> 最长回文子串</h1><p>subsequence 子序列（非连续字符）：O(2^n)</p><p>substring 子串（非连续字符）：O(n^2)</p><p>回文子串</p><p>暴力</p><p>for 起点 O(n)</p><p>​ for 终点 O(n)</p><p>​ 判断是否回文 O(n)</p><p>优化：枚举长度、枚举起点，判断回文</p><p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/截屏2022-07-08 10.53.11.png" alt="截屏2022-07-08 10.53.11" loading="lazy"></p><p>异常检测</p><p>每一逻辑块间用空行分割</p><p>双指针</p><ul><li>相向双指针</li><li>同向</li><li>背向</li></ul><p>逻辑能力、coding能力，不是考背诵，所以不要写这个manacher这样的算法（而且他也不会）</p><p>缩进一般不要超过三层、超过的时候，尽量想办法封装函数出去</p><p>优化的逻辑：</p><ol><li>先想暴力的方法</li><li>看哪里有地方是浪费的</li></ol><h4 id="优秀的coding-quality" tabindex="-1"><a class="header-anchor" href="#优秀的coding-quality" aria-hidden="true">#</a> 优秀的Coding Quality</h4><ol><li><p>bug free</p></li><li><p>有边界检测和异常处理</p></li><li><p>代码风格：命名规范、空格、空行</p><ol><li><p>每一个逻辑Part之间一个空格划分</p><p>如异常判断、主体逻辑、结果返回，这些part之间一个分行</p></li><li><p>变量命名采用全称：1-2个单词，小驼峰</p></li><li><p>避免重复代码，不允许（泄露没有工程经验）</p></li><li><p>用不到的变量用_来命名</p></li><li><p>尽可能避免全局变量</p></li><li><p>缩进：java是4个</p></li><li><p>空格</p><ol><li>运算符前后要有</li><li>逗号、分号后面有</li></ol></li></ol></li></ol><p>写Python能大概减少10分钟的时间，如果是面试不限制语言的话，可以写Python</p><p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/截屏2022-07-09 13.26.10.png" alt="截屏2022-07-09 13.26.10" loading="lazy"></p><h4 id="中心点枚举法" tabindex="-1"><a class="header-anchor" href="#中心点枚举法" aria-hidden="true">#</a> 中心点枚举法</h4><p>N2</p><p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/image-20221128221308694.png" alt="image-20221128221308694" loading="lazy"></p><p>他说尽量不要用全局变量，大家偷偷摸摸的改容易出现问题，一般要放在参数列表里，或者放到返回值里</p><h4 id="follow-up-不使用中心点枚举-怎么办" tabindex="-1"><a class="header-anchor" href="#follow-up-不使用中心点枚举-怎么办" aria-hidden="true">#</a> Follow up：不使用中心点枚举，怎么办？</h4><p>可以使用DP（区间型动态规划）</p><p>状态转移方程，</p><p>初始化，</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>isPalindrome<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> isPalindrome<span class="token punctuation">[</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>j <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>
	s<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span> <span class="token operator">==</span> s<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span>j<span class="token punctuation">)</span>
<span class="token punctuation">)</span>

<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token punctuation">)</span>
    
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> i<span class="token punctuation">;</span> j <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>评价体系：</p><p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/截屏2022-07-09 13.28.13.png" alt="截屏2022-07-09 13.28.13" loading="lazy"></p><p><img src="https://cdn.jsdelivr.net/gh/davidliuk/images@master/blog/截屏2022-07-09 13.30.01.png" alt="截屏2022-07-09 13.30.01" loading="lazy"></p><h3 id="独孤九剑-总决式" tabindex="-1"><a class="header-anchor" href="#独孤九剑-总决式" aria-hidden="true">#</a> 独孤九剑 - 总决式</h3><p>想做到bug free最重要的是优化code Quality</p><p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/截屏2022-07-09 13.37.10.png" alt="截屏2022-07-09 13.37.10" loading="lazy"></p><p>单元运算符：--, ++, !</p><p>多用continue少用if：减少大段代码的缩进</p><p>也可以尽量减少else，如果前面的if里面执行了return或者continue、break等，后面就不需要else if，直接普通的if，最后不需要else，直接普通的xxx</p><p>最好把嵌套式的改成并列的：好懂得多</p><p>typo</p><p>主要的异常检测：</p><ol><li><p>传入参数是null</p></li><li><p>string 是否是 &quot;&quot;</p></li><li><p>访问数组下标前确保下标不越界</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">while</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;</span> a<span class="token punctuation">.</span>length <span class="token operator">&amp;&amp;</span> a<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>访问对象时，确保对象不是null：尤其是链表的题</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">while</span> <span class="token punctuation">(</span>node <span class="token operator">!=</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> node<span class="token punctuation">.</span>val <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol>`,44),i=[e];function o(l,c){return a(),s("div",null,i)}const r=n(t,[["render",o],["__file","2. 最长回文子串.html.vue"]]);export{r as default};
