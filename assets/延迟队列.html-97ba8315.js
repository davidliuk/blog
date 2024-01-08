const e=JSON.parse(`{"key":"v-1700c95b","path":"/cs/middleware/rabbitmq/%E5%BB%B6%E8%BF%9F%E9%98%9F%E5%88%97.html","title":"延迟队列","lang":"en-US","frontmatter":{"description":"延迟队列 https://blog.csdn.net/m0_56079407/article/details/125858748 实现方式 基于死信：在队列里面，通过ttl 基于插件：在交换机里面 应用场景 订单在十分钟之内未支付则自动取消 新创建的店铺，如果在十天内都没有上传过商品，则自动发送消息提醒。 用户注册成功后，如果三天内没有登陆则进行短信提醒。 用户发起退款，如果三天内没有得到收处理则通知相关运营人员。 预定会议后，需要在预定的时间点前十分钟通知各个与会人员参加会议","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/cs/middleware/rabbitmq/%E5%BB%B6%E8%BF%9F%E9%98%9F%E5%88%97.html"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"延迟队列"}],["meta",{"property":"og:description","content":"延迟队列 https://blog.csdn.net/m0_56079407/article/details/125858748 实现方式 基于死信：在队列里面，通过ttl 基于插件：在交换机里面 应用场景 订单在十分钟之内未支付则自动取消 新创建的店铺，如果在十天内都没有上传过商品，则自动发送消息提醒。 用户注册成功后，如果三天内没有登陆则进行短信提醒。 用户发起退款，如果三天内没有得到收处理则通知相关运营人员。 预定会议后，需要在预定的时间点前十分钟通知各个与会人员参加会议"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-05-17T10:10:52.000Z"}],["meta",{"property":"article:author","content":"David Liu"}],["meta",{"property":"article:modified_time","content":"2023-05-17T10:10:52.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"延迟队列\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-05-17T10:10:52.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[{"level":3,"title":"实现方式","slug":"实现方式","link":"#实现方式","children":[]},{"level":3,"title":"应用场景","slug":"应用场景","link":"#应用场景","children":[]},{"level":3,"title":"轮训和定时任务的缺点","slug":"轮训和定时任务的缺点","link":"#轮训和定时任务的缺点","children":[]},{"level":2,"title":"基于死信","slug":"基于死信","link":"#基于死信","children":[]},{"level":2,"title":"基于插件","slug":"基于插件","link":"#基于插件","children":[]}],"git":{"createdTime":1679321449000,"updatedTime":1684318252000,"contributors":[{"name":"刘大维","email":"davidliu@liudaweideMacBook-Pro.local","commits":2},{"name":"davidliuk","email":"l729641074@163.com","commits":1}]},"readingTime":{"minutes":1.37,"words":411},"filePathRelative":"cs/middleware/rabbitmq/延迟队列.md","localizedDate":"March 20, 2023","excerpt":"<h1> 延迟队列</h1>\\n<p><a href=\\"https://blog.csdn.net/m0_56079407/article/details/125858748\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">https://blog.csdn.net/m0_56079407/article/details/125858748</a></p>\\n<h3> 实现方式</h3>\\n<ul>\\n<li>基于死信：在队列里面，通过ttl</li>\\n<li>基于插件：在交换机里面</li>\\n</ul>\\n<h3> 应用场景</h3>\\n<ol>\\n<li>订单在十分钟之内未支付则自动取消</li>\\n<li>新创建的店铺，如果在十天内都没有上传过商品，则自动发送消息提醒。</li>\\n<li>用户注册成功后，如果三天内没有登陆则进行短信提醒。</li>\\n<li>用户发起退款，如果三天内没有得到收处理则通知相关运营人员。</li>\\n<li>预定会议后，需要在预定的时间点前十分钟通知各个与会人员参加会议</li>\\n</ol>","autoDesc":true}`);export{e as data};
