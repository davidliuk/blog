import{_ as a,V as e,W as t,Z as c}from"./framework-e5d7a6b2.js";const i={},n=c('<h1 id="线程状态" tabindex="-1"><a class="header-anchor" href="#线程状态" aria-hidden="true">#</a> 线程状态</h1><h3 id="java六种线程状态及转换图" tabindex="-1"><a class="header-anchor" href="#java六种线程状态及转换图" aria-hidden="true">#</a> JAVA六种线程状态及转换图</h3><p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/截屏2023-02-01 22.49.41.png" alt="截屏2023-02-01 22.49.41" loading="lazy"></p><p>新建状态，只是一个java对象，并没有与cpu中的一个线程关联，start以后可运行以后关联</p><p>控制线程先后执行次序的技巧</p><ul><li>Debug模式，在主线程和分线程分别打好断点，控制两个端点哪个先执行</li></ul><h3 id="os五种状态及转化图" tabindex="-1"><a class="header-anchor" href="#os五种状态及转化图" aria-hidden="true">#</a> OS五种状态及转化图</h3><p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/截屏2023-02-01 23.34.50.png" alt="截屏2023-02-01 23.34.50" loading="lazy"></p><p>运行：有资格且正在运行</p><p>就绪：有资格但还没有运行</p><p>阻塞：暂时没有资格分到CPU时间（特殊的阻塞I/O不需要CPU时间片是磁盘在处理的，也归到阻塞，但是实际上是在运行的）</p><p>Java中的RUNNABLE涵盖了就绪、运行、阻塞I/O</p>',12),h=[n];function s(r,o){return e(),t("div",null,h)}const d=a(i,[["render",s],["__file","线程状态.html.vue"]]);export{d as default};
