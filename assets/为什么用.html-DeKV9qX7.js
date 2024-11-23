import{_ as l}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as e,d as a,o as t}from"./app-Cv-jMnVl.js";const n={};function r(o,i){return t(),e("div",null,i[0]||(i[0]=[a('<h1 id="为什么用-rabbitmq" tabindex="-1"><a class="header-anchor" href="#为什么用-rabbitmq"><span>为什么用 RabbitMQ</span></a></h1><h2 id="使用场景" tabindex="-1"><a class="header-anchor" href="#使用场景"><span>使用场景</span></a></h2><p>消息队列是一种异步通信机制，常用于以下场景：</p><ol><li><p>异步处理：将请求放入消息队列中，异步处理请求，提高系统的吞吐量和响应速度。</p></li><li><p>解耦系统：将不同系统之间的通信通过消息队列进行解耦，提高系统的可维护性和可扩展性。</p></li><li><p>流量削峰：将请求放入消息队列中，通过控制消息队列的长度和消费速度，实现流量削峰，保护系统的稳定性。</p></li></ol><h3 id="流量削峰原理" tabindex="-1"><a class="header-anchor" href="#流量削峰原理"><span>流量削峰原理</span></a></h3><p>消息队列流量削峰的原理是通过控制消息队列的长度和消费速度，实现流量的平滑处理。具体来说，可以通过以下方式进行流量削峰：</p><ol><li><p>增加消息队列的长度：增加消息队列的长度，可以缓存更多的请求，从而减少请求的丢失。</p></li><li><p>控制消息队列的消费速度：通过控制消息队列的消费速度，可以平滑处理请求，避免瞬时流量过大导致系统崩溃。</p></li><li><p>增加消费者的数量：增加消费者的数量，可以提高消息队列的消费速度，从而更快地处理请求。</p></li><li><p>限流：通过限制每个请求的处理时间和并发数，可以避免请求的积压和堆积，从而保证系统的稳定性。</p></li></ol><p>总的来说，消息队列流量削峰的原理是通过控制消息队列的长度和消费速度，实现流量的平滑处理。可以通过增加消息队列的长度、控制消费速度、增加消费者的数量、限流等方式进行流量削峰。</p><h2 id="rabbitmq" tabindex="-1"><a class="header-anchor" href="#rabbitmq"><span>RabbitMQ</span></a></h2><h3 id="rabbitmq-高性能的原因" tabindex="-1"><a class="header-anchor" href="#rabbitmq-高性能的原因"><span>RabbitMQ 高性能的原因</span></a></h3><p>使用语言：erlang</p><ol><li>Erlang是面向并发的语言，支持协程，且进程间上下文切换效率远高于C语言和Java，进一步提高了RabbitMQ并发性能</li><li>Erlang的网络性能有着和原生Socket一样的延迟，RabbitMQ的网络IO性能极高</li><li>使用AMQP协议</li></ol><h3 id="erlang特点" tabindex="-1"><a class="header-anchor" href="#erlang特点"><span>erlang特点</span></a></h3><ol><li>通用的面向并发编程语言，适用于分布式系统</li><li>基于虚拟机解释运行，支持跨平台部署</li><li>进程间上下切换效率远高于C语言</li><li>有着和原生Socket一样的延时</li></ol><h3 id="使用背书" tabindex="-1"><a class="header-anchor" href="#使用背书"><span>使用背书</span></a></h3><ol><li>RabbitMQ底层使用Erlang实现，天生具有高性能的基因</li><li>RabbitMQ在互联网和金融领域广泛的应用</li></ol><p>2、AMQP协议</p><ol><li>AMQP协议作为RabbitMQ的规范，规定了RabbitMQ对外接口</li><li>学会了AMQP协议的使用，就基本上掌握了RabbitMQ的使用</li></ol><p>3、AMQP协议架构</p><ol><li>AMQP协议直接定义了RabbitMQ的内部结构和外部行为</li><li>我们使用RabbitMQ本质上是在使用AMQP协议</li><li>AMQP协议被多种消息中间件使用</li></ol><h3 id="消息流转流程" tabindex="-1"><a class="header-anchor" href="#消息流转流程"><span>消息流转流程</span></a></h3><ol><li>发送者不能直接将消息发送给最终队列，必须发送给交换机</li><li>消息根据路由规则，消息由交换机转发给队列</li><li>消费者是从队列将消息取走的</li></ol><h3 id="合理的交换机和队列设置" tabindex="-1"><a class="header-anchor" href="#合理的交换机和队列设置"><span>合理的交换机和队列设置</span></a></h3><ol><li>交换机数量不能过多，一般来说同一个业务，或者同一类业务使用同一个交换机</li><li>合理设置队列数量，一般来说一个微服务监听一个队列，或者一个微服务的一个业务监听一个队列</li></ol><h3 id="使用自动化配置" tabindex="-1"><a class="header-anchor" href="#使用自动化配置"><span>使用自动化配置</span></a></h3><ol><li>将创建交换机/队列的操作固化在应用代码里，免去复杂的运维操作，高效且不易出错</li><li>一般来说，交换机由双方同时声明，队列由接收方声明并配置绑定关系</li><li>交换机/队列的参数一定要由双方开发团队确认，否则重复声明，若参数不一致，会导致声明失败</li></ol>',26)]))}const s=l(n,[["render",r],["__file","为什么用.html.vue"]]),b=JSON.parse(`{"path":"/cs/middleware/rabbitmq/%E4%B8%BA%E4%BB%80%E4%B9%88%E7%94%A8.html","title":"为什么用 RabbitMQ","lang":"en-US","frontmatter":{"description":"为什么用 RabbitMQ 使用场景 消息队列是一种异步通信机制，常用于以下场景： 异步处理：将请求放入消息队列中，异步处理请求，提高系统的吞吐量和响应速度。 解耦系统：将不同系统之间的通信通过消息队列进行解耦，提高系统的可维护性和可扩展性。 流量削峰：将请求放入消息队列中，通过控制消息队列的长度和消费速度，实现流量削峰，保护系统的稳定性。 流量削峰原...","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/cs/middleware/rabbitmq/%E4%B8%BA%E4%BB%80%E4%B9%88%E7%94%A8.html"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"为什么用 RabbitMQ"}],["meta",{"property":"og:description","content":"为什么用 RabbitMQ 使用场景 消息队列是一种异步通信机制，常用于以下场景： 异步处理：将请求放入消息队列中，异步处理请求，提高系统的吞吐量和响应速度。 解耦系统：将不同系统之间的通信通过消息队列进行解耦，提高系统的可维护性和可扩展性。 流量削峰：将请求放入消息队列中，通过控制消息队列的长度和消费速度，实现流量削峰，保护系统的稳定性。 流量削峰原..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-06-27T01:21:47.000Z"}],["meta",{"property":"article:modified_time","content":"2024-06-27T01:21:47.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"为什么用 RabbitMQ\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-06-27T01:21:47.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[{"level":2,"title":"使用场景","slug":"使用场景","link":"#使用场景","children":[{"level":3,"title":"流量削峰原理","slug":"流量削峰原理","link":"#流量削峰原理","children":[]}]},{"level":2,"title":"RabbitMQ","slug":"rabbitmq","link":"#rabbitmq","children":[{"level":3,"title":"RabbitMQ 高性能的原因","slug":"rabbitmq-高性能的原因","link":"#rabbitmq-高性能的原因","children":[]},{"level":3,"title":"erlang特点","slug":"erlang特点","link":"#erlang特点","children":[]},{"level":3,"title":"使用背书","slug":"使用背书","link":"#使用背书","children":[]},{"level":3,"title":"消息流转流程","slug":"消息流转流程","link":"#消息流转流程","children":[]},{"level":3,"title":"合理的交换机和队列设置","slug":"合理的交换机和队列设置","link":"#合理的交换机和队列设置","children":[]},{"level":3,"title":"使用自动化配置","slug":"使用自动化配置","link":"#使用自动化配置","children":[]}]}],"git":{"createdTime":1680090419000,"updatedTime":1719451307000,"contributors":[{"name":"davidliuk","email":"l729641074@163.com","commits":2},{"name":"刘大维","email":"davidliu@liudaweideMacBook-Pro.local","commits":2}]},"readingTime":{"minutes":3.39,"words":1016},"filePathRelative":"cs/middleware/rabbitmq/为什么用.md","localizedDate":"March 29, 2023","excerpt":"\\n<h2>使用场景</h2>\\n<p>消息队列是一种异步通信机制，常用于以下场景：</p>\\n<ol>\\n<li>\\n<p>异步处理：将请求放入消息队列中，异步处理请求，提高系统的吞吐量和响应速度。</p>\\n</li>\\n<li>\\n<p>解耦系统：将不同系统之间的通信通过消息队列进行解耦，提高系统的可维护性和可扩展性。</p>\\n</li>\\n<li>\\n<p>流量削峰：将请求放入消息队列中，通过控制消息队列的长度和消费速度，实现流量削峰，保护系统的稳定性。</p>\\n</li>\\n</ol>\\n<h3>流量削峰原理</h3>\\n<p>消息队列流量削峰的原理是通过控制消息队列的长度和消费速度，实现流量的平滑处理。具体来说，可以通过以下方式进行流量削峰：</p>","autoDesc":true}`);export{s as comp,b as data};
