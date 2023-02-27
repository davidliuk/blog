import{_ as e,V as i,W as l,a0 as t}from"./framework-705b829b.js";const r={},_=t('<h1 id="设计原则" tabindex="-1"><a class="header-anchor" href="#设计原则" aria-hidden="true">#</a> 设计原则</h1><ol><li>针对于数据量较大，且查询比较频繁的表建立索引。</li><li>针对于常作为查询条件(where)、排序(order by)、分组(group by)操作的字段建立索引。</li><li>尽量选择区分度高的列作为索引，尽量建立<strong>唯一索引</strong>，区分度越高，使用索引的效率越高。</li><li>如果是字符串类型的字段，字段的长度较长，可以针对于字段的特点，建立前缀索引。</li><li>尽量使用联合索引，减少单列索引，查询时，联合索引很多时候可以覆盖索引，节省存储空间，避免回表，提高查询效率。</li><li>要控制索引的数量，索引并不是多多益善，索引越多，维护索引结构的代价也就越大，会影响增删改的效率。</li><li>如果索引列不能存储NULL值，请在创建表时使用NOT NULL约束它。当优化器知道每列是否包含NULL值时，它可以更好地确定哪个索引最有效地用于查询。</li></ol>',2),o=[_];function a(c,n){return i(),l("div",null,o)}const d=e(r,[["render",a],["__file","5. 设计原则.html.vue"]]);export{d as default};
