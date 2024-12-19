import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as t,d as i,o as l}from"./app-PqS9YW_3.js";const n={};function r(c,e){return l(),t("div",null,e[0]||(e[0]=[i('<h1 id="死信队列" tabindex="-1"><a class="header-anchor" href="#死信队列"><span>死信队列</span></a></h1><h2 id="死信的概念" tabindex="-1"><a class="header-anchor" href="#死信的概念"><span>死信的概念</span></a></h2><p>即无法被消费的消息。</p><p><strong>导致的死信的几种原因</strong>：</p><ul><li>消息被拒（<code>Basic.Reject /Basic.Nack</code>) 且 <code>requeue = false</code>。</li><li>消息 TTL 过期。</li><li>队列消息长度达到限制；队列满了，无法再添加。</li></ul><h3 id="应用场景" tabindex="-1"><a class="header-anchor" href="#应用场景"><span>应用场景</span></a></h3><ul><li>保证数据不丢失</li><li>超时未支付砍单</li></ul><h2 id="什么是死信队列-如何导致的" tabindex="-1"><a class="header-anchor" href="#什么是死信队列-如何导致的"><span>什么是死信队列？如何导致的？</span></a></h2><p>DLX，全称为 <code>Dead-Letter-Exchange</code>，死信交换器，死信邮箱。当消息在一个队列中变成死信 (<code>dead message</code>) 之后，它能被重新被发送到另一个交换器中，这个交换器就是 DLX，绑定 DLX 的队列就称之为死信队列。</p><p>死信队列(Dead-Letter-Exchange)可以理解为是消息处理失败的接收者，其实也是一个普通的队列，当消息处理失败了，消息过期了，消息达到最大数量，消息被拒绝等...一系列的问题都可以由死信队列来接收，来处理。</p><p>死信队列的设置方法就是设置参数（x-dead-letter-exchange）来对死信队列进行一个捆绑，而捆绑的这个队列称为【死信队列】其实就是一个交换机路由队列，被捆绑死信的队列会有一个标识【DLX】，和普通的队</p><h2 id="rabbitmq-怎么实现延迟队列" tabindex="-1"><a class="header-anchor" href="#rabbitmq-怎么实现延迟队列"><span>RabbitMQ 怎么实现延迟队列？</span></a></h2><p>延迟队列指的是存储对应的延迟消息，消息被发送以后，并不想让消费者立刻拿到消息，而是等待特定时间后，消费者才能拿到这个消息进行消费。</p><p>RabbitMQ本身是没有延迟队列的，要实现延迟消息，一般有两种方式：</p><ol><li>通过RabbitMQ本身队列的特性来实现，需要使用RabbitMQ的死信交换机（Exchange）和消息的存活时间TTL（Time To Live）。</li><li>在 RabbitMQ 3.5.7及以上的版本提供了一个插件（rabbitmq-delayed-message-exchange）来实现延迟队列功能。同时，插件依赖Erlang/OPT 18.0及以上。</li></ol><p>也就是说，AMQP 协议以及RabbitMQ本身没有直接支持延迟队列的功能，但是可以通过TTL和DLX模拟出延迟队列的功能。</p><h2 id="死信队列做延迟队列的缺点" tabindex="-1"><a class="header-anchor" href="#死信队列做延迟队列的缺点"><span>死信队列做延迟队列的缺点</span></a></h2><p>看起来似乎没什么问题，但是在最开始的时候，就介绍过如果使用在消息属性上设置TTL的方式，消息可能并不会按时“死亡“，因为RabbitMQ只会检查第一个消息是否过期，如果过期则丢到死信部队列，如果第一个消息的延时时长很长，而第二个消息的延时时长很短，第二个消息并不会优先得到执行。</p><p>这个缺点无法弥补，只能用延迟队列插件来实现了</p><h2 id="什么是优先级队列" tabindex="-1"><a class="header-anchor" href="#什么是优先级队列"><span>什么是优先级队列？</span></a></h2><p>RabbitMQ 自 V3.5.0 有优先级队列实现，优先级高的队列会先被消费。</p><p>可以通过<code>x-max-priority</code>参数来实现优先级队列。不过，当消费速度大于生产速度且 Broker 没有堆积的情况下，优先级显得没有意义。</p><h2 id="如何解决消息挤压问题" tabindex="-1"><a class="header-anchor" href="#如何解决消息挤压问题"><span>如何解决消息挤压问题？</span></a></h2><p><strong>临时紧急扩容</strong>。先修复 consumer 的问题，确保其恢复消费速度，然后将现有 cnosumer 都停掉。新建一个 topic，partition 是原来的 10 倍，临时建立好原先 10 倍的 queue 数量。然后写一个临时的分发数据的 consumer 程序，这个程序部署上去消费积压的数据，消费之后不做耗时的处理，直接均匀轮询写入临时建立好的 10 倍数量的 queue。接着临时征用 10 倍的机器来部署 consumer，每一批 consumer 消费一个临时 queue 的数据。这种做法相当于是临时将 queue 资源和 consumer 资源扩大 10 倍，以正常的 10 倍速度来消费数据。等快速消费完积压数据之后，得恢复原先部署的架构，重新用原先的 consumer 机器来消费消息。</p><h2 id="如何解决消息队列的延时以及过期失效问题" tabindex="-1"><a class="header-anchor" href="#如何解决消息队列的延时以及过期失效问题"><span>如何解决消息队列的延时以及过期失效问题？</span></a></h2><p>RabbtiMQ 是可以设置过期时间的，也就是 TTL。如果消息在 queue 中积压超过一定的时间就会被 RabbitMQ 给清理掉，这个数据就没了。那这就是第二个坑了。这就不是说数据会大量积压在 mq 里，而是大量的数据会直接搞丢。我们可以采取一个方案，就是批量重导，这个我们之前线上也有类似的场景干过。就是大量积压的时候，我们当时就直接丢弃数据了，然后等过了高峰期以后，比如大家一起喝咖啡熬夜到晚上 12 点以后，用户都睡觉了。这个时候我们就开始写程序，将丢失的那批数据，写个临时程序，一点一点的查出来，然后重新灌入 mq 里面去，把白天丢的数据给他补回来。也只能是这样了。假设 1 万个订单积压在 mq 里面，没有处理，其中 1000 个订单都丢了，你只能手动写程序把那 1000 个订单给查出来，手动发到 mq 里去再补一次。</p>',26)]))}const d=a(n,[["render",r],["__file","死信队列.html.vue"]]),p=JSON.parse(`{"path":"/cs/middleware/rabbitmq/%E6%AD%BB%E4%BF%A1%E9%98%9F%E5%88%97.html","title":"死信队列","lang":"en-US","frontmatter":{"description":"死信队列 死信的概念 即无法被消费的消息。 导致的死信的几种原因： 消息被拒（Basic.Reject /Basic.Nack) 且 requeue = false。 消息 TTL 过期。 队列消息长度达到限制；队列满了，无法再添加。 应用场景 保证数据不丢失 超时未支付砍单 什么是死信队列？如何导致的？ DLX，全称为 Dead-Letter-Exc...","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/cs/middleware/rabbitmq/%E6%AD%BB%E4%BF%A1%E9%98%9F%E5%88%97.html"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"死信队列"}],["meta",{"property":"og:description","content":"死信队列 死信的概念 即无法被消费的消息。 导致的死信的几种原因： 消息被拒（Basic.Reject /Basic.Nack) 且 requeue = false。 消息 TTL 过期。 队列消息长度达到限制；队列满了，无法再添加。 应用场景 保证数据不丢失 超时未支付砍单 什么是死信队列？如何导致的？ DLX，全称为 Dead-Letter-Exc..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-06-27T01:21:47.000Z"}],["meta",{"property":"article:modified_time","content":"2024-06-27T01:21:47.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"死信队列\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-06-27T01:21:47.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[{"level":2,"title":"死信的概念","slug":"死信的概念","link":"#死信的概念","children":[{"level":3,"title":"应用场景","slug":"应用场景","link":"#应用场景","children":[]}]},{"level":2,"title":"什么是死信队列？如何导致的？","slug":"什么是死信队列-如何导致的","link":"#什么是死信队列-如何导致的","children":[]},{"level":2,"title":"RabbitMQ 怎么实现延迟队列？","slug":"rabbitmq-怎么实现延迟队列","link":"#rabbitmq-怎么实现延迟队列","children":[]},{"level":2,"title":"死信队列做延迟队列的缺点","slug":"死信队列做延迟队列的缺点","link":"#死信队列做延迟队列的缺点","children":[]},{"level":2,"title":"什么是优先级队列？","slug":"什么是优先级队列","link":"#什么是优先级队列","children":[]},{"level":2,"title":"如何解决消息挤压问题？","slug":"如何解决消息挤压问题","link":"#如何解决消息挤压问题","children":[]},{"level":2,"title":"如何解决消息队列的延时以及过期失效问题？","slug":"如何解决消息队列的延时以及过期失效问题","link":"#如何解决消息队列的延时以及过期失效问题","children":[]}],"git":{"createdTime":1678024743000,"updatedTime":1719451307000,"contributors":[{"name":"davidliuk","email":"l729641074@163.com","commits":2},{"name":"刘大维","email":"davidliu@liudaweideMacBook-Pro.local","commits":2}]},"readingTime":{"minutes":4.35,"words":1306},"filePathRelative":"cs/middleware/rabbitmq/死信队列.md","localizedDate":"March 5, 2023","excerpt":"\\n<h2>死信的概念</h2>\\n<p>即无法被消费的消息。</p>\\n<p><strong>导致的死信的几种原因</strong>：</p>\\n<ul>\\n<li>消息被拒（<code>Basic.Reject /Basic.Nack</code>) 且 <code>requeue = false</code>。</li>\\n<li>消息 TTL 过期。</li>\\n<li>队列消息长度达到限制；队列满了，无法再添加。</li>\\n</ul>\\n<h3>应用场景</h3>\\n<ul>\\n<li>保证数据不丢失</li>\\n<li>超时未支付砍单</li>\\n</ul>\\n<h2>什么是死信队列？如何导致的？</h2>","autoDesc":true}`);export{d as comp,p as data};
