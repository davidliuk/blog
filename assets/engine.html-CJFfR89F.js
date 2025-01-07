import{_ as o}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as t,d as n,o as r}from"./app-ChU1gMRF.js";const i={};function a(g,e){return r(),t("div",null,e[0]||(e[0]=[n('<h1 id="engine" tabindex="-1"><a class="header-anchor" href="#engine"><span>Engine</span></a></h1><p>存储引擎（Storage Engine）是数据库的核心组件，负责管理数据在内存和磁盘中的存储方式。</p><p>与 MySQL 一样，MongoDB 采用的也是 插件式的存储引擎架构 ，支持不同类型的存储引擎，不同的存储引擎解决不同场景的问题。在创建数据库或集合时，可以指定存储引擎。</p><p>插件式的存储引擎架构可以实现 Server 层和存储引擎层的解耦，可以支持多种存储引擎，如 MySQL 既可以支持 B-Tree 结构的 InnoDB 存储引擎，还可以支持 LSM 结构的 RocksDB 存储引擎。</p><p>在存储引擎刚出来的时候，默认是使用 MMAPV1 存储引擎，MongoDB4.x 版本不再支持 MMAPv1 存储引擎。现在主要有下面这两种存储引擎：</p><ul><li>WiredTiger 存储引擎：自 MongoDB 3.2 以后，默认的存储引擎为 WiredTiger 存储引擎。非常适合大多数工作负载，建议用于新部署。WiredTiger 提供文档级并发模型、检查点和数据压缩（后文会介绍到）等功能。</li><li>In-Memory 存储引擎：In-Memory 存储引擎在 MongoDB Enterprise 中可用。它不是将文档存储在磁盘上，而是将它们保留在内存中以获得更可预测的数据延迟。</li></ul><p>此外，MongoDB 3.0 提供了 可插拔的存储引擎 API ，允许第三方为 MongoDB 开发存储引擎，这点和 MySQL 也比较类似。</p><p>目前绝大部分流行的数据库存储引擎都是基于 B/B+ Tree 或者 LSM(Log Structured Merge) Tree 来实现的。对于 NoSQL 数据库来说，绝大部分（比如 HBase、Cassandra、RocksDB）都是基于 LSM 树，MongoDB 不太一样。</p><p>上面也说了，自 MongoDB 3.2 以后，默认的存储引擎为 WiredTiger 存储引擎。在 WiredTiger 引擎官网上，我们发现 WiredTiger 使用的是 B+ 树作为其存储结构：</p><p>此外，WiredTiger 还支持 <a href="https://source.wiredtiger.com/3.1.0/lsm.html" target="_blank" rel="noopener noreferrer">LSM(Log Structured Merge)</a> 树作为存储结构，MongoDB 在使用 WiredTiger 作为存储引擎时，默认使用的是 B+ 树。</p><p>如果想要了解 MongoDB 使用 B 树的原因，可以看看这篇文章：<a href="https://mp.weixin.qq.com/s/mMWdpbYRiT6LQcdaj4hgXQ" target="_blank" rel="noopener noreferrer">为什么 MongoDB 使用 B 树？</a>。</p><p>使用 B+ 树时，WiredTiger 以 <strong>page</strong> 为基本单位往磁盘读写数据。B+ 树的每个节点为一个 page，共有三种类型的 page：</p><ul><li><strong>root page（根节点）</strong>：B+ 树的根节点。</li><li><strong>internal page（内部节点）</strong>：不实际存储数据的中间索引节点。</li><li><strong>leaf page（叶子节点）</strong>：真正存储数据的叶子节点，包含一个页头（page header）、块头（block header）和真正的数据（key/value），其中页头定义了页的类型、页中实际载荷数据的大小、页中记录条数等信息；块头定义了此页的 checksum、块在磁盘上的寻址位置等信息。</li></ul>',13)]))}const l=o(i,[["render",a],["__file","engine.html.vue"]]),s=JSON.parse(`{"path":"/cs/database/mongodb/engine.html","title":"Engine","lang":"en-US","frontmatter":{"description":"Engine 存储引擎（Storage Engine）是数据库的核心组件，负责管理数据在内存和磁盘中的存储方式。 与 MySQL 一样，MongoDB 采用的也是 插件式的存储引擎架构 ，支持不同类型的存储引擎，不同的存储引擎解决不同场景的问题。在创建数据库或集合时，可以指定存储引擎。 插件式的存储引擎架构可以实现 Server 层和存储引擎层的解耦，...","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/cs/database/mongodb/engine.html"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"Engine"}],["meta",{"property":"og:description","content":"Engine 存储引擎（Storage Engine）是数据库的核心组件，负责管理数据在内存和磁盘中的存储方式。 与 MySQL 一样，MongoDB 采用的也是 插件式的存储引擎架构 ，支持不同类型的存储引擎，不同的存储引擎解决不同场景的问题。在创建数据库或集合时，可以指定存储引擎。 插件式的存储引擎架构可以实现 Server 层和存储引擎层的解耦，..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-05-08T07:35:02.000Z"}],["meta",{"property":"article:modified_time","content":"2024-05-08T07:35:02.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Engine\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-05-08T07:35:02.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[],"git":{"createdTime":1715153702000,"updatedTime":1715153702000,"contributors":[{"name":"刘大维","email":"davidliu@liudaweideMacBook-Pro.local","commits":1}]},"readingTime":{"minutes":2.37,"words":710},"filePathRelative":"cs/database/mongodb/engine.md","localizedDate":"May 8, 2024","excerpt":"\\n<p>存储引擎（Storage Engine）是数据库的核心组件，负责管理数据在内存和磁盘中的存储方式。</p>\\n<p>与 MySQL 一样，MongoDB 采用的也是 插件式的存储引擎架构 ，支持不同类型的存储引擎，不同的存储引擎解决不同场景的问题。在创建数据库或集合时，可以指定存储引擎。</p>\\n<p>插件式的存储引擎架构可以实现 Server 层和存储引擎层的解耦，可以支持多种存储引擎，如 MySQL 既可以支持 B-Tree 结构的 InnoDB 存储引擎，还可以支持 LSM 结构的 RocksDB 存储引擎。</p>\\n<p>在存储引擎刚出来的时候，默认是使用 MMAPV1 存储引擎，MongoDB4.x 版本不再支持 MMAPv1 存储引擎。现在主要有下面这两种存储引擎：</p>","autoDesc":true}`);export{l as comp,s as data};
