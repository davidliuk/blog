import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as t,d as a,o as i}from"./app-ktFCNIob.js";const n={};function o(r,p){return i(),t("div",null,p[0]||(p[0]=[a('<h1 id="背包型" tabindex="-1"><a class="header-anchor" href="#背包型"><span>背包型</span></a></h1><p>01背包：要么选1个，要么不选</p><p>多重背包：可选多份</p><p>完全背包：可以分分割（贪心法，不是DP）</p><p>其他DP没有维度是和的DP，所以背包问题是很特殊的DP</p><p>第一种状态表示</p><p>dp[i][j]表示前i个物品，是否可以表示出总和j</p><p>第二种状态表示</p><p>dp[i][j]表示前i个物品，挑出&lt;=j的最大和是多少</p><p>效率比第一种低，原因：或运算比+快</p><h4 id="背包问题小结" tabindex="-1"><a class="header-anchor" href="#背包问题小结"><span>背包问题小结</span></a></h4><p>通常是二维的状态数组，前i个组成和为j</p><p>状态数组的大小需要开(n + 1)* (m + 1)</p><p>题目中通常有“和”与“差”的概念，数值会被放到状态中</p><p>每个数存在选或者不选两种状态（01背包）</p><p>每个数可以选任意多个（多重背包）</p><p>数的顺序无关</p><h3 id="_01背包的三种变形" tabindex="-1"><a class="header-anchor" href="#_01背包的三种变形"><span>01背包的三种变形</span></a></h3><h4 id="最小划分" tabindex="-1"><a class="header-anchor" href="#最小划分"><span>最小划分</span></a></h4><p>划分成两部分，使得相差最小</p><p>可以抽象成背包容量sum/2的01背包Onn</p><p>|SUM - X - X| = |SUM - 2X|最小，最接近SUM/2</p><h4 id="外卖优惠券" tabindex="-1"><a class="header-anchor" href="#外卖优惠券"><span>外卖优惠券</span></a></h4><p>每种商品只能购买一次，最少买多少钱，可以用上满x优惠的优惠券</p><p>大于等于X的最小值 = SUM - 小于等于X的最大值</p><p>背包容量SUM - X</p><h4 id="石头碰撞" tabindex="-1"><a class="header-anchor" href="#石头碰撞"><span>石头碰撞</span></a></h4><p>腾讯的题</p><p>两个石头a, b，碰撞完以后变成一个石头|a-b|，直到石头数量&lt;2，求最后剩下的石头最小是多少</p><p>= 最小划分</p><p>可以看做最小划分的两个木桶，每次碰撞就把下面砍掉一个底</p>',31)]))}const c=e(n,[["render",o],["__file","25. 背包型.html.vue"]]),l=JSON.parse(`{"path":"/algo/course/jz/dp/25.%20%E8%83%8C%E5%8C%85%E5%9E%8B.html","title":"背包型","lang":"en-US","frontmatter":{"description":"背包型 01背包：要么选1个，要么不选 多重背包：可选多份 完全背包：可以分分割（贪心法，不是DP） 其他DP没有维度是和的DP，所以背包问题是很特殊的DP 第一种状态表示 dp[i][j]表示前i个物品，是否可以表示出总和j 第二种状态表示 dp[i][j]表示前i个物品，挑出<=j的最大和是多少 效率比第一种低，原因：或运算比+快 背包问题小结 通...","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/algo/course/jz/dp/25.%20%E8%83%8C%E5%8C%85%E5%9E%8B.html"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"背包型"}],["meta",{"property":"og:description","content":"背包型 01背包：要么选1个，要么不选 多重背包：可选多份 完全背包：可以分分割（贪心法，不是DP） 其他DP没有维度是和的DP，所以背包问题是很特殊的DP 第一种状态表示 dp[i][j]表示前i个物品，是否可以表示出总和j 第二种状态表示 dp[i][j]表示前i个物品，挑出<=j的最大和是多少 效率比第一种低，原因：或运算比+快 背包问题小结 通..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-12-17T16:38:04.000Z"}],["meta",{"property":"article:modified_time","content":"2024-12-17T16:38:04.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"背包型\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-12-17T16:38:04.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[{"level":3,"title":"01背包的三种变形","slug":"_01背包的三种变形","link":"#_01背包的三种变形","children":[]}],"git":{"createdTime":1732244737000,"updatedTime":1734453484000,"contributors":[{"name":"刘大维","email":"davidliu@liudaweideMacBook-Pro-3.local","commits":1}]},"readingTime":{"minutes":1.37,"words":410},"filePathRelative":"algo/course/jz/dp/25. 背包型.md","localizedDate":"November 22, 2024","excerpt":"\\n<p>01背包：要么选1个，要么不选</p>\\n<p>多重背包：可选多份</p>\\n<p>完全背包：可以分分割（贪心法，不是DP）</p>\\n<p>其他DP没有维度是和的DP，所以背包问题是很特殊的DP</p>\\n<p>第一种状态表示</p>\\n<p>dp[i][j]表示前i个物品，是否可以表示出总和j</p>\\n<p>第二种状态表示</p>\\n<p>dp[i][j]表示前i个物品，挑出&lt;=j的最大和是多少</p>\\n<p>效率比第一种低，原因：或运算比+快</p>\\n<h4>背包问题小结</h4>\\n<p>通常是二维的状态数组，前i个组成和为j</p>\\n<p>状态数组的大小需要开(n + 1)* (m + 1)</p>","autoDesc":true}`);export{c as comp,l as data};
