import{_ as a,V as t,W as c,a0 as n}from"./framework-705b829b.js";const p={},o=n('<h1 id="并发事务的问题" tabindex="-1"><a class="header-anchor" href="#并发事务的问题" aria-hidden="true">#</a> 并发事务的问题</h1><p>脏读</p><p>一个事务读到另一个事务还没有提交的数据。</p><p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/截屏2023-01-03 12.19.43.png" alt="截屏2023-01-03 12.19.43" loading="lazy"></p><p>不可重复读</p><p>一个事务先后读取同一条记录，但两次读取的数据不同。</p><p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/截屏2023-01-03 12.20.50.png" alt="截屏2023-01-03 12.20.50" loading="lazy"></p><p>幻读</p><p>一个事务按照条件查询数据时，没有对应的数据行，但是在插入数据时，又发现这行数据已经存在，好像出现了“幻影”</p><p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/截屏2023-01-03 12.21.57.png" alt="截屏2023-01-03 12.21.57" loading="lazy"></p>',10),s=[o];function e(i,_){return t(),c("div",null,s)}const l=a(p,[["render",e],["__file","2. 并发事务问题.html.vue"]]);export{l as default};
