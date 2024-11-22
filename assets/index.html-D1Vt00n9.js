import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,d as n,o as e}from"./app-C8HRrJwL.js";const l={};function t(h,i){return e(),a("div",null,i[0]||(i[0]=[n(`<h1 id="rabbitmq" tabindex="-1"><a class="header-anchor" href="#rabbitmq"><span>RabbitMQ</span></a></h1><h2 id="基本概念" tabindex="-1"><a class="header-anchor" href="#基本概念"><span>基本概念</span></a></h2><h3 id="rabbitmq-有哪些重要角色" tabindex="-1"><a class="header-anchor" href="#rabbitmq-有哪些重要角色"><span>rabbitmq 有哪些重要角色？</span></a></h3><ul><li>生产者：消息的创建者，负责创建和推送数据到消息服务器</li><li>消费者：消息的接收方，用于处理数据和确认消息</li><li>代理：就是RabbitMQ本身，用于扮演快递的角色，本身并不生产消息</li></ul><h3 id="rabbitmq-有哪些重要组件" tabindex="-1"><a class="header-anchor" href="#rabbitmq-有哪些重要组件"><span>rabbitmq 有哪些重要组件？</span></a></h3><ul><li>ConnectionFactory(连接管理器)：应用程序与RabbitMQ之间建立连接的管理器</li><li>BrokerBroker是RabbitMQ的核心组件，它接收来自生产者的消息并将其路由到消费者。Broker还负责管理队列、交换机和绑定等对象。RabbitMQ Broker可以在单个节点上运行，也可以在多个节点上运行以实现高可用性和负载均衡。</li><li>Channel(信道)：消息推送使用的通道</li><li>Exchange(交换器)：用于接受、分配消息</li><li>Queue(队列)：用于存储生产者的消息</li><li>RoutingKey(路由键)：生产者将消息发送给交换器的时候，会指定一个RoutingKey,用来指定这个消息的路由规则，这个RoutingKey需要与交换器类型和绑定键(BindingKey)联合使用才能最终生效。</li><li>BindKey(绑定键)：用于把交换器的消息绑定到队列上</li></ul><h2 id="基本操作" tabindex="-1"><a class="header-anchor" href="#基本操作"><span>基本操作</span></a></h2><h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装"><span>安装</span></a></h2><p>启动命令</p><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> run</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -d</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --hostname</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> mq1</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --name</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> rabbitmq</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -e</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> RABBITMQ_DEFAULT_USER=david</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -e</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> RABBITMQ_DEFAULT_PASS=DavidLiu7</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -p</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 15672:15672</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -p</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 5672:5672</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> rabbitmq:3-management</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>虚拟主机：多租户隔离</p><h2 id="流程" tabindex="-1"><a class="header-anchor" href="#流程"><span>流程</span></a></h2><p>消息发送流程：</p><ol><li>建立Connection</li><li>创建Channel</li><li>利用Channel声明队列</li><li>利用Channel向队列发送消息</li></ol><p>消息接收流程：</p><ol><li>建立Connection</li><li>创建Channel</li><li>利用Channel声明队列</li><li>定义consumer的消费行为handleDelivery()</li><li>利用Channel讲消费者与队列绑定</li></ol><h2 id="amqp" tabindex="-1"><a class="header-anchor" href="#amqp"><span>AMQP</span></a></h2><p>什么是AMQP?</p><ul><li>应用间消息通信的一种协议，与语言和平台无关。</li></ul><p>添加spring-amqp的依赖</p><p>或者spring-boot-starter-amqp</p><p>SpringAMQP如何发送消息？</p><ul><li>引入amgp的starter依赖</li><li>配置RabbitMO地址</li><li>利用RabbitTemplate的convertAndSend方法</li></ul><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">@</span><span style="--shiki-light:#A626A4;--shiki-dark:#E5C07B;">RunWith</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">(</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">SpringRunner</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">class</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">@</span><span style="--shiki-light:#A626A4;--shiki-dark:#E5C07B;">SpringBootTest</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> class</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> SpringAMQPTest</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    @</span><span style="--shiki-light:#A626A4;--shiki-dark:#E5C07B;">Autowaired</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    private</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> RabbitTemplate</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> rabbitTemplate</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    @</span><span style="--shiki-light:#A626A4;--shiki-dark:#E5C07B;">Test</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> void</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> testSimpleQueue</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">()</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">        String</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> queueName</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;simple.queue&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">        String</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> message</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;hello, spring amqp!&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">        rabbitTemplate</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">convertAndSend</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(queueName, message);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">@</span><span style="--shiki-light:#A626A4;--shiki-dark:#E5C07B;">Component</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> class</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> SpringRabbitListener</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">    </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    @</span><span style="--shiki-light:#A626A4;--shiki-dark:#E5C07B;">RabbitListener</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">queue</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;simple.queue&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">)</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> void</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> listenSimpleQueueMessage</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">String</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;"> msg</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF;"> throw InterruptedException </span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">        System</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">out</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">println</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(msg);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,25)]))}const r=s(l,[["render",t],["__file","index.html.vue"]]),d=JSON.parse(`{"path":"/cs/middleware/rabbitmq/","title":"RabbitMQ","lang":"en-US","frontmatter":{"description":"RabbitMQ 基本概念 rabbitmq 有哪些重要角色？ 生产者：消息的创建者，负责创建和推送数据到消息服务器 消费者：消息的接收方，用于处理数据和确认消息 代理：就是RabbitMQ本身，用于扮演快递的角色，本身并不生产消息 rabbitmq 有哪些重要组件？ ConnectionFactory(连接管理器)：应用程序与RabbitMQ之间建立...","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/cs/middleware/rabbitmq/"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"RabbitMQ"}],["meta",{"property":"og:description","content":"RabbitMQ 基本概念 rabbitmq 有哪些重要角色？ 生产者：消息的创建者，负责创建和推送数据到消息服务器 消费者：消息的接收方，用于处理数据和确认消息 代理：就是RabbitMQ本身，用于扮演快递的角色，本身并不生产消息 rabbitmq 有哪些重要组件？ ConnectionFactory(连接管理器)：应用程序与RabbitMQ之间建立..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-06-27T01:21:47.000Z"}],["meta",{"property":"article:modified_time","content":"2024-06-27T01:21:47.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"RabbitMQ\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-06-27T01:21:47.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[{"level":2,"title":"基本概念","slug":"基本概念","link":"#基本概念","children":[{"level":3,"title":"rabbitmq 有哪些重要角色？","slug":"rabbitmq-有哪些重要角色","link":"#rabbitmq-有哪些重要角色","children":[]},{"level":3,"title":"rabbitmq 有哪些重要组件？","slug":"rabbitmq-有哪些重要组件","link":"#rabbitmq-有哪些重要组件","children":[]}]},{"level":2,"title":"基本操作","slug":"基本操作","link":"#基本操作","children":[]},{"level":2,"title":"安装","slug":"安装","link":"#安装","children":[]},{"level":2,"title":"流程","slug":"流程","link":"#流程","children":[]},{"level":2,"title":"AMQP","slug":"amqp","link":"#amqp","children":[]}],"git":{"createdTime":1677504602000,"updatedTime":1719451307000,"contributors":[{"name":"刘大维","email":"davidliu@liudaweideMacBook-Pro.local","commits":3}]},"readingTime":{"minutes":1.8,"words":540},"filePathRelative":"cs/middleware/rabbitmq/README.md","localizedDate":"February 27, 2023","excerpt":"\\n<h2>基本概念</h2>\\n<h3>rabbitmq 有哪些重要角色？</h3>\\n<ul>\\n<li>生产者：消息的创建者，负责创建和推送数据到消息服务器</li>\\n<li>消费者：消息的接收方，用于处理数据和确认消息</li>\\n<li>代理：就是RabbitMQ本身，用于扮演快递的角色，本身并不生产消息</li>\\n</ul>\\n<h3>rabbitmq 有哪些重要组件？</h3>\\n<ul>\\n<li>ConnectionFactory(连接管理器)：应用程序与RabbitMQ之间建立连接的管理器</li>\\n<li>BrokerBroker是RabbitMQ的核心组件，它接收来自生产者的消息并将其路由到消费者。Broker还负责管理队列、交换机和绑定等对象。RabbitMQ Broker可以在单个节点上运行，也可以在多个节点上运行以实现高可用性和负载均衡。</li>\\n<li>Channel(信道)：消息推送使用的通道</li>\\n<li>Exchange(交换器)：用于接受、分配消息</li>\\n<li>Queue(队列)：用于存储生产者的消息</li>\\n<li>RoutingKey(路由键)：生产者将消息发送给交换器的时候，会指定一个RoutingKey,用来指定这个消息的路由规则，这个RoutingKey需要与交换器类型和绑定键(BindingKey)联合使用才能最终生效。</li>\\n<li>BindKey(绑定键)：用于把交换器的消息绑定到队列上</li>\\n</ul>","autoDesc":true}`);export{r as comp,d as data};
