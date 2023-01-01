const n=JSON.parse(`{"key":"v-4cfa449f","path":"/cs/algo/summary/17.%20%E6%8E%92%E5%88%97%E5%BC%8FDFS.html","title":"DFS排序类","lang":"en-US","frontmatter":{"description":"DFS排序类 public List&lt;List&lt;Integer&gt;&gt; subsets(int[] nums) { List&lt;List&lt;Integer&gt;&gt; results = new ArrayList&lt;&gt;(); if (nums == null || nums.length == 0) { return results; } dfs(nums, new boolean[nums.length], new ArrayLisy&lt;Integer&gt;(), results); return results; } // 1. 递归的定义 public void dfs( \\tint[] nums, // int index, boolean[] visited, List&lt;Integer&gt; permutation, List&lt;List&lt;Integer&gt;&gt; results ) { // 3. 递归的出口 if (permutation.size() == nums.length) { // 深拷贝 results.add(new ArrayList&lt;Integer&gt;(permutation)); return; } // 2. 递归的拆解 for (int i = 0; i &lt; nums.length; i++) { if (visited[i]) { continue; } permutation.add(nums[index]); visited[i] = true; dfs(nums, visited, subset, result); permutation.remove(subset.size() - 1); visited[i] = false; } }","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/cs/algo/summary/17.%20%E6%8E%92%E5%88%97%E5%BC%8FDFS.html"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"DFS排序类"}],["meta",{"property":"og:description","content":"DFS排序类 public List&lt;List&lt;Integer&gt;&gt; subsets(int[] nums) { List&lt;List&lt;Integer&gt;&gt; results = new ArrayList&lt;&gt;(); if (nums == null || nums.length == 0) { return results; } dfs(nums, new boolean[nums.length], new ArrayLisy&lt;Integer&gt;(), results); return results; } // 1. 递归的定义 public void dfs( \\tint[] nums, // int index, boolean[] visited, List&lt;Integer&gt; permutation, List&lt;List&lt;Integer&gt;&gt; results ) { // 3. 递归的出口 if (permutation.size() == nums.length) { // 深拷贝 results.add(new ArrayList&lt;Integer&gt;(permutation)); return; } // 2. 递归的拆解 for (int i = 0; i &lt; nums.length; i++) { if (visited[i]) { continue; } permutation.add(nums[index]); visited[i] = true; dfs(nums, visited, subset, result); permutation.remove(subset.size() - 1); visited[i] = false; } }"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-01-01T04:24:51.000Z"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2023-01-01T04:24:51.000Z"}],["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://davidliuk.github.io/blog/blog/zh/cs/algo/summary/17.%20%E6%8E%92%E5%88%97%E5%BC%8FDFS.html"}]]},"headers":[],"git":{"createdTime":1670121259000,"updatedTime":1672547091000,"contributors":[{"name":"DavidLiu","email":"l729641074@163.com","commits":1},{"name":"刘大维","email":"davidliu@liudaweideMacBook-Pro.local","commits":1}]},"readingTime":{"minutes":0.85,"words":254},"localizedDate":"December 4, 2022","filePathRelative":"cs/algo/summary/17. 排列式DFS.md","excerpt":"<h1> DFS排序类</h1>\\n<div class=\\"language-java line-numbers-mode\\" data-ext=\\"java\\"><pre class=\\"language-java\\"><code><span class=\\"token keyword\\">public</span> <span class=\\"token class-name\\">List</span><span class=\\"token generics\\"><span class=\\"token punctuation\\">&lt;</span><span class=\\"token class-name\\">List</span><span class=\\"token punctuation\\">&lt;</span><span class=\\"token class-name\\">Integer</span><span class=\\"token punctuation\\">&gt;</span><span class=\\"token punctuation\\">&gt;</span></span> <span class=\\"token function\\">subsets</span><span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">int</span><span class=\\"token punctuation\\">[</span><span class=\\"token punctuation\\">]</span> nums<span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token class-name\\">List</span><span class=\\"token generics\\"><span class=\\"token punctuation\\">&lt;</span><span class=\\"token class-name\\">List</span><span class=\\"token punctuation\\">&lt;</span><span class=\\"token class-name\\">Integer</span><span class=\\"token punctuation\\">&gt;</span><span class=\\"token punctuation\\">&gt;</span></span> results <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">new</span> <span class=\\"token class-name\\">ArrayList</span><span class=\\"token generics\\"><span class=\\"token punctuation\\">&lt;</span><span class=\\"token punctuation\\">&gt;</span></span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span>nums <span class=\\"token operator\\">==</span> <span class=\\"token keyword\\">null</span> <span class=\\"token operator\\">||</span> nums<span class=\\"token punctuation\\">.</span>length <span class=\\"token operator\\">==</span> <span class=\\"token number\\">0</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token keyword\\">return</span> results<span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token punctuation\\">}</span>\\n\\n    <span class=\\"token function\\">dfs</span><span class=\\"token punctuation\\">(</span>nums<span class=\\"token punctuation\\">,</span> <span class=\\"token keyword\\">new</span> <span class=\\"token keyword\\">boolean</span><span class=\\"token punctuation\\">[</span>nums<span class=\\"token punctuation\\">.</span>length<span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">,</span> <span class=\\"token keyword\\">new</span> <span class=\\"token class-name\\">ArrayLisy</span><span class=\\"token generics\\"><span class=\\"token punctuation\\">&lt;</span><span class=\\"token class-name\\">Integer</span><span class=\\"token punctuation\\">&gt;</span></span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">,</span> results<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n    \\n    <span class=\\"token keyword\\">return</span> results<span class=\\"token punctuation\\">;</span>\\n<span class=\\"token punctuation\\">}</span>\\n\\n<span class=\\"token comment\\">// 1. 递归的定义</span>\\n<span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">void</span> <span class=\\"token function\\">dfs</span><span class=\\"token punctuation\\">(</span>\\n\\t<span class=\\"token keyword\\">int</span><span class=\\"token punctuation\\">[</span><span class=\\"token punctuation\\">]</span> nums<span class=\\"token punctuation\\">,</span>\\n    <span class=\\"token comment\\">// int index,</span>\\n    <span class=\\"token keyword\\">boolean</span><span class=\\"token punctuation\\">[</span><span class=\\"token punctuation\\">]</span> visited<span class=\\"token punctuation\\">,</span>\\n    <span class=\\"token class-name\\">List</span><span class=\\"token generics\\"><span class=\\"token punctuation\\">&lt;</span><span class=\\"token class-name\\">Integer</span><span class=\\"token punctuation\\">&gt;</span></span> permutation<span class=\\"token punctuation\\">,</span>\\n    <span class=\\"token class-name\\">List</span><span class=\\"token generics\\"><span class=\\"token punctuation\\">&lt;</span><span class=\\"token class-name\\">List</span><span class=\\"token punctuation\\">&lt;</span><span class=\\"token class-name\\">Integer</span><span class=\\"token punctuation\\">&gt;</span><span class=\\"token punctuation\\">&gt;</span></span> results\\n<span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token comment\\">// 3. 递归的出口</span>\\n    <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span>permutation<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">size</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">==</span> nums<span class=\\"token punctuation\\">.</span>length<span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token comment\\">// 深拷贝</span>\\n        results<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">add</span><span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">new</span> <span class=\\"token class-name\\">ArrayList</span><span class=\\"token generics\\"><span class=\\"token punctuation\\">&lt;</span><span class=\\"token class-name\\">Integer</span><span class=\\"token punctuation\\">&gt;</span></span><span class=\\"token punctuation\\">(</span>permutation<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token keyword\\">return</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token punctuation\\">}</span>\\n    \\n    <span class=\\"token comment\\">// 2. 递归的拆解</span>\\n    <span class=\\"token keyword\\">for</span> <span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">int</span> i <span class=\\"token operator\\">=</span> <span class=\\"token number\\">0</span><span class=\\"token punctuation\\">;</span> i <span class=\\"token operator\\">&lt;</span> nums<span class=\\"token punctuation\\">.</span>length<span class=\\"token punctuation\\">;</span> i<span class=\\"token operator\\">++</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span>visited<span class=\\"token punctuation\\">[</span>i<span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n            <span class=\\"token keyword\\">continue</span><span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token punctuation\\">}</span>\\n        \\n        permutation<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">add</span><span class=\\"token punctuation\\">(</span>nums<span class=\\"token punctuation\\">[</span>index<span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n        visited<span class=\\"token punctuation\\">[</span>i<span class=\\"token punctuation\\">]</span> <span class=\\"token operator\\">=</span> <span class=\\"token boolean\\">true</span><span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token function\\">dfs</span><span class=\\"token punctuation\\">(</span>nums<span class=\\"token punctuation\\">,</span> visited<span class=\\"token punctuation\\">,</span> subset<span class=\\"token punctuation\\">,</span> result<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n        permutation<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">remove</span><span class=\\"token punctuation\\">(</span>subset<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">size</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">-</span> <span class=\\"token number\\">1</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n        visited<span class=\\"token punctuation\\">[</span>i<span class=\\"token punctuation\\">]</span> <span class=\\"token operator\\">=</span> <span class=\\"token boolean\\">false</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token punctuation\\">}</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{n as data};
