const e=JSON.parse(`{"key":"v-f558f19a","path":"/se/lang/java/JUC/safe/threadlocal.html","title":"ThreadLocal","lang":"en-US","frontmatter":{"description":"ThreadLocal 解决线程安全问题的另一种思路，之前是共享资源加锁或 CAS 重试，现在是线程隔离各用各的。 作用： 实现资源对象的线程隔离，让每个线程各用各的资源对象，避免争用引发的线程安全问题 实现了线程内的资源共享 局部变量，可以线程隔离，但是不能跨方法 Thread类有一个类型为ThreadLocal.ThreadLocalMap的实例变量threadLocals，也就是说每个线程有一个自己的ThreadLocalMap。","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/se/lang/java/JUC/safe/threadlocal.html"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"ThreadLocal"}],["meta",{"property":"og:description","content":"ThreadLocal 解决线程安全问题的另一种思路，之前是共享资源加锁或 CAS 重试，现在是线程隔离各用各的。 作用： 实现资源对象的线程隔离，让每个线程各用各的资源对象，避免争用引发的线程安全问题 实现了线程内的资源共享 局部变量，可以线程隔离，但是不能跨方法 Thread类有一个类型为ThreadLocal.ThreadLocalMap的实例变量threadLocals，也就是说每个线程有一个自己的ThreadLocalMap。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-04-11T10:23:43.000Z"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2023-04-11T10:23:43.000Z"}],["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://davidliuk.github.io/blog/blog/zh/se/lang/java/JUC/safe/threadlocal.html"}]]},"headers":[],"git":{"createdTime":1677504602000,"updatedTime":1681208623000,"contributors":[{"name":"davidliuk","email":"l729641074@163.com","commits":2},{"name":"刘大维","email":"davidliu@liudaweideMacBook-Pro.local","commits":2}]},"readingTime":{"minutes":2.1,"words":629},"localizedDate":"February 27, 2023","filePathRelative":"se/lang/java/JUC/safe/threadlocal.md","excerpt":"<h1> ThreadLocal</h1>\\n<p>解决线程安全问题的另一种思路，之前是共享资源加锁或 CAS 重试，现在是线程隔离各用各的。</p>\\n<p>作用：</p>\\n<ul>\\n<li>实现资源对象的线程隔离，让每个线程各用各的资源对象，避免争用引发的线程安全问题</li>\\n<li>实现了线程内的资源共享</li>\\n</ul>\\n<p>局部变量，可以线程隔离，但是不能跨方法</p>\\n<p><code>Thread</code>类有一个类型为<code>ThreadLocal.ThreadLocalMap</code>的实例变量<code>threadLocals</code>，也就是说每个线程有一个自己的<code>ThreadLocalMap</code>。</p>","autoDesc":true}`);export{e as data};