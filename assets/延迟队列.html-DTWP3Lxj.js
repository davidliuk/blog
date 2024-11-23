import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as l,d as a,o as i}from"./app-Cv-jMnVl.js";const n={};function r(d,e){return i(),l("div",null,e[0]||(e[0]=[a('<h1 id="延迟队列" tabindex="-1"><a class="header-anchor" href="#延迟队列"><span>延迟队列</span></a></h1><p><a href="https://blog.csdn.net/m0_56079407/article/details/125858748" target="_blank" rel="noopener noreferrer">https://blog.csdn.net/m0_56079407/article/details/125858748</a></p><h3 id="实现方式" tabindex="-1"><a class="header-anchor" href="#实现方式"><span>实现方式</span></a></h3><ul><li>基于死信：在队列里面，通过 ttl</li><li>基于插件：在交换机里面</li></ul><h3 id="应用场景" tabindex="-1"><a class="header-anchor" href="#应用场景"><span>应用场景</span></a></h3><ol><li>订单在十分钟之内未支付则自动取消</li><li>新创建的店铺，如果在十天内都没有上传过商品，则自动发送消息提醒。</li><li>用户注册成功后，如果三天内没有登陆则进行短信提醒。</li><li>用户发起退款，如果三天内没有得到收处理则通知相关运营人员。</li><li>预定会议后，需要在预定的时间点前十分钟通知各个与会人员参加会议</li></ol><h3 id="轮训和定时任务的缺点" tabindex="-1"><a class="header-anchor" href="#轮训和定时任务的缺点"><span>轮训和定时任务的缺点</span></a></h3><ul><li>数据量小：可以采用每秒轮训实现上述功能（数据量大时导致轮训瞬间处理太多）</li><li>对时间要求不严格：那么可以每天凌晨跑定时任务来实现（例如生成一些日报）</li></ul><p>对于大数据量、时效性强的场景，需要用到延迟队列</p><p>延迟队列的优点</p><ul><li>延迟功能有保障（时间要求严格）</li><li>不会像轮训一样一瞬间处理太多</li></ul><h2 id="基于死信" tabindex="-1"><a class="header-anchor" href="#基于死信"><span>基于死信</span></a></h2><p><img src="https://cdn.jsdelivr.net/gh/davidliuk/images@master/blog/928a035b6dca4d76976c0505627aed56.png" alt="基于死信队列" loading="lazy"></p><p>缺点：</p><ul><li>注意：由于队列的先进先出特性，只有当过期的消息到了队列的顶端（队首），才会被真正的丢弃或者进入死信队列。</li><li><strong>如果遇到不同的任务类型需要不同的延时的话，需要为每一种不同延迟时间的消息建立单独的消息队列。</strong></li></ul><h2 id="基于插件" tabindex="-1"><a class="header-anchor" href="#基于插件"><span>基于插件</span></a></h2><p><img src="https://cdn.jsdelivr.net/gh/davidliuk/images@master/blog/e75e296161794b6eb58eeeba5d4f3d34.png" alt="基于插件" loading="lazy"></p><p>x-delayed-message 延迟插件</p>',18)]))}const c=t(n,[["render",r],["__file","延迟队列.html.vue"]]),p=JSON.parse(`{"path":"/cs/middleware/rabbitmq/%E5%BB%B6%E8%BF%9F%E9%98%9F%E5%88%97.html","title":"延迟队列","lang":"en-US","frontmatter":{"description":"延迟队列 https://blog.csdn.net/m0_56079407/article/details/125858748 实现方式 基于死信：在队列里面，通过 ttl 基于插件：在交换机里面 应用场景 订单在十分钟之内未支付则自动取消 新创建的店铺，如果在十天内都没有上传过商品，则自动发送消息提醒。 用户注册成功后，如果三天内没有登陆则进行短信...","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/cs/middleware/rabbitmq/%E5%BB%B6%E8%BF%9F%E9%98%9F%E5%88%97.html"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"延迟队列"}],["meta",{"property":"og:description","content":"延迟队列 https://blog.csdn.net/m0_56079407/article/details/125858748 实现方式 基于死信：在队列里面，通过 ttl 基于插件：在交换机里面 应用场景 订单在十分钟之内未支付则自动取消 新创建的店铺，如果在十天内都没有上传过商品，则自动发送消息提醒。 用户注册成功后，如果三天内没有登陆则进行短信..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/davidliuk/images@master/blog/928a035b6dca4d76976c0505627aed56.png"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-06-27T01:21:47.000Z"}],["meta",{"property":"article:modified_time","content":"2024-06-27T01:21:47.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"延迟队列\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/davidliuk/images@master/blog/928a035b6dca4d76976c0505627aed56.png\\",\\"https://cdn.jsdelivr.net/gh/davidliuk/images@master/blog/e75e296161794b6eb58eeeba5d4f3d34.png\\"],\\"dateModified\\":\\"2024-06-27T01:21:47.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[{"level":3,"title":"实现方式","slug":"实现方式","link":"#实现方式","children":[]},{"level":3,"title":"应用场景","slug":"应用场景","link":"#应用场景","children":[]},{"level":3,"title":"轮训和定时任务的缺点","slug":"轮训和定时任务的缺点","link":"#轮训和定时任务的缺点","children":[]},{"level":2,"title":"基于死信","slug":"基于死信","link":"#基于死信","children":[]},{"level":2,"title":"基于插件","slug":"基于插件","link":"#基于插件","children":[]}],"git":{"createdTime":1679321449000,"updatedTime":1719451307000,"contributors":[{"name":"刘大维","email":"davidliu@liudaweideMacBook-Pro.local","commits":3},{"name":"davidliuk","email":"l729641074@163.com","commits":1}]},"readingTime":{"minutes":1.39,"words":417},"filePathRelative":"cs/middleware/rabbitmq/延迟队列.md","localizedDate":"March 20, 2023","excerpt":"\\n<p><a href=\\"https://blog.csdn.net/m0_56079407/article/details/125858748\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">https://blog.csdn.net/m0_56079407/article/details/125858748</a></p>\\n<h3>实现方式</h3>\\n<ul>\\n<li>基于死信：在队列里面，通过 ttl</li>\\n<li>基于插件：在交换机里面</li>\\n</ul>\\n<h3>应用场景</h3>\\n<ol>\\n<li>订单在十分钟之内未支付则自动取消</li>\\n<li>新创建的店铺，如果在十天内都没有上传过商品，则自动发送消息提醒。</li>\\n<li>用户注册成功后，如果三天内没有登陆则进行短信提醒。</li>\\n<li>用户发起退款，如果三天内没有得到收处理则通知相关运营人员。</li>\\n<li>预定会议后，需要在预定的时间点前十分钟通知各个与会人员参加会议</li>\\n</ol>","autoDesc":true}`);export{c as comp,p as data};
