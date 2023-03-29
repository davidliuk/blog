const e=JSON.parse(`{"key":"v-3e315581","path":"/cs/middleware/rabbitmq/%E6%B6%88%E6%81%AF%E5%BA%94%E7%AD%94.html","title":"消息应答与确认","lang":"en-US","frontmatter":{"description":"消息应答与确认 消息应答 消费者完成一个任务可能需要一段时间，如果其中一个消费者处理一个长的任务并仅只完成了部分突然它挂掉了，会发生什么情况。RabbitMQ一旦向消费者传递了一条消息，便立即将该消息标记为刷除。在这种情况下，突然有个消费者挂掉了，我们将丢失正在处理的消息。以及后续发送给该消费这的消息，因为它无法接收到。 为了保证消息在发送过程中不丢失，rabbitmq引入消息应答机制，消息应答就是：消费者在接收到消息并且处理该消息之后，告诉rabbitmq它己经处理了，rabbitmq可以把该消息删除了。 自动应答","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/cs/middleware/rabbitmq/%E6%B6%88%E6%81%AF%E5%BA%94%E7%AD%94.html"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"消息应答与确认"}],["meta",{"property":"og:description","content":"消息应答与确认 消息应答 消费者完成一个任务可能需要一段时间，如果其中一个消费者处理一个长的任务并仅只完成了部分突然它挂掉了，会发生什么情况。RabbitMQ一旦向消费者传递了一条消息，便立即将该消息标记为刷除。在这种情况下，突然有个消费者挂掉了，我们将丢失正在处理的消息。以及后续发送给该消费这的消息，因为它无法接收到。 为了保证消息在发送过程中不丢失，rabbitmq引入消息应答机制，消息应答就是：消费者在接收到消息并且处理该消息之后，告诉rabbitmq它己经处理了，rabbitmq可以把该消息删除了。 自动应答"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-03-29T11:46:59.000Z"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2023-03-29T11:46:59.000Z"}],["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://davidliuk.github.io/blog/blog/zh/cs/middleware/rabbitmq/%E6%B6%88%E6%81%AF%E5%BA%94%E7%AD%94.html"}]]},"headers":[{"level":2,"title":"消息应答","slug":"消息应答","link":"#消息应答","children":[{"level":3,"title":"自动应答","slug":"自动应答","link":"#自动应答","children":[]},{"level":3,"title":"手动应答","slug":"手动应答","link":"#手动应答","children":[]},{"level":3,"title":"消息自动重新入队","slug":"消息自动重新入队","link":"#消息自动重新入队","children":[]}]},{"level":2,"title":"高级消息确认","slug":"高级消息确认","link":"#高级消息确认","children":[{"level":3,"title":"确认机制：Confirm 确认模式","slug":"确认机制-confirm-确认模式","link":"#确认机制-confirm-确认模式","children":[]},{"level":3,"title":"回退消息：return 回退模式","slug":"回退消息-return-回退模式","link":"#回退消息-return-回退模式","children":[]}]}],"git":{"createdTime":1679321449000,"updatedTime":1680090419000,"contributors":[{"name":"davidliuk","email":"l729641074@163.com","commits":2}]},"readingTime":{"minutes":2.74,"words":822},"localizedDate":"March 20, 2023","filePathRelative":"cs/middleware/rabbitmq/消息应答.md","excerpt":"<h1> 消息应答与确认</h1>\\n<h2> 消息应答</h2>\\n<p>消费者完成一个任务可能需要一段时间，如果其中一个消费者处理一个长的任务并仅只完成了部分突然它挂掉了，会发生什么情况。RabbitMQ一旦向消费者传递了一条消息，便立即将该消息标记为刷除。在这种情况下，突然有个消费者挂掉了，我们将丢失正在处理的消息。以及后续发送给该消费这的消息，因为它无法接收到。</p>\\n<p>为了保证消息在发送过程中不丢失，rabbitmq引入消息应答机制，消息应答就是：消费者在接收到消息并且处理该消息之后，告诉rabbitmq它己经处理了，rabbitmq可以把该消息删除了。</p>\\n<h3> 自动应答</h3>","autoDesc":true}`);export{e as data};
