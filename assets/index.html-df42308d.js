const e=JSON.parse(`{"key":"v-24f44b58","path":"/cs/database/mysql/index/","title":"索引","lang":"en-US","frontmatter":{"description":"索引 索引是帮助MySQL高效获取数据的数据结构（有序）。 索引是一种用于快速查询和检索数据的数据结构，其本质可以看成是一种排序好的数据结构。 B 树&amp; B+树 B 树也称 B-树,全称为 多路平衡查找树 ，B+ 树是 B 树的一种变体。B 树和 B+树中的 B 是 Balanced （平衡）的意思。 目前大部分数据库系统及文件系统都采用 B-Tree 或其变种 B+Tree 作为索引结构。 B 树&amp; B+树两者有何异同呢？","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/cs/database/mysql/index/"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"索引"}],["meta",{"property":"og:description","content":"索引 索引是帮助MySQL高效获取数据的数据结构（有序）。 索引是一种用于快速查询和检索数据的数据结构，其本质可以看成是一种排序好的数据结构。 B 树&amp; B+树 B 树也称 B-树,全称为 多路平衡查找树 ，B+ 树是 B 树的一种变体。B 树和 B+树中的 B 是 Balanced （平衡）的意思。 目前大部分数据库系统及文件系统都采用 B-Tree 或其变种 B+Tree 作为索引结构。 B 树&amp; B+树两者有何异同呢？"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-02-27T13:30:02.000Z"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2023-02-27T13:30:02.000Z"}],["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://davidliuk.github.io/blog/blog/zh/cs/database/mysql/index/"}]]},"headers":[{"level":3,"title":"B 树& B+树","slug":"b-树-b-树","link":"#b-树-b-树","children":[]},{"level":2,"title":"索引类型","slug":"索引类型","link":"#索引类型","children":[{"level":3,"title":"按照数据结构维度划分：","slug":"按照数据结构维度划分","link":"#按照数据结构维度划分","children":[]},{"level":3,"title":"按照底层存储方式角度划分：","slug":"按照底层存储方式角度划分","link":"#按照底层存储方式角度划分","children":[]}]},{"level":2,"title":"覆盖索引和联合索引","slug":"覆盖索引和联合索引","link":"#覆盖索引和联合索引","children":[{"level":3,"title":"覆盖索引","slug":"覆盖索引","link":"#覆盖索引","children":[]},{"level":3,"title":"联合索引","slug":"联合索引","link":"#联合索引","children":[]},{"level":3,"title":"最左前缀匹配原则","slug":"最左前缀匹配原则","link":"#最左前缀匹配原则","children":[]}]},{"level":2,"title":"索引下推","slug":"索引下推","link":"#索引下推","children":[]}],"git":{"createdTime":1672746435000,"updatedTime":1677504602000,"contributors":[{"name":"刘大维","email":"davidliu@liudaweideMacBook-Pro.local","commits":2}]},"readingTime":{"minutes":4.89,"words":1466},"localizedDate":"January 3, 2023","filePathRelative":"cs/database/mysql/index/README.md","excerpt":"<h1> 索引</h1>\\n<p>索引是帮助MySQL高效获取数据的数据结构（有序）。</p>\\n<p><strong>索引是一种用于快速查询和检索数据的数据结构，其本质可以看成是一种排序好的数据结构。</strong></p>\\n<h3> B 树&amp; B+树</h3>\\n<p>B 树也称 B-树,全称为 <strong>多路平衡查找树</strong> ，B+ 树是 B 树的一种变体。B 树和 B+树中的 B 是 <code>Balanced</code> （平衡）的意思。</p>\\n<p>目前大部分数据库系统及文件系统都采用 B-Tree 或其变种 B+Tree 作为索引结构。</p>\\n<p><strong>B 树&amp; B+树两者有何异同呢？</strong></p>","autoDesc":true}`);export{e as data};