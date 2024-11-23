import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,d as n,o as e}from"./app-CrF8c6p-.js";const l={};function t(h,i){return e(),a("div",null,i[0]||(i[0]=[n(`<h1 id="消息应答与确认" tabindex="-1"><a class="header-anchor" href="#消息应答与确认"><span>消息应答与确认</span></a></h1><p>RabbitMQ 的三种确认机制：</p><ol><li>Publish --&gt; Broker：confirmCallback</li><li>Exchange --&gt; Queue：returnCallback</li><li>Queue--&gt; Client：Ack机制</li></ol><h2 id="消息应答" tabindex="-1"><a class="header-anchor" href="#消息应答"><span>消息应答</span></a></h2><p>消费者完成一个任务可能需要一段时间，如果其中一个消费者处理一个长的任务并仅只完成了部分突然它挂掉了，会发生什么情况。RabbitMQ一旦向消费者传递了一条消息，便立即将该消息标记为刷除。在这种情况下，突然有个消费者挂掉了，我们将丢失正在处理的消息。以及后续发送给该消费这的消息，因为它无法接收到。</p><p>为了保证消息在发送过程中不丢失，rabbitmq引入消息应答机制，消息应答就是：消费者在接收到消息并且处理该消息之后，告诉rabbitmq它己经处理了，rabbitmq可以把该消息删除了。</p><p>三种方式：</p><ul><li>自动确认：none</li><li>手动确认：manual</li><li>根据一切情况确认：auto（比较麻烦）</li></ul><h3 id="自动应答" tabindex="-1"><a class="header-anchor" href="#自动应答"><span>自动应答</span></a></h3><p>接受到消息就当作应答了</p><p>不可靠，生产中不推荐</p><h3 id="手动应答" tabindex="-1"><a class="header-anchor" href="#手动应答"><span>手动应答</span></a></h3><p>工作线程执行完成以后手动应答。</p><ul><li><p>肯定确认</p><p><code>basicAck</code></p></li><li><p>否定确认</p><p><code>basicNack</code>（可以批量应答）</p><p><code>basicReject</code>（不可批量）</p></li></ul><p>需要实现ChannelAwareListener接口，可以获取到Channel</p><p><code>channel.basicAck(tag, false);</code></p><ol><li><p>deliveryTag（唯一标识 ID）：当一个消费者向 RabbitMQ 注册后，会建立起一个 Channel ，RabbitMQ 会用 basic.deliver 方法向消费者推送消息，这个方法携带了一个 delivery tag， 它代表了 RabbitMQ 向该 Channel 投递的这条消息的唯一标识 ID，是一个单调递增的正整数，delivery tag 的范围仅限于 Channel</p></li><li><p>multiple：为了减少网络流量，手动确认可以被批处理，当该参数为 true 时，则可以一次性确认 delivery_tag 小于等于传入值的所有消息</p><blockquote><p>建议不开启，因为还是有概率前面的消息没处理完就被应答造成丢失</p></blockquote></li></ol><p>批量应答好处：可以减少网络拥堵</p><p>推荐不开启批量应答，因为后面的应答了不代表前面的处理完了，这样可能产生丢失</p><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">@</span><span style="--shiki-light:#A626A4;--shiki-dark:#E5C07B;">RabbitListener</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">bindings</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> @</span><span style="--shiki-light:#A626A4;--shiki-dark:#E5C07B;">QueueBinding</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">(</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">        value</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> @</span><span style="--shiki-light:#A626A4;--shiki-dark:#E5C07B;">Queue</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">name</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;adornment.queue&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">)</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">        exchange</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> @</span><span style="--shiki-light:#A626A4;--shiki-dark:#E5C07B;">Exchange</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">name</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;neud.adornment&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> type</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> ExchangeTypes</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">TOPIC</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">)</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">        key</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;adornment.orders&quot;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">)</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> ackMode</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;MANUAL&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">)</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> void</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> listenTopicQueueMessage</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">(</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">        AdornmentOrder</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> adornmentOrder</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        @</span><span style="--shiki-light:#A626A4;--shiki-dark:#E5C07B;">Header</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">(</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">AmqpHeaders</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">DELIVERY_TAG</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">) </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">long</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> deliveryTag</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">        Channel</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> channel</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">) throws IOException {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    try</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">        // 创建订单</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">        adornmentOrderService</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">createAdornmentOrder</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(adornmentOrder);</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">        // 手动应答 &quot;amqp_deliveryTag&quot;</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">        channel</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">basicAck</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(deliveryTag, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">false</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">    } </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">catch</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> (</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">Exception</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;"> e</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">) {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">        log</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">error</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;处理订单异常&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, e);</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">        // 拒绝消息</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">        channel</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">basicReject</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(deliveryTag, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">false</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">    }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="自动重新入队" tabindex="-1"><a class="header-anchor" href="#自动重新入队"><span>自动重新入队</span></a></h3><p>如果消费者由于某些原因失去连接（其通道已关闭，连接已关闭或TCP连接丢失），导致消息未发送ACK确认，RabbitMQ 将了解到消息未完全处理，并将对其重新排队。如果此时其他消费者可以处理，它将很快将其重新分发给另一个消费者。这样，即使某个消费者偶尔死亡，也可以确保不会丢失任何消息。</p><h2 id="消息确认" tabindex="-1"><a class="header-anchor" href="#消息确认"><span>消息确认</span></a></h2><p>解决问题：</p><p>生产者发消息给MQ（交换机或队列）收不到的时候要进行确认机制处理，如果收不到就放到缓存中，以后重试。</p><p>生产者角度</p><h3 id="确认机制-confirm-确认模式" tabindex="-1"><a class="header-anchor" href="#确认机制-confirm-确认模式"><span>确认机制：Confirm 确认模式</span></a></h3><p>设置方法：<code>spring.rabbitmq.publisher-confirm-type=correlated</code></p><p>配置选项：</p><ul><li><p>NONE</p><p>禁用发布确认模式，默认值</p></li><li><p>CORRELATION</p><p>发布消息成功后会触发回调方法</p><p>异步批量确认</p></li><li><p>SIMPLE</p><p>同步确认消息，发一条确认一条，浪费时间</p><p>722ms</p></li></ul><h3 id="回退消息-return-回退模式" tabindex="-1"><a class="header-anchor" href="#回退消息-return-回退模式"><span>回退消息：return 回退模式</span></a></h3><p><strong>在仅开启了生产者确认机制的情况下，交换机接收到消息后，会直接给消息生产者发送确认消息</strong>，<strong>如果发现该消息不可路由，那么消息会被直接丢弃，此时生产者是不知道消息被丢弃这个事件的</strong>。那么如何让无法被路由的消息帮我想办法处理一下？通过设置 mandatory 参数可以在当消息传递过程中不可达目的地时将消息返回给生产者。</p><p>设置方法：Mandatory参数</p><p>交换机收到后，发现消息不可送达时，把消息返回生产者。</p><hr><p>问题：x-delayed-message 延迟插件，每次都强制触发returnedMessage回调方法</p><p>解决方案：</p><p>如果配置了发送回调ReturnCallback，插件延迟队列则会回调该方法，因为发送方确实没有投递到队列上，只是在交换器上暂存，等过期时间到了才会发往队列。</p><p>并非是BUG，而是有原因的，建议利用if 去拦截这个异常，判断延迟队列交换机名称，然后break;</p>`,39)]))}const r=s(l,[["render",t],["__file","消息应答.html.vue"]]),d=JSON.parse(`{"path":"/cs/middleware/rabbitmq/%E6%B6%88%E6%81%AF%E5%BA%94%E7%AD%94.html","title":"消息应答与确认","lang":"en-US","frontmatter":{"description":"消息应答与确认 RabbitMQ 的三种确认机制： Publish --> Broker：confirmCallback Exchange --> Queue：returnCallback Queue--> Client：Ack机制 消息应答 消费者完成一个任务可能需要一段时间，如果其中一个消费者处理一个长的任务并仅只完成了部分突然它挂掉了，会发生什么...","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/cs/middleware/rabbitmq/%E6%B6%88%E6%81%AF%E5%BA%94%E7%AD%94.html"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"消息应答与确认"}],["meta",{"property":"og:description","content":"消息应答与确认 RabbitMQ 的三种确认机制： Publish --> Broker：confirmCallback Exchange --> Queue：returnCallback Queue--> Client：Ack机制 消息应答 消费者完成一个任务可能需要一段时间，如果其中一个消费者处理一个长的任务并仅只完成了部分突然它挂掉了，会发生什么..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-06-27T01:21:47.000Z"}],["meta",{"property":"article:modified_time","content":"2024-06-27T01:21:47.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"消息应答与确认\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-06-27T01:21:47.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[{"level":2,"title":"消息应答","slug":"消息应答","link":"#消息应答","children":[{"level":3,"title":"自动应答","slug":"自动应答","link":"#自动应答","children":[]},{"level":3,"title":"手动应答","slug":"手动应答","link":"#手动应答","children":[]},{"level":3,"title":"自动重新入队","slug":"自动重新入队","link":"#自动重新入队","children":[]}]},{"level":2,"title":"消息确认","slug":"消息确认","link":"#消息确认","children":[{"level":3,"title":"确认机制：Confirm 确认模式","slug":"确认机制-confirm-确认模式","link":"#确认机制-confirm-确认模式","children":[]},{"level":3,"title":"回退消息：return 回退模式","slug":"回退消息-return-回退模式","link":"#回退消息-return-回退模式","children":[]}]}],"git":{"createdTime":1679321449000,"updatedTime":1719451307000,"contributors":[{"name":"刘大维","email":"davidliu@liudaweideMacBook-Pro.local","commits":3},{"name":"davidliuk","email":"l729641074@163.com","commits":2}]},"readingTime":{"minutes":3.9,"words":1171},"filePathRelative":"cs/middleware/rabbitmq/消息应答.md","localizedDate":"March 20, 2023","excerpt":"\\n<p>RabbitMQ 的三种确认机制：</p>\\n<ol>\\n<li>Publish --&gt; Broker：confirmCallback</li>\\n<li>Exchange --&gt; Queue：returnCallback</li>\\n<li>Queue--&gt; Client：Ack机制</li>\\n</ol>\\n<h2>消息应答</h2>\\n<p>消费者完成一个任务可能需要一段时间，如果其中一个消费者处理一个长的任务并仅只完成了部分突然它挂掉了，会发生什么情况。RabbitMQ一旦向消费者传递了一条消息，便立即将该消息标记为刷除。在这种情况下，突然有个消费者挂掉了，我们将丢失正在处理的消息。以及后续发送给该消费这的消息，因为它无法接收到。</p>","autoDesc":true}`);export{r as comp,d as data};
