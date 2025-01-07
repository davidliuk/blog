import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as p,d as i,o as l}from"./app-ChU1gMRF.js";const n={};function a(o,e){return l(),p("div",null,e[0]||(e[0]=[i('<h1 id="优化" tabindex="-1"><a class="header-anchor" href="#优化"><span>优化</span></a></h1><ul><li><p>减治：无效优化</p><p>避免无效计算：不可能出现答案的地方直接排除，即优化无效状态空间</p><p>有序（广义上的有序，符合一定的规律）的线性结构</p><p>（四大类型）eg. 二分法，快速选择</p></li><li><p>动归：重叠优化</p><p>避免重复计算：</p><p>DAG结构</p><p>复杂的动态规划可以把四种算法都串起来，因为临界节点的序列是线性的，且有的时候是“有序”的，就可以减治（如斜率优化等）</p></li></ul><p>动态规划的优化</p><ul><li><p>空间优化：</p><p>先序：</p><ul><li>FOR：滚动数组</li><li>DFS、BFS：把hashmap的节点删除（hashmap.remove）</li></ul><p>后序：</p><ul><li>只有被重复计算的点需要被存储下来，没有重复计算的点就不需要存储</li><li>lc一道hard里面出现过一次</li></ul></li><li><p>时间优化：通过减治</p></li></ul>',4)]))}const c=t(n,[["render",a],["__file","index.html.vue"]]),d=JSON.parse(`{"path":"/algo/framework/optimise/","title":"优化","lang":"en-US","frontmatter":{"description":"优化 减治：无效优化 避免无效计算：不可能出现答案的地方直接排除，即优化无效状态空间 有序（广义上的有序，符合一定的规律）的线性结构 （四大类型）eg. 二分法，快速选择 动归：重叠优化 避免重复计算： DAG结构 复杂的动态规划可以把四种算法都串起来，因为临界节点的序列是线性的，且有的时候是“有序”的，就可以减治（如斜率优化等） 动态规划的优化 空间...","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/algo/framework/optimise/"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"优化"}],["meta",{"property":"og:description","content":"优化 减治：无效优化 避免无效计算：不可能出现答案的地方直接排除，即优化无效状态空间 有序（广义上的有序，符合一定的规律）的线性结构 （四大类型）eg. 二分法，快速选择 动归：重叠优化 避免重复计算： DAG结构 复杂的动态规划可以把四种算法都串起来，因为临界节点的序列是线性的，且有的时候是“有序”的，就可以减治（如斜率优化等） 动态规划的优化 空间..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-11-22T03:05:37.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-22T03:05:37.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"优化\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-22T03:05:37.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[],"git":{"createdTime":1732244737000,"updatedTime":1732244737000,"contributors":[{"name":"David Liu","email":"liudawei@seas.upenn.edu","commits":1}]},"readingTime":{"minutes":0.71,"words":214},"filePathRelative":"algo/framework/optimise/README.md","localizedDate":"November 22, 2024","excerpt":"\\n<ul>\\n<li>\\n<p>减治：无效优化</p>\\n<p>避免无效计算：不可能出现答案的地方直接排除，即优化无效状态空间</p>\\n<p>有序（广义上的有序，符合一定的规律）的线性结构</p>\\n<p>（四大类型）eg. 二分法，快速选择</p>\\n</li>\\n<li>\\n<p>动归：重叠优化</p>\\n<p>避免重复计算：</p>\\n<p>DAG结构</p>\\n<p>复杂的动态规划可以把四种算法都串起来，因为临界节点的序列是线性的，且有的时候是“有序”的，就可以减治（如斜率优化等）</p>\\n</li>\\n</ul>\\n<p>动态规划的优化</p>\\n<ul>\\n<li>\\n<p>空间优化：</p>\\n<p>先序：</p>\\n<ul>\\n<li>FOR：滚动数组</li>\\n<li>DFS、BFS：把hashmap的节点删除（hashmap.remove）</li>\\n</ul>\\n<p>后序：</p>\\n<ul>\\n<li>只有被重复计算的点需要被存储下来，没有重复计算的点就不需要存储</li>\\n<li>lc一道hard里面出现过一次</li>\\n</ul>\\n</li>\\n<li>\\n<p>时间优化：通过减治</p>\\n</li>\\n</ul>","autoDesc":true}`);export{c as comp,d as data};
