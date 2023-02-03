const e=JSON.parse(`{"key":"v-7f0bc75b","path":"/se/lang/java/JUC/safe/","title":"线程安全","lang":"en-US","frontmatter":{"description":"线程安全 三要素： 可见性，一个线程对共享变量修改，另一个线程能看到最新的结果 有序性，一个线程内代码按编写顺序执行（多线程下不能） 原子性，一个线程内多行代码以一个整体运行，期间不难有其他线程的代码插队 volatile能够保证共享变量的可见性与有序性，但是并不难保证原子性 volatile关键字可以禁止指令进行重排序优化","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/se/lang/java/JUC/safe/"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"线程安全"}],["meta",{"property":"og:description","content":"线程安全 三要素： 可见性，一个线程对共享变量修改，另一个线程能看到最新的结果 有序性，一个线程内代码按编写顺序执行（多线程下不能） 原子性，一个线程内多行代码以一个整体运行，期间不难有其他线程的代码插队 volatile能够保证共享变量的可见性与有序性，但是并不难保证原子性 volatile关键字可以禁止指令进行重排序优化"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-02-03T07:46:32.000Z"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2023-02-03T07:46:32.000Z"}],["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://davidliuk.github.io/blog/blog/zh/se/lang/java/JUC/safe/"}]]},"headers":[],"git":{"createdTime":1675410392000,"updatedTime":1675410392000,"contributors":[{"name":"刘大维","email":"davidliu@liudaweideMacBook-Pro.local","commits":1}]},"readingTime":{"minutes":0.45,"words":134},"localizedDate":"February 3, 2023","filePathRelative":"se/lang/java/JUC/safe/README.md","excerpt":"<h1> 线程安全</h1>\\n<p>三要素：</p>\\n<ul>\\n<li>可见性，一个线程对共享变量修改，另一个线程能看到最新的结果</li>\\n<li>有序性，一个线程内代码按编写顺序执行（多线程下不能）</li>\\n<li>原子性，一个线程内多行代码以一个整体运行，期间不难有其他线程的代码插队</li>\\n</ul>\\n<p>volatile能够保证共享变量的可见性与有序性，但是并不难保证原子性</p>\\n<p>volatile关键字可以禁止指令进行重排序优化</p>\\n","autoDesc":true}`);export{e as data};
