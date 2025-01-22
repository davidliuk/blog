import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as n,d as s,a as l,o as e}from"./app-ktFCNIob.js";const t={};function h(k,i){return e(),n("div",null,i[0]||(i[0]=[s('<h1 id="二分搜索" tabindex="-1"><a class="header-anchor" href="#二分搜索"><span>二分搜索</span></a></h1><p>核心：两段性，即针对目标函数，两边结果一定相反，一边为True，一边为False</p><p><strong>二值性</strong></p><h3 id="使用条件" tabindex="-1"><a class="header-anchor" href="#使用条件"><span>使用条件</span></a></h3><ul><li><p>连续的解空间</p><p>通常是连续的非负整数区间，通常表示：</p><ul><li>坐标或者索引，如数组中查找一个元素、隔板插入的空隙</li><li>资源或者能力，如最小或最大的花费、最大可重复的子数组长度</li></ul></li><li><p>某一函数/性质，在该解空间上，呈现两段，一边都为True，一边都为False</p><p>二分搜索就是找到这两段临界的那两个节点，故分类为</p><ul><li>寻找符合条件的最左侧</li><li>寻找符合条件的最右侧</li></ul></li></ul><h3 id="算法步骤" tabindex="-1"><a class="header-anchor" href="#算法步骤"><span>算法步骤</span></a></h3>',6),l("iframe",{width:"800",height:"600",frameborder:"0",src:"https://pythontutor.com/iframe-embed.html#code=import%20java.util.function.IntPredicate%3B%0A%0Apublic%20class%20BinarySearch%20%7B%0A%20%20%20%20public%20static%20int%20searchFirst%28int%20start,%20int%20end,%20IntPredicate%20isValid%29%20%7B%0A%20%20%20%20%20%20%20%20while%20%28start%20%3C%20end%29%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20int%20mid%20%3D%20start%20%2B%20%28end%20-%20start%29%20/%202%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20if%20%28isValid.test%28mid%29%29%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20end%20%3D%20mid%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20start%20%3D%20mid%20%2B%201%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%0A%20%20%20%20%20%20%20%20return%20start%3B%0A%20%20%20%20%7D%0A%20%20%20%20%0A%20%20%20%20public%20static%20void%20main%28String%5B%5D%20args%29%20%7B%0A%20%20%20%20%20%20%20%20int%5B%5D%20nums%20%3D%20new%20int%5B%5D%7B1,%202,%203,%203,%203,%204,%205%7D%3B%0A%20%20%20%20%20%20%20%20searchFirst%280,%20nums.length%20-%201,%20%28mid%29%20-%3E%20nums%5Bmid%5D%20%3E%3D%203%29%3B%0A%20%20%20%20%7D%0A%7D&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=35&heapPrimitives=nevernest&origin=opt-frontend.js&py=java&rawInputLstJSON=%5B%5D&textReferences=false"},null,-1),s(`<h3 id="算法模板" tabindex="-1"><a class="header-anchor" href="#算法模板"><span>算法模板</span></a></h3><p>所有整数上的二分问题都可以套用到如下两种模板上：</p><h4 id="寻找符合条件的最小-前-左的" tabindex="-1"><a class="header-anchor" href="#寻找符合条件的最小-前-左的"><span>寻找符合条件的最小/前/左的</span></a></h4><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> searchMin</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">(</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> start</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> int</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> end</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> IntPredicate</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> isValid) {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    while</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> (start </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&lt;</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> end) {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> mid </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> start </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">+</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> (end </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> start) </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">/</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        if</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> (</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">isValid</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">test</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(mid)</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">) {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">            end </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> mid</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">        } </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">else</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">            start </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> mid </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">+</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">        }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    return</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> start</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>要点：</p><ol><li><code>start &lt; end</code>，这样在退出的时候，start==end，都是答案易于理解。</li><li><code>end = mid</code>，因为是搜索最靠前的一个，所以在mid符合条件时，因为右侧的符合条件的都大于mid，所以mid右侧的都可以排除，只需要在[start, mid]找</li><li><code>start = mid + 1</code>，mid不符合条件，本身可以排除，且结合第四条可以避免死循环</li><li><code>mid = start + (end - start) / 2</code>， <ul><li>这样写是向下取整，由于在循环内部时start&lt;end，这样可以保证mid小于end，这样end=mid可以缩小区间，start=mid+1也可以缩小区间避免死循环。</li><li>这样写可以避免整数溢出</li></ul></li><li><code>searchMin</code>中mid向下取整，mid永远不会等于末尾，传入的end可作为哨兵</li></ol><p>用途：</p><ul><li>符合条件的最小值（如求最小花费）</li></ul><h4 id="寻找符合条件的最大-后-右的" tabindex="-1"><a class="header-anchor" href="#寻找符合条件的最大-后-右的"><span>寻找符合条件的最大/后/右的</span></a></h4><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> searchMax</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">(</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> start</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> int</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> end</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> IntPredicate</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> isValid) {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    while</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> (start </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&lt;</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> end) {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> mid </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> start </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">+</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> (end </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> start) </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">/</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 2</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> +</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        if</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> (</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">isValid</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">test</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(mid)</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">) {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">            start </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> mid</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">        } </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">else</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">            end </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> mid </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">        }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    return</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> start</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>要点：</p><ol><li><code>start &lt; end</code>，这样在退出的时候，start==end，都是答案易于理解。</li><li><code>start = mid</code>，因为是搜索最靠后的一个，所以在mid符合条件时，因为左侧的符合条件的都小于mid，所以mid左侧的都可以排除，只需要在[mid, end]找</li><li><code>end = mid - 1</code>，mid不符合条件，本身可以排除，且结合第四条可以避免死循环</li><li><code>mid = start + (end - start) / 2 + 1</code>， <ul><li>这样写是向上取整，由于在循环内部时start&lt;end，这样可以保证mid大于start，这样start=mid可以缩小区间，end=mid - 1也可以缩小区间避免死循环。</li><li>这样写可以避免整数溢出（当<code>start=0, end=Integer.MAX_VALUE</code>，如果在括号内+1进行向上取整会溢出）</li></ul></li><li><code>searchMax</code>中mid向上取整，mid永远不会等于开头，传入的start可作为哨兵</li></ol><p>用途：</p><ul><li>符合条件的最大值（如求最大价值）</li></ul><h3 id="寻找符合条件的浮点数" tabindex="-1"><a class="header-anchor" href="#寻找符合条件的浮点数"><span>寻找符合条件的浮点数</span></a></h3><p>所有浮点数上的二分问题都可以归到如下模板：</p><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// 如 double eps = 1e-6;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">double</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> search</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">(</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">double</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> start</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> double</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> end</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> double</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> eps</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> DoublePredicate</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> isValid) {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    while</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> (start </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">+</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> eps </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&lt;</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> end) {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        double</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> mid </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> start </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">+</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> (end </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> start) </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">/</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        if</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> (</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">isValid</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">test</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(mid)</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">) {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">            end </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> mid</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">        } </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">else</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">            start </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> mid</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">        }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    return</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> start</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>用途，在给定精度的情况下：</p><ul><li>求平方根</li><li>求立方根</li></ul>`,19)]))}const r=a(t,[["render",h],["__file","index.html.vue"]]),A=JSON.parse(`{"path":"/algo/summary/optimise/decrease-conquer/binary/search/","title":"二分搜索","lang":"en-US","frontmatter":{"description":"二分搜索 核心：两段性，即针对目标函数，两边结果一定相反，一边为True，一边为False 二值性 使用条件 连续的解空间 通常是连续的非负整数区间，通常表示： 坐标或者索引，如数组中查找一个元素、隔板插入的空隙 资源或者能力，如最小或最大的花费、最大可重复的子数组长度 某一函数/性质，在该解空间上，呈现两段，一边都为True，一边都为False 二分...","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/algo/summary/optimise/decrease-conquer/binary/search/"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"二分搜索"}],["meta",{"property":"og:description","content":"二分搜索 核心：两段性，即针对目标函数，两边结果一定相反，一边为True，一边为False 二值性 使用条件 连续的解空间 通常是连续的非负整数区间，通常表示： 坐标或者索引，如数组中查找一个元素、隔板插入的空隙 资源或者能力，如最小或最大的花费、最大可重复的子数组长度 某一函数/性质，在该解空间上，呈现两段，一边都为True，一边都为False 二分..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-11-22T03:05:37.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-22T03:05:37.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"二分搜索\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-22T03:05:37.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[{"level":3,"title":"使用条件","slug":"使用条件","link":"#使用条件","children":[]},{"level":3,"title":"算法步骤","slug":"算法步骤","link":"#算法步骤","children":[]},{"level":3,"title":"算法模板","slug":"算法模板","link":"#算法模板","children":[]},{"level":3,"title":"寻找符合条件的浮点数","slug":"寻找符合条件的浮点数","link":"#寻找符合条件的浮点数","children":[]}],"git":{"createdTime":1732244737000,"updatedTime":1732244737000,"contributors":[{"name":"David Liu","email":"liudawei@seas.upenn.edu","commits":1}]},"readingTime":{"minutes":3.87,"words":1162},"filePathRelative":"algo/summary/optimise/decrease-conquer/binary/search/README.md","localizedDate":"November 22, 2024","excerpt":"\\n<p>核心：两段性，即针对目标函数，两边结果一定相反，一边为True，一边为False</p>\\n<p><strong>二值性</strong></p>\\n<h3>使用条件</h3>\\n<ul>\\n<li>\\n<p>连续的解空间</p>\\n<p>通常是连续的非负整数区间，通常表示：</p>\\n<ul>\\n<li>坐标或者索引，如数组中查找一个元素、隔板插入的空隙</li>\\n<li>资源或者能力，如最小或最大的花费、最大可重复的子数组长度</li>\\n</ul>\\n</li>\\n<li>\\n<p>某一函数/性质，在该解空间上，呈现两段，一边都为True，一边都为False</p>\\n<p>二分搜索就是找到这两段临界的那两个节点，故分类为</p>\\n<ul>\\n<li>寻找符合条件的最左侧</li>\\n<li>寻找符合条件的最右侧</li>\\n</ul>\\n</li>\\n</ul>","autoDesc":true}`);export{r as comp,A as data};