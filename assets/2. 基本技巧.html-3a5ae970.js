import{_ as n,V as s,W as a,a0 as e}from"./framework-705b829b.js";const p={},l=e(`<h1 id="基本技巧" tabindex="-1"><a class="header-anchor" href="#基本技巧" aria-hidden="true">#</a> 基本技巧</h1><p>Basic Linked List Skills</p><ol><li><p>traversal</p><ul><li><p>迭代遍历</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 写法1</span>
<span class="token class-name">ListNode</span> p <span class="token operator">=</span> head<span class="token punctuation">;</span>
<span class="token comment">// </span>
<span class="token keyword">while</span> <span class="token punctuation">(</span>p <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// TODO</span>
    
    p <span class="token operator">=</span> p<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
    

<span class="token comment">// 写法2，不推荐，因为局部变量，且边界不好控制，且移动语句受限</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">ListNode</span> p <span class="token operator">=</span> head<span class="token punctuation">;</span> p <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">;</span> p <span class="token operator">=</span> p<span class="token punctuation">.</span>next<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>递归遍历</p><ul><li><p>先序遍历</p><p>优点：可以用递归三要素分析，边界条件可以定义的很清晰</p><p>很少用，先序遍历都可以直接写做迭代</p></li><li><p>后序遍历</p><p>优点：可以“反着”遍历单链表，“获得”前驱节点</p><p>可以用于：</p><ul><li>反转链表，这个情况写起来非常简洁，但是空间复杂度On</li><li>回文链表</li></ul></li></ul></li></ul></li><li><p>Insert a Node in Sorted List</p></li><li><p>Remove a Node from Linked List</p></li><li><p>Reverse a Linked List</p></li><li><p>Merge Two Linked Lists</p></li><li><p>Middle of a Linked List</p></li></ol>`,3),i=[l];function t(o,c){return s(),a("div",null,i)}const r=n(p,[["render",t],["__file","2. 基本技巧.html.vue"]]);export{r as default};
