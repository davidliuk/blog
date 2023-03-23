import{_ as n,V as s,W as a,a0 as e}from"./framework-705b829b.js";const i={},d=e(`<h1 id="事务" tabindex="-1"><a class="header-anchor" href="#事务" aria-hidden="true">#</a> 事务</h1><h3 id="事务定义" tabindex="-1"><a class="header-anchor" href="#事务定义" aria-hidden="true">#</a> 事务定义</h3><p>事务是一组操作的集合，它是一个不可分割的工作单位，事务会把所有的操作作为一个整体一起向系统提交或撤销操作请求，即这些操作要么同时成功，要么同时失败。</p><p>默认 MySQL 的事务是自动提交的，也就是说，当执行一条 DML 语句，MySQL 会立即隐式的提交事务。</p><h2 id="事务操作" tabindex="-1"><a class="header-anchor" href="#事务操作" aria-hidden="true">#</a> 事务操作</h2><h3 id="方法一" tabindex="-1"><a class="header-anchor" href="#方法一" aria-hidden="true">#</a> 方法一</h3><p>取消自动提</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">set</span> @<span class="token variable">@autocommit</span> <span class="token operator">=</span> <span class="token number">0</span>

<span class="token comment">-- 写操作</span>

<span class="token comment">-- 操作</span>

<span class="token comment">-- 提交事务</span>
<span class="token keyword">commit</span><span class="token punctuation">;</span>

<span class="token comment">-- 如果异常，则不要执行commit，要回滚事务</span>
<span class="token keyword">rollback</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="方式二" tabindex="-1"><a class="header-anchor" href="#方式二" aria-hidden="true">#</a> 方式二</h3><p>开启事务</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- begin 或者如下都可以</span>
<span class="token keyword">start</span> <span class="token keyword">transaction</span><span class="token punctuation">;</span>


<span class="token comment">-- 提交事务</span>
<span class="token keyword">commit</span><span class="token punctuation">;</span>

<span class="token comment">-- 回滚事务</span>
<span class="token keyword">rollback</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11),l=[d];function c(t,r){return s(),a("div",null,l)}const p=n(i,[["render",c],["__file","index.html.vue"]]);export{p as default};
