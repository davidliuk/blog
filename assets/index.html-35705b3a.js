import{_ as l,V as i,W as p,a0 as e}from"./framework-705b829b.js";const u={},a=e('<h1 id="框架" tabindex="-1"><a class="header-anchor" href="#框架" aria-hidden="true">#</a> 框架</h1><p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/image.png" alt="image" loading="lazy"></p><p>结构</p><ul><li><p>线：减治，</p></li><li><p>树：分治，无重叠子问题（注意均衡的问题）</p><p>分治很简单也符合直觉，难点是时间复杂度估算（主方法）</p><p>对于分布式计算很重要，mit 6.24</p></li><li><p>图：动规，有重叠子问题</p></li><li><p>集：无序，判断存在或者数量</p></li></ul><p>搜索</p><ul><li>FOR：循环搜索</li><li>DFS：栈式搜索</li><li>BFS：队列搜索</li></ul><p>优化</p><ul><li>减治：无效优化</li><li>动规：重叠优化</li><li>分治：并行优化，可以分布式计算如mapreduce</li></ul><p>顺序</p><ul><li>先序</li><li>后序</li><li>访问</li><li>邻接</li></ul><p>传参</p><ul><li>局部变量传参 <ul><li>父向子：自上而下（在栈内部或队列内部）</li><li>子向父：返回值</li></ul></li><li>全局参数传递</li></ul><p>线索：</p><ul><li>递推 <ul><li>值传递</li></ul></li><li>分类 <ul><li>分治</li></ul></li><li>有序 <ul><li>减治</li></ul></li><li>收敛 <ul><li>DFS</li></ul></li></ul>',14),t=[a];function c(n,o){return i(),p("div",null,t)}const r=l(u,[["render",c],["__file","index.html.vue"]]);export{r as default};