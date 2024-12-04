import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as l,d as n,o as i}from"./app-D4ZvIHfO.js";const r={};function t(o,e){return i(),l("div",null,e[0]||(e[0]=[n(`<h1 id="垃圾收集器" tabindex="-1"><a class="header-anchor" href="#垃圾收集器"><span>垃圾收集器</span></a></h1><p><img src="https://cdn.jsdelivr.net/gh/davidliuk/images@master/blog/截屏2023-03-31 18.47.04.png" alt="截屏2023-03-31 18.47.04" loading="lazy"></p><h2 id="young-generation" tabindex="-1"><a class="header-anchor" href="#young-generation"><span>Young Generation</span></a></h2><h3 id="serial-收集器" tabindex="-1"><a class="header-anchor" href="#serial-收集器"><span>Serial 收集器</span></a></h3><p>Serial（串行）收集器是最基本、历史最悠久的垃圾收集器了。大家看名字就知道这个收集器是一个单线程收集器了。它的 <strong>“单线程”</strong> 的意义不仅仅意味着它只会使用一条垃圾收集线程去完成垃圾收集工作，更重要的是它在进行垃圾收集工作的时候必须暂停其他所有的工作线程（ <strong>&quot;Stop The World&quot;</strong> ），直到它收集结束。</p><p><strong>新生代采用标记-复制算法，老年代采用标记-整理算法。</strong></p><p>优点：它<strong>简单而高效（与其他收集器的单线程相比）</strong>。Serial 收集器由于没有线程交互的开销，自然可以获得很高的单线程收集效率。Serial 收集器对于运行在 Client 模式下的虚拟机来说是个不错的选择。</p><p>缺点：</p><h3 id="parnew-收集器" tabindex="-1"><a class="header-anchor" href="#parnew-收集器"><span>ParNew 收集器</span></a></h3><p><strong>ParNew 收集器其实就是 Serial 收集器的多线程版本，除了使用多线程进行垃圾收集外，其余行为（控制参数、收集算法、回收策略等等）和 Serial 收集器完全一样。</strong></p><p><strong>新生代采用标记-复制算法，老年代采用标记-整理算法。</strong></p><h3 id="parallel-scavenge-收集器" tabindex="-1"><a class="header-anchor" href="#parallel-scavenge-收集器"><span>Parallel Scavenge 收集器</span></a></h3><p>Parallel Scavenge 收集器也是使用标记-复制算法的多线程收集器，它看上去几乎和 ParNew 都一样。 <strong>那么它有什么特别之处呢？</strong></p><div class="language-text line-numbers-mode" data-highlighter="shiki" data-ext="text" data-title="text" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>-XX:+UseParallelGC 使用 Parallel 收集器+ 老年代串行</span></span>
<span class="line"><span>-XX:+UseParallelOldGC 使用 Parallel 收集器+ 老年代并行</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Parallel Scavenge 收集器关注点是吞吐量（高效率的利用 CPU）。CMS 等垃圾收集器的关注点更多的是用户线程的停顿时间（提高用户体验）。所谓吞吐量就是 CPU 中用于运行用户代码的时间与 CPU 总消耗时间的比值。</strong> Parallel Scavenge 收集器提供了很多参数供用户找到最合适的停顿时间或最大吞吐量，如果对于收集器运作不太了解，手工优化存在困难的时候，使用 Parallel Scavenge 收集器配合自适应调节策略，把内存管理优化交给虚拟机去完成也是一个不错的选择。</p><p><strong>新生代采用标记-复制算法，老年代采用标记-整理算法。</strong></p><h2 id="tenured-generation" tabindex="-1"><a class="header-anchor" href="#tenured-generation"><span>Tenured Generation</span></a></h2><h3 id="serial-old-收集器" tabindex="-1"><a class="header-anchor" href="#serial-old-收集器"><span>Serial Old 收集器</span></a></h3><p><strong>Serial 收集器的老年代版本</strong>，它同样是一个单线程收集器。它主要有两大用途：一种用途是在 JDK1.5 以及以前的版本中与 Parallel Scavenge 收集器搭配使用，另一种用途是作为 CMS 收集器的后备方案。</p><h3 id="parallel-old-收集器" tabindex="-1"><a class="header-anchor" href="#parallel-old-收集器"><span>Parallel Old 收集器</span></a></h3><p><strong>Parallel Scavenge 收集器的老年代版本</strong>。使用多线程和“标记-整理”算法。在注重吞吐量以及 CPU 资源的场合，都可以优先考虑 Parallel Scavenge 收集器和 Parallel Old 收集器。</p><h3 id="cms-收集器" tabindex="-1"><a class="header-anchor" href="#cms-收集器"><span>CMS 收集器</span></a></h3><p>CMS（Concurrent Mark Sweep）收集器是一种以获取最短回收停顿时间为目标的收集器。它非常符合在注重用户体验的应用上使用。</p><p>CMS 收集器是 HotSpot 虚拟机第一款真正意义上的并发收集器，它第一次实现了让垃圾收集线程与用户线程（基本上）同时工作。</p><h4 id="过程" tabindex="-1"><a class="header-anchor" href="#过程"><span>过程</span></a></h4><ol><li>初始标记(CMS initial mark)</li><li>并发标记(CMS concurrent mark)</li><li>重新标记(CMS remark)</li><li>并发清除(CMS concurrent sweep)</li></ol><p>其中初始标记、重新标记这两个步骤仍然需要“Stop The World”。初始标记仅仅只是标记一下 GC Roots 能直接关联到的对象，速度很快;</p><p>并发标记阶段就是从 GC Roots 的直接关联对象开始遍历整个对象图的过程，这个过程耗时较长但是不需要停顿用户线程，可以与垃圾收集线程一起并发运行;</p><p>而重新标记阶段则是为了修正并发标记期间，因用户程序继续运作而导致标记产生变动的那一部分对象的标记记录(详见 3.4.6 节中关于增量更新的讲解)，这个阶段的停顿时间通常会比初始标记阶段稍长一些，但也远比并发标记阶段的时间短;</p><p>最后是并发清除阶段，清理删除掉标记阶段判断的已经死亡的 对象，由于不需要移动存活对象，所以这个阶段也是可以与用户线程同时并发的。</p><p>由于在整个过程中耗时最长的并发标记和并发清除阶段中，垃圾收集器线程都可以与用户线程一 起工作，所以从总体上来说，CMS 收集器的内存回收过程是与用户线程一起并发执行的。通过图 3-11 可以比较清楚地看到 CMS 收集器的运作步骤中并发和需要停顿的阶段。</p><h4 id="缺点" tabindex="-1"><a class="header-anchor" href="#缺点"><span>缺点</span></a></h4><ul><li><p>CMS 收集器对处理器资源非常敏感。</p><p>向并发设计的程序都对处理器资源比较敏感。在并发阶段，它虽然不会导致用户线程停顿，但却会因为占用了一部分线程(或者说处理器的计算能力)而导致应用程序变慢，降低总吞吐量。CMS 默认启动的回收线程数是(处理器核心数量+3)/4，也就是说，如果处理器核心数在四个或以上，并发回收时垃圾收集线程只占用不超过 25%的处理器运算资源，并且会随着处理器核心数量的增加而下降。</p></li><li><p>由于 CMS 收集器无法处理“浮动垃圾”(Floating Garbage)，有可能出现“Concurrent Mode Failure”失败进而导致另一次完全“Stop The World”的 Full GC 的产生。</p></li><li><p>CMS 是一款基于“标记-清除”算法实现的收集器，这意味着收集结束时会有大量空间碎片产生。</p></li></ul><h2 id="混合" tabindex="-1"><a class="header-anchor" href="#混合"><span>混合</span></a></h2><h3 id="g1-收集器" tabindex="-1"><a class="header-anchor" href="#g1-收集器"><span>G1 收集器</span></a></h3><p><strong>G1 (Garbage-First) 是一款面向服务器的垃圾收集器，主要针对配备多颗处理器及大容量内存的机器. 以极高概率满足 GC 停顿时间要求的同时,还具备高吞吐量性能特征.</strong></p><p>首先要有一个思想上的改变，在G1收集器出现之前的所有其他收集器，包括CMS在内，垃圾收集的目标范围要么是整个新生代(Minor GC)，要么就是整个老年代(Major GC)，再要么就是整个Java堆(Full GC)。</p><p>而 G1可以面向堆内存任何部分来组成回收集(Collection Set，一般简称CSet)进行回收，衡量标准不再是它属于哪个分代，而是哪块内存中存放的垃圾数量最多，回收收益最大，这就是G1收集器的Mixed GC模式。</p><p>取代Parallel Scavenge加Parallel Old组合，成为服务端模式下的默认垃圾收集器。被视为 JDK1.7 中 HotSpot 虚拟机的一个重要进化特征。它具备以下特点：</p><ul><li><p><strong>并行与并发</strong>：G1 能充分利用 CPU、多核环境下的硬件优势，使用多个 CPU（CPU 或者 CPU 核心）来缩短 Stop-The-World 停顿时间。部分其他收集器原本需要停顿 Java 线程执行的 GC 动作，G1 收集器仍然可以通过并发的方式让 java 程序继续执行。</p></li><li><p><strong>分代收集</strong>：虽然 G1 可以不需要其他收集器配合就能独立管理整个 GC 堆，但是还是保留了分代的概念。</p></li><li><p><strong>空间整合</strong>：与 CMS 的“标记-清除”算法不同，G1</p><ul><li>从整体来看，基于“标记-整理”算法实现的收集器；</li><li>从局部来看，基于“标记-复制”算法实现的收集器。</li></ul></li><li><p><strong>可预测的停顿</strong>：这是 G1 相对于 CMS 的另一个大优势，降低停顿时间是 G1 和 CMS 共同的关注点，但 G1 除了追求低停顿外，还能建立可预测的停顿时间模型，能让使用者明确指定在一个长度为 M 毫秒的时间片段内。</p></li></ul><p>G1 收集器的运作大致分为以下几个步骤：</p><p><img src="https://oss.javaguide.cn/github/javaguide/java/jvm/g1-garbage-collector.png" alt="G1 收集器" loading="lazy"></p><ul><li><strong>初始标记</strong>：仅仅只是标记一下<strong>GC Roots</strong>能直接关联到的对象，并且修改TAM S 指针的值，让下一阶段用户线程并发运行时，能正确地在可用的Region中分配新对象。这个阶段需要 Stop-The-World 停顿线程，但耗时很短，而且是借用进行Minor GC的时候同步完成的，所以G1收集器在这个阶段实际 并没有额外的停顿。</li><li><strong>并发标记</strong>：从GC Root开始对堆中对象进行可达性分析，递归扫描整个堆里的对象图，找出要回收的对象，这阶段<strong>耗时较长</strong>，但可与用户程序并发执行。当对象图扫描完成以 后，还要重新处理SAT B记录下的在并发时有引用变动的对象。</li><li><strong>最终标记</strong>：对用户线程做另一个短暂的暂停，用于处理并发阶段结束后仍遗留下来的最后那少量的SAT B记录。</li><li><strong>筛选回收</strong>：负责更新Region的统计数据，对各个Region的回收价值和成本进行排序，根据用户所期望的停顿时间来制定回收计划，可以自由选择任意多个Region 构成回收集，然后把决定回收的那一部分Region的存活对象复制到空的Region中，再清理掉整个旧 Region 的全部空间。这里的操作涉及存活对象的移动，是必须暂停用户线程，由多条收集器线程并行完成的。</li></ul><p><strong>G1 收集器在后台维护了一个优先列表，每次根据允许的收集时间，优先选择回收价值最大的 Region(这也就是它的名字 Garbage-First 的由来)</strong> 。这种使用 Region 划分内存空间以及有优先级的区域回收方式，保证了 G1 收集器在有限时间内可以尽可能高的收集效率（把内存化整为零）。</p><h4 id="优点" tabindex="-1"><a class="header-anchor" href="#优点"><span>优点</span></a></h4><p>相比 CMS，G1 的优点有很多</p><ul><li>可以指定最大停顿时间、</li><li>分 Region 的内存布局、</li><li>按收益动态确定回收集这些创新性设计带来的红利，</li></ul><p>单从最传统的算法理论上看，G1 也更有发展潜力。与 CMS 的“标记-清除”算法不同</p><ul><li>从整体来看是基于“标记-整理”算法实现的收集器，但从局部(两个 Region 之间)上看又是基于“标记-复制”算法实现，无论如何，这两种算法都意味着 G1 运作期间<strong>不会产生内存空间碎片</strong>，垃圾收集完成之后能提供规整的可用内存。这种特性有利于程序长时间运行，在程序为大对象分配内存时不容易因无法找到连续内存空间而提前触发下一次收集。</li></ul><p>负责更新Region的统计数据，对各个Region的回收价值和成本进行排序，根据用户所期望的停顿时间来制定回收计划，可以自由选择任意多个Region 构成回收集，然后把决定回收的那一部分Region的存活对象复制到空的Region中，再清理掉整个旧 Region的全部空间。这里的操作涉及存活对象的移动，是必须暂停用户线程，由多条收集器线程并行完成的。</p><p><img src="https://cdn.jsdelivr.net/gh/davidliuk/images@master/blog/format,png.png" alt="img" loading="lazy"></p><p>新生代的对象会在经过多次垃圾回收后仍然存活时，被晋升到老年代。一般来说，新生代的对象在经过几次垃圾回收后，如果仍然存活，就会被晋升到老年代。这个次数可以通过 JVM 的参数进行配置，默认15次。</p><p>老年代的对象会在进行 Full GC（Full Garbage Collection）时被回收。Full GC 是指对整个 Java 堆进行垃圾回收，包括新生代和老年代。Full GC 一般会比较耗时，因此应该尽量避免 Full GC 的发生。可以通过调整 JVM 的参数、优化代码等方式来减少 Full GC 的发生。</p><p><strong>面向服务端应用，针对具有大内存、多处理器的机器</strong>。(在普通大小的堆里表现并不</p><p>惊喜)，最主要的应用是需要低GC延迟，并具有大堆的应用程序提供解决方案</p><p>如:在堆大小约6GB或更大时，可预测的暂停时间可以低于0.5秒; ( G1通过每次只清理一 部分而不是全部的Region的增量式清理来保证每次GC停顿时间不会过长)</p><p><strong>用来替换掉JDK1.5中的CMS收集器</strong></p><p>在下面的情况时，使用G1可能比CMS好:</p><ul><li>超过50%的Java堆被活动数据占用;</li><li>对象分配频率或年代提升频率变化很大;</li><li>GC停顿时间过长(长于0.5至1秒)。</li></ul>`,59)]))}const g=a(r,[["render",t],["__file","垃圾收集器.html.vue"]]),d=JSON.parse(`{"path":"/se/lang/java/jvm/%E5%86%85%E5%AD%98%E7%AE%A1%E7%90%86/%E5%9E%83%E5%9C%BE%E5%9B%9E%E6%94%B6/%E5%9E%83%E5%9C%BE%E6%94%B6%E9%9B%86%E5%99%A8.html","title":"垃圾收集器","lang":"en-US","frontmatter":{"description":"垃圾收集器 截屏2023-03-31 18.47.04 Young Generation Serial 收集器 Serial（串行）收集器是最基本、历史最悠久的垃圾收集器了。大家看名字就知道这个收集器是一个单线程收集器了。它的 “单线程” 的意义不仅仅意味着它只会使用一条垃圾收集线程去完成垃圾收集工作，更重要的是它在进行垃圾收集工作的时候必须暂停其他所...","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/se/lang/java/jvm/%E5%86%85%E5%AD%98%E7%AE%A1%E7%90%86/%E5%9E%83%E5%9C%BE%E5%9B%9E%E6%94%B6/%E5%9E%83%E5%9C%BE%E6%94%B6%E9%9B%86%E5%99%A8.html"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"垃圾收集器"}],["meta",{"property":"og:description","content":"垃圾收集器 截屏2023-03-31 18.47.04 Young Generation Serial 收集器 Serial（串行）收集器是最基本、历史最悠久的垃圾收集器了。大家看名字就知道这个收集器是一个单线程收集器了。它的 “单线程” 的意义不仅仅意味着它只会使用一条垃圾收集线程去完成垃圾收集工作，更重要的是它在进行垃圾收集工作的时候必须暂停其他所..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/davidliuk/images@master/blog/%E6%88%AA%E5%B1%8F2023-03-31%2018.47.04.png"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-06-27T01:21:47.000Z"}],["meta",{"property":"article:modified_time","content":"2024-06-27T01:21:47.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"垃圾收集器\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/davidliuk/images@master/blog/%E6%88%AA%E5%B1%8F2023-03-31%2018.47.04.png\\",\\"https://oss.javaguide.cn/github/javaguide/java/jvm/g1-garbage-collector.png\\",\\"https://cdn.jsdelivr.net/gh/davidliuk/images@master/blog/format,png.png\\"],\\"dateModified\\":\\"2024-06-27T01:21:47.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[{"level":2,"title":"Young Generation","slug":"young-generation","link":"#young-generation","children":[{"level":3,"title":"Serial 收集器","slug":"serial-收集器","link":"#serial-收集器","children":[]},{"level":3,"title":"ParNew 收集器","slug":"parnew-收集器","link":"#parnew-收集器","children":[]},{"level":3,"title":"Parallel Scavenge 收集器","slug":"parallel-scavenge-收集器","link":"#parallel-scavenge-收集器","children":[]}]},{"level":2,"title":"Tenured Generation","slug":"tenured-generation","link":"#tenured-generation","children":[{"level":3,"title":"Serial Old 收集器","slug":"serial-old-收集器","link":"#serial-old-收集器","children":[]},{"level":3,"title":"Parallel Old 收集器","slug":"parallel-old-收集器","link":"#parallel-old-收集器","children":[]},{"level":3,"title":"CMS 收集器","slug":"cms-收集器","link":"#cms-收集器","children":[]}]},{"level":2,"title":"混合","slug":"混合","link":"#混合","children":[{"level":3,"title":"G1 收集器","slug":"g1-收集器","link":"#g1-收集器","children":[]}]}],"git":{"createdTime":1680090419000,"updatedTime":1719451307000,"contributors":[{"name":"刘大维","email":"davidliu@liudaweideMacBook-Pro.local","commits":2},{"name":"davidliu","email":"liudawei47@jd.com","commits":1}]},"readingTime":{"minutes":11.06,"words":3318},"filePathRelative":"se/lang/java/jvm/内存管理/垃圾回收/垃圾收集器.md","localizedDate":"March 29, 2023","excerpt":"\\n<p><img src=\\"https://cdn.jsdelivr.net/gh/davidliuk/images@master/blog/截屏2023-03-31 18.47.04.png\\" alt=\\"截屏2023-03-31 18.47.04\\" loading=\\"lazy\\"></p>\\n<h2>Young Generation</h2>\\n<h3>Serial 收集器</h3>\\n<p>Serial（串行）收集器是最基本、历史最悠久的垃圾收集器了。大家看名字就知道这个收集器是一个单线程收集器了。它的 <strong>“单线程”</strong> 的意义不仅仅意味着它只会使用一条垃圾收集线程去完成垃圾收集工作，更重要的是它在进行垃圾收集工作的时候必须暂停其他所有的工作线程（ <strong>\\"Stop The World\\"</strong> ），直到它收集结束。</p>","autoDesc":true}`);export{g as comp,d as data};
