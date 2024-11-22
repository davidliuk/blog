import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,d as n,o as l}from"./app-DtA_0glx.js";const p={};function h(t,i){return l(),a("div",null,i[0]||(i[0]=[n(`<h1 id="双向递归" tabindex="-1"><a class="header-anchor" href="#双向递归"><span>双向递归</span></a></h1><p>两两交换链表中的节点</p><ul><li><p>递归比迭代更加好想，好写，不易出bug</p></li><li><p>但是递归有可能发生爆栈</p></li></ul><p>经典二分查找问题</p><p>快速幂</p><ul><li><p>和递归的核心思想由大化小完美贴合的两个算法</p></li><li><p>换种递归拆分的方法会让时间复杂度和栈深度降低很多</p></li><li><p>由于每次砍掉一半，递归深度不会太深，没有爆栈风险</p></li></ul><hr><p>二叉树的深度优先遍历</p><ul><li><p>前序遍历</p></li><li><p>中序遍历</p></li><li><p>后续遍历</p></li></ul><p>斐波那契数列</p><ul><li>递归树</li></ul><p>汉诺塔</p><ul><li><p>递归树</p></li><li><p>拆解的时候只考虑当前层</p></li></ul><hr><p>二叉树（Binary tree）是树形结构的一个重要类型。许多实际问题抽象出来的数据结构往往是二叉树形式。二叉树特点是每个结点最多只能有两棵子树，且有左右之分</p><p>遍历（traverse）</p><ul><li><p>遍历：访问容器中的每一个数据成员各一次，不重不漏。</p></li><li><p>不允许某一个或某些元素没有被访问。</p></li><li><p>不允许某一个或某些元素被访问了一次以上。</p></li><li><p>二叉树的遍历</p></li><li><p>深度优先遍历</p></li><li><p>前序遍历(先序遍历)</p></li><li><p>中序遍历</p></li><li><p>后序遍历</p></li><li><p>宽度优先遍历</p></li><li><p>层序遍历</p></li></ul><hr><p>深度优先遍历</p><ul><li><p>这是一种“不撞南墙不回头”的策略，主要步骤如下：</p></li><li><p>沿着当前路径前进</p></li><li><p>发现一个多叉路口</p></li><li><p>记住当前路口，以一定行动顺序开始依次向各个方向行动</p></li><li><p>循环上述三个步骤，直到在当前路径无路可走</p></li><li><p>返回至最近记录的路口，向下一个方向前进</p></li><li><p>循环上述所有步骤，直到将所有的地点都走过一次</p></li><li><p>图例：走迷宫</p></li></ul><hr><p>斐波那契数列</p><p>记忆化搜索</p><hr><p>汉诺塔</p><p>把 n 个盘子从 &#39;A&#39; 柱移动到 &#39;C&#39; 柱上</p><p>递归的定义</p><ul><li><p>helper(n, start, end, temp, moves)</p></li><li><p>把 n 个盘子从 start 移到 end</p></li><li><p>可以借助 temp 进行移动</p></li><li><p>移动的方案存到 moves 里</p></li></ul><p>递归的拆解</p><ul><li><p>把前 n - 1 个盘子从 start 移到 temp</p><ul><li>helper(n - 1, start, temp, end, moves)</li></ul></li><li><p>把第 n 个盘子从 start 移到 end</p></li><li><p>把前 n - 1 个盘子 temp 移到 end</p><ul><li>helper(n - 1, temp, end, start, moves)</li></ul></li></ul><p>递归的出口</p><ul><li><p>n == 1</p></li><li><p>直接把盘子从 start 移到 end</p></li></ul><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">public</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> List</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&lt;</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">string</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&gt;</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> towerOfHanoi</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">(</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> n){</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">    List</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&lt;</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">string</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&gt;</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> moves </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">new</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> ArrayList</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;&gt;</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">()</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    helper</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">(n</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;A&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;C&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;B&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> moves)</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    return</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> moves</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">void</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> helper</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">(</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> n</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> char</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> start</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> char</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> end</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> char</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> temp</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> List</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&lt;</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">string moves) {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    if</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> (n </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">==</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 0</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">) {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        return</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">    }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">    </span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    helper</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">(n </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> start</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> temp</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> end</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> moves)</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">    moves</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">add</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">move</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(start, end));</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    helper</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">(n </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> temp</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> end</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> start</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> moves)</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">void</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> helper</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">(</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> n</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> char</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> start</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> char</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> end</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> char</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> temp</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> List</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&lt;</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">string moves) {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    if</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> (n </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">==</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 0</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">) {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        return</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">    }</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    helper</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">(n </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> start</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> temp</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> end</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> moves)</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">    moves</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">add</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">move</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(start, end));</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    helper</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">(n </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> temp</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> end</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> start</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> moves)</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">private</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> String</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> move</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">(</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">char</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> start</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">char</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> end) {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">	return</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;from &quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> +</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> start </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">+</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;to &quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> +</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> end</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="二叉树的分治" tabindex="-1"><a class="header-anchor" href="#二叉树的分治"><span>二叉树的分治</span></a></h2><p>巴什博弈</p><p>桌子上有一堆石头，你和你的朋友轮流从中拿石头。每一次你们都会从中拿出1到3个石头。拿走最后一个石头的人赢得游戏。游戏开始时，你是先手。</p><p>进一步优化：n % 4 != 0</p><p>分治</p><ul><li><p>什么是分治</p></li><li><p>和二叉树有什么关系</p></li></ul><p>二叉树的最大深度</p><p>最大二叉树</p><p>通过遍历序确定二叉树</p><ul><li><p>前序遍历和中序遍历树构造二叉树</p></li><li><p>中序遍历和后序遍历树构造二叉树</p></li></ul><h3 id="分治法-divide-and-conquer" tabindex="-1"><a class="header-anchor" href="#分治法-divide-and-conquer"><span>分治法(Divide and conquer)</span></a></h3><p>将大规模问题拆分为若干个小规模的同类型问题去处理</p><p>然后将小规模问题的结果进行合并处理的算法</p><p>分治法 VS 递归</p><ul><li>分治法：分治法是一种算法</li><li>递归：递归是一种程序设计方式</li></ul><p>什么样的数据结构适合分治法？</p><ul><li>数组：一个大数组可以拆分为若干个不相交的子数组</li><li>二叉树：整颗二叉树的左子树和右子树都是二叉树</li></ul><p>递归的分治法：后序遍历</p><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">public</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> 返回结果类型 </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">divideConquer</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">(root) (</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    if</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> (root </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">==</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> null</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">) {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">	    处理空树应该返回的结果</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">    }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">    </span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    if</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> (</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">root</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">left</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> ==</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> null</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> &amp;&amp;</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> root</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">right</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> ==</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> null</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">) {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">        处理叶子应该返回的结果</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">        如果叶子的返回结果可以通过两个空节点的返回结果</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">        就可以省略这一段代码</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">        一般可省略</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">    }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">    </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">    左子树的返回结果 </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> divideConquer</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">(</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">root</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">left</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">    右子树的返回结果 </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> divideConquer</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">(</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">root</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">right</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">    整棵树的结果 </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> 按照一定方法合并左右子树的结果</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    return</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> 整颗树的结果</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>二叉树最大深度</p><p>递归的定义</p><ul><li><p>maxDepth(root)</p></li><li><p>以 root 为根的二叉树的最大深度是多少</p></li></ul><p>递归的拆解</p><ul><li><p>maxDepth(root.left)</p></li><li><p>maxDepth(root.right)</p></li></ul><p>递归的出口</p><ul><li>root 是一棵空树的根</li></ul><hr><p>最大二叉树</p><p>给定一个没有重复元素的整数数组。根据此数组构建的最大二叉树定义如下：</p><p>root是数组中的最大数字</p><p>左子树是根据最大数字左侧的子数组构建的最大二叉树。</p><p>右子树是根据最大数字右侧的子数组构建的最大二叉树。</p><p>递归的定义</p><p>• buildTree(nums, start, end)</p><p>• 以 nums数组的 start ~ end 区间构建最大二叉树</p><p>递归的拆解</p><p>• 找到 nums 数组 start ~ end 区间上的最大元素位置记做 position</p><p>• root = nums[position]</p><p>• root.left = buildTree(nums, start, position - 1);</p><p>• root.right = buildTree(nums, position + 1, end);</p><p>递归的出口</p><p>• nums 数组或 start ~ end 区间为空的时候</p>`,75)]))}const r=s(p,[["render",h],["__file","双向递归.html.vue"]]),d=JSON.parse(`{"path":"/algo/summary/search/DFS/recursion/%E5%8F%8C%E5%90%91%E9%80%92%E5%BD%92.html","title":"双向递归","lang":"en-US","frontmatter":{"description":"双向递归 两两交换链表中的节点 递归比迭代更加好想，好写，不易出bug 但是递归有可能发生爆栈 经典二分查找问题 快速幂 和递归的核心思想由大化小完美贴合的两个算法 换种递归拆分的方法会让时间复杂度和栈深度降低很多 由于每次砍掉一半，递归深度不会太深，没有爆栈风险 二叉树的深度优先遍历 前序遍历 中序遍历 后续遍历 斐波那契数列 递归树 汉诺塔 递归树...","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/algo/summary/search/DFS/recursion/%E5%8F%8C%E5%90%91%E9%80%92%E5%BD%92.html"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"双向递归"}],["meta",{"property":"og:description","content":"双向递归 两两交换链表中的节点 递归比迭代更加好想，好写，不易出bug 但是递归有可能发生爆栈 经典二分查找问题 快速幂 和递归的核心思想由大化小完美贴合的两个算法 换种递归拆分的方法会让时间复杂度和栈深度降低很多 由于每次砍掉一半，递归深度不会太深，没有爆栈风险 二叉树的深度优先遍历 前序遍历 中序遍历 后续遍历 斐波那契数列 递归树 汉诺塔 递归树..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-11-22T03:05:37.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-22T03:05:37.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"双向递归\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-22T03:05:37.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[{"level":2,"title":"二叉树的分治","slug":"二叉树的分治","link":"#二叉树的分治","children":[{"level":3,"title":"分治法(Divide and conquer)","slug":"分治法-divide-and-conquer","link":"#分治法-divide-and-conquer","children":[]}]}],"git":{"createdTime":1732244737000,"updatedTime":1732244737000,"contributors":[{"name":"David Liu","email":"liudawei@seas.upenn.edu","commits":1}]},"readingTime":{"minutes":4.49,"words":1347},"filePathRelative":"algo/summary/search/DFS/recursion/双向递归.md","localizedDate":"November 22, 2024","excerpt":"\\n<p>两两交换链表中的节点</p>\\n<ul>\\n<li>\\n<p>递归比迭代更加好想，好写，不易出bug</p>\\n</li>\\n<li>\\n<p>但是递归有可能发生爆栈</p>\\n</li>\\n</ul>\\n<p>经典二分查找问题</p>\\n<p>快速幂</p>\\n<ul>\\n<li>\\n<p>和递归的核心思想由大化小完美贴合的两个算法</p>\\n</li>\\n<li>\\n<p>换种递归拆分的方法会让时间复杂度和栈深度降低很多</p>\\n</li>\\n<li>\\n<p>由于每次砍掉一半，递归深度不会太深，没有爆栈风险</p>\\n</li>\\n</ul>\\n<hr>\\n<p>二叉树的深度优先遍历</p>\\n<ul>\\n<li>\\n<p>前序遍历</p>\\n</li>\\n<li>\\n<p>中序遍历</p>\\n</li>\\n<li>\\n<p>后续遍历</p>\\n</li>\\n</ul>","autoDesc":true}`);export{r as comp,d as data};
