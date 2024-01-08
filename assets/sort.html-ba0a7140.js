const e=JSON.parse('{"key":"v-32713fab","path":"/cs/database/sql/basic/sort.html","title":"排序","lang":"en-US","frontmatter":{"description":"排序 order by后面可以根多个字段及其升降序，如果为标明则MySQL采用默认升序的策略进行排序。 对字符串用默认的升降序排序得到的是按字典序排列的结果 默认排序 升序 order by id asc 降序 order by id desc 自定排序 利用field()函数，来指定排序顺序 order by field(id, 5, 2, 3)","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/cs/database/sql/basic/sort.html"}],["meta",{"property":"og:site_name","content":"David\'s Blog"}],["meta",{"property":"og:title","content":"排序"}],["meta",{"property":"og:description","content":"排序 order by后面可以根多个字段及其升降序，如果为标明则MySQL采用默认升序的策略进行排序。 对字符串用默认的升降序排序得到的是按字典序排列的结果 默认排序 升序 order by id asc 降序 order by id desc 自定排序 利用field()函数，来指定排序顺序 order by field(id, 5, 2, 3)"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-03-20T14:10:49.000Z"}],["meta",{"property":"article:author","content":"David Liu"}],["meta",{"property":"article:modified_time","content":"2023-03-20T14:10:49.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"排序\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-03-20T14:10:49.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[{"level":2,"title":"默认排序","slug":"默认排序","link":"#默认排序","children":[{"level":3,"title":"升序","slug":"升序","link":"#升序","children":[]},{"level":3,"title":"降序","slug":"降序","link":"#降序","children":[]}]},{"level":2,"title":"自定排序","slug":"自定排序","link":"#自定排序","children":[]},{"level":2,"title":"字符串排序","slug":"字符串排序","link":"#字符串排序","children":[]},{"level":2,"title":"排序窗口函数","slug":"排序窗口函数","link":"#排序窗口函数","children":[{"level":3,"title":"rank() over","slug":"rank-over","link":"#rank-over","children":[]},{"level":3,"title":"dense_rank() over","slug":"dense-rank-over","link":"#dense-rank-over","children":[]},{"level":3,"title":"row_number() over","slug":"row-number-over","link":"#row-number-over","children":[]},{"level":3,"title":"ntile(${group_num}) over","slug":"ntile-group-num-over","link":"#ntile-group-num-over","children":[]},{"level":3,"title":"使用小提示","slug":"使用小提示","link":"#使用小提示","children":[]}]}],"git":{"createdTime":1679321449000,"updatedTime":1679321449000,"contributors":[{"name":"davidliuk","email":"l729641074@163.com","commits":1}]},"readingTime":{"minutes":3.04,"words":911},"filePathRelative":"cs/database/sql/basic/sort.md","localizedDate":"March 20, 2023","excerpt":"<h1> 排序</h1>\\n<p><code>order by</code>后面可以根多个字段及其升降序，如果为标明则MySQL采用默认升序的策略进行排序。</p>\\n<p>对字符串用默认的升降序排序得到的是按字典序排列的结果</p>\\n<h2> 默认排序</h2>\\n<h3> 升序</h3>\\n<p><code>order by id asc</code></p>\\n<h3> 降序</h3>\\n<p><code>order by id desc</code></p>\\n<h2> 自定排序</h2>\\n<p>利用<code>field()</code>函数，来指定排序顺序</p>\\n<p><code>order by field(id, 5, 2, 3)</code></p>","autoDesc":true}');export{e as data};
