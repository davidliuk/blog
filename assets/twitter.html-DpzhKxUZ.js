import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as i,d as s,o}from"./app-CrF8c6p-.js";const r={};function a(l,e){return o(),i("div",null,e[0]||(e[0]=[s('<h1 id="twitter" tabindex="-1"><a class="header-anchor" href="#twitter"><span>Twitter</span></a></h1><p>sns</p><ul><li>Tech Stack: Python,Django,MySQL,HBase,Redis, Memcached, RabbitMQ, Amazon S3</li><li>Used push model to fanout news feeds.</li><li>Used Redis and Memcached to reduce db queries for tables which has lot reads and less writes.</li><li>Used Key-value store HBase to split db queries or tables which has less reads and lot writes.</li><li>Used denormalization to store the number of comments likes in order to reduce db queries.</li><li>Used Message Queue to deliver asynchronized tasks to reduce response time.</li><li>The whole project resulted in 10000 lines of code changes,cost over 3 months.</li></ul><hr><p>技术栈：Python,Django,MySQL,HBase,Redis,Memcached,RabbitMQ,Amazon S3<br> 使用推(Push)模型实现写扩散机制的新鲜事(news feeds)<br> 使用 Memcached 和 Redis 缓存数据，优化读多写少的数据库表单<br> 使用 Key-value Store-HBase 存储写多读少的数据库表单<br> 使用冗余存储技术（Denormalization）记录评论数和点赞数，减少数据库查询次数<br> 使用 Message Queue 传递异步任务，降低响应时间<br> 涉及的代码更改10000+行，耗时3个月</p><p>从0-&gt;1-&gt;N搭建起一个工业级标准的信息流系统后端</p><ul><li>Python、Django、Celery (异步任务)</li><li>Redis、Memcached、Message Queue</li><li>MySQL、HBase</li><li>AWS / Aliyun Cloud Service (S3, Relational DB、Hbase、Load Balancer)</li><li>Rest APl、Serialization、Denormalization</li></ul><p>通过每次 100-200 行代码的Git Commit让你分步骤的了解一个可以达到工业化标准的项目是如何搭建起来的</p><p>硅谷顶尖大厂高级工程师，拥有丰富的亿级用户开发经验</p><p>通过一个项目从P5/E3的难度级别做到P8/E5的难度级别，逐步深入，真正能够实现一个工业级要求的项目</p><p>50个commit</p><hr><p>推拉模式<br> 异步任务<br> 消息队列<br> 冗余存储<br> Pull vs Push<br> Async Task<br> Message Queue<br> Denormalization</p><hr><p>一个Web系统中为什么需要异步任务？</p><p>有一些任务无法在用户请求的阶段完成（一般用户的耐心是1秒以内)<br> 有一些任务需要进行失败重试（比如和第三方API进行沟通的任务)<br> 有一些需要周期性执行的定时任务</p><p>说说看我们平时遇到的哪些需求是需要通过异步实现的？</p><p>发邮件<br> 注册账号<br> 在LintCode上提交代码评测发送提醒邮件/短信<br> 红包超时未领取之后自动撤回</p><hr><p>一个异步任务的执行离不开消息队列，因为异步任务的信息会被作为数据放在消息队列中，等着执行者(worker)来取走进行执行。</p><p>消息队列是一种中间件(Middleware)啥是中间件？大概可以理解为系统中汇总传递信息的组件。<br> 消息队列可以控制任务的优先级，可以分配不同的队列让不同的执行者机器执行不同的任务。<br> 消息队列可以确保一个任务只被一个执行者拿到避免重复执行。</p><hr><p>冗余存储</p><p>标准存储：比如，点赞人数，本来是通过从 like table 表 select（tweet id带索引）</p><p>优点：标准化，最准确。<br> 缺点：炒鸡慢，会增加O(N)个SQL Queries(对于某一页的Tweets,每个都得来这么一句查询)</p><p>一定要避免的事情（for循环里面sql，n pass sql query）</p><p>冗余存储：一些冗余字段，记录点赞数，点赞的时候就给count+1/-1</p><p><a href="https://www.lintcode.com/collection/194/" target="_blank" rel="noopener noreferrer">https://www.lintcode.com/collection/194/</a></p><hr><p>热门Social App的模型</p><ul><li>Facebook Pull</li><li>Instagram Push Pull</li><li>Twitter -Pull</li><li>朋友圈？</li></ul><p>误区</p><ul><li>不坚定想法，摇摆不定</li><li>不能表现出Tradeoff的能力</li><li>无法解决特定的问题</li><li>猜猜微信朋友圈用的是什么模型？</li></ul><hr><p>HBase: strong friends, newsfeed</p>',35)]))}const c=t(r,[["render",a],["__file","twitter.html.vue"]]),p=JSON.parse(`{"path":"/se/design/system/projects/twitter.html","title":"Twitter","lang":"en-US","frontmatter":{"description":"Twitter sns Tech Stack: Python,Django,MySQL,HBase,Redis, Memcached, RabbitMQ, Amazon S3 Used push model to fanout news feeds. Used Redis and Memcached to reduce db queries for t...","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/se/design/system/projects/twitter.html"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"Twitter"}],["meta",{"property":"og:description","content":"Twitter sns Tech Stack: Python,Django,MySQL,HBase,Redis, Memcached, RabbitMQ, Amazon S3 Used push model to fanout news feeds. Used Redis and Memcached to reduce db queries for t..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-05-08T07:35:02.000Z"}],["meta",{"property":"article:modified_time","content":"2024-05-08T07:35:02.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Twitter\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-05-08T07:35:02.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[],"git":{"createdTime":1715153702000,"updatedTime":1715153702000,"contributors":[{"name":"刘大维","email":"davidliu@liudaweideMacBook-Pro.local","commits":1}]},"readingTime":{"minutes":2.94,"words":883},"filePathRelative":"se/design/system/projects/twitter.md","localizedDate":"May 8, 2024","excerpt":"\\n<p>sns</p>\\n<ul>\\n<li>Tech Stack: Python,Django,MySQL,HBase,Redis, Memcached, RabbitMQ, Amazon S3</li>\\n<li>Used push model to fanout news feeds.</li>\\n<li>Used Redis and Memcached to reduce db queries for tables which has lot reads and less writes.</li>\\n<li>Used Key-value store HBase to split db queries or tables which has less reads and lot writes.</li>\\n<li>Used denormalization to store the number of comments likes in order to reduce db queries.</li>\\n<li>Used Message Queue to deliver asynchronized tasks to reduce response time.</li>\\n<li>The whole project resulted in 10000 lines of code changes,cost over 3 months.</li>\\n</ul>","autoDesc":true}`);export{c as comp,p as data};
