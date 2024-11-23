import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as s,d as e,o as l}from"./app-CrF8c6p-.js";const n={};function t(p,a){return l(),s("div",null,a[0]||(a[0]=[e(`<h1 id="数论" tabindex="-1"><a class="header-anchor" href="#数论"><span>数论</span></a></h1><ul><li><p>实数 real number</p><ul><li><p>有理数 rational number</p><ul><li><p>整数 integer</p><ul><li>自然数 natural number</li></ul></li><li><p>小数 decimal / 分数 fraction</p></li></ul></li><li><p>无理数 irrational number</p></li></ul></li><li><p>虚数 imaginary number</p></li></ul><h2 id="整数-integer" tabindex="-1"><a class="header-anchor" href="#整数-integer"><span>整数 Integer</span></a></h2><ul><li>正数 positive number</li><li>负数 negative number</li><li>正整数 positive integer</li><li>负整数 negative integer</li><li>非零 nonzero</li><li>相反数 inverse</li><li>绝对值 absolute value</li><li>数轴 number lines</li></ul><p>整数包含：正整数、负整数、和0</p><p>其中 0+正整数=自然数（自然数在GRE考试中不常出现）。</p><p>要注意非零的数和非零的整数的区别。</p><p>绝对值：绝对值是指一个数在数轴上所对应点到原点的距离，用“| |”来表示。 |b-a|和|a-b|都表示数轴上点 a 到点 b 的距离。绝对值一定是非负的。</p><p>数轴：一条规定了原点、正方向和单位长度的直线，在数轴右边的数字总是大于数轴上它左边的数字。</p><p>相反数：指绝对值相等，正负号相反的两个数互为相反数，即 a+b=0，则a 和b 互为相反数。</p><p>奇偶性 Odevity</p><p>素性 primality</p><p>因数 factor</p><p>质数 prime number</p><p>合数 composite number</p><p>最大公约数、最小公倍数</p><p>连续整数 consecutive integer：连续整数是等差数列，常考的有：连续整数、连续奇数、连续偶数。</p><p>整除和余数</p><p>整数：Integer</p><h3 id="奇偶性" tabindex="-1"><a class="header-anchor" href="#奇偶性"><span>奇偶性</span></a></h3><ul><li>奇数 odd number</li><li>偶数 even number</li></ul><p>奇数：指不能被 2 整除的整数，数学表达形式为：2k+1，奇数可以分为正奇数和负奇数。</p><p>偶数：指可以被 2 整除的整数，数学表达形式为：2k，偶数可以分为正偶数和负偶数和 0。</p><p>注意：0 虽然是非正非负的整数，但是 0 是偶数！</p><h3 id="质因数-prime" tabindex="-1"><a class="header-anchor" href="#质因数-prime"><span>质因数 Prime</span></a></h3><p>因数：factor, divisor</p><p>质数：prime number</p><p>合数：composite number</p><p>余数：remainder</p><h4 id="分解质因数" tabindex="-1"><a class="header-anchor" href="#分解质因数"><span>分解质因数</span></a></h4><ul><li>短除法，会比较慢；</li><li>观察法，先分解成两个尽量大的因数，再分别分解因数</li></ul><h4 id="质数的性质" tabindex="-1"><a class="header-anchor" href="#质数的性质"><span>质数的性质</span></a></h4><p>质数的因数只有两个，1 和他本身</p><blockquote><p>故1不是质数，2是</p></blockquote><p>一个数字只有 3 个因数 &lt;= &gt;质数的平方</p><p>一个数字有奇数个因数 &lt;=&gt; 平方数</p><p>质数的奇偶性，只有 2 是偶数，别的都是奇数</p><h4 id="因数的性质" tabindex="-1"><a class="header-anchor" href="#因数的性质"><span>因数的性质</span></a></h4><p>A is a multiple of B = B is a factor of A = A is divisible by B</p><p>如果 B 是 A 的因数，则 B 能被 A 包含/整除</p><p>2^3 3^2 5</p><h4 id="质因数和因数的个数" tabindex="-1"><a class="header-anchor" href="#质因数和因数的个数"><span>质因数和因数的个数</span></a></h4><p>质因数个数，分解后看底（底数的个数）</p><p>因数个数，分解后看指（指数+1 再相乘）</p><p>number of factors</p><h3 id="最大公因数-gcd" tabindex="-1"><a class="header-anchor" href="#最大公因数-gcd"><span>最大公因数 GCD</span></a></h3><ul><li>公约数/公因数 common divisor / common factor</li><li>最大公约数 greatest common divisor</li></ul><p>如果一个整数同时是几个整数的约数，称这个整数为它们的“公约数”；公约数中最大的称为最大公约数。一般来说 1 是任意整数的公因数。</p><p>辗转相除法</p><div class="language-c line-numbers-mode" data-highlighter="shiki" data-ext="c" data-title="c" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> gcd</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;"> a</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> int</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;"> b</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    return</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> b </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">==</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 0</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> ?</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> a </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">:</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> gcd</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(b, a </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">%</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> b);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="最小公倍数-lcm" tabindex="-1"><a class="header-anchor" href="#最小公倍数-lcm"><span>最小公倍数 LCM</span></a></h3><ul><li>公倍数 common multiple</li><li>最小公倍数 least common multiple</li></ul><p>如果一个整数同时是几个整数的倍数，称这个整数为它们的“公倍数”；公倍数中最小的称为最小公倍数。</p><p class="katex-block"><span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mrow><mi>L</mi><mi>C</mi><mi>M</mi><mo>=</mo><mfrac><mrow><mi>a</mi><mo>×</mo><mi>b</mi></mrow><mrow><mi>G</mi><mi>C</mi><mi>D</mi><mo stretchy="false">(</mo><mi>a</mi><mo separator="true">,</mo><mi>b</mi><mo stretchy="false">)</mo></mrow></mfrac></mrow><annotation encoding="application/x-tex"> LCM=\\frac{a\\times b}{GCD(a, b)} </annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal">L</span><span class="mord mathnormal" style="margin-right:0.10903em;">CM</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:2.3074em;vertical-align:-0.936em;"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.3714em;"><span style="top:-2.314em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.07153em;">GC</span><span class="mord mathnormal" style="margin-right:0.02778em;">D</span><span class="mopen">(</span><span class="mord mathnormal">a</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal">b</span><span class="mclose">)</span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.677em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord mathnormal">a</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">×</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mord mathnormal">b</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.936em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span></span></span></span></span></p><h3 id="整除" tabindex="-1"><a class="header-anchor" href="#整除"><span>整除</span></a></h3><p>A is divisible by B： A可以被B整除</p><ul><li>一个数是否能够被 5 整除，只要看它的最后一位（是 0 或 5）。</li><li>一个数是否能够被 4 整除，只要看它的后两位（是否是 4 的倍数）。</li><li>一个数是否能够被 8 整除，只要看它的后三位（是否是 8 的倍数）。</li><li>一个数能否被 3 整除，取决于各位之和能否被 3 整除。</li><li>一个数能否被 9 整除，也取决于各位之和能否被 9 整除。</li><li>0 能被所有数整除。</li><li>余数包括 0，如 24 除以 6，商为 4 余数为 0。</li></ul><h3 id="余数" tabindex="-1"><a class="header-anchor" href="#余数"><span>余数</span></a></h3><ul><li>商 quotient</li><li>余数 remainder</li></ul><h2 id="分数-fraction" tabindex="-1"><a class="header-anchor" href="#分数-fraction"><span>分数 Fraction</span></a></h2><p>GRE 数学的分数可以不约分</p><ul><li><p>分母 denominator</p></li><li><p>分子 numerator</p></li><li><p>倒数 reciprocal</p></li><li><p>分数 Fraction</p><ul><li><p>真分数 proper fraction</p></li><li><p>假分数 improper fraction</p><p>带分数 mixed number</p></li></ul></li></ul><p>表现形式为一个整数 a 和一个整数 b 的比，即 a/b，其中a 就是分子，b 就是分母。</p><p>分数有真分数和假分数之分，比如 3/8 和 8/3，其中8/3 还可以写为带分数<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mn>2</mn><mfrac><mn>2</mn><mn>3</mn></mfrac></mrow><annotation encoding="application/x-tex">2\\frac{2}{3}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.1901em;vertical-align:-0.345em;"></span><span class="mord">2</span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.8451em;"><span style="top:-2.655em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">3</span></span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.394em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">2</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.345em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span></span></span></span></p><p>另外关于分数、小数和百分数之间的转化计算，也是基础考点之一。比如 40%=2/5=0.4。</p><p>倒数：分子和分母相倒并且两个乘积是 1 的数互为倒数，即ab=1，则a 和b 互为倒数。特别注意0 没有倒数。</p><p>最简分数</p><p>约分、等分原理</p><h3 id="百分比-percentage" tabindex="-1"><a class="header-anchor" href="#百分比-percentage"><span>百分比 Percentage</span></a></h3><ul><li>百分数 percent</li><li>下降后的 decreased</li><li>从… 下降到… decrease from… to …</li><li>下降了… decrease by …</li><li>增加后的 increased</li><li>从… 增加到… increase from … to …</li><li>增加了… increase by …</li><li>a 比b 多 20% a is 20% more than b a=b*(1+20%)</li><li>a 比b 少 20% a is 20% less than b a=b*(1-20%)</li></ul><h3 id="比例-ratio" tabindex="-1"><a class="header-anchor" href="#比例-ratio"><span>比例 Ratio</span></a></h3><ul><li>比率/比例 ratio</li><li>a 比b the ratio of a to b</li><li>a 是b 的两倍 twice as many a as b</li><li>a 比b 的两倍还多 more than twice as many a as b</li></ul><p>比例：两个或多个常数的比值，s/t = s to t = s:t。常见的考法求三个数的比，以及交叉相乘法。<strong>交叉相乘</strong>，是一种数学计算方法。 例如：a/c=b/d交叉相乘后得：ad=bc其实就是去分母</p><p>倍数的表达：除了上文的表述之外，常见的还有A is twice as many as B、A is two times as many as B、A is two times greater than B。</p><p>注意对比记忆：A is two times greater than B 和A is 200% greater than B。前者表示 A 是 B 的 2 倍，即 A=2B；后者表示 A 比 B 大了 200%，所以A=B*(1+200%)=3B。</p><h2 id="小数-decimal" tabindex="-1"><a class="header-anchor" href="#小数-decimal"><span>小数 Decimal</span></a></h2><ul><li><p>小数点 decimal point</p></li><li><p>两位数字 two-digits</p></li><li><p>数位 digit</p><ul><li><p>整数位： 后面加 s 的是整数位（小数点前面的某位）</p><ul><li>个位数 ones / units digit</li><li>十位数 tens digit</li><li>百位数 hundreds digit</li><li>千位数 thousands digit</li></ul></li><li><p>分位：加 th 或 ths 的是分位（小数点后面的某位）</p><ul><li>十分位 tenths digit</li><li>百分位 hundredths digit</li><li>千分位 thousandths digit</li></ul></li></ul></li><li><p>四舍五入 rounded to the nearest …</p></li><li><p>小数 decimal</p><ul><li>有限小数 finite/terminating decimal</li><li>无限小数 infinite decimal <ul><li>循环小数 repeating decimal</li><li>无限不循环小数 nonrepeating <strong>infinite</strong> decimal/irrational number</li></ul></li></ul></li></ul><p>数位，指一个数（整数或小数）中每一个数字所占的位置，所以每一个数位上的数字只可能是0~9 中的某一个。</p><p>要认识每一个数位的说法，如下图</p><img src="https://cdn.jsdelivr.net/gh/davidliuk/images@master/blog/Screenshot 2023-11-11 at 7.06.28 PM.png" alt="Screenshot 2023-11-11 at 7.06.28 PM" style="zoom:50%;"><p>小数可以分为：</p><ul><li>有限小数</li><li>无限小数；无限小数进一步可以分为 <ul><li>无限循环小数</li><li>无限不循环小数（即无理数）</li></ul></li></ul><p>decimals &amp; fractions 小数和分数</p><ul><li><p>相关词汇：reaccuring decimal ; terminating decimal ; numerator ; denominator ; improper fracion ; mixed number</p></li><li><p>整数位与分位： 后面加 s 的是整数位（小数点前面的某位），加 th 或 ths 的是分位（小数点后面的某位），如 tens 是十位数，而 tenth 是十分位</p></li><li><p>What is the fractional part of ….这样的表达法意为“谁的几分之几”</p></li><li><p>小数和分数的互相转换：</p><p>例 1： 0．373737…=? (将其转换成一个分数)</p></li></ul><p>例题：</p><ol><li>For a given two-digit positive integer, the tens digit is 5 more than the units digit.</li></ol><p>The sum of the digits is 11. Find the integer.</p><h3 id="科学计数法" tabindex="-1"><a class="header-anchor" href="#科学计数法"><span>科学计数法</span></a></h3><p>Scientific Notation</p><h2 id="实数" tabindex="-1"><a class="header-anchor" href="#实数"><span>实数</span></a></h2>`,90)]))}const h=i(n,[["render",t],["__file","数论.html.vue"]]),c=JSON.parse(`{"path":"/test/GRE/QUANTITATIVE/%E6%95%B0%E8%AE%BA.html","title":"数论","lang":"en-US","frontmatter":{"description":"数论 实数 real number 有理数 rational number 整数 integer 自然数 natural number 小数 decimal / 分数 fraction 无理数 irrational number 虚数 imaginary number 整数 Integer 正数 positive number 负数 negative ...","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/test/GRE/QUANTITATIVE/%E6%95%B0%E8%AE%BA.html"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"数论"}],["meta",{"property":"og:description","content":"数论 实数 real number 有理数 rational number 整数 integer 自然数 natural number 小数 decimal / 分数 fraction 无理数 irrational number 虚数 imaginary number 整数 Integer 正数 positive number 负数 negative ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-11-09T03:55:12.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-09T03:55:12.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"数论\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-09T03:55:12.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[{"level":2,"title":"整数 Integer","slug":"整数-integer","link":"#整数-integer","children":[{"level":3,"title":"奇偶性","slug":"奇偶性","link":"#奇偶性","children":[]},{"level":3,"title":"质因数 Prime","slug":"质因数-prime","link":"#质因数-prime","children":[]},{"level":3,"title":"最大公因数 GCD","slug":"最大公因数-gcd","link":"#最大公因数-gcd","children":[]},{"level":3,"title":"最小公倍数 LCM","slug":"最小公倍数-lcm","link":"#最小公倍数-lcm","children":[]},{"level":3,"title":"整除","slug":"整除","link":"#整除","children":[]},{"level":3,"title":"余数","slug":"余数","link":"#余数","children":[]}]},{"level":2,"title":"分数 Fraction","slug":"分数-fraction","link":"#分数-fraction","children":[{"level":3,"title":"百分比 Percentage","slug":"百分比-percentage","link":"#百分比-percentage","children":[]},{"level":3,"title":"比例 Ratio","slug":"比例-ratio","link":"#比例-ratio","children":[]}]},{"level":2,"title":"小数 Decimal","slug":"小数-decimal","link":"#小数-decimal","children":[{"level":3,"title":"科学计数法","slug":"科学计数法","link":"#科学计数法","children":[]}]},{"level":2,"title":"实数","slug":"实数","link":"#实数","children":[]}],"git":{"createdTime":1700646963000,"updatedTime":1731124512000,"contributors":[{"name":"刘大维","email":"davidliu@liudaweideMacBook-Pro-3.local","commits":1}]},"readingTime":{"minutes":6.17,"words":1850},"filePathRelative":"test/GRE/QUANTITATIVE/数论.md","localizedDate":"November 22, 2023","excerpt":"\\n<ul>\\n<li>\\n<p>实数 real number</p>\\n<ul>\\n<li>\\n<p>有理数 rational number</p>\\n<ul>\\n<li>\\n<p>整数 integer</p>\\n<ul>\\n<li>自然数 natural number</li>\\n</ul>\\n</li>\\n<li>\\n<p>小数 decimal / 分数 fraction</p>\\n</li>\\n</ul>\\n</li>\\n<li>\\n<p>无理数 irrational number</p>\\n</li>\\n</ul>\\n</li>\\n<li>\\n<p>虚数 imaginary number</p>\\n</li>\\n</ul>\\n<h2>整数 Integer</h2>","autoDesc":true}`);export{h as comp,c as data};
