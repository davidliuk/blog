import{_ as a,V as i,W as e,a0 as n}from"./framework-705b829b.js";const c={},l=n('<h1 id="锁的对比" tabindex="-1"><a class="header-anchor" href="#锁的对比" aria-hidden="true">#</a> 锁的对比</h1><h2 id="lock-vs-sychronized" tabindex="-1"><a class="header-anchor" href="#lock-vs-sychronized" aria-hidden="true">#</a> Lock vs sychronized</h2><h3 id="语法层面" tabindex="-1"><a class="header-anchor" href="#语法层面" aria-hidden="true">#</a> 语法层面</h3><ul><li>synchronized是关键字，源码在jvm中，用c++实现</li><li>Lock是接口，源码由jdk提供，用java语言实现</li><li>使用synchronized时，退出同步代码块锁会自动释放，而使用Lock时，需要手动调用unlock方法释放锁</li></ul><h3 id="功能层面" tabindex="-1"><a class="header-anchor" href="#功能层面" aria-hidden="true">#</a> 功能层面</h3><ul><li><p>二者均属于悲观锁，都具备基本的互斥、同步、锁重入功能</p><p>互斥：就是只有一个拿着锁</p><p>同步：</p><ul><li>synchronize：wait，notify</li><li>Lock：利用条件变量提供的：await，signal</li></ul><p>锁重入：是否可以对已经加上锁的对象加上第二道、第三道锁，到时候解锁也需要解多道</p></li><li><p>Lock提供了许多synchronized不具备的功能，例如获取等待状态、公平锁、可打断、可超时、多条件变量</p><p>公平锁：先来先得（吞吐量不如非公平的高），非公平锁：可以插队</p><p>可打断、可超时：</p></li><li><p>Lock有适合不同场景的实现，如ReentrantLock，ReentrantReadWriteLock</p></li></ul><h3 id="性能层面" tabindex="-1"><a class="header-anchor" href="#性能层面" aria-hidden="true">#</a> 性能层面</h3><ul><li>在没有竞争时，synchronized做了很多优化，如偏向锁、轻量级锁，性能不错</li><li>在竞争激烈时，Lock的实现通常提供更好的性能</li></ul><p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/截屏2023-02-02 22.29.51.png" alt="截屏2023-02-02 22.29.51" loading="lazy"></p>',9),r=[l];function h(o,d){return i(),e("div",null,r)}const s=a(c,[["render",h],["__file","对比.html.vue"]]);export{s as default};
