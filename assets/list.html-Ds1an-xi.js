import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as t,d as l,o}from"./app-PqS9YW_3.js";const p={};function a(n,e){return o(),t("div",null,e[0]||(e[0]=[l('<h1 id="list-类型" tabindex="-1"><a class="header-anchor" href="#list-类型"><span>List 类型</span></a></h1><p>类似 LinkedList，可以看做一个双向链表</p><p>特征：</p><ul><li>有序</li><li>元素可以重复</li><li>插入和删除快</li><li>查询速度一般</li></ul><p>常用来存储一个有序数据，例如：朋友圈点赞列表，评论列表等。</p><h2 id="常见命令" tabindex="-1"><a class="header-anchor" href="#常见命令"><span>常见命令</span></a></h2><ul><li><code>lpush</code> 向列表左侧插入一个或多个元素</li><li><code>lpop</code> 移除并返回列表左侧的第一个</li><li><code>rpush</code> 向列表右侧插入一个或多个元素</li><li><code>rpop</code> 移除并返回列表右侧的第一个元素</li><li><code>Lrange</code> key start end</li><li><code>BLPOP</code> 会阻塞指定时间，等到有元素了再 pop</li><li><code>BRPOP</code> 会阻塞指定时间</li></ul><p>如何利用 List 结构模拟一个栈?</p><ul><li>入口和出口在同一边</li></ul><p>如何利用 List 结构模拟一个队列?</p><ul><li>入口和出口在不同边</li></ul><p>如何利用 List 结构模拟一个阻塞队列?</p><ul><li>入口和出口在不同边</li><li>出队时采用 BLPOP 或 BRPOP</li></ul>',13)]))}const s=i(p,[["render",a],["__file","list.html.vue"]]),r=JSON.parse(`{"path":"/cs/database/redis/commands/list.html","title":"List 类型","lang":"en-US","frontmatter":{"description":"List 类型 类似 LinkedList，可以看做一个双向链表 特征： 有序 元素可以重复 插入和删除快 查询速度一般 常用来存储一个有序数据，例如：朋友圈点赞列表，评论列表等。 常见命令 lpush 向列表左侧插入一个或多个元素 lpop 移除并返回列表左侧的第一个 rpush 向列表右侧插入一个或多个元素 rpop 移除并返回列表右侧的第一个元素...","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/cs/database/redis/commands/list.html"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"List 类型"}],["meta",{"property":"og:description","content":"List 类型 类似 LinkedList，可以看做一个双向链表 特征： 有序 元素可以重复 插入和删除快 查询速度一般 常用来存储一个有序数据，例如：朋友圈点赞列表，评论列表等。 常见命令 lpush 向列表左侧插入一个或多个元素 lpop 移除并返回列表左侧的第一个 rpush 向列表右侧插入一个或多个元素 rpop 移除并返回列表右侧的第一个元素..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-03-29T11:46:59.000Z"}],["meta",{"property":"article:modified_time","content":"2023-03-29T11:46:59.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"List 类型\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-03-29T11:46:59.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[{"level":2,"title":"常见命令","slug":"常见命令","link":"#常见命令","children":[]}],"git":{"createdTime":1669996395000,"updatedTime":1680090419000,"contributors":[{"name":"davidliuk","email":"l729641074@163.com","commits":2},{"name":"DavidLiu","email":"l729641074@163.com","commits":1}]},"readingTime":{"minutes":0.77,"words":230},"filePathRelative":"cs/database/redis/commands/list.md","localizedDate":"December 2, 2022","excerpt":"\\n<p>类似 LinkedList，可以看做一个双向链表</p>\\n<p>特征：</p>\\n<ul>\\n<li>有序</li>\\n<li>元素可以重复</li>\\n<li>插入和删除快</li>\\n<li>查询速度一般</li>\\n</ul>\\n<p>常用来存储一个有序数据，例如：朋友圈点赞列表，评论列表等。</p>\\n<h2>常见命令</h2>\\n<ul>\\n<li><code>lpush</code> 向列表左侧插入一个或多个元素</li>\\n<li><code>lpop</code> 移除并返回列表左侧的第一个</li>\\n<li><code>rpush</code> 向列表右侧插入一个或多个元素</li>\\n<li><code>rpop</code> 移除并返回列表右侧的第一个元素</li>\\n<li><code>Lrange</code> key start end</li>\\n<li><code>BLPOP</code> 会阻塞指定时间，等到有元素了再 pop</li>\\n<li><code>BRPOP</code> 会阻塞指定时间</li>\\n</ul>","autoDesc":true}`);export{s as comp,r as data};
