import{_ as o}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as i,d as p,o as t}from"./app-Cv-jMnVl.js";const c={};function d(a,e){return t(),i("div",null,e[0]||(e[0]=[p('<h1 id="划分型" tabindex="-1"><a class="header-anchor" href="#划分型"><span>划分型</span></a></h1><p>划分型动态规划，属于前缀型的一种</p><p>给定长度为N的序列或字符串，要求划分为若干段（有限段、不限段）</p><p>类似于序列型动态规划，但是通常需要加上段数信息</p><p><code>f[i][j]</code>表示前i个元素分成j段的可行性/方案数/最优质</p><p><code>f[i]</code>表示前i个元素分成若干段的可行性/方案数/最优质</p><p>要求将一个序列或字符串划分成若干满足要求的片段</p><p>解决方法：最后一步→最后一段</p><p>枚举最后一段的起点</p><ul><li>不定段数，用<code>f[i]</code>表示前i个元素分段后的可行性/最值，可行性，方式数：Perfect Squares, Palindrome Partition lI</li><li>指定段数，用<code>f[i][j]</code>表示前i个元素分成j段后的可行性/最值，可行性，方式数：Copy Books</li></ul><p>状态表示常见的有两种</p><ul><li>如果指定了要划分为几个部分：<code>dp[i][j]</code>表示前i个数/字符划分为j个部分的最优值/方案数/可行性</li><li>如果没有指定划分为几个部分：<code>dp[i]</code>表示前i个数字符划分为若干部分的最优值/方案数/可行性</li></ul><hr><p>属于前缀型的一种</p><p>让你将字符串、数组划分为若干部分或指定个数部分<br> 开动规数组时，n和k都需要+1<br> 方程推导是去找最后一个部分从哪儿切开</p><hr><p>Perfect Squares</p><blockquote><p>最小值</p></blockquote><p>状态：<code>f[i]</code>表示i可以被分成几个完全平方数之和</p><p>转移：<code>f[i]=1+min{f[i-j2]}, j2[1,i]</code></p><p>边界：<code>f[0]=0</code></p><hr><p>Palindrome Partitioning II</p><blockquote><p>最小值</p></blockquote><p>状态：<code>f[i]</code>表示前i可以被分成几个Palin</p><p>转移：<code>f[i]=min{f[j]+1|isPalin[j][i-1]}</code></p><p>边界：<code>f[0]=0</code></p><hr><p>Palindrome Partitioning III</p><blockquote><p>最小值</p></blockquote><p>状态：<code>f[i][k]</code>表示前i被分成k个Palin的最小代价</p><p>转移：<code>f[i][k]=min{f[j][k-1]+cost[j-1][i-1]}</code></p><p>边界：<code>f[i][k]=Inf,f[i][1]=cost[0][i-1]</code></p><hr><p>Copy Books 复印书籍问题</p><blockquote><p>最小值：所有段的最大值最小（二分法也可以解答）</p></blockquote><p>状态：<code>f[k][i]</code>表示前k个抄字员最少需要多少时间抄完前i本书</p><p>转移：<code>f[k][i]=minj{max{f[k-1][j]+1|isPalin[j][i-1]}</code></p><p>转移：<code>f[k][i]=min[0,i)j{max{f[k-1][j],sum[j,i-1]k{pages[k]}}</code></p><p>边界：<code>f[i][0]=0, f[i][j]=Inf</code></p><p>On2k</p><p>可以用四边形不等式优化到Onk</p><hr><p>单词划分</p><blockquote><p>可行性</p></blockquote><p>状态：<code>f[i]</code>表示前i个字符是否可以划分</p><p>转移：<code>f[i]=or{dp[j] &amp;&amp; isWord(j+1, i)}, j in [0,i]</code></p><hr><p>Decode Ways</p><blockquote><p>方案数</p></blockquote><p>状态：<code>f[i]</code>表示前i个字符是否可以方案数</p><p>转移：<code>f[i]=f[i-1]|ok(i)+f[i-2]|ok(i-1, i)</code></p><hr><p>分割数组的最大值</p><blockquote><p>最小值：分割成m段的最大值最小</p></blockquote><p>状态：<code>f[i][j]</code>表示前i个位置分割j段的最大值</p><p>转移：<code>f[i][j]=min{max{f[k][j-1],sum(i,k)}}</code></p><p>边界：<code>f[i][j]=Inf,f[0][0]=0</code></p>',58)]))}const l=o(c,[["render",d],["__file","划分型.html.vue"]]),m=JSON.parse(`{"path":"/algo/summary/optimise/dynamic-programming/%E5%88%92%E5%88%86%E5%9E%8B.html","title":"划分型","lang":"en-US","frontmatter":{"description":"划分型 划分型动态规划，属于前缀型的一种 给定长度为N的序列或字符串，要求划分为若干段（有限段、不限段） 类似于序列型动态规划，但是通常需要加上段数信息 f[i][j]表示前i个元素分成j段的可行性/方案数/最优质 f[i]表示前i个元素分成若干段的可行性/方案数/最优质 要求将一个序列或字符串划分成若干满足要求的片段 解决方法：最后一步→最后一段 枚...","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/algo/summary/optimise/dynamic-programming/%E5%88%92%E5%88%86%E5%9E%8B.html"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"划分型"}],["meta",{"property":"og:description","content":"划分型 划分型动态规划，属于前缀型的一种 给定长度为N的序列或字符串，要求划分为若干段（有限段、不限段） 类似于序列型动态规划，但是通常需要加上段数信息 f[i][j]表示前i个元素分成j段的可行性/方案数/最优质 f[i]表示前i个元素分成若干段的可行性/方案数/最优质 要求将一个序列或字符串划分成若干满足要求的片段 解决方法：最后一步→最后一段 枚..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-11-22T03:05:37.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-22T03:05:37.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"划分型\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-22T03:05:37.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[],"git":{"createdTime":1732244737000,"updatedTime":1732244737000,"contributors":[{"name":"David Liu","email":"liudawei@seas.upenn.edu","commits":1}]},"readingTime":{"minutes":2.62,"words":786},"filePathRelative":"algo/summary/optimise/dynamic-programming/划分型.md","localizedDate":"November 22, 2024","excerpt":"\\n<p>划分型动态规划，属于前缀型的一种</p>\\n<p>给定长度为N的序列或字符串，要求划分为若干段（有限段、不限段）</p>\\n<p>类似于序列型动态规划，但是通常需要加上段数信息</p>\\n<p><code>f[i][j]</code>表示前i个元素分成j段的可行性/方案数/最优质</p>\\n<p><code>f[i]</code>表示前i个元素分成若干段的可行性/方案数/最优质</p>\\n<p>要求将一个序列或字符串划分成若干满足要求的片段</p>\\n<p>解决方法：最后一步→最后一段</p>\\n<p>枚举最后一段的起点</p>\\n<ul>\\n<li>不定段数，用<code>f[i]</code>表示前i个元素分段后的可行性/最值，可行性，方式数：Perfect Squares, Palindrome Partition lI</li>\\n<li>指定段数，用<code>f[i][j]</code>表示前i个元素分成j段后的可行性/最值，可行性，方式数：Copy Books</li>\\n</ul>","autoDesc":true}`);export{l as comp,m as data};
