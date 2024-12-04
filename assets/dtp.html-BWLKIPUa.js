import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as e,d as n,o}from"./app-D4ZvIHfO.js";const r={};function a(s,t){return o(),e("div",null,t[0]||(t[0]=[n('<h1 id="distributed-transaction-processing" tabindex="-1"><a class="header-anchor" href="#distributed-transaction-processing"><span>Distributed Transaction Processing</span></a></h1><p>分布式事务有</p><ul><li>2PC(Two-phase Commit), 3PC</li><li>TCC(Try-Confirm-Cancel)</li><li>事务消息</li></ul><p>事务消息适用的场景主要是那些需要异步更新数据，并且对数据实时性要求不太高的场景。比如我们在开始时提到的那个例子，在创建订单后，如果出现短暂的几秒，购物车里的商品没有被及时清空，也不是完全不可接受的，只要最终购物车的数据和订单数据保持一致就可以了。</p><p>SEATA mode</p><ul><li>AT</li><li>TCC</li><li>SAGA</li><li>XA</li></ul><hr><ol><li><p>2PC两段提交协议</p><p>3PC三段提交协议(弥补两端提交协议缺点)</p></li><li><p>TCC或者GTS(阿里)</p></li><li><p>消息中间件最终一致性</p></li><li><p>LCN分布式事物，理念“LCN并不生产事务，LCN只是本地事务的搬运工”。</p></li></ol><hr><p>术语</p><ul><li><p>TC (Transaction Coordinator) - 事务协调者<br> 维护全局和分支事务的状态，驱动全局事务提交或回滚。</p></li><li><p>TM (Transaction Manager) - 事务管理器<br> 定义全局事务的范围：开始全局事务、提交或回滚全局事务。</p></li><li><p>RM (Resource Manager) - 资源管理器<br> 管理分支事务处理的资源，与TC交谈以注册分支事务和报告分支事务的状态，并驱动分支事务提交或回滚。</p></li></ul><h3 id="_2pc" tabindex="-1"><a class="header-anchor" href="#_2pc"><span>2PC</span></a></h3><ol><li>PreCommit</li><li>DoCommit</li></ol><h3 id="_3pc" tabindex="-1"><a class="header-anchor" href="#_3pc"><span>3PC</span></a></h3><ol><li>CanCommit</li><li>PreCommit</li><li>DoCommit</li></ol><h4 id="cancommit" tabindex="-1"><a class="header-anchor" href="#cancommit"><span>CanCommit</span></a></h4><p>之前2PC的一阶段是本地事务执行结束后，最后不Commit,等其它服务都执行结束并返回Yes，由协调者发生commit才真正执行commit。而这里的CanCommit指的是 <strong>尝试获取数据库锁</strong> 如果可以，就返回Yes。</p><p><strong>这阶段主要分为2步</strong></p><ul><li>事务询问 <strong>协调者</strong> 向 <strong>参与者</strong> 发送CanCommit请求。询问是否可以执行事务提交操作。然后开始等待 <strong>参与者</strong> 的响应。</li><li>响应反馈 <strong>参与者</strong> 接到CanCommit请求之后，正常情况下，如果其自身认为可以顺利执行事务，则返回Yes响应，并进入预备状态。否则反馈No</li></ul><p>在阶段一中，如果所有的参与者都返回Yes的话，那么就会进入PreCommit阶段进行事务预提交。这里的<strong>PreCommit阶段</strong> 跟上面的第一阶段是差不多的，只不过这里 <strong>协调者和参与者都引入了超时机制</strong> （2PC中只有协调者可以超时，参与者没有超时机制）。</p><p>3PC第一阶段可以理解为心跳机制，检查服务是否健康。ping一下发现服务是不可用的直接返回失败了，没必要再进行预处理阶段。预处理或者回滚比ping一下资源消耗是要小的。</p><p>相比较2PC而言，3PC对于协调者（<strong>Coordinator</strong>）和参与者（<strong>Partcipant</strong>）都设置了超时时间，而2PC只有协调者才拥有超时机制。这解决了一个什么问题呢？</p><p>这个优化点，主要是避免了参与者在长时间无法与协调者节点通讯（协调者挂掉了）的情况下，无法释放资源的问题，因为参与者自身拥有超时机制会在超时后，</p><p>自动进行本地commit从而进行释放资源。而这种机制也侧面降低了整个事务的阻塞时间和范围。</p><p>另外，通过<strong>CanCommit、PreCommit、DoCommit</strong>三个阶段的设计，相较于2PC而言，多设置了一个<strong>缓冲阶段</strong>保证了在最后提交阶段之前各参与节点的状态是一致的。</p><p>以上就是3PC相对于2PC的一个提高（相对缓解了2PC中的前两个问题），但是3PC依然没有完全解决数据不一致的问题。</p>',26)]))}const m=i(r,[["render",a],["__file","dtp.html.vue"]]),c=JSON.parse(`{"path":"/se/design/system/distributed/dtp.html","title":"Distributed Transaction Processing","lang":"en-US","frontmatter":{"description":"Distributed Transaction Processing 分布式事务有 2PC(Two-phase Commit), 3PC TCC(Try-Confirm-Cancel) 事务消息 事务消息适用的场景主要是那些需要异步更新数据，并且对数据实时性要求不太高的场景。比如我们在开始时提到的那个例子，在创建订单后，如果出现短暂的几秒，购物车里的商...","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/se/design/system/distributed/dtp.html"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"Distributed Transaction Processing"}],["meta",{"property":"og:description","content":"Distributed Transaction Processing 分布式事务有 2PC(Two-phase Commit), 3PC TCC(Try-Confirm-Cancel) 事务消息 事务消息适用的场景主要是那些需要异步更新数据，并且对数据实时性要求不太高的场景。比如我们在开始时提到的那个例子，在创建订单后，如果出现短暂的几秒，购物车里的商..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-11-22T03:15:57.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-22T03:15:57.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Distributed Transaction Processing\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-22T03:15:57.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[{"level":3,"title":"2PC","slug":"_2pc","link":"#_2pc","children":[]},{"level":3,"title":"3PC","slug":"_3pc","link":"#_3pc","children":[]}],"git":{"createdTime":1715153702000,"updatedTime":1732245357000,"contributors":[{"name":"David Liu","email":"liudawei@seas.upenn.edu","commits":1}]},"readingTime":{"minutes":3.12,"words":937},"filePathRelative":"se/design/system/distributed/dtp.md","localizedDate":"May 8, 2024","excerpt":"\\n<p>分布式事务有</p>\\n<ul>\\n<li>2PC(Two-phase Commit), 3PC</li>\\n<li>TCC(Try-Confirm-Cancel)</li>\\n<li>事务消息</li>\\n</ul>\\n<p>事务消息适用的场景主要是那些需要异步更新数据，并且对数据实时性要求不太高的场景。比如我们在开始时提到的那个例子，在创建订单后，如果出现短暂的几秒，购物车里的商品没有被及时清空，也不是完全不可接受的，只要最终购物车的数据和订单数据保持一致就可以了。</p>\\n<p>SEATA mode</p>\\n<ul>\\n<li>AT</li>\\n<li>TCC</li>\\n<li>SAGA</li>\\n<li>XA</li>\\n</ul>","autoDesc":true}`);export{m as comp,c as data};
