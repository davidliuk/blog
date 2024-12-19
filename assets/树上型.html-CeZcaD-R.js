import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as o,d as t,o as p}from"./app-PqS9YW_3.js";const l={};function a(c,e){return p(),o("div",null,e[0]||(e[0]=[t('<h1 id="树上型" tabindex="-1"><a class="header-anchor" href="#树上型"><span>树上型</span></a></h1><p>可以理解成后缀型（即当前结点即整个子树的某种性质）</p><p>常见处理方法，通过设计一层状态，来把多层问题（如需下下层）转化成只需要下一层（典型如打家劫舍III、树的最大独立集）</p><p>注：可能有同学觉得树形 DP 没有重复访问同一个状态（重叠子问题），并不能算作 DP，而是算作普通的递归。这么说也有一定道理，不过考虑到思维方式和 DP 是一样的自底向上，所以仍然叫做树形 DP。此外，如果是自顶向下的递归做法，是存在重叠子问题的，一般要结合记忆化搜索实现。</p><ul><li></li></ul><h2 id="例题" tabindex="-1"><a class="header-anchor" href="#例题"><span>例题</span></a></h2><p>树的最大独立集</p><blockquote><p>k</p></blockquote><p>无根树，转有根树：任选一个根r，无根树就变成有根树了</p><p>状态：<code>f[i]</code>表示以i为根的子树的最大独立集的大小。</p><p>转移：<code>f[i]=max{1+sum{f[j]|j in gs(i)}, sum{f[j]|j in s(i)}}</code></p><p>拓展，</p><ol><li>树上的打家劫舍其实就是这个题的二叉有根树版本。</li><li>打家劫舍其实就是这个题的单链树版本。</li><li>打家劫舍II其实就是这个题的简单环版本。</li></ol><p>实现层面：</p><ul><li>可以用刷表法，因为转移方程需要枚举所有的儿子和孙子，颇为不便，当计算出一个<code>f[i]</code>后，用它去更新i的父亲和祖父结点的累加值。</li><li>下面的写法，实践中更为常用，只需要从儿子更新，不需要记录更多</li></ul><hr><p>K Edit Distance</p><blockquote><p>给定N个字符串，以及目标字符串Target<br> • 问哪些字符串和Target的编辑距离不大于K<br> • 一次编辑包括插入一个字符或删除一个字符或修改一个字符</p><p>N次Edit Distance有重复计算，所以构建字典树，在树上DP</p></blockquote><p>状态：<code>f[s][j]</code>表示前缀结点s和target前j个字符的最小编辑距离</p><p>转移：<code>f[s][j]=min{f[s][j-1]+1,f[q][j-1]+1,f[q][j]+1,f[q][j-1]|q==target[j-1]}</code></p><p>刷表法</p><hr><p>Hali-Bula的晚会</p><blockquote><p>树的最大独立集，最大独立集是否唯一</p></blockquote><p>状态：</p><ul><li><code>f[i][0/1]</code>表示以i为根的子树，不选/选i的最大独立集的大小。</li><li><code>g[i][0/1]</code>表示以i为根的子树，不选/选i的最大独立集的是否唯一。</li></ul><p>转移：</p><ul><li><p><code>f[i][1]=sum{f[j][0]|j in s(i)}</code></p><p><code>g[i][1]=and{g[j][0]}</code></p></li><li><p><code>f[i][0]=sum{max{f[j][0],f[j][1]}|j in s(i)}</code></p><p><code>g[i][1]=or{f[j][0]==f[j][1]}||max的f的g=false</code></p></li></ul><hr><p>树的重心</p><p>状态：<code>f[i]</code>表示以i为根的子树结点个数</p><p>转移：<code>f[i]=sum{f[j]|j in s(i)}+1</code></p><p>树的最长路径（最远点对）</p><hr><p>完美的服务</p><blockquote><p>n台机器形成树状结构，要求每个不是服务器的计算机恰好和一台服务器计算机相邻，求服务器最少的数量</p></blockquote><p>状态：</p><ul><li><code>f[i][0]</code>表示i是服务器，则每个结点也可以不是。</li><li><code>f[i][1]</code>表示i不是服务器，其父亲是服务器。意味着i的所有子节点都不是服务器</li><li><code>f[i][2]</code>表示i和其父亲都不是服务器。这意味着i恰好有一个儿子是服务器。</li></ul><p>转移：子节点v</p><ul><li><code>f[u][0]=sum{min{f[v][0],f[v][1]}}+1</code></li><li><code>f[u][1]=sum{f[v][2]}</code></li><li><code>f[u][2]=min{f[u][1]-f[v][2]+f[v][0]}</code></li></ul><p>行</p>',41)]))}const r=i(l,[["render",a],["__file","树上型.html.vue"]]),m=JSON.parse(`{"path":"/algo/summary/optimise/dynamic-programming/%E6%A0%91%E4%B8%8A%E5%9E%8B.html","title":"树上型","lang":"en-US","frontmatter":{"description":"树上型 可以理解成后缀型（即当前结点即整个子树的某种性质） 常见处理方法，通过设计一层状态，来把多层问题（如需下下层）转化成只需要下一层（典型如打家劫舍III、树的最大独立集） 注：可能有同学觉得树形 DP 没有重复访问同一个状态（重叠子问题），并不能算作 DP，而是算作普通的递归。这么说也有一定道理，不过考虑到思维方式和 DP 是一样的自底向上，所以...","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/algo/summary/optimise/dynamic-programming/%E6%A0%91%E4%B8%8A%E5%9E%8B.html"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"树上型"}],["meta",{"property":"og:description","content":"树上型 可以理解成后缀型（即当前结点即整个子树的某种性质） 常见处理方法，通过设计一层状态，来把多层问题（如需下下层）转化成只需要下一层（典型如打家劫舍III、树的最大独立集） 注：可能有同学觉得树形 DP 没有重复访问同一个状态（重叠子问题），并不能算作 DP，而是算作普通的递归。这么说也有一定道理，不过考虑到思维方式和 DP 是一样的自底向上，所以..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-12-04T01:12:41.000Z"}],["meta",{"property":"article:modified_time","content":"2024-12-04T01:12:41.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"树上型\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-12-04T01:12:41.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[{"level":2,"title":"例题","slug":"例题","link":"#例题","children":[]}],"git":{"createdTime":1732244737000,"updatedTime":1733274761000,"contributors":[{"name":"David Liu","email":"liudawei@seas.upenn.edu","commits":1},{"name":"刘大维","email":"davidliu@liudaweideMacBook-Pro-3.local","commits":1}]},"readingTime":{"minutes":2.99,"words":898},"filePathRelative":"algo/summary/optimise/dynamic-programming/树上型.md","localizedDate":"November 22, 2024","excerpt":"\\n<p>可以理解成后缀型（即当前结点即整个子树的某种性质）</p>\\n<p>常见处理方法，通过设计一层状态，来把多层问题（如需下下层）转化成只需要下一层（典型如打家劫舍III、树的最大独立集）</p>\\n<p>注：可能有同学觉得树形 DP 没有重复访问同一个状态（重叠子问题），并不能算作 DP，而是算作普通的递归。这么说也有一定道理，不过考虑到思维方式和 DP 是一样的自底向上，所以仍然叫做树形 DP。此外，如果是自顶向下的递归做法，是存在重叠子问题的，一般要结合记忆化搜索实现。</p>\\n<ul>\\n<li></li>\\n</ul>\\n<h2>例题</h2>\\n<p>树的最大独立集</p>\\n<blockquote>\\n<p>k</p>\\n</blockquote>","autoDesc":true}`);export{r as comp,m as data};
