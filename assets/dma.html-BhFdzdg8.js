import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as s,d as a,o as t}from"./app-DtA_0glx.js";const l={};function n(p,i){return t(),s("div",null,i[0]||(i[0]=[a(`<h1 id="零拷贝" tabindex="-1"><a class="header-anchor" href="#零拷贝"><span>零拷贝</span></a></h1><p><strong>「Buffer 和 Cache」</strong></p><p>buffer 和 cache 是两个不同的概念：</p><ul><li><p>cache 是高速缓存，用于 CPU 和内存之间的缓冲；</p></li><li><p>buffer 是 I/O 缓存，用于内存和硬盘的缓冲。</p></li></ul><p>简单的说，cache 是加速 <strong>「读」</strong>，而 buffer 是缓冲 <strong>「写」</strong>，前者解决读的问题，保存从磁盘上读出的数据，后者是解决写的问题，保存即将要写入到磁盘上的数据。</p><p><strong>「Buffer Cache 和 Page Cache」</strong></p><p>buffer cache 和 page cache 都是为了处理设备和内存交互时高速访问的问题。</p><p>buffer cache 可称为块缓冲器，page cache 可称为页缓冲器。</p><hr><p>磁盘可以说是计算机系统最慢的硬件之一，读写速度相差内存 10 倍以上，所以针对优化磁盘的技术非常的多，比如零拷贝、直接 I/O、异步 I/O 等等，这些优化的目的就是为了提高系统的吞吐量，另外操作系统内核中的磁盘高速缓存区，可以有效的减少磁盘的访问次数。</p><p>这次，我们就以「文件传输」作为切入点，来分析 I/O 工作方式，以及如何优化传输文件的性能。</p><h2 id="为什么要有-dma-技术" tabindex="-1"><a class="header-anchor" href="#为什么要有-dma-技术"><span>为什么要有 DMA 技术?</span></a></h2><p>在没有 DMA 技术前，I/O 的过程是这样的：</p><ul><li>CPU 发出对应的指令给磁盘控制器，然后返回；</li><li>磁盘控制器收到指令后，于是就开始准备数据，会把数据放入到磁盘控制器的内部缓冲区中，然后产生一个<strong>中断</strong>；</li><li>CPU 收到中断信号后，停下手头的工作，接着把磁盘控制器的缓冲区的数据一次一个字节地读进自己的寄存器，然后再把寄存器里的数据写入到内存，而在数据传输的期间 CPU 是无法执行其他任务的。</li></ul><p>为了方便你理解，我画了一副图：</p><p>可以看到，整个数据的传输过程，都要需要 CPU 亲自参与搬运数据的过程，而且这个过程，CPU 是不能做其他事情的。</p><p>简单的搬运几个字符数据那没问题，但是如果我们用千兆网卡或者硬盘传输大量数据的时候，都用 CPU 来搬运的话，肯定忙不过来。</p><p>计算机科学家们发现了事情的严重性后，于是就发明了 DMA 技术，也就是<strong>直接内存访问（Direct Memory Access）</strong> 技术。</p><p>什么是 DMA 技术？简单理解就是，<strong>在进行 I/O 设备和内存的数据传输的时候，数据搬运的工作全部交给 DMA 控制器，而 CPU 不再参与任何与数据搬运相关的事情，这样 CPU 就可以去处理别的事务</strong>。</p><p>直接内存访问：DMA允许外设设备和内存存储器之间直接进行IO数据传输，其过程不需要CPU的参与</p><p>那使用 DMA 控制器进行数据传输的过程究竟是什么样的呢？下面我们来具体看看。</p><p>具体过程：</p><ul><li>用户进程调用 read 方法，向操作系统发出 I/O 请求，请求读取数据到自己的内存缓冲区中，进程进入阻塞状态；</li><li>操作系统收到请求后，进一步将 I/O 请求发送 DMA，然后让 CPU 执行其他任务；</li><li>DMA 进一步将 I/O 请求发送给磁盘；</li><li>磁盘收到 DMA 的 I/O 请求，把数据从磁盘读取到磁盘控制器的缓冲区中，当磁盘控制器的缓冲区被读满后，向 DMA 发起中断信号，告知自己缓冲区已满；</li><li><strong>DMA 收到磁盘的信号，将磁盘控制器缓冲区中的数据拷贝到内核缓冲区中，此时不占用 CPU，CPU 可以执行其他任务</strong>；</li><li>当 DMA 读取了足够多的数据，就会发送中断信号给 CPU；</li><li>CPU 收到 DMA 的信号，知道数据已经准备好，于是将数据从内核拷贝到用户空间，系统调用返回；</li></ul><p>可以看到， <strong>CPU 不再参与「将数据从磁盘控制器缓冲区搬运到内核空间」的工作，这部分工作全程由 DMA 完成</strong>。但是 CPU 在这个过程中也是必不可少的，因为传输什么数据，从哪里传输到哪里，都需要 CPU 来告诉 DMA 控制器。</p><p>早期 DMA 只存在在主板上，如今由于 I/O 设备越来越多，数据传输的需求也不尽相同，所以每个 I/O 设备里面都有自己的 DMA 控制器。</p><h2 id="传统的文件传输" tabindex="-1"><a class="header-anchor" href="#传统的文件传输"><span>传统的文件传输</span></a></h2><p>如果服务端要提供文件传输的功能，我们能想到的最简单的方式是：将磁盘上的文件读取出来，然后通过网络协议发送给客户端。</p><p>传统 I/O 的工作方式是，数据读取和写入是从用户空间到内核空间来回复制，而内核空间的数据是通过操作系统层面的 I/O 接口从磁盘读取或写入。</p><p>代码通常如下，一般会需要两个系统调用：</p><div class="language-c line-numbers-mode" data-highlighter="shiki" data-ext="c" data-title="c" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">read</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">file</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> tmp_buf</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> len</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">write</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">socket</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> tmp_buf</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> len</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>代码很简单，虽然就两行代码，但是这里面发生了不少的事情。</p><p><img src="https://cdn.xiaolincoding.com/gh/xiaolincoder/ImageHost2/操作系统/零拷贝/传统文件传输.png" alt="img" loading="lazy"></p><p>首先，期间共<strong>发生了 4 次用户态与内核态的上下文切换</strong>，因为发生了两次系统调用，一次是 <code>read()</code> ，一次是 <code>write()</code>，每次系统调用都得先从用户态切换到内核态，等内核完成任务后，再从内核态切换回用户态。</p><p>上下文切换到成本并不小，一次切换需要耗时几十纳秒到几微秒，虽然时间看上去很短，但是在高并发的场景下，这类时间容易被累积和放大，从而影响系统的性能。</p><p>其次，还<strong>发生了 4 次数据拷贝</strong>，其中两次是 DMA 的拷贝，另外两次则是通过 CPU 拷贝的，下面说一下这个过程：</p><ul><li><em>第一次拷贝</em>，把磁盘上的数据拷贝到操作系统内核的缓冲区里，这个拷贝的过程是通过 DMA 搬运的。</li><li><em>第二次拷贝</em>，把内核缓冲区的数据拷贝到用户的缓冲区里，于是我们应用程序就可以使用这部分数据了，这个拷贝到过程是由 CPU 完成的。</li><li><em>第三次拷贝</em>，把刚才拷贝到用户的缓冲区里的数据，再拷贝到内核的 socket 的缓冲区里，这个过程依然还是由 CPU 搬运的。</li><li><em>第四次拷贝</em>，把内核的 socket 缓冲区里的数据，拷贝到网卡的缓冲区里，这个过程又是由 DMA 搬运的。</li></ul><p>我们回过头看这个文件传输的过程，我们只是搬运一份数据，结果却搬运了 4 次，过多的数据拷贝无疑会消耗 CPU 资源，大大降低了系统性能。</p><p>这种简单又传统的文件传输方式，存在冗余的上文切换和数据拷贝，在高并发系统里是非常糟糕的，多了很多不必要的开销，会严重影响系统性能。</p><p>所以，<strong>要想提高文件传输的性能，就需要减少「用户态与内核态的上下文切换」和「内存拷贝」的次数</strong>。</p><h2 id="如何优化文件传输的性能" tabindex="-1"><a class="header-anchor" href="#如何优化文件传输的性能"><span>如何优化文件传输的性能？</span></a></h2><blockquote><p>如何减少「用户态与内核态的上下文切换」的次数呢？</p></blockquote><p>读取磁盘数据的时候，之所以要发生上下文切换，这是因为用户空间没有权限操作磁盘或网卡，内核的权限最高，这些操作设备的过程都需要交由操作系统内核来完成，所以一般要通过内核去完成某些任务的时候，就需要使用操作系统提供的系统调用函数。</p><p>而一次系统调用必然会发生 2 次上下文切换：首先从用户态切换到内核态，当内核执行完任务后，再切换回用户态交由进程代码执行。</p><p>所以，<strong>要想减少上下文切换到次数，就要减少系统调用的次数</strong>。</p><blockquote><p>如何减少「数据拷贝」的次数？</p></blockquote><p>在前面我们知道了，传统的文件传输方式会历经 4 次数据拷贝，而且这里面，「从内核的读缓冲区拷贝到用户的缓冲区里，再从用户的缓冲区里拷贝到 socket 的缓冲区里」，这个过程是没有必要的。</p><p>因为文件传输的应用场景中，在用户空间我们并不会对数据「再加工」，所以数据实际上可以不用搬运到用户空间，因此<strong>用户的缓冲区是没有必要存在的</strong>。</p><h2 id="零拷贝-1" tabindex="-1"><a class="header-anchor" href="#零拷贝-1"><span>零拷贝</span></a></h2><p>零复制（英语：Zero-copy；也译零拷贝）技术是指计算机执行操作时，CPU 不需要先将数据从某处内存复制到另一个特定区域。这种技术通常用于通过网络传输文件时节省 CPU 周期和内存带宽。</p><p>零拷贝技术实现的方式通常有 2 种：</p><ul><li><p>mmap + write</p><p>DMA 拷贝 2 次，CPU 拷贝 1 次，系统调用2次，上下文切换 4 次</p></li><li><p><strong>sendfile</strong></p><ul><li>DMA 拷贝 2 次，CPU 拷贝 1 次，系统调用1次，上下文切换 2 次</li><li>DMA 拷贝 2 次，CPU 拷贝 0 次，系统调用1次，上下文切换 2 次</li></ul></li></ul><h3 id="mmap-write" tabindex="-1"><a class="header-anchor" href="#mmap-write"><span>mmap + write</span></a></h3><p>在前面我们知道，<code>read()</code> 系统调用的过程中会把内核缓冲区的数据拷贝到用户的缓冲区里，于是为了减少这一步开销，我们可以用 <code>mmap()</code> 替换 <code>read()</code> 系统调用函数。</p><div class="language-c line-numbers-mode" data-highlighter="shiki" data-ext="c" data-title="c" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">buf </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">=</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> mmap</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">file</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> len</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">write</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">sockfd</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> buf</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> len</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p><code>mmap()</code> 系统调用函数会直接把内核缓冲区里的数据「<strong>映射</strong>」到用户空间，这样，操作系统内核与用户空间就不需要再进行任何的数据拷贝操作。</p><p><img src="https://cdn.xiaolincoding.com/gh/xiaolincoder/ImageHost2/操作系统/零拷贝/senfile-3次拷贝.png" alt="img" loading="lazy"></p><p>具体过程如下：</p><ol><li>应用进程调用了 <code>mmap()</code> 后，DMA 会把磁盘的数据拷贝到内核的缓冲区里。接着，应用进程跟操作系统内核「共享」这个缓冲区；</li><li>应用进程再调用 <code>write()</code>，操作系统直接将内核缓冲区的数据拷贝到 socket 缓冲区中，这一切都发生在内核态，由 CPU 来搬运数据；</li><li>把内核的 socket 缓冲区里的数据，拷贝到网卡的缓冲区里，这个过程是由 DMA 搬运的。</li></ol><p>我们可以得知，通过使用 <code>mmap()</code> 来代替 <code>read()</code>， 可以减少一次数据拷贝的过程。</p><p>但这还不是最理想的零拷贝，因为仍然需要通过 CPU 把内核缓冲区的数据拷贝到 socket 缓冲区里，而且仍然需要 4 次上下文切换，因为系统调用还是 2 次。</p><h3 id="sendfile" tabindex="-1"><a class="header-anchor" href="#sendfile"><span>sendfile</span></a></h3><p>但是这还不是真正的零拷贝技术，如果网卡支持 SG-DMA（<em>The Scatter-Gather Direct Memory Access</em>）技术（和普通的 DMA 有所不同），我们可以进一步减少通过 CPU 把内核缓冲区里的数据拷贝到 socket 缓冲区的过程。</p><h4 id="sg-dma" tabindex="-1"><a class="header-anchor" href="#sg-dma"><span>SG-DMA</span></a></h4><p>你可以在你的 Linux 系统通过下面这个命令，查看网卡是否支持 scatter-gather 特性：</p><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">ethtool</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -k</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> eth0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> | </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">grep</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> scatter-gather</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>从 Linux 内核 <code>2.4</code> 版本开始起，对于支持网卡支持 SG-DMA 技术的情况下， <code>sendfile()</code> 系统调用的过程发生了点变化，具体过程如下：</p><ul><li>第一步，通过 DMA 将磁盘上的数据拷贝到内核缓冲区里；</li><li>第二步，缓冲区描述符和数据长度传到 socket 缓冲区，这样网卡的 SG-DMA 控制器就可以直接将内核缓存中的数据拷贝到网卡的缓冲区里，此过程不需要将数据从操作系统内核缓冲区拷贝到 socket 缓冲区中，这样就减少了一次数据拷贝；</li></ul><p>所以，这个过程之中，只进行了 2 次数据拷贝，如下图：</p><p>这就是所谓的<strong>零拷贝（Zero-copy）技术，因为我们没有在内存层面去拷贝数据，也就是说全程没有通过 CPU 来搬运数据，所有的数据都是通过 DMA 来进行传输的。</strong></p><p>零拷贝技术的文件传输方式相比传统文件传输的方式，减少了 2 次上下文切换和数据拷贝次数，<strong>只需要 2 次上下文切换和数据拷贝次数，就可以完成文件的传输，而且 2 次的数据拷贝过程，都不需要通过 CPU，2 次都是由 DMA 来搬运。</strong></p><p>所以，总体来看，<strong>零拷贝技术可以把文件传输的性能提高至少一倍以上</strong>。</p><hr><ul><li>Kafka</li><li>Nginx</li><li>Netty</li><li>Java FileChannel#transferTo</li></ul>`,73)]))}const o=e(l,[["render",n],["__file","dma.html.vue"]]),d=JSON.parse(`{"path":"/cs/basic/os/io/dma.html","title":"零拷贝","lang":"en-US","frontmatter":{"description":"零拷贝 「Buffer 和 Cache」 buffer 和 cache 是两个不同的概念： cache 是高速缓存，用于 CPU 和内存之间的缓冲； buffer 是 I/O 缓存，用于内存和硬盘的缓冲。 简单的说，cache 是加速 「读」，而 buffer 是缓冲 「写」，前者解决读的问题，保存从磁盘上读出的数据，后者是解决写的问题，保存即将要写入...","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/cs/basic/os/io/dma.html"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"零拷贝"}],["meta",{"property":"og:description","content":"零拷贝 「Buffer 和 Cache」 buffer 和 cache 是两个不同的概念： cache 是高速缓存，用于 CPU 和内存之间的缓冲； buffer 是 I/O 缓存，用于内存和硬盘的缓冲。 简单的说，cache 是加速 「读」，而 buffer 是缓冲 「写」，前者解决读的问题，保存从磁盘上读出的数据，后者是解决写的问题，保存即将要写入..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.xiaolincoding.com/gh/xiaolincoder/ImageHost2/%E6%93%8D%E4%BD%9C%E7%B3%BB%E7%BB%9F/%E9%9B%B6%E6%8B%B7%E8%B4%9D/%E4%BC%A0%E7%BB%9F%E6%96%87%E4%BB%B6%E4%BC%A0%E8%BE%93.png"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-05-08T07:35:02.000Z"}],["meta",{"property":"article:modified_time","content":"2024-05-08T07:35:02.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"零拷贝\\",\\"image\\":[\\"https://cdn.xiaolincoding.com/gh/xiaolincoder/ImageHost2/%E6%93%8D%E4%BD%9C%E7%B3%BB%E7%BB%9F/%E9%9B%B6%E6%8B%B7%E8%B4%9D/%E4%BC%A0%E7%BB%9F%E6%96%87%E4%BB%B6%E4%BC%A0%E8%BE%93.png\\",\\"https://cdn.xiaolincoding.com/gh/xiaolincoder/ImageHost2/%E6%93%8D%E4%BD%9C%E7%B3%BB%E7%BB%9F/%E9%9B%B6%E6%8B%B7%E8%B4%9D/senfile-3%E6%AC%A1%E6%8B%B7%E8%B4%9D.png\\"],\\"dateModified\\":\\"2024-05-08T07:35:02.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[{"level":2,"title":"为什么要有 DMA 技术?","slug":"为什么要有-dma-技术","link":"#为什么要有-dma-技术","children":[]},{"level":2,"title":"传统的文件传输","slug":"传统的文件传输","link":"#传统的文件传输","children":[]},{"level":2,"title":"如何优化文件传输的性能？","slug":"如何优化文件传输的性能","link":"#如何优化文件传输的性能","children":[]},{"level":2,"title":"零拷贝","slug":"零拷贝-1","link":"#零拷贝-1","children":[{"level":3,"title":"mmap + write","slug":"mmap-write","link":"#mmap-write","children":[]},{"level":3,"title":"sendfile","slug":"sendfile","link":"#sendfile","children":[]}]}],"git":{"createdTime":1715153702000,"updatedTime":1715153702000,"contributors":[{"name":"刘大维","email":"davidliu@liudaweideMacBook-Pro.local","commits":1}]},"readingTime":{"minutes":10.98,"words":3294},"filePathRelative":"cs/basic/os/io/dma.md","localizedDate":"May 8, 2024","excerpt":"\\n<p><strong>「Buffer 和 Cache」</strong></p>\\n<p>buffer 和 cache 是两个不同的概念：</p>\\n<ul>\\n<li>\\n<p>cache 是高速缓存，用于 CPU 和内存之间的缓冲；</p>\\n</li>\\n<li>\\n<p>buffer 是 I/O 缓存，用于内存和硬盘的缓冲。</p>\\n</li>\\n</ul>\\n<p>简单的说，cache 是加速 <strong>「读」</strong>，而 buffer 是缓冲 <strong>「写」</strong>，前者解决读的问题，保存从磁盘上读出的数据，后者是解决写的问题，保存即将要写入到磁盘上的数据。</p>","autoDesc":true}`);export{o as comp,d as data};
