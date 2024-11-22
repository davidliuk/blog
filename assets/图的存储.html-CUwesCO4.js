import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as o,d as i,o as d}from"./app-UiaY2OnX.js";const c={};function n(a,e){return d(),o("div",null,e[0]||(e[0]=[i('<h1 id="图的存储" tabindex="-1"><a class="header-anchor" href="#图的存储"><span>图的存储</span></a></h1><h2 id="邻接矩阵" tabindex="-1"><a class="header-anchor" href="#邻接矩阵"><span>邻接矩阵</span></a></h2><p>二维数组<code>graph[i][j]</code>，表示i, j之间的距离。</p><p>好处：O1判断两结点是否连接（且写起来比较简单）</p><p>缺点：稀疏图上非常浪费空间，且只能存储简单图（不能有重边）</p><p>用途：</p><ol><li>最大网络秩</li><li>二分图匹配，匈牙利算法</li><li>Floyd算法求多源最短路n3</li></ol><h2 id="邻接表" tabindex="-1"><a class="header-anchor" href="#邻接表"><span>邻接表</span></a></h2><p>Adjacency List</p><p>有一个有 <code>n</code> 个节点的有向图，节点按 <code>0</code> 到 <code>n - 1</code> 编号。</p><p>图由一个 <strong>索引从 0 开始</strong> 的 2D 整数数组 <code>graph</code>表示， <code>graph[i]</code>是与节点 <code>i</code> 相邻的节点的整数数组，这意味着从节点 <code>i</code> 到 <code>graph[i]</code>中的每个节点都有一条边。</p><h3 id="无权图" tabindex="-1"><a class="header-anchor" href="#无权图"><span>无权图</span></a></h3><p><code>Map&lt;Node, Set&lt;Node&gt;&gt;</code>，这样既可存稀疏图，又可O1判断是否连接</p><p><code>List&lt;Integer&gt;[] next = new List[n]</code></p><p>👍<code>List&lt;Integer&gt;[] adjacencyList = new List[n]</code></p><p><code>List&lt;List&lt;Integer&gt;&gt; adjacencyList = new ArrayList&lt;&gt;()</code></p><h3 id="带权图" tabindex="-1"><a class="header-anchor" href="#带权图"><span>带权图</span></a></h3><p>👍<code>Map&lt;Node, Map&lt;Node, Integer&gt;&gt;</code>，这样既可存稀疏图，又可O1判断是否连接</p><p><code>List&lt;int[]&gt;[] e = new List[n];</code> 存储带权图，数组存[结点编号, 权] lc1466</p><p><code>List&lt;Integer&gt;[] g = new List[n];</code> g[i]存储结点i对应的边的序号，是邻接表和边存储的结合。</p><p>边可以用int[]，也可以用Edge结构体</p><p>好处：节省空间，便于遍历</p><p>用途：</p><ol><li>一般的图遍历</li><li>网络流等</li></ol><p>方便存多层图，如不同类别的边不同处理逻辑的时候，可以拆成多层图</p><h2 id="边存储" tabindex="-1"><a class="header-anchor" href="#边存储"><span>边存储</span></a></h2><p>一个边的数组，每个元素都是起点、终点的二元组（如果带权图则为三元组）</p><p><code>List&lt;int[]&gt; edges</code></p><p>给你一个 <strong>有向无环图</strong> ， <code>n</code> 个节点编号为 <code>0</code> 到 <code>n-1</code> ，以及一个边数组 <code>edges</code> ，其中 <code>edges[i] = [fromi, toi]</code> 表示一条从点 <code>fromi</code> 到点 <code>toi</code> 的有向边。</p><p>eg. [[0, 1], [0, 2], [1, 2]]</p><p>有 <code>n</code> 个城市通过一些航班连接。给你一个数组 <code>flights</code> ，其中 <code>flights[i] = [fromi, toi, pricei]</code> ，表示该航班都从城市 <code>fromi</code> 开始，以价格 <code>pricei</code> 抵达 <code>toi</code>。</p><p>用途：</p><ul><li>题目一般是给一组边，然后用户根据题意选择合适的方式建图</li><li>最小生成树 Kruskal</li><li>适合用并查集，有向图DP</li></ul>',33)]))}const r=t(c,[["render",n],["__file","图的存储.html.vue"]]),s=JSON.parse(`{"path":"/algo/summary/structure/graph/%E5%9B%BE%E7%9A%84%E5%AD%98%E5%82%A8.html","title":"图的存储","lang":"en-US","frontmatter":{"description":"图的存储 邻接矩阵 二维数组graph[i][j]，表示i, j之间的距离。 好处：O1判断两结点是否连接（且写起来比较简单） 缺点：稀疏图上非常浪费空间，且只能存储简单图（不能有重边） 用途： 最大网络秩 二分图匹配，匈牙利算法 Floyd算法求多源最短路n3 邻接表 Adjacency List 有一个有 n 个节点的有向图，节点按 0 到 n -...","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/algo/summary/structure/graph/%E5%9B%BE%E7%9A%84%E5%AD%98%E5%82%A8.html"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"图的存储"}],["meta",{"property":"og:description","content":"图的存储 邻接矩阵 二维数组graph[i][j]，表示i, j之间的距离。 好处：O1判断两结点是否连接（且写起来比较简单） 缺点：稀疏图上非常浪费空间，且只能存储简单图（不能有重边） 用途： 最大网络秩 二分图匹配，匈牙利算法 Floyd算法求多源最短路n3 邻接表 Adjacency List 有一个有 n 个节点的有向图，节点按 0 到 n -..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-11-22T03:05:37.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-22T03:05:37.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"图的存储\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-22T03:05:37.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[{"level":2,"title":"邻接矩阵","slug":"邻接矩阵","link":"#邻接矩阵","children":[]},{"level":2,"title":"邻接表","slug":"邻接表","link":"#邻接表","children":[{"level":3,"title":"无权图","slug":"无权图","link":"#无权图","children":[]},{"level":3,"title":"带权图","slug":"带权图","link":"#带权图","children":[]}]},{"level":2,"title":"边存储","slug":"边存储","link":"#边存储","children":[]}],"git":{"createdTime":1732244737000,"updatedTime":1732244737000,"contributors":[{"name":"David Liu","email":"liudawei@seas.upenn.edu","commits":1}]},"readingTime":{"minutes":1.83,"words":548},"filePathRelative":"algo/summary/structure/graph/图的存储.md","localizedDate":"November 22, 2024","excerpt":"\\n<h2>邻接矩阵</h2>\\n<p>二维数组<code>graph[i][j]</code>，表示i, j之间的距离。</p>\\n<p>好处：O1判断两结点是否连接（且写起来比较简单）</p>\\n<p>缺点：稀疏图上非常浪费空间，且只能存储简单图（不能有重边）</p>\\n<p>用途：</p>\\n<ol>\\n<li>最大网络秩</li>\\n<li>二分图匹配，匈牙利算法</li>\\n<li>Floyd算法求多源最短路n3</li>\\n</ol>\\n<h2>邻接表</h2>\\n<p>Adjacency List</p>\\n<p>有一个有 <code>n</code> 个节点的有向图，节点按 <code>0</code> 到 <code>n - 1</code> 编号。</p>","autoDesc":true}`);export{r as comp,s as data};
