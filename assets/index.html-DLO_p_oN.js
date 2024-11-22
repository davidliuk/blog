import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as o,d as t,o as c}from"./app-C8HRrJwL.js";const i={};function a(l,e){return c(),o("div",null,e[0]||(e[0]=[t('<h1 id="锁" tabindex="-1"><a class="header-anchor" href="#锁"><span>锁</span></a></h1><p>分类的角度很多</p><ul><li>乐观锁/悲观锁</li><li>共享锁/独占锁</li><li>可重入锁/不可重入锁</li></ul><h2 id="乐观锁-vs-悲观锁" tabindex="-1"><a class="header-anchor" href="#乐观锁-vs-悲观锁"><span>乐观锁 vs 悲观锁</span></a></h2><p>悲观锁：每次操作前都加锁</p><p>乐观锁：CAS 或版本号机制</p><p>一般来说，MySQL 中的行锁、表锁中，行锁会发生死锁，表锁不会</p><p><strong>悲观锁通常用于多写场景，避免频繁失败和重试影响性能。</strong></p><p><strong>乐观锁通常用于多读场景，避免频繁加锁影响性能，大大提升了系统的吞吐量。</strong></p><h2 id="lock-vs-sychronized" tabindex="-1"><a class="header-anchor" href="#lock-vs-sychronized"><span>Lock vs sychronized</span></a></h2><h3 id="语法层面" tabindex="-1"><a class="header-anchor" href="#语法层面"><span>语法层面</span></a></h3><ul><li>synchronized 是关键字，源码在 jvm 中，用 c++实现</li><li>Lock 是接口，源码由 jdk 提供，用 java 语言实现</li><li>使用 synchronized 时，退出同步代码块锁会自动释放，而使用 Lock 时，需要手动调用 unlock 方法释放锁</li></ul><h4 id="synchronized-依赖于-jvm-而-reentrantlock-依赖于-api" tabindex="-1"><a class="header-anchor" href="#synchronized-依赖于-jvm-而-reentrantlock-依赖于-api"><span>synchronized 依赖于 JVM 而 ReentrantLock 依赖于 API</span></a></h4><p><code>synchronized</code> 是依赖于 JVM 实现的，前面我们也讲到了 虚拟机团队在 JDK1.6 为 <code>synchronized</code> 关键字进行了很多优化，但是这些优化都是在虚拟机层面实现的，并没有直接暴露给我们。</p><p><code>ReentrantLock</code> 是 JDK 层面实现的（也就是 API 层面，需要 lock() 和 unlock() 方法配合 try/finally 语句块来完成），所以我们可以通过查看它的源代码，来看它是如何实现的。</p><h3 id="功能层面" tabindex="-1"><a class="header-anchor" href="#功能层面"><span>功能层面</span></a></h3><ul><li><p>二者均属于悲观锁，都具备基本的互斥、同步、锁重入功能</p><p>互斥：就是只有一个拿着锁</p><p>同步：</p><ul><li>synchronize：wait，notify</li><li>Lock：利用条件变量提供的：await，signal</li></ul><p>锁重入：是否可以对已经加上锁的对象加上第二道、第三道锁，到时候解锁也需要解多道</p></li><li><p>Lock 提供了许多 synchronized 不具备的功能，例如：</p><p>获取等待状态、公平锁、可打断、可超时、多条件变量</p><p>公平锁：先来先得（吞吐量不如非公平的高），非公平锁：可以插队</p><p>可打断、可超时：</p></li><li><p>Lock 有适合不同场景的实现，如 ReentrantLock，ReentrantReadWriteLock</p></li></ul><h4 id="reentrantlock-比-synchronized-增加了一些高级功能" tabindex="-1"><a class="header-anchor" href="#reentrantlock-比-synchronized-增加了一些高级功能"><span>ReentrantLock 比 synchronized 增加了一些高级功能</span></a></h4><p>相比<code>synchronized</code>，<code>ReentrantLock</code>增加了一些高级功能。主要来说主要有三点：</p><ul><li><p><strong>等待可中断</strong> : <code>ReentrantLock</code>提供了一种能够中断等待锁的线程的机制，通过 <code>lock.lockInterruptibly()</code> 来实现这个机制。也就是说正在等待的线程可以选择放弃等待，改为处理其他事情。</p></li><li><p><strong>可实现公平锁</strong> : <code>ReentrantLock</code>可以指定是公平锁还是非公平锁。而<code>synchronized</code>只能是非公平锁。所谓的公平锁就是先等待的线程先获得锁。<code>ReentrantLock</code>默认情况是非公平的，可以通过 <code>ReentrantLock</code>类的<code>ReentrantLock(boolean fair)</code>构造方法来制定是否是公平的。</p></li><li><p><strong>可实现选择性通知（锁可以绑定多个条件）</strong>: <code>synchronized</code>关键字与<code>wait()</code>和<code>notify()</code>/<code>notifyAll()</code>方法相结合可以实现等待/通知机制。<code>ReentrantLock</code>类当然也可以实现，但是需要借助于<code>Condition</code>接口与<code>newCondition()</code>方法。</p><p>典型如：阻塞队列 ArrayBlockingQueue 的 take 和 put 用的 notEmpty 和 notFull Condition 队列</p></li></ul><p>如果你想使用上述功能，那么选择 <code>ReentrantLock</code> 是一个不错的选择。</p><h3 id="性能层面" tabindex="-1"><a class="header-anchor" href="#性能层面"><span>性能层面</span></a></h3><ul><li>在没有竞争时，synchronized 做了很多优化，如偏向锁、轻量级锁，性能不错</li><li>在竞争激烈时，Lock 的实现通常提供更好的性能</li></ul>',23)]))}const s=n(i,[["render",a],["__file","index.html.vue"]]),p=JSON.parse(`{"path":"/se/lang/java/JUC/sync/lock/","title":"锁","lang":"en-US","frontmatter":{"description":"锁 分类的角度很多 乐观锁/悲观锁 共享锁/独占锁 可重入锁/不可重入锁 乐观锁 vs 悲观锁 悲观锁：每次操作前都加锁 乐观锁：CAS 或版本号机制 一般来说，MySQL 中的行锁、表锁中，行锁会发生死锁，表锁不会 悲观锁通常用于多写场景，避免频繁失败和重试影响性能。 乐观锁通常用于多读场景，避免频繁加锁影响性能，大大提升了系统的吞吐量。 Lock ...","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/se/lang/java/JUC/sync/lock/"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"锁"}],["meta",{"property":"og:description","content":"锁 分类的角度很多 乐观锁/悲观锁 共享锁/独占锁 可重入锁/不可重入锁 乐观锁 vs 悲观锁 悲观锁：每次操作前都加锁 乐观锁：CAS 或版本号机制 一般来说，MySQL 中的行锁、表锁中，行锁会发生死锁，表锁不会 悲观锁通常用于多写场景，避免频繁失败和重试影响性能。 乐观锁通常用于多读场景，避免频繁加锁影响性能，大大提升了系统的吞吐量。 Lock ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-05-08T07:35:02.000Z"}],["meta",{"property":"article:modified_time","content":"2024-05-08T07:35:02.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"锁\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-05-08T07:35:02.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[{"level":2,"title":"乐观锁 vs 悲观锁","slug":"乐观锁-vs-悲观锁","link":"#乐观锁-vs-悲观锁","children":[]},{"level":2,"title":"Lock vs sychronized","slug":"lock-vs-sychronized","link":"#lock-vs-sychronized","children":[{"level":3,"title":"语法层面","slug":"语法层面","link":"#语法层面","children":[]},{"level":3,"title":"功能层面","slug":"功能层面","link":"#功能层面","children":[]},{"level":3,"title":"性能层面","slug":"性能层面","link":"#性能层面","children":[]}]}],"git":{"createdTime":1675410392000,"updatedTime":1715153702000,"contributors":[{"name":"刘大维","email":"davidliu@liudaweideMacBook-Pro.local","commits":1}]},"readingTime":{"minutes":2.81,"words":842},"filePathRelative":"se/lang/java/JUC/sync/lock/README.md","localizedDate":"February 3, 2023","excerpt":"\\n<p>分类的角度很多</p>\\n<ul>\\n<li>乐观锁/悲观锁</li>\\n<li>共享锁/独占锁</li>\\n<li>可重入锁/不可重入锁</li>\\n</ul>\\n<h2>乐观锁 vs 悲观锁</h2>\\n<p>悲观锁：每次操作前都加锁</p>\\n<p>乐观锁：CAS 或版本号机制</p>\\n<p>一般来说，MySQL 中的行锁、表锁中，行锁会发生死锁，表锁不会</p>\\n<p><strong>悲观锁通常用于多写场景，避免频繁失败和重试影响性能。</strong></p>\\n<p><strong>乐观锁通常用于多读场景，避免频繁加锁影响性能，大大提升了系统的吞吐量。</strong></p>\\n<h2>Lock vs sychronized</h2>","autoDesc":true}`);export{s as comp,p as data};
