import{_ as l}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as t,d as i,o as a}from"./app-C8HRrJwL.js";const n={};function r(o,e){return a(),t("div",null,e[0]||(e[0]=[i('<h1 id="消息积压" tabindex="-1"><a class="header-anchor" href="#消息积压"><span>消息积压</span></a></h1><p>MQ 消息积压问题是指在消息队列中累积了大量未处理的消息，导致消息队列中的消息积压严重，超出系统处理能力，影响系统性能和稳定性的现象。</p><h2 id="消息积压是哪个环节的问题" tabindex="-1"><a class="header-anchor" href="#消息积压是哪个环节的问题"><span>消息积压是哪个环节的问题？</span></a></h2><p>MQ 执行有三大阶段：</p><ol><li>消息生产阶段</li><li>消息存储阶段</li><li>消息消费阶段</li></ol><p>很显然，消息堆积是出现在第三个消息消费阶段的。</p><h2 id="解决方案" tabindex="-1"><a class="header-anchor" href="#解决方案"><span>解决方案</span></a></h2><p>消息积压问题的处理取决于消息积压的类型，例如，消息积压是突发性消息积压问题？还是缓慢持续增长的消息积压问题？不同问题的解决方案不同</p><h3 id="突发性消息积压问题" tabindex="-1"><a class="header-anchor" href="#突发性消息积压问题"><span>突发性消息积压问题</span></a></h3><p>突发性消息积压问题的解决思路是：<strong>先快速解决掉消息积压问题，然后再排查问题制定相应的解决方案</strong>，所以我们可以使用以下手段进行处理：</p><ol><li>水平扩容消费者（添加消费者数量）解决消息积压问题。</li><li>使用限流手段，限制生产者生产消息的速度。</li><li>通过日志或监控分析消息积压的问题，如果是消费代码出现的问题，优化代码提升消费速度。</li></ol><h3 id="缓慢持续增长的消息积压问题" tabindex="-1"><a class="header-anchor" href="#缓慢持续增长的消息积压问题"><span>缓慢持续增长的消息积压问题</span></a></h3><p>缓慢持续增长的消息积压问题，则是使用监控机制早早发现问题，然后快速排查和定位消息积压问题予以解决。</p><h2 id="总体解决方案" tabindex="-1"><a class="header-anchor" href="#总体解决方案"><span>总体解决方案</span></a></h2><p>总的来说，消息积压问题的解决方案有以下几个：</p><ol><li><strong>水平扩展消费者</strong>：消费者数量增多，则可以并行提升消息消费的速度，从而避免消息积压的问题。</li><li>优化消费者处理速度：提升消费者的消费速度也可以避免消息积压的问题，它的解决方案有： <ul><li>优化消费者处理消息的逻辑，减少不必要的计算和 I/O 操作。</li><li>对于可以并行处理的任务，使用多线程或异步处理来提高吞吐量。</li></ul></li><li>限流生产者和使用背压机制： <ul><li>在生产者端实施限流策略，确保消息产生的速度不会超过系统的处理能力。</li><li>使用背压机制，即当消息队列达到某个阈值时，通知生产者降低发送速率或暂停发送。</li></ul></li><li><strong>使用死信队列</strong>：在消费者处理消息出现失败或超时的情况下，加入消息重试机制或将异常消息放入死信队列，避免异常消息一直占用队列资源。</li><li><strong>监控和告警</strong>：设置合理的告警阈值，当消息积压达到一定程度时及时发出告警，以便快速响应和处理。</li></ol><h2 id="课后思考" tabindex="-1"><a class="header-anchor" href="#课后思考"><span>课后思考</span></a></h2><p>在 Kafka 中，水平扩展消费者一定要解决消息积压的问题吗？为什么？</p>',18)]))}const d=l(n,[["render",r],["__file","消息积压.html.vue"]]),c=JSON.parse(`{"path":"/cs/middleware/rabbitmq/problem/%E6%B6%88%E6%81%AF%E7%A7%AF%E5%8E%8B.html","title":"消息积压","lang":"en-US","frontmatter":{"description":"消息积压 MQ 消息积压问题是指在消息队列中累积了大量未处理的消息，导致消息队列中的消息积压严重，超出系统处理能力，影响系统性能和稳定性的现象。 消息积压是哪个环节的问题？ MQ 执行有三大阶段： 消息生产阶段 消息存储阶段 消息消费阶段 很显然，消息堆积是出现在第三个消息消费阶段的。 解决方案 消息积压问题的处理取决于消息积压的类型，例如，消息积压是...","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/cs/middleware/rabbitmq/problem/%E6%B6%88%E6%81%AF%E7%A7%AF%E5%8E%8B.html"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"消息积压"}],["meta",{"property":"og:description","content":"消息积压 MQ 消息积压问题是指在消息队列中累积了大量未处理的消息，导致消息队列中的消息积压严重，超出系统处理能力，影响系统性能和稳定性的现象。 消息积压是哪个环节的问题？ MQ 执行有三大阶段： 消息生产阶段 消息存储阶段 消息消费阶段 很显然，消息堆积是出现在第三个消息消费阶段的。 解决方案 消息积压问题的处理取决于消息积压的类型，例如，消息积压是..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-06-27T01:21:47.000Z"}],["meta",{"property":"article:modified_time","content":"2024-06-27T01:21:47.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"消息积压\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-06-27T01:21:47.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[{"level":2,"title":"消息积压是哪个环节的问题？","slug":"消息积压是哪个环节的问题","link":"#消息积压是哪个环节的问题","children":[]},{"level":2,"title":"解决方案","slug":"解决方案","link":"#解决方案","children":[{"level":3,"title":"突发性消息积压问题","slug":"突发性消息积压问题","link":"#突发性消息积压问题","children":[]},{"level":3,"title":"缓慢持续增长的消息积压问题","slug":"缓慢持续增长的消息积压问题","link":"#缓慢持续增长的消息积压问题","children":[]}]},{"level":2,"title":"总体解决方案","slug":"总体解决方案","link":"#总体解决方案","children":[]},{"level":2,"title":"课后思考","slug":"课后思考","link":"#课后思考","children":[]}],"git":{"createdTime":1715153702000,"updatedTime":1719451307000,"contributors":[{"name":"刘大维","email":"davidliu@liudaweideMacBook-Pro.local","commits":2}]},"readingTime":{"minutes":2.56,"words":767},"filePathRelative":"cs/middleware/rabbitmq/problem/消息积压.md","localizedDate":"May 8, 2024","excerpt":"\\n<p>MQ 消息积压问题是指在消息队列中累积了大量未处理的消息，导致消息队列中的消息积压严重，超出系统处理能力，影响系统性能和稳定性的现象。</p>\\n<h2>消息积压是哪个环节的问题？</h2>\\n<p>MQ 执行有三大阶段：</p>\\n<ol>\\n<li>消息生产阶段</li>\\n<li>消息存储阶段</li>\\n<li>消息消费阶段</li>\\n</ol>\\n<p>很显然，消息堆积是出现在第三个消息消费阶段的。</p>\\n<h2>解决方案</h2>\\n<p>消息积压问题的处理取决于消息积压的类型，例如，消息积压是突发性消息积压问题？还是缓慢持续增长的消息积压问题？不同问题的解决方案不同</p>\\n<h3>突发性消息积压问题</h3>","autoDesc":true}`);export{d as comp,c as data};
