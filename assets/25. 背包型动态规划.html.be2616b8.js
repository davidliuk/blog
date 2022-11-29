import{_ as p}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as a,c as e,f as r}from"./app.7ae2a322.js";const h={},d=r('<p>01背包：要么选1个，要么不选</p><p>多重背包：可选多份</p><p>完全背包：可以分分割（贪心法，不是DP）</p><p>其他DP没有维度是和的DP，所以背包问题是很特殊的DP</p><p>第一种状态表示</p><p>dp[i][j]表示前i个物品，是否可以表示出总和j</p><p>第二种状态表示</p><p>dp[i][j]表示前i个物品，挑出&lt;=j的最大和是多少</p><p>效率比第一种低，原因：或运算比+快</p><h4 id="背包问题小结" tabindex="-1"><a class="header-anchor" href="#背包问题小结" aria-hidden="true">#</a> 背包问题小结</h4><p>通常是二维的状态数组，前i个组成和为j</p><p>状态数组的大小需要开(n + 1)* (m + 1)</p><p>题目中通常有“和”与“差”的概念，数值会被放到状态中</p><p>每个数存在选或者不选两种状态（01背包）</p><p>每个数可以选任意多个（多重背包）</p><p>数的顺序无关</p><h3 id="_01背包的三种变形" tabindex="-1"><a class="header-anchor" href="#_01背包的三种变形" aria-hidden="true">#</a> 01背包的三种变形</h3><h4 id="最小划分" tabindex="-1"><a class="header-anchor" href="#最小划分" aria-hidden="true">#</a> 最小划分</h4><p>划分成两部分，使得相差最小</p><p>可以抽象成背包容量sum/2的01背包Onn</p><p>|SUM - X - X| = |SUM - 2X|最小，最接近SUM/2</p><h4 id="外卖优惠券" tabindex="-1"><a class="header-anchor" href="#外卖优惠券" aria-hidden="true">#</a> 外卖优惠券</h4><p>每种商品只能购买一次，最少买多少钱，可以用上满x优惠的优惠券</p><p>大于等于X的最小值 = SUM - 小于等于X的最大值</p><p>背包容量SUM - X</p><h4 id="石头碰撞" tabindex="-1"><a class="header-anchor" href="#石头碰撞" aria-hidden="true">#</a> 石头碰撞</h4><p>腾讯的题</p><p>两个石头a, b，碰撞完以后变成一个石头|a-b|，直到石头数量&lt;2，求最后剩下的石头最小是多少</p><p>= 最小划分</p><p>可以看做最小划分的两个木桶，每次碰撞就把下面砍掉一个底</p>',30),i=[d];function t(n,_){return a(),e("div",null,i)}const o=p(h,[["render",t],["__file","25. 背包型动态规划.html.vue"]]);export{o as default};
