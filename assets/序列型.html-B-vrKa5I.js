import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as p,d as e,o as n}from"./app-C8HRrJwL.js";const m={};function i(t,s){return n(),p("div",null,s[0]||(s[0]=[e('<h1 id="序列型" tabindex="-1"><a class="header-anchor" href="#序列型"><span>序列型</span></a></h1><p>题目变种多，没有固定模板，见招拆招</p><p>分类</p><p>前缀型/序列型</p><ul><li>背包型</li><li>划分型</li><li>双序型/匹配型</li></ul><p>后缀型</p><p>对于博弈问题，每次都取头部的东西（边不可逆），再往后选，这样只能从后往前推</p><p>也适合于不确定终点的时候使用</p><hr><p>给定一个序列</p><p>状态：<code>f[i]</code>表示前i个元素<code>a[0],a[1],...,a[i-1]</code>的某种性质</p><p>边界：<code>f[0]</code>表示空序列的性质</p><p>给定一个序列</p><p>状态：<code>f[i]</code>表示从i开头到结尾元素<code>a[i],a[i+1],...,a[n-1]</code>的某种性质</p><p>边界：<code>f[n]</code>表示空序列的性质</p><h2 id="前缀型" tabindex="-1"><a class="header-anchor" href="#前缀型"><span>前缀型</span></a></h2><p>Decode Ways</p><blockquote><p>lc91. 即带限制的爬楼梯/fib</p></blockquote><p>状态：<code>f[i]</code>表示前i个数字解密成字符串的方案数</p><p>转移：<code>f[i]=f[i-1]|letter(i-1) + f[i-2]|letter(i-2,i-1)</code></p><p>边界：<code>f[0]=1,f[1]=letter(1)</code></p><p>顺序：0-n</p><hr><p>Decode Ways II</p><blockquote><p>有一段由A-Z组成的字母串信息被加密成数字串<br> • 加密方式为:Aà1, Bà2, ..., Zà26<br> • 给定加密后的数字串S[0...N-1]，问有多少种方式解密成字母串 • 其中可能出现*字符，可以被替换成为1~9中的任何一个字符</p></blockquote><p>状态：<code>f[i]</code>表示前i个数字解密成字符串的方案数</p><p>转移：<code>f[i]=f[i-1]*letter(i-1) + f[i-2]*letter(i-2,i-1)</code></p><p>边界：<code>f[0]=1,f[1]=letter(1)</code></p><p>顺序：0-n</p><hr><p>Paint House</p><blockquote><p>一共3个颜色，相邻两家不能颜色一样</p><p>lc256. Paint House</p><p>序列+状态</p></blockquote><p>状态：<code>f[i][j]</code>表示前i个房子，第i-1是颜色j，最小花费</p><p>转移：<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>f</mi><mo stretchy="false">[</mo><mi>i</mi><mo stretchy="false">]</mo><mo stretchy="false">[</mo><mi>j</mi><mo stretchy="false">]</mo><mo>=</mo><mi>m</mi><mi>i</mi><msub><mi>n</mi><mrow><mi>k</mi><mo mathvariant="normal">≠</mo><mi>j</mi></mrow></msub><mrow><mi>f</mi><mo stretchy="false">[</mo><mi>i</mi><mo>−</mo><mn>1</mn><mo stretchy="false">]</mo><mo stretchy="false">[</mo><mi>k</mi><mo stretchy="false">]</mo></mrow><mo>+</mo><mi>c</mi><mi>o</mi><mi>s</mi><mi>t</mi><mo stretchy="false">[</mo><mi>i</mi><mo>−</mo><mn>1</mn><mo stretchy="false">]</mo><mo stretchy="false">[</mo><mi>j</mi><mo stretchy="false">]</mo></mrow><annotation encoding="application/x-tex">f[i][j]=min_{k\\ne j}{f[i-1][k]}+cost[i-1][j]</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span><span class="mopen">[</span><span class="mord mathnormal">i</span><span class="mclose">]</span><span class="mopen">[</span><span class="mord mathnormal" style="margin-right:0.05724em;">j</span><span class="mclose">]</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1.0361em;vertical-align:-0.2861em;"></span><span class="mord mathnormal">mi</span><span class="mord"><span class="mord mathnormal">n</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3361em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right:0.03148em;">k</span><span class="mrel mtight"><span class="mrel mtight"><span class="mord vbox mtight"><span class="thinbox mtight"><span class="rlap mtight"><span class="strut" style="height:0.8889em;vertical-align:-0.1944em;"></span><span class="inner"><span class="mord mtight"><span class="mrel mtight"></span></span></span><span class="fix"></span></span></span></span></span><span class="mrel mtight">=</span></span><span class="mord mathnormal mtight" style="margin-right:0.05724em;">j</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.2861em;"><span></span></span></span></span></span></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.10764em;">f</span><span class="mopen">[</span><span class="mord mathnormal">i</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mord">1</span><span class="mclose">]</span><span class="mopen">[</span><span class="mord mathnormal" style="margin-right:0.03148em;">k</span><span class="mclose">]</span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal">cos</span><span class="mord mathnormal">t</span><span class="mopen">[</span><span class="mord mathnormal">i</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord">1</span><span class="mclose">]</span><span class="mopen">[</span><span class="mord mathnormal" style="margin-right:0.05724em;">j</span><span class="mclose">]</span></span></span></span></p><hr><p>Paint House II</p><blockquote><p>一共k个颜色，相邻两家不能颜色一样</p></blockquote><p>状态：<code>f[i][j]</code>表示前i个房子，第i-1是颜色j，最小花费</p><p>转移：<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>f</mi><mo stretchy="false">[</mo><mi>i</mi><mo stretchy="false">]</mo><mo stretchy="false">[</mo><mi>j</mi><mo stretchy="false">]</mo><mo>=</mo><mi>m</mi><mi>i</mi><msub><mi>n</mi><mrow><mi>k</mi><mo mathvariant="normal">≠</mo><mi>j</mi></mrow></msub><mrow><mi>f</mi><mo stretchy="false">[</mo><mi>i</mi><mo>−</mo><mn>1</mn><mo stretchy="false">]</mo><mo stretchy="false">[</mo><mi>k</mi><mo stretchy="false">]</mo></mrow><mo>+</mo><mi>c</mi><mi>o</mi><mi>s</mi><mi>t</mi><mo stretchy="false">[</mo><mi>i</mi><mo>−</mo><mn>1</mn><mo stretchy="false">]</mo><mo stretchy="false">[</mo><mi>j</mi><mo stretchy="false">]</mo></mrow><annotation encoding="application/x-tex">f[i][j]=min_{k\\ne j}{f[i-1][k]}+cost[i-1][j]</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span><span class="mopen">[</span><span class="mord mathnormal">i</span><span class="mclose">]</span><span class="mopen">[</span><span class="mord mathnormal" style="margin-right:0.05724em;">j</span><span class="mclose">]</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1.0361em;vertical-align:-0.2861em;"></span><span class="mord mathnormal">mi</span><span class="mord"><span class="mord mathnormal">n</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3361em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right:0.03148em;">k</span><span class="mrel mtight"><span class="mrel mtight"><span class="mord vbox mtight"><span class="thinbox mtight"><span class="rlap mtight"><span class="strut" style="height:0.8889em;vertical-align:-0.1944em;"></span><span class="inner"><span class="mord mtight"><span class="mrel mtight"></span></span></span><span class="fix"></span></span></span></span></span><span class="mrel mtight">=</span></span><span class="mord mathnormal mtight" style="margin-right:0.05724em;">j</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.2861em;"><span></span></span></span></span></span></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.10764em;">f</span><span class="mopen">[</span><span class="mord mathnormal">i</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mord">1</span><span class="mclose">]</span><span class="mopen">[</span><span class="mord mathnormal" style="margin-right:0.03148em;">k</span><span class="mclose">]</span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal">cos</span><span class="mord mathnormal">t</span><span class="mopen">[</span><span class="mord mathnormal">i</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord">1</span><span class="mclose">]</span><span class="mopen">[</span><span class="mord mathnormal" style="margin-right:0.05724em;">j</span><span class="mclose">]</span></span></span></span></p><p>O(nk2)</p><p>优化：每次要求出了j以外其他元素的最小值，加速方法，记录最小值和次小值O(nk)</p><hr><p>Paint House III</p><blockquote><p>m个房子，一共n个颜色，相邻几家颜色一样构成一个街区，要求构成target个街区最小花费</p></blockquote><p>状态：<code>f[i][j][k]</code>表示前i个房子，第i-1是颜色j，构成k个街区，最小花费</p><p>转移：<code>f[i][j][k]=min{f[i-1][j][k],min{f[i-1][x][k-1]}}+cost[i-1][j]</code></p><p>O(nk2)</p><p>优化：每次要求出了j以外其他元素的最小值，加速方法，记录最小值和次小值O(nk)</p><p>用<code>b[i][k]</code>表示<code>f[i][?][k]</code>的(1st,1stIdx,2st)，这样可以O1取得min</p><hr><p>House Robber</p><blockquote><p>不能偷相邻两家</p><p>两种理解思路，可以推出两种状态和对应的状态转移</p></blockquote><p>状态：<code>f[i]</code>表示前i个房子的最大值（不限制i-1是否被抢）</p><p>转移：<code>f[i]=min{f[i-1],f[i-2]+a[i-1]}</code></p><p>边界：<code>f[0]=0,f[1]=a[0]</code></p><p>答案：<code>f[n]</code></p><hr><p>状态：<code>f[i][j]</code>表示前i个房子，i-1是否被抢为j，的最大值</p><p>转移：</p><ul><li><code>f[i][1]=f[i-1][0]+a[i-1]</code></li><li><code>f[i][0]=min{f[i-1][0],f[i-1][1]}</code></li></ul><p>边界：<code>f[0][j]=0</code></p><p>答案：<code>Math.max{f[n][0], f[n][1]}</code></p><hr><p>House Robber II</p><blockquote><p>不能偷相邻两家，环型的，即首位不能同时被偷</p></blockquote><p>化为1-n-1和0-n-2</p><hr><p>Best Time To Buy And Sell Stock</p><blockquote><p>只能买卖一次</p></blockquote><p>状态：<code>f[i][j]</code>表示前i个股票，i-1是否有j，的最大值</p><p>转移：</p><ul><li><code>f[i][0]=max{f[i-1][0],f[i-1][1]+v[i-1]}</code></li><li><code>f[i][1]=max{f[i-1][1],0-v[i-1]}</code></li></ul><p>答案：<code>f[n][0]</code></p><p>方向：从0到N-1枚举j，即第几天卖</p><p>时刻保存当前为止（即0~j-1天）的最低价格P:</p><p>最大的P,-P即为答案</p><hr><p>Best Time To Buy And Sell Stock II</p><blockquote><p>可以买卖无限次</p></blockquote><p>状态：<code>f[i][j]</code>表示前i个股票，i-1是否有j，的最大值</p><p>转移：</p><ul><li><code>f[i][0]=max{f[i-1][0],f[i-1][1]+v[i-1]}</code></li><li><code>f[i][1]=max{f[i-1][1],f[i-1][0]-v[i-1]}</code></li></ul><hr><p>Best Time To Buy And Sell Stock III</p><blockquote><p>可以买卖2次</p><p>零一背包+状态</p></blockquote><p>状态：<code>f[i][k][j]</code>表示前i个股票，买卖k次，i-1是否有j，的最大值</p><p>转移：</p><ul><li><code>f[i][0]=max{f[i-1][0],f[i-1][1]+v[i-1]}</code></li><li><code>f[i][1]=max{f[i-1][1],f[i-1][0]-v[i-1]}</code></li></ul><hr><p>Best Time To Buy And Sell Stock IV</p><blockquote><p>可以买卖k次</p></blockquote><p>状态：<code>f[i][k][j]</code>表示前i个股票，买卖k次，i-1是否有j，的最大值</p><p>转移：</p><ul><li><code>f[i][0]=max{f[i-1][0],f[i-1][1]+v[i-1]}</code></li><li><code>f[i][1]=max{f[i-1][1],f[i-1][0]-v[i-1]}</code></li></ul><hr><p>跳跃游戏</p><blockquote><p>这个题还是建议用坐标型</p></blockquote><p>状态：<code>f[i]</code>表示前i个位置最大可以跳到哪里</p><p>转移：<code>f[i]=max{f[i-1],nums[i-1]+i-1|f[i-1]&gt;i-1}</code></p><p>边界：<code>f[0]=0</code></p><p>答案：<code>f[n]&gt;=n-1</code></p><p>滚i，开2或者一个变量即可</p><hr><p>Minimum Adjustment Cost</p><blockquote><p>给定数组A，每个元素是不超过100的正整数<br> • 将A中每个元素修改后形成数组B<br> • 要求B中任意两个相邻的元素的差不能超过Target<br> • 求最小修改代价，即|A[0]-B[0]| + ... + |A[n-1]-B[n-1]|</p><p>不知道是多少就记录下来：序列加状态</p></blockquote><p>状态：<code>f[i][j]</code>表示前i个位置，第i-1变成j，都符合条件，的最小花费</p><p>转移：<code>f[i][j]=min{f[i-1][k]+abs(j-a[i-1])|abs(k-j)&lt;=target, k in [1,100]}</code></p><p>边界：<code>f[0][j]=0</code></p><hr><p>染色问题(阿里)</p><blockquote><p>有一个圆形被分成n个扇形，用m种颜色给每个扇形染色，相邻扇形颜色不 能相同，求方案总数(不考虑对称性)。由于这个数可能很大，因此只需返回方 案数模1e9 + 7。</p><p>LintCode 1444.</p></blockquote><p>令dp[i]表示共 i 个扇形时，使用 m 种配色的上色方案数</p><hr><p>分隔数组以得到最大和</p><p>状态：<code>f[i]</code>表示前i个位置，最大和</p><p>转移：<code>f[i]=max{f[j]+(i-j)*max[j, i-1]}</code></p><p>边界：<code>f[0]=0</code></p><hr><h3 id="总结" tabindex="-1"><a class="header-anchor" href="#总结"><span>总结</span></a></h3><p>序列+状态型DP</p><p>当思考最后一步时，这一步的选择依赖于前一步的某种状态</p><p>Paint House</p><p>House Robber</p><hr><p>当思考动态规划最后一步时，这一步的选择依赖于前一步的某种状态<br> 初始化时，[0]代表前0个元素/前0天的情况<br> 与坐标型动态规划区别<br> 计算时，的代表前i个元素（即元素0~i-)的某种性质</p>',125)]))}const c=a(m,[["render",i],["__file","序列型.html.vue"]]),r=JSON.parse(`{"path":"/algo/summary/optimise/dynamic-programming/%E5%BA%8F%E5%88%97%E5%9E%8B.html","title":"序列型","lang":"en-US","frontmatter":{"description":"序列型 题目变种多，没有固定模板，见招拆招 分类 前缀型/序列型 背包型 划分型 双序型/匹配型 后缀型 对于博弈问题，每次都取头部的东西（边不可逆），再往后选，这样只能从后往前推 也适合于不确定终点的时候使用 给定一个序列 状态：f[i]表示前i个元素a[0],a[1],...,a[i-1]的某种性质 边界：f[0]表示空序列的性质 给定一个序列 状...","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/algo/summary/optimise/dynamic-programming/%E5%BA%8F%E5%88%97%E5%9E%8B.html"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"序列型"}],["meta",{"property":"og:description","content":"序列型 题目变种多，没有固定模板，见招拆招 分类 前缀型/序列型 背包型 划分型 双序型/匹配型 后缀型 对于博弈问题，每次都取头部的东西（边不可逆），再往后选，这样只能从后往前推 也适合于不确定终点的时候使用 给定一个序列 状态：f[i]表示前i个元素a[0],a[1],...,a[i-1]的某种性质 边界：f[0]表示空序列的性质 给定一个序列 状..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-11-22T03:05:37.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-22T03:05:37.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"序列型\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-22T03:05:37.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[{"level":2,"title":"前缀型","slug":"前缀型","link":"#前缀型","children":[{"level":3,"title":"总结","slug":"总结","link":"#总结","children":[]}]}],"git":{"createdTime":1732244737000,"updatedTime":1732244737000,"contributors":[{"name":"David Liu","email":"liudawei@seas.upenn.edu","commits":1}]},"readingTime":{"minutes":5.6,"words":1679},"filePathRelative":"algo/summary/optimise/dynamic-programming/序列型.md","localizedDate":"November 22, 2024","excerpt":"\\n<p>题目变种多，没有固定模板，见招拆招</p>\\n<p>分类</p>\\n<p>前缀型/序列型</p>\\n<ul>\\n<li>背包型</li>\\n<li>划分型</li>\\n<li>双序型/匹配型</li>\\n</ul>\\n<p>后缀型</p>\\n<p>对于博弈问题，每次都取头部的东西（边不可逆），再往后选，这样只能从后往前推</p>\\n<p>也适合于不确定终点的时候使用</p>\\n<hr>\\n<p>给定一个序列</p>\\n<p>状态：<code>f[i]</code>表示前i个元素<code>a[0],a[1],...,a[i-1]</code>的某种性质</p>\\n<p>边界：<code>f[0]</code>表示空序列的性质</p>","autoDesc":true}`);export{c as comp,r as data};
