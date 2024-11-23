import{_ as p}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as i,d as a,o as n}from"./app-Cv-jMnVl.js";const t={};function l(o,e){return n(),i("div",null,e[0]||(e[0]=[a('<h1 id="优化" tabindex="-1"><a class="header-anchor" href="#优化"><span>优化</span></a></h1><blockquote><p>复杂度理论</p></blockquote><p>动态规划的时间复杂度</p><p>O(状态总数*每个状态的处理耗费)=O(状态总数*决策数)</p><h2 id="空间优化" tabindex="-1"><a class="header-anchor" href="#空间优化"><span>空间优化</span></a></h2><h3 id="滚动数组" tabindex="-1"><a class="header-anchor" href="#滚动数组"><span>滚动数组</span></a></h3><p>条件：如果状态依赖关系只在<strong>相邻的层</strong>之间，则滚动数组可以让空间复杂度降维</p><ol><li><p>一般的，数组开依赖的相邻层数+1</p><p>数字三角形的状态转移方程为</p><p><code>dp[i][j]=min(dp[i-1][j],dp[i-1][j-1])+A[i][j]]</code></p><p>滚动数组优化之后为</p><p><code>dp[i%2][j]=min(dp[(i-1)%2][j],dp[(i-1)%2][j-1]）+A[i][j]</code></p></li><li><p>特殊的，如果只依赖上一层，且方向是单向的，则可以直接无需这一维度</p><p>需要注意转移的顺序，正着还是反着（取决于是否可以用这一层的结果）</p></li></ol><h4 id="注意" tabindex="-1"><a class="header-anchor" href="#注意"><span>注意</span></a></h4><p>不可以两个维度一起滚动</p><p>滚动数组滚动的是第一重循环的变量，而不是第二重甚至第三重</p><p>滚动数组只能滚一个维度，不能两个维度一起滚动</p><h4 id="好处" tabindex="-1"><a class="header-anchor" href="#好处"><span>好处</span></a></h4><ol><li><p>节省空间</p></li><li><p>可以简化初始化边界</p><p>因为-1和-2这些空间都有了，可以把这些地方也用递推公式统一起来了</p></li></ol><h4 id="可以省去第一维度的情况" tabindex="-1"><a class="header-anchor" href="#可以省去第一维度的情况"><span>可以省去第一维度的情况</span></a></h4><ol><li><strong>每个状态只依赖于其左边和上方的状态</strong>：如果状态转移方程中的每个状态只依赖于其左边和上方的状态，而不依赖于其他位置的状态，那么可以考虑省去第一维度。</li><li><strong>状态之间的计算顺序没有依赖关系</strong>：如果状态之间的计算顺序没有依赖关系，即可以按照从左到右、从上到下的顺序计算每个状态，那么可以省去第一维度。</li></ol><p>如果状态只能从上一行，不能从同一行转移，则高维度应该都倒顺序计算。</p><p>为什么要倒序循环呢？在去掉第一个维度后，若正序循环x1和x2,在计算<code>f[x1][x2]</code>时，转移来源<code>f[x1&#39;][x2&#39;]</code>的值已经被覆盖（因为x1&#39;≤x1以及x2&#39;≤x2）,这意味着<code>f[x1&#39;][x2&#39;]</code>实际对应的是<code>f[k][x][x2]</code>。</p><p>若倒序循环，则可消除该错误，这种方式保证计算<code>f[x1][x2]</code>时，转移来源<code>f[x1&#39;][x2&#39;]</code>的值尚未被覆盖，实际对应的是<code>f[k-1][x1&#39;][x2&#39;]</code>，从而保证转移方程与去掉维度前一致。</p><h4 id="不可以省去第一维度的情况" tabindex="-1"><a class="header-anchor" href="#不可以省去第一维度的情况"><span>不可以省去第一维度的情况</span></a></h4><ol><li><strong>状态之间存在横跨多行的依赖关系</strong>：如果状态之间存在横跨多行的依赖关系，即某个状态的计算依赖于当前行和前一行的状态，那么通常不能省去第一维度。</li><li><strong>状态之间的计算顺序有依赖关系</strong>：如果状态之间的计算顺序有依赖关系，即某个状态的计算需要先计算其他状态，那么通常不能省去第一维度。</li></ol><p>总体来说，省去第一维度的前提是能够保证状态之间的计算是可按行依次进行的，而不需要横跨多行或有特定的计算顺序。在一些问题中，这样的优化可以有效减少空间复杂度，提高算法的效率。但在某些情况下，为了保持问题的一般性和可读性，可能选择保留第一维度。</p><h4 id="例题" tabindex="-1"><a class="header-anchor" href="#例题"><span>例题</span></a></h4><p>eg. Backpack, lcis, paint house</p><p>fib</p><p><code>f[i%3]=f[i-1%3]+f[i-2%3]</code></p><h2 id="时间优化" tabindex="-1"><a class="header-anchor" href="#时间优化"><span>时间优化</span></a></h2><h3 id="辅助结构" tabindex="-1"><a class="header-anchor" href="#辅助结构"><span>辅助结构</span></a></h3><p>单调队列</p><p>优先队列</p><p>前缀和/后缀和</p><p>线段树</p><h3 id="数学" tabindex="-1"><a class="header-anchor" href="#数学"><span>数学</span></a></h3><p>k堆石子合并问题</p><p>石子归并的<strong>四边形优化</strong></p><h2 id="状态优化" tabindex="-1"><a class="header-anchor" href="#状态优化"><span>状态优化</span></a></h2><h3 id="避免重复信息" tabindex="-1"><a class="header-anchor" href="#避免重复信息"><span>避免重复信息</span></a></h3><p>eg. 状态压缩dp，不需要阶段信息，因为mask里面1的个数/最高位1的位置就是阶段</p><h3 id="状态和答案交换位置" tabindex="-1"><a class="header-anchor" href="#状态和答案交换位置"><span>状态和答案交换位置</span></a></h3><p>有的时候，状态这一维度太大，放答案合适</p><p>有的时候，不能直接正着推，只能翻着推</p><p>eg.</p><p>专题：把 X 变成 Y<br> 部分题目也可以用 BFS 解决。</p><ul><li>可怜的小猪</li><li>整数替换</li></ul><ol start="2998"><li>使 X 和 Y 相等的最少操作次数 1795</li><li>转化数字的最小运算数 1850</li><li>坏了的计算器 1909</li><li>吃掉 N 个橘子的最少天数 2048</li></ol>',45)]))}const s=p(t,[["render",l],["__file","优化.html.vue"]]),c=JSON.parse(`{"path":"/algo/summary/optimise/dynamic-programming/%E8%BF%9B%E9%98%B6/%E4%BC%98%E5%8C%96.html","title":"优化","lang":"en-US","frontmatter":{"description":"优化 复杂度理论 动态规划的时间复杂度 O(状态总数*每个状态的处理耗费)=O(状态总数*决策数) 空间优化 滚动数组 条件：如果状态依赖关系只在相邻的层之间，则滚动数组可以让空间复杂度降维 一般的，数组开依赖的相邻层数+1 数字三角形的状态转移方程为 dp[i][j]=min(dp[i-1][j],dp[i-1][j-1])+A[i][j]] 滚动数...","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/algo/summary/optimise/dynamic-programming/%E8%BF%9B%E9%98%B6/%E4%BC%98%E5%8C%96.html"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"优化"}],["meta",{"property":"og:description","content":"优化 复杂度理论 动态规划的时间复杂度 O(状态总数*每个状态的处理耗费)=O(状态总数*决策数) 空间优化 滚动数组 条件：如果状态依赖关系只在相邻的层之间，则滚动数组可以让空间复杂度降维 一般的，数组开依赖的相邻层数+1 数字三角形的状态转移方程为 dp[i][j]=min(dp[i-1][j],dp[i-1][j-1])+A[i][j]] 滚动数..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-11-23T18:37:42.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-23T18:37:42.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"优化\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-23T18:37:42.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[{"level":2,"title":"空间优化","slug":"空间优化","link":"#空间优化","children":[{"level":3,"title":"滚动数组","slug":"滚动数组","link":"#滚动数组","children":[]}]},{"level":2,"title":"时间优化","slug":"时间优化","link":"#时间优化","children":[{"level":3,"title":"辅助结构","slug":"辅助结构","link":"#辅助结构","children":[]},{"level":3,"title":"数学","slug":"数学","link":"#数学","children":[]}]},{"level":2,"title":"状态优化","slug":"状态优化","link":"#状态优化","children":[{"level":3,"title":"避免重复信息","slug":"避免重复信息","link":"#避免重复信息","children":[]},{"level":3,"title":"状态和答案交换位置","slug":"状态和答案交换位置","link":"#状态和答案交换位置","children":[]}]}],"git":{"createdTime":1732244737000,"updatedTime":1732387062000,"contributors":[{"name":"David Liu","email":"liudawei@seas.upenn.edu","commits":2}]},"readingTime":{"minutes":3.69,"words":1107},"filePathRelative":"algo/summary/optimise/dynamic-programming/进阶/优化.md","localizedDate":"November 22, 2024","excerpt":"\\n<blockquote>\\n<p>复杂度理论</p>\\n</blockquote>\\n<p>动态规划的时间复杂度</p>\\n<p>O(状态总数*每个状态的处理耗费)=O(状态总数*决策数)</p>\\n<h2>空间优化</h2>\\n<h3>滚动数组</h3>\\n<p>条件：如果状态依赖关系只在<strong>相邻的层</strong>之间，则滚动数组可以让空间复杂度降维</p>\\n<ol>\\n<li>\\n<p>一般的，数组开依赖的相邻层数+1</p>\\n<p>数字三角形的状态转移方程为</p>\\n<p><code>dp[i][j]=min(dp[i-1][j],dp[i-1][j-1])+A[i][j]]</code></p>\\n<p>滚动数组优化之后为</p>\\n<p><code>dp[i%2][j]=min(dp[(i-1)%2][j],dp[(i-1)%2][j-1]）+A[i][j]</code></p>\\n</li>\\n<li>\\n<p>特殊的，如果只依赖上一层，且方向是单向的，则可以直接无需这一维度</p>\\n<p>需要注意转移的顺序，正着还是反着（取决于是否可以用这一层的结果）</p>\\n</li>\\n</ol>","autoDesc":true}`);export{s as comp,c as data};
