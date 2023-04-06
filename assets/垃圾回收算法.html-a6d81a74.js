import{_ as e,V as a,W as i,Z as r}from"./framework-e5d7a6b2.js";const l={},p=r('<h1 id="垃圾回收算法" tabindex="-1"><a class="header-anchor" href="#垃圾回收算法" aria-hidden="true">#</a> 垃圾回收算法</h1><h2 id="分代收集理论" tabindex="-1"><a class="header-anchor" href="#分代收集理论" aria-hidden="true">#</a> 分代收集理论</h2><ol><li>弱分代假说(Weak Generational Hypothesis):绝大多数对象都是朝生夕灭的。</li><li>强分代假说(Strong Generational Hypothesis):熬过越多次垃圾收集过程的对象就越难以消亡。</li><li>跨代引用假说(Intergenerational Reference Hypothesis):跨代引用相对于同代引用来说仅占极少数。</li></ol><p>这两个分代假说共同奠定了多款常用的垃圾收集器的一致的设计原则:收集器应该将 Java 堆划分 出不同的区域，然后将回收对象依据其年龄(年龄即对象熬过垃圾收集过程的次数)分配到不同的区 域之中存储。显而易见，如果一个区域中大多数对象都是朝生夕灭，难以熬过垃圾收集过程的话，那 么把它们集中放在一起，每次回收时只关注如何保留少量存活而不是去标记那些大量将要被回收的对 象，就能以较低代价回收到大量的空间;如果剩下的都是难以消亡的对象，那把它们集中放在一块， 虚拟机便可以使用较低的频率来回收这个区域，这就同时兼顾了垃圾收集的时间开销和内存的空间有 效利用。</p><p>假如要现在进行一次只局限于新生代区域内的收集(Minor GC)，但新生代中的对象是完全有可 能被老年代所引用的，为了找出该区域中的存活对象，不得不在固定的 GC Roots 之外，再额外遍历整个老年代中所有对象来确保可达性分析结果的正确性，反过来也是一样[3]。遍历整个老年代所有对象 的方案虽然理论上可行，但无疑会为内存回收带来很大的性能负担。为了解决这个问题，就需要对分 代收集理论添加第三条经验法则：</p><p>这其实是可根据前两条假说逻辑推理得出的隐含推论:存在互相引用关系的两个对象，是应该倾 向于同时生存或者同时消亡的。举个例子，如果某个新生代对象存在跨代引用，由于老年代对象难以 消亡，该引用会使得新生代对象在收集时同样得以存活，进而在年龄增长之后晋升到老年代中，这时 跨代引用也随即被消除了。</p><ul><li>部分收集(Partial GC):指目标不是完整收集整个 Java 堆的垃圾收集，其中又分为: <ul><li>新生代收集(Minor GC/Young GC):指目标只是新生代的垃圾收集。</li><li>老年代收集(Major GC/Old GC):指目标只是老年代的垃圾收集。目前只有 CMS 收集器会有单 独收集老年代的行为。另外请注意“Major GC”这个说法现在有点混淆，在不同资料上常有不同所指， 读者需按上下文区分到底是指老年代的收集还是整堆收集。</li><li>混合收集(Mixed GC):指目标是收集整个新生代以及部分老年代的垃圾收集。目前只有 G1 收集器会有这种行为。</li></ul></li><li>整堆收集(Full GC):收集整个 Java 堆和方法区的垃圾收集。</li></ul><h2 id="标记-清除算法" tabindex="-1"><a class="header-anchor" href="#标记-清除算法" aria-hidden="true">#</a> 标记-清除算法</h2><p>算法分为“标记”和“清除”两个阶段：</p><p>首先标记出所有需要回收的对象，在标记完成后，统一回收掉所有被标记的对象，也可以反过来，标记存活的对象，统一回收所有未被标记的对象。标记过程就是对象是否属于垃圾的判定过程，这在前一节讲述垃圾对象标记判定算法时其实已经介绍过了。</p><p>缺点：</p><ul><li>第一个是执行效率不稳定，如果 Java 堆中包含大量对 象，而且其中大部分是需要被回收的，这时必须进行大量标记和清除的动作，导致标记和清除两个过 程的执行效率都随对象数量增长而降低；</li><li>第二个是内存空间的碎片化问题，标记、清除之后会产生大量不连续的内存碎片，空间碎片太多可能会导致当以后在程序运行过程中需要分配较大对象时无法找到足够的连续内存而不得不提前触发另一次垃圾收集动作。</li></ul><h2 id="标记-复制" tabindex="-1"><a class="header-anchor" href="#标记-复制" aria-hidden="true">#</a> 标记-复制</h2><p>“半区复制”(Semispace Copying)的垃圾收集算法，它将可用内存按容量划分为大小相等的两块，每次只使用其中的一块。当这一块的内存用完了，就将还存活着的对象复制到另外一块上面，然后再把已使用过的内存空间一次清理掉。</p><p>如果内存中多数对象都是存活的，这种算法将会产生大量的内存间复制的开销，但对于多数对象都是可回收的情况，算法需要复制的就是占少数的存活对象，而且每次都是针对整个半区进行内存回收，分配内存时也就不用考虑有空间碎片的复杂情况，只要移动堆顶指针，按顺序分配即可。这样实现简单，运行高效，</p><p>缺陷：</p><ul><li>这种复制回收算法的代价是将可用内存缩小为了原来的一半，空间浪费太多。</li><li>如果内存中多数对象都是存活的，这种算法将会产生大量的内存间复制的开销。</li></ul><h3 id="appel-式回收-。" tabindex="-1"><a class="header-anchor" href="#appel-式回收-。" aria-hidden="true">#</a> “Appel 式回收”。</h3><p>HotSpot 虚拟机的 Serial、ParNew 等新生代收集器均采用了这种策略来设计新生代的内存布局[1]。</p><p>Appel 式回收的具体做法是把新生代分为一块较大的 Eden 空间和两块较小的 Survivor 空间，每次分配内存只使用 Eden 和其中一块 Survivor。发生垃圾搜集时，将 Eden 和 Survivor 中仍然存活的对象一次性复制到另外一块 Survivor 空间上，然后直接清理掉 Eden 和已用过的那块 Survivor 空间。</p><p>HotSpot 虚拟机默认 Eden 和 Survivor 的大小比例是 8∶1，也即每次新生代中可用内存空间为整个新生代容量的 90%(Eden 的 80%加上一个 Survivor 的 10%)，只有一个 Survivor 空间，即 10%的新生代是会被“浪费”的。当然，98%的对象可被回收仅仅是“普通场景”下测得的数据，任何人都没有办法百分百保证每次回收都只有不多于 10%的对象存活，因此 Appel 式回收还有一个充当罕见情况的“逃生门”的安 全设计，当 Survivor 空间不足以容纳一次 Minor GC 之后存活的对象时，就需要依赖其他内存区域(实际上大多就是老年代)进行分配担保(Handle Promotion)。</p><h2 id="标记-整理算法" tabindex="-1"><a class="header-anchor" href="#标记-整理算法" aria-hidden="true">#</a> 标记-整理算法</h2><p>标记-复制算法在对象存活率较高时就要进行较多的复制操作，效率将会降低。更关键的是，如果不想浪费 50%的空间，就需要有额外的空间进行分配担保，以应对被使用的内存中所有对象都 100%存活的极端情况，所以在老年代一般不能直接选用这种算法。</p><p>针对老年代对象的存亡特征，1974 年 Edward Lueders 提出了另外一种有针对性的“标记-整理”(Mark-Compact)算法，其中的标记过程仍然与“标记-清除”算法一样，但后续步骤不是直接对可回收对象进行清理，而是让所有存活的对象都向内存空间一端移动，然后直接清理掉边界以外的内存，“标记-整理”算法的示意图如图 3-4 所示。</p><p>标记-清除算法与标记-整理算法的本质差异在于前者是一种非移动式的回收算法，而后者是移动式的。是否移动回收后的存活对象是一项优缺点并存的风险决策:</p><p>如果移动存活对象，尤其是在老年代这种每次回收都有大量对象存活区域，移动存活对象并更新所有引用这些对象的地方将会是一种极为负重的操作，而且这种对象移动操作必须全程暂停用户应用 程序才能进行[1]，这就更加让使用者不得不小心翼翼地权衡其弊端了，像这样的停顿被最初的虚拟机 设计者形象地描述为“Stop The World”[2]。</p><h2 id="权衡" tabindex="-1"><a class="header-anchor" href="#权衡" aria-hidden="true">#</a> 权衡</h2><p>混合解决方案可以不在内存分配和访问上增加太大额外负担，做法是让虚拟机平时：</p><p>多数时间都采用标记-清除算法，暂时容忍内存碎片的存在，直到内存空间的碎片化程度已经大到影响对象分配时，再采用标记-整理算法收集一次，以获得规整的内存空间。</p><p>基于标记-清除算法的CMS收集器面临空间碎片过多时采用的就是这种处理办法。</p>',30),o=[p];function n(d,h){return a(),i("div",null,o)}const s=e(l,[["render",n],["__file","垃圾回收算法.html.vue"]]);export{s as default};
