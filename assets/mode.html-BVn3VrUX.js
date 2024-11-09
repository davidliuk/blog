import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,b as n,o as p}from"./app-B3ooTv29.js";const r={};function l(i,e){return p(),a("div",null,e[0]||(e[0]=[n('<h1 id="内核态用户态" tabindex="-1"><a class="header-anchor" href="#内核态用户态"><span>内核态用户态</span></a></h1><h2 id="cpu状态" tabindex="-1"><a class="header-anchor" href="#cpu状态"><span>CPU状态</span></a></h2><p>内核态（Kernel Mode）：运行操作系统程序，操作硬件</p><p>用户态（User Mode）：运行用户程序</p><h2 id="指令划分" tabindex="-1"><a class="header-anchor" href="#指令划分"><span>指令划分</span></a></h2><p>特权指令：只能由操作系统使用、用户程序不能使用的指令。</p><p>举例：启动I/O、内存清零 修改程序状态字 设置时钟 允许/禁止终端 停机</p><p>非特权指令：用户程序可以使用的指令。</p><p>举例：控制转移、算数运算、取数指令、<strong>访管指令</strong>（使用户程序从用户态陷入内核态）</p><h2 id="特权级别" tabindex="-1"><a class="header-anchor" href="#特权级别"><span>特权级别</span></a></h2><p><strong>特权环：R0、R1、R2、R3</strong></p><p>R0相当于内核态，R3相当于用户态；</p><p>不同级别能够运行不同的指令集合；</p><h2 id="cpu状态转换" tabindex="-1"><a class="header-anchor" href="#cpu状态转换"><span>CPU状态转换</span></a></h2><p>**用户态-&gt;内核态：**唯一途径是通过中断、异常、陷入机制（访管指令）</p><p>**内核态-&gt;用户态：**设置程序状态字PSW</p><h2 id="内核态与用户态的区别" tabindex="-1"><a class="header-anchor" href="#内核态与用户态的区别"><span>内核态与用户态的区别</span></a></h2><ul><li><p>内核态与用户态是操作系统的两种运行级别，当程序运行在3级特权级上时，就可以称之为运行在用户态。<strong>因为这是最低特权级，是普通的用户进程运行的特权级，大部分用户直接面对的程序都是运行在用户态；</strong></p></li><li><p>当程序运行在0级特权级上时，就可以称之为运行在内核态。</p></li><li><p>运行在用户态下的程序不能直接访问操作系统内核数据结构和程序。当我们在系统中执行一个程序时，大部分时间是运行在用户态下的，在其需要操作系统帮助完成某些它没有权力和能力完成的工作时就会切换到内核态（比如操作硬件）。</p></li><li><p>这两种状态的主要差别是</p><ul><li>处于用户态执行时，进程所能访问的内存空间和对象受到限制，其所处于占有的处理器是可被抢占的</li><li>处于内核态执行时，则能访问所有的内存空间和对象，且所占有的处理器是不允许被抢占的。</li></ul></li></ul><h2 id="用户态到内核态的切换" tabindex="-1"><a class="header-anchor" href="#用户态到内核态的切换"><span>用户态到内核态的切换</span></a></h2><h3 id="系统调用" tabindex="-1"><a class="header-anchor" href="#系统调用"><span>系统调用</span></a></h3><p><strong>这是用户态进程主动要求切换到内核态的一种方式</strong>，**用户态进程通过系统调用申请使用操作系统提供的服务程序完成工作。**比如前例中fork()实际上就是执行了一个创建新进程的系统调用。</p><p>而系统调用的机制其核心还是使用了操作系统为用户特别开放的一个中断来实现，例如Linux的int 80h中断。</p><p>用户程序通常调用库函数，由库函数再调用系统调用，因此有的库函数会使用户程序进入内核态（只要库函数中某处调用了系统调用），有的则不会。</p><h3 id="异常" tabindex="-1"><a class="header-anchor" href="#异常"><span>异常</span></a></h3><p>当CPU在执行运行在用户态下的程序时，发生了某些事先不可知的异常，这时会触发由当前运行进程切换到处理此异常的内核相关程序中，也就转到了内核态，比如缺页异常。</p><h3 id="外围设备的中断" tabindex="-1"><a class="header-anchor" href="#外围设备的中断"><span>外围设备的中断</span></a></h3><p><strong>当外围设备完成用户请求的操作后，会向CPU发出相应的中断信号</strong>，这时CPU会暂停执行下一条即将要执行的指令转而去执行与中断信号对应的处理程序，</p><p>如果先前执行的指令是用户态下的程序，那么这个转换的过程自然也就发生了由用户态到内核态的切换。比如硬盘读写操作完成，系统会切换到硬盘读写的中断处理程序中执行后续操作等。</p><p><strong>这3种方式是系统在运行时由用户态转到内核态的最主要方式，其中系统调用可以认为是用户进程主动发起的，异常和外围设备中断则是被动的。</strong></p>',29)]))}const d=t(r,[["render",l],["__file","mode.html.vue"]]),c=JSON.parse(`{"path":"/cs/basic/os/structure/mode.html","title":"内核态用户态","lang":"en-US","frontmatter":{"description":"内核态用户态 CPU状态 内核态（Kernel Mode）：运行操作系统程序，操作硬件 用户态（User Mode）：运行用户程序 指令划分 特权指令：只能由操作系统使用、用户程序不能使用的指令。 举例：启动I/O、内存清零 修改程序状态字 设置时钟 允许/禁止终端 停机 非特权指令：用户程序可以使用的指令。 举例：控制转移、算数运算、取数指令、访管指...","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/cs/basic/os/structure/mode.html"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"内核态用户态"}],["meta",{"property":"og:description","content":"内核态用户态 CPU状态 内核态（Kernel Mode）：运行操作系统程序，操作硬件 用户态（User Mode）：运行用户程序 指令划分 特权指令：只能由操作系统使用、用户程序不能使用的指令。 举例：启动I/O、内存清零 修改程序状态字 设置时钟 允许/禁止终端 停机 非特权指令：用户程序可以使用的指令。 举例：控制转移、算数运算、取数指令、访管指..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-05-08T07:35:02.000Z"}],["meta",{"property":"article:modified_time","content":"2024-05-08T07:35:02.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"内核态用户态\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-05-08T07:35:02.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[{"level":2,"title":"CPU状态","slug":"cpu状态","link":"#cpu状态","children":[]},{"level":2,"title":"指令划分","slug":"指令划分","link":"#指令划分","children":[]},{"level":2,"title":"特权级别","slug":"特权级别","link":"#特权级别","children":[]},{"level":2,"title":"CPU状态转换","slug":"cpu状态转换","link":"#cpu状态转换","children":[]},{"level":2,"title":"内核态与用户态的区别","slug":"内核态与用户态的区别","link":"#内核态与用户态的区别","children":[]},{"level":2,"title":"用户态到内核态的切换","slug":"用户态到内核态的切换","link":"#用户态到内核态的切换","children":[{"level":3,"title":"系统调用","slug":"系统调用","link":"#系统调用","children":[]},{"level":3,"title":"异常","slug":"异常","link":"#异常","children":[]},{"level":3,"title":"外围设备的中断","slug":"外围设备的中断","link":"#外围设备的中断","children":[]}]}],"git":{"createdTime":1680492546000,"updatedTime":1715153702000,"contributors":[{"name":"刘大维","email":"davidliu@liudaweideMacBook-Pro.local","commits":1}]},"readingTime":{"minutes":3.39,"words":1016},"filePathRelative":"cs/basic/os/structure/mode.md","localizedDate":"April 3, 2023","excerpt":"\\n<h2>CPU状态</h2>\\n<p>内核态（Kernel Mode）：运行操作系统程序，操作硬件</p>\\n<p>用户态（User Mode）：运行用户程序</p>\\n<h2>指令划分</h2>\\n<p>特权指令：只能由操作系统使用、用户程序不能使用的指令。</p>\\n<p>举例：启动I/O、内存清零 修改程序状态字 设置时钟 允许/禁止终端 停机</p>\\n<p>非特权指令：用户程序可以使用的指令。</p>\\n<p>举例：控制转移、算数运算、取数指令、<strong>访管指令</strong>（使用户程序从用户态陷入内核态）</p>\\n<h2>特权级别</h2>\\n<p><strong>特权环：R0、R1、R2、R3</strong></p>","autoDesc":true}`);export{d as comp,c as data};
