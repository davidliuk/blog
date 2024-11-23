import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,d as i,o as l}from"./app-CrF8c6p-.js";const n={};function o(r,e){return l(),a("div",null,e[0]||(e[0]=[i('<h1 id="书写规范" tabindex="-1"><a class="header-anchor" href="#书写规范"><span>书写规范</span></a></h1><h2 id="dml" tabindex="-1"><a class="header-anchor" href="#dml"><span>DML</span></a></h2><ol><li>逻辑删除</li><li>UPDATE、DELETE 一定要有明确的 WHERE 条件，视情况使用索引。</li><li>INSERT 必须显式指定字段，并使用 batch 提交</li><li>JDBC 使用 prepared statement，尤其是敏感数据查询必须使用这个，提高性能并避免 SQL 注入</li></ol><h2 id="dql" tabindex="-1"><a class="header-anchor" href="#dql"><span>DQL</span></a></h2><ol><li>SELECT 显示指定字段名称；除配置表和小表（数据总量小于 1w）外，禁止使用<code>SELECT *</code>，建议加上 ROWNUM 限制</li><li>UNION ALL</li><li>禁止使用存储过程、试图、触发器、event、自定义函数，容易将业务逻辑与 DB 耦合在一起</li></ol>',5)]))}const c=t(n,[["render",o],["__file","书写规范.html.vue"]]),p=JSON.parse(`{"path":"/cs/database/sql/design/%E4%B9%A6%E5%86%99%E8%A7%84%E8%8C%83.html","title":"书写规范","lang":"en-US","frontmatter":{"description":"书写规范 DML 逻辑删除 UPDATE、DELETE 一定要有明确的 WHERE 条件，视情况使用索引。 INSERT 必须显式指定字段，并使用 batch 提交 JDBC 使用 prepared statement，尤其是敏感数据查询必须使用这个，提高性能并避免 SQL 注入 DQL SELECT 显示指定字段名称；除配置表和小表（数据总量小于 1...","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/cs/database/sql/design/%E4%B9%A6%E5%86%99%E8%A7%84%E8%8C%83.html"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"书写规范"}],["meta",{"property":"og:description","content":"书写规范 DML 逻辑删除 UPDATE、DELETE 一定要有明确的 WHERE 条件，视情况使用索引。 INSERT 必须显式指定字段，并使用 batch 提交 JDBC 使用 prepared statement，尤其是敏感数据查询必须使用这个，提高性能并避免 SQL 注入 DQL SELECT 显示指定字段名称；除配置表和小表（数据总量小于 1..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-09-14T10:15:52.000Z"}],["meta",{"property":"article:modified_time","content":"2023-09-14T10:15:52.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"书写规范\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-09-14T10:15:52.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[{"level":2,"title":"DML","slug":"dml","link":"#dml","children":[]},{"level":2,"title":"DQL","slug":"dql","link":"#dql","children":[]}],"git":{"createdTime":1694686552000,"updatedTime":1694686552000,"contributors":[{"name":"liudawei47","email":"liudawei47@jd.com","commits":1}]},"readingTime":{"minutes":0.51,"words":152},"filePathRelative":"cs/database/sql/design/书写规范.md","localizedDate":"September 14, 2023","excerpt":"\\n<h2>DML</h2>\\n<ol>\\n<li>逻辑删除</li>\\n<li>UPDATE、DELETE 一定要有明确的 WHERE 条件，视情况使用索引。</li>\\n<li>INSERT 必须显式指定字段，并使用 batch 提交</li>\\n<li>JDBC 使用 prepared statement，尤其是敏感数据查询必须使用这个，提高性能并避免 SQL 注入</li>\\n</ol>\\n<h2>DQL</h2>\\n<ol>\\n<li>SELECT 显示指定字段名称；除配置表和小表（数据总量小于 1w）外，禁止使用<code>SELECT *</code>，建议加上 ROWNUM 限制</li>\\n<li>UNION ALL</li>\\n<li>禁止使用存储过程、试图、触发器、event、自定义函数，容易将业务逻辑与 DB 耦合在一起</li>\\n</ol>","autoDesc":true}`);export{c as comp,p as data};
