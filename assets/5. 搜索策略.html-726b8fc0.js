const e=JSON.parse(`{"key":"v-32cfd613","path":"/course/ai-tech/5.%20%E6%90%9C%E7%B4%A2%E7%AD%96%E7%95%A5.html","title":"搜索求解策略","lang":"en-US","frontmatter":{"description":"搜索求解策略 搜索的概念 搜索中需要解决的基本问题： 是否一定能找到一个解。 找到的解是否是最佳解。 时间与空间复杂性如何。 是否终止运行或是否会陷入一个死循环。 搜索策略 育目搜索：在不具有对特定问题的任何有关信息的条件下，按固定的步骤依次或随机调用操作算子) 进行的搜索。 启发式搜索：考虑特定问题领域可应用的知识，动态地确定调用操作算子的步骤，优先选择较适合的操作算子，尽量减少不必要的搜索，以求尽快地到达结束状态。","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/course/ai-tech/5.%20%E6%90%9C%E7%B4%A2%E7%AD%96%E7%95%A5.html"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"搜索求解策略"}],["meta",{"property":"og:description","content":"搜索求解策略 搜索的概念 搜索中需要解决的基本问题： 是否一定能找到一个解。 找到的解是否是最佳解。 时间与空间复杂性如何。 是否终止运行或是否会陷入一个死循环。 搜索策略 育目搜索：在不具有对特定问题的任何有关信息的条件下，按固定的步骤依次或随机调用操作算子) 进行的搜索。 启发式搜索：考虑特定问题领域可应用的知识，动态地确定调用操作算子的步骤，优先选择较适合的操作算子，尽量减少不必要的搜索，以求尽快地到达结束状态。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-11-22T09:56:03.000Z"}],["meta",{"property":"article:author","content":"David Liu"}],["meta",{"property":"article:modified_time","content":"2023-11-22T09:56:03.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"搜索求解策略\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-11-22T09:56:03.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[{"level":2,"title":"搜索的概念","slug":"搜索的概念","link":"#搜索的概念","children":[]},{"level":2,"title":"状态空间的搜索策略","slug":"状态空间的搜索策略","link":"#状态空间的搜索策略","children":[{"level":3,"title":"状态空间的表示法","slug":"状态空间的表示法","link":"#状态空间的表示法","children":[]},{"level":3,"title":"状态空间的图描述","slug":"状态空间的图描述","link":"#状态空间的图描述","children":[]}]},{"level":2,"title":"盲目的图搜索策略","slug":"盲目的图搜索策略","link":"#盲目的图搜索策略","children":[{"level":3,"title":"回溯策略","slug":"回溯策略","link":"#回溯策略","children":[]},{"level":3,"title":"宽度优先搜索策略","slug":"宽度优先搜索策略","link":"#宽度优先搜索策略","children":[]},{"level":3,"title":"深度优先搜索策略","slug":"深度优先搜索策略","link":"#深度优先搜索策略","children":[]}]},{"level":2,"title":"启发式搜索策略","slug":"启发式搜索策略","link":"#启发式搜索策略","children":[]},{"level":2,"title":"最短路径算法","slug":"最短路径算法","link":"#最短路径算法","children":[]}],"git":{"createdTime":1700646963000,"updatedTime":1700646963000,"contributors":[{"name":"davidliu","email":"liudawei47@jd.com","commits":1}]},"readingTime":{"minutes":2.03,"words":609},"filePathRelative":"course/ai-tech/5. 搜索策略.md","localizedDate":"November 22, 2023","excerpt":"<h1> 搜索求解策略</h1>\\n<h2> 搜索的概念</h2>\\n<p>搜索中需要解决的基本问题：</p>\\n<ol>\\n<li>是否一定能找到一个解。</li>\\n<li>找到的解是否是最佳解。</li>\\n<li>时间与空间复杂性如何。</li>\\n<li>是否终止运行或是否会陷入一个死循环。</li>\\n</ol>\\n<p>搜索策略</p>\\n<ol>\\n<li>\\n<p>育目搜索：在不具有对特定问题的任何有关信息的条件下，按固定的步骤依次或随机调用操作算子) 进行的搜索。</p>\\n</li>\\n<li>\\n<p>启发式搜索：考虑特定问题领域可应用的知识，动态地确定调用操作算子的步骤，优先选择较适合的操作算子，尽量减少不必要的搜索，以求尽快地到达结束状态。</p>\\n</li>\\n</ol>","autoDesc":true}`);export{e as data};
