import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as t,d as p,o as r}from"./app-ktFCNIob.js";const n={};function i(o,a){return r(),t("div",null,a[0]||(a[0]=[p('<h1 id="seata" tabindex="-1"><a class="header-anchor" href="#seata"><span>Seata</span></a></h1><blockquote><p><a href="https://juejin.cn/post/7304984457525706790?utm_source=gold_browser_extension" target="_blank" rel="noopener noreferrer">教程</a></p></blockquote><ul><li>本地事务：同一数据库和服务器，称为本地事务。 在计算机系统中，更多的是通过关系型数据库来控制事务，这是利用数据库本身的事务特性来实现的，因此叫数据库事务，由于应用主要靠关系数据库来控制事务，而数据库通常和应用在同一个服务器，所以基于关系型数据库的事务又被称为本地事务。</li><li>分布式事务： 分布式事务指事务的参与者、支持事务的服务器、资源服务器以及事务管理器分别位于<strong>不同的分布式系统</strong>的不同节点之上，且属于不同的应用，分布式事务需要保证这些操作要么全部成功，要么全部失败。本质上来说，分布式事务就是为了保证不同数据库的数据一致性。</li></ul><p><strong>分布式事务的引入</strong></p><p>举例：分布式系统会把一个应用系统拆分为可独立部署的多个服务，因此需要服务与服务之间远程协作才能完成事务操 作，这种分布式系统环境下由不同的服务之间通过网络远程协作完成事务称之为分布式事务，例如用户注册送积分事务、创建订单减库存事务，银行转账事务等都是分布式事务。</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5996570bb4bb40a18d76d2165b25c4fd~tplv-k3u1fbpfcp-jj-mark:3024:0:0:0:q75.awebp#?w=1983&amp;h=839&amp;s=33560&amp;e=png&amp;b=fdfdfd" alt="img" loading="lazy"></p><p>通过以上的图中我们可以看出，其实只要涉及到操作多个数据源，就可能会产生事务问题，当然在实际开发中我们要尽量避免这种问题的出现，当然如果避免不了，我们就需要进行解决，在我们的微服务系统架构中，目前比较好，比较常用的解决方案就是Seata。</p><hr><p>Seata 是一款开源的分布式事务解决方案，致力于提供高性能和简单易用的分布式事务服务。Seata 将为用户提供了 AT、TCC、SAGA 和 XA 事务模式，为用户打造一站式的分布式解决方案。</p><p>在我们的微服务系统中，对应业务被对应的拆分成独立模块，在官方提供的架构图中，我们可以看出当前是三个服务分别是：</p><ul><li>仓储服务：对给定的商品进行增删操作记录数量。</li><li>订单服务：根据采购者的需求创建订单。</li><li>账户服务：从用户账户中扣除余额、积分等。</li></ul><p>在这套架构中，用户下单购买商品的业务，就需要三个服务来完成，每个服务内部的数据一致性由<strong>本地事务</strong>来保证，但是全局的数据一致性问题就没办法保证，Seata就是来进行解决这种问题的解决方案。</p><h3 id="seata基本架构" tabindex="-1"><a class="header-anchor" href="#seata基本架构"><span>Seata基本架构</span></a></h3><ul><li>TC (Transaction Coordinator) - 事务协调者；维护全局和分支事务的状态，驱动全局事务提交或回滚。</li><li>TM (Transaction Manager) - 事务管理器；定义全局事务的范围：开始全局事务、提交或回滚全局事务。</li><li>RM (Resource Manager) - 资源管理器；管理分支事务处理的资源，与TC交谈以注册分支事务和报告分支事务的状态，并驱动分支事务提交或回滚。</li></ul><p>注：上述的TC (Transaction Coordinator) - 事务协调者 也就是<code>Seata-Server</code>服务端。</p><h3 id="分布式事务解决方案" tabindex="-1"><a class="header-anchor" href="#分布式事务解决方案"><span>分布式事务解决方案</span></a></h3><p>Seata提供了四种不同的分布式事务解决方案：</p><ul><li>XA模式：强一致性分阶段事务模式，牺牲了一定的可用性，无业务侵入。</li><li>TCC模式：最终一致的分阶段事务模式，有业务侵入。</li><li>AT模式：最终一致的分阶段事务模式，无业务侵入，也是<strong>Seata的默认模式</strong>。</li><li>SAGA模式：长事务模式，有业务侵入。</li></ul><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/dd4c128c82ed49358b9e64eda5db07be~tplv-k3u1fbpfcp-jj-mark:3024:0:0:0:q75.awebp#?w=1481&amp;h=551&amp;s=137882&amp;e=png&amp;b=d5d5d5" alt="四种模型对比" loading="lazy"></p><h4 id="at模式" tabindex="-1"><a class="header-anchor" href="#at模式"><span>AT模式</span></a></h4><p>**基本概念：**AT模式是一种无侵入的分布式事务解决方案，在AT模式下，用户只需要关注自己的“业务SQL”,用户的“业务SQL”作为一阶段，Seata框架会自动的生成事务的二阶段提交和回滚。</p><p><strong>整体机制</strong></p><p>两阶段提交协议的演变：</p><ul><li>一阶段：业务数据和回滚日志在同一个本地事务中提交，释放本地锁和连接资源。</li><li>二阶段：提交异步化，非常快速的完成；回滚通过一阶段的回滚日志进行反向补偿。</li></ul><p><strong>一阶段</strong>：在一阶段中，Seata会拦截“业务SQL”,首先解析SQL的语义，找到要更新的业务数据，在数据更新前，保存下来“undo”,然后执行“业务SQL”更新数据，更新之后再次保存数据“redo”,最后生成行锁，这些操作都在本地数据库事务内完成，这样保证了一阶段的原子性。</p><p><strong>二阶段</strong>：相对一阶段，二阶段比较简单，负责整体的回滚和提交，如果之前的一阶段中有本地事务没有通过，那么就执行全局回滚，否则执行全局提交，回滚用到的就是一阶段记录的“undo Log”，通过回滚记录生成反向更新SQL并执行，以完成分支的回滚。当然事务完成后会释放所有资源和删除所有的日志。</p><h4 id="xa模式" tabindex="-1"><a class="header-anchor" href="#xa模式"><span>XA模式</span></a></h4><h6 id="为什么要在seata中支持xa" tabindex="-1"><a class="header-anchor" href="#为什么要在seata中支持xa"><span>为什么要在Seata中支持XA</span></a></h6><p>为什么要在 Seata 中增加 XA 模式呢？支持 XA 的意义在哪里呢？</p><p>本质上，Seata 已经支持的 3 大事务模式：<strong>AT、TCC、Saga 都是补偿型 的</strong>。</p><p>补偿型事务处理机制构建在事务资源之上（要么在中间件层面，要么在应用层面），事务资源 本身对分布式事务是无感知的。</p><p>事务资源对分布式事务的无感知存在一个根本性的问题：无法做到真正的全局一致性 。</p><p>比如，一条库存记录，处在 补偿型 事务处理过程中，由 100 扣减为 50。此时，仓库管理员连接数据库，查询统计库存，就看到当前的 50。之后，事务因为异外回滚，库存会被补偿回滚为 100。显然，仓库管理员查询统计到的 50 就是 脏 数据。所以补偿型事务是存在中间状态的（中途可能读到脏数据）。</p><h6 id="xa的价值" tabindex="-1"><a class="header-anchor" href="#xa的价值"><span>XA的价值</span></a></h6><p>与 补偿型 不同，XA 协议 要求 事务资源 本身提供对规范和协议的支持。</p><p>因为 事务资源 感知并参与分布式事务处理过程，所以 事务资源（如数据库）可以保障从任意视角对数据的访问有效隔离，满足全局数据一致性。</p><p>比如，刚才提到的库存更新场景，XA 事务处理过程中，中间状态数据库存 50 由数据库本身保证，是不会仓库管理员的查询统计看到的。</p><p>除了 全局一致性 这个根本性的价值外，支持 XA 还有如下几个方面的好处：</p><ol><li>业务无侵入：和 AT 一样，XA 模式将是业务无侵入的，不给应用设计和开发带来额外负担。</li><li>数据库的支持广泛：XA 协议被主流关系型数据库广泛支持，不需要额外的适配即可使用。</li><li>多语言支持容易：因为不涉及 SQL 解析，XA 模式对 Seata 的 RM 的要求比较少。</li><li>传统基于 XA 应用的迁移：传统的，基于 XA 协议的应用，迁移到 Seata 平台，使用 XA 模式将更平滑。</li></ol><h4 id="tcc事务模式" tabindex="-1"><a class="header-anchor" href="#tcc事务模式"><span>TCC事务模式</span></a></h4><h5 id="什么是tcc" tabindex="-1"><a class="header-anchor" href="#什么是tcc"><span>什么是TCC</span></a></h5><p>TCC 是分布式事务中的二阶段提交协议，它的全称为 Try-Confirm-Cancel，即资源预留（Try）、确认操作（Confirm）、取消操作（Cancel），他们的具体含义如下：</p><ul><li>Try：对业务资源的检查并预留。</li><li>Confirm：对业务处理进行提交，即 commit 操作，只要 Try 成功，那么该步骤一定成功。</li><li>Cancel：对业务处理进行取消，即回滚操作，该步骤回对 Try 预留的资源进行释放。</li></ul><p>TCC 是一种侵入式的分布式事务解决方案，以上三个操作都需要业务系统自行实现，对业务系统有着非常大的入侵性，设计相对复杂，但优点是 TCC 完全不依赖数据库，能够实现跨数据库、跨应用资源管理，对这些不同数据访问通过侵入式的编码方式实现一个原子操作，更好地解决了在各种复杂业务场景下的分布式事务问题。</p><h5 id="seata的tcc模式" tabindex="-1"><a class="header-anchor" href="#seata的tcc模式"><span>Seata的TCC模式</span></a></h5><p>Seata TCC 模式跟通用型 TCC 模式原理一致。</p><p><strong>TCC和AT区别</strong></p><p>AT 模式基于 <strong>支持本地 ACID 事务</strong> 的 <strong>关系型数据库</strong>：</p><ul><li>一阶段 prepare 行为：在本地事务中，一并提交业务数据更新和相应回滚日志记录。</li><li>二阶段 commit 行为：马上成功结束，<strong>自动</strong> 异步批量清理回滚日志。</li><li>二阶段 rollback 行为：通过回滚日志，<strong>自动</strong> 生成补偿操作，完成数据回滚。</li></ul><p>相应的，TCC 模式，不依赖于底层数据资源的事务支持：</p><ul><li>一阶段 prepare 行为：调用 <strong>自定义</strong> 的 prepare 逻辑。</li><li>二阶段 commit 行为：调用 <strong>自定义</strong> 的 commit 逻辑。</li><li>二阶段 rollback 行为：调用 <strong>自定义</strong> 的 rollback 逻辑。</li></ul><p>所谓 TCC 模式，是指支持把 <strong>自定义</strong> 的分支事务纳入到全局事务的管理中。</p>',52)]))}const c=e(n,[["render",i],["__file","index.html.vue"]]),d=JSON.parse(`{"path":"/se/lang/java/framework/distributed/seata/","title":"Seata","lang":"en-US","frontmatter":{"description":"Seata 教程 本地事务：同一数据库和服务器，称为本地事务。 在计算机系统中，更多的是通过关系型数据库来控制事务，这是利用数据库本身的事务特性来实现的，因此叫数据库事务，由于应用主要靠关系数据库来控制事务，而数据库通常和应用在同一个服务器，所以基于关系型数据库的事务又被称为本地事务。 分布式事务： 分布式事务指事务的参与者、支持事务的服务器、资源服务...","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/se/lang/java/framework/distributed/seata/"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"Seata"}],["meta",{"property":"og:description","content":"Seata 教程 本地事务：同一数据库和服务器，称为本地事务。 在计算机系统中，更多的是通过关系型数据库来控制事务，这是利用数据库本身的事务特性来实现的，因此叫数据库事务，由于应用主要靠关系数据库来控制事务，而数据库通常和应用在同一个服务器，所以基于关系型数据库的事务又被称为本地事务。 分布式事务： 分布式事务指事务的参与者、支持事务的服务器、资源服务..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5996570bb4bb40a18d76d2165b25c4fd~tplv-k3u1fbpfcp-jj-mark:3024:0:0:0:q75.awebp#?w=1983&h=839&s=33560&e=png&b=fdfdfd"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-11-09T18:37:53.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-09T18:37:53.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Seata\\",\\"image\\":[\\"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5996570bb4bb40a18d76d2165b25c4fd~tplv-k3u1fbpfcp-jj-mark:3024:0:0:0:q75.awebp#?w=1983&h=839&s=33560&e=png&b=fdfdfd\\",\\"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/dd4c128c82ed49358b9e64eda5db07be~tplv-k3u1fbpfcp-jj-mark:3024:0:0:0:q75.awebp#?w=1481&h=551&s=137882&e=png&b=d5d5d5\\"],\\"dateModified\\":\\"2024-11-09T18:37:53.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[{"level":3,"title":"Seata基本架构","slug":"seata基本架构","link":"#seata基本架构","children":[]},{"level":3,"title":"分布式事务解决方案","slug":"分布式事务解决方案","link":"#分布式事务解决方案","children":[]}],"git":{"createdTime":1715153702000,"updatedTime":1731177473000,"contributors":[{"name":"刘大维","email":"davidliu@liudaweideMacBook-Pro-3.local","commits":1}]},"readingTime":{"minutes":8.27,"words":2481},"filePathRelative":"se/lang/java/framework/distributed/seata/README.md","localizedDate":"May 8, 2024","excerpt":"\\n<blockquote>\\n<p><a href=\\"https://juejin.cn/post/7304984457525706790?utm_source=gold_browser_extension\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">教程</a></p>\\n</blockquote>\\n<ul>\\n<li>本地事务：同一数据库和服务器，称为本地事务。 在计算机系统中，更多的是通过关系型数据库来控制事务，这是利用数据库本身的事务特性来实现的，因此叫数据库事务，由于应用主要靠关系数据库来控制事务，而数据库通常和应用在同一个服务器，所以基于关系型数据库的事务又被称为本地事务。</li>\\n<li>分布式事务： 分布式事务指事务的参与者、支持事务的服务器、资源服务器以及事务管理器分别位于<strong>不同的分布式系统</strong>的不同节点之上，且属于不同的应用，分布式事务需要保证这些操作要么全部成功，要么全部失败。本质上来说，分布式事务就是为了保证不同数据库的数据一致性。</li>\\n</ul>","autoDesc":true}`);export{c as comp,d as data};