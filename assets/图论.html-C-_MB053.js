import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as n,d as t,o as e}from"./app-UiaY2OnX.js";const l={};function p(i,s){return e(),n("div",null,s[0]||(s[0]=[t('<h1 id="图论" tabindex="-1"><a class="header-anchor" href="#图论"><span>图论</span></a></h1><ul><li><p>显式图</p></li><li><p>隐式图</p><p>按照扩展规则逐步扩展邻接的点</p></li></ul><p>图可以先生成好再遍历，也可以边遍历边生成（推荐变遍历边生成）</p><p>dfs 时有的时候需要记录 parent/from 防止出现平凡环/走回头路</p><p><strong>编号</strong>：图是一个抽象的结构，要为图中每一个节点赋值一个唯一的编号。</p><ul><li><p>一般来说，题目上给的节点是按照数组给的有一个默认编号 0 到 n-1或 1 到 n（这个时候也要注意-1来映射），或String本身也可以做唯一标识</p></li><li><p>没有的情况下，需要用哈希表来记录元素到编号</p><p>如合并账户、除法求值</p></li></ul><p>在我们开始实际执行深度优先搜索之前，让我们快速地判断用什么存储图，</p><ol><li>邻接表，是这个问题的最佳表示</li><li>邻接矩阵 ，通常只有当边数大大高于节点数时，我们才会使用邻接矩阵。</li><li>链表，将实际节点作为对象的 链表表示法 是一种过于复杂的表示法，可能会向面试官暗示您对邻接列表和邻接矩阵的了解有限。它们在面试问题中并不常用。</li></ol><h2 id="图的存储" tabindex="-1"><a class="header-anchor" href="#图的存储"><span>图的存储</span></a></h2><ul><li><p>邻接矩阵</p><p>二维数组<code>graph[i][j]</code>，表示i, j之间的距离。</p><p>好处：</p><ol><li>O1判断两点距离和是否之间相连</li><li>求最大网络秩</li><li>写起来比较简单</li></ol></li><li><p>邻接表 adjacencyList</p><p>有一个有 <code>n</code> 个节点的有向图，节点按 <code>0</code> 到 <code>n - 1</code> 编号。</p><p>图由一个 <strong>索引从 0 开始</strong> 的 2D 数组 <code>graph</code>表示， <code>graph[i]</code>是与节点 <code>i</code> 相邻的节点的整数数组，这意味着从节点 <code>i</code> 到 <code>graph[i]</code>中的每个节点都有一条边。</p><p><code>List&lt;Integer&gt;[] next = new List[n]</code></p><p><code>List&lt;Integer&gt;[] adjacencyList = new List[n]</code></p><p><code>List&lt;List&lt;Integer&gt;&gt; adjacencyList = new ArrayList&lt;&gt;()</code></p><p><code>Map&lt;Integer, Set&lt;Integer&gt;&gt; adjacencyList = new HashMap&lt;&gt;()</code></p><p><code>List&lt;int[]&gt;[] e = new List[n];</code> 存储带权图，数组存结点编号和权 lc1466</p><p>好处：节省空间，便于遍历</p><p>方便存多层图，如不同类别的边不同处理逻辑的时候，可以拆成多层图</p></li><li><p>边存储</p><p>一个边的数组，每个元素都是起点、终点的二元组（如果带权图则为三元组）</p><p>给你一个 <strong>有向无环图</strong> ， <code>n</code> 个节点编号为 <code>0</code> 到 <code>n-1</code> ，以及一个边数组 <code>edges</code> ，其中 <code>edges[i] = [fromi, toi]</code> 表示一条从点 <code>fromi</code> 到点 <code>toi</code> 的有向边。</p><p>eg. [[0, 1], [0, 2], [1, 2]]</p><p>有 <code>n</code> 个城市通过一些航班连接。给你一个数组 <code>flights</code> ，其中 <code>flights[i] = [fromi, toi, pricei]</code> ，表示该航班都从城市 <code>fromi</code> 开始，以价格 <code>pricei</code> 抵达 <code>toi</code>。</p><p>好处：</p><ol><li>题目一般是给一组边，然后用户根据题意选择合适的方式建图</li><li>适合用并查集，</li><li>统计indegree, outdegree</li></ol></li></ul><h2 id="图分类" tabindex="-1"><a class="header-anchor" href="#图分类"><span>图分类</span></a></h2><ul><li><p>有向图</p><ul><li><p>有向无环图 DAG</p><p>无需 visited 数组，因为不会走回头路；可以拓扑排序；可以动态规划</p><ul><li>森林</li><li>树</li><li>多段图，可以划分成若干阶段，每个阶段只能从上一个阶段所决定</li></ul></li><li><p>基环树 pseudo tree</p><p>基环树是指其具有 n 个点 n 条边的联通块，</p><ul><li>「内向」是指树中任意节点有且只有一条出边</li><li>「外向」是指树中任意节点有且只有一条入边</li></ul><p>可以用FOR来遍历，可以用数组存储（类似链式next数组或prev数组或链式前向星的head数组）</p><ul><li><a href="https://leetcode.cn/problems/maximum-employees-to-be-invited-to-a-meeting/" target="_blank" rel="noopener noreferrer">2127. 参加会议的最多员工数</a></li><li><a href="https://leetcode.cn/problems/find-closest-node-to-given-two-nodes/" target="_blank" rel="noopener noreferrer">2359. 找到离给定两个节点最近的节点</a></li><li><a href="https://leetcode.cn/problems/longest-cycle-in-a-graph/" target="_blank" rel="noopener noreferrer">2360. 图中的最长环</a></li><li><a href="https://leetcode.cn/problems/maximize-value-of-function-in-a-ball-passing-game" target="_blank" rel="noopener noreferrer">2836. 在传球游戏中最大化函数值</a></li></ul></li></ul></li><li><p>无向图</p></li><li><p>隐式图</p><p>根据连接规则来生成，边遍历边生成，无需提前生成完</p><ul><li>矩阵图（比如一个二维棋盘、二维矩阵）</li><li>单词接龙</li></ul></li><li><p>二部图</p><p><strong>二分图</strong>定义：如果能将一个图的节点集合分割成两个独立的子集 <code>A</code> 和 <code>B</code> ，并使图中的每一条边的两个节点一个来自 <code>A</code> 集合，一个来自 <code>B</code> 集合，就将这个图称为 <strong>二分图</strong>。</p></li><li><p>欧拉图</p><p>一笔画问题，不重复遍历所有边</p><p>欧拉回路：Hierholzer算法求解欧拉回路</p><p>欧拉通路：Hierholzer算法求解欧拉通路</p><ul><li>欧拉图</li><li>半欧拉图</li></ul></li><li><p>哈密尔顿图</p><p>一笔画问题，不重复遍历所有点</p><blockquote><p>判断一个图是否是哈密顿图是一个NP完全问题，它是可解的。到目前为止, 还没有找到一个简明可行的条件作为一个图是否为哈密顿图的充要条件。</p></blockquote></li></ul><h3 id="树" tabindex="-1"><a class="header-anchor" href="#树"><span>树</span></a></h3><p>树是一个无向图，其中任何两个顶点只通过一条路径连接。 换句话说，一个任何没有简单环路的连通图都是一棵树。</p><p>无向图 G 是树，的充要条件（当且仅当）满足以下两个条件：</p><ol><li>G 完全连通。换句话说，对于 G 中的每一对点，都有一条路径连接彼此。</li><li>G 不包含环。换句话说，对于 G 中的每一对点只有一条路径连接彼此。</li></ol><p>或者当且仅当：</p><ol><li>检查是否是<code>n-1</code>条边。如果没有，则返回 <code>false</code>。</li><li>完全连通：检查该图是否完全连通。如果是，则返回 <code>true</code>，否则返回 <code>false</code>。</li></ol><ul><li>无根树</li><li>有根树</li></ul><p>有根树指满足以下条件的<strong>有向图</strong>。</p><ul><li>该树只有一个根节点，所有其他节点都是该根节点的后继。（用拓扑排序）</li><li>该树除根节点外的每一个节点都有且只有一个父节点，而根节点没有父节点。</li></ul><h2 id="图的遍历" tabindex="-1"><a class="header-anchor" href="#图的遍历"><span>图的遍历</span></a></h2><p>遍历过程中要有 visited 数组/表或标识（如dfn, color等）防止一个点重复遍历</p><ul><li><p>深度优先搜索</p><p>好处：代码简短多种类型的状态好存，有先序后序</p></li><li><p>广度优先搜索</p><p>好处：可用于无权图的最短路径问题，便于求解拓扑排序序列</p></li></ul><h2 id="连通性" tabindex="-1"><a class="header-anchor" href="#连通性"><span>连通性</span></a></h2><h3 id="染色法" tabindex="-1"><a class="header-anchor" href="#染色法"><span>染色法</span></a></h3><p>三色标记法，判断二分图和带环图</p><p>根据题意，若起始节点位于一个环内，或者能到达一个环，则该节点不是安全的。否则，该节点是安全的。</p><p>我们可以使用深度优先搜索来找环，并在深度优先搜索时，用三种颜色对节点进行标记，标记的规则如下：</p><p>白色（用 0 表示）：该节点尚未被访问；<br> 灰色（用 1 表示）：该节点位于递归栈中，或者在某个环上；<br> 黑色（用 2 表示）：该节点搜索完毕，是一个安全节点。</p><p><strong>二分图</strong>定义：如果能将一个图的节点集合分割成两个独立的子集 <code>A</code> 和 <code>B</code> ，并使图中的每一条边的两个节点一个来自 <code>A</code> 集合，一个来自 <code>B</code> 集合，就将这个图称为 <strong>二分图</strong>。</p><h3 id="环" tabindex="-1"><a class="header-anchor" href="#环"><span>环</span></a></h3><p>平凡环：无向图里面A-&gt;B, B-&gt;A构成一个平凡环</p><p>自环：一个节点有一条指向自己的边</p><p>判环：</p><ul><li>三色标记法</li><li>拓扑排序</li><li>tarjan 算法</li><li>并查集：边集合</li></ul><h3 id="点连通性" tabindex="-1"><a class="header-anchor" href="#点连通性"><span>点连通性</span></a></h3><p>在无向图中，若从顶点<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>V</mi><mi>i</mi></msub></mrow><annotation encoding="application/x-tex">V_i</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8333em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.22222em;">V</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3117em;"><span style="top:-2.55em;margin-left:-0.2222em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">i</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span>到顶点<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>V</mi><mi>j</mi></msub></mrow><annotation encoding="application/x-tex">V_j</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.9694em;vertical-align:-0.2861em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.22222em;">V</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3117em;"><span style="top:-2.55em;margin-left:-0.2222em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight" style="margin-right:0.05724em;">j</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.2861em;"><span></span></span></span></span></span></span></span></span></span>有路径（当然反过来也一定有路径），则称<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>V</mi><mi>i</mi></msub></mrow><annotation encoding="application/x-tex">V_i</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8333em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.22222em;">V</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3117em;"><span style="top:-2.55em;margin-left:-0.2222em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">i</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span>和<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>V</mi><mi>j</mi></msub></mrow><annotation encoding="application/x-tex">V_j</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.9694em;vertical-align:-0.2861em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.22222em;">V</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3117em;"><span style="top:-2.55em;margin-left:-0.2222em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight" style="margin-right:0.05724em;">j</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.2861em;"><span></span></span></span></span></span></span></span></span></span>是连通的。</p><h3 id="连通图" tabindex="-1"><a class="header-anchor" href="#连通图"><span>连通图</span></a></h3><p>若<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>V</mi><mo stretchy="false">(</mo><mi>G</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">V(G)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.22222em;">V</span><span class="mopen">(</span><span class="mord mathnormal">G</span><span class="mclose">)</span></span></span></span>中任意两个不同的顶点<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>V</mi><mi>i</mi></msub></mrow><annotation encoding="application/x-tex">V_i</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8333em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.22222em;">V</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3117em;"><span style="top:-2.55em;margin-left:-0.2222em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">i</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span>和<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>V</mi><mi>j</mi></msub></mrow><annotation encoding="application/x-tex">V_j</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.9694em;vertical-align:-0.2861em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.22222em;">V</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3117em;"><span style="top:-2.55em;margin-left:-0.2222em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight" style="margin-right:0.05724em;">j</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.2861em;"><span></span></span></span></span></span></span></span></span></span>都连通（即有路径），则称<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>G</mi></mrow><annotation encoding="application/x-tex">G</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal">G</span></span></span></span>为连通图(Connected Graph)。</p><h3 id="强连通图" tabindex="-1"><a class="header-anchor" href="#强连通图"><span>强连通图</span></a></h3><ol><li>弱连通：有向图的底图（无向图）是连通图，则是弱连通图。</li><li>单向连通：有向图中，任意结点对中，至少从一个到另一个是可达的，就是单向连通。</li><li>强连通：有向图中，强连通图是任意对中都互相可达。</li></ol><p><strong>有向图</strong>G中，若<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>V</mi><mo stretchy="false">(</mo><mi>G</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">V(G)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.22222em;">V</span><span class="mopen">(</span><span class="mord mathnormal">G</span><span class="mclose">)</span></span></span></span>中任意两个不同的顶点<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>V</mi><mi>i</mi></msub></mrow><annotation encoding="application/x-tex">V_i</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8333em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.22222em;">V</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3117em;"><span style="top:-2.55em;margin-left:-0.2222em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">i</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span>和<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>V</mi><mi>j</mi></msub></mrow><annotation encoding="application/x-tex">V_j</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.9694em;vertical-align:-0.2861em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.22222em;">V</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3117em;"><span style="top:-2.55em;margin-left:-0.2222em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight" style="margin-right:0.05724em;">j</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.2861em;"><span></span></span></span></span></span></span></span></span></span>都连通（即双向可达），则称<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>G</mi></mrow><annotation encoding="application/x-tex">G</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal">G</span></span></span></span>为强连通图(Connected Graph)。</p><h3 id="连通分量-cc" tabindex="-1"><a class="header-anchor" href="#连通分量-cc"><span>连通分量 CC</span></a></h3><p>无向图G的极大连通子图称为G的连通分量。任何连通图的连通分量只有一个，即是其自身，非连通的无向图有多个连通分量。</p><h3 id="bfs" tabindex="-1"><a class="header-anchor" href="#bfs"><span>BFS</span></a></h3><h3 id="并查集" tabindex="-1"><a class="header-anchor" href="#并查集"><span>并查集</span></a></h3><p>一般是无向无权图的连通分量，也可以拓展至有向带权图（需要一个额外dist数组，如除法求值）</p><p>用一个集合中的某个元素来代表这个集合</p><p>是一种树形的数据结构，用于解决不相交（disjoint）集合的合并及查询问题，包含两种操作：</p><p>并查集是一种树形结构，它用一棵树来表示一个集合，不同的集合其实就构成了一个森林。</p><p>但是路径压缩会破坏树的结构，在一些情况下是不能使用的，按秩合并则不会</p><p>两种优化可以同时进行，查询操作几乎可以降到O1</p><p>我们可以将每一个变量看作图中的一个节点，把相等的关系 == 看作是连接两个节点的边，那么由于表示相等关系的等式方程具有传递性，即如果 <code>a==b</code> 和 <code>b==c</code> 成立，则 <code>a==c</code> 也成立。也就是说，所有相等的变量属于同一个连通分量。因此，我们可以使用并查集来维护这种连通分量的关系。</p><h3 id="强连通分量-scc" tabindex="-1"><a class="header-anchor" href="#强连通分量-scc"><span>强连通分量 SCC</span></a></h3><p>Tarjan 算法</p><p><a href="https://blog.csdn.net/csyifanZhang/article/details/105370924" target="_blank" rel="noopener noreferrer">https://blog.csdn.net/csyifanZhang/article/details/105370924</a></p><p>Tarjan 是著名计算机科学家。Tarjan 算法基于 dfs，可以解决很多连通性问题，比如</p><ul><li>无向图的割点（关键点）Cut Vertex</li><li>无向图的割边（关键边、桥）</li><li>无向图的双连通分量 BCC(Biconnected Component)</li><li>有向图的强连通分量 <strong>SCC</strong>(Strong Connected Component)</li><li>缩点（把一个强连通分量缩成一个点）</li></ul><p>用于不同问题时，写法略有区别。</p><p>Tarjan 算法的关键点有二：在 dfs 的过程中，</p><ul><li>前序，记录每个节点初次被访问的时间戳</li><li>后序，计算每个节点能访问到的节点的最小时间戳。</li></ul><h2 id="最短路" tabindex="-1"><a class="header-anchor" href="#最短路"><span>最短路</span></a></h2><h3 id="bfs-1" tabindex="-1"><a class="header-anchor" href="#bfs-1"><span>BFS</span></a></h3><p>简单图/无权图最短路</p><h3 id="dijkstra" tabindex="-1"><a class="header-anchor" href="#dijkstra"><span>Dijkstra</span></a></h3><p>带权图最短路</p><p>Dijkstra 用于找到给定加权图（图的边表示节点之间的距离）中从任何起始节点到任何目标节点的最短路径。</p><p>该算法包括以下步骤：</p><ol><li><p>为每个节点分配一个临时距离值：对于我们的起始节点，将其设置为零，对于所有其他节点，将其设置为无穷大。</p></li><li><p>将起始节点设置为当前节点。标记它为已访问。</p></li><li><p>对于当前节点，考虑其所有相邻节点并计算它们的临时距离。将新计算的临时距离与当前分配的值进行比较，并将较小的值分配给所有相邻节点。</p><p>例如，如果当前节点 A 的距离标记为 6，并且与相邻节点B相连的边长为 2，则到B(通过A)的距离将为 6 + 2 = 8。如果 B 之前标记的距离大于 8，则将其改为 8。否则，保留当前值。</p></li><li><p>当我们完成考虑当前节点的所有相邻节点时，将当前节点标记为已访问。已访问的节点将不再被检查。</p></li><li><p>如果目标节点已标记为已访问，或者所有剩余节点中最小的临时距离为无穷大(表示无法到达目标节点)，则停止。算法已完成。</p></li><li><p>否则，选择标记为未访问的节点中具有最小临时距离的节点，并将其设置为新的当前节点，然后返回到步骤 3。</p></li></ol><p>可以通过两个简单的示例来了解该算法的工作原理。首先，考虑下面的节点集。</p><h3 id="a" tabindex="-1"><a class="header-anchor" href="#a"><span>A*</span></a></h3><p>启发函数（估计当前结点到终点的距离）</p><h2 id="生成树" tabindex="-1"><a class="header-anchor" href="#生成树"><span>生成树</span></a></h2><h3 id="kruskal" tabindex="-1"><a class="header-anchor" href="#kruskal"><span>Kruskal</span></a></h3><p>初始时，图中每个点都为一个连通分量。</p><ol><li>将所有边按权值升序排序</li><li>升序考虑所有边，如果连接这条边能使图的连通分支减少，就连接，否则不连接</li></ol><p>最后得到的就是最小生成树，复杂度与边有关，适合边稀疏图</p><h2 id="网络流" tabindex="-1"><a class="header-anchor" href="#网络流"><span>网络流</span></a></h2><p>最大流</p><p>增广路</p><p>最小割最大流</p><p>最小费用最大流</p>',83)]))}const m=a(l,[["render",p],["__file","图论.html.vue"]]),o=JSON.parse(`{"path":"/algo/summary/structure/graph/%E5%9B%BE%E8%AE%BA.html","title":"图论","lang":"en-US","frontmatter":{"description":"图论 显式图 隐式图 按照扩展规则逐步扩展邻接的点 图可以先生成好再遍历，也可以边遍历边生成（推荐变遍历边生成） dfs 时有的时候需要记录 parent/from 防止出现平凡环/走回头路 编号：图是一个抽象的结构，要为图中每一个节点赋值一个唯一的编号。 一般来说，题目上给的节点是按照数组给的有一个默认编号 0 到 n-1或 1 到 n（这个时候也要...","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/algo/summary/structure/graph/%E5%9B%BE%E8%AE%BA.html"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"图论"}],["meta",{"property":"og:description","content":"图论 显式图 隐式图 按照扩展规则逐步扩展邻接的点 图可以先生成好再遍历，也可以边遍历边生成（推荐变遍历边生成） dfs 时有的时候需要记录 parent/from 防止出现平凡环/走回头路 编号：图是一个抽象的结构，要为图中每一个节点赋值一个唯一的编号。 一般来说，题目上给的节点是按照数组给的有一个默认编号 0 到 n-1或 1 到 n（这个时候也要..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-11-22T03:05:37.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-22T03:05:37.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"图论\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-22T03:05:37.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[{"level":2,"title":"图的存储","slug":"图的存储","link":"#图的存储","children":[]},{"level":2,"title":"图分类","slug":"图分类","link":"#图分类","children":[{"level":3,"title":"树","slug":"树","link":"#树","children":[]}]},{"level":2,"title":"图的遍历","slug":"图的遍历","link":"#图的遍历","children":[]},{"level":2,"title":"连通性","slug":"连通性","link":"#连通性","children":[{"level":3,"title":"染色法","slug":"染色法","link":"#染色法","children":[]},{"level":3,"title":"环","slug":"环","link":"#环","children":[]},{"level":3,"title":"点连通性","slug":"点连通性","link":"#点连通性","children":[]},{"level":3,"title":"连通图","slug":"连通图","link":"#连通图","children":[]},{"level":3,"title":"强连通图","slug":"强连通图","link":"#强连通图","children":[]},{"level":3,"title":"连通分量 CC","slug":"连通分量-cc","link":"#连通分量-cc","children":[]},{"level":3,"title":"BFS","slug":"bfs","link":"#bfs","children":[]},{"level":3,"title":"并查集","slug":"并查集","link":"#并查集","children":[]},{"level":3,"title":"强连通分量 SCC","slug":"强连通分量-scc","link":"#强连通分量-scc","children":[]}]},{"level":2,"title":"最短路","slug":"最短路","link":"#最短路","children":[{"level":3,"title":"BFS","slug":"bfs-1","link":"#bfs-1","children":[]},{"level":3,"title":"Dijkstra","slug":"dijkstra","link":"#dijkstra","children":[]},{"level":3,"title":"A*","slug":"a","link":"#a","children":[]}]},{"level":2,"title":"生成树","slug":"生成树","link":"#生成树","children":[{"level":3,"title":"Kruskal","slug":"kruskal","link":"#kruskal","children":[]}]},{"level":2,"title":"网络流","slug":"网络流","link":"#网络流","children":[]}],"git":{"createdTime":1732244737000,"updatedTime":1732244737000,"contributors":[{"name":"David Liu","email":"liudawei@seas.upenn.edu","commits":1}]},"readingTime":{"minutes":10.46,"words":3137},"filePathRelative":"algo/summary/structure/graph/图论.md","localizedDate":"November 22, 2024","excerpt":"\\n<ul>\\n<li>\\n<p>显式图</p>\\n</li>\\n<li>\\n<p>隐式图</p>\\n<p>按照扩展规则逐步扩展邻接的点</p>\\n</li>\\n</ul>\\n<p>图可以先生成好再遍历，也可以边遍历边生成（推荐变遍历边生成）</p>\\n<p>dfs 时有的时候需要记录 parent/from 防止出现平凡环/走回头路</p>\\n<p><strong>编号</strong>：图是一个抽象的结构，要为图中每一个节点赋值一个唯一的编号。</p>\\n<ul>\\n<li>\\n<p>一般来说，题目上给的节点是按照数组给的有一个默认编号 0 到 n-1或 1 到 n（这个时候也要注意-1来映射），或String本身也可以做唯一标识</p>\\n</li>\\n<li>\\n<p>没有的情况下，需要用哈希表来记录元素到编号</p>\\n<p>如合并账户、除法求值</p>\\n</li>\\n</ul>","autoDesc":true}`);export{m as comp,o as data};
