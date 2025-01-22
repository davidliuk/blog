import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,d as i,o as l}from"./app-ktFCNIob.js";const n={};function r(d,e){return l(),a("div",null,e[0]||(e[0]=[i('<h1 id="线索" tabindex="-1"><a class="header-anchor" href="#线索"><span>线索</span></a></h1><p>分析线索主要有如下四类：</p><ul><li>递推</li><li>分类</li><li>有序</li><li>收敛</li></ul><h2 id="收敛" tabindex="-1"><a class="header-anchor" href="#收敛"><span>收敛</span></a></h2><h3 id="性质" tabindex="-1"><a class="header-anchor" href="#性质"><span>性质</span></a></h3><ol><li>单调：严格单调递增或单调递减</li><li>有界：有明确上界或者下界</li></ol><p>逐级递减，可选状态空间逐级减少</p><p>出现位置</p><ul><li><p>排列，每次能选的少一个</p></li><li><p>环图，设置单调收敛变量，保证每个节点只能被访问一次</p><p>如 hashmap 的 visited</p></li></ul><h3 id="优化" tabindex="-1"><a class="header-anchor" href="#优化"><span>优化</span></a></h3><h2 id="有序" tabindex="-1"><a class="header-anchor" href="#有序"><span>有序</span></a></h2><h2 id="递推" tabindex="-1"><a class="header-anchor" href="#递推"><span>递推</span></a></h2><p>只要DFS、BFS存在的地方都有递推</p><table><thead><tr><th>核心概念</th><th>简单解释</th></tr></thead><tbody><tr><td>状态：状态定义</td><td>由实体状态和限制状态组成</td></tr><tr><td>边界：边界节点</td><td>边界节点 → 不依赖于任何状态点的已知点</td></tr><tr><td>递推：递推公式</td><td>不同节点的递推公式可以不同！！！</td></tr><tr><td>方向：拓扑排序</td><td>拓扑排序的方向确定</td></tr></tbody></table><h2 id="分类" tabindex="-1"><a class="header-anchor" href="#分类"><span>分类</span></a></h2><p>树：分类结构，可以根据不同维度进行分类，并且类别不能重合</p><p>在动规的地方详细讲解</p>',17)]))}const s=t(n,[["render",r],["__file","index.html.vue"]]),h=JSON.parse(`{"path":"/algo/framework/clues/","title":"线索","lang":"en-US","frontmatter":{"description":"线索 分析线索主要有如下四类： 递推 分类 有序 收敛 收敛 性质 单调：严格单调递增或单调递减 有界：有明确上界或者下界 逐级递减，可选状态空间逐级减少 出现位置 排列，每次能选的少一个 环图，设置单调收敛变量，保证每个节点只能被访问一次 如 hashmap 的 visited 优化 有序 递推 只要DFS、BFS存在的地方都有递推 分类 树：分类结...","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/algo/framework/clues/"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"线索"}],["meta",{"property":"og:description","content":"线索 分析线索主要有如下四类： 递推 分类 有序 收敛 收敛 性质 单调：严格单调递增或单调递减 有界：有明确上界或者下界 逐级递减，可选状态空间逐级减少 出现位置 排列，每次能选的少一个 环图，设置单调收敛变量，保证每个节点只能被访问一次 如 hashmap 的 visited 优化 有序 递推 只要DFS、BFS存在的地方都有递推 分类 树：分类结..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-11-22T03:05:37.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-22T03:05:37.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"线索\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-22T03:05:37.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[{"level":2,"title":"收敛","slug":"收敛","link":"#收敛","children":[{"level":3,"title":"性质","slug":"性质","link":"#性质","children":[]},{"level":3,"title":"优化","slug":"优化","link":"#优化","children":[]}]},{"level":2,"title":"有序","slug":"有序","link":"#有序","children":[]},{"level":2,"title":"递推","slug":"递推","link":"#递推","children":[]},{"level":2,"title":"分类","slug":"分类","link":"#分类","children":[]}],"git":{"createdTime":1732244737000,"updatedTime":1732244737000,"contributors":[{"name":"David Liu","email":"liudawei@seas.upenn.edu","commits":1}]},"readingTime":{"minutes":0.82,"words":245},"filePathRelative":"algo/framework/clues/README.md","localizedDate":"November 22, 2024","excerpt":"\\n<p>分析线索主要有如下四类：</p>\\n<ul>\\n<li>递推</li>\\n<li>分类</li>\\n<li>有序</li>\\n<li>收敛</li>\\n</ul>\\n<h2>收敛</h2>\\n<h3>性质</h3>\\n<ol>\\n<li>单调：严格单调递增或单调递减</li>\\n<li>有界：有明确上界或者下界</li>\\n</ol>\\n<p>逐级递减，可选状态空间逐级减少</p>\\n<p>出现位置</p>\\n<ul>\\n<li>\\n<p>排列，每次能选的少一个</p>\\n</li>\\n<li>\\n<p>环图，设置单调收敛变量，保证每个节点只能被访问一次</p>\\n<p>如 hashmap 的 visited</p>\\n</li>\\n</ul>","autoDesc":true}`);export{s as comp,h as data};