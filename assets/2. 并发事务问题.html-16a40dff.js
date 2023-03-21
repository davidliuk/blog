import{_ as a,V as e,W as t,a0 as n}from"./framework-705b829b.js";const r={},s=n('<h1 id="并发问题" tabindex="-1"><a class="header-anchor" href="#并发问题" aria-hidden="true">#</a> 并发问题</h1><h3 id="脏读" tabindex="-1"><a class="header-anchor" href="#脏读" aria-hidden="true">#</a> 脏读</h3><p>一个事务读到另一个事务还没有提交的数据。</p><p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/截屏2023-01-03 12.19.43.png" alt="截屏2023-01-03 12.19.43" loading="lazy"></p><h3 id="不可重复读" tabindex="-1"><a class="header-anchor" href="#不可重复读" aria-hidden="true">#</a> 不可重复读</h3><p>一个事务先后读取同一条记录，但两次读取的数据不同。</p><p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/截屏2023-01-03 12.20.50.png" alt="截屏2023-01-03 12.20.50" loading="lazy"></p><h3 id="幻读" tabindex="-1"><a class="header-anchor" href="#幻读" aria-hidden="true">#</a> 幻读</h3><p><em><strong>The so-called phantom problem occurs within a transaction when the same query produces different sets of rows at different times. For example, if a SELECT is executed twice, but returns a row the second time that was not returned the first time, the row is a “phantom” row.</strong></em></p><p>当同一个查询在不同的时间产生不同的结果集时，事务中就会出现所谓的幻象问题。</p><p>例如，如果 SELECT 执行了两次，但第二次返回了第一次没有返回的行，则该行是“幻像”行。</p><p>一个事务按照条件查询数据时，没有对应的数据行，但是在插入数据时，又发现这行数据已经存在，好像出现了“幻影”</p><p>“幻读”指，同一个事务里面连续执行两次同样的sql语句，可能导致不同结果的问题，第二次sql语句可能会返回之前不存在的行。</p><p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/截屏2023-01-03 12.21.57.png" alt="截屏2023-01-03 12.21.57" loading="lazy"></p>',14),i=[s];function h(o,c){return e(),t("div",null,i)}const p=a(r,[["render",h],["__file","2. 并发事务问题.html.vue"]]);export{p as default};
