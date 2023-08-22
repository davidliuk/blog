import{_ as p,V as a,W as e,Z as i}from"./framework-e5d7a6b2.js";const r={},h=i('<h1 id="动态规划使用场景" tabindex="-1"><a class="header-anchor" href="#动态规划使用场景" aria-hidden="true">#</a> 动态规划使用场景</h1><p>动规的使用场景</p><p>求最值：最大值、最小值</p><p>可行性80-90%：是否存在一种方案</p><p>方案总数：只求总数不求具体方案</p><p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/截屏2022-08-09 16.38.36.png" alt="截屏2022-08-09 16.38.36"></p><p>前三种考的最多</p><p>状态压缩：用01进行压缩</p><p>动态规划的题型分类有什么？</p><p>不同题型的动态规划对一个的状态表示方法是不同的</p><p>如果成功的找对了题型，就能够解决DP最难的状态表示问题</p><p>DP最难的就是状态的设计，不同类型的DP的状态是有固定模式的</p><h3 id="坐标型动态规划" tabindex="-1"><a class="header-anchor" href="#坐标型动态规划" aria-hidden="true">#</a> 坐标型动态规划</h3><p>dp[i] 表示从起点到坐标i的最优值/方案数/可行性</p><p>dp[i]j] 表示从起点到坐标i.j的最优值/方案数/可行性</p><p>代表题: Triangle, Unique Paths</p><h3 id="前缀型动态规划" tabindex="-1"><a class="header-anchor" href="#前缀型动态规划" aria-hidden="true">#</a> 前缀型动态规划</h3><h4 id="划分型" tabindex="-1"><a class="header-anchor" href="#划分型" aria-hidden="true">#</a> 划分型</h4><p>dp[i] 表示前i个字符的最优值/方案数/可行性</p><p>dp[i][j] 表示前i个字符划分为j个部分的最值/方案数/可行性</p><p>代表题: Word Break, Word Break Ill</p><p>二维的时候，有指定的信息，如确定要划分成多少个部分</p><h4 id="匹配型" tabindex="-1"><a class="header-anchor" href="#匹配型" aria-hidden="true">#</a> 匹配型</h4><p>dp[i][j] 表示第一个字符串的前i个字符匹配上第二个字符串的前j个字符的最优值/方案数/可行性</p><p>代表题: Longest Common Subsequence, Wildcard Matching</p><p>坐标型和前缀型的重要区别：</p><p>坐标型：到这个位置</p><p>前缀型：这个及以前的这一段</p><h3 id="区间型动态规划" tabindex="-1"><a class="header-anchor" href="#区间型动态规划" aria-hidden="true">#</a> 区间型动态规划</h3><p>dp[i]j[] 表示区间i~j的最优值/方案数/可行性</p><p>代表题: Stone Game, Burst Balloons</p><p>子数组或子串上的区间</p><p>大区间依赖于小区间的结果</p><h3 id="背包型动态规划" tabindex="-1"><a class="header-anchor" href="#背包型动态规划" aria-hidden="true">#</a> 背包型动态规划</h3><p>dp[i][j] 表示前i个物品里选出一些物品组成和为j的大小的最优值/方案数/可行性</p><p>代表题: Backpack 系列</p><p>如果限制物品的数量，可以拓展为3位dp[i][j][k]</p><p>背包问题的核心区别，第二维不是位置了，是一个值</p><p>跳跃游戏</p><ol><li>问可行性</li><li>一维数组</li><li>有方向性</li></ol><p>坐标型、可行性</p><p>要学更通用的算法，而不是只能解一题的算法（如贪心，贪心一般只能解一题）</p><p>不要追求贪心法，因为贪心真的不好想，会让人感觉你做过这个题</p><h3 id="小结" tabindex="-1"><a class="header-anchor" href="#小结" aria-hidden="true">#</a> 小结</h3><p>动态规划的题必须是求最优值/可行性/方案数这三种情况之一</p><p>动态规划的状态依赖必须有<strong>方向性</strong>，<strong>不可以有循环依赖</strong>，（或者是与顺序无关时，那就是直接人为按照数组顺序即可）</p><p>坐标型动态规划的状态：坐标</p><p>坐标型动态规划的方程：上一步坐标</p><p>Unique Path II</p><p>方向性：状态间不能有循环依赖</p><p>当是上下左右都可以走时，会产生循环依赖，大概率不是dp</p><p>Knight shorest paths II</p><p>多向的只能用BFS</p><p>单向（左4个或者右4个）的可以用DP或BFS</p>',54),d=[h];function n(t,s){return a(),e("div",null,d)}const o=p(r,[["render",n],["__file","24. 动态规划使用场景.html.vue"]]);export{o as default};
