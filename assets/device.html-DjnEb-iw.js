import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as i,d as o,o as l}from"./app-ktFCNIob.js";const a={};function n(r,e){return l(),i("div",null,e[0]||(e[0]=[o('<h2 id="设备控制器" tabindex="-1"><a class="header-anchor" href="#设备控制器"><span>设备控制器</span></a></h2><p>我们的电脑设备可以接非常多的输入输出设备，比如键盘、鼠标、显示器、网卡、硬盘、打印机、音响等等，每个设备的用法和功能都不同，那操作系统是如何把这些输入输出设备统一管理的呢?</p><p>为了屏蔽设备之间的差异，每个设备都有一个叫<strong>设备控制器（<em>Device Control</em>）</strong> 的组件，比如硬盘有硬盘控制器、显示器有视频控制器等。</p><p>因为这些控制器都很清楚的知道对应设备的用法和功能，所以 CPU 是通过设备控制器来和设备打交道的。</p><p>设备控制器里有芯片，它可执行自己的逻辑，也有自己的寄存器，用来与 CPU 进行通信，比如：</p><ul><li>通过写入这些寄存器，操作系统可以命令设备发送数据、接收数据、开启或关闭，或者执行某些其他操作。</li><li>通过读取这些寄存器，操作系统可以了解设备的状态，是否准备好接收一个新的命令等。</li></ul><p>实际上，控制器是有三类寄存器，它们分别是<strong>状态寄存器（<em>Status Register</em>）</strong>、 <strong>命令寄存器（<em>Command Register</em>）<strong>以及</strong>数据寄存器（<em>Data Register</em>）</strong>，如下图：</p><p>这三个寄存器的作用：</p><ul><li><em>数据寄存器</em>，CPU 向 I/O 设备写入需要传输的数据，比如要打印的内容是「Hello」，CPU 就要先发送一个 H 字符给到对应的 I/O 设备。</li><li><em>命令寄存器</em>，CPU 发送一个命令，告诉 I/O 设备，要进行输入/输出操作，于是就会交给 I/O 设备去工作，任务完成后，会把状态寄存器里面的状态标记为完成。</li><li><em>状态寄存器</em>，目的是告诉 CPU ，现在已经在工作或工作已经完成，如果已经在工作状态，CPU 再发送数据或者命令过来，都是没有用的，直到前面的工作已经完成，状态寄存标记成已完成，CPU 才能发送下一个字符和命令。</li></ul><p>CPU 通过读写设备控制器中的寄存器控制设备，这可比 CPU 直接控制输入输出设备，要方便和标准很多。</p><p>另外， 输入输出设备可分为两大类 ：<strong>块设备（<em>Block Device</em>）<strong>和</strong>字符设备（<em>Character Device</em>）</strong>。</p><ul><li><em>块设备</em>，把数据存储在固定大小的块中，每个块有自己的地址，硬盘、USB 是常见的块设备。</li><li><em>字符设备</em>，以字符为单位发送或接收一个字符流，字符设备是不可寻址的，也没有任何寻道操作，鼠标是常见的字符设备。</li></ul><p>块设备通常传输的数据量会非常大，于是控制器设立了一个可读写的<strong>数据缓冲区</strong>。</p><ul><li>CPU 写入数据到控制器的缓冲区时，当缓冲区的数据囤够了一部分，才会发给设备。</li><li>CPU 从控制器的缓冲区读取数据时，也需要缓冲区囤够了一部分，才拷贝到内存。</li></ul><p>这样做是为了，减少对设备的频繁操作。</p><p>那 CPU 是如何与设备的控制寄存器和数据缓冲区进行通信的？存在两个方法：</p><ul><li><em>端口 I/O</em>，每个控制寄存器被分配一个 I/O 端口，可以通过特殊的汇编指令操作这些寄存器，比如 <code>in/out</code> 类似的指令。</li><li><em>内存映射 I/O</em>，将所有控制寄存器映射到内存空间中，这样就可以像读写内存一样读写数据缓冲区。</li></ul><h2 id="" tabindex="-1"><a class="header-anchor" href="#"><span></span></a></h2>',18)]))}const m=t(a,[["render",n],["__file","device.html.vue"]]),c=JSON.parse(`{"path":"/cs/basic/os/io/device.html","title":"","lang":"en-US","frontmatter":{"description":"设备控制器 我们的电脑设备可以接非常多的输入输出设备，比如键盘、鼠标、显示器、网卡、硬盘、打印机、音响等等，每个设备的用法和功能都不同，那操作系统是如何把这些输入输出设备统一管理的呢? 为了屏蔽设备之间的差异，每个设备都有一个叫设备控制器（Device Control） 的组件，比如硬盘有硬盘控制器、显示器有视频控制器等。 因为这些控制器都很清楚的知道...","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/cs/basic/os/io/device.html"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:description","content":"设备控制器 我们的电脑设备可以接非常多的输入输出设备，比如键盘、鼠标、显示器、网卡、硬盘、打印机、音响等等，每个设备的用法和功能都不同，那操作系统是如何把这些输入输出设备统一管理的呢? 为了屏蔽设备之间的差异，每个设备都有一个叫设备控制器（Device Control） 的组件，比如硬盘有硬盘控制器、显示器有视频控制器等。 因为这些控制器都很清楚的知道..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-11-22T03:06:21.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-22T03:06:21.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-22T03:06:21.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[{"level":2,"title":"设备控制器","slug":"设备控制器","link":"#设备控制器","children":[]},{"level":2,"title":"","slug":"","link":"#","children":[]}],"git":{"createdTime":1715153702000,"updatedTime":1732244781000,"contributors":[{"name":"David Liu","email":"liudawei@seas.upenn.edu","commits":1},{"name":"刘大维","email":"davidliu@liudaweideMacBook-Pro.local","commits":1}]},"readingTime":{"minutes":3.06,"words":917},"filePathRelative":"cs/basic/os/io/device.md","localizedDate":"May 8, 2024","excerpt":"<h2>设备控制器</h2>\\n<p>我们的电脑设备可以接非常多的输入输出设备，比如键盘、鼠标、显示器、网卡、硬盘、打印机、音响等等，每个设备的用法和功能都不同，那操作系统是如何把这些输入输出设备统一管理的呢?</p>\\n<p>为了屏蔽设备之间的差异，每个设备都有一个叫<strong>设备控制器（<em>Device Control</em>）</strong> 的组件，比如硬盘有硬盘控制器、显示器有视频控制器等。</p>\\n<p>因为这些控制器都很清楚的知道对应设备的用法和功能，所以 CPU 是通过设备控制器来和设备打交道的。</p>\\n<p>设备控制器里有芯片，它可执行自己的逻辑，也有自己的寄存器，用来与 CPU 进行通信，比如：</p>","autoDesc":true}`);export{m as comp,c as data};