import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as i,d as o,o as n}from"./app-CybQbXIt.js";const a={};function r(c,e){return n(),i("div",null,e[0]||(e[0]=[o('<h1 id="inter-thread-communication" tabindex="-1"><a class="header-anchor" href="#inter-thread-communication"><span>Inter-Thread Communication</span></a></h1><p>Linux系统提供了五种用于线程通信的方式：</p><ul><li>互斥锁 Mutex</li><li>读写锁 Read-Write Locks</li><li>条件变量 Condition Variables</li><li>自旋锁 Spinlock</li><li>信号量 Semaphores</li></ul><p>互斥锁（Mutex）：互斥量(mutex)从本质上说是 一把锁，在访问共享资源前对互斥量进行加锁， 在访问完成后释放互斥量上的锁。对互斥量进行 加锁以后，任何其他试图再次对互斥锁加锁的线 程将会阻塞直到当前线程释放该互斥锁。如果释 放互斥锁时有多个线程阻塞，所有在该互斥锁上 的阻塞线程都会变成可运行状态，第一个变为运 行状态的线程可以对互斥锁加锁，其他线程将会 看到互斥锁依然被锁住，只能回去再次等待它重 新变为可用。</p><p>条件变量（Condition Variables）：条件变量 (cond)是在多线程程序中用来实现&quot;等待--》唤 醒&quot;逻辑常用的方法。条件变量利用线程间共享的 全局变量进行同步的一种机制，主要包括两个动 作：一个线程等待&quot;条件变量的条件成立&quot;而挂起； 另一个线程使“条件成立”。为了防止竞争，条件变 量的使用总是和一个互斥锁结合在一起。线程在 改变条件状态前必须首先锁住互斥量，函数</p><p>自旋锁（Spinlock）：自旋锁通过 CPU 提供的 CAS 函数（Compare And Swap），在「用户态」 完成加锁和解锁操作，不会主动产生线程上下文 切换，所以相比互斥锁来说，会快一些，开销也 小一些。一般加锁的过程，包含两个步骤：第一 步，查看锁的状态，如果锁是空闲的，则执行第 二步；第二步，将锁设置为当前线程持有；使用 自旋锁的时候，当发生多线程竞争锁的情况，加 锁失败的线程会「忙等待」，直到它拿到锁。CAS 函数就把这两个步骤合并成一条硬件级指令，形 成原子指令，这样就保证了这两个步骤是不可分 割的，要么一次性执行完两个步骤，要么两个步 骤都不执行。这里的「忙等待」可以用 while 循环 等待实现，不过最好是使用 CPU 提供的 PAUSE 指 令来实现「忙等待」，因为可以减少循环等待时 的耗电量。</p><p>信号量（Semaphores）：信号量可以是命名的 （有名信号量）或无名的（仅限于当前进程内的 线程），用于控制对资源的访问次数。通常信号 量表示资源的数量，对应的变量是一个整型 （sem）变量。另外，还有两个原子操作的系统调 用函数来控制信号量的，分别是：P 操作：将 sem 减 1，相减后，如果 sem &lt; 0，则进程/线程 进入阻塞等待，否则继续，表明 P 操作可能会阻 塞；V 操作：将 sem 加 1，相加后，如果 sem &lt;= 0，唤醒一个等待中的进程/线程，表明 V 操作不 会阻塞；</p><p>读写锁（Read-Write Locks）：读写锁从字面意思 我们也可以知道，它由「读锁」和「写锁」两部 分构成，如果只读取共享资源用「读锁」加锁， 如果要修改共享资源则用「写锁」加锁。所以， 读写锁适用于能明确区分读操作和写操作的场 景。读写锁的工作原理是：当「写锁」没有被线 程持有时，多个线程能够并发地持有读锁，这大 大提高了共享资源的访问效率，因为「读锁」是 用于读取共享资源的场景，所以多个线程同时持 有读锁也不会破坏共享资源的数据。但是，一旦</p><p>刻只能有一个线程持有写锁，类似互斥锁和自 旋锁，而读锁是共享锁，因为读锁可以被多个线 程同时持有。知道了读写锁的工作原理后，我们 可以发现，读写锁在读多写少的场景，能发挥出 优势。</p>',9)]))}const s=t(a,[["render",r],["__file","itc.html.vue"]]),m=JSON.parse(`{"path":"/cs/basic/os/process/itc.html","title":"Inter-Thread Communication","lang":"en-US","frontmatter":{"description":"Inter-Thread Communication Linux系统提供了五种用于线程通信的方式： 互斥锁 Mutex 读写锁 Read-Write Locks 条件变量 Condition Variables 自旋锁 Spinlock 信号量 Semaphores 互斥锁（Mutex）：互斥量(mutex)从本质上说是 一把锁，在访问共享资源前对互斥...","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/cs/basic/os/process/itc.html"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"Inter-Thread Communication"}],["meta",{"property":"og:description","content":"Inter-Thread Communication Linux系统提供了五种用于线程通信的方式： 互斥锁 Mutex 读写锁 Read-Write Locks 条件变量 Condition Variables 自旋锁 Spinlock 信号量 Semaphores 互斥锁（Mutex）：互斥量(mutex)从本质上说是 一把锁，在访问共享资源前对互斥..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-11-22T03:06:21.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-22T03:06:21.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Inter-Thread Communication\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-22T03:06:21.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[],"git":{"createdTime":1732244781000,"updatedTime":1732244781000,"contributors":[{"name":"David Liu","email":"liudawei@seas.upenn.edu","commits":1}]},"readingTime":{"minutes":3.53,"words":1058},"filePathRelative":"cs/basic/os/process/itc.md","localizedDate":"November 22, 2024","excerpt":"\\n<p>Linux系统提供了五种用于线程通信的方式：</p>\\n<ul>\\n<li>互斥锁 Mutex</li>\\n<li>读写锁 Read-Write Locks</li>\\n<li>条件变量 Condition Variables</li>\\n<li>自旋锁 Spinlock</li>\\n<li>信号量 Semaphores</li>\\n</ul>\\n<p>互斥锁（Mutex）：互斥量(mutex)从本质上说是 一把锁，在访问共享资源前对互斥量进行加锁， 在访问完成后释放互斥量上的锁。对互斥量进行 加锁以后，任何其他试图再次对互斥锁加锁的线 程将会阻塞直到当前线程释放该互斥锁。如果释 放互斥锁时有多个线程阻塞，所有在该互斥锁上 的阻塞线程都会变成可运行状态，第一个变为运 行状态的线程可以对互斥锁加锁，其他线程将会 看到互斥锁依然被锁住，只能回去再次等待它重 新变为可用。</p>","autoDesc":true}`);export{s as comp,m as data};
