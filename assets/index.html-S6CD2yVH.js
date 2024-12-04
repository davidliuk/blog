import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,d as o,o as n}from"./app-D4ZvIHfO.js";const l={};function r(i,e){return n(),a("div",null,e[0]||(e[0]=[o('<h1 id="canal" tabindex="-1"><a class="header-anchor" href="#canal"><span>Canal</span></a></h1><p><code>Canal</code> [kə’næl]，译意为水道/管道/沟渠，主要用途是基于 <strong>MySQL 数据库增量日志</strong>解析，提供<strong>增量数据订阅和消费</strong>。</p><p><a href="https://blog.csdn.net/qq_43528451/article/details/116120745" target="_blank" rel="noopener noreferrer">https://blog.csdn.net/qq_43528451/article/details/116120745</a></p><p>Canal框架原理，参考MySQL数据主从复制原理。</p><ol><li>MySQL master 将数据变更写入二进制日志( binary log, 其中记录叫做二进制日志事件binary log events，可以通过 show binlog events 进行查看)；变更数据，记录日志：biglog</li><li>MySQL slave 将 master 的 binary log events 拷贝到它的中继日志(relay log)；IO 线程，获取binlog</li><li>MySQL slave 重放 relay log 中事件，将数据变更反映它自己的数据；SQL线程，执行语句</li></ol><p>数据库镜像<br> 数据库实时备份<br> 索引构建和实时维护（拆分异构索引、倒排索引等）<br> 业务cache刷新<br> 带业务逻辑的增量数据处理</p><p>伪装成slave</p><ol><li>全库存全表 connector.subscribe(&quot;.&quot;..&quot;&quot;)</li><li>指定存全表 connector.subscribe(&quot;test\\..&quot;&quot;)</li><li>单表 connector,sbscribe(“test,user“)</li><li>多规组合使用 connoctor subscribo(tost &#39;tost2 usor1 tost3.usor2&quot;</li></ol>',8)]))}const d=t(l,[["render",r],["__file","index.html.vue"]]),p=JSON.parse(`{"path":"/cs/middleware/canal/","title":"Canal","lang":"en-US","frontmatter":{"description":"Canal Canal [kə’næl]，译意为水道/管道/沟渠，主要用途是基于 MySQL 数据库增量日志解析，提供增量数据订阅和消费。 https://blog.csdn.net/qq_43528451/article/details/116120745 Canal框架原理，参考MySQL数据主从复制原理。 MySQL master 将数据变更写入...","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/cs/middleware/canal/"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"Canal"}],["meta",{"property":"og:description","content":"Canal Canal [kə’næl]，译意为水道/管道/沟渠，主要用途是基于 MySQL 数据库增量日志解析，提供增量数据订阅和消费。 https://blog.csdn.net/qq_43528451/article/details/116120745 Canal框架原理，参考MySQL数据主从复制原理。 MySQL master 将数据变更写入..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-06-27T01:21:47.000Z"}],["meta",{"property":"article:modified_time","content":"2024-06-27T01:21:47.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Canal\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-06-27T01:21:47.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[],"git":{"createdTime":1715153702000,"updatedTime":1719451307000,"contributors":[{"name":"刘大维","email":"davidliu@liudaweideMacBook-Pro.local","commits":2}]},"readingTime":{"minutes":0.87,"words":261},"filePathRelative":"cs/middleware/canal/README.md","localizedDate":"May 8, 2024","excerpt":"\\n<p><code>Canal</code> [kə’næl]，译意为水道/管道/沟渠，主要用途是基于 <strong>MySQL 数据库增量日志</strong>解析，提供<strong>增量数据订阅和消费</strong>。</p>\\n<p><a href=\\"https://blog.csdn.net/qq_43528451/article/details/116120745\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">https://blog.csdn.net/qq_43528451/article/details/116120745</a></p>","autoDesc":true}`);export{d as comp,p as data};
