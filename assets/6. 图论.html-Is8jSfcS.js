import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as l,d as i,o as t}from"./app-D4ZvIHfO.js";const p={};function n(r,e){return t(),l("div",null,e[0]||(e[0]=[i('<h1 id="图论" tabindex="-1"><a class="header-anchor" href="#图论"><span>图论</span></a></h1><h2 id="图的概念" tabindex="-1"><a class="header-anchor" href="#图的概念"><span>图的概念</span></a></h2><p>结点 vertices</p><p>边 Edges</p><p>环</p><ul><li>自环：a-&gt;a</li><li>平凡环：a-&gt;b, b-&gt;a</li></ul><p>平行边：关联于同一对结点的若干条边</p><p>有向图：只有有向边的图。</p><p>无向图：只有无向边的图。</p><p>简单图：不含有环和平行边的图。</p><p>多重图：含有平行边的图。</p><p>无权图：边长均为1</p><p>带权图：</p><p>度</p><h2 id="路的概念" tabindex="-1"><a class="header-anchor" href="#路的概念"><span>路的概念</span></a></h2><p>路：其中ei是关联vi-1 ,vi的边, 则称结点和边的交叉序列</p><ul><li>简单图， 则路可以只用结点序列表示.<br> 如右图中，路：abcad</li><li>有向图，则路可以只用边序列表示。<br> 如有向图中 e1e5e2e3 e6 是一条路.</li></ul><p>回路：如果一条路的起点和终点是一个结点，则称此路是一个回路</p><p>迹与闭迹：</p><ul><li><p>如果一条路中，所有边都不同，则称此路为迹。</p></li><li><p>如果一条回路中，所有边都不同，则称此回路为闭迹。</p></li></ul><p>通路与圈：</p><ul><li>如果一条路中，所有结点都不同，则称此路为通路。</li><li>如果一条回路中，除起点和终点外，其余结点都不同，则称此回路为圈。</li></ul><h2 id="连通性" tabindex="-1"><a class="header-anchor" href="#连通性"><span>连通性</span></a></h2><h3 id="无向图的连通性" tabindex="-1"><a class="header-anchor" href="#无向图的连通性"><span>无向图的连通性</span></a></h3><p>两点间连通：在无向图中,结点u和v之间如果存在一条路， 则称u与v是连通的。</p><p>对称关系</p><p>连通分支（分量）：令G=&lt;V,E&gt;是无向图, R是V上连通关系, 设R对V的商集中有等价类V1,V2,V3,…, Vn ,这n个等价类构成的n个子图分别记作G(V1),G(V2),G(V3),…, G(Vn),并称它们为G的连通分支. 并用W(G)表示G中连通分支数。</p><p>连通图: 如果一个图G只有一个连通分支(W(G)=1)，则称G是连通图。</p><p>强连通、单侧连通和弱连通</p><ul><li>在简单有向图G中，如果任何两个结点间相互可达，则称G是强连通。</li><li>如果任何一对结点间，至少有一个结点到另一个结点可达，则称G是单侧连通。</li><li>如果将G看成无向图后(即把有向边看成无向边)是连通的，则称G是弱连通。</li></ul><p>强分图、单侧分图和弱分图</p><h3 id="有向图的连通性" tabindex="-1"><a class="header-anchor" href="#有向图的连通性"><span>有向图的连通性</span></a></h3><p>结点间的可达性：G=&lt;V,E&gt;是有向图, u,v∈V, 如果从u到v有一条路, 则称从u到v可达。</p><p>结点间的可达关系，具有自反性和传递性。</p><p>结点u到v的距离：如果u可达v, 可能从u到v有多条路,其中最短的路的长度,称之为从u到v的距离.记作d&lt;u,v&gt;.</p><h2 id="割集-cut-set" tabindex="-1"><a class="header-anchor" href="#割集-cut-set"><span>割集 (Cut Set)</span></a></h2><p>点割集与割点：</p><p>令G=&lt;V,E&gt;是连通无向图, 结点集合V1 ,V1V，如果删去V1中所有结点后,G就变得不连通了, 而删去V1的任何真子集中的所有结点得到的子图仍然连通.则<br> 称V1是G的一个点割集. 如果点割集V1中只有一个结点，则称此结点为割点。</p><p>边割集与割边(桥)</p><p>令G=&lt;V,E&gt;是连通无向图, 边的集合E1,E1E, 如果删去E1中所有边后,G就变得不连通了, 而删去E1的任何真子集中的所有边,得到的子图仍然连通.则称E1是G的一个边割集. 如果边割集E1中只有一条边, 则称此边为割边, 也称之为桥。</p><h2 id="图的表示" tabindex="-1"><a class="header-anchor" href="#图的表示"><span>图的表示</span></a></h2><h3 id="矩阵" tabindex="-1"><a class="header-anchor" href="#矩阵"><span>矩阵</span></a></h3><p>邻接矩阵</p><p>可达性矩阵</p><h2 id="最短路和关键路径" tabindex="-1"><a class="header-anchor" href="#最短路和关键路径"><span>最短路和关键路径</span></a></h2><p>无权图：边长均为1</p><p>带权图：</p><h2 id="欧拉图、汉密尔顿图" tabindex="-1"><a class="header-anchor" href="#欧拉图、汉密尔顿图"><span>欧拉图、汉密尔顿图</span></a></h2><h3 id="欧拉图-e图-euler" tabindex="-1"><a class="header-anchor" href="#欧拉图-e图-euler"><span>欧拉图 E图(Euler)</span></a></h3><ol><li>欧拉路：在无孤立结点的图G中，如果存在一条路，它经过图中每条边一次且仅一次，称此路为欧拉路。</li><li>欧拉回路：在无孤立结点的图G中，若存在一条回路，它经过图中每条边一次且仅一次，称此回路为欧拉回路。称此图为欧拉图,或E图.(Euler)</li></ol><h3 id="汉密尔顿图-h图" tabindex="-1"><a class="header-anchor" href="#汉密尔顿图-h图"><span>汉密尔顿图 H图</span></a></h3><ol><li><p>汉密尔顿路：通过G中每个结点恰好一次的路。</p></li><li><p>汉密尔顿回路(H回路)：通过G中每个结点恰好一次的回路。</p></li><li><p>汉密尔顿图(H图)：具有汉密尔顿回路(H回路)的图。</p></li></ol><h2 id="二部图" tabindex="-1"><a class="header-anchor" href="#二部图"><span>二部图</span></a></h2><h2 id="平面图" tabindex="-1"><a class="header-anchor" href="#平面图"><span>平面图</span></a></h2><h2 id="对偶图与着色" tabindex="-1"><a class="header-anchor" href="#对偶图与着色"><span>对偶图与着色</span></a></h2><p>树与生成树</p><p>根树</p>',57)]))}const d=a(p,[["render",n],["__file","6. 图论.html.vue"]]),c=JSON.parse(`{"path":"/education/bs/discrete-math/6.%20%E5%9B%BE%E8%AE%BA.html","title":"图论","lang":"en-US","frontmatter":{"description":"图论 图的概念 结点 vertices 边 Edges 环 自环：a->a 平凡环：a->b, b->a 平行边：关联于同一对结点的若干条边 有向图：只有有向边的图。 无向图：只有无向边的图。 简单图：不含有环和平行边的图。 多重图：含有平行边的图。 无权图：边长均为1 带权图： 度 路的概念 路：其中ei是关联vi-1 ,vi的边, 则称结点和边的交...","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/education/bs/discrete-math/6.%20%E5%9B%BE%E8%AE%BA.html"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"图论"}],["meta",{"property":"og:description","content":"图论 图的概念 结点 vertices 边 Edges 环 自环：a->a 平凡环：a->b, b->a 平行边：关联于同一对结点的若干条边 有向图：只有有向边的图。 无向图：只有无向边的图。 简单图：不含有环和平行边的图。 多重图：含有平行边的图。 无权图：边长均为1 带权图： 度 路的概念 路：其中ei是关联vi-1 ,vi的边, 则称结点和边的交..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-11-09T03:55:12.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-09T03:55:12.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"图论\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-09T03:55:12.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[{"level":2,"title":"图的概念","slug":"图的概念","link":"#图的概念","children":[]},{"level":2,"title":"路的概念","slug":"路的概念","link":"#路的概念","children":[]},{"level":2,"title":"连通性","slug":"连通性","link":"#连通性","children":[{"level":3,"title":"无向图的连通性","slug":"无向图的连通性","link":"#无向图的连通性","children":[]},{"level":3,"title":"有向图的连通性","slug":"有向图的连通性","link":"#有向图的连通性","children":[]}]},{"level":2,"title":"割集 (Cut Set)","slug":"割集-cut-set","link":"#割集-cut-set","children":[]},{"level":2,"title":"图的表示","slug":"图的表示","link":"#图的表示","children":[{"level":3,"title":"矩阵","slug":"矩阵","link":"#矩阵","children":[]}]},{"level":2,"title":"最短路和关键路径","slug":"最短路和关键路径","link":"#最短路和关键路径","children":[]},{"level":2,"title":"欧拉图、汉密尔顿图","slug":"欧拉图、汉密尔顿图","link":"#欧拉图、汉密尔顿图","children":[{"level":3,"title":"欧拉图 E图(Euler)","slug":"欧拉图-e图-euler","link":"#欧拉图-e图-euler","children":[]},{"level":3,"title":"汉密尔顿图 H图","slug":"汉密尔顿图-h图","link":"#汉密尔顿图-h图","children":[]}]},{"level":2,"title":"二部图","slug":"二部图","link":"#二部图","children":[]},{"level":2,"title":"平面图","slug":"平面图","link":"#平面图","children":[]},{"level":2,"title":"对偶图与着色","slug":"对偶图与着色","link":"#对偶图与着色","children":[]}],"git":{"createdTime":1703688112000,"updatedTime":1731124512000,"contributors":[{"name":"刘大维","email":"davidliu@liudaweideMacBook-Pro-3.local","commits":1}]},"readingTime":{"minutes":3.74,"words":1122},"filePathRelative":"education/bs/discrete-math/6. 图论.md","localizedDate":"December 27, 2023","excerpt":"\\n<h2>图的概念</h2>\\n<p>结点 vertices</p>\\n<p>边 Edges</p>\\n<p>环</p>\\n<ul>\\n<li>自环：a-&gt;a</li>\\n<li>平凡环：a-&gt;b, b-&gt;a</li>\\n</ul>\\n<p>平行边：关联于同一对结点的若干条边</p>\\n<p>有向图：只有有向边的图。</p>\\n<p>无向图：只有无向边的图。</p>\\n<p>简单图：不含有环和平行边的图。</p>\\n<p>多重图：含有平行边的图。</p>\\n<p>无权图：边长均为1</p>\\n<p>带权图：</p>\\n<p>度</p>\\n<h2>路的概念</h2>\\n<p>路：其中ei是关联vi-1 ,vi的边, 则称结点和边的交叉序列</p>","autoDesc":true}`);export{d as comp,c as data};
