import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as i,d as a,o as r}from"./app-D4ZvIHfO.js";const o={};function l(n,e){return r(),i("div",null,e[0]||(e[0]=[a('<p><a href="https://www.bilibili.com/video/BV1mN4y1Z7t9?p=31&amp;vd_source=086ba9e7e990dd00adb3a485b6f48804" target="_blank" rel="noopener noreferrer">参考</a></p><p>设置30分钟后检测订单支付状态实现起来非常简单，但是存在两个问题：</p><ol><li>如果并发较高，30分钟可能维积消息过多，对MQ压力很大</li><li>大多数订单在下单后1分钟内就会支付，但是却需要在MQ内等待30分钟，浪费资源</li></ol><p><img src="https://cdn.jsdelivr.net/gh/davidliuk/images@master/blog/截屏2024-05-25 下午8.21.18.png" alt="截屏2024-05-25 下午8.21.18" loading="lazy"></p><hr><p>如何保证支付服务与交易服务之间的订单状态一致性？</p><p>首先，支付服务会正在用户支付成功以后利用MQ消息通知交易服务<br> 完成订单状态同步。<br> 其次，为了保证MQ消息的可靠性，我们采用了生产者确认机制、消<br> 费者确认、消费者失败重试等策略，确保消息投递和处理的可靠性。同<br> 时也开启了MQ的持久化。避免因服务宕机导致消息丢失<br> 最后，我们还在交易服务更新订单状态时做了业务幂等判断，避免<br> 因消息重复消费导致订单状态异常。</p><p>如果交易服务消息处理失败，有没有什么兜底方案？</p><p>我们可以在交易服务设置定时任务，定期查询订单支付状态。这样即<br> 便MQ通如失败，还可以利用定时任务作为兜底方案，确保订单支付<br> 状态的最终一致性。</p>',9)]))}const m=t(o,[["render",l],["__file","超时取消订单.html.vue"]]),s=JSON.parse(`{"path":"/cs/middleware/rabbitmq/design/%E8%B6%85%E6%97%B6%E5%8F%96%E6%B6%88%E8%AE%A2%E5%8D%95.html","title":"","lang":"en-US","frontmatter":{"description":"参考 设置30分钟后检测订单支付状态实现起来非常简单，但是存在两个问题： 如果并发较高，30分钟可能维积消息过多，对MQ压力很大 大多数订单在下单后1分钟内就会支付，但是却需要在MQ内等待30分钟，浪费资源 截屏2024-05-25 下午8.21.18 如何保证支付服务与交易服务之间的订单状态一致性？ 首先，支付服务会正在用户支付成功以后利用MQ消息通...","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/cs/middleware/rabbitmq/design/%E8%B6%85%E6%97%B6%E5%8F%96%E6%B6%88%E8%AE%A2%E5%8D%95.html"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:description","content":"参考 设置30分钟后检测订单支付状态实现起来非常简单，但是存在两个问题： 如果并发较高，30分钟可能维积消息过多，对MQ压力很大 大多数订单在下单后1分钟内就会支付，但是却需要在MQ内等待30分钟，浪费资源 截屏2024-05-25 下午8.21.18 如何保证支付服务与交易服务之间的订单状态一致性？ 首先，支付服务会正在用户支付成功以后利用MQ消息通..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/davidliuk/images@master/blog/%E6%88%AA%E5%B1%8F2024-05-25%20%E4%B8%8B%E5%8D%888.21.18.png"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-06-27T01:21:47.000Z"}],["meta",{"property":"article:modified_time","content":"2024-06-27T01:21:47.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/davidliuk/images@master/blog/%E6%88%AA%E5%B1%8F2024-05-25%20%E4%B8%8B%E5%8D%888.21.18.png\\"],\\"dateModified\\":\\"2024-06-27T01:21:47.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[],"git":{"createdTime":1719451307000,"updatedTime":1719451307000,"contributors":[{"name":"刘大维","email":"davidliu@liudaweideMacBook-Pro.local","commits":1}]},"readingTime":{"minutes":1.28,"words":384},"filePathRelative":"cs/middleware/rabbitmq/design/超时取消订单.md","localizedDate":"June 27, 2024","excerpt":"<p><a href=\\"https://www.bilibili.com/video/BV1mN4y1Z7t9?p=31&amp;vd_source=086ba9e7e990dd00adb3a485b6f48804\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">参考</a></p>\\n<p>设置30分钟后检测订单支付状态实现起来非常简单，但是存在两个问题：</p>\\n<ol>\\n<li>如果并发较高，30分钟可能维积消息过多，对MQ压力很大</li>\\n<li>大多数订单在下单后1分钟内就会支付，但是却需要在MQ内等待30分钟，浪费资源</li>\\n</ol>\\n<p><img src=\\"https://cdn.jsdelivr.net/gh/davidliuk/images@master/blog/截屏2024-05-25 下午8.21.18.png\\" alt=\\"截屏2024-05-25 下午8.21.18\\" loading=\\"lazy\\"></p>","autoDesc":true}`);export{m as comp,s as data};
