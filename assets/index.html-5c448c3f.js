const e=JSON.parse(`{"key":"v-84294778","path":"/cs/algo/framework/optimise/","title":"优化","lang":"en-US","frontmatter":{"description":"优化 减治：无效优化 避免无效计算：不可能出现答案的地方直接排除，即优化无效状态空间 有序（广义上的有序，符合一定的规律）的线性结构 （四大类型）eg. 二分法，快速选择 动归：重叠优化 避免重复计算： DAG结构 复杂的动态规划可以把四种算法都串起来，因为临界节点的序列是线性的，且有的时候是“有序”的，就可以减治（如斜率优化等） 动态规划的优化 空间优化： 先序： FOR：滚动数组 DFS、BFS：把hashmap的节点删除（hashmap.remove） 后序： 只有被重复计算的点需要被存储下来，没有重复计算的点就不需要存储 lc一道hard里面出现过一次 时间优化：通过减治","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/cs/algo/framework/optimise/"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"优化"}],["meta",{"property":"og:description","content":"优化 减治：无效优化 避免无效计算：不可能出现答案的地方直接排除，即优化无效状态空间 有序（广义上的有序，符合一定的规律）的线性结构 （四大类型）eg. 二分法，快速选择 动归：重叠优化 避免重复计算： DAG结构 复杂的动态规划可以把四种算法都串起来，因为临界节点的序列是线性的，且有的时候是“有序”的，就可以减治（如斜率优化等） 动态规划的优化 空间优化： 先序： FOR：滚动数组 DFS、BFS：把hashmap的节点删除（hashmap.remove） 后序： 只有被重复计算的点需要被存储下来，没有重复计算的点就不需要存储 lc一道hard里面出现过一次 时间优化：通过减治"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-01-29T15:51:30.000Z"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2023-01-29T15:51:30.000Z"}],["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://davidliuk.github.io/blog/blog/zh/cs/algo/framework/optimise/"}]]},"headers":[],"git":{"createdTime":1675007490000,"updatedTime":1675007490000,"contributors":[{"name":"刘大维","email":"davidliu@liudaweideMacBook-Pro.local","commits":1}]},"readingTime":{"minutes":0.71,"words":214},"localizedDate":"January 29, 2023","filePathRelative":"cs/algo/framework/optimise/README.md","excerpt":"<h1> 优化</h1>\\n<ul>\\n<li>\\n<p>减治：无效优化</p>\\n<p>避免无效计算：不可能出现答案的地方直接排除，即优化无效状态空间</p>\\n<p>有序（广义上的有序，符合一定的规律）的线性结构</p>\\n<p>（四大类型）eg. 二分法，快速选择</p>\\n</li>\\n<li>\\n<p>动归：重叠优化</p>\\n<p>避免重复计算：</p>\\n<p>DAG结构</p>\\n<p>复杂的动态规划可以把四种算法都串起来，因为临界节点的序列是线性的，且有的时候是“有序”的，就可以减治（如斜率优化等）</p>\\n</li>\\n</ul>\\n<p>动态规划的优化</p>\\n<ul>\\n<li>\\n<p>空间优化：</p>\\n<p>先序：</p>\\n<ul>\\n<li>FOR：滚动数组</li>\\n<li>DFS、BFS：把hashmap的节点删除（hashmap.remove）</li>\\n</ul>\\n<p>后序：</p>\\n<ul>\\n<li>只有被重复计算的点需要被存储下来，没有重复计算的点就不需要存储</li>\\n<li>lc一道hard里面出现过一次</li>\\n</ul>\\n</li>\\n<li>\\n<p>时间优化：通过减治</p>\\n</li>\\n</ul>","autoDesc":true}`);export{e as data};