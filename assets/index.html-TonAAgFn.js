import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as t,d as l,o as p}from"./app-ktFCNIob.js";const n={};function a(o,i){return p(),t("div",null,i[0]||(i[0]=[l('<h1 id="sql-优化" tabindex="-1"><a class="header-anchor" href="#sql-优化"><span>SQL 优化</span></a></h1><ul><li>读写分离</li><li>冷热分离</li><li>分库分表</li><li>分页优化</li></ul><h2 id="选择合适的字段类型" tabindex="-1"><a class="header-anchor" href="#选择合适的字段类型"><span>选择合适的字段类型</span></a></h2><p>存储字节越小、占用空间就越小、性能就越好</p><ul><li><p>非负整数优先用unsigned int，多出一倍存储空间</p><p>自增ID、整型IP、年龄等</p></li><li><p>小数值类型优先使用TINYINT</p><p>比如年龄、状态表示如0/1/2、类别</p></li><li><p>IP地址用整数存</p><p>MySQL提供两个方法处理ip地址</p><ul><li>INET_ATON</li><li>INET_NTOA</li></ul></li><li><p>日期类型用timestamp</p><p>Datetime消耗空间大，且没有时区信息。</p></li><li><p>金融字段用decimal，避免丢失精度</p></li></ul><p>针对order by慢查询和group by慢查询，可以采取以下优化措施：</p><ol><li><p>创建索引：对于order by和group by操作中使用的列，可以创建索引来加速查询。索引可以提高查询的效率，减少数据库的扫描次数，从而提高查询速度。</p></li><li><p>优化查询语句：可以通过优化查询语句来减少查询的数据量和查询的时间。例如，可以使用limit关键字来限制查询的数据量，使用where子句来过滤不必要的数据等。</p></li><li><p>分区表：对于大型数据表，可以将其分成多个分区表，从而减少查询的数据量和查询的时间。分区表可以根据数据的范围、时间等条件进行分区，从而提高查询效率。</p></li><li><p>缓存技术：可以使用缓存技术来缓存查询结果，从而减少数据库的查询次数。缓存技术可以使用内存缓存、分布式缓存等方式来实现。</p></li><li><p>数据库优化：可以对数据库进行优化，例如调整数据库的参数、优化数据库的配置、增加数据库的缓存等。数据库优化可以提高数据库的性能和稳定性，从而提高查询效率。</p></li></ol><p>需要注意的是，针对order by和group by慢查询，需要根据具体情况采取不同的优化措施。例如，对于大型数据表，可以采用分区表和缓存技术来优化查询；对于小型数据表，可以采用创建索引和优化查询语句来优化查询。在进行优化时，需要综合考虑查询效率、系统稳定性、数据一致性等因素，以达到最优的优化效果。</p>',8)]))}const s=e(n,[["render",a],["__file","index.html.vue"]]),m=JSON.parse(`{"path":"/cs/database/sql/optimisation/","title":"SQL 优化","lang":"en-US","frontmatter":{"description":"SQL 优化 读写分离 冷热分离 分库分表 分页优化 选择合适的字段类型 存储字节越小、占用空间就越小、性能就越好 非负整数优先用unsigned int，多出一倍存储空间 自增ID、整型IP、年龄等 小数值类型优先使用TINYINT 比如年龄、状态表示如0/1/2、类别 IP地址用整数存 MySQL提供两个方法处理ip地址 INET_ATON INE...","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/cs/database/sql/optimisation/"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"SQL 优化"}],["meta",{"property":"og:description","content":"SQL 优化 读写分离 冷热分离 分库分表 分页优化 选择合适的字段类型 存储字节越小、占用空间就越小、性能就越好 非负整数优先用unsigned int，多出一倍存储空间 自增ID、整型IP、年龄等 小数值类型优先使用TINYINT 比如年龄、状态表示如0/1/2、类别 IP地址用整数存 MySQL提供两个方法处理ip地址 INET_ATON INE..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-11-22T03:06:21.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-22T03:06:21.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"SQL 优化\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-22T03:06:21.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[{"level":2,"title":"选择合适的字段类型","slug":"选择合适的字段类型","link":"#选择合适的字段类型","children":[]}],"git":{"createdTime":1679578424000,"updatedTime":1732244781000,"contributors":[{"name":"刘大维","email":"davidliu@liudaweideMacBook-Pro.local","commits":2},{"name":"David Liu","email":"liudawei@seas.upenn.edu","commits":1},{"name":"davidliuk","email":"l729641074@163.com","commits":1}]},"readingTime":{"minutes":2.04,"words":611},"filePathRelative":"cs/database/sql/optimisation/README.md","localizedDate":"March 23, 2023","excerpt":"\\n<ul>\\n<li>读写分离</li>\\n<li>冷热分离</li>\\n<li>分库分表</li>\\n<li>分页优化</li>\\n</ul>\\n<h2>选择合适的字段类型</h2>\\n<p>存储字节越小、占用空间就越小、性能就越好</p>\\n<ul>\\n<li>\\n<p>非负整数优先用unsigned int，多出一倍存储空间</p>\\n<p>自增ID、整型IP、年龄等</p>\\n</li>\\n<li>\\n<p>小数值类型优先使用TINYINT</p>\\n<p>比如年龄、状态表示如0/1/2、类别</p>\\n</li>\\n<li>\\n<p>IP地址用整数存</p>\\n<p>MySQL提供两个方法处理ip地址</p>\\n<ul>\\n<li>INET_ATON</li>\\n<li>INET_NTOA</li>\\n</ul>\\n</li>\\n<li>\\n<p>日期类型用timestamp</p>\\n<p>Datetime消耗空间大，且没有时区信息。</p>\\n</li>\\n<li>\\n<p>金融字段用decimal，避免丢失精度</p>\\n</li>\\n</ul>","autoDesc":true}`);export{s as comp,m as data};
