const e=JSON.parse(`{"key":"v-588edf1b","path":"/cs/middleware/rabbitmq/%E6%B6%88%E6%81%AF%E6%A8%A1%E5%9E%8B.html","title":"消息模型","lang":"en-US","frontmatter":{"description":"消息模型 基本消息队列（basicQueue） 工作消息队列（workQueue） 发布订阅（Publish，Sub），根据交换机类型不同分为三种： Fanout 广播 Direct 路由 Topic 主题 publish Work Queue 模型 Work queue,工作队列，可以提高消息处理速度，避免队列消息堆积 多个消费者绑定到一个队列，同一条消息只会被一个消费者处理。","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/cs/middleware/rabbitmq/%E6%B6%88%E6%81%AF%E6%A8%A1%E5%9E%8B.html"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"消息模型"}],["meta",{"property":"og:description","content":"消息模型 基本消息队列（basicQueue） 工作消息队列（workQueue） 发布订阅（Publish，Sub），根据交换机类型不同分为三种： Fanout 广播 Direct 路由 Topic 主题 publish Work Queue 模型 Work queue,工作队列，可以提高消息处理速度，避免队列消息堆积 多个消费者绑定到一个队列，同一条消息只会被一个消费者处理。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-05-17T10:10:52.000Z"}],["meta",{"property":"article:author","content":"David Liu"}],["meta",{"property":"article:modified_time","content":"2023-05-17T10:10:52.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"消息模型\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-05-17T10:10:52.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[{"level":3,"title":"Work Queue 模型","slug":"work-queue-模型","link":"#work-queue-模型","children":[]},{"level":2,"title":"发布订阅模型","slug":"发布订阅模型","link":"#发布订阅模型","children":[{"level":3,"title":"FanoutExchange","slug":"fanoutexchange","link":"#fanoutexchange","children":[]},{"level":3,"title":"DirectExchange","slug":"directexchange","link":"#directexchange","children":[]},{"level":3,"title":"TopicExchange","slug":"topicexchange","link":"#topicexchange","children":[]}]}],"git":{"createdTime":1677504602000,"updatedTime":1684318252000,"contributors":[{"name":"刘大维","email":"davidliu@liudaweideMacBook-Pro.local","commits":3},{"name":"davidliuk","email":"l729641074@163.com","commits":2}]},"readingTime":{"minutes":3.04,"words":913},"filePathRelative":"cs/middleware/rabbitmq/消息模型.md","localizedDate":"February 27, 2023","excerpt":"<h1> 消息模型</h1>\\n<ul>\\n<li>基本消息队列（basicQueue）</li>\\n<li>工作消息队列（workQueue）</li>\\n</ul>\\n<p>发布订阅（Publish，Sub），根据交换机类型不同分为三种：</p>\\n<ul>\\n<li>Fanout 广播</li>\\n<li>Direct 路由</li>\\n<li>Topic 主题</li>\\n</ul>\\n<p>publish</p>\\n<h3> Work Queue 模型</h3>\\n<p>Work queue,工作队列，可以提高消息处理速度，避免队列消息堆积</p>\\n<p>多个消费者绑定到一个队列，同一条消息只会被一个消费者处理。</p>","autoDesc":true}`);export{e as data};
