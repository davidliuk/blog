import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,d as p}from"./app-9107e99b.js";const t={},e=p(`<h1 id="实验-1" tabindex="-1"><a class="header-anchor" href="#实验-1" aria-hidden="true">#</a> 实验 1</h1><p>关键在理解伪代码，怎么弄</p><p>写一个merkle tree</p><p>实验要求：</p><ol><li><p>生成一个2^n个元素的集合，要求里面没有重复元素</p></li><li><p>要求用数组存构建这棵树（这样简单一些）</p></li><li><p>hash函数选取一个，如md5或sha256、sha1</p><p>用库，千万不要自己实现</p></li></ol><p>节点三类：清节点（记录区块的头和与自己有关的节点）</p><h3 id="证明存在" tabindex="-1"><a class="header-anchor" href="#证明存在" aria-hidden="true">#</a> 证明存在</h3><p>返回证据（以及他们所在左右）</p><p>自下而上构建</p><h3 id="证明不存在" tabindex="-1"><a class="header-anchor" href="#证明不存在" aria-hidden="true">#</a> 证明不存在</h3><p>证明相邻两个存在（序号差1）</p><p>生成树的时候排好序，对输入的数组</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>security<span class="token punctuation">.</span></span><span class="token class-name">MessageDigest</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>security<span class="token punctuation">.</span></span><span class="token class-name">NoSuchAlgorithmException</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MerkleTree</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> transactions<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> tree<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">MerkleTree</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> transactions<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>transactions <span class="token operator">=</span> transactions<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>tree <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token number">4</span> <span class="token operator">*</span> transactions<span class="token punctuation">.</span>length<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token function">buildMerkleTree</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> transactions<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">buildMerkleTree</span><span class="token punctuation">(</span><span class="token keyword">int</span> node<span class="token punctuation">,</span> <span class="token keyword">int</span> start<span class="token punctuation">,</span> <span class="token keyword">int</span> end<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>start <span class="token operator">==</span> end<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            tree<span class="token punctuation">[</span>node<span class="token punctuation">]</span> <span class="token operator">=</span> transactions<span class="token punctuation">[</span>start<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token keyword">int</span> mid <span class="token operator">=</span> <span class="token punctuation">(</span>start <span class="token operator">+</span> end<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">;</span>
            <span class="token function">buildMerkleTree</span><span class="token punctuation">(</span><span class="token number">2</span> <span class="token operator">*</span> node <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> start<span class="token punctuation">,</span> mid<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token function">buildMerkleTree</span><span class="token punctuation">(</span><span class="token number">2</span> <span class="token operator">*</span> node <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">,</span> mid <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> end<span class="token punctuation">)</span><span class="token punctuation">;</span>
            tree<span class="token punctuation">[</span>node<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">hash</span><span class="token punctuation">(</span>tree<span class="token punctuation">[</span><span class="token number">2</span> <span class="token operator">*</span> node <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">+</span> tree<span class="token punctuation">[</span><span class="token number">2</span> <span class="token operator">*</span> node <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">verifyTransaction</span><span class="token punctuation">(</span><span class="token class-name">String</span> transaction<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token function">verifyTransaction</span><span class="token punctuation">(</span>transaction<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> transactions<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token keyword">boolean</span> <span class="token function">verifyTransaction</span><span class="token punctuation">(</span><span class="token class-name">String</span> transaction<span class="token punctuation">,</span> <span class="token keyword">int</span> node<span class="token punctuation">,</span> <span class="token keyword">int</span> start<span class="token punctuation">,</span> <span class="token keyword">int</span> end<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>start <span class="token operator">==</span> end<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> tree<span class="token punctuation">[</span>node<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>transaction<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token keyword">int</span> mid <span class="token operator">=</span> <span class="token punctuation">(</span>start <span class="token operator">+</span> end<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">verifyTransaction</span><span class="token punctuation">(</span>transaction<span class="token punctuation">,</span> <span class="token number">2</span> <span class="token operator">*</span> node <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> start<span class="token punctuation">,</span> mid<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">verifyTransaction</span><span class="token punctuation">(</span>transaction<span class="token punctuation">,</span> <span class="token number">2</span> <span class="token operator">*</span> node <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">,</span> mid <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> end<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token class-name">String</span> <span class="token function">hash</span><span class="token punctuation">(</span><span class="token class-name">String</span> input<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token class-name">MessageDigest</span> messageDigest <span class="token operator">=</span> <span class="token class-name">MessageDigest</span><span class="token punctuation">.</span><span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token string">&quot;SHA-256&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> hash <span class="token operator">=</span> messageDigest<span class="token punctuation">.</span><span class="token function">digest</span><span class="token punctuation">(</span>input<span class="token punctuation">.</span><span class="token function">getBytes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">StringBuilder</span> hexString <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">StringBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">byte</span> b <span class="token operator">:</span> hash<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token class-name">String</span> hex <span class="token operator">=</span> <span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token function">toHexString</span><span class="token punctuation">(</span><span class="token number">0xff</span> <span class="token operator">&amp;</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>hex<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span> hexString<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token char">&#39;0&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                hexString<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>hex<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">return</span> hexString<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">NoSuchAlgorithmException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">RuntimeException</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13),o=[e];function c(l,i){return s(),a("div",null,o)}const r=n(t,[["render",c],["__file","实验1.html.vue"]]);export{r as default};
