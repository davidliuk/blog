import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as p,d as a,o}from"./app-D4ZvIHfO.js";const r={};function i(n,e){return o(),p("div",null,e[0]||(e[0]=[a('<h1 id="多阶段决策" tabindex="-1"><a class="header-anchor" href="#多阶段决策"><span>多阶段决策</span></a></h1><p>回溯法中，每次决策对应于给一个结点产生新的子树，而解的生成过程对应一颗解答树，结点的层数就是“下一个待填充位置”cur</p><p>隐式图：有些问题的图不是事先给的，而是程序动态生成的</p><p>eg. 路径寻找问题，可以归结为隐式图的遍历</p><p>隐式图搜索、产生式系统</p><hr><p>多阶段决策问题：每做一次决策就可以得到解的一部分，当所有决策做完之后，完整的解就浮出水面了（之前在回溯法中提过）</p><p>多段图：特殊的DAG，其结点可以划分为若干个阶段，每个阶段只由上一个阶段所决定。</p><p>单向TSP：阶段是列，每一列是一个阶段，每个阶段三种决策：直行右上、右下</p><p>0-1背包问题</p><p>完全背包问题：带权DAG（等于硬币兑换）</p><p>可以滚动数组第一维度</p><p>阶段定义了天然的计算顺序</p>',13)]))}const d=t(r,[["render",i],["__file","多阶段决策.html.vue"]]),s=JSON.parse(`{"path":"/algo/summary/optimise/dynamic-programming/%E7%90%86%E8%AE%BA/%E5%A4%9A%E9%98%B6%E6%AE%B5%E5%86%B3%E7%AD%96.html","title":"多阶段决策","lang":"en-US","frontmatter":{"description":"多阶段决策 回溯法中，每次决策对应于给一个结点产生新的子树，而解的生成过程对应一颗解答树，结点的层数就是“下一个待填充位置”cur 隐式图：有些问题的图不是事先给的，而是程序动态生成的 eg. 路径寻找问题，可以归结为隐式图的遍历 隐式图搜索、产生式系统 多阶段决策问题：每做一次决策就可以得到解的一部分，当所有决策做完之后，完整的解就浮出水面了（之前在...","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/algo/summary/optimise/dynamic-programming/%E7%90%86%E8%AE%BA/%E5%A4%9A%E9%98%B6%E6%AE%B5%E5%86%B3%E7%AD%96.html"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"多阶段决策"}],["meta",{"property":"og:description","content":"多阶段决策 回溯法中，每次决策对应于给一个结点产生新的子树，而解的生成过程对应一颗解答树，结点的层数就是“下一个待填充位置”cur 隐式图：有些问题的图不是事先给的，而是程序动态生成的 eg. 路径寻找问题，可以归结为隐式图的遍历 隐式图搜索、产生式系统 多阶段决策问题：每做一次决策就可以得到解的一部分，当所有决策做完之后，完整的解就浮出水面了（之前在..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-11-22T03:05:37.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-22T03:05:37.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"多阶段决策\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-22T03:05:37.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[],"git":{"createdTime":1732244737000,"updatedTime":1732244737000,"contributors":[{"name":"David Liu","email":"liudawei@seas.upenn.edu","commits":1}]},"readingTime":{"minutes":0.89,"words":266},"filePathRelative":"algo/summary/optimise/dynamic-programming/理论/多阶段决策.md","localizedDate":"November 22, 2024","excerpt":"\\n<p>回溯法中，每次决策对应于给一个结点产生新的子树，而解的生成过程对应一颗解答树，结点的层数就是“下一个待填充位置”cur</p>\\n<p>隐式图：有些问题的图不是事先给的，而是程序动态生成的</p>\\n<p>eg. 路径寻找问题，可以归结为隐式图的遍历</p>\\n<p>隐式图搜索、产生式系统</p>\\n<hr>\\n<p>多阶段决策问题：每做一次决策就可以得到解的一部分，当所有决策做完之后，完整的解就浮出水面了（之前在回溯法中提过）</p>\\n<p>多段图：特殊的DAG，其结点可以划分为若干个阶段，每个阶段只由上一个阶段所决定。</p>\\n<p>单向TSP：阶段是列，每一列是一个阶段，每个阶段三种决策：直行右上、右下</p>","autoDesc":true}`);export{d as comp,s as data};
