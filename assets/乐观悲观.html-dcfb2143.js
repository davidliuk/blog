const e=JSON.parse(`{"key":"v-43791da4","path":"/se/lang/java/JUC/lock/%E4%B9%90%E8%A7%82%E6%82%B2%E8%A7%82.html","title":"乐观锁与悲观锁","lang":"en-US","frontmatter":{"description":"乐观锁与悲观锁 悲观锁：每次操作前都加锁 乐观锁：版本号机制 悲观锁 代表：synchronized和Lock 核心是：线程占有了锁，才能去操作共享变量，每次只有一个线程占锁成功，获取锁失败的线程，都得停下来等待 线程从运行到阻塞，再从阻塞到唤醒，涉及线程上下文切换，如果频繁发生，影响性能 实际上，线程在获取synchronized和Lock锁时，如果锁已被占用，都会做几次重试操作，减少阻塞的机会 乐观锁 代表：AtomicInteger，使用cas（Unsafe）来保证原子性","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/se/lang/java/JUC/lock/%E4%B9%90%E8%A7%82%E6%82%B2%E8%A7%82.html"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"乐观锁与悲观锁"}],["meta",{"property":"og:description","content":"乐观锁与悲观锁 悲观锁：每次操作前都加锁 乐观锁：版本号机制 悲观锁 代表：synchronized和Lock 核心是：线程占有了锁，才能去操作共享变量，每次只有一个线程占锁成功，获取锁失败的线程，都得停下来等待 线程从运行到阻塞，再从阻塞到唤醒，涉及线程上下文切换，如果频繁发生，影响性能 实际上，线程在获取synchronized和Lock锁时，如果锁已被占用，都会做几次重试操作，减少阻塞的机会 乐观锁 代表：AtomicInteger，使用cas（Unsafe）来保证原子性"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-02-27T13:30:02.000Z"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2023-02-27T13:30:02.000Z"}],["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://davidliuk.github.io/blog/blog/zh/se/lang/java/JUC/lock/%E4%B9%90%E8%A7%82%E6%82%B2%E8%A7%82.html"}]]},"headers":[{"level":3,"title":"悲观锁","slug":"悲观锁","link":"#悲观锁","children":[]},{"level":3,"title":"乐观锁","slug":"乐观锁","link":"#乐观锁","children":[]}],"git":{"createdTime":1677504602000,"updatedTime":1677504602000,"contributors":[{"name":"刘大维","email":"davidliu@liudaweideMacBook-Pro.local","commits":1}]},"readingTime":{"minutes":0.85,"words":254},"localizedDate":"February 27, 2023","filePathRelative":"se/lang/java/JUC/lock/乐观悲观.md","excerpt":"<h1> 乐观锁与悲观锁</h1>\\n<p>悲观锁：每次操作前都加锁</p>\\n<p>乐观锁：版本号机制</p>\\n<h3> 悲观锁</h3>\\n<p>代表：synchronized和Lock</p>\\n<ul>\\n<li>核心是：线程占有了锁，才能去操作共享变量，每次只有一个线程占锁成功，获取锁失败的线程，都得停下来等待</li>\\n<li>线程从运行到阻塞，再从阻塞到唤醒，涉及线程上下文切换，如果频繁发生，影响性能</li>\\n<li>实际上，线程在获取synchronized和Lock锁时，如果锁已被占用，都会做几次重试操作，减少阻塞的机会</li>\\n</ul>\\n<h3> 乐观锁</h3>\\n<p>代表：AtomicInteger，使用cas（Unsafe）来保证原子性</p>","autoDesc":true}`);export{e as data};
