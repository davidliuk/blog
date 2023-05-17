const e=JSON.parse(`{"key":"v-63a3cb8f","path":"/se/lang/java/jvm/%E5%86%85%E5%AD%98%E7%AE%A1%E7%90%86/%E5%9E%83%E5%9C%BE%E5%9B%9E%E6%94%B6%E7%AE%97%E6%B3%95.html","title":"垃圾回收算法","lang":"en-US","frontmatter":{"description":"垃圾回收算法 分代收集理论 弱分代假说(Weak Generational Hypothesis)：绝大多数对象都是朝生夕灭的。 强分代假说(Strong Generational Hypothesis)：熬过越多次垃圾收集过程的对象就越难以消亡。 跨代引用假说(Intergenerational Reference Hypothesis)：跨代引用相对于同代引用来说仅占极少数。 这两个分代假说共同奠定了多款常用的垃圾收集器的一致的设计原则:收集器应该将 Java 堆划分 出不同的区域，然后将回收对象依据其年龄(年龄即对象熬过垃圾收集过程的次数)分配到不同的区 域之中存储。显而易见，如果一个区域中大多数对象都是朝生夕灭，难以熬过垃圾收集过程的话，那 么把它们集中放在一起，每次回收时只关注如何保留少量存活而不是去标记那些大量将要被回收的对 象，就能以较低代价回收到大量的空间;如果剩下的都是难以消亡的对象，那把它们集中放在一块， 虚拟机便可以使用较低的频率来回收这个区域，这就同时兼顾了垃圾收集的时间开销和内存的空间有 效利用。","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/se/lang/java/jvm/%E5%86%85%E5%AD%98%E7%AE%A1%E7%90%86/%E5%9E%83%E5%9C%BE%E5%9B%9E%E6%94%B6%E7%AE%97%E6%B3%95.html"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"垃圾回收算法"}],["meta",{"property":"og:description","content":"垃圾回收算法 分代收集理论 弱分代假说(Weak Generational Hypothesis)：绝大多数对象都是朝生夕灭的。 强分代假说(Strong Generational Hypothesis)：熬过越多次垃圾收集过程的对象就越难以消亡。 跨代引用假说(Intergenerational Reference Hypothesis)：跨代引用相对于同代引用来说仅占极少数。 这两个分代假说共同奠定了多款常用的垃圾收集器的一致的设计原则:收集器应该将 Java 堆划分 出不同的区域，然后将回收对象依据其年龄(年龄即对象熬过垃圾收集过程的次数)分配到不同的区 域之中存储。显而易见，如果一个区域中大多数对象都是朝生夕灭，难以熬过垃圾收集过程的话，那 么把它们集中放在一起，每次回收时只关注如何保留少量存活而不是去标记那些大量将要被回收的对 象，就能以较低代价回收到大量的空间;如果剩下的都是难以消亡的对象，那把它们集中放在一块， 虚拟机便可以使用较低的频率来回收这个区域，这就同时兼顾了垃圾收集的时间开销和内存的空间有 效利用。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-05-17T10:10:52.000Z"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2023-05-17T10:10:52.000Z"}],["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://davidliuk.github.io/blog/blog/zh/se/lang/java/jvm/%E5%86%85%E5%AD%98%E7%AE%A1%E7%90%86/%E5%9E%83%E5%9C%BE%E5%9B%9E%E6%94%B6%E7%AE%97%E6%B3%95.html"}]]},"headers":[{"level":2,"title":"分代收集理论","slug":"分代收集理论","link":"#分代收集理论","children":[]},{"level":2,"title":"标记-清除 Mark-Sweep","slug":"标记-清除-mark-sweep","link":"#标记-清除-mark-sweep","children":[]},{"level":2,"title":"标记-复制 Mark-Copy","slug":"标记-复制-mark-copy","link":"#标记-复制-mark-copy","children":[{"level":3,"title":"“Appel 式回收”/分代","slug":"appel-式回收-分代","link":"#appel-式回收-分代","children":[]}]},{"level":2,"title":"标记-整理 Mark-Compact","slug":"标记-整理-mark-compact","link":"#标记-整理-mark-compact","children":[]},{"level":2,"title":"权衡","slug":"权衡","link":"#权衡","children":[]}],"git":{"createdTime":1684318252000,"updatedTime":1684318252000,"contributors":[{"name":"刘大维","email":"davidliu@liudaweideMacBook-Pro.local","commits":1}]},"readingTime":{"minutes":8.69,"words":2607},"localizedDate":"May 17, 2023","filePathRelative":"se/lang/java/jvm/内存管理/垃圾回收算法.md","excerpt":"<h1> 垃圾回收算法</h1>\\n<h2> 分代收集理论</h2>\\n<ol>\\n<li>弱分代假说(Weak Generational Hypothesis)：绝大多数对象都是朝生夕灭的。</li>\\n<li>强分代假说(Strong Generational Hypothesis)：熬过越多次垃圾收集过程的对象就越难以消亡。</li>\\n<li>跨代引用假说(Intergenerational Reference Hypothesis)：跨代引用相对于同代引用来说仅占极少数。</li>\\n</ol>\\n<p>这两个分代假说共同奠定了多款常用的垃圾收集器的一致的设计原则:收集器应该将 Java 堆划分 出不同的区域，然后将回收对象依据其年龄(年龄即对象熬过垃圾收集过程的次数)分配到不同的区 域之中存储。显而易见，如果一个区域中大多数对象都是朝生夕灭，难以熬过垃圾收集过程的话，那 么把它们集中放在一起，每次回收时只关注如何保留少量存活而不是去标记那些大量将要被回收的对 象，就能以较低代价回收到大量的空间;如果剩下的都是难以消亡的对象，那把它们集中放在一块， 虚拟机便可以使用较低的频率来回收这个区域，这就同时兼顾了垃圾收集的时间开销和内存的空间有 效利用。</p>","autoDesc":true}`);export{e as data};
