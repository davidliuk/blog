import{_ as e,V as r,W as t,Z as a}from"./framework-e5d7a6b2.js";const o={},s=a('<h1 id="常见问题" tabindex="-1"><a class="header-anchor" href="#常见问题" aria-hidden="true">#</a> 常见问题</h1><h3 id="the-error-occurred-while-setting-parameters" tabindex="-1"><a class="header-anchor" href="#the-error-occurred-while-setting-parameters" aria-hidden="true">#</a> The error occurred while setting parameters</h3><p>解决办法</p><p>一、检查有没有拼写错误</p><p>比如 insert 写成 inset</p><p>二、检查有没有sql关键字</p><p>比如 insert into order (order_no) VALUES (1001);</p><p>其中表名 order是sql关键字 所以加上``即可，改为INSERT INTO `order` (order_no) VALUES (1001);</p><p>或者字段名是关键词同理</p><p>三、有没有少写参数</p>',10),n=[s];function c(i,d){return r(),t("div",null,n)}const p=e(o,[["render",c],["__file","常见问题.html.vue"]]);export{p as default};
