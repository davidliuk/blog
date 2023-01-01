const n=JSON.parse(`{"key":"v-13b5eb70","path":"/cs/algo/summary/32.%20%E5%85%A8%E5%AD%90%E9%9B%86%E9%97%AE%E9%A2%98.html","title":"全子集问题","lang":"en-US","frontmatter":{"description":"全子集问题 一个方案=一条路径 BFS擅长找连通块 二叉树序列号反序列化 String serialize(TreeNode root) { if (root == null) { return \\"{}\\"; } List&lt;TreeNode&gt; queue = new ArrayList&lt;TreeNode&gt;(); }","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/cs/algo/summary/32.%20%E5%85%A8%E5%AD%90%E9%9B%86%E9%97%AE%E9%A2%98.html"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"全子集问题"}],["meta",{"property":"og:description","content":"全子集问题 一个方案=一条路径 BFS擅长找连通块 二叉树序列号反序列化 String serialize(TreeNode root) { if (root == null) { return \\"{}\\"; } List&lt;TreeNode&gt; queue = new ArrayList&lt;TreeNode&gt;(); }"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-01-01T14:28:09.000Z"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2023-01-01T14:28:09.000Z"}],["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://davidliuk.github.io/blog/blog/zh/cs/algo/summary/32.%20%E5%85%A8%E5%AD%90%E9%9B%86%E9%97%AE%E9%A2%98.html"}]]},"headers":[],"git":{"createdTime":1670121259000,"updatedTime":1672583289000,"contributors":[{"name":"DavidLiu","email":"l729641074@163.com","commits":1},{"name":"刘大维","email":"davidliu@liudaweideMacBook-Pro.local","commits":1}]},"readingTime":{"minutes":0.15,"words":45},"localizedDate":"December 4, 2022","filePathRelative":"cs/algo/summary/32. 全子集问题.md","excerpt":"<h1> 全子集问题</h1>\\n<p>一个方案=一条路径</p>\\n<p>BFS擅长找连通块</p>\\n<p>二叉树序列号反序列化</p>\\n<div class=\\"language-java line-numbers-mode\\" data-ext=\\"java\\"><pre class=\\"language-java\\"><code><span class=\\"token class-name\\">String</span> <span class=\\"token function\\">serialize</span><span class=\\"token punctuation\\">(</span><span class=\\"token class-name\\">TreeNode</span> root<span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span>root <span class=\\"token operator\\">==</span> <span class=\\"token keyword\\">null</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token keyword\\">return</span> <span class=\\"token string\\">\\"{}\\"</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token punctuation\\">}</span>\\n    \\n    <span class=\\"token class-name\\">List</span><span class=\\"token generics\\"><span class=\\"token punctuation\\">&lt;</span><span class=\\"token class-name\\">TreeNode</span><span class=\\"token punctuation\\">&gt;</span></span> queue <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">new</span> <span class=\\"token class-name\\">ArrayList</span><span class=\\"token generics\\"><span class=\\"token punctuation\\">&lt;</span><span class=\\"token class-name\\">TreeNode</span><span class=\\"token punctuation\\">&gt;</span></span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n    \\n<span class=\\"token punctuation\\">}</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{n as data};
