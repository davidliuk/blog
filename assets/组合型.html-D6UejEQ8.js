import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as n,d as p,o as t}from"./app-PqS9YW_3.js";const e={};function m(i,s){return t(),n("div",null,s[0]||(s[0]=[p('<h1 id="组合型" tabindex="-1"><a class="header-anchor" href="#组合型"><span>组合型</span></a></h1><p>需要排列组合的计数型DP</p><p>树上也可以</p><h2 id="组合计数" tabindex="-1"><a class="header-anchor" href="#组合计数"><span>组合计数</span></a></h2><p><code>c[k][n]=n!\\(k!(n-k)!)</code></p><p><code>c[k][n]=c[k][n-1]+c[k-1][n-1]</code></p><p>边界：<code>c[0][n]=c[n][n]=1</code></p><h2 id="卡特兰数" tabindex="-1"><a class="header-anchor" href="#卡特兰数"><span>卡特兰数</span></a></h2><p>卡特兰数：</p><p>状态：<code>f[i]</code>表示i个元素时的卡特兰数</p><p>转移：<code>f[n]=sum{f[i]f[n-1-i]},i in [0,n-1]</code></p><p>边界：<code>f[0]=1</code></p><p>可以求出递推公式</p><p><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>C</mi><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msub><mo>=</mo><mfrac><mrow><mn>2</mn><mo stretchy="false">(</mo><mn>2</mn><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy="false">)</mo></mrow><mrow><mi>n</mi><mo>+</mo><mn>2</mn></mrow></mfrac><msub><mi>C</mi><mi>n</mi></msub></mrow><annotation encoding="application/x-tex">C_{n+1}=\\frac{2(2n+1)}{n+2}C_n</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8917em;vertical-align:-0.2083em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.07153em;">C</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:-0.0715em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">n</span><span class="mbin mtight">+</span><span class="mord mtight">1</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.2083em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1.4133em;vertical-align:-0.4033em;"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.01em;"><span style="top:-2.655em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">n</span><span class="mbin mtight">+</span><span class="mord mtight">2</span></span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.485em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">2</span><span class="mopen mtight">(</span><span class="mord mtight">2</span><span class="mord mathnormal mtight">n</span><span class="mbin mtight">+</span><span class="mord mtight">1</span><span class="mclose mtight">)</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.4033em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.07153em;">C</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1514em;"><span style="top:-2.55em;margin-left:-0.0715em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">n</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span></p><p><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>C</mi><mi>n</mi></msub><mo>=</mo><mfrac><mrow><mn>2</mn><mo stretchy="false">(</mo><mn>2</mn><mi>n</mi><mo>−</mo><mn>1</mn><mo stretchy="false">)</mo></mrow><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></mfrac><msub><mi>C</mi><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow></msub></mrow><annotation encoding="application/x-tex">C_{n}=\\frac{2(2n-1)}{n+1}C_{n-1}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8333em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.07153em;">C</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1514em;"><span style="top:-2.55em;margin-left:-0.0715em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">n</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1.4133em;vertical-align:-0.4033em;"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.01em;"><span style="top:-2.655em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">n</span><span class="mbin mtight">+</span><span class="mord mtight">1</span></span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.485em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">2</span><span class="mopen mtight">(</span><span class="mord mtight">2</span><span class="mord mathnormal mtight">n</span><span class="mbin mtight">−</span><span class="mord mtight">1</span><span class="mclose mtight">)</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.4033em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.07153em;">C</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:-0.0715em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">n</span><span class="mbin mtight">−</span><span class="mord mtight">1</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.2083em;"><span></span></span></span></span></span></span></span></span></span></p><p>On递推</p><h3 id="应用场景" tabindex="-1"><a class="header-anchor" href="#应用场景"><span>应用场景</span></a></h3><ol><li><p>括号序列问题</p><p>n对括号正确匹配数目</p><p>有n对()括号，试问可以组成多少种合法正确的括号序列？</p></li><li><p>出栈顺序问题</p></li><li><p>括号化：</p><p>一个栈(无穷大)的进栈序列为1，2，3，…，n，有多少个不同的出栈序列</p><p>类似买票找零</p></li><li><p>二叉树计数问题</p><p>给定节点组成二叉搜索树</p><p>给定 n 个节点，能构成多少种形状不同的二叉树。</p></li><li><p>凸多边形三角划分</p><p>将一个凸多边形区域分成三角形区域的方案数。</p><p>在圆上选择 2n 个点，将这些点对连接起来使得所得到的 n 条线段不想交的方案数。</p></li></ol><hr><p>K 个逆序对数组 lc629.</p><p>状态：<code>f[i][j]</code>表示前i个数字，恰好构成j个逆序对</p><p>转移：<code>f[i][j]=f[i][j-1]-f[i-1][j-i]+f[i-1][j]</code></p><p>边界：<code>f[n][k]</code></p>',23)]))}const r=a(e,[["render",m],["__file","组合型.html.vue"]]),o=JSON.parse(`{"path":"/algo/summary/optimise/dynamic-programming/%E7%BB%84%E5%90%88%E5%9E%8B.html","title":"组合型","lang":"en-US","frontmatter":{"description":"组合型 需要排列组合的计数型DP 树上也可以 组合计数 c[k][n]=n!\\\\(k!(n-k)!) c[k][n]=c[k][n-1]+c[k-1][n-1] 边界：c[0][n]=c[n][n]=1 卡特兰数 卡特兰数： 状态：f[i]表示i个元素时的卡特兰数 转移：f[n]=sum{f[i]f[n-1-i]},i in [0,n-1] 边界：f[0...","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/algo/summary/optimise/dynamic-programming/%E7%BB%84%E5%90%88%E5%9E%8B.html"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"组合型"}],["meta",{"property":"og:description","content":"组合型 需要排列组合的计数型DP 树上也可以 组合计数 c[k][n]=n!\\\\(k!(n-k)!) c[k][n]=c[k][n-1]+c[k-1][n-1] 边界：c[0][n]=c[n][n]=1 卡特兰数 卡特兰数： 状态：f[i]表示i个元素时的卡特兰数 转移：f[n]=sum{f[i]f[n-1-i]},i in [0,n-1] 边界：f[0..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-11-22T03:05:37.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-22T03:05:37.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"组合型\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-22T03:05:37.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[{"level":2,"title":"组合计数","slug":"组合计数","link":"#组合计数","children":[]},{"level":2,"title":"卡特兰数","slug":"卡特兰数","link":"#卡特兰数","children":[{"level":3,"title":"应用场景","slug":"应用场景","link":"#应用场景","children":[]}]}],"git":{"createdTime":1732244737000,"updatedTime":1732244737000,"contributors":[{"name":"David Liu","email":"liudawei@seas.upenn.edu","commits":1}]},"readingTime":{"minutes":1.23,"words":370},"filePathRelative":"algo/summary/optimise/dynamic-programming/组合型.md","localizedDate":"November 22, 2024","excerpt":"\\n<p>需要排列组合的计数型DP</p>\\n<p>树上也可以</p>\\n<h2>组合计数</h2>\\n<p><code>c[k][n]=n!\\\\(k!(n-k)!)</code></p>\\n<p><code>c[k][n]=c[k][n-1]+c[k-1][n-1]</code></p>\\n<p>边界：<code>c[0][n]=c[n][n]=1</code></p>\\n<h2>卡特兰数</h2>\\n<p>卡特兰数：</p>\\n<p>状态：<code>f[i]</code>表示i个元素时的卡特兰数</p>\\n<p>转移：<code>f[n]=sum{f[i]f[n-1-i]},i in [0,n-1]</code></p>","autoDesc":true}`);export{r as comp,o as data};
