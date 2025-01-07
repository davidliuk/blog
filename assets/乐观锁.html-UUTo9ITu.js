import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as e,d as a,o as n}from"./app-ChU1gMRF.js";const l={};function t(p,i){return n(),e("div",null,i[0]||(i[0]=[a(`<h1 id="乐观锁" tabindex="-1"><a class="header-anchor" href="#乐观锁"><span>乐观锁</span></a></h1><p>代表：AtomicInteger，使用 cas（Unsafe）来保证原子性</p><ul><li>核心是：无需加锁，每次只有一个线程能够成功修改共享变量，其他失败的线程不需要停止，不断重复直至成功</li><li>由于线程一直运行，不需要阻塞，因此不涉及线程上下文切换</li><li>它需要多核 cpu 支持，且核心数不应超过 cpu 核数</li></ul><hr><ol><li>乐观锁：假定没有冲突，在更新数据时比较发现不一致时，则读取新值修改后重试更新。（自旋锁就是一种乐观锁）</li><li>自旋锁：循环使用 cpu 时间，尝试 cas 操作直至成功返回 true，不然一直循环。（比较内存值与线程旧值是否一致，一致则更新，不然则循环）</li></ol><p>高并发的场景下，乐观锁相比悲观锁来说，不存在锁竞争造成线程阻塞，也不会有死锁的问题，在性能上往往会更胜一筹。但是，如果冲突频繁发生（写占比非常多的情况），会频繁失败和重试，这样同样会非常影响性能，导致 CPU 飙升。</p><p>不过，大量失败重试的问题也是可以解决的，像我们前面提到的 <code>LongAdder</code>以空间换时间的方式就解决了这个问题。</p><p>理论上来说：</p><ul><li>悲观锁通常多用于写比较多的情况（多写场景，竞争激烈），这样可以避免频繁失败和重试影响性能，悲观锁的开销是固定的。不过，如果乐观锁解决了频繁失败和重试这个问题的话（比如<code>LongAdder</code>），也是可以考虑使用乐观锁的，要视实际情况而定。</li><li>乐观锁通常多用于写比较少的情况（多读场景，竞争较少），这样可以避免频繁加锁影响性能。不过，乐观锁主要针对的对象是单个共享变量（参考<code>java.util.concurrent.atomic</code>包下面的原子变量类）。</li></ul><h2 id="实现" tabindex="-1"><a class="header-anchor" href="#实现"><span>实现</span></a></h2><h3 id="cas-算法" tabindex="-1"><a class="header-anchor" href="#cas-算法"><span>CAS 算法</span></a></h3><p>CAS 的全称是 <strong>Compare And Swap（比较与交换）</strong> ，用于实现乐观锁，被广泛应用于各大框架中。CAS 的思想很简单，就是用一个预期值和要更新的变量值进行比较，两值相等才会进行更新。</p><p>CAS 是一个原子操作，底层依赖于一条 CPU 的原子指令。</p><blockquote><p><strong>原子操作</strong> 即最小不可拆分的操作，也就是说操作一旦开始，就不能被打断，直到操作完成。</p></blockquote><p>CAS 涉及到三个操作数：</p><ul><li><strong>V</strong> ：要更新的变量值(Var)</li><li><strong>E</strong> ：预期值(Expected)</li><li><strong>N</strong> ：拟写入的新值(New)</li></ul><p>当且仅当 V 的值等于 E 时，CAS 通过原子方式用新值 N 来更新 V 的值。如果不等，说明已经有其它线程更新了 V，则当前线程放弃更新。</p><p>当多个线程同时使用 CAS 操作一个变量时，只有一个会胜出，并成功更新，其余均会失败，但失败的线程并不会被挂起，仅是被告知失败，并且允许再次尝试，当然也允许失败的线程放弃操作。</p><h3 id="版本号机制" tabindex="-1"><a class="header-anchor" href="#版本号机制"><span>版本号机制</span></a></h3><p>在数据表中加上一个数据版本号 <code>version</code> 字段，表示数据被修改的次数。当数据被修改时，<code>version</code> 值会加一。当线程 A 要更新数据值时，在读取数据的同时也会读取 <code>version</code> 值，在提交更新时，若刚才读取到的 <code>version</code> 值为当前数据库中的 <code>version</code> 值相等时才更新，否则重试更新操作，直到更新成功。</p><p>这样就避免了线程 B 用基于 <code>version=1</code> 的旧数据修改的结果覆盖线程 A 的操作结果的可能。</p><h2 id="atomic-原子类" tabindex="-1"><a class="header-anchor" href="#atomic-原子类"><span>Atomic 原子类</span></a></h2><p>根据操作的数据类型，可以将 JUC 包中的原子类分为 4 类</p><p><strong>基本类型</strong></p><p>使用原子的方式更新基本类型</p><ul><li><code>AtomicInteger</code>：整型原子类</li><li><code>AtomicLong</code>：长整型原子类</li><li><code>AtomicBoolean</code>：布尔型原子类</li></ul><p><strong>数组类型</strong></p><p>使用原子的方式更新数组里的某个元素</p><ul><li><code>AtomicIntegerArray</code>：整型数组原子类</li><li><code>AtomicLongArray</code>：长整型数组原子类</li><li><code>AtomicReferenceArray</code>：引用类型数组原子类</li></ul><p><strong>引用类型</strong></p><ul><li><code>AtomicReference</code>：引用类型原子类</li><li><code>AtomicMarkableReference</code>：原子更新带有标记的引用类型。该类将 boolean 标记与引用关联起来。</li><li><code>AtomicStampedReference</code>：原子更新带有版本号的引用类型。该类将整数值与引用关联起来，可用于解决原子的更新数据和数据的版本号，可以解决使用 CAS 进行原子更新时可能出现的 ABA 问题。</li></ul><p><strong>对象的属性修改类型</strong></p><ul><li><code>AtomicIntegerFieldUpdater</code>：原子更新整型字段的更新器</li><li><code>AtomicLongFieldUpdater</code>：原子更新长整型字段的更新器</li><li><code>AtomicReferenceFieldUpdater</code>：原子更新引用类型里的字段</li></ul><h2 id="问题" tabindex="-1"><a class="header-anchor" href="#问题"><span>问题</span></a></h2><p>问题：</p><ol><li><p>ABA 问题</p><p>解决：时间戳/版本号，如 AtomicStampedReference</p><p>如果一个变量 V 初次读取的时候是 A 值，并且在准备赋值的时候检查到它仍然是 A 值，那我们就能说明它的值没有被其他线程修改过了吗？很明显是不能的，因为在这段时间它的值可能被改为其他值，然后又改回 A，那 CAS 操作就会误认为它从来没有被修改过。这个问题被称为 CAS 操作的 <strong>&quot;ABA&quot;问题。</strong></p><p>ABA 问题的解决思路是在变量前面追加上<strong>版本号或者时间戳</strong>。JDK 1.5 以后的 <code>AtomicStampedReference</code>类就是用来解决 ABA 问题的，其中的 <code>compareAndSet()</code> 方法就是首先检查当前引用是否等于预期引用，并且当前标志是否等于预期标志，如果全部相等，则以原子方式将该引用和该标志的值设置为给定的更新值。</p></li><li><p>循环时间长开销大</p><p>CAS 经常会用到自旋操作来进行重试，也就是不成功就一直循环执行直到成功。如果长时间不成功，会给 CPU 带来非常大的执行开销。</p><p>解决：CLH 降低粒度，或 AQS 改为阻塞</p></li><li><p>只能保证一个共享变量的原子操作</p></li></ol><p><code>AtomicStampedReference</code>：原子更新带有版本号的引用类型。该类将整数值与引用关联起来，可用于解决原子的更新数据和数据的版本号，可以解决使用 CAS 进行原子更新时可能出现的 ABA 问题。</p><h3 id="aba-问题" tabindex="-1"><a class="header-anchor" href="#aba-问题"><span>ABA 问题</span></a></h3><p>如果一个变量 V 初次读取的时候是 A 值，并且在准备赋值的时候检查到它仍然是 A 值，那我们就能说明它的值没有被其他线程修改过了吗？很明显是不能的，因为在这段时间它的值可能被改为其他值，然后又改回 A，那 CAS 操作就会误认为它从来没有被修改过。这个问题被称为 CAS 操作的 <strong>&quot;ABA&quot;问题</strong>。</p><p>ABA 问题的解决思路是在变量前面追加上<strong>版本号或者时间戳</strong>。JDK 1.5 以后的 <code>AtomicStampedReference</code> 类就是用来解决 ABA 问题的，其中的 <code>compareAndSet()</code> 方法就是首先检查当前引用是否等于预期引用，并且当前标志是否等于预期标志，如果全部相等，则以原子方式将该引用和该标志的值设置为给定的更新值。</p><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> boolean</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> compareAndSet</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">(</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">V</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">   expectedReference</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">                             V</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">   newReference</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">                             int</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> expectedStamp</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">                             int</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> newStamp) {</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">    Pair</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">V</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">&gt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> current </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> pair</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    return</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">        expectedReference </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">==</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> current</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">reference</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> &amp;&amp;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">        expectedStamp </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">==</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> current</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">stamp</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> &amp;&amp;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">        ((newReference </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">==</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> current</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">reference</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> &amp;&amp;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">          newStamp </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">==</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> current</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">stamp</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">) </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">||</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">         casPair</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">(current</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> Pair</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">of</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(newReference, newStamp)</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">))</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="只能保证一个共享变量的原子操作" tabindex="-1"><a class="header-anchor" href="#只能保证一个共享变量的原子操作"><span>只能保证一个共享变量的原子操作</span></a></h3><p>CAS 只对单个共享变量有效，当操作涉及跨多个共享变量时 CAS 无效。</p><p>但是从 JDK 1.5 开始，提供了<code>AtomicReference</code>类来保证引用对象之间的原子性，你可以把多个变量放在一个对象里来进行 CAS 操作。所以我们可以使用锁或者利用<code>AtomicReference</code>类把多个共享变量合并成一个共享变量来操作。</p><h3 id="循环时间长开销大" tabindex="-1"><a class="header-anchor" href="#循环时间长开销大"><span>循环时间长开销大</span></a></h3><p>CAS 经常会用到自旋操作来进行重试，也就是不成功就一直循环执行直到成功。如果长时间不成功，会给 CPU 带来非常大的执行开销。</p><p>如果 JVM 能支持处理器提供的 pause 指令那么效率会有一定的提升，pause 指令有两个作用：</p><ol><li>可以延迟流水线执行指令，使 CPU 不会消耗过多的执行资源，延迟的时间取决于具体实现的版本，在一些处理器上延迟时间是零。</li><li>可以避免在退出循环的时候因内存顺序冲而引起 CPU 流水线被清空，从而提高 CPU 的执行效率。</li></ol>`,48)]))}const d=s(l,[["render",t],["__file","乐观锁.html.vue"]]),c=JSON.parse(`{"path":"/se/lang/java/JUC/sync/lock/%E4%B9%90%E8%A7%82%E9%94%81.html","title":"乐观锁","lang":"en-US","frontmatter":{"description":"乐观锁 代表：AtomicInteger，使用 cas（Unsafe）来保证原子性 核心是：无需加锁，每次只有一个线程能够成功修改共享变量，其他失败的线程不需要停止，不断重复直至成功 由于线程一直运行，不需要阻塞，因此不涉及线程上下文切换 它需要多核 cpu 支持，且核心数不应超过 cpu 核数 乐观锁：假定没有冲突，在更新数据时比较发现不一致时，则读...","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/se/lang/java/JUC/sync/lock/%E4%B9%90%E8%A7%82%E9%94%81.html"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"乐观锁"}],["meta",{"property":"og:description","content":"乐观锁 代表：AtomicInteger，使用 cas（Unsafe）来保证原子性 核心是：无需加锁，每次只有一个线程能够成功修改共享变量，其他失败的线程不需要停止，不断重复直至成功 由于线程一直运行，不需要阻塞，因此不涉及线程上下文切换 它需要多核 cpu 支持，且核心数不应超过 cpu 核数 乐观锁：假定没有冲突，在更新数据时比较发现不一致时，则读..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-05-08T07:35:02.000Z"}],["meta",{"property":"article:modified_time","content":"2024-05-08T07:35:02.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"乐观锁\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-05-08T07:35:02.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[{"level":2,"title":"实现","slug":"实现","link":"#实现","children":[{"level":3,"title":"CAS 算法","slug":"cas-算法","link":"#cas-算法","children":[]},{"level":3,"title":"版本号机制","slug":"版本号机制","link":"#版本号机制","children":[]}]},{"level":2,"title":"Atomic 原子类","slug":"atomic-原子类","link":"#atomic-原子类","children":[]},{"level":2,"title":"问题","slug":"问题","link":"#问题","children":[{"level":3,"title":"ABA 问题","slug":"aba-问题","link":"#aba-问题","children":[]},{"level":3,"title":"只能保证一个共享变量的原子操作","slug":"只能保证一个共享变量的原子操作","link":"#只能保证一个共享变量的原子操作","children":[]},{"level":3,"title":"循环时间长开销大","slug":"循环时间长开销大","link":"#循环时间长开销大","children":[]}]}],"git":{"createdTime":1715153702000,"updatedTime":1715153702000,"contributors":[{"name":"刘大维","email":"davidliu@liudaweideMacBook-Pro.local","commits":1}]},"readingTime":{"minutes":7.35,"words":2204},"filePathRelative":"se/lang/java/JUC/sync/lock/乐观锁.md","localizedDate":"May 8, 2024","excerpt":"\\n<p>代表：AtomicInteger，使用 cas（Unsafe）来保证原子性</p>\\n<ul>\\n<li>核心是：无需加锁，每次只有一个线程能够成功修改共享变量，其他失败的线程不需要停止，不断重复直至成功</li>\\n<li>由于线程一直运行，不需要阻塞，因此不涉及线程上下文切换</li>\\n<li>它需要多核 cpu 支持，且核心数不应超过 cpu 核数</li>\\n</ul>\\n<hr>\\n<ol>\\n<li>乐观锁：假定没有冲突，在更新数据时比较发现不一致时，则读取新值修改后重试更新。（自旋锁就是一种乐观锁）</li>\\n<li>自旋锁：循环使用 cpu 时间，尝试 cas 操作直至成功返回 true，不然一直循环。（比较内存值与线程旧值是否一致，一致则更新，不然则循环）</li>\\n</ol>","autoDesc":true}`);export{d as comp,c as data};
