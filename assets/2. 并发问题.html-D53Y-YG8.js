import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as e,b as n,o as i}from"./app-B3ooTv29.js";const s={};function o(p,t){return i(),e("div",null,t[0]||(t[0]=[n('<h1 id="并发问题" tabindex="-1"><a class="header-anchor" href="#并发问题"><span>并发问题</span></a></h1><p><img src="https://cdn.jsdelivr.net/gh/davidliuk/images@master/blog/20210615102505266.jpg" alt="问题与隔离级别" loading="lazy"></p><h3 id="脏读" tabindex="-1"><a class="header-anchor" href="#脏读"><span>脏读</span></a></h3><p>定义：一个事务读到另一个事务<strong>还没有提交</strong>的数据。</p><p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/截屏2023-01-03 12.19.43.png" alt="截屏2023-01-03 12.19.43" loading="lazy"></p><h3 id="不可重复读" tabindex="-1"><a class="header-anchor" href="#不可重复读"><span>不可重复读</span></a></h3><p>定义：一个事务先后读取<strong>同一条记录</strong>，但两次读取的数据不同。</p><p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/截屏2023-01-03 12.20.50.png" alt="截屏2023-01-03 12.20.50" loading="lazy"></p><h3 id="幻读" tabindex="-1"><a class="header-anchor" href="#幻读"><span>幻读</span></a></h3><p><strong><em>The so-called phantom problem occurs within a transaction when the same query produces different sets of rows at different times. For example, if a SELECT is executed twice, but returns a row the second time that was not returned the first time, the row is a “phantom” row.</em></strong></p><p>定义：一个事务，当<strong>同一个查询</strong>在不同的时间产生不同的结果集时，事务中就会出现所谓的幻象问题。</p><blockquote><p>其他定义解释：</p><p>同一个事务里面连续执行两次同样的 sql 语句，可能导致不同结果的问题，如第二次 sql 语句可能会返回之前不存在的行。</p><p>一个事务按照条件查询数据时，没有对应的数据行，但是在插入数据时，又发现这行数据已经存在，好像出现了“幻影”</p><p>事务 B 前后两次读取同一个范围的数据，在事务 B 读取的过程中 A 增加了数据，导致 B 后一次读取查询中之前没有的行；</p><p>和不可重复读有些类似，幻读强调的是事务 A 增加的记录，不可重复读强调的是修改的数据。</p></blockquote><p>例如，如果 SELECT 执行了两次，但第二次返回了第一次没有返回的行，则该行是“幻像”行。</p><p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/截屏2023-01-03 12.21.57.png" alt="截屏2023-01-03 12.21.57" loading="lazy"></p><p>如上三种问题，从上到下依次危害减弱。</p><h3 id="更新丢失" tabindex="-1"><a class="header-anchor" href="#更新丢失"><span>更新丢失</span></a></h3><h4 id="第一类更新丢失" tabindex="-1"><a class="header-anchor" href="#第一类更新丢失"><span>第一类更新丢失</span></a></h4><p>事务 A 和事务 B 都对数据进行更新，A 发生异常，进行回滚，把 B 提交的事务覆盖了。</p><h4 id="第二类更新丢失" tabindex="-1"><a class="header-anchor" href="#第二类更新丢失"><span>第二类更新丢失</span></a></h4><p>一般说的丢失更新，事务 A 和事务 B 都对数据进行更新，事务 A 把事务 B 的更新数据的给覆盖了</p>',20)]))}const c=a(s,[["render",o],["__file","2. 并发问题.html.vue"]]),h=JSON.parse(`{"path":"/cs/database/mysql/transaction/2.%20%E5%B9%B6%E5%8F%91%E9%97%AE%E9%A2%98.html","title":"并发问题","lang":"en-US","frontmatter":{"description":"并发问题 问题与隔离级别 脏读 定义：一个事务读到另一个事务还没有提交的数据。 截屏2023-01-03 12.19.43 不可重复读 定义：一个事务先后读取同一条记录，但两次读取的数据不同。 截屏2023-01-03 12.20.50 幻读 The so-called phantom problem occurs within a transacti...","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/cs/database/mysql/transaction/2.%20%E5%B9%B6%E5%8F%91%E9%97%AE%E9%A2%98.html"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"并发问题"}],["meta",{"property":"og:description","content":"并发问题 问题与隔离级别 脏读 定义：一个事务读到另一个事务还没有提交的数据。 截屏2023-01-03 12.19.43 不可重复读 定义：一个事务先后读取同一条记录，但两次读取的数据不同。 截屏2023-01-03 12.20.50 幻读 The so-called phantom problem occurs within a transacti..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/davidliuk/images@master/blog/20210615102505266.jpg"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-05-08T07:35:02.000Z"}],["meta",{"property":"article:modified_time","content":"2024-05-08T07:35:02.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"并发问题\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/davidliuk/images@master/blog/20210615102505266.jpg\\",\\"https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/%E6%88%AA%E5%B1%8F2023-01-03%2012.19.43.png\\",\\"https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/%E6%88%AA%E5%B1%8F2023-01-03%2012.20.50.png\\",\\"https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/%E6%88%AA%E5%B1%8F2023-01-03%2012.21.57.png\\"],\\"dateModified\\":\\"2024-05-08T07:35:02.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[{"level":3,"title":"脏读","slug":"脏读","link":"#脏读","children":[]},{"level":3,"title":"不可重复读","slug":"不可重复读","link":"#不可重复读","children":[]},{"level":3,"title":"幻读","slug":"幻读","link":"#幻读","children":[]},{"level":3,"title":"更新丢失","slug":"更新丢失","link":"#更新丢失","children":[]}],"git":{"createdTime":1672647518000,"updatedTime":1715153702000,"contributors":[{"name":"刘大维","email":"davidliu@liudaweideMacBook-Pro.local","commits":2},{"name":"davidliuk","email":"l729641074@163.com","commits":1}]},"readingTime":{"minutes":1.83,"words":549},"filePathRelative":"cs/database/mysql/transaction/2. 并发问题.md","localizedDate":"January 2, 2023","excerpt":"\\n<p><img src=\\"https://cdn.jsdelivr.net/gh/davidliuk/images@master/blog/20210615102505266.jpg\\" alt=\\"问题与隔离级别\\" loading=\\"lazy\\"></p>\\n<h3>脏读</h3>\\n<p>定义：一个事务读到另一个事务<strong>还没有提交</strong>的数据。</p>\\n<p><img src=\\"https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/截屏2023-01-03 12.19.43.png\\" alt=\\"截屏2023-01-03 12.19.43\\" loading=\\"lazy\\"></p>","autoDesc":true}`);export{c as comp,h as data};
