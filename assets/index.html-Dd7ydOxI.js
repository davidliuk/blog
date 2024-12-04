import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as l,d as t,o as p}from"./app-D4ZvIHfO.js";const n={};function a(r,i){return p(),l("div",null,i[0]||(i[0]=[t('<h1 id="operating-system-操作系统" tabindex="-1"><a class="header-anchor" href="#operating-system-操作系统"><span>Operating System 操作系统</span></a></h1><ul><li>结构</li><li>进程管理</li><li>内存管理</li><li>文件系统</li><li>I/O管理 <ul><li>设备管理</li><li>网络系统</li></ul></li></ul><hr><p>多核： multiprocessing, 意思就是多重处理， 多个cpu同时干活。</p><p>多进程： multiprogramming， 也可以近似认为是multitasking, 意思就是多道程序设计。 单个cpu并发干活， 在不同的进程间切换。</p><p>多线程： multithreading, 这个就是我们通常说的多线程， 单个cpu并发干活， 在同一个进程的线程间切换。</p><h2 id="定义" tabindex="-1"><a class="header-anchor" href="#定义"><span>定义</span></a></h2><p>操作系统是一直运行在计算机上的程序（通常称为内核(kernel))</p><p>除了内核外，还有其他两类程序：</p><ul><li>系统程序(system program)，是与系统运行有关的程序，但不是内核的一部分</li><li>应用程序，是与系统运行无关的所有其他程序。</li></ul><h2 id="组成" tabindex="-1"><a class="header-anchor" href="#组成"><span>组成</span></a></h2><h3 id="系统调用" tabindex="-1"><a class="header-anchor" href="#系统调用"><span>系统调用</span></a></h3><p>系统调用大致可分为六大类：</p><ul><li>进程控制(process control)、</li><li>文件管理(file manipulation)、</li><li>设备管理(device manipulation)、</li><li>信息维护(information maintenance)、</li><li>通信(communication)</li><li>保护(protection)</li></ul><p>将简要描述操作系统可能提供的各种类型的系统调用。大多数系统调用都与后面几章讨论的概念和功能有关。图2-8概括了操作系统通常提供的各种类型的系统调用。如前所述，本书讨论的系统调用通常为通称。不过，举例会用Windows、UNIX和Linux的系统调用的实际名称。</p><h2 id="运行" tabindex="-1"><a class="header-anchor" href="#运行"><span>运行</span></a></h2><p>事件发生通常通过硬件或软件的中断(interrupt)来通知。硬件可以随时通过系统总线<br> 发送信号到CPU,以触发中断。软件也可通过执行特别操作即系统调用(system call)(也称为监督程序调用(monitor call)),以触发中断。</p><p>当CPU被中断时，它停止正在做的事，并立即转到固定位置再继续执行。该固定位置<br> 通常包含中断服务程序的开始地址。中断服务程序开始执行，在执行完后，CPU重新执行被中断的计算。这一运行的时间表如图1-3所示。</p><p>中断是计算机体系结构的重要部分。虽然每个计算机设计都有自己的中断机制，但是有些功能是共同的。中断应将控制转移到合适的中断服务程序。处理这一转移的直接方法是，调用一个通用程序以检查中断信息。接着，该程序会调用特定的中断处理程序。不过，中断处理应当快捷。由于只有少量预先定义的中断，所以可以通过中断处理程序的指针表来提高速度。这样通过指针表可以间接调用中断处理程序，而无需通过其他中介程序。通常，指针表位于低地址内存（前100左右的位置）。这些位置包含各种设备的中断处理程序的地址。这种地址的数组或中断向量(interrupt vector),对于任一给定的中断请求，可通过唯一的设备号来索引，进而提供设备的中断处理程序的地址。许多不同的操作系统，如Windows或 UNIX,都采用这种方式来处理中断。</p><p>中断体系结构也应保存中断指令的地址。许多以前的设计只是简单地将中断地址保存在某个固定位置或可用设备号来索引的位置。而现代体系结构将返回地址保存在系统堆栈上。如果中断程序需要修改处理器状态，如修改寄存器的值，则应明确保存当前状态，并在返回之前恢复该状态。在处理完中断之后，保存的返回地址会加载到程序计数器，被中断的计算可以重新开始，就好像中断没有发生过一样。</p><p>基本中断机制的工作原理如下。</p><p>CPU硬件有一条线，称作中断请求线（Interrupt-Request Line,IRL)；CPU在执行完每条指令后，都会检测IRL。当CPU检测到控制器已在IRL上发出了一个信号时，CPU执行状态保存并且跳到内存固定位置的中断处理程序（interrupt- handler routine)。中断处理程序确定中断原因，执行必要处理，执行状态恢复，并且执行返回中断指令以便CPU回到中断前的执行状态。我们说，设备控制器通过中断请求线发送信号而引起(raise)中断，CPU捕获（catch)中断并且分派（dispatch)到中断处理程序，中断处理程序通过处理设备来清除（clear)中断。图13-3总结了中断驱动的I/O循环。本章强调中断管理，因为即使单用户现代系统都会每秒管理数百个中断，而服务器每秒管理数十万个中断。</p><p>刚才描述的基本中断机制可以使得CPU响应异步事件，例如设备控制器处于就绪状态以便处理。然而，对于现代操作系统，我们需要更为复杂的中断处理功能。</p><ul><li>在关键处理时，需要能够延迟中断处理。</li><li>需要一种有效方式，以便分派中断到合适的中断处理程序，而无需首先轮询所有设备才能看到哪个引起了中断。</li><li>需要多级中断，以便操作系统能够区分高优先级或低优先级的中断，能够根据紧迫性的程度来响应。</li></ul><h3 id="中断" tabindex="-1"><a class="header-anchor" href="#中断"><span>中断</span></a></h3><p>中断可以分为以下几种类型：</p><ol><li><p>硬件中断：由硬件设备发起的中断请求，例如键盘、鼠标、网卡等设备。</p></li><li><p>软件中断：由软件程序发起的中断请求，例如系统调用、异常、陷阱等。</p></li><li><p>内部中断：由处理器内部发起的中断请求，例如时钟中断、浮点异常等。</p></li><li><p>外部中断：由处理器外部发起的中断请求，例如I/O设备中断、时钟中断等。</p></li><li><p>异常中断：由处理器执行指令时发生的异常情况所引起的中断请求，例如除零异常、非法指令异常等。</p></li><li><p>系统调用中断：由用户程序主动请求操作系统提供服务所发起的中断请求，例如文件读写、进程创建等系统调用。</p></li></ol><p>不同类型的中断请求需要由操作系统采取不同的处理方式来响应和处理。</p><p><strong>操作系统是中断驱动的</strong>，因为它通过中断机制来响应外部事件和硬件设备的请求。当外部事件或硬件设备需要操作系统的服务时，它们会向操作系统发送中断信号，操作系统会暂停当前正在执行的任务，转而处理中断请求。这种中断驱动的方式可以提高操作系统的响应速度和效率，同时也可以避免浪费CPU资源。</p><p>为了避免由于中断处理程序执行时间过长，而影响正常进程的调度，Linux 将中断处理程序分为上半部和下半部：</p><ul><li>上半部，对应硬中断，由硬件触发中断，用来快速处理中断；</li><li>下半部，对应软中断，由内核触发中断，用来异步处理上半部未完成的工作；</li></ul><p>Linux 中的软中断包括网络收发、定时、调度、RCU 锁等各种类型，可以通过查看 /proc/softirqs 来观察软中断的累计中断次数情况，如果要实时查看中断次数的变化率，可以使用 watch -d cat /proc/softirqs 命令。</p><p>每一个 CPU 都有各自的软中断内核线程，我们还可以用 ps 命令来查看内核线程，一般名字在中括号里面到，都认为是内核线程。</p><p>如果在 top 命令发现，CPU 在软中断上的使用率比较高，而且 CPU 使用率最高的进程也是软中断 ksoftirqd 的时候，这种一般可以认为系统的开销被软中断占据了。</p><p>这时我们就可以分析是哪种软中断类型导致的，一般来说都是因为网络接收软中断导致的，如果是的话，可以用 sar 命令查看是哪个网卡的有大量的网络包接收，再用 tcpdump 抓网络包，做进一步分析该网络包的源头是不是非法地址，如果是就需要考虑防火墙增加规则，如果不是，则考虑硬件升级等。</p><hr><p>分离</p><ul><li>读写分离</li><li>冷热分离</li><li>动静分离</li></ul>',38)]))}const c=e(n,[["render",a],["__file","index.html.vue"]]),m=JSON.parse(`{"path":"/cs/basic/os/","title":"Operating System 操作系统","lang":"en-US","frontmatter":{"description":"Operating System 操作系统 结构 进程管理 内存管理 文件系统 I/O管理 设备管理 网络系统 多核： multiprocessing, 意思就是多重处理， 多个cpu同时干活。 多进程： multiprogramming， 也可以近似认为是multitasking, 意思就是多道程序设计。 单个cpu并发干活， 在不同的进程间切换。 ...","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/cs/basic/os/"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"Operating System 操作系统"}],["meta",{"property":"og:description","content":"Operating System 操作系统 结构 进程管理 内存管理 文件系统 I/O管理 设备管理 网络系统 多核： multiprocessing, 意思就是多重处理， 多个cpu同时干活。 多进程： multiprogramming， 也可以近似认为是multitasking, 意思就是多道程序设计。 单个cpu并发干活， 在不同的进程间切换。 ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-05-08T07:35:02.000Z"}],["meta",{"property":"article:modified_time","content":"2024-05-08T07:35:02.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Operating System 操作系统\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-05-08T07:35:02.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[{"level":2,"title":"定义","slug":"定义","link":"#定义","children":[]},{"level":2,"title":"组成","slug":"组成","link":"#组成","children":[{"level":3,"title":"系统调用","slug":"系统调用","link":"#系统调用","children":[]}]},{"level":2,"title":"运行","slug":"运行","link":"#运行","children":[{"level":3,"title":"中断","slug":"中断","link":"#中断","children":[]}]}],"git":{"createdTime":1670083932000,"updatedTime":1715153702000,"contributors":[{"name":"刘大维","email":"davidliu@liudaweideMacBook-Pro.local","commits":2},{"name":"davidliuk","email":"l729641074@163.com","commits":1}]},"readingTime":{"minutes":7.38,"words":2213},"filePathRelative":"cs/basic/os/README.md","localizedDate":"December 3, 2022","excerpt":"\\n<ul>\\n<li>结构</li>\\n<li>进程管理</li>\\n<li>内存管理</li>\\n<li>文件系统</li>\\n<li>I/O管理\\n<ul>\\n<li>设备管理</li>\\n<li>网络系统</li>\\n</ul>\\n</li>\\n</ul>\\n<hr>\\n<p>多核： multiprocessing, 意思就是多重处理， 多个cpu同时干活。</p>\\n<p>多进程： multiprogramming， 也可以近似认为是multitasking,  意思就是多道程序设计。 单个cpu并发干活， 在不同的进程间切换。</p>\\n<p>多线程： multithreading,  这个就是我们通常说的多线程， 单个cpu并发干活， 在同一个进程的线程间切换。</p>","autoDesc":true}`);export{c as comp,m as data};
