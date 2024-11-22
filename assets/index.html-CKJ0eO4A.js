import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as s,d as t,o as a}from"./app-C8HRrJwL.js";const n={};function l(p,e){return a(),s("div",null,e[0]||(e[0]=[t(`<h1 id="netty" tabindex="-1"><a class="header-anchor" href="#netty"><span>Netty</span></a></h1><p>Netty基于NIO(NIO是一种同步非阻塞的I/O模型，在Java1.4中引入了NIO),使用Netty可以极大地简化TCP和UDP套接字服务器等网络编程，并且性能以及安全性等很多方面都非常优秀。</p><p>大部分框架底层涉及到网络通信的部分都是基于Netty来做的，比如说Spring Cloud生态系统中的网关Spring Cloud Gateway。我们平常经常接触的Dubbo、RocketMQ、Elasticsearch、gRPC、Spark等等热门开源项目都用到了Netty。</p><h3 id="bytebuf" tabindex="-1"><a class="header-anchor" href="#bytebuf"><span>Bytebuf</span></a></h3><p>字节容器</p><p>网络通信最终都是通过字节流进行传输的。ByteBuf就是Netty提供的一个字节容器，其内部是一个字节数组。当我们通过Netty传输数据的时候，就是通过ByteBuf进行的。我们可以将ByteBuf看作是Netty对Java NIO提供了ByteBuffer字节容器的封装和抽象。</p><p>有很多小伙伴可能就要问了：为什么不直接使用Java NIO提供的ByteBuffer呢？</p><p>因为ByteBuffer这个类使用起来过于复杂和繁琐。</p><h3 id="bootstrap和serverbootstrap-启动引导类" tabindex="-1"><a class="header-anchor" href="#bootstrap和serverbootstrap-启动引导类"><span>Bootstrap和ServerBootstrap(启动引导类)</span></a></h3><h3 id="channel-网络操作抽象类" tabindex="-1"><a class="header-anchor" href="#channel-网络操作抽象类"><span>Channel（网络操作抽象类）</span></a></h3><p>Channel 接口是 Netty 对网络操作抽象类。通过 Channel 我们可以进行 I/O 操作。</p><p>一旦客户端成功连接服务端，就会新建一个 Channel 同该用户端进行绑定，示例代码如下：</p><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">//  通过 Bootstrap 的 connect 方法连接到服务端</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">public</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> Channel</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> doConnect</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">(</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">InetSocketAddress</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> inetSocketAddress) {</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">    CompletableFuture</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">Channel</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">&gt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> completableFuture </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> new</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> CompletableFuture</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;&gt;</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">()</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">    bootstrap</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">connect</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(inetSocketAddress).</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">addListener</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">((ChannelFutureListener) future </span><span style="--shiki-light:#C18401;--shiki-dark:#C678DD;">-&gt;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">future</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">isSuccess</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">()) {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">            completableFuture</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">complete</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">future</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">channel</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">());</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        } </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">else</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">            throw</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> new</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> IllegalStateException</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    });</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    return</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> completableFuture</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">get</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>比较常用的Channel接口实现类是 ：</p><ul><li></li></ul><h2 id="nioserversocketchannel-服务端" tabindex="-1"><a class="header-anchor" href="#nioserversocketchannel-服务端"><span>NioServerSocketChannel（服务端）</span></a></h2><p>NioSocketChannel（客户端）</p><p>这两个 Channel 可以和 BIO 编程模型中的ServerSocket以及Socket两个概念对应上。</p><h3 id="eventloop-事件循环" tabindex="-1"><a class="header-anchor" href="#eventloop-事件循环"><span>EventLoop（事件循环）</span></a></h3><p>EventLoop 介绍</p><p>这么说吧！EventLoop（事件循环）接口可以说是 Netty 中最核心的概念了！</p><p>《Netty 实战》这本书是这样介绍它的：</p><p>EventLoop 定义了 Netty 的核心抽象，用于处理连接的生命周期中所发生的事件。</p><p>是不是很难理解？说实话，我学习 Netty 的时候看到这句话是没太能理解的。</p><p>说白了，EventLoop 的主要作用实际就是责监听网络事件并调用事件处理器进行相关 I/O 操作（读写）的处理。</p><p>Channel 和 EventLoop 的关系</p><p>那 Channel 和 EventLoop 直接有啥联系呢？</p><p>Channel 为 Netty 网络操作(读写等操作)抽象类，EventLoop 负责处理注册到其上的Channel 的 I/O 操作，两者配合进行 I/O 操作。</p><p>EventloopGroup 和 EventLoop 的关系</p><p>EventLoopGroup 包含多个 EventLoop（每一个 EventLoop 通常内部包含一个线程），它管理着所有的 EventLoop 的生命周期。</p><p>并且，EventLoop 处理的 I/O 事件都将在它专有的 Thread 上被处理，即 Thread 和 EventLoop 属于 1 : 1 的关系，从而保证线程安全。</p><p>下图是 Netty NIO 模型对应的 EventLoop 模型。通过这个图应该可以将EventloopGroup、EventLoop、 Channel三者联系起来。</p><h3 id="零拷贝" tabindex="-1"><a class="header-anchor" href="#零拷贝"><span>零拷贝</span></a></h3><p>零复制（英语：Zero-copy；也译零拷贝）技术是指计算机执行操作时，CPU 不需要先将数据从某处内存复制到另一个特定区域。这种技术通常用于通过网络传输文件时节省 CPU 周期和内存带宽。</p><p>在 OS 层面上的 Zero-copy 通常指避免在 用户态(User-space) 与 内核态(Kernel-space) 之间来回拷贝数据。而在 Netty 层面 ，零拷贝主要体现在对于数据操作的优化。</p><p>Netty 中的零拷贝体现在以下几个方面：</p><ol><li>通过 FileRegion 包装的<code>FileChannel#tranferTo()</code> 实现文件传输, 可以直接将文件缓冲区的数据发送到目标 Channel, 避免了传统通过循环 write 方式导致的内存拷贝问题。这个调用了操作系统底层的sendFile（如果不行就换mmap或普通传）</li><li>堆外内存，避免 JVM 堆内存到堆外内存的数据拷贝。</li><li>使用 Netty 提供的 CompositeByteBuf 类, 可以将多个ByteBuf 合并为一个逻辑上的 ByteBuf, 避免了各个 ByteBuf 之间的拷贝。</li><li>通过 Unpooled.wrappedBuffer 可以将 byte 数组包装成 ByteBuf 对象，包装过程中不会产生内存拷贝。</li><li>ByteBuf 支持 slice 操作, 因此可以将 ByteBuf 分解为多个共享同一个存储区域的 ByteBuf, 避免了内存的拷贝。</li></ol>`,37)]))}const o=i(n,[["render",l],["__file","index.html.vue"]]),k=JSON.parse(`{"path":"/se/lang/java/framework/web/netty/","title":"Netty","lang":"en-US","frontmatter":{"description":"Netty Netty基于NIO(NIO是一种同步非阻塞的I/O模型，在Java1.4中引入了NIO),使用Netty可以极大地简化TCP和UDP套接字服务器等网络编程，并且性能以及安全性等很多方面都非常优秀。 大部分框架底层涉及到网络通信的部分都是基于Netty来做的，比如说Spring Cloud生态系统中的网关Spring Cloud Gatew...","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/se/lang/java/framework/web/netty/"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"Netty"}],["meta",{"property":"og:description","content":"Netty Netty基于NIO(NIO是一种同步非阻塞的I/O模型，在Java1.4中引入了NIO),使用Netty可以极大地简化TCP和UDP套接字服务器等网络编程，并且性能以及安全性等很多方面都非常优秀。 大部分框架底层涉及到网络通信的部分都是基于Netty来做的，比如说Spring Cloud生态系统中的网关Spring Cloud Gatew..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-11-09T18:37:53.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-09T18:37:53.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Netty\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-09T18:37:53.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[{"level":3,"title":"Bytebuf","slug":"bytebuf","link":"#bytebuf","children":[]},{"level":3,"title":"Bootstrap和ServerBootstrap(启动引导类)","slug":"bootstrap和serverbootstrap-启动引导类","link":"#bootstrap和serverbootstrap-启动引导类","children":[]},{"level":3,"title":"Channel（网络操作抽象类）","slug":"channel-网络操作抽象类","link":"#channel-网络操作抽象类","children":[]},{"level":2,"title":"NioServerSocketChannel（服务端）","slug":"nioserversocketchannel-服务端","link":"#nioserversocketchannel-服务端","children":[{"level":3,"title":"EventLoop（事件循环）","slug":"eventloop-事件循环","link":"#eventloop-事件循环","children":[]},{"level":3,"title":"零拷贝","slug":"零拷贝","link":"#零拷贝","children":[]}]}],"git":{"createdTime":1715153702000,"updatedTime":1731177473000,"contributors":[{"name":"刘大维","email":"davidliu@liudaweideMacBook-Pro-3.local","commits":1}]},"readingTime":{"minutes":3.64,"words":1093},"filePathRelative":"se/lang/java/framework/web/netty/README.md","localizedDate":"May 8, 2024","excerpt":"\\n<p>Netty基于NIO(NIO是一种同步非阻塞的I/O模型，在Java1.4中引入了NIO),使用Netty可以极大地简化TCP和UDP套接字服务器等网络编程，并且性能以及安全性等很多方面都非常优秀。</p>\\n<p>大部分框架底层涉及到网络通信的部分都是基于Netty来做的，比如说Spring Cloud生态系统中的网关Spring Cloud Gateway。我们平常经常接触的Dubbo、RocketMQ、Elasticsearch、gRPC、Spark等等热门开源项目都用到了Netty。</p>\\n<h3>Bytebuf</h3>\\n<p>字节容器</p>\\n<p>网络通信最终都是通过字节流进行传输的。ByteBuf就是Netty提供的一个字节容器，其内部是一个字节数组。当我们通过Netty传输数据的时候，就是通过ByteBuf进行的。我们可以将ByteBuf看作是Netty对Java NIO提供了ByteBuffer字节容器的封装和抽象。</p>","autoDesc":true}`);export{o as comp,k as data};
