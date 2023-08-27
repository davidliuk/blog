const n=JSON.parse(`{"key":"v-448f8146","path":"/cs/algo/summary/%E4%B9%9D%E7%AB%A0%E7%AE%97%E6%B3%95/7.%20%E4%BA%8C%E5%88%86%E6%B3%95%E4%B8%89%E9%87%8D%E5%A2%83%E7%95%8C.html","title":"二分法三重境界","lang":"en-US","frontmatter":{"description":"二分法三重境界 第一境界：写出不会死循环的二分法 万能模板 public int findPosition(int[] nums, int target) { if (nums == null || nums.length == 0) { return -1; } int start = 0, end = nums.length - 1; while (start + 1 &lt; end) { int mid = start + (end - start) / 2; // 下面的==的情况需要根据题意稍作变化，看是要第一个还是最后一个还是随便一个 if (nums[mid] == target) { end = mid; } else if (nums[mid] &lt; target) { start = mid; //可以这样偷懒，因为这样也会退出 // start = mid + 1; } else { end = mid; //可以这样偷懒，因为这样也会退出 // end = mid - 1; } } if (nums[start] == target) { return start; } if (nums[end] == target) { return end; } return -1; }","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/cs/algo/summary/%E4%B9%9D%E7%AB%A0%E7%AE%97%E6%B3%95/7.%20%E4%BA%8C%E5%88%86%E6%B3%95%E4%B8%89%E9%87%8D%E5%A2%83%E7%95%8C.html"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"二分法三重境界"}],["meta",{"property":"og:description","content":"二分法三重境界 第一境界：写出不会死循环的二分法 万能模板 public int findPosition(int[] nums, int target) { if (nums == null || nums.length == 0) { return -1; } int start = 0, end = nums.length - 1; while (start + 1 &lt; end) { int mid = start + (end - start) / 2; // 下面的==的情况需要根据题意稍作变化，看是要第一个还是最后一个还是随便一个 if (nums[mid] == target) { end = mid; } else if (nums[mid] &lt; target) { start = mid; //可以这样偷懒，因为这样也会退出 // start = mid + 1; } else { end = mid; //可以这样偷懒，因为这样也会退出 // end = mid - 1; } } if (nums[start] == target) { return start; } if (nums[end] == target) { return end; } return -1; }"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-01-15T03:19:11.000Z"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2023-01-15T03:19:11.000Z"}],["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://davidliuk.github.io/blog/blog/zh/cs/algo/summary/%E4%B9%9D%E7%AB%A0%E7%AE%97%E6%B3%95/7.%20%E4%BA%8C%E5%88%86%E6%B3%95%E4%B8%89%E9%87%8D%E5%A2%83%E7%95%8C.html"}]]},"headers":[{"level":3,"title":"第一境界：写出不会死循环的二分法","slug":"第一境界-写出不会死循环的二分法","link":"#第一境界-写出不会死循环的二分法","children":[]},{"level":3,"title":"第二境界","slug":"第二境界","link":"#第二境界","children":[]}],"git":{"createdTime":1673752751000,"updatedTime":1673752751000,"contributors":[{"name":"刘大维","email":"davidliu@liudaweideMacBook-Pro.local","commits":1}]},"readingTime":{"minutes":2.45,"words":734},"localizedDate":"January 15, 2023","filePathRelative":"cs/algo/summary/九章算法/7. 二分法三重境界.md","excerpt":"<h1> 二分法三重境界</h1>\\n<h3> 第一境界：写出不会死循环的二分法</h3>\\n<p><img src=\\"https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/截屏2022-07-10 10.10.44.png\\" alt=\\"截屏2022-07-10 10.10.44\\" loading=\\"lazy\\"></p>\\n<p>万能模板</p>\\n<div class=\\"language-java line-numbers-mode\\" data-ext=\\"java\\"><pre class=\\"language-java\\"><code><span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">int</span> <span class=\\"token function\\">findPosition</span><span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">int</span><span class=\\"token punctuation\\">[</span><span class=\\"token punctuation\\">]</span> nums<span class=\\"token punctuation\\">,</span> <span class=\\"token keyword\\">int</span> target<span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span>nums <span class=\\"token operator\\">==</span> <span class=\\"token keyword\\">null</span> <span class=\\"token operator\\">||</span> nums<span class=\\"token punctuation\\">.</span>length <span class=\\"token operator\\">==</span> <span class=\\"token number\\">0</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token keyword\\">return</span> <span class=\\"token operator\\">-</span><span class=\\"token number\\">1</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token punctuation\\">}</span>\\n    \\n    <span class=\\"token keyword\\">int</span> start <span class=\\"token operator\\">=</span> <span class=\\"token number\\">0</span><span class=\\"token punctuation\\">,</span> end <span class=\\"token operator\\">=</span> nums<span class=\\"token punctuation\\">.</span>length <span class=\\"token operator\\">-</span> <span class=\\"token number\\">1</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token keyword\\">while</span> <span class=\\"token punctuation\\">(</span>start <span class=\\"token operator\\">+</span> <span class=\\"token number\\">1</span> <span class=\\"token operator\\">&lt;</span> end<span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token keyword\\">int</span> mid <span class=\\"token operator\\">=</span> start <span class=\\"token operator\\">+</span> <span class=\\"token punctuation\\">(</span>end <span class=\\"token operator\\">-</span> start<span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">/</span> <span class=\\"token number\\">2</span><span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token comment\\">// 下面的==的情况需要根据题意稍作变化，看是要第一个还是最后一个还是随便一个</span>\\n        <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span>nums<span class=\\"token punctuation\\">[</span>mid<span class=\\"token punctuation\\">]</span> <span class=\\"token operator\\">==</span> target<span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n            end <span class=\\"token operator\\">=</span> mid<span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token punctuation\\">}</span> <span class=\\"token keyword\\">else</span> <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span>nums<span class=\\"token punctuation\\">[</span>mid<span class=\\"token punctuation\\">]</span> <span class=\\"token operator\\">&lt;</span> target<span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n            start <span class=\\"token operator\\">=</span> mid<span class=\\"token punctuation\\">;</span> <span class=\\"token comment\\">//可以这样偷懒，因为这样也会退出</span>\\n            <span class=\\"token comment\\">// start = mid + 1;</span>\\n        <span class=\\"token punctuation\\">}</span> <span class=\\"token keyword\\">else</span> <span class=\\"token punctuation\\">{</span>\\n            end <span class=\\"token operator\\">=</span> mid<span class=\\"token punctuation\\">;</span> <span class=\\"token comment\\">//可以这样偷懒，因为这样也会退出</span>\\n            <span class=\\"token comment\\">// end = mid - 1;</span>\\n        <span class=\\"token punctuation\\">}</span>\\n    <span class=\\"token punctuation\\">}</span>\\n    \\n    <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span>nums<span class=\\"token punctuation\\">[</span>start<span class=\\"token punctuation\\">]</span> <span class=\\"token operator\\">==</span> target<span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token keyword\\">return</span> start<span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token punctuation\\">}</span>\\n    <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span>nums<span class=\\"token punctuation\\">[</span>end<span class=\\"token punctuation\\">]</span> <span class=\\"token operator\\">==</span> target<span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token keyword\\">return</span> end<span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token punctuation\\">}</span>\\n    <span class=\\"token keyword\\">return</span> <span class=\\"token operator\\">-</span><span class=\\"token number\\">1</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{n as data};
