const e=JSON.parse(`{"key":"v-6805b83a","path":"/cs/middleware/rabbitmq/%E4%B8%BA%E4%BB%80%E4%B9%88%E7%94%A8.html","title":"为什么用 RabbitMQ","lang":"en-US","frontmatter":{"description":"为什么用 RabbitMQ 使用场景 消息队列是一种异步通信机制，常用于以下场景： 异步处理：将请求放入消息队列中，异步处理请求，提高系统的吞吐量和响应速度。 解耦系统：将不同系统之间的通信通过消息队列进行解耦，提高系统的可维护性和可扩展性。 流量削峰：将请求放入消息队列中，通过控制消息队列的长度和消费速度，实现流量削峰，保护系统的稳定性。 流量削峰原理 消息队列流量削峰的原理是通过控制消息队列的长度和消费速度，实现流量的平滑处理。具体来说，可以通过以下方式进行流量削峰：","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/cs/middleware/rabbitmq/%E4%B8%BA%E4%BB%80%E4%B9%88%E7%94%A8.html"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"为什么用 RabbitMQ"}],["meta",{"property":"og:description","content":"为什么用 RabbitMQ 使用场景 消息队列是一种异步通信机制，常用于以下场景： 异步处理：将请求放入消息队列中，异步处理请求，提高系统的吞吐量和响应速度。 解耦系统：将不同系统之间的通信通过消息队列进行解耦，提高系统的可维护性和可扩展性。 流量削峰：将请求放入消息队列中，通过控制消息队列的长度和消费速度，实现流量削峰，保护系统的稳定性。 流量削峰原理 消息队列流量削峰的原理是通过控制消息队列的长度和消费速度，实现流量的平滑处理。具体来说，可以通过以下方式进行流量削峰："}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-05-17T10:10:52.000Z"}],["meta",{"property":"article:author","content":"David Liu"}],["meta",{"property":"article:modified_time","content":"2023-05-17T10:10:52.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"为什么用 RabbitMQ\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-05-17T10:10:52.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[{"level":2,"title":"使用场景","slug":"使用场景","link":"#使用场景","children":[{"level":3,"title":"流量削峰原理","slug":"流量削峰原理","link":"#流量削峰原理","children":[]}]},{"level":2,"title":"RabbitMQ","slug":"rabbitmq","link":"#rabbitmq","children":[{"level":3,"title":"RabbitMQ 高性能的原因","slug":"rabbitmq-高性能的原因","link":"#rabbitmq-高性能的原因","children":[]},{"level":3,"title":"erlang特点","slug":"erlang特点","link":"#erlang特点","children":[]},{"level":3,"title":"使用背书","slug":"使用背书","link":"#使用背书","children":[]},{"level":3,"title":"消息流转流程","slug":"消息流转流程","link":"#消息流转流程","children":[]},{"level":3,"title":"合理的交换机和队列设置","slug":"合理的交换机和队列设置","link":"#合理的交换机和队列设置","children":[]},{"level":3,"title":"使用自动化配置","slug":"使用自动化配置","link":"#使用自动化配置","children":[]}]}],"git":{"createdTime":1680090419000,"updatedTime":1684318252000,"contributors":[{"name":"davidliuk","email":"l729641074@163.com","commits":2},{"name":"刘大维","email":"davidliu@liudaweideMacBook-Pro.local","commits":1}]},"readingTime":{"minutes":3.39,"words":1016},"filePathRelative":"cs/middleware/rabbitmq/为什么用.md","localizedDate":"March 29, 2023","excerpt":"<h1> 为什么用 RabbitMQ</h1>\\n<h2> 使用场景</h2>\\n<p>消息队列是一种异步通信机制，常用于以下场景：</p>\\n<ol>\\n<li>\\n<p>异步处理：将请求放入消息队列中，异步处理请求，提高系统的吞吐量和响应速度。</p>\\n</li>\\n<li>\\n<p>解耦系统：将不同系统之间的通信通过消息队列进行解耦，提高系统的可维护性和可扩展性。</p>\\n</li>\\n<li>\\n<p>流量削峰：将请求放入消息队列中，通过控制消息队列的长度和消费速度，实现流量削峰，保护系统的稳定性。</p>\\n</li>\\n</ol>\\n<h3> 流量削峰原理</h3>\\n<p>消息队列流量削峰的原理是通过控制消息队列的长度和消费速度，实现流量的平滑处理。具体来说，可以通过以下方式进行流量削峰：</p>","autoDesc":true}`);export{e as data};
