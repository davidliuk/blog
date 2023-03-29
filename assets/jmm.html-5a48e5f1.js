const e=JSON.parse(`{"key":"v-70a587ea","path":"/se/lang/java/JUC/safe/jmm.html","title":"JMM","lang":"en-US","frontmatter":{"description":"JMM JMM(Java内存模型)主要定义了对于一个共享变量，当另一个线程对这个共享变量执行写操作后，这个线程对这个共享变量的可见性。 JMM 是如何抽象线程和主内存之间的关系？ Java 内存模型（JMM） 抽象了线程和主内存之间的关系，就比如说线程之间的共享变量必须存储在主内存中。 在 JDK1.2 之前，Java 的内存模型实现总是从 主存 （即共享内存）读取变量，是不需要进行特别的注意的。而在当前的 Java 内存模型下，线程可以把变量保存 本地内存 （比如机器的寄存器）中，而不是直接在主存中进行读写。这就可能造成一个线程在主存中修改了一个变量的值，而另外一个线程还继续使用它在寄存器中的变量值的拷贝，造成数据的不一致。","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/se/lang/java/JUC/safe/jmm.html"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"JMM"}],["meta",{"property":"og:description","content":"JMM JMM(Java内存模型)主要定义了对于一个共享变量，当另一个线程对这个共享变量执行写操作后，这个线程对这个共享变量的可见性。 JMM 是如何抽象线程和主内存之间的关系？ Java 内存模型（JMM） 抽象了线程和主内存之间的关系，就比如说线程之间的共享变量必须存储在主内存中。 在 JDK1.2 之前，Java 的内存模型实现总是从 主存 （即共享内存）读取变量，是不需要进行特别的注意的。而在当前的 Java 内存模型下，线程可以把变量保存 本地内存 （比如机器的寄存器）中，而不是直接在主存中进行读写。这就可能造成一个线程在主存中修改了一个变量的值，而另外一个线程还继续使用它在寄存器中的变量值的拷贝，造成数据的不一致。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-03-29T11:46:59.000Z"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2023-03-29T11:46:59.000Z"}],["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://davidliuk.github.io/blog/blog/zh/se/lang/java/JUC/safe/jmm.html"}]]},"headers":[{"level":3,"title":"JMM 是如何抽象线程和主内存之间的关系？","slug":"jmm-是如何抽象线程和主内存之间的关系","link":"#jmm-是如何抽象线程和主内存之间的关系","children":[]},{"level":2,"title":"指令重排序","slug":"指令重排序","link":"#指令重排序","children":[]},{"level":2,"title":"happens-before","slug":"happens-before","link":"#happens-before","children":[{"level":3,"title":"happens-before 常见规则种类","slug":"happens-before-常见规则种类","link":"#happens-before-常见规则种类","children":[]}]}],"git":{"createdTime":1680090419000,"updatedTime":1680090419000,"contributors":[{"name":"davidliuk","email":"l729641074@163.com","commits":1}]},"readingTime":{"minutes":4.97,"words":1491},"localizedDate":"March 29, 2023","filePathRelative":"se/lang/java/JUC/safe/jmm.md","excerpt":"<h1> JMM</h1>\\n<p>JMM(Java内存模型)主要定义了对于一个共享变量，当另一个线程对这个共享变量执行写操作后，这个线程对这个共享变量的可见性。</p>\\n<h3> JMM 是如何抽象线程和主内存之间的关系？</h3>\\n<p><strong>Java 内存模型（JMM）</strong> 抽象了线程和主内存之间的关系，就比如说线程之间的共享变量必须存储在主内存中。</p>\\n<p>在 JDK1.2 之前，Java 的内存模型实现总是从 <strong>主存</strong> （即共享内存）读取变量，是不需要进行特别的注意的。而在当前的 Java 内存模型下，线程可以把变量保存 <strong>本地内存</strong> （比如机器的寄存器）中，而不是直接在主存中进行读写。这就可能造成一个线程在主存中修改了一个变量的值，而另外一个线程还继续使用它在寄存器中的变量值的拷贝，造成数据的不一致。</p>","autoDesc":true}`);export{e as data};
