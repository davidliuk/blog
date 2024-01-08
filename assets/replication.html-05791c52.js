const e=JSON.parse(`{"key":"v-531aadbf","path":"/cs/database/redis/availability/replication.html","title":"Replication：主从复制","lang":"en-US","frontmatter":{"description":"Replication：主从复制 架构图 是什么 主负责写，从负责读 redis 读多写少，所以这样比较有效 就是主从复制，master以写为主，Slave以读为主 当master数据变化的时候，自动将新的数据异步同步到其它slave数据库 能干嘛 读写分离 容灾恢复 数据备份 水平扩容支持高并发 使用 配从库不配主库 权限细节，重要","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/cs/database/redis/availability/replication.html"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"Replication：主从复制"}],["meta",{"property":"og:description","content":"Replication：主从复制 架构图 是什么 主负责写，从负责读 redis 读多写少，所以这样比较有效 就是主从复制，master以写为主，Slave以读为主 当master数据变化的时候，自动将新的数据异步同步到其它slave数据库 能干嘛 读写分离 容灾恢复 数据备份 水平扩容支持高并发 使用 配从库不配主库 权限细节，重要"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-01-08T03:06:14.000Z"}],["meta",{"property":"article:author","content":"David Liu"}],["meta",{"property":"article:modified_time","content":"2024-01-08T03:06:14.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Replication：主从复制\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-01-08T03:06:14.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[{"level":2,"title":"是什么","slug":"是什么","link":"#是什么","children":[]},{"level":2,"title":"能干嘛","slug":"能干嘛","link":"#能干嘛","children":[]},{"level":2,"title":"使用","slug":"使用","link":"#使用","children":[{"level":3,"title":"命令","slug":"命令","link":"#命令","children":[]}]},{"level":2,"title":"复制原理/工作流程","slug":"复制原理-工作流程","link":"#复制原理-工作流程","children":[]},{"level":2,"title":"缺点","slug":"缺点","link":"#缺点","children":[]}],"git":{"createdTime":1684318252000,"updatedTime":1704683174000,"contributors":[{"name":"davidliu","email":"liudawei47@jd.com","commits":1},{"name":"刘大维","email":"davidliu@liudaweideMacBook-Pro.local","commits":1}]},"readingTime":{"minutes":1.89,"words":567},"filePathRelative":"cs/database/redis/availability/replication.md","localizedDate":"May 17, 2023","excerpt":"<h1> Replication：主从复制</h1>\\n<p>架构图</p>\\n<h2> 是什么</h2>\\n<p>主负责写，从负责读</p>\\n<p>redis 读多写少，所以这样比较有效</p>\\n<p>就是主从复制，master以写为主，Slave以读为主</p>\\n<p>当master数据变化的时候，自动将新的数据异步同步到其它slave数据库</p>\\n<h2> 能干嘛</h2>\\n<ul>\\n<li>读写分离</li>\\n<li>容灾恢复</li>\\n<li>数据备份</li>\\n<li>水平扩容支持高并发</li>\\n</ul>\\n<h2> 使用</h2>\\n<p>配从库不配主库</p>\\n<p>权限细节，重要</p>","autoDesc":true}`);export{e as data};
