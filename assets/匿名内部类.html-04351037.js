import{_ as p,V as e,W as o,X as n,Y as a,Z as t,a0 as c,E as l}from"./framework-705b829b.js";const u={},i=c(`<h1 id="匿名内部类" tabindex="-1"><a class="header-anchor" href="#匿名内部类" aria-hidden="true">#</a> 匿名内部类</h1><p>无自己的构造方法，但是可以有初始化块</p><p>常用于：</p><ol><li><p>一个final的HashMap初始化，可以直接一条语句写完很方便。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">Map</span><span class="token operator">&lt;</span><span class="token class-name">State</span><span class="token punctuation">,</span> <span class="token class-name">State</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">&gt;</span> table <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token operator">&lt;</span><span class="token class-name">State</span><span class="token punctuation">,</span> <span class="token class-name">State</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">{</span>
    <span class="token function">put</span><span class="token punctuation">(</span><span class="token class-name">State</span><span class="token punctuation">.</span><span class="token constant">START</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">State</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">{</span><span class="token class-name">State</span><span class="token punctuation">.</span><span class="token constant">START</span><span class="token punctuation">,</span> <span class="token class-name">State</span><span class="token punctuation">.</span><span class="token constant">SIGNED</span><span class="token punctuation">,</span> <span class="token class-name">State</span><span class="token punctuation">.</span><span class="token constant">IN_NUMBER</span><span class="token punctuation">,</span> <span class="token class-name">State</span><span class="token punctuation">.</span><span class="token constant">END</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">put</span><span class="token punctuation">(</span><span class="token class-name">State</span><span class="token punctuation">.</span><span class="token constant">SIGNED</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">State</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">{</span><span class="token class-name">State</span><span class="token punctuation">.</span><span class="token constant">END</span><span class="token punctuation">,</span> <span class="token class-name">State</span><span class="token punctuation">.</span><span class="token constant">END</span><span class="token punctuation">,</span> <span class="token class-name">State</span><span class="token punctuation">.</span><span class="token constant">IN_NUMBER</span><span class="token punctuation">,</span> <span class="token class-name">State</span><span class="token punctuation">.</span><span class="token constant">END</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">put</span><span class="token punctuation">(</span><span class="token class-name">State</span><span class="token punctuation">.</span><span class="token constant">IN_NUMBER</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">State</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">{</span><span class="token class-name">State</span><span class="token punctuation">.</span><span class="token constant">END</span><span class="token punctuation">,</span> <span class="token class-name">State</span><span class="token punctuation">.</span><span class="token constant">END</span><span class="token punctuation">,</span> <span class="token class-name">State</span><span class="token punctuation">.</span><span class="token constant">IN_NUMBER</span><span class="token punctuation">,</span> <span class="token class-name">State</span><span class="token punctuation">.</span><span class="token constant">END</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">put</span><span class="token punctuation">(</span><span class="token class-name">State</span><span class="token punctuation">.</span><span class="token constant">END</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">State</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">{</span><span class="token class-name">State</span><span class="token punctuation">.</span><span class="token constant">END</span><span class="token punctuation">,</span> <span class="token class-name">State</span><span class="token punctuation">.</span><span class="token constant">END</span><span class="token punctuation">,</span> <span class="token class-name">State</span><span class="token punctuation">.</span><span class="token constant">END</span><span class="token punctuation">,</span> <span class="token class-name">State</span><span class="token punctuation">.</span><span class="token constant">END</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>拓展PriorityQueue功能，让他可以直接引用别人的数组且有自己的比较器，来不占用别人的空间，实现原地堆排序（Onlogn, O1），普通的int[]还是直接Arrays.sort即可，这个没法实现，哎，因为是private</p><p>常用于一个二维int按某一位比较，如：xx，实现不了，看来堆排序只能手撕了，不需要堆排的时候老老实实Arrays.sort吧</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span> values<span class="token punctuation">;</span>
<span class="token comment">// values = xxx;</span>
<span class="token class-name">PriorityQueue</span><span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">&gt;</span> pq <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">PriorityQueue</span><span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span> <span class="token operator">-&gt;</span> a<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">-</span> b<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">{</span>
    queue <span class="token operator">=</span> values<span class="token punctuation">;</span>
    size <span class="token operator">=</span> values<span class="token punctuation">.</span>size<span class="token punctuation">;</span>
    <span class="token function">heapify</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li></li></ol><p>文章：</p>`,5),k={href:"https://www.jianshu.com/p/4eb6afb74c82",target:"_blank",rel:"noopener noreferrer"},r={href:"https://www.jb51.net/article/233479.htm",target:"_blank",rel:"noopener noreferrer"},d={href:"http://www.bjpowernode.com/javazixun/4712.html",target:"_blank",rel:"noopener noreferrer"};function m(v,w){const s=l("ExternalLinkIcon");return e(),o("div",null,[i,n("p",null,[n("a",k,[a("https://www.jianshu.com/p/4eb6afb74c82"),t(s)])]),n("p",null,[n("a",r,[a("https://www.jb51.net/article/233479.htm"),t(s)])]),n("p",null,[n("a",d,[a("http://www.bjpowernode.com/javazixun/4712.html"),t(s)])])])}const _=p(u,[["render",m],["__file","匿名内部类.html.vue"]]);export{_ as default};
