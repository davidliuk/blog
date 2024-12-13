import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as i,d as t,o as l}from"./app-DIqbhby7.js";const o={};function n(r,e){return l(),i("div",null,e[0]||(e[0]=[t('<h1 id="对象死亡判定" tabindex="-1"><a class="header-anchor" href="#对象死亡判定"><span>对象死亡判定</span></a></h1><h2 id="引用计数" tabindex="-1"><a class="header-anchor" href="#引用计数"><span>引用计数</span></a></h2><p>优点：</p><ul><li>原理简单，判定效率也很高，在大多数情况下它都是一个不错的算法。</li></ul><p>缺点：</p><ul><li>占用了一些额外的内存空间来进行计数</li><li>难以解决循环引用的问题；它们因为互相引用着对方，导致它们的引用计数都不为零，引用计数算法也 就无法回收它们。</li></ul><h2 id="可达性分析" tabindex="-1"><a class="header-anchor" href="#可达性分析"><span>可达性分析</span></a></h2><p>这个算法的基本思路就是通过 一系列称为“GC Roots”的根对象作为起始节点集，从这些节点开始，根据引用关系向下搜索，搜索过 程所走过的路径称为“引用链”(Reference Chain)，如果某个对象到 GC Roots 间没有任何引用链相连， 或者用图论的话来说就是从 GC Roots 到这个对象不可达时，则证明此对象是不可能再被使用的。</p><h3 id="gc-roots-的选择" tabindex="-1"><a class="header-anchor" href="#gc-roots-的选择"><span>GC Roots 的选择</span></a></h3><ul><li>在虚拟机<strong>栈</strong>(栈帧中的本地变量表)中引用的对象，譬如各个线程被调用的方法堆栈中使用到的 参数、局部变量、临时变量等。</li><li>在方法区中类<strong>静态属性</strong>引用的对象，譬如 Java 类的引用类型静态变量。</li><li>在方法区中<strong>常量</strong>引用的对象，譬如字符串常量池(String Table)里的引用。</li><li>在本地方法栈中 JNI(即通常所说的 Native 方法)引用的对象。</li><li>Java <strong>虚拟机内部的引用</strong>，如基本数据类型对应的 Class 对象，一些常驻的异常对象(比如 NullPointExcepiton、OutOfMemoryError)等，还有系统类加载器。</li><li>所有被<strong>同步锁</strong>(synchronized 关键字)持有的对象。</li><li>反映 Java 虚拟机内部情况的 JM XBean、JVM TI 中注册的回调、本地代码缓存等。</li></ul><p>除了这些固定的 GC Roots 集合以外，根据用户所选用的垃圾收集器以及当前回收的内存区域不同，还可以有其他对象“临时性”地加入，共同构成完整 GC Roots 集合。譬如后文将会提到的分代收集和局部回收(Partial GC)，如果只针对 Java 堆中某一块区域发起垃圾收集时(如最典型的只针对新生代的垃圾收集)，必须考虑到内存区域是虚拟机自己的实现细节(在用户视角里任何内存区域都是不可见的)，更不是孤立封闭的，所以某个区域里的对象完全有可能被位于堆中其他区域的对象所引用，这时候就需要将这些关联区域的对象也一并加入 GC Roots 集合中去，才能保证可达性分析的正确性。</p><p>方法区的垃圾收集主要回收两部分内容：废弃的常量和不再使用的类型。回收废弃常量与回收 Java 堆中的对象非常类似。举个常量池中字面量回收的例子，假如一个字符串“ java”曾经进入常量池中，但是当前系统又没有任何一个字符串对象的值是“ java”，换句话说，已经没有任何字符串对象引用 常量池中的“ java”常量，且虚拟机中也没有其他地方引用这个字面量。如果在这时发生内存回收，而且 垃圾收集器判断确有必要的话，这个“ java”常量就将会被系统清理出常量池。常量池中其他类(接口)、方法、字段的符号引用也与此类似。</p><h3 id="生存还是死亡" tabindex="-1"><a class="header-anchor" href="#生存还是死亡"><span>生存还是死亡</span></a></h3><p>即使在可达性分析算法中判定为不可达的对象，也不是“非死不可”的，这时候它们暂时还处于“缓刑”阶段，要真正宣告一个对象死亡，至少要经历两次标记过程：如果对象在进行可达性分析后发现没有与 GC Roots 相连接的引用链，那它将会被第一次标记，随后进行一次筛选，筛选的条件是此对象是否有必要执行 <code>finalize()</code>方法。假如对象没有覆盖 <code>finalize()</code>方法，或者 <code>finalize()</code>方法已经被虚拟机调用过，那么虚拟机将这两种情况都视为“没有必要执行”。</p><p>如果这个对象被判定为确有必要执行 <code>finalize()</code>方法，那么该对象将会被放置在一个名为 F-Queue 的 队列之中，并在稍后由一条由虚拟机自动建立的、低调度优先级的 finalizer 线程去执行它们的 <code>finalize()</code> 方法。这里所说的“执行”是指虚拟机会触发这个方法开始运行，但并不承诺一定会等待它运行结束。 这样做的原因是，如果某个对象的 <code>finalize()</code>方法执行缓慢，或者更极端地发生了死循环，将很可能导致 F-Queue 队列中的其他对象永久处于等待，甚至导致整个内存回收子系统的崩溃。<code>finalize()</code>方法是对象逃脱死亡命运的最后一次机会，稍后收集器将对 F-Queue 中的对象进行第二次小规模的标记，如果对象要在 <code>finalize()</code>中成功拯救自己——只要重新与引用链上的任何一个对象建立关联即可，譬如把自己 (this 关键字)赋值给某个类变量或者对象的成员变量，那在第二次标记时它将被移出“即将回收”的集合；如果对象这时候还没有逃脱，那基本上它就真的要被回收了。从代码清单 3-2 中我们可以看到一个对象的 <code>finalize()</code>被执行，但是它仍然可以存活。</p><h2 id="回收方法区" tabindex="-1"><a class="header-anchor" href="#回收方法区"><span>回收方法区</span></a></h2><p>方法区的垃圾收集主要回收两部分内容：</p><ol><li>废弃的常量</li><li>不再使用的类型</li></ol><h3 id="废弃常量" tabindex="-1"><a class="header-anchor" href="#废弃常量"><span>废弃常量</span></a></h3><p>回收废弃常量与回收 Java 堆中的对象非常类似。举个常量池中字面量回收的例子，假如一个字符串“ java”曾经进入常量池中，但是当前系统又没有任何一个字符串对象的值是“ java”，换句话说，已经没有任何字符串对象引用常量池中的“ java”常量，且虚拟机中也没有其他地方引用这个字面量。如果在这时发生内存回收，而且垃圾收集器判断确有必要的话，这个“ java”常量就将会被系统清理出常量池。常量池中其他类(接口)、方法、字段的符号引用也与此类似。</p><h3 id="不再使用的类型" tabindex="-1"><a class="header-anchor" href="#不再使用的类型"><span>不再使用的类型</span></a></h3><p>判定一个类型是否属于“不再被使用的类”的条件就比较苛刻了。需要同时满足下面三个条件:</p><ul><li>该类所有的实例都已经被回收，也就是 Java 堆中不存在该类及其任何派生子类的实例。</li><li>加载该类的类加载器已经被回收，这个条件除非是经过精心设计的可替换类加载器的场景，如 OSGi、JSP 的重加载等，否则通常是很难达成的。</li><li>该类对应的 java.lang.Class 对象没有在任何地方被引用，无法在任何地方通过反射访问该类的方法。</li></ul>',23)]))}const d=a(o,[["render",n],["__file","对象死亡判定.html.vue"]]),p=JSON.parse(`{"path":"/se/lang/java/jvm/%E5%86%85%E5%AD%98%E7%AE%A1%E7%90%86/%E5%9E%83%E5%9C%BE%E5%9B%9E%E6%94%B6/%E5%AF%B9%E8%B1%A1%E6%AD%BB%E4%BA%A1%E5%88%A4%E5%AE%9A.html","title":"对象死亡判定","lang":"en-US","frontmatter":{"description":"对象死亡判定 引用计数 优点： 原理简单，判定效率也很高，在大多数情况下它都是一个不错的算法。 缺点： 占用了一些额外的内存空间来进行计数 难以解决循环引用的问题；它们因为互相引用着对方，导致它们的引用计数都不为零，引用计数算法也 就无法回收它们。 可达性分析 这个算法的基本思路就是通过 一系列称为“GC Roots”的根对象作为起始节点集，从这些节点...","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/se/lang/java/jvm/%E5%86%85%E5%AD%98%E7%AE%A1%E7%90%86/%E5%9E%83%E5%9C%BE%E5%9B%9E%E6%94%B6/%E5%AF%B9%E8%B1%A1%E6%AD%BB%E4%BA%A1%E5%88%A4%E5%AE%9A.html"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"对象死亡判定"}],["meta",{"property":"og:description","content":"对象死亡判定 引用计数 优点： 原理简单，判定效率也很高，在大多数情况下它都是一个不错的算法。 缺点： 占用了一些额外的内存空间来进行计数 难以解决循环引用的问题；它们因为互相引用着对方，导致它们的引用计数都不为零，引用计数算法也 就无法回收它们。 可达性分析 这个算法的基本思路就是通过 一系列称为“GC Roots”的根对象作为起始节点集，从这些节点..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-01-08T03:06:14.000Z"}],["meta",{"property":"article:modified_time","content":"2024-01-08T03:06:14.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"对象死亡判定\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-01-08T03:06:14.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[{"level":2,"title":"引用计数","slug":"引用计数","link":"#引用计数","children":[]},{"level":2,"title":"可达性分析","slug":"可达性分析","link":"#可达性分析","children":[{"level":3,"title":"GC Roots 的选择","slug":"gc-roots-的选择","link":"#gc-roots-的选择","children":[]},{"level":3,"title":"生存还是死亡","slug":"生存还是死亡","link":"#生存还是死亡","children":[]}]},{"level":2,"title":"回收方法区","slug":"回收方法区","link":"#回收方法区","children":[{"level":3,"title":"废弃常量","slug":"废弃常量","link":"#废弃常量","children":[]},{"level":3,"title":"不再使用的类型","slug":"不再使用的类型","link":"#不再使用的类型","children":[]}]}],"git":{"createdTime":1684318252000,"updatedTime":1704683174000,"contributors":[{"name":"davidliu","email":"liudawei47@jd.com","commits":1}]},"readingTime":{"minutes":6.13,"words":1838},"filePathRelative":"se/lang/java/jvm/内存管理/垃圾回收/对象死亡判定.md","localizedDate":"May 17, 2023","excerpt":"\\n<h2>引用计数</h2>\\n<p>优点：</p>\\n<ul>\\n<li>原理简单，判定效率也很高，在大多数情况下它都是一个不错的算法。</li>\\n</ul>\\n<p>缺点：</p>\\n<ul>\\n<li>占用了一些额外的内存空间来进行计数</li>\\n<li>难以解决循环引用的问题；它们因为互相引用着对方，导致它们的引用计数都不为零，引用计数算法也 就无法回收它们。</li>\\n</ul>\\n<h2>可达性分析</h2>\\n<p>这个算法的基本思路就是通过 一系列称为“GC Roots”的根对象作为起始节点集，从这些节点开始，根据引用关系向下搜索，搜索过 程所走过的路径称为“引用链”(Reference Chain)，如果某个对象到 GC Roots 间没有任何引用链相连， 或者用图论的话来说就是从 GC Roots 到这个对象不可达时，则证明此对象是不可能再被使用的。</p>","autoDesc":true}`);export{d as comp,p as data};
