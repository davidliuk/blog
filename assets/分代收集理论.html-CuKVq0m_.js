import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as l,d as a,o as n}from"./app-B6s9NXTg.js";const s={};function t(r,i){return n(),l("div",null,i[0]||(i[0]=[a('<h1 id="分代收集理论" tabindex="-1"><a class="header-anchor" href="#分代收集理论"><span>分代收集理论</span></a></h1><ol><li>弱分代假说(Weak Generational Hypothesis)：绝大多数对象都是朝生夕灭的。</li><li>强分代假说(Strong Generational Hypothesis)：熬过越多次垃圾收集过程的对象就越难以消亡。</li><li>跨代引用假说(Intergenerational Reference Hypothesis)：跨代引用相对于同代引用来说仅占极少数。</li></ol><p>前两个分代假说共同奠定了多款常用的垃圾收集器的一致的设计原则：收集器应该将 Java 堆划分出不同的区域，然后将回收对象依据其年龄(年龄即对象熬过垃圾收集过程的次数)分配到不同的区域之中存储。显而易见，如果一个区域中大多数对象都是朝生夕灭，难以熬过垃圾收集过程的话，那么把它们集中放在一起，每次回收时只关注如何保留少量存活而不是去标记那些大量将要被回收的对象，就能以较低代价回收到大量的空间；如果剩下的都是难以消亡的对象，那把它们集中放在一块，虚拟机便可以使用较低的频率来回收这个区域，这就同时兼顾了垃圾收集的时间开销和内存的空间有效利用。</p><p>假如要现在进行一次只局限于新生代区域内的收集(Minor GC)，但新生代中的对象是完全有可能被老年代所引用的，为了找出该区域中的存活对象，不得不在固定的 GC Roots 之外，再额外遍历整个老年代中所有对象来确保可达性分析结果的正确性，反过来也是一样[3]。遍历整个老年代所有对象 的方案虽然理论上可行，但无疑会为内存回收带来很大的性能负担。为了解决这个问题，就需要对分 代收集理论添加第三条经验法则：</p><p>这其实是可根据前两条假说逻辑推理得出的隐含推论：存在互相引用关系的两个对象，是应该倾向于同时生存或者同时消亡的。举个例子，如果某个新生代对象存在跨代引用，由于老年代对象难以消亡，该引用会使得新生代对象在收集时同样得以存活，进而在年龄增长之后晋升到老年代中，这时跨代引用也随即被消除了。</p><ul><li>部分收集(Partial GC)：指目标不是完整收集整个 Java 堆的垃圾收集，其中又分为: <ul><li>新生代收集(Minor GC/Young GC)：指目标只是新生代的垃圾收集。</li><li>老年代收集(Major GC/Old GC)：指目标只是老年代的垃圾收集。目前只有 CMS 收集器会有单 独收集老年代的行为。另外请注意“Major GC”这个说法现在有点混淆，在不同资料上常有不同所指， 读者需按上下文区分到底是指老年代的收集还是整堆收集。</li><li>混合收集(Mixed GC)：指目标是收集整个新生代以及部分老年代的垃圾收集。目前只有 G1 收集器会有这种行为。</li></ul></li><li>整堆收集(Full GC)：收集整个 Java 堆和方法区的垃圾收集。</li></ul><p><a href="https://juejin.cn/post/7308434215812464690" target="_blank" rel="noopener noreferrer">https://juejin.cn/post/7308434215812464690</a></p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0f1ebed125404724bfc99addb9d49c6f~tplv-k3u1fbpfcp-jj-mark:3024:0:0:0:q75.awebp#?w=1239&amp;h=385&amp;s=56162&amp;e=png&amp;a=1&amp;b=fcf8ed" alt="img" loading="lazy"></p><p>Minor GC、Major GC和Full GC是垃圾回收中的三个重要概念，它们描述了垃圾回收的不同阶段和范围：</p><ol><li>Minor GC（新生代GC）： <ul><li>Minor GC主要关注清理年轻代（Young Generation）的内存区域。</li><li>年轻代通常分为三个部分：Eden区和两个Survivor区（通常是S0和S1）。</li><li>在Minor GC过程中，首先会进行Eden区的垃圾回收，存活的对象将会被移动到其中一个Survivor区。之后，再清理Eden区和另一个Survivor区。这个过程会使得年轻代中的对象晋升到老年代（Old Generation）。</li><li>Minor GC通常发生频繁，但它的停顿时间相对较短。</li></ul></li><li>Major GC（老年代GC）： <ul><li>Major GC主要关注清理老年代的内存区域。</li><li>触发Major GC的条件包括老年代空间不足，永久代（在Java 8及之前的版本）或Metaspace空间不足等。</li><li>Major GC的执行可能伴随较长的停顿时间，因为它需要整理老年代的内存，移动对象以减少碎片化。</li></ul></li><li>Full GC（完全GC）： <ul><li>Full GC是对整个堆内存（包括年轻代、老年代、永久代或Metaspace等）进行清理的一种垃圾回收操作，它是Major GC的一种特殊情况。</li><li>触发Full GC的条件可能包括老年代空间不足、永久代/Metaspace空间不足、显式调用<code>System.gc()</code>等。</li><li>Full GC的执行会导致相对较长的停顿时间，因为它需要对整个堆内存进行回收。</li></ul></li></ol><p>总的来说，Minor GC主要处理年轻代的垃圾回收，Major GC关注老年代的垃圾回收，而Full GC是对整个堆内存的完全清理。像我们常说的Serial Old、PS Old、CMS等老年代的垃圾回收器，都是只回收的老年代区域即Major GC，而当一些特殊情况发生的时候。如：CMS并发清理的时候出现“并发分配错误”，会触发对所有堆空间进行回收的Full GC，而采用的算法则是Serial Young+Serial Old。所以说，Full GC和Major GC是两种不同的概念，如何区分还需要观察运行时堆空间回收的区域是怎么样的。</p><h2 id="什么是full-gc" tabindex="-1"><a class="header-anchor" href="#什么是full-gc"><span>什么是Full GC？</span></a></h2><p>Full GC（Full Garbage Collection）是Java虚拟机中进行垃圾回收的一种操作，它的目标是清理整个Java堆内存，包括年轻代（Young Generation）、年老代（Old Generation或Tenured Generation）、以及永久代（在Java 8及之前的版本中，而在Java 8及之后的版本中由Metaspace取代，所以这里可以理解为元空间Metaspace）。</p><p>与部分垃圾回收（Partial Garbage Collection）不同，Full GC的特点是它会停止应用程序的所有线程，包括用户线程和垃圾回收线程，以确保整个堆内存的清理工作得以完成。这种停顿时间相对较长，可能对应用程序的性能产生一些影响。</p><p>Full GC是一种较为重量级的垃圾回收操作，因为它需要停止应用程序的所有线程，对整个堆内存进行清理。在实际的应用程序中，需要谨慎处理Full GC的情况，尽量避免频繁发生，以维持较好的应用性能。常见的Full GC的算法是Serial Young+Serial Old，当算法运行的时候会暂停所有工作线程。</p><h2 id="minor-gc-时机" tabindex="-1"><a class="header-anchor" href="#minor-gc-时机"><span>Minor GC 时机</span></a></h2><p>Minor GC（或称为Young GC）通常在年轻代（Young Generation）垃圾回收时发生。年轻代是堆内存的一部分，用于存放新创建的对象。Minor GC发生的情况包括：</p><ol><li><strong>Eden区满：</strong> Eden区是年轻代中的一个区域，用于存放新创建的对象。当Eden区满时，触发Minor GC。在Minor GC中，Eden区中的存活对象将被移动到Survivor区，而不再需要的对象将被清理。</li><li><strong>Survivor区空间不足：</strong> 在两个Survivor区（通常称为S0和S1）之间进行对象的复制。当一个Survivor区满时，或者在对象晋升到老年代之前，可能触发Minor GC。在Minor GC中，存活的对象将被移动到另一个Survivor区，或者直接晋升到老年代。</li></ol><p>Minor GC是一种相对轻量级的垃圾回收操作，通常会比较频繁地发生。其主要目标是清理年轻代中的垃圾，而不涉及老年代的清理。由于年轻代中的对象生命周期较短，Minor GC的停顿时间通常较短，对应用程序的影响比较小。</p><h2 id="major-gc-时机" tabindex="-1"><a class="header-anchor" href="#major-gc-时机"><span>Major GC 时机</span></a></h2><p>Major GC主要负责清理老年代（Tenured区）的内存空间，用于回收老年代中的对象。通常，触发Major GC的条件是老年代空间不足，这可能由存活对象晋升、一次Minor GC的结果或其他原因引起。但是，除了CMS收集器之外的其他收集器通常不会单独执行针对老年代的垃圾回收行为。</p><p>触发Major GC通常涉及至少一次Minor GC。Minor GC主要负责清理年轻代的内存空间，通常会在Eden区满或对象晋升到老年代时触发。在Minor GC执行后，如果老年代仍然没有足够的空间容纳存活的对象，就可能触发Major GC。</p><p>综上所述，Major GC是在老年代满时触发的，通常需要至少经历一次Minor GC。除了CMS收集器之外，其他收集器通常不会单独执行对老年代的垃圾回收。</p><h2 id="full-gc-时机" tabindex="-1"><a class="header-anchor" href="#full-gc-时机"><span>Full GC 时机</span></a></h2><p>Full GC（Garbage Collection）是Java虚拟机中进行垃圾回收的一种类型，它会清理整个堆内存，包括新生代和老年代。Full GC通常发生在以下情况下：</p><ol><li><strong>老年代空间不足：</strong> 当老年代无法容纳新生代晋升过来的对象时，可能触发Major GC。这通常发生在年轻代的Minor GC后，存活的对象被移动到老年代，导致老年代的空间不足。</li><li><strong>永久代空间不足：</strong> 在Java 7及之前的版本中，常量池等信息存放在永久代中。如果常量池或类的元数据占用的空间过大，可能导致永久代空间不足，触发Full GC。在Java 8及之后的版本中，永久代被元空间（Metaspace）取代。</li><li><strong>使用CMS（Concurrent Mark-Sweep）垃圾回收器时的并发失败：</strong> CMS是一种以减少应用程序停顿时间为目标的垃圾回收器，但它可能会因为一些原因（比如老年代空间不足）而导致并发失败，从而触发Full GC。</li><li><strong>System.gc()的显式调用：</strong> 调用<code>System.gc()</code>或<code>Runtime.getRuntime().gc()</code>并不能确保会立即进行垃圾回收，但它可能会触发Full GC。</li><li><strong>永久代/Metaspace溢出：</strong> 如果Metaspace（Java 8及以后的版本）或永久代（Java 7及之前的版本）中的元数据信息溢出，可能触发Full GC。</li><li><strong>分配担保失败：</strong> 在进行Minor GC时，虚拟机会检查老年代的剩余空间是否大于新生代的对象总大小。如果不大于，会尝试进行一次Full GC。这是为了确保在新生代GC后，存活的对象能够顺利晋升到老年代。</li><li><strong>G1垃圾回收器的一些特殊情况：</strong> G1垃圾回收器在一些特殊情况下可能触发Full GC，例如在进行Mixed GC（混合收集）时，或者由于空间不足而放弃Mixed GC，转而执行Full GC。</li></ol><p>Full GC是一种比较重量级的垃圾回收操作，会导致较长的停顿时间，因此在实际应用中，需要谨慎处理Full GC的情况，尽量避免频繁发生。</p><h2 id="如何避免频繁full-gc" tabindex="-1"><a class="header-anchor" href="#如何避免频繁full-gc"><span>如何避免频繁Full GC？</span></a></h2><p>频繁的Full GC对应用程序的性能和响应时间都可能产生负面影响，因此优化垃圾回收以避免频繁的Full GC是很重要的。以下是一些可能有助于减少Full GC 频率的建议：</p><ol><li><strong>调整堆内存大小：</strong> 如果堆内存设置得太小，容易导致频繁的垃圾回收，特别是Full GC。增大堆内存可以减少垃圾回收的频率。可以通过 <code>-Xms</code> 和 <code>-Xmx</code> 参数分别设置初始堆大小和最大堆大小。</li></ol><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">java</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -Xms512m</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -Xmx1024m</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -jar</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> YourApplication.jar</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ol><li><strong>合理设置新生代和老年代的比例：</strong> 年轻代存活对象晋升到老年代时会触发Full GC，合理设置新生代和老年代的比例可以影响对象晋升的速度。可以通过 <code>-XX:NewRatio</code> 参数来调整新生代和老年代的比例。</li></ol><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">java</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -XX:NewRatio=2</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -jar</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> YourApplication.jar</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ol><li><strong>选择合适的垃圾回收器：</strong> 根据应用程序的特性选择合适的垃圾回收器。不同的垃圾回收器有不同的特点，比如CMS（Concurrent Mark-Sweep）和G1（Garbage-First）是以减小停顿时间为目标的回收器，适用于对响应时间敏感的应用。</li></ol><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">java</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -XX:+UseConcMarkSweepGC</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -jar</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> YourApplication.jar</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ol><li><strong>调整新生代的大小：</strong> 通过调整新生代的大小，可以影响对象在年轻代的存活时间，从而影响晋升到老年代的速度。可以使用参数 <code>-Xmn</code> 来设置新生代的大小。</li></ol><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">java</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -Xmn256m</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -jar</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> YourApplication.jar</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ol><li><strong>避免过度使用Finalizer：</strong> 使用 <code>finalize</code> 方法可能导致对象在垃圾回收时的额外开销。尽量避免过度依赖 <code>finalize</code> 方法。</li><li><strong>检查内存泄漏：</strong> 内存泄漏可能导致堆内存的不断增加，最终导致Full GC。使用内存分析工具（如VisualVM、MAT等）来检查和解决潜在的内存泄漏问题。</li><li><strong>监控和调优：</strong> 定期监控应用程序的垃圾回收情况，通过日志或监控工具（如VisualVM、JConsole等）来分析GC日志，找到GC发生的原因，并根据实际情况进行调优。</li></ol><p>通过综合考虑这些因素，可以有效减少Full GC的频率，提高应用程序的性能和稳定性。在优化时建议谨慎调整参数，充分测试以确保调整的效果符合预期。</p><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结"><span>总结</span></a></h2><p>在Java垃圾回收中，Minor GC、Major GC和Full GC代表着不同阶段和范围的内存清理。Minor GC主要清理年轻代，发生频率较高，停顿时间较短；Major GC关注老年代，通常由Minor GC触发，停顿时间较长；而Full GC是一种对整个堆内存的完全清理，包括新生代、老年代以及永久代或Metaspace。Full GC的触发条件多种多样，包括老年代空间不足、永久代/Metaspace空间不足、显式调用System.gc()等。</p><p>为避免频繁的Full GC，可采取合理设置堆内存大小、新生代和老年代的比例、选择适当的垃圾回收器等策略。监控和调优也是关键，通过分析GC日志、检查内存泄漏等手段，及时发现和解决潜在问题。综合考虑这些因素，可以有效提高应用程序的性能和稳定性。在调整参数时需谨慎，充分测试以确保优化效果符合预期。</p><ol><li>对象优先在堆的 Eden 区分配。</li><li>大对象直接进入老年代.</li><li>长期存活的对象将直接进入老年代.</li></ol><p>当 Eden 区没有足够的空间进行分配时，虚拟机会执行一次 Minor GC。Minor Gc 通常发生在新生代的 Eden 区，在这个区的对象生存期短，往往发生 Gc 的频率较高，回收速度比较快；Full Gc/Major GC 发生在老年代，一般情况下，触发老年代 GC 的时候不会触发 Minor GC，但是通过配置，可以在 Full GC 之前进行一次 Minor GC 这样可以加快老年代的回收速度。</p>',44)]))}const d=e(s,[["render",t],["__file","分代收集理论.html.vue"]]),h=JSON.parse(`{"path":"/se/lang/java/jvm/%E5%86%85%E5%AD%98%E7%AE%A1%E7%90%86/%E5%9E%83%E5%9C%BE%E5%9B%9E%E6%94%B6/%E5%88%86%E4%BB%A3%E6%94%B6%E9%9B%86%E7%90%86%E8%AE%BA.html","title":"分代收集理论","lang":"en-US","frontmatter":{"description":"分代收集理论 弱分代假说(Weak Generational Hypothesis)：绝大多数对象都是朝生夕灭的。 强分代假说(Strong Generational Hypothesis)：熬过越多次垃圾收集过程的对象就越难以消亡。 跨代引用假说(Intergenerational Reference Hypothesis)：跨代引用相对于同代引用来...","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/se/lang/java/jvm/%E5%86%85%E5%AD%98%E7%AE%A1%E7%90%86/%E5%9E%83%E5%9C%BE%E5%9B%9E%E6%94%B6/%E5%88%86%E4%BB%A3%E6%94%B6%E9%9B%86%E7%90%86%E8%AE%BA.html"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"分代收集理论"}],["meta",{"property":"og:description","content":"分代收集理论 弱分代假说(Weak Generational Hypothesis)：绝大多数对象都是朝生夕灭的。 强分代假说(Strong Generational Hypothesis)：熬过越多次垃圾收集过程的对象就越难以消亡。 跨代引用假说(Intergenerational Reference Hypothesis)：跨代引用相对于同代引用来..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0f1ebed125404724bfc99addb9d49c6f~tplv-k3u1fbpfcp-jj-mark:3024:0:0:0:q75.awebp#?w=1239&h=385&s=56162&e=png&a=1&b=fcf8ed"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-06-27T01:21:47.000Z"}],["meta",{"property":"article:modified_time","content":"2024-06-27T01:21:47.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"分代收集理论\\",\\"image\\":[\\"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0f1ebed125404724bfc99addb9d49c6f~tplv-k3u1fbpfcp-jj-mark:3024:0:0:0:q75.awebp#?w=1239&h=385&s=56162&e=png&a=1&b=fcf8ed\\"],\\"dateModified\\":\\"2024-06-27T01:21:47.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[{"level":2,"title":"什么是Full GC？","slug":"什么是full-gc","link":"#什么是full-gc","children":[]},{"level":2,"title":"Minor GC 时机","slug":"minor-gc-时机","link":"#minor-gc-时机","children":[]},{"level":2,"title":"Major GC 时机","slug":"major-gc-时机","link":"#major-gc-时机","children":[]},{"level":2,"title":"Full GC 时机","slug":"full-gc-时机","link":"#full-gc-时机","children":[]},{"level":2,"title":"如何避免频繁Full GC？","slug":"如何避免频繁full-gc","link":"#如何避免频繁full-gc","children":[]},{"level":2,"title":"总结","slug":"总结","link":"#总结","children":[]}],"git":{"createdTime":1715153702000,"updatedTime":1719451307000,"contributors":[{"name":"刘大维","email":"davidliu@liudaweideMacBook-Pro.local","commits":2}]},"readingTime":{"minutes":13.01,"words":3903},"filePathRelative":"se/lang/java/jvm/内存管理/垃圾回收/分代收集理论.md","localizedDate":"May 8, 2024","excerpt":"\\n<ol>\\n<li>弱分代假说(Weak Generational Hypothesis)：绝大多数对象都是朝生夕灭的。</li>\\n<li>强分代假说(Strong Generational Hypothesis)：熬过越多次垃圾收集过程的对象就越难以消亡。</li>\\n<li>跨代引用假说(Intergenerational Reference Hypothesis)：跨代引用相对于同代引用来说仅占极少数。</li>\\n</ol>\\n<p>前两个分代假说共同奠定了多款常用的垃圾收集器的一致的设计原则：收集器应该将 Java 堆划分出不同的区域，然后将回收对象依据其年龄(年龄即对象熬过垃圾收集过程的次数)分配到不同的区域之中存储。显而易见，如果一个区域中大多数对象都是朝生夕灭，难以熬过垃圾收集过程的话，那么把它们集中放在一起，每次回收时只关注如何保留少量存活而不是去标记那些大量将要被回收的对象，就能以较低代价回收到大量的空间；如果剩下的都是难以消亡的对象，那把它们集中放在一块，虚拟机便可以使用较低的频率来回收这个区域，这就同时兼顾了垃圾收集的时间开销和内存的空间有效利用。</p>","autoDesc":true}`);export{d as comp,h as data};
