const n=JSON.parse(`{"key":"v-12108c54","path":"/cs/algo/summary/optimise/decrease-conquer/binary/dual-pointer/","title":"双指针","lang":"en-US","frontmatter":{"description":"双指针 核心思想： 不走回头路，On2 -&gt; On 同向双指针 // [j, i], j是i符合条件下最靠左的位置 for (int i = 0, j = 0; i &lt; n; i++) { while (i &lt;= j &amp;&amp; check(i, j)) { j++; } // 这个题的操作 }","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/cs/algo/summary/optimise/decrease-conquer/binary/dual-pointer/"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"双指针"}],["meta",{"property":"og:description","content":"双指针 核心思想： 不走回头路，On2 -&gt; On 同向双指针 // [j, i], j是i符合条件下最靠左的位置 for (int i = 0, j = 0; i &lt; n; i++) { while (i &lt;= j &amp;&amp; check(i, j)) { j++; } // 这个题的操作 }"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-02-27T13:30:02.000Z"}],["meta",{"property":"article:author","content":"David Liu"}],["meta",{"property":"article:modified_time","content":"2023-02-27T13:30:02.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"双指针\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-02-27T13:30:02.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[],"git":{"createdTime":1675259084000,"updatedTime":1677504602000,"contributors":[{"name":"刘大维","email":"davidliu@liudaweideMacBook-Pro.local","commits":2}]},"readingTime":{"minutes":0.4,"words":120},"filePathRelative":"cs/algo/summary/optimise/decrease-conquer/binary/dual-pointer/README.md","localizedDate":"February 1, 2023","excerpt":"<h1> 双指针</h1>\\n<p>核心思想：</p>\\n<p>不走回头路，On2 -&gt; On</p>\\n<p>同向双指针</p>\\n<div class=\\"language-java line-numbers-mode\\" data-ext=\\"java\\"><pre class=\\"language-java\\"><code><span class=\\"token comment\\">// [j, i], j是i符合条件下最靠左的位置</span>\\n<span class=\\"token keyword\\">for</span> <span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">int</span> i <span class=\\"token operator\\">=</span> <span class=\\"token number\\">0</span><span class=\\"token punctuation\\">,</span> j <span class=\\"token operator\\">=</span> <span class=\\"token number\\">0</span><span class=\\"token punctuation\\">;</span> i <span class=\\"token operator\\">&lt;</span> n<span class=\\"token punctuation\\">;</span> i<span class=\\"token operator\\">++</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n    \\n    <span class=\\"token keyword\\">while</span> <span class=\\"token punctuation\\">(</span>i <span class=\\"token operator\\">&lt;=</span> j <span class=\\"token operator\\">&amp;&amp;</span> <span class=\\"token function\\">check</span><span class=\\"token punctuation\\">(</span>i<span class=\\"token punctuation\\">,</span> j<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n        j<span class=\\"token operator\\">++</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token punctuation\\">}</span>\\n    <span class=\\"token comment\\">// 这个题的操作</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{n as data};
