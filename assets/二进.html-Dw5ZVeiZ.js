import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as i,d as t,o as n}from"./app-ChU1gMRF.js";const e={};function l(p,s){return n(),i("div",null,s[0]||(s[0]=[t(`<h1 id="二进制" tabindex="-1"><a class="header-anchor" href="#二进制"><span>二进制</span></a></h1><p><a href="https://oi-wiki.org/math/binary-set/" target="_blank" rel="noopener noreferrer">https://oi-wiki.org/math/binary-set/</a></p><h2 id="位操作" tabindex="-1"><a class="header-anchor" href="#位操作"><span>位操作</span></a></h2><ol><li><p><strong>设置位</strong>：</p><ul><li>将整数<code>x</code>的第<code>n</code>位设置为1：<code>x |= (1 &lt;&lt; n)</code></li></ul></li><li><p><strong>清除位</strong>：</p><ul><li>将整数<code>x</code>的第<code>n</code>位设置为0：<code>x &amp;= ~(1 &lt;&lt; n)</code></li></ul></li><li><p><strong>切换位</strong>：</p><ul><li>切换整数<code>x</code>的第<code>n</code>位：<code>x ^= (1 &lt;&lt; n)</code></li></ul></li><li><p><strong>检查位</strong>：</p><ul><li>检查整数<code>x</code>的第<code>n</code>位是否为1：<code>(x &amp; (1 &lt;&lt; n)) != 0</code></li></ul></li><li><p><strong>获取最低位的1</strong>：</p><ul><li>获取<code>x</code>的最低位的1：<code>x &amp; -x</code></li></ul></li><li><p><strong>清除最低位的1</strong>：</p><ul><li>清除<code>x</code>的最低位的1：<code>x &amp; (x - 1)</code></li></ul></li><li><p><strong>提取特定位</strong>：</p><ul><li>提取<code>x</code>的第<code>n</code>位到第<code>m</code>位：<code>(x &gt;&gt; n) &amp; ((1 &lt;&lt; (m - n + 1)) - 1)</code></li></ul></li><li><p><strong>位计数</strong>：</p><ul><li>计算<code>x</code>中1的数量：使用内置函数（如C++中的<code>__builtin_popcount</code>或Java中的<code>Integer.bitCount</code>），或者通过手动循环计数。</li></ul></li><li><p><strong>奇偶校验</strong>：</p><ul><li>检查<code>x</code>的奇偶性：<code>x &amp; 1</code>（结果为0表示偶数，为1表示奇数）</li></ul></li><li><p><strong>符号扩展</strong>：</p><ul><li>对于一个位宽固定的有符号整数<code>x</code>，将其符号位扩展到更大的位宽：使用算术右移操作（如<code>x &gt;&gt; n</code>）</li></ul></li><li><p>最高/低位1的位置</p><ul><li><code>Integer.numberOfTrailingZeros()</code></li><li><code>Integer.numberOfLeadingZeros()</code></li></ul></li><li><p><strong>二进制反转</strong>：</p><ul><li><p>反转<code>x</code>的二进制表示：需要通过循环和位操作实现，没有直接的内置函数。</p><p><code>Integer.reverse()</code></p></li></ul></li><li><p><strong>最高位的1</strong>：</p><ul><li>找到<code>x</code>最高位的1：可以通过循环左移操作实现，也可以使用特定语言的内置函数（如C++中的<code>__builtin_clz</code>）</li></ul></li></ol><p>位操作非常适合处理二进制数、位掩码、位图等场景，也常用于优化性能，特别是在竞赛编程、系统编程、加密算法等领域。由于直接操作位，位操作通常比基于数值的操作更快</p><h2 id="集合操作" tabindex="-1"><a class="header-anchor" href="#集合操作"><span>集合操作</span></a></h2><p>一个数的二进制表示可以看作是一个集合（<img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" alt="0" loading="lazy"> 表示不在集合中，<img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" alt="1" loading="lazy"> 表示在集合中）。比如集合 <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" alt="1,3,4,8" loading="lazy">，可以表示成 <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" alt="(100011010)_2" loading="lazy">。而对应的位运算也就可以看作是对集合进行的操作。</p><table><thead><tr><th style="text-align:left;">操作</th><th style="text-align:center;">集合表示</th><th style="text-align:center;">位运算语句</th></tr></thead><tbody><tr><td style="text-align:left;">交集</td><td style="text-align:center;"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>a</mi><mo>∩</mo><mi>b</mi></mrow><annotation encoding="application/x-tex">a \\cap b</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.5556em;"></span><span class="mord mathnormal">a</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">∩</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6944em;"></span><span class="mord mathnormal">b</span></span></span></span></td><td style="text-align:center;"><code>a &amp; b</code></td></tr><tr><td style="text-align:left;">并集</td><td style="text-align:center;"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>a</mi><mo>∪</mo><mi>b</mi></mrow><annotation encoding="application/x-tex">a \\cup b</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.5556em;"></span><span class="mord mathnormal">a</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">∪</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6944em;"></span><span class="mord mathnormal">b</span></span></span></span></td><td style="text-align:center;">\`a</td></tr><tr><td style="text-align:left;">补集</td><td style="text-align:center;"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mover accent="true"><mi>a</mi><mo>ˉ</mo></mover></mrow><annotation encoding="application/x-tex">\\bar{a}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.5678em;"></span><span class="mord accent"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.5678em;"><span style="top:-3em;"><span class="pstrut" style="height:3em;"></span><span class="mord mathnormal">a</span></span><span style="top:-3em;"><span class="pstrut" style="height:3em;"></span><span class="accent-body" style="left:-0.25em;"><span class="mord">ˉ</span></span></span></span></span></span></span></span></span></span></td><td style="text-align:center;"><code>~a</code> （全集为二进制都是 1）</td></tr><tr><td style="text-align:left;">差集</td><td style="text-align:center;"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>a</mi><mo>∖</mo><mi>b</mi></mrow><annotation encoding="application/x-tex">a \\setminus b</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal">a</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">∖</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6944em;"></span><span class="mord mathnormal">b</span></span></span></span></td><td style="text-align:center;"><code>a &amp; (~b)</code></td></tr><tr><td style="text-align:left;">对称差</td><td style="text-align:center;"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>a</mi><mi mathvariant="normal">△</mi><mi>b</mi></mrow><annotation encoding="application/x-tex">a\\triangle b</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8889em;vertical-align:-0.1944em;"></span><span class="mord mathnormal">a</span><span class="mord">△</span><span class="mord mathnormal">b</span></span></span></span></td><td style="text-align:center;"><code>a ^ b</code></td></tr></tbody></table><p>在进一步介绍集合的子集遍历操作之前，先看位运算的有关应用例子。</p><h3 id="子集遍历" tabindex="-1"><a class="header-anchor" href="#子集遍历"><span>子集遍历</span></a></h3><p>遍历一个二进制数表示的集合的全部子集，等价于枚举二进制数对应掩码的所有子掩码。</p><p>掩码是一串二进制码，用于和源码进行与运算，得到屏蔽源码的若干输入位后的新操作数。</p><p>掩码对于源码可以起到遮罩的作用，掩码中的 1 位意味着源码的相应位得到保留，掩码中的 0 位意味着源码的相应位进行置 0 操作。将掩码的若干 1 位改为 0 位可以得到掩码的子掩码，掩码本身也是自己的子掩码。</p><p>给定一个掩码 m，希望有效z迭代 m 的所有子掩码 s，可以考虑基于位运算技巧的实现。</p><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// 降序遍历 m 的非空子集</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">for</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> (</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> s </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> m</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> s </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">!=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> s </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> (s </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 1</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">) </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&amp;</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> m)</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// s 是 m 的一个非空子集</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>遍历所有掩码的子掩码</p><p>在状压DP中非常常用</p><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">for</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> (</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> m </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> m </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&lt;</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> (</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> &lt;&lt;</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> n)</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> m</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">++</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">) {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    // 降序遍历 m 的非空子集</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">	for</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> (</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> s </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> m</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> s </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">!=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> s </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> (s </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 1</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">) </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&amp;</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> m)</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">	// s 是 m 的一个非空子集</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>时间复杂度O3n</p><p>上面的做法算作查表法，意思是用其它状态更新当前状态。但是这种写法无法跳过无效的状态，在很多不必要的计算上浪费了大量时间。</p>`,20)]))}const d=a(e,[["render",l],["__file","二进.html.vue"]]),h=JSON.parse(`{"path":"/algo/summary/math/%E4%BA%8C%E8%BF%9B.html","title":"二进制","lang":"en-US","frontmatter":{"description":"二进制 https://oi-wiki.org/math/binary-set/ 位操作 设置位： 将整数x的第n位设置为1：x |= (1 << n) 清除位： 将整数x的第n位设置为0：x &= ~(1 << n) 切换位： 切换整数x的第n位：x ^= (1 << n) 检查位： 检查整数x的第n位是否为1：(x & (1 << n)) != 0...","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/algo/summary/math/%E4%BA%8C%E8%BF%9B.html"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"二进制"}],["meta",{"property":"og:description","content":"二进制 https://oi-wiki.org/math/binary-set/ 位操作 设置位： 将整数x的第n位设置为1：x |= (1 << n) 清除位： 将整数x的第n位设置为0：x &= ~(1 << n) 切换位： 切换整数x的第n位：x ^= (1 << n) 检查位： 检查整数x的第n位是否为1：(x & (1 << n)) != 0..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-11-23T18:49:10.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-23T18:49:10.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"二进制\\",\\"image\\":[\\"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7\\",\\"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7\\",\\"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7\\",\\"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7\\"],\\"dateModified\\":\\"2024-11-23T18:49:10.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[{"level":2,"title":"位操作","slug":"位操作","link":"#位操作","children":[]},{"level":2,"title":"集合操作","slug":"集合操作","link":"#集合操作","children":[{"level":3,"title":"子集遍历","slug":"子集遍历","link":"#子集遍历","children":[]}]}],"git":{"createdTime":1732244737000,"updatedTime":1732387750000,"contributors":[{"name":"David Liu","email":"liudawei@seas.upenn.edu","commits":1}]},"readingTime":{"minutes":3.18,"words":953},"filePathRelative":"algo/summary/math/二进.md","localizedDate":"November 22, 2024","excerpt":"\\n<p><a href=\\"https://oi-wiki.org/math/binary-set/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">https://oi-wiki.org/math/binary-set/</a></p>\\n<h2>位操作</h2>\\n<ol>\\n<li>\\n<p><strong>设置位</strong>：</p>\\n<ul>\\n<li>将整数<code>x</code>的第<code>n</code>位设置为1：<code>x |= (1 &lt;&lt; n)</code></li>\\n</ul>\\n</li>\\n<li>\\n<p><strong>清除位</strong>：</p>\\n<ul>\\n<li>将整数<code>x</code>的第<code>n</code>位设置为0：<code>x &amp;= ~(1 &lt;&lt; n)</code></li>\\n</ul>\\n</li>\\n<li>\\n<p><strong>切换位</strong>：</p>\\n<ul>\\n<li>切换整数<code>x</code>的第<code>n</code>位：<code>x ^= (1 &lt;&lt; n)</code></li>\\n</ul>\\n</li>\\n<li>\\n<p><strong>检查位</strong>：</p>\\n<ul>\\n<li>检查整数<code>x</code>的第<code>n</code>位是否为1：<code>(x &amp; (1 &lt;&lt; n)) != 0</code></li>\\n</ul>\\n</li>\\n<li>\\n<p><strong>获取最低位的1</strong>：</p>\\n<ul>\\n<li>获取<code>x</code>的最低位的1：<code>x &amp; -x</code></li>\\n</ul>\\n</li>\\n<li>\\n<p><strong>清除最低位的1</strong>：</p>\\n<ul>\\n<li>清除<code>x</code>的最低位的1：<code>x &amp; (x - 1)</code></li>\\n</ul>\\n</li>\\n<li>\\n<p><strong>提取特定位</strong>：</p>\\n<ul>\\n<li>提取<code>x</code>的第<code>n</code>位到第<code>m</code>位：<code>(x &gt;&gt; n) &amp; ((1 &lt;&lt; (m - n + 1)) - 1)</code></li>\\n</ul>\\n</li>\\n<li>\\n<p><strong>位计数</strong>：</p>\\n<ul>\\n<li>计算<code>x</code>中1的数量：使用内置函数（如C++中的<code>__builtin_popcount</code>或Java中的<code>Integer.bitCount</code>），或者通过手动循环计数。</li>\\n</ul>\\n</li>\\n<li>\\n<p><strong>奇偶校验</strong>：</p>\\n<ul>\\n<li>检查<code>x</code>的奇偶性：<code>x &amp; 1</code>（结果为0表示偶数，为1表示奇数）</li>\\n</ul>\\n</li>\\n<li>\\n<p><strong>符号扩展</strong>：</p>\\n<ul>\\n<li>对于一个位宽固定的有符号整数<code>x</code>，将其符号位扩展到更大的位宽：使用算术右移操作（如<code>x &gt;&gt; n</code>）</li>\\n</ul>\\n</li>\\n<li>\\n<p>最高/低位1的位置</p>\\n<ul>\\n<li><code>Integer.numberOfTrailingZeros()</code></li>\\n<li><code>Integer.numberOfLeadingZeros()</code></li>\\n</ul>\\n</li>\\n<li>\\n<p><strong>二进制反转</strong>：</p>\\n<ul>\\n<li>\\n<p>反转<code>x</code>的二进制表示：需要通过循环和位操作实现，没有直接的内置函数。</p>\\n<p><code>Integer.reverse()</code></p>\\n</li>\\n</ul>\\n</li>\\n<li>\\n<p><strong>最高位的1</strong>：</p>\\n<ul>\\n<li>找到<code>x</code>最高位的1：可以通过循环左移操作实现，也可以使用特定语言的内置函数（如C++中的<code>__builtin_clz</code>）</li>\\n</ul>\\n</li>\\n</ol>","autoDesc":true}`);export{d as comp,h as data};
