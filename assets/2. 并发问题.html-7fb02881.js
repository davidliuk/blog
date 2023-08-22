import{_ as e,V as a,W as t,Z as r}from"./framework-e5d7a6b2.js";const s={},h=r('<h1 id="并发问题" tabindex="-1"><a class="header-anchor" href="#并发问题" aria-hidden="true">#</a> 并发问题</h1><h3 id="脏读" tabindex="-1"><a class="header-anchor" href="#脏读" aria-hidden="true">#</a> 脏读</h3><p>一个事务读到另一个事务还没有提交的数据。</p><p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/截屏2023-01-03 12.19.43.png" alt="截屏2023-01-03 12.19.43"></p><h3 id="不可重复读" tabindex="-1"><a class="header-anchor" href="#不可重复读" aria-hidden="true">#</a> 不可重复读</h3><p>定义：一个事务先后读取<strong>同一条记录</strong>，但两次读取的数据不同。</p><p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/截屏2023-01-03 12.20.50.png" alt="截屏2023-01-03 12.20.50"></p><h3 id="幻读" tabindex="-1"><a class="header-anchor" href="#幻读" aria-hidden="true">#</a> 幻读</h3><p><strong><em>The so-called phantom problem occurs within a transaction when the same query produces different sets of rows at different times. For example, if a SELECT is executed twice, but returns a row the second time that was not returned the first time, the row is a “phantom” row.</em></strong></p><p>定义：一个事务，当<strong>同一个查询</strong>在不同的时间产生不同的结果集时，事务中就会出现所谓的幻象问题。</p><blockquote><p>其他定义解释：</p><p>同一个事务里面连续执行两次同样的 sql 语句，可能导致不同结果的问题，如第二次 sql 语句可能会返回之前不存在的行。</p><p>一个事务按照条件查询数据时，没有对应的数据行，但是在插入数据时，又发现这行数据已经存在，好像出现了“幻影”</p><p>事务 B 前后两次读取同一个范围的数据，在事务 B 读取的过程中 A 增加了数据，导致 B 后一次读取查询中之前没有的行；</p><p>和不可重复读有些类似，幻读强调的是事务 A 增加的记录，不可重复读强调的是修改的数据。</p></blockquote><p>例如，如果 SELECT 执行了两次，但第二次返回了第一次没有返回的行，则该行是“幻像”行。</p><p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/截屏2023-01-03 12.21.57.png" alt="截屏2023-01-03 12.21.57"></p><p>如上三种问题，从上到下依次危害减弱。</p><h4 id="_4-第一类更新丢失" tabindex="-1"><a class="header-anchor" href="#_4-第一类更新丢失" aria-hidden="true">#</a> 4.第一类更新丢失</h4><p>事务 A 和事务 B 都对数据进行更新，A 发生异常，进行回滚，把 B 提交的事务覆盖了。</p><h4 id="_5-第二类更新丢失-一般说的丢失更新" tabindex="-1"><a class="header-anchor" href="#_5-第二类更新丢失-一般说的丢失更新" aria-hidden="true">#</a> 5.第二类更新丢失(一般说的丢失更新)</h4><p>事务 A 和事务 B 都对数据进行更新，事务 A 把事务 B 的更新数据的给覆盖了</p><p><img src="https://cdn.jsdelivr.net/gh/davidliuk/images@master/blog/20210615102505266.jpg" alt="在这里插入图片描述"></p>',19),n=[h];function i(o,c){return a(),t("div",null,n)}const d=e(s,[["render",i],["__file","2. 并发问题.html.vue"]]);export{d as default};
