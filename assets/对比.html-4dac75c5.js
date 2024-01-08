const e=JSON.parse(`{"key":"v-5517b052","path":"/se/lang/java/JUC/lock/%E5%AF%B9%E6%AF%94.html","title":"锁的对比","lang":"en-US","frontmatter":{"description":"锁的对比 乐观锁 vs 悲观锁 悲观锁：每次操作前都加锁 乐观锁：CAS 或版本号机制 一般来说，MySQL 中的行锁、表锁中，行锁会发生死锁，表锁不会 悲观锁通常多用于写比较多的情况下（多写场景），避免频繁失败和重试影响性能。 乐观锁通常多于写比较少的情况下（多读场景），避免频繁加锁影响性能，大大提升了系统的吞吐量。 Lock vs sychronized 语法层面 synchronized 是关键字，源码在 jvm 中，用 c++实现 Lock 是接口，源码由 jdk 提供，用 java 语言实现 使用 synchronized 时，退出同步代码块锁会自动释放，而使用 Lock 时，需要手动调用 unlock 方法释放锁","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/se/lang/java/JUC/lock/%E5%AF%B9%E6%AF%94.html"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"锁的对比"}],["meta",{"property":"og:description","content":"锁的对比 乐观锁 vs 悲观锁 悲观锁：每次操作前都加锁 乐观锁：CAS 或版本号机制 一般来说，MySQL 中的行锁、表锁中，行锁会发生死锁，表锁不会 悲观锁通常多用于写比较多的情况下（多写场景），避免频繁失败和重试影响性能。 乐观锁通常多于写比较少的情况下（多读场景），避免频繁加锁影响性能，大大提升了系统的吞吐量。 Lock vs sychronized 语法层面 synchronized 是关键字，源码在 jvm 中，用 c++实现 Lock 是接口，源码由 jdk 提供，用 java 语言实现 使用 synchronized 时，退出同步代码块锁会自动释放，而使用 Lock 时，需要手动调用 unlock 方法释放锁"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-05-17T10:10:52.000Z"}],["meta",{"property":"article:author","content":"David Liu"}],["meta",{"property":"article:modified_time","content":"2023-05-17T10:10:52.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"锁的对比\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-05-17T10:10:52.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[{"level":2,"title":"乐观锁 vs 悲观锁","slug":"乐观锁-vs-悲观锁","link":"#乐观锁-vs-悲观锁","children":[]},{"level":2,"title":"Lock vs sychronized","slug":"lock-vs-sychronized","link":"#lock-vs-sychronized","children":[{"level":3,"title":"语法层面","slug":"语法层面","link":"#语法层面","children":[]},{"level":3,"title":"功能层面","slug":"功能层面","link":"#功能层面","children":[]},{"level":3,"title":"性能层面","slug":"性能层面","link":"#性能层面","children":[]}]}],"git":{"createdTime":1675410392000,"updatedTime":1684318252000,"contributors":[{"name":"davidliuk","email":"l729641074@163.com","commits":2},{"name":"刘大维","email":"davidliu@liudaweideMacBook-Pro.local","commits":2}]},"readingTime":{"minutes":2.84,"words":851},"filePathRelative":"se/lang/java/JUC/lock/对比.md","localizedDate":"February 3, 2023","excerpt":"<h1> 锁的对比</h1>\\n<h2> 乐观锁 vs 悲观锁</h2>\\n<p>悲观锁：每次操作前都加锁</p>\\n<p>乐观锁：CAS 或版本号机制</p>\\n<p>一般来说，MySQL 中的行锁、表锁中，行锁会发生死锁，表锁不会</p>\\n<p><strong>悲观锁通常多用于写比较多的情况下（多写场景），避免频繁失败和重试影响性能。</strong></p>\\n<p><strong>乐观锁通常多于写比较少的情况下（多读场景），避免频繁加锁影响性能，大大提升了系统的吞吐量。</strong></p>\\n<h2> Lock vs sychronized</h2>\\n<h3> 语法层面</h3>\\n<ul>\\n<li>synchronized 是关键字，源码在 jvm 中，用 c++实现</li>\\n<li>Lock 是接口，源码由 jdk 提供，用 java 语言实现</li>\\n<li>使用 synchronized 时，退出同步代码块锁会自动释放，而使用 Lock 时，需要手动调用 unlock 方法释放锁</li>\\n</ul>","autoDesc":true}`);export{e as data};
