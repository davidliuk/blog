import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as t,d as o,o as a}from"./app-CrF8c6p-.js";const p={};function n(r,i){return a(),t("div",null,i[0]||(i[0]=[o('<h1 id="dag" tabindex="-1"><a class="header-anchor" href="#dag"><span>DAG</span></a></h1><p>DAG是DP的基础，很多问题都可以转化为DAG上的最长路、最短路或路径计数问题。</p><p>二元关系可以用图来建模。</p><p>嵌套矩阵问题：可嵌套可以用有向边</p><p>DAG最长/短路有两种“对称”的状态定义方式：</p><ol><li><code>f[i]</code>为从i出发的最长路，则<code>f[i]=max{f[j]+1|(i,j)in E}</code></li><li><code>f[i]</code>为以i结束的最短路，则<code>f[i]=max{f[j]+1|(j,i)in E}</code></li></ol><p>主要是用状态2，状态1比较麻烦，有的时候会有一些坑，不推荐使用</p><p>使用状态2时，有时还会遇到一个问题：状态转移方程可能可能不好计算，因为很多时候可以很方便枚举从i出发的所有边(i,j)，却不方便反着枚举(j,i)。特别是在有些题目中，这些边有明显的实际背景，对应的过程不可逆。</p><p>这时候需要用“刷表法”</p><p>“填表法”：对于每个状态i，找到f[i]依赖的所有状态</p><p>“刷表法”：对于每个状态i，更新f[i]影响的所有状态</p><p>对应到DAG中，相当于按照拓扑排序枚举i，对于i枚举出边，更新j</p><ul><li>记忆化搜索的备忘录往往是状态1的定义方式，因为自底向上</li><li>迭代的写法，一般采用状态2</li></ul>',13)]))}const d=e(p,[["render",n],["__file","DAG.html.vue"]]),l=JSON.parse(`{"path":"/algo/summary/optimise/dynamic-programming/%E7%90%86%E8%AE%BA/DAG.html","title":"DAG","lang":"en-US","frontmatter":{"description":"DAG DAG是DP的基础，很多问题都可以转化为DAG上的最长路、最短路或路径计数问题。 二元关系可以用图来建模。 嵌套矩阵问题：可嵌套可以用有向边 DAG最长/短路有两种“对称”的状态定义方式： f[i]为从i出发的最长路，则f[i]=max{f[j]+1|(i,j)in E} f[i]为以i结束的最短路，则f[i]=max{f[j]+1|(j,i)...","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/algo/summary/optimise/dynamic-programming/%E7%90%86%E8%AE%BA/DAG.html"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"DAG"}],["meta",{"property":"og:description","content":"DAG DAG是DP的基础，很多问题都可以转化为DAG上的最长路、最短路或路径计数问题。 二元关系可以用图来建模。 嵌套矩阵问题：可嵌套可以用有向边 DAG最长/短路有两种“对称”的状态定义方式： f[i]为从i出发的最长路，则f[i]=max{f[j]+1|(i,j)in E} f[i]为以i结束的最短路，则f[i]=max{f[j]+1|(j,i)..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-11-22T03:05:37.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-22T03:05:37.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"DAG\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-22T03:05:37.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[],"git":{"createdTime":1732244737000,"updatedTime":1732244737000,"contributors":[{"name":"David Liu","email":"liudawei@seas.upenn.edu","commits":1}]},"readingTime":{"minutes":1.19,"words":358},"filePathRelative":"algo/summary/optimise/dynamic-programming/理论/DAG.md","localizedDate":"November 22, 2024","excerpt":"\\n<p>DAG是DP的基础，很多问题都可以转化为DAG上的最长路、最短路或路径计数问题。</p>\\n<p>二元关系可以用图来建模。</p>\\n<p>嵌套矩阵问题：可嵌套可以用有向边</p>\\n<p>DAG最长/短路有两种“对称”的状态定义方式：</p>\\n<ol>\\n<li><code>f[i]</code>为从i出发的最长路，则<code>f[i]=max{f[j]+1|(i,j)in E}</code></li>\\n<li><code>f[i]</code>为以i结束的最短路，则<code>f[i]=max{f[j]+1|(j,i)in E}</code></li>\\n</ol>\\n<p>主要是用状态2，状态1比较麻烦，有的时候会有一些坑，不推荐使用</p>","autoDesc":true}`);export{d as comp,l as data};
