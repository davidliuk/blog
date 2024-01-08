import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as t,d as r}from"./app-9107e99b.js";const i={},d=r('<h1 id="trace-note-系统设计" tabindex="-1"><a class="header-anchor" href="#trace-note-系统设计" aria-hidden="true">#</a> Trace Note 系统设计</h1><ul><li>用户系统</li><li>秒杀系统</li><li>评论系统</li><li>地理系统</li><li>上传系统</li></ul><h3 id="redisson-分布式延迟队列-rdelayedqueue" tabindex="-1"><a class="header-anchor" href="#redisson-分布式延迟队列-rdelayedqueue" aria-hidden="true">#</a> Redisson 分布式延迟队列 RDelayedQueue</h3><p>Redisson 是一个基于 redis 实现的 Java 驻内存数据网格，它不仅提供了一系列的分布式的 Java 常用对象，还提供了许多分布式服务。</p><p>Redisson 除了提供我们常用的分布式锁外，还提供了一个分布式延迟队列 RDelayedQueue，他是一种基于 zset 结构实现的延迟队列，其实现类是 RedissonDelayedQueue。</p><h3 id="rabbitmq-死信队列" tabindex="-1"><a class="header-anchor" href="#rabbitmq-死信队列" aria-hidden="true">#</a> RabbitMQ 死信队列</h3><p>除了 RocketMQ 的延迟队列，RabbitMQ 的死信队列也可以实现消息延迟功能。</p><p>当 RabbitMQ 中的一条正常消息，因为过了存活时间（TTL 过期）、队列长度超限、被消费者拒绝等原因无法被消费时，就会被当成一条死信消息，投递到死信队列。<br> 基于这样的机制，我们可以给消息设置一个 ttl，然后故意不消费消息，等消息过期就会进入死信队列，我们再消费死信队列即可。</p><p>通过这样的方式，就可以达到同 RocketMQ 延迟消息一样的效果。</p><p>优点：同 RocketMQ 一样，RabbitMQ 同样可以使业务解耦，基于其集群的扩展性，也可以实现高可用、高性能的目标。</p><p>缺点：死信队列本质还是一个队列，队列都是先进先出，如果队头的消息过期时间比较长，就会导致后面过期的消息无法得到及时消费，造成消息阻塞。</p><p>总结：除了增加系统复杂度之外，死信队列的阻塞问题也是需要我们重点关注的。</p><h3 id="rocketmq-延迟消息-rabbitmq-延迟交换机插件" tabindex="-1"><a class="header-anchor" href="#rocketmq-延迟消息-rabbitmq-延迟交换机插件" aria-hidden="true">#</a> RocketMQ 延迟消息/RabbitMQ 延迟交换机插件</h3><p>延迟消息，当消息写入到 Broker 后，不会立刻被消费者消费，需要等待指定的时长后才可被消费处理的消息，称为延时消息。</p><p>在订单创建之后，我们就可以把订单作为一条消息投递到 rocketmq，并将延迟时间设置为 30 分钟，这样，30 分钟后我们定义的 consumer 就可以消费到这条消息，然后检查用户是否支付了这个订单。</p><p>通过延迟消息，我们就可以将业务解耦，极大地简化我们的代码逻辑。</p><p>优点：可以使代码逻辑清晰，系统之间完全解耦，只需关注生产及消费消息即可。另外其吞吐量极高，最多可以支撑万亿级的数据量。</p><p>缺点：相对来说 mq 是重量级的组件，引入 mq 之后，随之而来的消息丢失、幂等性问题等都加深了系统的复杂度。</p><p>总结：通过 mq 进行系统业务解耦，以及对系统性能削峰填谷已经是当前高性能系统的标配。</p>',19),o=[d];function c(s,n){return a(),t("div",null,o)}const h=e(i,[["render",c],["__file","trace-note.html.vue"]]);export{h as default};
