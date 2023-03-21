import{_ as n,V as a,W as s,a0 as e}from"./framework-705b829b.js";const t={},d=e(`<h1 id="连接" tabindex="-1"><a class="header-anchor" href="#连接" aria-hidden="true">#</a> 连接</h1><table><thead><tr><th>连接类型</th><th>说明</th></tr></thead><tbody><tr><td>INNER JOIN 内连接</td><td>（默认连接方式）只有当两个表都存在满足条件的记录时才会返回行。</td></tr><tr><td>LEFT JOIN / LEFT OUTER JOIN 左(外)连接</td><td>返回左表中的所有行，即使右表中没有满足条件的行也是如此。</td></tr><tr><td>RIGHT JOIN / RIGHT OUTER JOIN 右(外)连接</td><td>返回右表中的所有行，即使左表中没有满足条件的行也是如此。</td></tr><tr><td>FULL JOIN / FULL OUTER JOIN 全(外)连接</td><td>只要其中有一个表存在满足条件的记录，就返回行。</td></tr><tr><td>SELF JOIN</td><td>将一个表连接到自身，就像该表是两个表一样。为了区分两个表，在 SQL 语句中需要至少重命名一个表。</td></tr><tr><td>CROSS JOIN</td><td>交叉连接，从两个或者多个连接表中返回记录集的笛卡尔积。</td></tr></tbody></table><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span>
    a<span class="token punctuation">.</span>Name <span class="token string">&#39;Employee&#39;</span>
<span class="token keyword">FROM</span>
    Employee a<span class="token punctuation">,</span>
    Employee b
<span class="token keyword">WHERE</span>
    a<span class="token punctuation">.</span>ManagerId <span class="token operator">=</span> b<span class="token punctuation">.</span>Id
        <span class="token operator">AND</span> a<span class="token punctuation">.</span>Salary <span class="token operator">&gt;</span> b<span class="token punctuation">.</span>Salary
<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span>
     a<span class="token punctuation">.</span>NAME <span class="token keyword">AS</span> Employee
<span class="token keyword">FROM</span> Employee <span class="token keyword">AS</span> a <span class="token keyword">JOIN</span> Employee <span class="token keyword">AS</span> b
     <span class="token keyword">ON</span> a<span class="token punctuation">.</span>ManagerId <span class="token operator">=</span> b<span class="token punctuation">.</span>Id
     <span class="token operator">AND</span> a<span class="token punctuation">.</span>Salary <span class="token operator">&gt;</span> b<span class="token punctuation">.</span>Salary
<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),l=[d];function o(p,i){return a(),s("div",null,l)}const c=n(t,[["render",o],["__file","join.html.vue"]]);export{c as default};
