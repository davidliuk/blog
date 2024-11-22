import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as s,d as t,o as l}from"./app-B6s9NXTg.js";const n={};function e(h,i){return l(),s("div",null,i[0]||(i[0]=[t(`<h1 id="消息丢失" tabindex="-1"><a class="header-anchor" href="#消息丢失"><span>消息丢失</span></a></h1><h2 id="产生原因" tabindex="-1"><a class="header-anchor" href="#产生原因"><span>产生原因</span></a></h2><p>三个阶段：消息到 MQ 的过程中搞丢，MQ 自己搞丢，MQ 到消费过程中搞丢。</p><ul><li>生产阶段：生产者弄丢了数据。生产者将数据发送到 RabbitMQ 的时候，可能数据就在半路给搞丢了，因为网络问题或服务器宕机等。</li><li>存储阶段：RabbitMQ 弄丢了数据。MQ 还没有持久化自己挂了</li><li>消费阶段：消费端弄丢了数据。刚消费到，还没处理，结果进程挂了，比如重启。</li></ul><h2 id="解决方案" tabindex="-1"><a class="header-anchor" href="#解决方案"><span>解决方案</span></a></h2><p><img src="https://cdn.jsdelivr.net/gh/davidliuk/images@master/blog/截屏2023-03-13 17.48.04.png" alt="截屏2023-03-13 17.48.04" loading="lazy"></p><ul><li>生产者到 RabbitMQ：事务机制、Confirm 机制。</li><li>RabbitMQ 自身：持久化、集群（普通模式、镜像模式）。</li><li>RabbitMQ 到消费者：basicAck 机制、死信队列、消息补偿机制。</li></ul><h3 id="针对生产者" tabindex="-1"><a class="header-anchor" href="#针对生产者"><span>针对生产者</span></a></h3><p>注意：事务机制和 Confirm 机制是互斥的，两者不能共存，会导致 RabbitMQ 报错。</p><h4 id="方案1-rabbitmq-事务" tabindex="-1"><a class="header-anchor" href="#方案1-rabbitmq-事务"><span>方案1 ：RabbitMQ 事务</span></a></h4><p>可以选择用 RabbitMQ 提供的事务功能，就是生产者发送数据之前开启 RabbitMQ 事务 channel.txSelect，然后发送消息，如果消息没有成功被 RabbitMQ 接收到，那么生产者会收到异常报错，此时就可以回滚事务 channel.txRollback，然后重试发送消息；如果收到了消息，那么可以提交事务 channel.txCommit。</p><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// 开启事务</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">channel</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">txSelect</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">try</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">      // 这里发送消息</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">} </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">catch</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> (</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">Exception</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;"> e</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">) {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">      channel</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">txRollback</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    // 这里再次重发这条消息</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">}</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// 提交事务</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">channel</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">txCommit</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">();</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>缺点：</p><p>RabbitMQ 事务机制是同步的，你提交一个事务之后会阻塞在那儿，采用这种方式基本上吞吐量会下来，因为太耗性能。</p><p>事务可以保证消息100%传递，可以通过事务的回滚去记录日志，后面定时再次发送当前消息。事务的操作，效率太低，加了事务操作后，比平时的操作效率的至少要慢250倍。</p><h4 id="方案2-confirm-机制" tabindex="-1"><a class="header-anchor" href="#方案2-confirm-机制"><span>方案2： confirm 机制</span></a></h4><p>事务机制和 confirm 机制最大的不同在于，事务机制是同步的，你提交一个事务之后会阻塞在那儿，但是 confirm 机制是异步的</p><p>在生产者开启了 confirm 模式之后，每次写的消息都会分配一个唯一的id，然后如果写入了rabbitmq之中，rabbitmq 会给你回传一个ack消息，告诉你这个消息发送OK了；如果rabbitmq没能处理这个消息，会回调你一个nack接口，告诉你这个消息失败了，你可以进行重试。而且你可以结合这个机制知道自己在内存里维护每个消息的id，如果超过一定时间还没接收到这个消息的回调，那么你可以进行重发。</p><h5 id="异步-confirm" tabindex="-1"><a class="header-anchor" href="#异步-confirm"><span>异步 confirm</span></a></h5><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// 开启confirm</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">channel</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">confirm</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">channel</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">confirmSelect</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">channel</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">addConfirmListener</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">new</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> ConfirmListener</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(){})</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">//发送成功回调</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> void</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> ack</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">(</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">String</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> messageId) {</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// 发送失败回调</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> void</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> nack</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">(</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">String</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> messageId) {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    //重发该消息</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="针对-rabbitmq" tabindex="-1"><a class="header-anchor" href="#针对-rabbitmq"><span>针对 RabbitMQ</span></a></h3><ol><li>要保证rabbitMQ不丢失消息，那么就需要开启rabbitMQ的持久化机制，即把消息持久化到硬盘上，这样即使rabbitMQ挂掉在重启后仍然可以从硬盘读取消息；</li><li>如果rabbitMQ单点故障，不会造成消息丢失，这里就要提到rabbitMQ的3种安装模式，单机模式、普通集群模式、镜像集群模式，这里要保证rabbitMQ的高可用就要配合<a href="https://so.csdn.net/so/search?q=HAPROXY&amp;spm=1001.2101.3001.7020" target="_blank" rel="noopener noreferrer">HAPROXY</a>做镜像集群模式</li><li>如果硬盘坏掉怎么保证消息不丢失</li></ol><h4 id="消息持久化" tabindex="-1"><a class="header-anchor" href="#消息持久化"><span>消息持久化</span></a></h4><p>RabbitMQ 的消息默认存放在内存上面，如果不特别声明设置，消息不会持久化保存到硬盘上面的，如果节点重启或者意外 crash 掉，消息就会丢失。</p><p>所以就要对消息进行持久化处理。如何持久化，下面具体说明下：</p><p>要想做到消息持久化，必须满足以下三个条件，缺一不可。</p><ul><li>Exchange 设置持久化</li><li>Queue 设置持久化</li><li>Message 持久化发送：发送消息设置发送模式 deliveryMode=2，代表持久化消息</li></ul><h4 id="集群镜像模式" tabindex="-1"><a class="header-anchor" href="#集群镜像模式"><span>集群镜像模式</span></a></h4><p>RabbitMQ 三种部署模式：</p><ol><li>单点模式：最简单的情况，非集群模式，节点挂了，消息就不能用了。业务可能瘫痪，只能等待。</li><li>普通模式：消息只会存在与当前节点中，并不会同步到其他节点，当前节点宕机，有影响的业务会瘫痪，只能等待节点恢复重启可用（必须持久化消息情况下）。</li><li>镜像模式：消息会同步到其他节点上，可以设置同步的节点个数，但吞吐量会下降。属于 RabbitMQ 的 HA 方案</li></ol><p>为什么设置镜像模式集群，因为队列的内容仅仅存在某一个节点上面，不会存在所有节点上面，所有节点仅仅存放消息结构和元数据。下</p><p>如果想解决上面途中问题，保证消息不丢失，需要采用 HA 镜像模式队列。</p><p>下面介绍下三种HA策略模式：</p><ol><li>同步至所有的机器</li><li>同步最多 N 个机器</li><li>只同步至符合指定名称的 nodes</li></ol><p>命令处理HA策略模版：</p><p>rabbitmqctl set_policy [-p Vhost] Name Pattern Definition [Priority]</p><p>1）为每个以“rock.wechat”开头的队列设置所有节点的镜像，并且设置为自动同步模式</p><p>rabbitmqctl set_policy ha-all &quot;^rock.wechat&quot; &#39;{&quot;ha-mode&quot;:&quot;all&quot;,&quot;ha-sync-mode&quot;:&quot;automatic&quot;}&#39;<br> rabbitmqctl set_policy -p rock ha-all &quot;^rock.wechat&quot; &#39;{&quot;ha-mode&quot;:&quot;all&quot;,&quot;ha-sync-mode&quot;:&quot;automatic&quot;}&#39;</p><p>2）为每个以“rock.wechat.”开头的队列设置两个节点的镜像，并且设置为自动同步模式</p><p>rabbitmqctl set_policy -p rock ha-exacly &quot;^rock.wechat&quot; <br> &#39;{&quot;ha-mode&quot;:&quot;exactly&quot;,&quot;ha-params&quot;:2,&quot;ha-sync-mode&quot;:&quot;automatic&quot;}&#39;</p><p>3）为每个以“node.”开头的队列分配指定的节点做镜像</p><p>rabbitmqctl set_policy ha-nodes &quot;^nodes.&quot; <br> &#39;{&quot;ha-mode&quot;:&quot;nodes&quot;,&quot;ha-params&quot;:[&quot;rabbit@nodeA&quot;, &quot;rabbit@nodeB&quot;]}&#39;</p><p>HA 缺点就是：系统的吞吐量会有所下降.</p><h4 id="消息补偿机制" tabindex="-1"><a class="header-anchor" href="#消息补偿机制"><span>消息补偿机制</span></a></h4><p>虽然以上的三种方案，基本可以保证消息的高可用不丢失的问题，消息还会丢失。</p><p>但是作为有追求的程序员来讲，要绝对保证我的系统的稳定性，有一种危机意识。</p><p>比如：持久化的消息，保存到硬盘过程中，当前队列节点挂了，存储节点硬盘又坏了，消息丢了，怎么办？</p><ol><li>生产端首先将业务数据以及消息数据入库，需要在同一个事务中，消息数据入库失败，则整体回滚。</li></ol><h3 id="针对消费者" tabindex="-1"><a class="header-anchor" href="#针对消费者"><span>针对消费者</span></a></h3><h4 id="ack-确认机制" tabindex="-1"><a class="header-anchor" href="#ack-确认机制"><span>ACK 确认机制</span></a></h4><p>多个消费者同时收取消息，比如消息接收到一半的时候，一个消费者死掉了(逻辑复杂时间太长，超时了或者消费被停机或者网络断开链接)，如何保证消息不丢？</p><p>使用rabbitmq提供的ack机制，服务端首先关闭rabbitmq的自动ack，然后每次在确保处理完这个消息之后，在代码里手动调用ack。这样就可以避免消息还没有处理完就ack。才把消息从内存删除。</p><p>这样就解决了，即使一个消费者出了问题，但不会同步消息给服务端，会有其他的消费端去消费，保证了消息不丢的case。</p><p><img src="https://cdn.jsdelivr.net/gh/davidliuk/images@master/blog/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAU3VuQWx3YXlzT25saW5l,size_20,color_FFFFFF,t_70,g_se,x_16.png" alt="img" loading="lazy"></p>`,54)]))}const d=a(n,[["render",e],["__file","消息丢失.html.vue"]]),k=JSON.parse(`{"path":"/cs/middleware/rabbitmq/problem/%E6%B6%88%E6%81%AF%E4%B8%A2%E5%A4%B1.html","title":"消息丢失","lang":"en-US","frontmatter":{"description":"消息丢失 产生原因 三个阶段：消息到 MQ 的过程中搞丢，MQ 自己搞丢，MQ 到消费过程中搞丢。 生产阶段：生产者弄丢了数据。生产者将数据发送到 RabbitMQ 的时候，可能数据就在半路给搞丢了，因为网络问题或服务器宕机等。 存储阶段：RabbitMQ 弄丢了数据。MQ 还没有持久化自己挂了 消费阶段：消费端弄丢了数据。刚消费到，还没处理，结果进程...","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/cs/middleware/rabbitmq/problem/%E6%B6%88%E6%81%AF%E4%B8%A2%E5%A4%B1.html"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"消息丢失"}],["meta",{"property":"og:description","content":"消息丢失 产生原因 三个阶段：消息到 MQ 的过程中搞丢，MQ 自己搞丢，MQ 到消费过程中搞丢。 生产阶段：生产者弄丢了数据。生产者将数据发送到 RabbitMQ 的时候，可能数据就在半路给搞丢了，因为网络问题或服务器宕机等。 存储阶段：RabbitMQ 弄丢了数据。MQ 还没有持久化自己挂了 消费阶段：消费端弄丢了数据。刚消费到，还没处理，结果进程..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/davidliuk/images@master/blog/%E6%88%AA%E5%B1%8F2023-03-13%2017.48.04.png"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-06-27T01:21:47.000Z"}],["meta",{"property":"article:modified_time","content":"2024-06-27T01:21:47.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"消息丢失\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/davidliuk/images@master/blog/%E6%88%AA%E5%B1%8F2023-03-13%2017.48.04.png\\",\\"https://cdn.jsdelivr.net/gh/davidliuk/images@master/blog/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAU3VuQWx3YXlzT25saW5l,size_20,color_FFFFFF,t_70,g_se,x_16.png\\"],\\"dateModified\\":\\"2024-06-27T01:21:47.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[{"level":2,"title":"产生原因","slug":"产生原因","link":"#产生原因","children":[]},{"level":2,"title":"解决方案","slug":"解决方案","link":"#解决方案","children":[{"level":3,"title":"针对生产者","slug":"针对生产者","link":"#针对生产者","children":[]},{"level":3,"title":"针对 RabbitMQ","slug":"针对-rabbitmq","link":"#针对-rabbitmq","children":[]},{"level":3,"title":"针对消费者","slug":"针对消费者","link":"#针对消费者","children":[]}]}],"git":{"createdTime":1679321449000,"updatedTime":1719451307000,"contributors":[{"name":"刘大维","email":"davidliu@liudaweideMacBook-Pro.local","commits":5},{"name":"davidliuk","email":"l729641074@163.com","commits":1}]},"readingTime":{"minutes":6.16,"words":1847},"filePathRelative":"cs/middleware/rabbitmq/problem/消息丢失.md","localizedDate":"March 20, 2023","excerpt":"\\n<h2>产生原因</h2>\\n<p>三个阶段：消息到 MQ 的过程中搞丢，MQ 自己搞丢，MQ 到消费过程中搞丢。</p>\\n<ul>\\n<li>生产阶段：生产者弄丢了数据。生产者将数据发送到 RabbitMQ 的时候，可能数据就在半路给搞丢了，因为网络问题或服务器宕机等。</li>\\n<li>存储阶段：RabbitMQ 弄丢了数据。MQ 还没有持久化自己挂了</li>\\n<li>消费阶段：消费端弄丢了数据。刚消费到，还没处理，结果进程挂了，比如重启。</li>\\n</ul>\\n<h2>解决方案</h2>\\n<p><img src=\\"https://cdn.jsdelivr.net/gh/davidliuk/images@master/blog/截屏2023-03-13 17.48.04.png\\" alt=\\"截屏2023-03-13 17.48.04\\" loading=\\"lazy\\"></p>","autoDesc":true}`);export{d as comp,k as data};
