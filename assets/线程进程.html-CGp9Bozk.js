import{_ as p}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as e,d as o,o as l}from"./app-B6s9NXTg.js";const i={};function n(r,t){return l(),e("div",null,t[0]||(t[0]=[o('<h1 id="线程进程" tabindex="-1"><a class="header-anchor" href="#线程进程"><span>线程进程</span></a></h1><ul><li><p><strong>进程（Process）</strong> 是指计算机中正在运行的一个程序实例。</p><p>举例：你打开的微信就是一个进程。</p></li><li><p><strong>线程（Thread）</strong> 也被称为轻量级进程，更加轻量。多个线程可以在同一个进程中同时执行，并且共享进程的资源比如内存空间、文件句柄、网络连接等。</p><p>同一个进程内多个线程之间可以共享代码段、数据段、打开的文件等资源，但每个线程各自都有一套独立的寄存器和栈，这样可以确保线程的控制流是相对独立的。</p><p>举例：你打开的微信里就有一个线程专门用来拉取别人发你的最新的消息。</p></li></ul><p><strong>线程是调度的基本单位，而进程则是资源拥有的基本单位</strong>。</p><p>所以，所谓操作系统的任务调度，实际上的调度对象是线程，而进程只是给线程提供了虚拟内存、全局变量等资源。</p><p>对于线程和进程，我们可以这么理解：</p><ul><li>当进程只有一个线程时，可以认为进程就等于线程；</li><li>当进程拥有多个线程时，这些线程会共享相同的虚拟内存和全局变量等资源，这些资源在上下文切换时是不需要修改的；</li></ul><p>另外，线程也有自己的私有数据，比如栈和寄存器等，这些在上下文切换时也是需要保存的。</p><blockquote><p>线程上下文切换的是什么？</p></blockquote><p>这还得看线程是不是属于同一个进程：</p><ul><li>当两个线程不是属于同一个进程，则切换的过程就跟进程上下文切换一样；</li><li><strong>当两个线程是属于同一个进程，因为虚拟内存是共享的，所以在切换时，虚拟内存这些资源就保持不动，只需要切换线程的私有数据、寄存器等不共享的数据</strong>；</li></ul><p>所以，线程的上下文切换相比进程，开销要小很多。</p><h2 id="进程" tabindex="-1"><a class="header-anchor" href="#进程"><span>进程</span></a></h2><h3 id="pcb" tabindex="-1"><a class="header-anchor" href="#pcb"><span>PCB</span></a></h3><p><strong>PCB（Process Control Block）</strong> 即进程控制块，是操作系统中用来管理和跟踪进程的数据结构，每个进程都对应着一个独立的 PCB。你可以将 PCB 视为进程的大脑。</p><p>当操作系统创建一个新进程时，会为该进程分配一个唯一的进程 ID，并且为该进程创建一个对应的进程控制块。当进程执行时，PCB 中的信息会不断变化，操作系统会根据这些信息来管理和调度进程。</p><p>PCB 主要包含下面几部分的内容：</p><ul><li>进程的描述信息，包括进程的名称、标识符等等；</li><li>进程的调度信息，包括进程阻塞原因、进程状态（就绪、运行、阻塞等）、进程优先级（标识进程的重要程度）等等；</li><li>进程对资源的需求情况，包括 CPU 时间、内存空间、I/O 设备等等。</li><li>进程打开的文件信息，包括文件描述符、文件类型、打开模式等等。</li><li>处理机的状态信息（由处理机的各种寄存器中的内容组成的），包括通用寄存器、指令计数器、程序状态字 PSW、用户栈指针。</li><li>……</li></ul><h3 id="进程通信-ipc" tabindex="-1"><a class="header-anchor" href="#进程通信-ipc"><span>进程通信 IPC</span></a></h3><p>由于每个进程的用户空间都是独立的，不能相互访问，这时就需要借助内核空间来实现进程间通信，原因很简单，每个进程都是共享一个内核空间。</p><ol><li><p>管道</p><ul><li><p>匿名管道<code>|</code></p><p>用于具有亲缘关系的父子进程间或者兄弟进程之间的通信。</p></li><li><p>命名管道<code>mkfifo</code></p><p>匿名管道由于没有名字，只能用于亲缘关系的进程间通信。为了克服这个缺点，提出了有名管道。有名管道严格遵循 <strong>先进先出(First In First Out)</strong> 。有名管道以磁盘文件的方式存在，可以实现本机任意两个进程通信。</p></li></ul></li><li><p>消息队列</p><p>消息队列是消息的链表,具有特定的格式,存放在内存中并由消息队列标识符标识。管道和消息队列的通信数据都是先进先出的原则。与管道（无名管道：只存在于内存中的文件；命名管道：存在于实际的磁盘介质或者文件系统）不同的是消息队列存放在内核中，只有在内核重启(即，操作系统重启)或者显式地删除一个消息队列时，该消息队列才会被真正的删除。消息队列可以实现消息的随机查询,消息不一定要以先进先出的次序读取,也可以按消息的类型读取.比 FIFO 更有优势。<strong>消息队列克服了信号承载信息量少，管道只能承载无格式字节流以及缓冲区大小受限等缺点。</strong></p></li><li><p><strong>共享内存</strong> Shared Memory</p><p>使得多个进程可以访问同一块内存空间，不同进程可以及时看到对方进程中对共享内存中数据的更新。<strong>共享内存</strong>可以解决消息队列通信中用户态与内核态之间数据拷贝过程带来的开销，<strong>它直接分配一个共享空间，每个进程都可以直接访问</strong>，就像访问进程自己的空间一样快捷方便，不需要陷入内核态或者系统调用，大大提高了通信的速度，享有<strong>最快</strong>的进程间通信方式之名。但是便捷高效的共享内存通信，<strong>带来新的问题，多进程竞争同个共享资源会造成数据的错乱。</strong></p><p>这种方式需要依靠某种同步操作，如互斥锁和信号量等。可以说这是最有用的进程间通信方式。</p><ol><li><p>信号量 <strong>Semaphores</strong></p><p>信号量是一个计数器，用于多进程对共享数据的访问，信号量的意图在于进程间同步。这种通信方式主要用于解决与同步相关的问题并避免竞争条件。</p><p><strong>信号量其实是一个整型的计数器，主要用于实现进程间的互斥与同步，而不是用于缓存进程间通信的数据</strong>。</p><p>信号量表示资源的数量，控制信号量的方式有两种原子操作：</p><ul><li><strong>P 操作</strong>，这个操作会把信号量减去 1，相减后如果信号量 &lt; 0，则表明资源已被占用，进程需阻塞等待；相减后如果信号量 &gt;= 0，则表明还有资源可使用，进程可正常继续执行。</li><li><strong>V 操作</strong>，这个操作会把信号量加上 1，相加后如果信号量 &lt;= 0，则表明当前有阻塞中的进程，于是会将该进程唤醒运行；相加后如果信号量 &gt; 0，则表明当前没有阻塞中的进程；</li></ul><p>P 操作是用在进入共享资源之前，V 操作是用在离开共享资源之后，这两个操作是必须成对出现的。</p><p>接下来，举个例子，如果要使得两个进程互斥访问共享内存，我们可以初始化信号量为 <code>1</code>。</p><p>同步信号量，0</p></li><li><p>互斥量</p><p>1</p></li><li><p>条件变量</p></li><li><p>读写锁</p></li></ol></li><li><p>信号 Signal</p><p>信号是一种比较复杂的通信方式，用于通知接收进程某个事件已经发生</p><p>上面说的进程间通信，都是常规状态下的工作模式。<strong>对于异常情况下的工作模式，就需要用「信号」的方式来通知进程。</strong></p><p>信号事件的来源主要有硬件来源（如键盘 Cltr+C ）和软件来源（如 kill 命令）。</p><p>信号是进程间通信机制中<strong>唯一的异步通信机制</strong>，因为可以在任何时候发送信号给某一进程，一旦有信号产生，我们就有下面这几种，用户进程对信号的处理方式。</p><ol><li><p>执行默认操作。Linux 对每种信号都规定了默认操作，例如，上面列表中的 SIGTERM 信号，就是终止进程的意思。</p></li><li><p>捕捉信号。我们可以为信号定义一个信号处理函数。当信号发生时，我们就执行相应的信号处理函数。</p></li><li><p>忽略信号。当我们不希望处理某些信号的时候，就可以忽略该信号，不做任何处理。有两个信号是应用进程无法捕捉和忽略的，即 <code>SIGKILL</code> 和 <code>SEGSTOP</code>，它们用于在任何时候中断或结束某一进程。</p></li></ol></li><li><p>套接字 Socket</p><p>此方法主要用于在客户端和服务器之间通过网络进行通信。套接字是支持 TCP/IP 的网络通信的基本操作单元，可以看做是不同主机之间的进程进行双向通信的端点，简单的说就是通信的两方的一种约定，用套接字中的相关函数来完成通信过程。</p><p>Socket 不仅可以跨网络与不同主机的进程间通信，还可以在同主机上进程间通信。</p></li></ol><h4 id="管道" tabindex="-1"><a class="header-anchor" href="#管道"><span>管道</span></a></h4><h4 id="消息队列" tabindex="-1"><a class="header-anchor" href="#消息队列"><span>消息队列</span></a></h4><p>前面说到管道的通信方式是效率低的，因此管道不适合进程间频繁地交换数据。</p><p>对于这个问题，<strong>消息队列</strong>的通信模式就可以解决。比如，A 进程要给 B 进程发送消息，A 进程把数据放在对应的消息队列后就可以正常返回了，B 进程需要的时候再去读取数据就可以了。同理，B 进程要给 A 进程发送消息也是如此。</p><p>再来，<strong>消息队列是保存在内核中的消息链表</strong>，在发送数据时，会分成一个一个独立的数据单元，也就是消息体（数据块），消息体是用户自定义的数据类型，消息的发送方和接收方要约定好消息体的数据类型，所以每个消息体都是固定大小的存储块，不像管道是无格式的字节流数据。如果进程从消息队列中读取了消息体，内核就会把这个消息体删除。</p><p>消息队列生命周期随内核，如果没有释放消息队列或者没有关闭操作系统，消息队列会一直存在，而前面提到的匿名管道的生命周期，是随进程的创建而建立，随进程的结束而销毁。</p><h4 id="信号量" tabindex="-1"><a class="header-anchor" href="#信号量"><span>信号量</span></a></h4><p>用了共享内存通信方式，带来新的问题，那就是如果多个进程同时修改同一个共享内存，很有可能就冲突了。例如两个进程都同时写一个地址，那先写的那个进程会发现内容被别人覆盖了。</p><p>为了防止多进程竞争共享资源，而造成的数据错乱，所以需要保护机制，使得共享的资源，在任意时刻只能被一个进程访问。正好，<strong>信号量</strong>就实现了这一保护机制。</p><p><strong>信号量其实是一个整型的计数器，主要用于实现进程间的互斥与同步，而不是用于缓存进程间通信的数据</strong>。</p><p>信号量表示资源的数量，控制信号量的方式有两种原子操作：</p><ul><li>一个是 <strong>P 操作</strong>，这个操作会把信号量减去 1，相减后如果信号量 &lt; 0，则表明资源已被占用，进程需阻塞等待；相减后如果信号量 &gt;= 0，则表明还有资源可使用，进程可正常继续执行。</li><li>另一个是 <strong>V 操作</strong>，这个操作会把信号量加上 1，相加后如果信号量 &lt;= 0，则表明当前有阻塞中的进程，于是会将该进程唤醒运行；相加后如果信号量 &gt; 0，则表明当前没有阻塞中的进程；</li></ul><p>P 操作是用在进入共享资源之前，V 操作是用在离开共享资源之后，这两个操作是必须成对出现的。</p><p>接下来，举个例子，如果要使得两个进程互斥访问共享内存，我们可以初始化信号量为 <code>1</code>。</p><p>itc</p><ul><li>共享内存 volatile</li><li>信号量 AQS</li><li>锁、条件变量</li></ul><h3 id="进程死亡" tabindex="-1"><a class="header-anchor" href="#进程死亡"><span>进程死亡</span></a></h3><p>在 Unix/Linux 系统中，子进程通常是通过 fork()系统调用创建的，该调用会创建一个新的进程，该进程是原有进程的一个副本。子进程和父进程的运行是相互独立的，它们各自拥有自己的 PCB，即使父进程结束了，子进程仍然可以继续运行。</p><p>当一个进程调用 exit()系统调用结束自己的生命时，内核会释放该进程的所有资源，包括打开的文件、占用的内存等，但是该进程对应的 PCB 依然存在于系统中。这些信息只有在父进程调用 wait()或 waitpid()系统调用时才会被释放，以便让父进程得到子进程的状态信息。</p><p>这样的设计可以让父进程在子进程结束时得到子进程的状态信息，并且可以防止出现“僵尸进程”（即子进程结束后 PCB 仍然存在但父进程无法得到状态信息的情况）。</p><ul><li><strong>僵尸进程</strong>：子进程已经终止，但是其父进程仍在运行，且父进程没有调用 wait()或 waitpid()等系统调用来获取子进程的状态信息，释放子进程占用的资源，导致子进程的 PCB 依然存在于系统中，但无法被进一步使用。这种情况下，子进程被称为“僵尸进程”。避免僵尸进程的产生，父进程需要及时调用 wait()或 waitpid()系统调用来回收子进程。</li><li><strong>孤儿进程</strong>：一个进程的父进程已经终止或者不存在，但是该进程仍在运行。这种情况下，该进程就是孤儿进程。孤儿进程通常是由于父进程意外终止或未及时调用 wait()或 waitpid()等系统调用来回收子进程导致的。为了避免孤儿进程占用系统资源，操作系统会将孤儿进程的父进程设置为 init 进程（进程号为 1），由 init 进程来回收孤儿进程的资源。</li></ul><h2 id="死锁" tabindex="-1"><a class="header-anchor" href="#死锁"><span>死锁</span></a></h2><p>死锁（Deadlock）描述的是这样一种情况：多个进程/线程同时被阻塞，它们中的一个或者全部都在等待某个资源被释放。由于进程/线程被无限期地阻塞，因此程序不可能正常终止。</p><p>假设有两个进程 A 和 B，以及两个资源 X 和 Y，它们的分配情况如下：</p><table><thead><tr><th>进程</th><th>占用资源</th><th>需求资源</th></tr></thead><tbody><tr><td>A</td><td>X</td><td>Y</td></tr><tr><td>B</td><td>Y</td><td>X</td></tr></tbody></table><p>此时，进程 A 占用资源 X 并且请求资源 Y，而进程 B 已经占用了资源 Y 并请求资源 X。两个进程都在等待对方释放资源，无法继续执行，陷入了死锁状态。</p><h3 id="产生死锁必要条件" tabindex="-1"><a class="header-anchor" href="#产生死锁必要条件"><span>产生死锁必要条件</span></a></h3><ol><li><strong>互斥</strong>：资源必须处于非共享模式，即一次只有一个进程可以使用。如果另一进程申请该资源，那么必须等待直到该资源被释放为止。</li><li><strong>占有并等待</strong>：一个进程至少应该占有一个资源，并等待另一资源，而该资源被其他进程所占有。</li><li><strong>非抢占</strong>：资源不能被抢占。只能在持有资源的进程完成任务后，该资源才会被释放。</li><li><strong>循环等待</strong>：有一组等待进程 <code>{P0, P1,..., Pn}</code>， <code>P0</code> 等待的资源被 <code>P1</code> 占有，<code>P1</code> 等待的资源被 <code>P2</code> 占有，……，<code>Pn-1</code> 等待的资源被 <code>Pn</code> 占有，<code>Pn</code> 等待的资源被 <code>P0</code> 占有。</li></ol><p><strong>注意 ⚠️</strong>：这四个条件是产生死锁的 <strong>必要条件</strong> ，也就是说只要系统发生死锁，这些条件必然成立，而只要上述条件之一不满足，就不会发生死锁。</p><p>下面是百度百科对必要条件的解释：</p><blockquote><p>如果没有事物情况 A，则必然没有事物情况 B，也就是说如果有事物情况 B 则一定有事物情况 A，那么 A 就是 B 的必要条件。从逻辑学上看，B 能推导出 A，A 就是 B 的必要条件，等价于 B 是 A 的充分条件。</p></blockquote><p>银行家算法</p>',52)]))}const d=p(i,[["render",n],["__file","线程进程.html.vue"]]),c=JSON.parse(`{"path":"/cs/basic/os/process/%E7%BA%BF%E7%A8%8B%E8%BF%9B%E7%A8%8B.html","title":"线程进程","lang":"en-US","frontmatter":{"description":"线程进程 进程（Process） 是指计算机中正在运行的一个程序实例。 举例：你打开的微信就是一个进程。 线程（Thread） 也被称为轻量级进程，更加轻量。多个线程可以在同一个进程中同时执行，并且共享进程的资源比如内存空间、文件句柄、网络连接等。 同一个进程内多个线程之间可以共享代码段、数据段、打开的文件等资源，但每个线程各自都有一套独立的寄存器和栈...","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/cs/basic/os/process/%E7%BA%BF%E7%A8%8B%E8%BF%9B%E7%A8%8B.html"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"线程进程"}],["meta",{"property":"og:description","content":"线程进程 进程（Process） 是指计算机中正在运行的一个程序实例。 举例：你打开的微信就是一个进程。 线程（Thread） 也被称为轻量级进程，更加轻量。多个线程可以在同一个进程中同时执行，并且共享进程的资源比如内存空间、文件句柄、网络连接等。 同一个进程内多个线程之间可以共享代码段、数据段、打开的文件等资源，但每个线程各自都有一套独立的寄存器和栈..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-06-27T01:21:47.000Z"}],["meta",{"property":"article:modified_time","content":"2024-06-27T01:21:47.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"线程进程\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-06-27T01:21:47.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[{"level":2,"title":"进程","slug":"进程","link":"#进程","children":[{"level":3,"title":"PCB","slug":"pcb","link":"#pcb","children":[]},{"level":3,"title":"进程通信 IPC","slug":"进程通信-ipc","link":"#进程通信-ipc","children":[]},{"level":3,"title":"进程死亡","slug":"进程死亡","link":"#进程死亡","children":[]}]},{"level":2,"title":"死锁","slug":"死锁","link":"#死锁","children":[{"level":3,"title":"产生死锁必要条件","slug":"产生死锁必要条件","link":"#产生死锁必要条件","children":[]}]}],"git":{"createdTime":1715153702000,"updatedTime":1719451307000,"contributors":[{"name":"刘大维","email":"davidliu@liudaweideMacBook-Pro.local","commits":2}]},"readingTime":{"minutes":14.01,"words":4202},"filePathRelative":"cs/basic/os/process/线程进程.md","localizedDate":"May 8, 2024","excerpt":"\\n<ul>\\n<li>\\n<p><strong>进程（Process）</strong> 是指计算机中正在运行的一个程序实例。</p>\\n<p>举例：你打开的微信就是一个进程。</p>\\n</li>\\n<li>\\n<p><strong>线程（Thread）</strong> 也被称为轻量级进程，更加轻量。多个线程可以在同一个进程中同时执行，并且共享进程的资源比如内存空间、文件句柄、网络连接等。</p>\\n<p>同一个进程内多个线程之间可以共享代码段、数据段、打开的文件等资源，但每个线程各自都有一套独立的寄存器和栈，这样可以确保线程的控制流是相对独立的。</p>\\n<p>举例：你打开的微信里就有一个线程专门用来拉取别人发你的最新的消息。</p>\\n</li>\\n</ul>","autoDesc":true}`);export{d as comp,c as data};
