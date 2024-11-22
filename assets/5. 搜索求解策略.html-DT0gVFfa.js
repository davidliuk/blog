import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as t,d as n,o as i}from"./app-C8HRrJwL.js";const p={};function l(s,a){return i(),t("div",null,a[0]||(a[0]=[n('<h2 id="搜索的概念" tabindex="-1"><a class="header-anchor" href="#搜索的概念"><span>搜索的概念</span></a></h2><p>搜索中需要解决的基本问题：</p><p>（1）是否一定能找到一个解。<br> （2）找到的解是否是最佳解。<br> （3）时间与空间复杂性如何。<br> （4）是否终止运行或是否会陷入一个死循环。</p><p>搜索策略</p><p>（1）育目搜索：在不具有对特定问题的任何有关信息的条件下，按固定的步骤（依次或随机调用操作算子）进行的搜索。</p><p>（2）启发式搜索：考虑特定问题领域可应用的知识，动态地确定调用操作算子的步骤，优先选择较适合的操作算子，尽量减少不必要的搜索，以求尽快地到达结束状态。</p><h2 id="状态空间的搜索策略" tabindex="-1"><a class="header-anchor" href="#状态空间的搜索策略"><span>状态空间的搜索策略</span></a></h2><h3 id="状态空间的表示法" tabindex="-1"><a class="header-anchor" href="#状态空间的表示法"><span>状态空间的表示法</span></a></h3><h3 id="状态空间的图描述" tabindex="-1"><a class="header-anchor" href="#状态空间的图描述"><span>状态空间的图描述</span></a></h3><p>eg. 旅行商问题，最短哈密尔顿回路</p><h2 id="盲目的图搜索策略" tabindex="-1"><a class="header-anchor" href="#盲目的图搜索策略"><span>盲目的图搜索策略</span></a></h2><h3 id="回溯策略" tabindex="-1"><a class="header-anchor" href="#回溯策略"><span>回溯策略</span></a></h3><p>PS(path states)表：保存当前搜索路径上的状态。如果找到了目的</p><p>NPS(new path states)表：</p><p>NSS(no solvable states)表：</p><p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/截屏2022-09-24 12.26.36.png" alt="截屏2022-09-24 12.26.36" loading="lazy"></p><p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/截屏2022-09-24 12.23.46.png" alt="截屏2022-09-24 12.23.46" loading="lazy"></p><h3 id="宽度优先搜索策略" tabindex="-1"><a class="header-anchor" href="#宽度优先搜索策略"><span>宽度优先搜索策略</span></a></h3><p>宽度优先搜索(breadth-first search，广度优先搜索)：以接近起始节点的程度（深度）为依据，进行逐层扩展的节点搜索方法。</p><h3 id="深度优先搜索策略" tabindex="-1"><a class="header-anchor" href="#深度优先搜索策略"><span>深度优先搜索策略</span></a></h3><h2 id="启发式搜索策略" tabindex="-1"><a class="header-anchor" href="#启发式搜索策略"><span>启发式搜索策略</span></a></h2><p>启发式图搜索策略：重排OPEN表</p><p>种类：A，A*</p><p>问题简单时，不需要用启发式信息</p><p>使用启发式的情况：</p><ul><li><p>一个问题由于存在问题陈述和数据获取的模糊性，可能会使他没有一个确定的解</p></li><li><p>指数级增长的情况，如 TPS</p><p>井字棋</p></li></ul><p>h(n)启发函数：</p><p>A*算法：启发函数h(x)小于等于h*(n)时，被称为A*算法</p><p>如果某问题有解，则利用A*一定可以搜索到最优解</p><h2 id="最短路径算法" tabindex="-1"><a class="header-anchor" href="#最短路径算法"><span>最短路径算法</span></a></h2><p>单源最短路最好的算法，稳定最短路</p><p>迪杰斯特拉</p><p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/截屏2022-09-30 16.20.53.png" alt="截屏2022-09-30 16.20.53" loading="lazy"></p><p>需要堆结构</p><p>类似Prim</p><p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/截屏2022-09-30 16.30.51.png" alt="截屏2022-09-30 16.30.51" loading="lazy"></p><p>缺点：不适用于有负权值的带权图</p>',37)]))}const c=e(p,[["render",l],["__file","5. 搜索求解策略.html.vue"]]),r=JSON.parse(`{"path":"/education/bs/ai-intro/5.%20%E6%90%9C%E7%B4%A2%E6%B1%82%E8%A7%A3%E7%AD%96%E7%95%A5.html","title":"","lang":"en-US","frontmatter":{"description":"搜索的概念 搜索中需要解决的基本问题： （1）是否一定能找到一个解。 （2）找到的解是否是最佳解。 （3）时间与空间复杂性如何。 （4）是否终止运行或是否会陷入一个死循环。 搜索策略 （1）育目搜索：在不具有对特定问题的任何有关信息的条件下，按固定的步骤（依次或随机调用操作算子）进行的搜索。 （2）启发式搜索：考虑特定问题领域可应用的知识，动态地确定调...","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/education/bs/ai-intro/5.%20%E6%90%9C%E7%B4%A2%E6%B1%82%E8%A7%A3%E7%AD%96%E7%95%A5.html"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:description","content":"搜索的概念 搜索中需要解决的基本问题： （1）是否一定能找到一个解。 （2）找到的解是否是最佳解。 （3）时间与空间复杂性如何。 （4）是否终止运行或是否会陷入一个死循环。 搜索策略 （1）育目搜索：在不具有对特定问题的任何有关信息的条件下，按固定的步骤（依次或随机调用操作算子）进行的搜索。 （2）启发式搜索：考虑特定问题领域可应用的知识，动态地确定调..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/%E6%88%AA%E5%B1%8F2022-09-24%2012.26.36.png"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-11-22T02:28:03.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-22T02:28:03.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/%E6%88%AA%E5%B1%8F2022-09-24%2012.26.36.png\\",\\"https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/%E6%88%AA%E5%B1%8F2022-09-24%2012.23.46.png\\",\\"https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/%E6%88%AA%E5%B1%8F2022-09-30%2016.20.53.png\\",\\"https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/%E6%88%AA%E5%B1%8F2022-09-30%2016.30.51.png\\"],\\"dateModified\\":\\"2024-11-22T02:28:03.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[{"level":2,"title":"搜索的概念","slug":"搜索的概念","link":"#搜索的概念","children":[]},{"level":2,"title":"状态空间的搜索策略","slug":"状态空间的搜索策略","link":"#状态空间的搜索策略","children":[{"level":3,"title":"状态空间的表示法","slug":"状态空间的表示法","link":"#状态空间的表示法","children":[]},{"level":3,"title":"状态空间的图描述","slug":"状态空间的图描述","link":"#状态空间的图描述","children":[]}]},{"level":2,"title":"盲目的图搜索策略","slug":"盲目的图搜索策略","link":"#盲目的图搜索策略","children":[{"level":3,"title":"回溯策略","slug":"回溯策略","link":"#回溯策略","children":[]},{"level":3,"title":"宽度优先搜索策略","slug":"宽度优先搜索策略","link":"#宽度优先搜索策略","children":[]},{"level":3,"title":"深度优先搜索策略","slug":"深度优先搜索策略","link":"#深度优先搜索策略","children":[]}]},{"level":2,"title":"启发式搜索策略","slug":"启发式搜索策略","link":"#启发式搜索策略","children":[]},{"level":2,"title":"最短路径算法","slug":"最短路径算法","link":"#最短路径算法","children":[]}],"git":{"createdTime":1700646963000,"updatedTime":1732242483000,"contributors":[{"name":"David Liu","email":"liudawei@seas.upenn.edu","commits":1},{"name":"刘大维","email":"davidliu@liudaweideMacBook-Pro-3.local","commits":1}]},"readingTime":{"minutes":1.99,"words":598},"filePathRelative":"education/bs/ai-intro/5. 搜索求解策略.md","localizedDate":"November 22, 2023","excerpt":"<h2>搜索的概念</h2>\\n<p>搜索中需要解决的基本问题：</p>\\n<p>（1）是否一定能找到一个解。<br>\\n（2）找到的解是否是最佳解。<br>\\n（3）时间与空间复杂性如何。<br>\\n（4）是否终止运行或是否会陷入一个死循环。</p>\\n<p>搜索策略</p>\\n<p>（1）育目搜索：在不具有对特定问题的任何有关信息的条件下，按固定的步骤（依次或随机调用操作算子）进行的搜索。</p>\\n<p>（2）启发式搜索：考虑特定问题领域可应用的知识，动态地确定调用操作算子的步骤，优先选择较适合的操作算子，尽量减少不必要的搜索，以求尽快地到达结束状态。</p>\\n<h2>状态空间的搜索策略</h2>\\n<h3>状态空间的表示法</h3>","autoDesc":true}`);export{c as comp,r as data};
