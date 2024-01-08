import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as i,d as r}from"./app-9107e99b.js";const d={},t=r('<h1 id="点赞排行" tabindex="-1"><a class="header-anchor" href="#点赞排行" aria-hidden="true">#</a> 点赞排行</h1><h2 id="点赞" tabindex="-1"><a class="header-anchor" href="#点赞" aria-hidden="true">#</a> 点赞</h2><h3 id="一人一赞" tabindex="-1"><a class="header-anchor" href="#一人一赞" aria-hidden="true">#</a> 一人一赞</h3><p>方案一：</p><ul><li>数据库建立联系集，点赞和取消都在数据库做 crud</li><li>缺点：太重</li></ul><p>方案二：</p><ul><li>Redis Set：集合并且唯一</li></ul><h3 id="点赞排行榜" tabindex="-1"><a class="header-anchor" href="#点赞排行榜" aria-hidden="true">#</a> 点赞排行榜</h3><p>按照点赞的时间排序，展示点赞排行的前五名</p><p>SortedSet，</p><p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/截屏2023-02-10 23.06.43.png" alt="截屏2023-02-10 23.06.43" loading="lazy"></p><p>注意拿到 id 到数据库查询的时候，sql 写 in 的时候，他的结果又是无序的了，需要类似<code>order by field(id, 5, 2, 3)</code>这样写</p>',12),c=[t];function h(n,o){return a(),i("div",null,c)}const p=e(d,[["render",h],["__file","rate.html.vue"]]);export{p as default};
