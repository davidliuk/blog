import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as p,d as l,o as a}from"./app-ChU1gMRF.js";const t={};function o(n,e){return a(),p("div",null,e[0]||(e[0]=[l('<h1 id="接口设计" tabindex="-1"><a class="header-anchor" href="#接口设计"><span>接口设计</span></a></h1><p>网站系统，API设计与短网址Web System,API, Design Tiny URL</p><p>·网站系统的基本构成<br> ·API设计问题<br> ·什么是RestAPI</p><p>实战真题：</p><p>a.What happend if you visit <a href="http://www.google.com" target="_blank" rel="noopener noreferrer">www.google.com</a>?<br> b.How to design tiny url?<br> c.如何设计News Feed API<br> d.如何设计mention功能<br> e.如何做翻页Pagination</p><p>关键词：Web,Consistent Hashing,Memcached,Tiny url..</p><h2 id="rest-api" tabindex="-1"><a class="header-anchor" href="#rest-api"><span>Rest API</span></a></h2><p>你要获取的数据是什么，你的路径就是什么开头的</p><ul><li>每个URL代表某类数据/资源</li><li>HTTP的四个动作，代表数据的增删改查</li><li>所有筛选条件，创建参数，放到HTTP的参数里面</li></ul><p>转账API</p><p><code>POST /api/transaction/?from=1&amp;to=2&amp;money=500</code></p><h2 id="design-news-feed-api" tabindex="-1"><a class="header-anchor" href="#design-news-feed-api"><span>Design News Feed API</span></a></h2><p>设计前后端的交互接口</p><ul><li><p>什么是API，Web API请求格式</p><p><code>GET api.domain.com/newsfeed/</code></p><p><code>GET domain.com/api/newsfeed/</code></p></li><li><p>返回内容格式</p><p>Structured Data：json或xml，主要是json</p><p>xml主要在android的代码中用于记录一些格式化数据</p></li><li><p>设计Pagination</p><ul><li><p><code>page=1</code>,</p><p>优点：可以跳转到第x页</p><p>缺点：如果有新的数据插入，则翻页的时候可能看到上一页的内容，刷新比较难受</p></li><li><p><code>max_id=xxx</code>, cursor 法，信息流变化快的</p><p>没有max_id表示第一页</p><p>有max_id找所有id&lt;=max_id的最顶上的20个（时间倒叙排列）</p><ul><li>如何判断有没有下一页，如果避免额外再查一次来判断是否终点 <ul><li>Next_max_id，每次多找一个数据，把这个数据的id作为next_max_id</li></ul></li></ul></li></ul></li><li><p>设计Mentions的数据格式，可以点进人家的主页里面</p></li></ul><h2 id="mentions-数据格式" tabindex="-1"><a class="header-anchor" href="#mentions-数据格式"><span>Mentions 数据格式</span></a></h2><p>预防 Javascript injection attack</p><p>mobile和web不能共享</p><p>url可能改动</p><p>推荐方法：</p><p>自定义链接结构</p><p>如：<code>&lt;user username=&quot;a&quot;&gt;Hello World&lt;/user&gt;</code>让Web和Mobile分别对该格式进行解析</p><h2 id="短链接系统" tabindex="-1"><a class="header-anchor" href="#短链接系统"><span>短链接系统</span></a></h2><ol><li>提问：分析功能</li><li>画图：</li></ol><h3 id="scenario" tabindex="-1"><a class="header-anchor" href="#scenario"><span>Scenario</span></a></h3><p>Long Url和Short Url之间必须是一一对应嘛？short只对应一个long，但是一个long可能多个也可能一个short，但是对应一个short比较省空间</p><p>Short Url长时间是否需要释放：觉得最好不要释放</p><p>QPS新浪微博</p><p>DAU 100M</p><p>QPS 100M*0.1/86400 =100</p><p>Peek Write QPS=100*2=200</p><p>Read QPS 100M*0.1/86400 =100</p><p>Peak Read QPS=2k，一台SSD的MySQL完全可以搞定</p><p>Storage</p><p>100M*0.1=10M</p><p>长度100算，1G</p><p>1T硬盘用3年</p><h3 id="service" tabindex="-1"><a class="header-anchor" href="#service"><span>Service</span></a></h3><p>GET 301</p><p>POST 200</p><h3 id="strorage-🌟" tabindex="-1"><a class="header-anchor" href="#strorage-🌟"><span>Strorage 🌟</span></a></h3><ol><li>Select</li><li>Schema</li></ol><p>SQL or NoSQL</p><p>Transaction? 不需要。NoSQL+1</p><p>丰富SQL Query？不需要。NoSQL+1</p><p>是否偷懒？TinyURL写起来不复杂，NoSQL+1</p><p>QPS高不？不，SQL+1</p><p>Scalability？不高，SQL+1</p><p><strong>Sequential ID</strong>？取决于你用的算法</p><ul><li>SQL有auto- increment的Sequential ID</li><li>NoSQL的ID并不是Sequential的</li></ul><p>算法1:hash Function（不可行）</p><p>Long Url的MD5的后6位</p><p>优点：快</p><p>缺点：难以设计不冲突的hash</p><p>算法2: 随机生成ShortURL+数据库去重</p><p>优点：简单</p><p>缺点：生产网址越多，之后生产越慢</p><p><strong>算法3: 进制转换 Base62</strong></p><p>将6位的short url看作62进制数（0-9, a-z, A-Z)</p><p>每个short URL对应到一个整数</p><p>该整数对应数据库表的Primay Key</p><p>6位，570亿</p><p>优点：效率高，稳定</p><p>缺点：依赖全局的自增ID，可以被暴力枚举，但是这个没啥事，不是什么机密数据</p><p>Schema</p><p><code>ID</code>, <code>long URL</code></p><p>Index，支持反向查找</p><h3 id="scale" tabindex="-1"><a class="header-anchor" href="#scale"><span>Scale</span></a></h3><p>reduce response time</p><ol><li><p>Cache Aside</p><p>Memcached: long to short, short to long</p></li><li><p>利用地理位置提速</p><ol><li><p>不同地区不同web server</p><p>memcached分区，db共享，服务器之间可以做链路优化，比较快</p></li><li><p>DNS解析不同地区</p></li></ol></li></ol><p>how to scale</p><ul><li>cache不够</li><li>写操作变多</li></ul><p>Vertical Sharding: 不行，就两个字段</p><p>Horizontal Sharding</p><ul><li>ID/short URL做sharding key <ul><li>long to short查询的时候只能广播给N台数据库查询</li><li>为什么long to short？避免重复的时候会查，</li><li>如果不需要去重则这种方案可行</li></ul></li><li>Long URL做sharding key <ul><li>short to long 查询的时候，只能广播N台</li><li>但是这个short to long是最常用需求</li></ul></li></ul><p>多台机器如何维护全局自增ID</p><ul><li>方案一：一台数据库专门用来做自增ID服务 <ul><li>不存储真实数据，为避免Single Point failure，需要master slave</li></ul></li><li>方案二：zookeeper</li></ul><hr><p>custom url</p>',78)]))}const d=i(t,[["render",o],["__file","api.html.vue"]]),c=JSON.parse(`{"path":"/se/design/system/api.html","title":"接口设计","lang":"en-US","frontmatter":{"description":"接口设计 网站系统，API设计与短网址Web System,API, Design Tiny URL ·网站系统的基本构成 ·API设计问题 ·什么是RestAPI 实战真题： a.What happend if you visit www.google.com? b.How to design tiny url? c.如何设计News Feed AP...","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/se/design/system/api.html"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"接口设计"}],["meta",{"property":"og:description","content":"接口设计 网站系统，API设计与短网址Web System,API, Design Tiny URL ·网站系统的基本构成 ·API设计问题 ·什么是RestAPI 实战真题： a.What happend if you visit www.google.com? b.How to design tiny url? c.如何设计News Feed AP..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2025-01-07T00:41:06.000Z"}],["meta",{"property":"article:modified_time","content":"2025-01-07T00:41:06.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"接口设计\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-01-07T00:41:06.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[{"level":2,"title":"Rest API","slug":"rest-api","link":"#rest-api","children":[]},{"level":2,"title":"Design News Feed API","slug":"design-news-feed-api","link":"#design-news-feed-api","children":[]},{"level":2,"title":"Mentions 数据格式","slug":"mentions-数据格式","link":"#mentions-数据格式","children":[]},{"level":2,"title":"短链接系统","slug":"短链接系统","link":"#短链接系统","children":[{"level":3,"title":"Scenario","slug":"scenario","link":"#scenario","children":[]},{"level":3,"title":"Service","slug":"service","link":"#service","children":[]},{"level":3,"title":"Strorage 🌟","slug":"strorage-🌟","link":"#strorage-🌟","children":[]},{"level":3,"title":"Scale","slug":"scale","link":"#scale","children":[]}]}],"git":{"createdTime":1715153702000,"updatedTime":1736210466000,"contributors":[{"name":"刘大维","email":"davidliu@liudaweideMacBook-Pro.local","commits":2},{"name":"刘大维","email":"davidliu@liudaweideMacBook-Pro-3.local","commits":1}]},"readingTime":{"minutes":3.45,"words":1034},"filePathRelative":"se/design/system/api.md","localizedDate":"May 8, 2024","excerpt":"\\n<p>网站系统，API设计与短网址Web System,API, Design Tiny URL</p>\\n<p>·网站系统的基本构成<br>\\n·API设计问题<br>\\n·什么是RestAPI</p>\\n<p>实战真题：</p>\\n<p>a.What happend if you visit <a href=\\"http://www.google.com\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">www.google.com</a>?<br>\\nb.How to design tiny url?<br>\\nc.如何设计News Feed API<br>\\nd.如何设计mention功能<br>\\ne.如何做翻页Pagination</p>","autoDesc":true}`);export{d as comp,c as data};
