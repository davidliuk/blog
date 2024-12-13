import{_ as o}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as e,d as i,o as t}from"./app-DIqbhby7.js";const c={};function n(r,p){return t(),e("div",null,p[0]||(p[0]=[i('<h1 id="博弈型" tabindex="-1"><a class="header-anchor" href="#博弈型"><span>博弈型</span></a></h1><p>核心：<strong>换序</strong></p><p>博弈为两方游戏<br> 一方先下，在一定规则下依次出招<br> 如果满足一定条件，则一方胜<br> 目标：取胜</p><p>先手：先出招的一方<br> 出招后，先手<strong>换序</strong>，新的先手面对一个新的局面</p><p>博弈动态规划通常从第一步分析，而不是最后一步<br> 因为局面越来越简单，石子数越来越少</p><p>两类目标</p><ul><li><p>先手是否必赢</p></li><li><p>先手差值最大</p><p>先手价值最大，可以用额外状态记录的方式来得到，也可以用(maxDif+sum)/2</p></li></ul><p>状态结合</p><ul><li><p>坐标型/完全背包（的写法2或写法1）</p><p>Coins in a Line</p></li><li><p>后缀型</p><p>Coins in a Line II, 石子游戏 II</p></li><li><p>区间型</p><p>Coins in a Line III, 石子游戏</p></li><li><p>状压型</p><p>我能赢吗</p></li></ul><p>部分问题可以用数学法推出当前是否必胜</p><hr><p>Coins in a Line</p><blockquote><p>每人轮流拿1或2个，取走最后石子赢，问先手是否必赢</p><p>两人轮流从n个硬币的头部取一个硬币或者两个硬币，取走最后一个硬币者胜，问先手是否必胜</p></blockquote><p>状态：<code>f[i]</code>表示i个石子时先手必赢</p><p>转移：<code>f[i]=!f[i-1]||!f[i-2]</code></p><p>边界：<code>f[0]=false</code></p><p>可以滚动数组优化至O(1)</p><hr><p>Coins in a Line II</p><blockquote><p>两人轮流从数组的头部取一个数或者两个数，取最大和者胜，问先手是否必胜</p></blockquote><p>状态：<code>f[i]</code>表示从i到末尾</p><p>转移：<code>f[i]=max{sum(i,i+1)-f[i+1], sum(i,i+2)-f[i+2]}</code></p><hr><p>Coins in a Line III</p><blockquote><p>两人轮流从数组任意一头取数，取最大和者胜，问先手是否必胜</p><p>目标：数字和最大</p><p>博弈+区间dp</p></blockquote><p>状态：<code>f[i][j]</code>表示表示区间[i,j]的最小得分差</p><p>转移：<code>f[i][j]=max{a[i]-f[i+1][j],a[j]-f[i][j-1]}</code></p><hr><p>石子游戏</p><blockquote><p><strong>移除</strong> 最左边的石头或最右边的石头，并获得与石头值的得分。当没有石头可移除时，得分较高者获胜。</p><p>lc877.</p></blockquote><p>状态：<code>f[i][j]</code>表示区间[i,j]的最大得分差</p><p>转移：<code>f[i][j]=max{v[i]-f[i+1][j],v[j]-f[i][j-1]}</code></p><p>边界：<code>f[i][i]=0</code></p><p>答案：<code>f[0][n-1]&gt;0</code></p><hr><p>石子游戏 II</p><blockquote><p><strong>移除</strong> 最左边的石头或最右边的石头，并获得与石头值的得分。当没有石头可移除时，得分较高者获胜。返回先手可以得到的最大数量的石头</p><p>这个题很少见，边不可逆，需要用定义一或者刷表法法</p><p>lc1140. 类似前序型的定义，后序型</p></blockquote><p>状态：<code>dp[i][j]</code>表示剩余[i : len - 1]堆时，M = j的情况下，先取的人能获得的最多石子数</p><p>转移：<code>f[i][j]=max{sum(i,i+x-1)-f[i+x][max{x,m}]}</code></p><p>边界：<code>f[i][i]=0</code></p><p>答案：<code>min{f[n][j]}</code></p><hr><p>石子游戏 III</p><blockquote><p>比II简单多，每次只能从头拿1-3个</p></blockquote><p>状态：<code>f[i]</code>表示，还剩下第i-n-1堆石子时，比下一位玩家多拿的数量</p><p>转移：<code>f[i]=max{sum(i,j-1)-f[j]},j in [i+1,i+3]</code></p><p>答案：<code>f[0]</code></p><p>顺序：<code>i[n-1,0]</code></p><hr><p>石子游戏 IV</p><blockquote><p>每人轮流拿平方数个，取走最后石子赢，问先手是否必赢</p></blockquote><p>状态：<code>f[i]</code>表示i个石子时先手必赢</p><p>转移：<code>f[i]=or{!f[i-k]}</code></p><p>边界：<code>f[0]=false</code></p><p>可以滚动数组优化至O(1)</p><hr><p>石子游戏 VII</p><blockquote><p><strong>移除</strong> 最左边的石头或最右边的石头，并获得与该行中剩余石头值之 <strong>和</strong> 相等的得分。当没有石头可移除时，得分较高者获胜。</p><p>lc1690.</p></blockquote><p>状态：<code>f[i][j]</code>表示区间[i,j]的最小得分差</p><p>转移：<code>f[i][j]=max{sum(i+1,j)-f[i+1][j],sum(i,j-1)-f[i][j-1]}</code></p><p>边界：<code>f[i][i]=0</code></p><p>答案：<code>f[0][n-1]</code></p><hr><p>石子游戏 VIII</p><blockquote><p>每人轮流拿平方数个，取走最后石子赢，问先手是否必赢</p></blockquote><p>状态：<code>f[i]</code>表示剩余[i : n - 1]堆时，分数之差最大值</p><p>转移：<code>f[i]=max{f[i+1], sum(0,i)-f[i+1]}</code></p><p>边界：<code>f[n - 1]=sum(0,n-1)</code></p><p>可以滚动数组优化至O(1)</p><hr><p>我能赢吗？</p><blockquote><p>可以取任何一个位置的元素</p></blockquote>',72)]))}const l=o(c,[["render",n],["__file","博弈型.html.vue"]]),m=JSON.parse(`{"path":"/algo/summary/optimise/dynamic-programming/%E5%8D%9A%E5%BC%88%E5%9E%8B.html","title":"博弈型","lang":"en-US","frontmatter":{"description":"博弈型 核心：换序 博弈为两方游戏 一方先下，在一定规则下依次出招 如果满足一定条件，则一方胜 目标：取胜 先手：先出招的一方 出招后，先手换序，新的先手面对一个新的局面 博弈动态规划通常从第一步分析，而不是最后一步 因为局面越来越简单，石子数越来越少 两类目标 先手是否必赢 先手差值最大 先手价值最大，可以用额外状态记录的方式来得到，也可以用(max...","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/algo/summary/optimise/dynamic-programming/%E5%8D%9A%E5%BC%88%E5%9E%8B.html"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"博弈型"}],["meta",{"property":"og:description","content":"博弈型 核心：换序 博弈为两方游戏 一方先下，在一定规则下依次出招 如果满足一定条件，则一方胜 目标：取胜 先手：先出招的一方 出招后，先手换序，新的先手面对一个新的局面 博弈动态规划通常从第一步分析，而不是最后一步 因为局面越来越简单，石子数越来越少 两类目标 先手是否必赢 先手差值最大 先手价值最大，可以用额外状态记录的方式来得到，也可以用(max..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-11-22T03:05:37.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-22T03:05:37.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"博弈型\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-22T03:05:37.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[],"git":{"createdTime":1732244737000,"updatedTime":1732244737000,"contributors":[{"name":"David Liu","email":"liudawei@seas.upenn.edu","commits":1}]},"readingTime":{"minutes":3.6,"words":1080},"filePathRelative":"algo/summary/optimise/dynamic-programming/博弈型.md","localizedDate":"November 22, 2024","excerpt":"\\n<p>核心：<strong>换序</strong></p>\\n<p>博弈为两方游戏<br>\\n一方先下，在一定规则下依次出招<br>\\n如果满足一定条件，则一方胜<br>\\n目标：取胜</p>\\n<p>先手：先出招的一方<br>\\n出招后，先手<strong>换序</strong>，新的先手面对一个新的局面</p>\\n<p>博弈动态规划通常从第一步分析，而不是最后一步<br>\\n因为局面越来越简单，石子数越来越少</p>\\n<p>两类目标</p>\\n<ul>\\n<li>\\n<p>先手是否必赢</p>\\n</li>\\n<li>\\n<p>先手差值最大</p>\\n<p>先手价值最大，可以用额外状态记录的方式来得到，也可以用(maxDif+sum)/2</p>\\n</li>\\n</ul>","autoDesc":true}`);export{l as comp,m as data};
