import{_ as n,V as s,W as a,a0 as t}from"./framework-705b829b.js";const e={},p=t(`<h1 id="二分搜索" tabindex="-1"><a class="header-anchor" href="#二分搜索" aria-hidden="true">#</a> 二分搜索</h1><p>核心：两段性，即针对目标函数，两边结果一定相反，一边为True，一边为False</p><h3 id="使用条件" tabindex="-1"><a class="header-anchor" href="#使用条件" aria-hidden="true">#</a> 使用条件</h3><ul><li><p>连续的解空间</p><p>往往是一个连续的整数区间，通常表示：</p><ul><li>坐标位置或索引，如数组中查找一个元素、隔板插入的空隙</li><li>一种资源或者能力，如最小或最大的花费、最大重复的子数组长度</li></ul></li><li><p>对于一个函数，在该解空间上，一边为True，一边为False，我们二分搜索就是找到这两段临界的那两个节点，故分类为寻找符合条件的最左侧的，和寻找符合条件的最右侧的这两种情况</p></li></ul><h3 id="算法模板" tabindex="-1"><a class="header-anchor" href="#算法模板" aria-hidden="true">#</a> 算法模板</h3><p>所有整数上的二分问题都可以套用到如下两种模板上：</p><h4 id="寻找符合条件的最靠前的" tabindex="-1"><a class="header-anchor" href="#寻找符合条件的最靠前的" aria-hidden="true">#</a> 寻找符合条件的最靠前的</h4><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">int</span> <span class="token function">searchFirst</span><span class="token punctuation">(</span><span class="token keyword">int</span> start<span class="token punctuation">,</span> <span class="token keyword">int</span> end<span class="token punctuation">,</span> <span class="token class-name">IntPredicate</span> isValid<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>start <span class="token operator">&lt;</span> end<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> mid <span class="token operator">=</span> start <span class="token operator">+</span> <span class="token punctuation">(</span>end <span class="token operator">-</span> start<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>isValid<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>mid<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            end <span class="token operator">=</span> mid<span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            start <span class="token operator">=</span> mid <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> start<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>要点：</p><ol><li><code>start &lt; end</code>，这样在退出的时候，start=end，都是我们的答案易于理解。</li><li><code>end = mid</code>，因为是搜索最靠前的一个，所以在mid符合条件时，因为右侧的符合条件的都大于mid，所以mid右侧的都可以排除，只需要在[start, mid]找</li><li><code>start = mid + 1</code>，mid不符合条件，本身可以排出，且这样写结合第四条可以避免死循环</li><li><code>mid = start + (end - start) / 2</code>， <ul><li>这样写可以避免整数溢出</li><li>这样写是向下取整，由于在循环内部时start&lt;end，这样可以保证mid小于end，这样end=mid可以缩小区间范围，start=mid+1也可以缩小区间范围避免死循环。</li></ul></li></ol><p>用途：</p><ul><li>符合条件的最小值（如求最小花费）</li></ul><h4 id="寻找符合条件的最靠后的" tabindex="-1"><a class="header-anchor" href="#寻找符合条件的最靠后的" aria-hidden="true">#</a> 寻找符合条件的最靠后的</h4><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">int</span> <span class="token function">searchLast</span><span class="token punctuation">(</span><span class="token keyword">int</span> start<span class="token punctuation">,</span> <span class="token keyword">int</span> end<span class="token punctuation">,</span> <span class="token class-name">IntPredicate</span> isValid<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>start <span class="token operator">&lt;</span> end<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> mid <span class="token operator">=</span> start <span class="token operator">+</span> <span class="token punctuation">(</span>end <span class="token operator">-</span> start<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>isValid<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>mid<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            start <span class="token operator">=</span> mid<span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            end <span class="token operator">=</span> mid <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> start<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>要点：</p><ol><li><code>start &lt; end</code>，这样在退出的时候，start=end，都是我们的答案易于理解。</li><li><code>start = mid</code>，因为是搜索最靠后的一个，所以在mid符合条件时，因为左侧的符合条件的都小于mid，所以mid左侧的都可以排除，只需要在[mid, end]找</li><li><code>end = mid - 1</code>，mid不符合条件，本身可以排出，且这样写结合第四条可以避免死循环</li><li><code>mid = start + (end - start) / 2 + 1</code>， <ul><li>这样写是向上取整，由于在循环内部时start&lt;end，这样可以保证mid大于start，这样start=mid缩小区间范围，end=mid - 1可以也可以缩小区间范围避免死循环。</li><li>这样写可以避免整数溢出（有的时候start=0，end=Int的最大值，如果在括号内+1进行向上取整会溢出）</li></ul></li></ol><p>用途：</p><ul><li>符合条件的最大值（如求最大价值）</li></ul><p>所有浮点数上的二分问题都可以归到如下模板：</p><h3 id="寻找符合条件的浮点数" tabindex="-1"><a class="header-anchor" href="#寻找符合条件的浮点数" aria-hidden="true">#</a> 寻找符合条件的浮点数</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 如 double eps = 1e-6;</span>
<span class="token keyword">int</span> <span class="token function">searchFirst</span><span class="token punctuation">(</span><span class="token keyword">double</span> start<span class="token punctuation">,</span> <span class="token keyword">double</span> end<span class="token punctuation">,</span> <span class="token keyword">double</span> eps<span class="token punctuation">,</span> <span class="token class-name">DoublePredicate</span> isValid<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>start <span class="token operator">+</span> eps <span class="token operator">&lt;</span> end<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> mid <span class="token operator">=</span> start <span class="token operator">+</span> <span class="token punctuation">(</span>end <span class="token operator">-</span> start<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>isValid<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>mid<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            end <span class="token operator">=</span> mid<span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            start <span class="token operator">=</span> mid<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> start<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>用途，在给定精度的情况下：</p><ul><li>求平方根</li><li>求立方根</li></ul>`,23),i=[p];function o(l,c){return s(),a("div",null,i)}const u=n(e,[["render",o],["__file","index.html.vue"]]);export{u as default};
