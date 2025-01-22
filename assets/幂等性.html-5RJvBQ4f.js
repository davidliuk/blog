import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as p,d as i,o as l}from"./app-ktFCNIob.js";const o={};function a(r,e){return l(),p("div",null,e[0]||(e[0]=[i('<h1 id="幂等性" tabindex="-1"><a class="header-anchor" href="#幂等性"><span>幂等性</span></a></h1><p>Idempotence</p><p>防止消息重复消费</p><p>在 MQ 中，幂等性是指在消息传递过程中，无论消息被传递多少次，最终的结果都是一致的。</p><h3 id="概念" tabindex="-1"><a class="header-anchor" href="#概念"><span>概念</span></a></h3><p>用户对于同一操作发起的一次请求或者多次请求的结果是一致的，不会因为多次点击而产生了侧作用。举个最简单的例子，那就是支付，用户购买商品后支付，支付扣款成功，但是返回结果的时候网络异常，此时钱已经扣了，用户再次点击按钮，此时会进行第二次扣歌，返回结果成功，用户查询余额发现多扣钱了，流水记录也变成了两条。在以前的单应用系统中，我们只需要把数据操作放入事务中即可，发生错误立即回滚，但是再响应客户端的时候也有可能出现网络中断或者异常等等</p><p>触发重复请求的场景：</p><ol><li>用户多次点击支付按钮：在网络较差或系统过载情况下，用户由于不确定交易是否完成而重复点击。</li><li>自动重试机制：系统在超时或失败时重试请求，可能导致同一支付多次尝试。</li><li>网络数据包重复：数据包在网络传输过程中，复制出了多份，导致支付平台收到多次一模一样的请求。</li><li>异常恢复：在系统升级或崩溃后，未决事务需要根据已有记录恢复和完成。内部系统重发操作。</li></ol><h3 id="防止消息重复消费" tabindex="-1"><a class="header-anchor" href="#防止消息重复消费"><span><strong>防止消息重复消费</strong></span></a></h3><p>消费者在消费MQ中的消息时，MQ已把消息发送给消费者，消费者在给MQ返回ack时网络中断，故MQ未收到确认信息，该条消息会重新发给其他的消费者，或者在网络重连后再次发送给该消费者，但实际上该消费者已成诚功消费了该条消息，造成消费者消费了重复的消息。</p><p>解决：一般使用全局ID或者写个唯一标识比如时间戳或者UUID或者订单消费者消费MQ中的消息也可利用MQ的该id来判断，或者可按自己的规则生成一个全局唯一id,每次消费消息时用该id先判断该消息是否已消费过，</p><p>消费端的幂等性保障</p><p>在海量订单生成的业务高峰期，生产端有可能就会重复发生了消息，这时候消费端就要实现幂等性，这就意味着我们的消息永远不会被消费多次，即使我们收到了一样的消息，业界主流的幂等性有两种操作：</p><ul><li>唯一ID+指纹码机制，利用数据库主键去重，</li><li>利用 redis 的原子性去实现</li></ul><h3 id="解决方案" tabindex="-1"><a class="header-anchor" href="#解决方案"><span>解决方案</span></a></h3><blockquote><p><a href="https://www.bilibili.com/read/cv27934180/" target="_blank" rel="noopener noreferrer">参考</a></p></blockquote><ul><li><p>唯一ID+指纹码机制</p><p>数据库性能瓶颈</p><p>唯一D+指纹码<br> (业务规则、时间戳等拼接)机制，利用数据库主键去重<br> SELECT COUNT(1)FROM T ORDER WHERE ID=唯一ID+指纹码<br> 未查询到就insert,如有说明已处理过该消息，返回失败</p><p>优点：实现简单<br> 缺点：高并发下有数据库写入的性能瓶颈<br> 解决方案：根据D进行分库分表、算法路由</p></li><li><p>Redis setnx 原子性</p><p>最佳方法</p><p>利用 Redis 执行 setnx 命令，天然具有幂等性。从而实现不重复消费。</p><p>需要考虑的问题：<br> 是否要落库数据库，如落库，数据库和缓存如何做到数据的一致性<br> 不落库，数据存储在缓存中，如何设置定时同步的策略（可靠性保障）</p></li><li><p>Token机制</p></li><li><p>悲观锁/分布式锁机制</p><p>悲观锁依赖数据库提供的锁机制来实现，整个数据处理过程中，数据处于锁定状态，并与事务机制配合，能够有效实现业务幂等性。</p><p>分布式锁与悲观锁本质上相似，都通过串行化请求处理来实现幂等性。与悲观锁不同的是，分布式锁更轻量。在系统接收请求后，首先尝试获取分布式锁。如果成功获取锁，则执行业务逻辑；如果获取失败，则立即拒绝请求。</p></li><li><p>乐观锁机制</p><p>乐观锁主要依靠&quot;带条件更新&quot;（update with condition）来确保多次外部请求的一致性。在系统设计中，可以在数据表中添加版本号字段，用于标识当前数据的版本。每次对该数据表的记录进行更新时，都需要提供上一次更新的版本号。</p></li><li><p>状态机</p><p>在许多业务单据中，存在有限数量的状态，并且这些状态之间的流转顺序是固定的。如果状态已经处于下一个状态，那么再次应用上一个状态的变更逻辑是不会产生任何效果的，这就确保了有限状态机的幂等性。</p><p>例如，库存状态通常包括&quot;预扣中&quot;、&quot;扣减中&quot;、&quot;占用中&quot;和&quot;已释放&quot;等状态。如果系统重复调用扣减接口，而库存状态已经是&quot;扣减中&quot;，则可以直接返回结果。</p></li></ul><hr><ol><li>消费者端实现幂等性</li></ol><p>在消费者端，可以通过记录已经处理过的消息ID或者其他唯一标识符（如业务相关的唯一标识：订单号等全局唯一id），来避免重复处理同一条消息。当消费者接收到一条消息时，先检查该消息是否已经被处理过，如果已经处理过，则直接忽略该消息，否则执行相应的业务逻辑，并将该消息标记为已处理。</p><ol start="2"><li>生产者端实现幂等性</li></ol><p>在生产者端，可以通过为每条消息生成一个唯一的ID，并将该ID作为消息的一部分发送到RabbitMQ中。当消费者接收到一条消息时，先检查该消息的ID是否已经被处理过，如果已经处理过，则直接忽略该消息，否则执行相应的业务逻辑，并将该消息的ID标记为已处理。</p><blockquote><p>以上两种方式都需要保证消息的ID或者其他唯一标识符的<strong>唯一性</strong>，否则会导致消息的幂等性无法保证。此外，在实现幂等性的过程中，还需要考虑到消息重试、消息丢失等异常情况的处理，以保证系统的稳定性和可靠性。</p></blockquote><p>乐观锁：记录一个版本号version</p><p>发送消息的时候带着版本号version</p><p><img src="https://cdn.jsdelivr.net/gh/davidliuk/images@master/blog/截屏2024-05-25 下午8.04.30.png" alt="截屏2024-05-25 下午8.04.30" loading="lazy"></p><hr><p>幂等</p><p>查询业务，例如根据id查询商图</p><p>删除业务，例如根据id别除商品</p><p>非幂等</p><p>用户下单业务，需要扣减库存</p><p>用户退款业务，需要恢复余额</p>',33)]))}const s=t(o,[["render",a],["__file","幂等性.html.vue"]]),c=JSON.parse(`{"path":"/cs/middleware/rabbitmq/problem/%E5%B9%82%E7%AD%89%E6%80%A7.html","title":"幂等性","lang":"en-US","frontmatter":{"description":"幂等性 Idempotence 防止消息重复消费 在 MQ 中，幂等性是指在消息传递过程中，无论消息被传递多少次，最终的结果都是一致的。 概念 用户对于同一操作发起的一次请求或者多次请求的结果是一致的，不会因为多次点击而产生了侧作用。举个最简单的例子，那就是支付，用户购买商品后支付，支付扣款成功，但是返回结果的时候网络异常，此时钱已经扣了，用户再次点击...","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/cs/middleware/rabbitmq/problem/%E5%B9%82%E7%AD%89%E6%80%A7.html"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"幂等性"}],["meta",{"property":"og:description","content":"幂等性 Idempotence 防止消息重复消费 在 MQ 中，幂等性是指在消息传递过程中，无论消息被传递多少次，最终的结果都是一致的。 概念 用户对于同一操作发起的一次请求或者多次请求的结果是一致的，不会因为多次点击而产生了侧作用。举个最简单的例子，那就是支付，用户购买商品后支付，支付扣款成功，但是返回结果的时候网络异常，此时钱已经扣了，用户再次点击..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/davidliuk/images@master/blog/%E6%88%AA%E5%B1%8F2024-05-25%20%E4%B8%8B%E5%8D%888.04.30.png"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-06-27T01:21:47.000Z"}],["meta",{"property":"article:modified_time","content":"2024-06-27T01:21:47.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"幂等性\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/davidliuk/images@master/blog/%E6%88%AA%E5%B1%8F2024-05-25%20%E4%B8%8B%E5%8D%888.04.30.png\\"],\\"dateModified\\":\\"2024-06-27T01:21:47.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[{"level":3,"title":"概念","slug":"概念","link":"#概念","children":[]},{"level":3,"title":"防止消息重复消费","slug":"防止消息重复消费","link":"#防止消息重复消费","children":[]},{"level":3,"title":"解决方案","slug":"解决方案","link":"#解决方案","children":[]}],"git":{"createdTime":1679321449000,"updatedTime":1719451307000,"contributors":[{"name":"刘大维","email":"davidliu@liudaweideMacBook-Pro.local","commits":4},{"name":"davidliuk","email":"l729641074@163.com","commits":1}]},"readingTime":{"minutes":6,"words":1800},"filePathRelative":"cs/middleware/rabbitmq/problem/幂等性.md","localizedDate":"March 20, 2023","excerpt":"\\n<p>Idempotence</p>\\n<p>防止消息重复消费</p>\\n<p>在 MQ 中，幂等性是指在消息传递过程中，无论消息被传递多少次，最终的结果都是一致的。</p>\\n<h3>概念</h3>\\n<p>用户对于同一操作发起的一次请求或者多次请求的结果是一致的，不会因为多次点击而产生了侧作用。举个最简单的例子，那就是支付，用户购买商品后支付，支付扣款成功，但是返回结果的时候网络异常，此时钱已经扣了，用户再次点击按钮，此时会进行第二次扣歌，返回结果成功，用户查询余额发现多扣钱了，流水记录也变成了两条。在以前的单应用系统中，我们只需要把数据操作放入事务中即可，发生错误立即回滚，但是再响应客户端的时候也有可能出现网络中断或者异常等等</p>","autoDesc":true}`);export{s as comp,c as data};
