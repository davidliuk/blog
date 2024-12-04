import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as t,d,o as s}from"./app-D4ZvIHfO.js";const a={};function o(r,e){return s(),t("div",null,e[0]||(e[0]=[d('<h1 id="_0-1-bfs" tabindex="-1"><a class="header-anchor" href="#_0-1-bfs"><span>0/1 BFS</span></a></h1><p>在任何情况下，队列中只会含有 dis 值为 d 和 d+1 的点，且 dis 值为 d 的点一定排在值为 d+1 的点前面（这个叫 BFS 的两段性）。</p><ul><li>对于边权为 0 的边 x→y，如果 dis[x]&lt;dis[y]，更新 dis[y]=dis[x]，把 y 加到队首。</li><li>对于边权为 1 的边 x→y，如果 dis[x]+1&lt;dis[y]，更新 dis[y]=dis[x]+1，把 y 加到队尾。</li></ul><p>问：为什么代码中没有使用 visit 数组？</p><p>答：第一个点出队后，更新邻居的 dis；等到第二个点出队时，由于邻居的 dis 已经更新过，它必不能更新邻居的 dis 值，无法产生任何影响，所以 visit 数组是多余的。</p><p>Dijkstra 算法也可以不要 visit 数组，在出堆时判断下，如果堆中存的 dis 超过了实际的 dis 值，可以直接 continue。</p><ul><li><a href="https://leetcode.cn/problems/minimum-cost-to-make-at-least-one-valid-path-in-a-grid/" target="_blank" rel="noopener noreferrer">1368. 使网格图至少有一条有效路径的最小代价</a></li><li><a href="https://leetcode.cn/problems/minimum-obstacle-removal-to-reach-corner/" target="_blank" rel="noopener noreferrer">2290. 到达角落需要移除障碍物的最小数目</a></li></ul>',7)]))}const p=i(a,[["render",o],["__file","01bfs.html.vue"]]),c=JSON.parse(`{"path":"/algo/summary/search/BFS/01bfs.html","title":"0/1 BFS","lang":"en-US","frontmatter":{"description":"0/1 BFS 在任何情况下，队列中只会含有 dis 值为 d 和 d+1 的点，且 dis 值为 d 的点一定排在值为 d+1 的点前面（这个叫 BFS 的两段性）。 对于边权为 0 的边 x→y，如果 dis[x]<dis[y]，更新 dis[y]=dis[x]，把 y 加到队首。 对于边权为 1 的边 x→y，如果 dis[x]+1<dis[y]...","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/algo/summary/search/BFS/01bfs.html"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"0/1 BFS"}],["meta",{"property":"og:description","content":"0/1 BFS 在任何情况下，队列中只会含有 dis 值为 d 和 d+1 的点，且 dis 值为 d 的点一定排在值为 d+1 的点前面（这个叫 BFS 的两段性）。 对于边权为 0 的边 x→y，如果 dis[x]<dis[y]，更新 dis[y]=dis[x]，把 y 加到队首。 对于边权为 1 的边 x→y，如果 dis[x]+1<dis[y]..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-12-04T01:12:41.000Z"}],["meta",{"property":"article:modified_time","content":"2024-12-04T01:12:41.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"0/1 BFS\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-12-04T01:12:41.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[],"git":{"createdTime":1733274761000,"updatedTime":1733274761000,"contributors":[{"name":"刘大维","email":"davidliu@liudaweideMacBook-Pro-3.local","commits":1}]},"readingTime":{"minutes":0.93,"words":279},"filePathRelative":"algo/summary/search/BFS/01bfs.md","localizedDate":"December 4, 2024","excerpt":"\\n<p>在任何情况下，队列中只会含有 dis 值为 d 和 d+1 的点，且 dis 值为 d 的点一定排在值为 d+1 的点前面（这个叫 BFS 的两段性）。</p>\\n<ul>\\n<li>对于边权为 0 的边 x→y，如果 dis[x]&lt;dis[y]，更新 dis[y]=dis[x]，把 y 加到队首。</li>\\n<li>对于边权为 1 的边 x→y，如果 dis[x]+1&lt;dis[y]，更新 dis[y]=dis[x]+1，把 y 加到队尾。</li>\\n</ul>\\n<p>问：为什么代码中没有使用 visit 数组？</p>\\n<p>答：第一个点出队后，更新邻居的 dis；等到第二个点出队时，由于邻居的 dis 已经更新过，它必不能更新邻居的 dis 值，无法产生任何影响，所以 visit 数组是多余的。</p>","autoDesc":true}`);export{p as comp,c as data};
