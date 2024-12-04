import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as i,d as n,o as a}from"./app-CybQbXIt.js";const t={};function l(p,s){return a(),i("div",null,s[0]||(s[0]=[n(`<h1 id="inter-process-communication" tabindex="-1"><a class="header-anchor" href="#inter-process-communication"><span>Inter-Process Communication</span></a></h1><p>进程通信</p><h2 id="types-of-process" tabindex="-1"><a class="header-anchor" href="#types-of-process"><span>Types of Process</span></a></h2><ul><li>Independent process</li><li>Co-operating process</li></ul><p>An independent process is not affected by the execution of other processes while a co-operating process can be affected by other executing processes. Though one can think that those processes, which are running independently, will execute very efficiently, in reality, there are many situations when cooperative nature can be utilized for increasing computational speed, convenience, and modularity. Inter-process communication (IPC) is a mechanism that allows processes to communicate with each other and synchronize their actions. The communication between these processes can be seen as a method of cooperation between them. Processes can communicate with each other through both:<br> Methods of IPC</p><p>由于每个进程的用户空间都是独立的，不能相互访问，这时就需要借助内核空间来实现进程间通信，原因很简单，每个进程都是共享一个内核空间。</p><ul><li>Shared Memory</li><li>Message Passing</li><li>Synchronous and Asynchronous Message Passing</li></ul><h2 id="管道-pipe" tabindex="-1"><a class="header-anchor" href="#管道-pipe"><span>管道 Pipe</span></a></h2><ul><li><p>匿名管道 <code>|</code> Anonymous Pipe</p><p>用于具有亲缘关系的父子进程间或者兄弟进程之间的通信。</p></li><li><p>命名管道 <code>mkfifo</code> Named Pipes</p><p>匿名管道由于没有名字，只能用于亲缘关系的进程间通信。为了克服这个缺点，提出了有名管道。有名管道严格遵循 <strong>先进先出(First In First Out)</strong> 。有名管道以磁盘文件的方式存在，可以实现本机任意两个进程通信。</p></li></ul><p>所以说，在shell里通过「<code>|</code>」匿名管道将多个命令连接在 一起，实际上也就是创建了多个子进程，那么在我们编写 shell脚本时，能使用一个管道搞定的事情，就不要多用一个 管道，这样可以减少创建子进程的系统开销。</p><p>我们可以得知，对于名管道，它的通信范围是存在父子关 系的进程。因为管道没有实体，也就是没有管道文件，只能通过fork来复制父进程fd文件描述符，来达到通信的目的。</p><p>另外，对于命名管道，它可以在不相关的进程间也能相互通 信。因为命令管道，提前创建了一个类型为管道的设备文 件，在进程里只要使用这个设备文件，就可以相互通信。</p><p>不管是匿名管道还是命名管道，进程写入的数据都是缓存在 内核中，另一个进程读取数据时候自然也是从内核中获取， 同时通信数据都遵循先进先出原则，不支持<code>lseek</code>之类的文件定位操作。</p><h2 id="消息队列-message-queue" tabindex="-1"><a class="header-anchor" href="#消息队列-message-queue"><span>消息队列 Message Queue</span></a></h2><p>消息队列是消息的链表,具有特定的格式,存放在内存中并由消息队列标识符标识。管道和消息队列的通信数据都是先进先出的原则。与管道（无名管道：只存在于内存中的文件；命名管道：存在于实际的磁盘介质或者文件系统）不同的是消息队列存放在内核中，只有在内核重启(即，操作系统重启)或者显式地删除一个消息队列时，该消息队列才会被真正的删除。消息队列可以实现消息的随机查询,消息不一定要以先进先出的次序读取,也可以按消息的类型读取.比 FIFO 更有优势。<strong>消息队列克服了信号承载信息量少，管道只能承载无格式字节流以及缓冲区大小受限等缺点。</strong></p><p>消息队列克服了管道通信的数据是无格式的字节流的 问题，消息队列实际上是保存在内核的「消息链表」，消息队列的消息体是可以用户自定义的数据类型，发送数据时，会被分成一个一个独立的消息体， 当然接收数据时，也要与发送方发送的消息体的数据 类型保持一致，这样才能保证读取的数据是正确的。 消息队列通信的速度不是最及时的，毕竟每次数据的写入和读取都需要经过用户态与内核态之间的拷贝过程。</p><p>消息这种模型，两个进程之间的通信就像平时发邮件 一样，你来一封，我回一封，可以频繁沟通了。 但邮件的通信方式存在不足的地方有两点，一是通信 不及时，二是附件也有大小限制，这同样也是消息队 列通信不足的点。 消息队列不适合比较大数据的传输，因为在内核中每 个消息体都有一个最大长度的限制，同时所有队列所 包含的全部消息体的总长度也是有上限。在 Linux 内核中，会有两个宏定义 MSGMAX 和 MSGMNB，它们 以字节为单位，分别定义了一条消息的最大长度和一 个队列的最大长度。 消息队列通信过程中，存在用户态与内核态之间的数 据拷贝开销，因为进程写入数据到内核中的消息队列 时，会发生从用户态拷贝数据到内核态的过程，同理 另一进程读取内核中的消息数据时，会发生从内核态 拷贝数据到用户态的过程。</p><p>System calls used for message queues:</p><ul><li><code>ftok()</code>: is use to generate a unique key.</li><li><code>msgget()</code>: either returns the message queue identifier for a newly created message queue or returns the identifiers for a queue which exists with the same key value.</li><li><code>msgsnd()</code>: Data is placed on to a message queue by calling <code>msgsnd()</code>.</li><li><code>msgrcv()</code>: messages are retrieved from a queue.</li><li><code>msgctl()</code>: It performs various operations on a queue. Generally it is use to destroy message queue.</li></ul><h2 id="共享内存-shared-memory" tabindex="-1"><a class="header-anchor" href="#共享内存-shared-memory"><span><strong>共享内存</strong> Shared Memory</span></a></h2><p>使得多个进程可以访问同一块内存空间，不同进程可以及时看到对方进程中对共享内存中数据的更新。<strong>共享内存</strong>可以解决消息队列通信中用户态与内核态之间数据拷贝过程带来的开销，<strong>它直接分配一个共享空间，每个进程都可以直接访问</strong>，就像访问进程自己的空间一样快捷方便，不需要陷入内核态或者系统调用，大大提高了通信的速度，享有<strong>最快</strong>的进程间通信方式之名。但是便捷高效的共享内存通信，<strong>带来新的问题，多进程竞争同个共享资源会造成数据的错乱。</strong></p><p>这种方式需要依靠某种同步操作，如互斥锁和信号量等。可以说这是最有用的进程间通信方式。</p><p><strong>共享内存区域</strong>：</p><ul><li>通过内核分配一段内存，多个进程可以映射到同一地址空间访问。</li></ul><p><strong>同步机制</strong>：</p><ul><li>共享内存本身不提供同步功能，需要配合信号量或互斥锁（mutex）来避免数据竞争。</li></ul><p><strong>常用方法</strong>：</p><ul><li>POSIX共享内存（<code>shm_open</code> 和 <code>mmap</code>）。</li><li>System V共享内存（<code>shmget</code> 和 <code>shmat</code>）。</li></ul><h2 id="信号量-semaphores" tabindex="-1"><a class="header-anchor" href="#信号量-semaphores"><span>信号量 <strong>Semaphores</strong></span></a></h2><p>信号量是一个计数器，用于多进程对共享数据的访问，信号量的意图在于进程间同步。这种通信方式主要用于解决与同步相关的问题并避免竞争条件。</p><p><strong>信号量其实是一个整型的计数器，主要用于实现进程间的互斥与同步，而不是用于缓存进程间通信的数据</strong>。</p><p>信号量表示资源的数量，控制信号量的方式有两种原子操作：</p><ul><li><strong>P 操作</strong>，这个操作会把信号量减去 1，相减后如果信号量 &lt; 0，则表明资源已被占用，进程需阻塞等待；相减后如果信号量 &gt;= 0，则表明还有资源可使用，进程可正常继续执行。</li><li><strong>V 操作</strong>，这个操作会把信号量加上 1，相加后如果信号量 &lt;= 0，则表明当前有阻塞中的进程，于是会将该进程唤醒运行；相加后如果信号量 &gt; 0，则表明当前没有阻塞中的进程；</li></ul><p>P 操作是用在进入共享资源之前，V 操作是用在离开共享资源之后，这两个操作是必须成对出现的。</p><p>如果要使得两个进程互斥访问共享内存，我们可以初始化信号量为 <code>1</code>。</p><ul><li><p>同步信号量，0</p></li><li><p>互斥信号量，1</p></li></ul><p>只要是 共享变量都可以做到线程间通信，比如全局变量，所 以对于线程间关注的不是通信方式，而是关注多线程 竞争共享资源的问题，信号量也同样可以在线程间实 现互斥与同步： 互斥的方式，可保证任意时刻只有一个线程访问 共享资源； 同步的方式，可保证线程 A 应在线程 B 之前执行；</p><p><strong>信号量的值</strong>：</p><ul><li><p>信号量通常是一个整数。</p></li><li><p>大于零表示可以访问的资源数量。</p></li><li><p>小于或等于零表示资源不可用或某些进程正在等待。</p></li><li><p><strong>命名信号量</strong>： 用于多个进程间共享，通过名字访问。</p><div class="language-c line-numbers-mode" data-highlighter="shiki" data-ext="c" data-title="c" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">codesem_t</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> *</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">sem </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">=</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> sem_open</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;/sem_example&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> O_CREAT</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75;"> 0</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">644</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (sem </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">==</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> SEM_FAILED) {</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    perror</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;sem_open&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    exit</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(EXIT_FAILURE);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>参数说明：</p><ul><li><code>/sem_example</code>：信号量的名称（必须以<code>/</code>开头）。</li><li><code>O_CREAT</code>：如果信号量不存在则创建。</li><li><code>0644</code>：权限设置。</li><li><code>1</code>：初始值。</li></ul></li><li><p><strong>匿名信号量</strong>： 用于单个进程的线程间共享，通常使用<code>sem_init()</code>初始化。</p><div class="language-c line-numbers-mode" data-highlighter="shiki" data-ext="c" data-title="c" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">codesem_t</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> sem;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">sem_init</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">&amp;</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">sem</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">==</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> -</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    perror</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;sem_init&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    exit</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(EXIT_FAILURE);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>参数说明：</p><ul><li><code>1</code>：指示是否跨进程共享（1表示是，0表示仅线程间共享）。</li><li><code>1</code>：初始值。</li></ul></li></ul><p><strong>信号量的两种操作</strong>：</p><ul><li><p>P操作（Proberen，测试或等待操作）：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>sem_wait()</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>或类似操作。</p><ul><li>如果信号量值大于零，则将其减一，表示进程获取了资源。</li><li>如果信号量值为零或小于零，则进程进入阻塞状态，等待资源释放。</li></ul></li><li><p>V操作（Verhogen，释放或通知操作）：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>sem_post()</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>或类似操作。</p><ul><li>将信号量值加一，表示资源释放。如果有进程在等待信号量，它们会被唤醒。</li></ul></li></ul><h2 id="信号-signal" tabindex="-1"><a class="header-anchor" href="#信号-signal"><span>信号 Signal</span></a></h2><blockquote><p>also Asynchronous System Trap</p></blockquote><p>信号用于通知接收进程某个事件已经发生</p><p>上面说的进程间通信，都是常规状态下的工作模式。<strong>对于异常情况下的工作模式，就需要用「信号」的方式来通知进程。</strong></p><p>信号事件的来源主要有硬件来源（如键盘 Cltr+C ）和软件来源（如 kill 命令）。</p><ul><li>CTRL+C产生<code>SIGINT</code>信号，终止进程</li><li>CTRL+Z产生<code>SIGTSTP</code>信号，表示停止该进程，但还未结束</li></ul><p>信号是进程间通信机制中<strong>唯一的异步通信机制</strong>，因为可以在任何时候发送信号给某一进程，一旦有信号产生，我们就有下面这几种，用户进程对信号的处理方式。</p><ol><li><p>执行默认操作。Linux 对每种信号都规定了默认操作，例如，上面列表中的 SIGTERM 信号，就是终止进程的意思。</p></li><li><p>捕捉信号。我们可以为信号定义一个信号处理函数。当信号发生时，我们就执行相应的信号处理函数。</p></li><li><p>忽略信号。当我们不希望处理某些信号的时候，就可以忽略该信号，不做任何处理。有两个信号是应用进程无法捕捉和忽略的，即 <code>SIGKILL</code> 和 <code>SEGSTOP</code>，它们用于在任何时候中断或结束某一进程。</p></li></ol><div class="language-shel line-numbers-mode" data-highlighter="shiki" data-ext="shel" data-title="shel" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>$ kill -l</span></span>
<span class="line"><span> 1) SIGHUP       2) SIGINT       3) SIGQUIT      4) SIGILL       5) SIGTRAP</span></span>
<span class="line"><span> 6) SIGABRT      7) SIGEMT       8) SIGFPE       9) SIGKILL     10) SIGBUS</span></span>
<span class="line"><span>11) SIGSEGV     12) SIGSYS      13) SIGPIPE     14) SIGALRM     15) SIGTERM</span></span>
<span class="line"><span>16) SIGURG      17) SIGSTOP     18) SIGTSTP     19) SIGCONT     20) SIGCHLD</span></span>
<span class="line"><span>21) SIGTTIN     22) SIGTTOU     23) SIGIO       24) SIGXCPU     25) SIGXFSZ</span></span>
<span class="line"><span>26) SIGVTALRM   27) SIGPROF     28) SIGWINCH    29) SIGPWR      30) SIGUSR1</span></span>
<span class="line"><span>31) SIGUSR2     32) SIGRTMIN    33) SIGRTMIN+1  34) SIGRTMIN+2  35) SIGRTMIN+3</span></span>
<span class="line"><span>36) SIGRTMIN+4  37) SIGRTMIN+5  38) SIGRTMIN+6  39) SIGRTMIN+7  40) SIGRTMIN+8</span></span>
<span class="line"><span>41) SIGRTMIN+9  42) SIGRTMIN+10 43) SIGRTMIN+11 44) SIGRTMIN+12 45) SIGRTMIN+13</span></span>
<span class="line"><span>46) SIGRTMIN+14 47) SIGRTMIN+15 48) SIGRTMIN+16 49) SIGRTMAX-15 50) SIGRTMAX-14</span></span>
<span class="line"><span>51) SIGRTMAX-13 52) SIGRTMAX-12 53) SIGRTMAX-11 54) SIGRTMAX-10 55) SIGRTMAX-9</span></span>
<span class="line"><span>56) SIGRTMAX-8  57) SIGRTMAX-7  58) SIGRTMAX-6  59) SIGRTMAX-5  60) SIGRTMAX-4</span></span>
<span class="line"><span>61) SIGRTMAX-3  62) SIGRTMAX-2  63) SIGRTMAX-1  64) SIGRTMAX</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="套接字-socket" tabindex="-1"><a class="header-anchor" href="#套接字-socket"><span>套接字 Socket</span></a></h2><p>此方法主要用于在客户端和服务器之间通过网络进行通信。套接字是支持 TCP/IP 的网络通信的基本操作单元，可以看做是不同主机之间的进程进行双向通信的端点，简单的说就是通信的两方的一种约定，用套接字中的相关函数来完成通信过程。</p><p>Socket 不仅可以跨网络与不同主机的进程间通信，还可以在同主机上进程间通信。</p><div class="language-c line-numbers-mode" data-highlighter="shiki" data-ext="c" data-title="c" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> socket</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;"> domain</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> int</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;"> type</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> int</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;"> protocal</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li><code>select</code></li><li><code>epoll</code></li></ul><p>三个参数分别代表：</p><ul><li>domain 参数用来指定协议族，比如 AF_INET 用于 IPV4、AF_INET6 用于 IPV6、AF_LOCAL/AF_UNIX 用于本机；</li><li>type 参数用来指定通信特性，比如 SOCK_STREAM 表示的是字节流，对应 TCP、SOCK_DGRAM 表示的是数据报，对应 UDP、SOCK_RAW 表示的是原始套接字；</li><li>protocal 参数原本是用来指定通信协议的，但现在基本废弃。因为协议已经通过前面两个参数指定完成，protocol 目前一般写成 0 即可；</li></ul><p>根据创建 socket 类型的不同，通信的方式也就不同：</p><ul><li><p>实现 TCP 字节流通信： socket 类型是 AF_INET 和 SOCK_STREAM；</p></li><li><p>实现 UDP 数据报通信：socket 类型是 AF_INET 和 SOCK_DGRAM；</p></li><li><p>实现本地进程间通信： 「本地字节流 socket 」类型是 AF_LOCAL 和 SOCK_STREAM，「本地数据报 socket 」类型是 AF_LOCAL 和 SOCK_DGRAM。另外，AF_UNIX 和 AF_LOCAL 是等价的，所以 AF_UNIX 也属于本地 socket；</p></li><li><p>服务端和客户端初始化 <code>socket</code>，得到文件描述符；</p></li><li><p>服务端调用 <code>bind</code>，将绑定在 IP 地址和端口;</p></li><li><p>服务端调用 <code>listen</code>，进行监听；</p></li><li><p>服务端调用 <code>accept</code>，等待客户端连接；</p></li><li><p>客户端调用 <code>connect</code>，向服务器端的地址和端口发起连接请求；</p></li><li><p>服务端 <code>accept</code> 返回用于传输的 <code>socket</code> 的文件描述符；</p></li><li><p>客户端调用 <code>write</code> 写入数据；服务端调用 <code>read</code> 读取数据；</p></li><li><p>客户端断开连接时，会调用 <code>close</code>，那么服务端 <code>read</code> 读取数据的时候，就会读取到了 <code>EOF</code>，待处理完数据后，服务端调用 <code>close</code>，表示连接关闭。</p></li></ul><p>这里需要注意的是，服务端调用 <code>accept</code> 时，连接成功了会返回一个已完成连接的 socket，后续用来传输数据。</p><p>所以，监听的 socket 和真正用来传送数据的 socket，是「<strong>两个</strong>」 socket，一个叫作<strong>监听 socket</strong>，一个叫作<strong>已完成连接 socket</strong>。</p><p>成功连接建立之后，双方开始通过 read 和 write 函数来读写数据，就像往一个文件流里面写东西一样。</p>`,62)]))}const h=e(t,[["render",l],["__file","ipc.html.vue"]]),c=JSON.parse(`{"path":"/cs/basic/os/process/ipc.html","title":"Inter-Process Communication","lang":"en-US","frontmatter":{"description":"Inter-Process Communication 进程通信 Types of Process Independent process Co-operating process An independent process is not affected by the execution of other processes while a co-...","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/cs/basic/os/process/ipc.html"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"Inter-Process Communication"}],["meta",{"property":"og:description","content":"Inter-Process Communication 进程通信 Types of Process Independent process Co-operating process An independent process is not affected by the execution of other processes while a co-..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-11-22T03:06:21.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-22T03:06:21.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Inter-Process Communication\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-22T03:06:21.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[{"level":2,"title":"Types of Process","slug":"types-of-process","link":"#types-of-process","children":[]},{"level":2,"title":"管道 Pipe","slug":"管道-pipe","link":"#管道-pipe","children":[]},{"level":2,"title":"消息队列 Message Queue","slug":"消息队列-message-queue","link":"#消息队列-message-queue","children":[]},{"level":2,"title":"共享内存 Shared Memory","slug":"共享内存-shared-memory","link":"#共享内存-shared-memory","children":[]},{"level":2,"title":"信号量 Semaphores","slug":"信号量-semaphores","link":"#信号量-semaphores","children":[]},{"level":2,"title":"信号 Signal","slug":"信号-signal","link":"#信号-signal","children":[]},{"level":2,"title":"套接字 Socket","slug":"套接字-socket","link":"#套接字-socket","children":[]}],"git":{"createdTime":1732244781000,"updatedTime":1732244781000,"contributors":[{"name":"David Liu","email":"liudawei@seas.upenn.edu","commits":1}]},"readingTime":{"minutes":12.29,"words":3686},"filePathRelative":"cs/basic/os/process/ipc.md","localizedDate":"November 22, 2024","excerpt":"\\n<p>进程通信</p>\\n<h2>Types of Process</h2>\\n<ul>\\n<li>Independent process</li>\\n<li>Co-operating process</li>\\n</ul>\\n<p>An independent process is not affected by the execution of other processes while a co-operating process can be affected by other executing processes. Though one can think that those processes, which are running independently, will execute very efficiently, in reality, there are many situations when cooperative nature can be utilized for increasing computational speed, convenience, and modularity. Inter-process communication (IPC) is a mechanism that allows processes to communicate with each other and synchronize their actions. The communication between these processes can be seen as a method of cooperation between them. Processes can communicate with each other through both:<br>\\nMethods of IPC</p>","autoDesc":true}`);export{h as comp,c as data};
