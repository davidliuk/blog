import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as e,d as n,o as r}from"./app-DIqbhby7.js";const s={};function i(o,a){return r(),e("div",null,a[0]||(a[0]=[n('<h1 id="sharding-分库分表" tabindex="-1"><a class="header-anchor" href="#sharding-分库分表"><span>Sharding 分库分表</span></a></h1><p>读写分离主要应对的是数据库读并发，没有解决数据库存储问题。试想一下：<strong>如果 MySQL 一张表的数据量过大怎么办?</strong></p><p>换言之，<strong>我们该如何解决 MySQL 的存储压力呢？</strong></p><p>答案之一就是 <strong>分库分表</strong>。</p><h3 id="分库" tabindex="-1"><a class="header-anchor" href="#分库"><span>分库</span></a></h3><p><strong>分库</strong> 就是将数据库中的数据分散到不同的数据库上，可以垂直分库，也可以水平分库。</p><h4 id="垂直分库" tabindex="-1"><a class="header-anchor" href="#垂直分库"><span><strong>垂直分库</strong></span></a></h4><p>就是把单一数据库按照业务进行划分，不同的业务使用不同的数据库，进而将一个数据库的压力分担到多个数据库。</p><p>举个例子：说你将数据库中的用户表、订单表和商品表分别单独拆分为用户数据库、订单数据库和商品数据库。</p><h4 id="水平分库" tabindex="-1"><a class="header-anchor" href="#水平分库"><span><strong>水平分库</strong></span></a></h4><p>是把同一个表按一定规则拆分到不同的数据库中，每个库可以位于不同的服务器上，这样就实现了水平扩展，解决了单表的存储和性能瓶颈的问题。</p><p>举个例子：订单表数据量太大，你对订单表进行了水平切分（水平分表），然后将切分后的 2 张订单表分别放在两个不同的数据库。</p><h3 id="分表" tabindex="-1"><a class="header-anchor" href="#分表"><span>分表</span></a></h3><p><strong>分表</strong> 就是对单表的数据进行拆分，可以是垂直拆分，也可以是水平拆分。</p><h4 id="垂直分表" tabindex="-1"><a class="header-anchor" href="#垂直分表"><span><strong>垂直分表</strong></span></a></h4><p>是对数据表列的拆分，把一张列比较多的表拆分为多张表。</p><p>举个例子：我们可以将用户信息表中的一些列单独抽出来作为一个表。</p><h4 id="水平分表" tabindex="-1"><a class="header-anchor" href="#水平分表"><span><strong>水平分表</strong></span></a></h4><p>是对数据表行的拆分，把一张行比较多的表拆分为多张表，可以解决单一表数据量过大的问题。</p><p>举个例子：我们可以将用户信息表拆分成多个用户信息表，这样就可以避免单一表数据量过大对性能造成影响。</p><p>水平拆分只能解决单表数据量大的问题，为了提升性能，我们通常会选择将拆分后的多张表放在不同的数据库中。也就是说，水平分表通常和水平分库同时出现。</p><h3 id="什么情况下需要分库分表" tabindex="-1"><a class="header-anchor" href="#什么情况下需要分库分表"><span>什么情况下需要分库分表？</span></a></h3><p>遇到下面几种场景可以考虑分库分表：</p><ul><li>单表的数据达到千万级别以上，数据库读写速度比较缓慢。</li><li>数据库中的数据占用的空间越来越大，备份时间越来越长。</li><li>应用的并发量太大。</li></ul>',24)]))}const d=t(s,[["render",i],["__file","sharding.html.vue"]]),h=JSON.parse(`{"path":"/cs/database/mysql/availability/sharding.html","title":"Sharding 分库分表","lang":"en-US","frontmatter":{"description":"Sharding 分库分表 读写分离主要应对的是数据库读并发，没有解决数据库存储问题。试想一下：如果 MySQL 一张表的数据量过大怎么办? 换言之，我们该如何解决 MySQL 的存储压力呢？ 答案之一就是 分库分表。 分库 分库 就是将数据库中的数据分散到不同的数据库上，可以垂直分库，也可以水平分库。 垂直分库 就是把单一数据库按照业务进行划分，不同...","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/cs/database/mysql/availability/sharding.html"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"Sharding 分库分表"}],["meta",{"property":"og:description","content":"Sharding 分库分表 读写分离主要应对的是数据库读并发，没有解决数据库存储问题。试想一下：如果 MySQL 一张表的数据量过大怎么办? 换言之，我们该如何解决 MySQL 的存储压力呢？ 答案之一就是 分库分表。 分库 分库 就是将数据库中的数据分散到不同的数据库上，可以垂直分库，也可以水平分库。 垂直分库 就是把单一数据库按照业务进行划分，不同..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-05-08T07:35:02.000Z"}],["meta",{"property":"article:modified_time","content":"2024-05-08T07:35:02.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Sharding 分库分表\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-05-08T07:35:02.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[{"level":3,"title":"分库","slug":"分库","link":"#分库","children":[]},{"level":3,"title":"分表","slug":"分表","link":"#分表","children":[]},{"level":3,"title":"什么情况下需要分库分表？","slug":"什么情况下需要分库分表","link":"#什么情况下需要分库分表","children":[]}],"git":{"createdTime":1684318252000,"updatedTime":1715153702000,"contributors":[{"name":"刘大维","email":"davidliu@liudaweideMacBook-Pro.local","commits":1}]},"readingTime":{"minutes":2.18,"words":655},"filePathRelative":"cs/database/mysql/availability/sharding.md","localizedDate":"May 17, 2023","excerpt":"\\n<p>读写分离主要应对的是数据库读并发，没有解决数据库存储问题。试想一下：<strong>如果 MySQL 一张表的数据量过大怎么办?</strong></p>\\n<p>换言之，<strong>我们该如何解决 MySQL 的存储压力呢？</strong></p>\\n<p>答案之一就是 <strong>分库分表</strong>。</p>\\n<h3>分库</h3>\\n<p><strong>分库</strong> 就是将数据库中的数据分散到不同的数据库上，可以垂直分库，也可以水平分库。</p>\\n<h4><strong>垂直分库</strong></h4>\\n<p>就是把单一数据库按照业务进行划分，不同的业务使用不同的数据库，进而将一个数据库的压力分担到多个数据库。</p>","autoDesc":true}`);export{d as comp,h as data};
