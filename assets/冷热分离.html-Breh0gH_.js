import{_ as o}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,a as e,o as n}from"./app-DtA_0glx.js";const r={};function i(s,t){return n(),a("div",null,t[0]||(t[0]=[e("h1",{id:"冷热分离",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#冷热分离"},[e("span",null,"冷热分离")])],-1),e("p",null,"随着财经支付业务的快速发展，考虑到未来订单量持续增长，在线存储遇到更大的挑战，需提前做好规划。目前财经支付主要业务都是使用 Mysql（InnoDB）作为数据存储，因历史订单信息访问频率低并占用了大量数据库存储空间，期望将历史数据跟生产最新交易数据进行分离，当前数据库保留最近一段时间的数据作为热库，历史交易存入另一个数据库压缩存储作为冷库(rocksdb)，即数据库冷热分离。此举将会极大的节省数据库设备成本，减少因在线存储空间不足扩容导致停服不可用的时长，以下基于财经支付的统一交易系统现状做的相关案例分析仅供大家参考。",-1),e("p",null,[e("a",{href:"https://mp.weixin.qq.com/s/ZKRkZP6rLHuTE1wvnqmAPQ",target:"_blank",rel:"noopener noreferrer"},"https://mp.weixin.qq.com/s/ZKRkZP6rLHuTE1wvnqmAPQ")],-1),e("p",null,"TiDB 6.0 支持冷热分离，ssd，hsd",-1),e("p",null,"建立冷热索引库（可用固态硬盘存放热库数据，普通硬盘存放冷库数据），热库数据可以提前预热加载至内存，提高检索效率。",-1),e("p",null,"HBase 冷热分离，ssd hdd",-1),e("p",null,"HBase 是当下流行的一款海量数据存储的分布式数据库。往往海量数据存储会涉及到一个成本问题，如何降低成本。常见的方案就是通过冷热分离来治理数据。冷数据可以用更高的压缩比算法（ZSTD），更低副本数算法（Erasure Coding），更便宜存储设备（HDD，高密集型存储机型）。",-1)]))}const m=o(r,[["render",i],["__file","冷热分离.html.vue"]]),c=JSON.parse(`{"path":"/cs/database/sql/optimisation/%E5%86%B7%E7%83%AD%E5%88%86%E7%A6%BB.html","title":"冷热分离","lang":"en-US","frontmatter":{"description":"冷热分离 随着财经支付业务的快速发展，考虑到未来订单量持续增长，在线存储遇到更大的挑战，需提前做好规划。目前财经支付主要业务都是使用 Mysql（InnoDB）作为数据存储，因历史订单信息访问频率低并占用了大量数据库存储空间，期望将历史数据跟生产最新交易数据进行分离，当前数据库保留最近一段时间的数据作为热库，历史交易存入另一个数据库压缩存储作为冷库(r...","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/cs/database/sql/optimisation/%E5%86%B7%E7%83%AD%E5%88%86%E7%A6%BB.html"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"冷热分离"}],["meta",{"property":"og:description","content":"冷热分离 随着财经支付业务的快速发展，考虑到未来订单量持续增长，在线存储遇到更大的挑战，需提前做好规划。目前财经支付主要业务都是使用 Mysql（InnoDB）作为数据存储，因历史订单信息访问频率低并占用了大量数据库存储空间，期望将历史数据跟生产最新交易数据进行分离，当前数据库保留最近一段时间的数据作为热库，历史交易存入另一个数据库压缩存储作为冷库(r..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-06-27T01:21:47.000Z"}],["meta",{"property":"article:modified_time","content":"2024-06-27T01:21:47.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"冷热分离\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-06-27T01:21:47.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[],"git":{"createdTime":1715153702000,"updatedTime":1719451307000,"contributors":[{"name":"刘大维","email":"davidliu@liudaweideMacBook-Pro.local","commits":2}]},"readingTime":{"minutes":1.35,"words":406},"filePathRelative":"cs/database/sql/optimisation/冷热分离.md","localizedDate":"May 8, 2024","excerpt":"\\n<p>随着财经支付业务的快速发展，考虑到未来订单量持续增长，在线存储遇到更大的挑战，需提前做好规划。目前财经支付主要业务都是使用 Mysql（InnoDB）作为数据存储，因历史订单信息访问频率低并占用了大量数据库存储空间，期望将历史数据跟生产最新交易数据进行分离，当前数据库保留最近一段时间的数据作为热库，历史交易存入另一个数据库压缩存储作为冷库(rocksdb)，即数据库冷热分离。此举将会极大的节省数据库设备成本，减少因在线存储空间不足扩容导致停服不可用的时长，以下基于财经支付的统一交易系统现状做的相关案例分析仅供大家参考。</p>\\n<p><a href=\\"https://mp.weixin.qq.com/s/ZKRkZP6rLHuTE1wvnqmAPQ\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">https://mp.weixin.qq.com/s/ZKRkZP6rLHuTE1wvnqmAPQ</a></p>","autoDesc":true}`);export{m as comp,c as data};
