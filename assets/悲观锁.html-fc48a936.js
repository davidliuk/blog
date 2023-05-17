const e=JSON.parse(`{"key":"v-845e9762","path":"/se/lang/java/JUC/lock/%E6%82%B2%E8%A7%82%E9%94%81.html","title":"悲观锁","lang":"en-US","frontmatter":{"description":"悲观锁 代表：synchronized 和 Lock 核心是：线程占有了锁，才能去操作共享变量，每次只有一个线程占锁成功，获取锁失败的线程，都得停下来等待 线程从运行到阻塞，再从阻塞到唤醒，涉及线程上下文切换，如果频繁发生，影响性能 实际上，线程在获取 synchronized 和 Lock 锁时，如果锁已被占用，都会做几次重试操作，减少阻塞的机会 synchronized 是可重入锁。 synchronized 是 Java 中的一个关键字，翻译成中文是同步的意思，主要解决的是多个线程之间访问资源的同步性，可以保证被它修饰的方法或者代码块在任意时刻只能有一个线程执行。","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/se/lang/java/JUC/lock/%E6%82%B2%E8%A7%82%E9%94%81.html"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"悲观锁"}],["meta",{"property":"og:description","content":"悲观锁 代表：synchronized 和 Lock 核心是：线程占有了锁，才能去操作共享变量，每次只有一个线程占锁成功，获取锁失败的线程，都得停下来等待 线程从运行到阻塞，再从阻塞到唤醒，涉及线程上下文切换，如果频繁发生，影响性能 实际上，线程在获取 synchronized 和 Lock 锁时，如果锁已被占用，都会做几次重试操作，减少阻塞的机会 synchronized 是可重入锁。 synchronized 是 Java 中的一个关键字，翻译成中文是同步的意思，主要解决的是多个线程之间访问资源的同步性，可以保证被它修饰的方法或者代码块在任意时刻只能有一个线程执行。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-05-17T10:10:52.000Z"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2023-05-17T10:10:52.000Z"}],["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://davidliuk.github.io/blog/blog/zh/se/lang/java/JUC/lock/%E6%82%B2%E8%A7%82%E9%94%81.html"}]]},"headers":[{"level":2,"title":"synchronized","slug":"synchronized","link":"#synchronized","children":[{"level":3,"title":"底层原理","slug":"底层原理","link":"#底层原理","children":[]},{"level":3,"title":"锁升级","slug":"锁升级","link":"#锁升级","children":[]},{"level":3,"title":"锁消除","slug":"锁消除","link":"#锁消除","children":[]},{"level":3,"title":"锁粗化","slug":"锁粗化","link":"#锁粗化","children":[]}]},{"level":2,"title":"ReentrantLock","slug":"reentrantlock","link":"#reentrantlock","children":[{"level":3,"title":"公平锁和非公平锁有什么区别？","slug":"公平锁和非公平锁有什么区别","link":"#公平锁和非公平锁有什么区别","children":[]}]},{"level":2,"title":"ReentrantReadWriteLock","slug":"reentrantreadwritelock","link":"#reentrantreadwritelock","children":[{"level":3,"title":"读锁、写锁","slug":"读锁、写锁","link":"#读锁、写锁","children":[]},{"level":3,"title":"线程持有读锁还能获取写锁吗？","slug":"线程持有读锁还能获取写锁吗","link":"#线程持有读锁还能获取写锁吗","children":[]},{"level":3,"title":"锁降级","slug":"锁降级","link":"#锁降级","children":[]},{"level":3,"title":"读锁为什么不能升级为写锁？","slug":"读锁为什么不能升级为写锁","link":"#读锁为什么不能升级为写锁","children":[]}]}],"git":{"createdTime":1684318252000,"updatedTime":1684318252000,"contributors":[{"name":"刘大维","email":"davidliu@liudaweideMacBook-Pro.local","commits":1}]},"readingTime":{"minutes":12.37,"words":3710},"localizedDate":"May 17, 2023","filePathRelative":"se/lang/java/JUC/lock/悲观锁.md","excerpt":"<h1> 悲观锁</h1>\\n<p>代表：synchronized 和 Lock</p>\\n<ul>\\n<li>核心是：线程占有了锁，才能去操作共享变量，每次只有一个线程占锁成功，获取锁失败的线程，都得停下来等待</li>\\n<li>线程从运行到阻塞，再从阻塞到唤醒，涉及线程上下文切换，如果频繁发生，影响性能</li>\\n<li>实际上，线程在获取 synchronized 和 Lock 锁时，如果锁已被占用，都会做几次重试操作，减少阻塞的机会</li>\\n</ul>\\n<h2> synchronized</h2>\\n<p>是可重入锁。</p>\\n<p><code>synchronized</code> 是 Java 中的一个关键字，翻译成中文是同步的意思，主要解决的是多个线程之间访问资源的同步性，可以保证被它修饰的方法或者代码块在任意时刻只能有一个线程执行。</p>","autoDesc":true}`);export{e as data};
