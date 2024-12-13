import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as p,d as a,o as r}from"./app-DIqbhby7.js";const i={};function l(o,t){return r(),p("div",null,t[0]||(t[0]=[a('<h1 id="shortest-path" tabindex="-1"><a class="header-anchor" href="#shortest-path"><span>Shortest Path</span></a></h1><p>BFS 最短路</p><ul><li><p>无权图</p></li><li><p>01图，每条边的权值为0或1</p></li><li><p>状态转换问题</p><p>状态转换问题的最短步骤数。图的节点表示状态，边表示状态之间的合法转换。每次转换可以视为一步，无需考虑权值。</p><p><strong>示例问题：</strong></p><ul><li>八数码问题（求解从初始状态到目标状态的最少移动次数）。</li><li>字梯问题（从一个单词转换到另一个单词，每次只能变更一个字母）。</li></ul><p><strong>方法：</strong> 将状态看作图的节点，合法的状态转换看作边，用 BFS 搜索状态空间。</p></li></ul><p>哈希表，图中存在环，同一个节点可能重复进入队列，为了避免重复入队，在入队前标记 visited</p><p>Java: HashMap / HashSet</p><p>Java 队列建议 new ArrayDeque (链表比数组慢)</p><h2 id="无权图" tabindex="-1"><a class="header-anchor" href="#无权图"><span>无权图</span></a></h2><p>Word Ladder</p><p>简单图最短路径</p><p>给出两个单词(start和end)和一个字典，找出从start到end的最短转换序列，输出最短序列的长度。</p><p>Knight Shortest Path</p><p>简单图最短路径，八个方向坐标变换</p><hr><p>飞行棋I</p><p>从数组的最左侧跳到最右侧，<strong>只能向右跳</strong>，一步跳 1-6 格，有一些格子之间直接飞过去不耗费步数，问最少跳几步</p><blockquote><p>只能向右跳-&gt;方向性 -&gt;DP</p><p>如果没有这个信息的话，就不能DP但是可以用BFS+</p></blockquote><p>问最少步数，可能是哪些算法?</p><p>A. BFS (高概率)<br> B. DP (次高概率)<br> C. DFS (几乎没有，最短路上复杂度太大不优)<br> D. Shortest Path Algorithm (标准最短路面试一般不考)</p><hr><p>距离之和最短</p><h3 id="矩阵-vs-图" tabindex="-1"><a class="header-anchor" href="#矩阵-vs-图"><span>矩阵 vs 图</span></a></h3><p>图 Graph</p><p>N个点，M条边，M最大是 O(N^2) 的级别，图上BFS时间复杂度 = O(N + M)</p><ul><li>说是O(M)问题也不大，因为M一般都比N大</li></ul><p>所以最坏情况可能是 O(N^2)</p><p>矩阵 Matrix</p><p>R行C列，R<em>C个点，R</em>C*2 条边(每个点上下左右4条边，每条边被2个点共享)。 矩阵中BFS时间复杂度 = O(R * C)</p><p>矩阵根据题意可以是简单图也可以是复杂图，一般情况下是简单图一步一步走，那个球滚动到边界的题就是一个复杂图，每次滚动的距离不一定，且是一个隐式图</p><p>图上的例题</p><ul><li>判断一个图是否是一棵树</li><li>搜索图中最近值为target的点</li><li>无向图连通块</li></ul><p>矩阵上的例题</p><ul><li>僵尸多少天吃掉所有人</li><li>建邮局问题 Build Post Office II</li></ul><h3 id="隐式图-implicit-graph" tabindex="-1"><a class="header-anchor" href="#隐式图-implicit-graph"><span>隐式图 Implicit Graph</span></a></h3><p>隐式图：隐式图是<strong>仅给出初始结点、目标结点以及生成子结点的约束条件</strong>（题意隐含给出），要求按扩展规则应用于扩展结点的过程，找出其他结点，使得隐式图的足够大的一部分编程显式，直到包含目标结点为止。</p><p>抽象问题，没有明确告诉什么是点，什么是边：</p><p><strong>状态是点、二元关系是边</strong></p><p>矩阵是一个非常典型的隐式图，每次都按照拓展规则去找下一个访问的结点</p><p>单词接龙也是一个典型的隐式图</p><p><strong>隐式图</strong>是仅给出初始结点、目标结点以及生成子结点的约束条件（题意隐含给出），要求按扩展规则应用于扩展结点的过程，找出其他结点，使得隐式图的足够大的一部分编程显式，直到包含目标结点为止。</p><p>推多米诺</p>',40)]))}const h=e(i,[["render",l],["__file","shortest-path.html.vue"]]),c=JSON.parse(`{"path":"/algo/summary/search/BFS/shortest-path.html","title":"Shortest Path","lang":"en-US","frontmatter":{"description":"Shortest Path BFS 最短路 无权图 01图，每条边的权值为0或1 状态转换问题 状态转换问题的最短步骤数。图的节点表示状态，边表示状态之间的合法转换。每次转换可以视为一步，无需考虑权值。 示例问题： 八数码问题（求解从初始状态到目标状态的最少移动次数）。 字梯问题（从一个单词转换到另一个单词，每次只能变更一个字母）。 方法： 将状态看作...","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/algo/summary/search/BFS/shortest-path.html"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"Shortest Path"}],["meta",{"property":"og:description","content":"Shortest Path BFS 最短路 无权图 01图，每条边的权值为0或1 状态转换问题 状态转换问题的最短步骤数。图的节点表示状态，边表示状态之间的合法转换。每次转换可以视为一步，无需考虑权值。 示例问题： 八数码问题（求解从初始状态到目标状态的最少移动次数）。 字梯问题（从一个单词转换到另一个单词，每次只能变更一个字母）。 方法： 将状态看作..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-12-13T01:45:42.000Z"}],["meta",{"property":"article:modified_time","content":"2024-12-13T01:45:42.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Shortest Path\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-12-13T01:45:42.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[{"level":2,"title":"无权图","slug":"无权图","link":"#无权图","children":[{"level":3,"title":"矩阵 vs 图","slug":"矩阵-vs-图","link":"#矩阵-vs-图","children":[]},{"level":3,"title":"隐式图 Implicit Graph","slug":"隐式图-implicit-graph","link":"#隐式图-implicit-graph","children":[]}]}],"git":{"createdTime":1732244737000,"updatedTime":1734054342000,"contributors":[{"name":"刘大维","email":"davidliu@liudaweideMacBook-Pro-3.local","commits":1}]},"readingTime":{"minutes":3.02,"words":905},"filePathRelative":"algo/summary/search/BFS/shortest-path.md","localizedDate":"November 22, 2024","excerpt":"\\n<p>BFS 最短路</p>\\n<ul>\\n<li>\\n<p>无权图</p>\\n</li>\\n<li>\\n<p>01图，每条边的权值为0或1</p>\\n</li>\\n<li>\\n<p>状态转换问题</p>\\n<p>状态转换问题的最短步骤数。图的节点表示状态，边表示状态之间的合法转换。每次转换可以视为一步，无需考虑权值。</p>\\n<p><strong>示例问题：</strong></p>\\n<ul>\\n<li>八数码问题（求解从初始状态到目标状态的最少移动次数）。</li>\\n<li>字梯问题（从一个单词转换到另一个单词，每次只能变更一个字母）。</li>\\n</ul>\\n<p><strong>方法：</strong> 将状态看作图的节点，合法的状态转换看作边，用 BFS 搜索状态空间。</p>\\n</li>\\n</ul>","autoDesc":true}`);export{h as comp,c as data};
