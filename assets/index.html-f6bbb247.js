import{_ as i,V as e,W as l,Z as p}from"./framework-e5d7a6b2.js";const r={},a=p('<h1 id="sql-优化" tabindex="-1"><a class="header-anchor" href="#sql-优化" aria-hidden="true">#</a> SQL 优化</h1><h2 id="选择合适的字段类型" tabindex="-1"><a class="header-anchor" href="#选择合适的字段类型" aria-hidden="true">#</a> 选择合适的字段类型</h2><p>存储字节越小、占用空间就越小、性能就越好</p><ul><li><p>非负整数优先用unsigned int，多出一倍存储空间</p><p>自增ID、整型IP、年龄等</p></li><li><p>小数值类型优先使用TINYINT</p><p>比如年龄、状态表示如0/1/2、类别</p></li><li><p>IP地址用整数存</p><p>MySQL提供两个方法处理ip地址</p><ul><li>INET_ATON</li><li>INET_NTOA</li></ul></li><li><p>日期类型用timestamp</p><p>Datetime消耗空间大，且没有时区信息。</p></li><li><p>金融字段用decimal，避免丢失精度</p></li></ul><p>针对order by慢查询和group by慢查询，可以采取以下优化措施：</p><ol><li><p>创建索引：对于order by和group by操作中使用的列，可以创建索引来加速查询。索引可以提高查询的效率，减少数据库的扫描次数，从而提高查询速度。</p></li><li><p>优化查询语句：可以通过优化查询语句来减少查询的数据量和查询的时间。例如，可以使用limit关键字来限制查询的数据量，使用where子句来过滤不必要的数据等。</p></li><li><p>分区表：对于大型数据表，可以将其分成多个分区表，从而减少查询的数据量和查询的时间。分区表可以根据数据的范围、时间等条件进行分区，从而提高查询效率。</p></li><li><p>缓存技术：可以使用缓存技术来缓存查询结果，从而减少数据库的查询次数。缓存技术可以使用内存缓存、分布式缓存等方式来实现。</p></li><li><p>数据库优化：可以对数据库进行优化，例如调整数据库的参数、优化数据库的配置、增加数据库的缓存等。数据库优化可以提高数据库的性能和稳定性，从而提高查询效率。</p></li></ol><p>需要注意的是，针对order by和group by慢查询，需要根据具体情况采取不同的优化措施。例如，对于大型数据表，可以采用分区表和缓存技术来优化查询；对于小型数据表，可以采用创建索引和优化查询语句来优化查询。在进行优化时，需要综合考虑查询效率、系统稳定性、数据一致性等因素，以达到最优的优化效果。</p>',7),t=[a];function o(d,n){return e(),l("div",null,t)}const c=i(r,[["render",o],["__file","index.html.vue"]]);export{c as default};
