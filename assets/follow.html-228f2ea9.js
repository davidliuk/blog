import{_ as i,V as a,W as l,a0 as e}from"./framework-705b829b.js";const p={},t=e('<h1 id="关注" tabindex="-1"><a class="header-anchor" href="#关注" aria-hidden="true">#</a> 关注</h1><h2 id="关注和取关" tabindex="-1"><a class="header-anchor" href="#关注和取关" aria-hidden="true">#</a> 关注和取关</h2><ol><li>关注和取关两个接口</li><li>判断是否关注的接口</li></ol><p>这个放到表里面，联系集</p><h2 id="共同关注" tabindex="-1"><a class="header-anchor" href="#共同关注" aria-hidden="true">#</a> 共同关注</h2><p>redis：set</p><p><code>sinter</code></p><h2 id="关注推送" tabindex="-1"><a class="header-anchor" href="#关注推送" aria-hidden="true">#</a> 关注推送</h2><p>也叫Feed流。</p><p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/截屏2023-02-11 11.08.57.png" alt="截屏2023-02-11 11.08.57" loading="lazy"></p><p>两种模式：</p><ul><li>Timeline：不做内容筛选，简单的按照内容发布时间排序，常用于好友或关注，例如朋友圈 <ul><li>优点：信息全面</li><li>缺点：信息噪音较多，用户不一定感兴趣，内容获取效率低</li></ul></li><li>智能排序：利用智能算法屏蔽掉违规的、用户不感兴趣的内容。推送用户感兴趣信息来吸引用户 <ul><li>优点：用户粘度高</li><li>缺点：如果算法不精准，可能起到反作用</li></ul></li></ul><p>Timeline的三种模式</p><ul><li><p>拉模式：读扩散</p><p>优点：节省内存；缺点：延迟高、实现复杂</p></li><li><p>推模式：写扩散</p><p>优点：快、实现简单；缺点：占用内存高</p><p><strong>小规模网站就用推模式就可以了</strong></p></li><li><p>推拉结合模式：兼具推和拉两种模式的优点</p><p>大V：推给活跃粉丝，放到发件箱</p><p>普通人：推给所有粉丝</p></li></ul><p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/截屏2023-02-11 11.22.16.png" alt="截屏2023-02-11 11.22.16" loading="lazy"></p><p>粉丝收件箱只要用redis zset存id就可以了</p><p>Feed流中的数据会不断更新，所以数据的角标也在变化，因此不能采用传统的分页模式。</p><p>需求：时间戳排序，滚动分页查询</p><p>list只能用角标查询，无法实现滚动分页</p><p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/截屏2023-02-11 11.39.25.png" alt="截屏2023-02-11 11.39.25" loading="lazy"></p>',20),n=[t];function s(c,h){return a(),l("div",null,n)}const d=i(p,[["render",s],["__file","follow.html.vue"]]);export{d as default};
