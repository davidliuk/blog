import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,d as i,o as n}from"./app-ktFCNIob.js";const o={};function l(p,e){return n(),a("div",null,e[0]||(e[0]=[i('<h1 id="事务特性-acid" tabindex="-1"><a class="header-anchor" href="#事务特性-acid"><span>事务特性：ACID</span></a></h1><h2 id="四大特性" tabindex="-1"><a class="header-anchor" href="#四大特性"><span>四大特性</span></a></h2><ul><li><p>原子性（Ato&#39;micity）</p><p>事务是不可分割的最小操作单元，要么全部成功，要么全部失败（并回滚）。</p></li><li><p>一致性（Con&#39;sistency）</p><p>事务完成时，必须使所有的数据都保持一致状态。</p></li><li><p>隔离性（Isolation）</p><p>数据库系统提供的隔离机制（隔离级别），保证事务在不受外部并发操作影响的独立环境下运行。</p></li><li><p>持久性（Dura&#39;bility）</p><p>事务一旦<strong>提交或回滚</strong>，他对数据库中数据的改变就是永久的。</p></li></ul><p>MyISAM 引擎不支持事务，InnoDB 引擎通过多种机制实现了 ACID</p><h3 id="数据一致性" tabindex="-1"><a class="header-anchor" href="#数据一致性"><span>数据一致性</span></a></h3><p>通过强事务、最终一致、幂等、补偿、分布式锁、版本号等实现</p><p><a href="https://juejin.cn/post/7282245793688059964?utm_source=gold_browser_extension" target="_blank" rel="noopener noreferrer">参考1</a>, <a href="https://juejin.cn/post/7325728181248606245?utm_source=gold_browser_extension" target="_blank" rel="noopener noreferrer">参考2</a></p><h4 id="_2-3-1-高可用" tabindex="-1"><a class="header-anchor" href="#_2-3-1-高可用"><span>2.3.1 高可用</span></a></h4><ul><li><p>应用服务器、MySQL、Redis、HBase、JMQ等均跨机房部署；ES单机房部署，搭建ES主备双机房集群</p></li><li><p>隔离、限流、熔断、削峰、监控</p></li></ul><h4 id="_2-3-2-高性能" tabindex="-1"><a class="header-anchor" href="#_2-3-2-高性能"><span>2.3.2 高性能</span></a></h4><ul><li><p>高性能缓存</p></li><li><p>异步化</p></li></ul><h4 id="_2-3-3-海量数据处理" tabindex="-1"><a class="header-anchor" href="#_2-3-3-海量数据处理"><span>2.3.3 海量数据处理</span></a></h4><ul><li><p>分库分表</p></li><li><p>冷热分离</p></li><li><p>列式存储(HBase)</p></li></ul><h4 id="_2-3-4-数据安全" tabindex="-1"><a class="header-anchor" href="#_2-3-4-数据安全"><span>2.3.4 数据安全</span></a></h4><p>敏感信息加密存储，Log、Redis、ES、MySQL、HBase等均采用加密存储，“谁存储谁加密，谁使用谁解密”。</p>',15)]))}const c=t(o,[["render",l],["__file","1. ACID.html.vue"]]),d=JSON.parse(`{"path":"/cs/database/mysql/transaction/1.%20ACID.html","title":"事务特性：ACID","lang":"en-US","frontmatter":{"description":"事务特性：ACID 四大特性 原子性（Ato'micity） 事务是不可分割的最小操作单元，要么全部成功，要么全部失败（并回滚）。 一致性（Con'sistency） 事务完成时，必须使所有的数据都保持一致状态。 隔离性（Isolation） 数据库系统提供的隔离机制（隔离级别），保证事务在不受外部并发操作影响的独立环境下运行。 持久性（Dura'bi...","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/cs/database/mysql/transaction/1.%20ACID.html"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"事务特性：ACID"}],["meta",{"property":"og:description","content":"事务特性：ACID 四大特性 原子性（Ato'micity） 事务是不可分割的最小操作单元，要么全部成功，要么全部失败（并回滚）。 一致性（Con'sistency） 事务完成时，必须使所有的数据都保持一致状态。 隔离性（Isolation） 数据库系统提供的隔离机制（隔离级别），保证事务在不受外部并发操作影响的独立环境下运行。 持久性（Dura'bi..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-05-08T07:35:02.000Z"}],["meta",{"property":"article:modified_time","content":"2024-05-08T07:35:02.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"事务特性：ACID\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-05-08T07:35:02.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[{"level":2,"title":"四大特性","slug":"四大特性","link":"#四大特性","children":[{"level":3,"title":"数据一致性","slug":"数据一致性","link":"#数据一致性","children":[]}]}],"git":{"createdTime":1672647518000,"updatedTime":1715153702000,"contributors":[{"name":"davidliuk","email":"l729641074@163.com","commits":3},{"name":"刘大维","email":"davidliu@liudaweideMacBook-Pro.local","commits":3},{"name":"davidliu","email":"liudawei47@jd.com","commits":1}]},"readingTime":{"minutes":1.07,"words":320},"filePathRelative":"cs/database/mysql/transaction/1. ACID.md","localizedDate":"January 2, 2023","excerpt":"\\n<h2>四大特性</h2>\\n<ul>\\n<li>\\n<p>原子性（Ato'micity）</p>\\n<p>事务是不可分割的最小操作单元，要么全部成功，要么全部失败（并回滚）。</p>\\n</li>\\n<li>\\n<p>一致性（Con'sistency）</p>\\n<p>事务完成时，必须使所有的数据都保持一致状态。</p>\\n</li>\\n<li>\\n<p>隔离性（Isolation）</p>\\n<p>数据库系统提供的隔离机制（隔离级别），保证事务在不受外部并发操作影响的独立环境下运行。</p>\\n</li>\\n<li>\\n<p>持久性（Dura'bility）</p>\\n<p>事务一旦<strong>提交或回滚</strong>，他对数据库中数据的改变就是永久的。</p>\\n</li>\\n</ul>","autoDesc":true}`);export{c as comp,d as data};