const t=JSON.parse(`{"key":"v-67d5af29","path":"/cs/database/mysql/distributed/%E5%88%86%E5%BA%93%E5%88%86%E8%A1%A8.html","title":"","lang":"en-US","frontmatter":{"description":"分库分表 读写分离主要应对的是数据库读并发，没有解决数据库存储问题。试想一下：如果 MySQL 一张表的数据量过大怎么办? 换言之，我们该如何解决 MySQL 的存储压力呢？ 答案之一就是 分库分表。 分库 分库 就是将数据库中的数据分散到不同的数据库上，可以垂直分库，也可以水平分库。 垂直分库 就是把单一数据库按照业务进行划分，不同的业务使用不同的数据库，进而将一个数据库的压力分担到多个数据库。","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/cs/database/mysql/distributed/%E5%88%86%E5%BA%93%E5%88%86%E8%A1%A8.html"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:description","content":"分库分表 读写分离主要应对的是数据库读并发，没有解决数据库存储问题。试想一下：如果 MySQL 一张表的数据量过大怎么办? 换言之，我们该如何解决 MySQL 的存储压力呢？ 答案之一就是 分库分表。 分库 分库 就是将数据库中的数据分散到不同的数据库上，可以垂直分库，也可以水平分库。 垂直分库 就是把单一数据库按照业务进行划分，不同的业务使用不同的数据库，进而将一个数据库的压力分担到多个数据库。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-05-17T10:10:52.000Z"}],["meta",{"property":"article:author","content":"David Liu"}],["meta",{"property":"article:modified_time","content":"2023-05-17T10:10:52.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-05-17T10:10:52.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[{"level":2,"title":"分库分表","slug":"分库分表","link":"#分库分表","children":[{"level":3,"title":"分库","slug":"分库","link":"#分库","children":[]},{"level":3,"title":"分表","slug":"分表","link":"#分表","children":[]},{"level":3,"title":"什么情况下需要分库分表？","slug":"什么情况下需要分库分表","link":"#什么情况下需要分库分表","children":[]}]}],"git":{"createdTime":1684318252000,"updatedTime":1684318252000,"contributors":[{"name":"刘大维","email":"davidliu@liudaweideMacBook-Pro.local","commits":1}]},"readingTime":{"minutes":2.18,"words":654},"filePathRelative":"cs/database/mysql/distributed/分库分表.md","localizedDate":"May 17, 2023","excerpt":"<h2> 分库分表</h2>\\n<p>读写分离主要应对的是数据库读并发，没有解决数据库存储问题。试想一下：<strong>如果 MySQL 一张表的数据量过大怎么办?</strong></p>\\n<p>换言之，<strong>我们该如何解决 MySQL 的存储压力呢？</strong></p>\\n<p>答案之一就是 <strong>分库分表</strong>。</p>\\n<h3> 分库</h3>\\n<p><strong>分库</strong> 就是将数据库中的数据分散到不同的数据库上，可以垂直分库，也可以水平分库。</p>\\n<h4> <strong>垂直分库</strong></h4>\\n<p>就是把单一数据库按照业务进行划分，不同的业务使用不同的数据库，进而将一个数据库的压力分担到多个数据库。</p>","autoDesc":true}`);export{t as data};
