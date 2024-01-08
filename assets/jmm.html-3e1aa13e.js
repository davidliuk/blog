import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as r,c as a,d as o}from"./app-9107e99b.js";const n={},s=o('<h1 id="jmm" tabindex="-1"><a class="header-anchor" href="#jmm" aria-hidden="true">#</a> JMM</h1><p>JMM(Java 内存模型)主要定义了对于一个共享变量，当另一个线程对这个共享变量执行写操作后，这个线程对这个共享变量的可见性。</p><h3 id="jmm-是如何抽象线程和主内存之间的关系" tabindex="-1"><a class="header-anchor" href="#jmm-是如何抽象线程和主内存之间的关系" aria-hidden="true">#</a> JMM 是如何抽象线程和主内存之间的关系？</h3><p><strong>Java 内存模型（JMM）</strong> 抽象了线程和主内存之间的关系，就比如说线程之间的共享变量必须存储在主内存中。</p><p>在 JDK1.2 之前，Java 的内存模型实现总是从 <strong>主存</strong> （即共享内存）读取变量，是不需要进行特别的注意的。而在当前的 Java 内存模型下，线程可以把变量保存 <strong>本地内存</strong> （比如机器的寄存器）中，而不是直接在主存中进行读写。这就可能造成一个线程在主存中修改了一个变量的值，而另外一个线程还继续使用它在寄存器中的变量值的拷贝，造成数据的不一致。</p><p>这和我们上面讲到的 CPU 缓存模型非常相似。</p><p><strong>什么是主内存？什么是本地内存？</strong></p><ul><li><strong>主内存</strong> ：所有线程创建的实例对象都存放在主内存中，不管该实例对象是成员变量还是方法中的本地变量(也称局部变量)</li><li><strong>本地内存</strong> ：每个线程都有一个私有的本地内存来存储共享变量的副本，并且，每个线程只能访问自己的本地内存，无法访问其他线程的本地内存。本地内存是 JMM 抽象出来的一个概念，存储了主内存中的共享变量副本。</li></ul><p>Java 内存模型的抽象示意图如下：</p><h2 id="指令重排序" tabindex="-1"><a class="header-anchor" href="#指令重排序" aria-hidden="true">#</a> 指令重排序</h2><p>说完了 CPU 缓存模型，我们再来看看另外一个比较重要的概念 <strong>指令重排序</strong> 。</p><p>为了提升执行速度/性能，计算机在执行程序代码的时候，会对指令进行重排序。</p><p><strong>什么是指令重排序？</strong> 简单来说就是系统在执行代码的时候并不一定是按照你写的代码的顺序依次执行。</p><p>常见的指令重排序有下面 2 种情况：</p><ul><li><strong>编译器优化重排</strong> ：编译器（包括 JVM、JIT 编译器等）在不改变单线程程序语义的前提下，重新安排语句的执行顺序。</li><li><strong>指令并行重排</strong> ：现代处理器采用了指令级并行技术(Instruction-Level Parallelism，ILP)来将多条指令重叠执行。如果不存在数据依赖性，处理器可以改变语句对应机器指令的执行顺序。</li></ul><p>另外，内存系统也会有“重排序”，但又不是真正意义上的重排序。在 JMM 里表现为主存和本地内存的内容可能不一致，进而导致程序在多线程下执行可能出现问题。</p><p>Java 源代码会经历 <strong>编译器优化重排 —&gt; 指令并行重排 —&gt; 内存系统重排</strong> 的过程，最终才变成操作系统可执行的指令序列。</p><p><strong>指令重排序可以保证串行语义一致，但是没有义务保证多线程间的语义也一致</strong> ，所以在多线程下，指令重排序可能会导致一些问题。</p><p>编译器和处理器的指令重排序的处理方式不一样。对于编译器，通过禁止特定类型的编译器重排序的方式来禁止重排序。对于处理器，通过插入内存屏障（Memory Barrier，或有时叫做内存栅栏，Memory Fence）的方式来禁止特定类型的处理器重排序。指令并行重排和内存系统重排都属于是处理器级别的指令重排序。</p><blockquote><p>内存屏障（Memory Barrier，或有时叫做内存栅栏，Memory Fence）是一种 CPU 指令，用来禁止处理器指令发生重排序（像屏障一样），从而保障指令执行的有序性。另外，为了达到屏障的效果，它也会使处理器写入、读取值之前，将主内存的值写入高速缓存，清空无效队列，从而保障变量的可见性。</p></blockquote><h2 id="happens-before" tabindex="-1"><a class="header-anchor" href="#happens-before" aria-hidden="true">#</a> happens-before</h2><p><strong>happens-before 原则表达的意义其实并不是一个操作发生在另外一个操作的前面，虽然这从程序员的角度上来说也并无大碍。更准确地来说，它更想表达的意义是前一个操作的结果对于后一个操作是可见的，无论这两个操作是否在同一个线程里。</strong></p><p>举个例子：操作 1 happens-before 操作 2，即使操作 1 和操作 2 不在同一个线程内，JMM 也会保证操作 1 的结果对操作 2 是可见的。</p><h3 id="happens-before-常见规则种类" tabindex="-1"><a class="header-anchor" href="#happens-before-常见规则种类" aria-hidden="true">#</a> happens-before 常见规则种类</h3><p>happens-before 的规则就 8 条，说多不多，重点了解下面列举的 5 条即可。全记是不可能的，很快就忘记了，意义不大，随时查阅即可。</p><ol><li><strong>程序顺序规则</strong> ：一个线程内，按照代码顺序，书写在前面的操作 happens-before 于书写在后面的操作；</li><li><strong>解锁规则</strong> ：解锁 happens-before 于加锁；</li><li><strong>volatile 变量规则</strong> ：对一个 volatile 变量的写操作 happens-before 于后面对这个 volatile 变量的读操作。说白了就是对 volatile 变量的写操作的结果对于发生于其后的任何操作都是可见的。</li><li><strong>传递规则</strong> ：如果 A happens-before B，且 B happens-before C，那么 A happens-before C；</li><li><strong>线程启动规则</strong> ：Thread 对象的 <code>start()</code>方法 happens-before 于此线程的每一个动作。</li></ol><p>如果两个操作不满足上述任意一个 happens-before 规则，那么这两个操作就没有顺序的保障，JVM 可以对这两个操作进行重排序。</p><p><img src="https://cdn.jsdelivr.net/gh/davidliuk/images@master/blog/image-20220731084604667.png" alt="happens-before 与 JMM 的关系" loading="lazy"></p>',28),t=[s];function p(i,l){return r(),a("div",null,t)}const d=e(n,[["render",p],["__file","jmm.html.vue"]]);export{d as default};
