import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as i,d as o,o as d}from"./app-CybQbXIt.js";const c={};function t(n,p){return d(),i("div",null,p[0]||(p[0]=[o('<h1 id="区间型" tabindex="-1"><a class="header-anchor" href="#区间型"><span>区间型</span></a></h1><p>给定一个序列/字符串，进行一些操作<br> 最后一步会将序列字符串去头/去尾<br> 剩下的会是一个区间[i, j]</p><p>特点：</p><p>题目会存在Subarray/Substring相关的字眼</p><p>状态：</p><ol><li><code>f[i][j]</code>表示子串<code>[i,j]</code>时的性质，或</li><li><code>f[i][k]</code>表示以i开头长度为k的区间性质</li></ol><p>用<code>f[i][j]</code>表示数组/字符串中<code>[i,j]</code>这一段区间的最优值/可行性/方案总数</p><p>题目特点：</p><p>题目会存在Subarray/Substring相关的字眼</p><p>大区间依赖小区间，循环方式不同</p><p>因此要从较小区间计算到较大的区间</p><p>转移：</p><p>大的 Subarray/Substring 的依懒于小的Subarray/Substring<br><code>dp[i][j]=max/min/sum/or([i,j]之内更小的若干区间])</code></p><p>有的问题，需要第三重循环，枚举区间断点</p><p>子串问题，无需第三重循环，只需要判断两侧即可</p><p>解决方案：</p><ol><li>i 倒着循环，j 正着循环</li><li>先循环区间长度，加再循环区间起点</li></ol><hr><h2 id="端点类" tabindex="-1"><a class="header-anchor" href="#端点类"><span>端点类</span></a></h2><p>判断回文子串</p><p>状态：<code>dp[i][j]</code> 表示 i,j 这一段是不是回文串</p><p>转移：<code>dp[i][j]=dp[i + 1][j - 1] and s[i] == s[j]</code></p><p>边界：<code>dp[i][i]=true, dp[i][i + 1] == (s[i] == s[i + 1])</code></p><p>答案：<code>dp[x][y]</code>对于任意想要检测是否是回文串的下标范围 x-y</p><hr><p>LPS 最长回文子串（substring需要连续）</p><p>状态：<code>f[i][j]</code>表示 i,j 这一段是回文串</p><p>转移：<code>f[i][j]=f[i+1][j-1]&amp;&amp;S[i]==[j]</code></p><p>边界：<code>f[i][i]=true, f[i][i+1]=(s[i] == s[i + 1])</code></p><p>答案：更新时最长的段</p><hr><p>LPS 最长回文子序</p><p>状态：<code>f[i][j]</code>表示 i,j 这一段的最长回文子序列的长度</p><p>转移：<code>f[i][j]=max{f[i+1][j], f[i][j-1], f[i+1][j-1]+2|S[i]==[j]}</code></p><p>边界：<code>f[i][i]=1</code></p><p>答案：<code>f[0][n-1]</code></p><p>按照区间长度j-i从小到大的顺序去算</p><p>加找最优解，加<code>pi[i][j]</code>数组，记录这个位置做的选择，0:干嘛，1:干嘛，3:干嘛</p><h2 id="断点类" tabindex="-1"><a class="header-anchor" href="#断点类"><span>断点类</span></a></h2><p>On3 Floyd</p><p>石子归并游戏</p><blockquote><p>每次合并2堆，本次合并的费用是这一堆重量的综合</p></blockquote><p>状态：<code>f[i][j]</code>表示合并i到j的最小花费</p><p>转移：<code>f[i][j]=min{f[i][k] + f[k+1][j]}+sum(i,j), i&lt;=k&lt;j</code></p><p>边界：<code>f[i][i]=0</code></p><p>答案：<code>f[0][n-1]</code></p><hr><p>合并石头的最低成本</p><blockquote><p>一条直线上有 N 堆石头，每次可以合并连续的 K 堆石头，代价是 K 堆石头之和，问最终需要合并成一堆的最小代价之和,lc1000</p></blockquote><p>状态：<code>f[i][j][k]</code>表示i到j这一段合并为k堆石子的最小代价</p><p>转移：<code>f[i][j][k]=min{f[i][x][k-1]+f[x][j][1]}+sum(i,j)</code></p><p>答案：<code>f[0][n-1][1]</code></p><p>状态优化：</p><p>状态：<code>f[i][j]</code>表示i到j合并到不能合并的最小花费</p><p>转移：<code>f[i][j]=min[m,i,j-1,k-1]{f[i][m]+f[m+1][j]}+sum(i,j)|(j-i)%(k-1)==0</code></p><p>答案：<code>f[0][n-1]</code></p><blockquote><p>四边形优化</p></blockquote><hr><p>Burst Balloons 爆气球</p><blockquote><p>需要在数组前后各加1</p></blockquote><p>状态：<code>dp[i][j]</code>表示戳爆 i和j之间所有气球之后(含i,j)的最大积分</p><p>转移：<code>dp[i][j] = max{dp[i][k-1] + dp[k+1][j] + nums[i-1] * nums[k] * nums[j+1]} i&lt;=k&lt;=j</code></p><p>边界：</p><p>答案：<code>dp[0][n-1]</code></p><p>特殊定义：（不推荐，临场发挥容易失误）</p><p>状态：<code>dp[i][j]</code>表示戳爆 i和j之间所有气球之后(不含i,j)的最大积分</p><p>转移：<code>dp[i][j] = max{dp[i][k] + dp[k][j] + nums[i] * nums[k] * nums[j]} i&lt;k&lt;j</code></p><p>答案：<code>dp[0][n-1]</code></p><hr><p>切棍子的最小成本</p><p>状态：<code>dp[i][j]</code>表示戳爆 i和j之间所有气球之后(含i,j)的最大积分</p><p>转移：<code>dp[i][j] = min{dp[i][k-1] + dp[k+1][j]} + nums[j+1] - nums[i-1]} i&lt;k&lt;j</code></p><p>边界：</p><hr><p>矩阵乘法的最小花费</p><p>状态：<code>f[i][j]</code>表示i到j连乘的最小花费</p><p>转移：<code>f[i][j]=min{f[i][k]+f[k+1][j]+pqr}</code></p><p>边界：<code>f[i][i]=0</code></p><hr><p>矩阵乘法的方案数</p><p>状态：<code>f[i][j]</code>表示i到j连乘的方案数</p><p>转移：<code>f[i][j]=sum{f[i][k]*f[k+1][j]}</code></p><p>边界：<code>f[i][i]=1</code></p><h2 id="双区间" tabindex="-1"><a class="header-anchor" href="#双区间"><span>双区间</span></a></h2><p>扰乱字符串 Scramble String</p><p>这里所有串都是S和T的子串，且长度一样</p><p>所以每个串都可以用（起始位置，长度）表示</p><p>状态：<code>f[i][j][k]</code>表示S1能否通过变换成为T1</p><ul><li>S1为S从字符i开始的长度为k的子串</li><li>T1为T从字符j开始的长度为k的子串</li></ul><p>转移：<code>f[i][j][k]=or{f[i][j][w]&amp;&amp;f[i+w][j+w][k-w] or f[i][j+k-w][w]&amp;&amp;f[i+w][j][k-w]}</code></p><p>边界：<code>f[i][j][1]=s[i]==s[j]</code></p><p>答案：<code>f[0][0][n]</code></p><p>最主要空间复杂度为record数组，长度为n； 每个子数组record[i]最多不超过i（组合数）*i（每个字符串长度）个字符； 求和(1<sup>2+2</sup>2+...+n<sup>2=&gt;O(n3)O(n</sup>3) O(n3)), 故总空间复杂度的上限为O(n3)O(n^3) O(n3)</p>',93)]))}const l=e(c,[["render",t],["__file","区间型.html.vue"]]),j=JSON.parse(`{"path":"/algo/summary/optimise/dynamic-programming/%E5%8C%BA%E9%97%B4%E5%9E%8B.html","title":"区间型","lang":"en-US","frontmatter":{"description":"区间型 给定一个序列/字符串，进行一些操作 最后一步会将序列字符串去头/去尾 剩下的会是一个区间[i, j] 特点： 题目会存在Subarray/Substring相关的字眼 状态： f[i][j]表示子串[i,j]时的性质，或 f[i][k]表示以i开头长度为k的区间性质 用f[i][j]表示数组/字符串中[i,j]这一段区间的最优值/可行性/方案总...","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/algo/summary/optimise/dynamic-programming/%E5%8C%BA%E9%97%B4%E5%9E%8B.html"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"区间型"}],["meta",{"property":"og:description","content":"区间型 给定一个序列/字符串，进行一些操作 最后一步会将序列字符串去头/去尾 剩下的会是一个区间[i, j] 特点： 题目会存在Subarray/Substring相关的字眼 状态： f[i][j]表示子串[i,j]时的性质，或 f[i][k]表示以i开头长度为k的区间性质 用f[i][j]表示数组/字符串中[i,j]这一段区间的最优值/可行性/方案总..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-11-22T03:05:37.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-22T03:05:37.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"区间型\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-22T03:05:37.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[{"level":2,"title":"端点类","slug":"端点类","link":"#端点类","children":[]},{"level":2,"title":"断点类","slug":"断点类","link":"#断点类","children":[]},{"level":2,"title":"双区间","slug":"双区间","link":"#双区间","children":[]}],"git":{"createdTime":1732244737000,"updatedTime":1732244737000,"contributors":[{"name":"David Liu","email":"liudawei@seas.upenn.edu","commits":1}]},"readingTime":{"minutes":4.34,"words":1302},"filePathRelative":"algo/summary/optimise/dynamic-programming/区间型.md","localizedDate":"November 22, 2024","excerpt":"\\n<p>给定一个序列/字符串，进行一些操作<br>\\n最后一步会将序列字符串去头/去尾<br>\\n剩下的会是一个区间[i, j]</p>\\n<p>特点：</p>\\n<p>题目会存在Subarray/Substring相关的字眼</p>\\n<p>状态：</p>\\n<ol>\\n<li><code>f[i][j]</code>表示子串<code>[i,j]</code>时的性质，或</li>\\n<li><code>f[i][k]</code>表示以i开头长度为k的区间性质</li>\\n</ol>\\n<p>用<code>f[i][j]</code>表示数组/字符串中<code>[i,j]</code>这一段区间的最优值/可行性/方案总数</p>","autoDesc":true}`);export{l as comp,j as data};
