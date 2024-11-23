import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as l,d as a,o as t}from"./app-Cv-jMnVl.js";const p={};function n(s,i){return t(),l("div",null,i[0]||(i[0]=[a(`<h1 id="tcp" tabindex="-1"><a class="header-anchor" href="#tcp"><span>TCP</span></a></h1><p>TCP 是<strong>面向连接的、可靠的、基于字节流</strong>的传输层通信协议。</p><p>MTU: Maxitum Transmission Unit 最大传输单元</p><p>MSS: Maxitum Segment Size 最大分段大小</p><p>由于以太网 EthernetII 最大的数据帧是1518Bytes</p><p><img src="https://cdn.xiaolincoding.com/gh/xiaolincoder/ImageHost/计算机网络/TCP-参数/6.jpg" alt="TCP 头部" loading="lazy"></p><p>TCP 首部长度较长，会有一定的开销，首部在没有使用「选项」字段时是 <code>20</code> 个字节，如果使用了「选项」字段则会变长的。</p><p>标志位：</p><ul><li><p><code>SYN</code>：建立链接，同步序列号</p><p>SYN 报文被丢弃的两种场景：</p><ul><li>TCP 两个队列满了（半连接队列和全连接队列），造成 SYN 报文被丢弃</li><li>开启 tcp_tw_recycle 参数，并且在 NAT 环境下，造成 SYN 报文被丢弃</li></ul></li><li><p><code>FIN</code>：中止链接</p></li><li><p><code>ACK</code>：确认32位确认序号有效。</p><p>注意，<strong>ACK 报文是不会有重传的，当 ACK 丢失了，就由对方重传对应的报文</strong>。</p></li><li><p><code>RST</code>：<strong>复位报文</strong></p><ol><li>目的端口无监听。当连接请求到达时，目的端口没有进程正在监听，TCP会产生一个复位报文。（在UDP中，则产生一个ICMP端口不可达的信息）</li><li>异常终止链接。可以通过发送个复位报文段而不是FIN来中途释放一个连接，这种行为称为异常释放(abortive release)。 <ul><li>如窗口探测3次都发现接受窗口为0</li><li>连接中，收到错误的标志信号，如SYN等</li><li>客户端的连接被关闭/进程崩溃，客户端的内核就会回 RST 报文，服务端收到后就会释放连接。</li></ul></li></ol></li><li><p><code>URG</code>：</p></li><li><p><code>PSH</code>：</p><p>有点过时，目前没什么用途</p></li></ul><h2 id="连接管理" tabindex="-1"><a class="header-anchor" href="#连接管理"><span>连接管理</span></a></h2><p>连接：用于保证可靠性和流量控制维护的某些状态信息，这些信息的组合，包括 Socket、序列号和窗口大小称为连接。</p><p>建立一个 TCP 连接是需要客户端与服务端达成上述三个信息的共识。</p><ul><li><strong>Socket</strong>：由 IP 地址和端口号组成</li><li><strong>序列号</strong>：用来解决乱序问题等</li><li><strong>窗口大小</strong>：用来做流量控制</li></ul><p>TCP 四元组可以唯一的确定一个连接，四元组包括如下：</p><ul><li>源地址</li><li>源端口</li><li>目的地址</li><li>目的端口</li></ul><h3 id="建立连接-三次握手" tabindex="-1"><a class="header-anchor" href="#建立连接-三次握手"><span>建立连接 - 三次握手</span></a></h3><p>目的：同步序列号</p><p><img src="https://cdn.jsdelivr.net/gh/davidliuk/images@master/blog/TCP三次握手.drawio.png" alt="TCP 三次握手" loading="lazy"></p><p><strong>为什么每次建立 TCP 连接时，初始化的序列号都要求不一样呢？</strong></p><p>主要原因有两个方面：</p><ul><li>为了防止历史报文被下一个相同四元组的连接接收（主要方面）；</li><li>为了安全性，防止黑客伪造的相同序列号的 TCP 报文被对方接收；</li></ul><h4 id="tcp-半连接和全连接队列" tabindex="-1"><a class="header-anchor" href="#tcp-半连接和全连接队列"><span>TCP 半连接和全连接队列</span></a></h4><p>在 TCP 三次握手的时候，Linux 内核会维护两个队列，分别是：</p><ul><li>半连接队列，也称 SYN 队列；</li><li>全连接队列，也称 accept 队列；</li></ul><p><img src="https://cdn.jsdelivr.net/gh/davidliuk/images@master/blog/format,png-20230309230622886.png" alt="正常流程" loading="lazy"></p><p>不管是半连接队列还是全连接队列，都有最大长度限制，超过限制时，默认情况都会丢弃报文。</p><h4 id="syn-攻击" tabindex="-1"><a class="header-anchor" href="#syn-攻击"><span>SYN 攻击</span></a></h4><p>SYN 攻击方式最直接的表现就会把 TCP 半连接队列打满，这样<strong>当 TCP 半连接队列满了，后续再在收到 SYN 报文就会丢弃</strong>，导致客户端无法和服务端建立连接。</p><p>避免 SYN 攻击方式，可以有以下四种方法：</p><ul><li>增大 TCP 半连接队列；</li><li>开启 tcp_syncookies；</li><li>减少 SYN+ACK 重传次数</li><li>调大 netdev_max_backlog；</li></ul><p><strong>tcp_syncookies</strong></p><p>具体过程：</p><ul><li>当 「 SYN 队列」满之后，后续服务端收到 SYN 包，不会丢弃，而是根据算法，计算出一个 <code>cookie</code> 值；</li><li>将 cookie 值放到第二次握手报文的「序列号」里，然后服务端回第二次握手给客户端；</li><li>服务端接收到客户端的应答报文时，服务端会检查这个 ACK 包的合法性。如果合法，将该连接对象放入到「 Accept 队列」。</li><li>最后应用程序通过调用 <code>accpet()</code> 接口，从「 Accept 队列」取出的连接。</li></ul><p>可以看到，当开启了 tcp_syncookies 了，即使受到 SYN 攻击而导致 SYN 队列满时，也能保证正常的连接成功建立。</p><p>net.ipv4.tcp_syncookies 参数主要有以下三个值：</p><ul><li>0 值，表示关闭该功能；</li><li>1 值，表示仅当 SYN 半连接队列放不下时，再启用它；</li><li>2 值，表示无条件开启功能；</li></ul><p>那么在应对 SYN 攻击时，只需要设置为 1 即可。</p><h3 id="断开连接-四次挥手" tabindex="-1"><a class="header-anchor" href="#断开连接-四次挥手"><span>断开连接 - 四次挥手</span></a></h3><p><img src="https://cdn.jsdelivr.net/gh/davidliuk/images@master/blog/format,png-20230309230614791.png" alt="客户端主动关闭连接 —— TCP 四次挥手" loading="lazy"></p><p>再来回顾下四次挥手双方发 <code>FIN</code> 包的过程，就能理解为什么需要四次了。</p><ul><li>关闭连接时，客户端向服务端发送 <code>FIN</code> 时，仅仅表示客户端不再发送数据了但是还能接收数据。</li><li>服务端收到客户端的 <code>FIN</code> 报文时，先回一个 <code>ACK</code> 应答报文，而服务端可能还有数据需要处理和发送，等服务端不再发送数据时，才发送 <code>FIN</code> 报文给客户端来表示同意现在关闭连接。</li></ul><p>从上面过程可知，服务端通常需要等待完成数据的发送和处理，所以服务端的 <code>ACK</code> 和 <code>FIN</code> 一般都会分开发送，因此是需要四次挥手。</p><p>「没有数据要发送」并且「开启了 TCP 延迟确认机制」，那么第二和第三次挥手就会合并传输，这样就出现了三次挥手。</p><blockquote><p>什么是 TCP 延迟确认机制？</p></blockquote><p>当发送没有携带数据的 ACK，它的网络效率也是很低的，因为它也有 40 个字节的 IP 头 和 TCP 头，但却没有携带数据报文。 为了解决 ACK 传输效率低问题，所以就衍生出了 <strong>TCP 延迟确认</strong>。 TCP 延迟确认的策略：</p><ul><li>当有响应数据要发送时，ACK 会随着响应数据一起立刻发送给对方</li><li>当没有响应数据要发送时，ACK 将会延迟一段时间，以等待是否有响应数据可以一起发送</li><li>如果在延迟等待发送 ACK 期间，对方的第二个数据报文又到达了，这时就会立刻发送 ACK</li></ul><h3 id="异常处理" tabindex="-1"><a class="header-anchor" href="#异常处理"><span>异常处理</span></a></h3><h4 id="乱序报文" tabindex="-1"><a class="header-anchor" href="#乱序报文"><span>乱序报文</span></a></h4><p><strong>FIN 报文比数据包先抵达客户端</strong></p><p>在 FIN_WAIT_2 状态时，如果收到乱序的 FIN 报文，那么就被会加入到「乱序队列」，并不会进入到 TIME_WAIT 状态。</p><p>等再次收到前面被网络延迟的数据包时，会判断乱序队列有没有数据，然后会检测乱序队列中是否有可用的数据，如果能在乱序队列中找到与当前报文的序列号保持的顺序的报文，就会看该报文是否有 FIN 标志，如果发现有 FIN 标志，这时才会进入 TIME_WAIT 状态。</p><p><img src="https://cdn.xiaolincoding.com//mysql/other/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5bCP5p6XY29kaW5n,size_20,color_FFFFFF,t_70,g_se,x_16-20230309230147654.png" alt="img" loading="lazy"></p><h4 id="异常断开连接" tabindex="-1"><a class="header-anchor" href="#异常断开连接"><span>异常断开连接</span></a></h4><p>「<strong>客户端进程崩溃</strong>」，客户端的进程在发生崩溃的时候，内核会发送 FIN 报文，与服务端进行四次挥手。</p><p>「<strong>客户端主机宕机</strong>」，那么是不会发生四次挥手的，具体后续会发生什么？还要看服务端会不会发送数据？</p><ul><li>如果服务端会发送数据，由于客户端已经不存在，收不到数据报文的响应报文，服务端的数据报文会超时重传，当重传总间隔时长达到一定阈值（内核会根据 tcp_retries2 设置的值计算出一个阈值）后，会断开 TCP 连接；</li><li>如果服务端一直不会发送数据，再看服务端有没有开启 TCP keepalive 机制？ <ul><li>如果有开启，服务端在一段时间没有进行数据交互时，会触发 TCP keepalive 机制，探测对方是否存在，如果探测到对方已经消亡，则会断开自身的 TCP 连接；</li><li>如果没有开启，服务端的 TCP 连接会一直存在，并且一直保持在 ESTABLISHED 状态。</li></ul></li></ul><h2 id="可靠传输" tabindex="-1"><a class="header-anchor" href="#可靠传输"><span>可靠传输</span></a></h2><p>无差错、不丢失、不重复、按序到达。</p><h3 id="重传机制" tabindex="-1"><a class="header-anchor" href="#重传机制"><span>重传机制</span></a></h3><ul><li>超时重传</li><li>快速重传</li><li>选择确认：SACK方法</li><li>D-SACK方法</li></ul><p>超时重传</p><p>在发送数据时，设定一个定时器，当超过指定的时间后，没有收到对方的 <code>ACK</code> 确认应答报文，就会重发该数据。</p><ul><li>数据包丢失</li><li>确认应答丢失</li></ul><p><strong>超时重传时间 RTO 的值应该略大于报文往返 RTT 的值</strong>。</p><p>快速重传</p><p>快速重传的工作方式是当收到三个相同的 ACK 报文时，会在定时器过期之前，重传丢失的报文段。</p><p>快速重传机制只解决了一个问题，就是超时时间的问题，但是它依然面临着另外一个问题。就是<strong>重传的时候，是重传一个，还是重传所有的问题。</strong></p><p>SACK</p><p>这种方式需要在 TCP 头部「选项」字段里加一个 <code>SACK</code> 的东西，它<strong>可以将已收到的数据的信息发送给「发送方」</strong>，这样发送方就可以知道哪些数据收到了，哪些数据没收到，知道了这些信息，就可以<strong>只重传丢失的数据</strong>。</p><p><code>D-SACK</code> 有这么几个好处：</p><ol><li>可以让「发送方」知道，是发出去的包丢了，还是接收方回应的 ACK 包丢了;</li><li>可以知道是不是「发送方」的数据包被网络延迟了;</li><li>可以知道网络中是不是把「发送方」的数据包给复制了;</li></ol><h3 id="滑动窗口" tabindex="-1"><a class="header-anchor" href="#滑动窗口"><span>滑动窗口</span></a></h3><p>为解决这个问题，TCP 引入了<strong>窗口</strong>这个概念。即使在往返时间较长的情况下，它也不会降低网络通信的效率。</p><p>那么有了窗口，就可以指定窗口大小，窗口大小就是指<strong>无需等待确认应答，而可以继续发送数据的最大值</strong>。</p><p>窗口的实现实际上是操作系统开辟的一个缓存空间，发送方主机在等到确认应答返回之前，必须在缓冲区中保留已发送的数据。如果按期收到确认应答，此时数据就可以从缓存区清除。</p><p>图中的 ACK 600 确认应答报文丢失，也没关系，因为可以通过下一个确认应答进行确认，只要发送方收到了 ACK 700 确认应答，就意味着 700 之前的所有数据「接收方」都收到了。这个模式就叫<strong>累计确认</strong>或者<strong>累计应答</strong>。</p><p>TCP 头里有一个字段叫 <code>Window</code>，也就是窗口大小。</p><p><strong>这个字段是接收端告诉发送端自己还有多少缓冲区可以接收数据。于是发送端就可以根据这个接收端的处理能力来发送数据，而不会导致接收端处理不过来。</strong></p><p>所以，通常窗口的大小是由接收方的窗口大小来决定的。</p><p>发送方发送的数据大小不能超过接收方的窗口大小，否则接收方就无法正常接收到数据。</p><p>并不是完全相等，接收窗口的大小是<strong>约等于</strong>发送窗口的大小的。</p><p>因为滑动窗口并不是一成不变的。比如，当接收方的应用进程读取数据的速度非常快的话，这样的话接收窗口可以很快的就空缺出来。那么新的接收窗口大小，是通过 TCP 报文中的 Windows 字段来告诉发送方。那么这个传输过程是存在时延的，所以接收窗口和发送窗口是约等于的关系。</p><h3 id="流量控制" tabindex="-1"><a class="header-anchor" href="#流量控制"><span>流量控制</span></a></h3><p><code>RcvWindow=RcvBuffer-[LastByteRcvd-LastByteRead]</code></p><h3 id="拥塞控制" tabindex="-1"><a class="header-anchor" href="#拥塞控制"><span>拥塞控制</span></a></h3><ul><li>慢启动</li><li>拥塞避免</li><li>拥塞发生</li><li>快速恢复</li></ul><h3 id="报文丢失" tabindex="-1"><a class="header-anchor" href="#报文丢失"><span>报文丢失</span></a></h3><h2 id="字节流" tabindex="-1"><a class="header-anchor" href="#字节流"><span>字节流</span></a></h2><p>之所以会说 TCP 是面向字节流的协议，UDP 是面向报文的协议，是因为操作系统对 TCP 和 UDP 协议的<strong>发送方的机制不同</strong>，也就是问题原因在发送方。</p><blockquote><p>先来说说为什么 UDP 是面向报文的协议？</p></blockquote><p>当用户消息通过 UDP 协议传输时，<strong>操作系统不会对消息进行拆分</strong>，在组装好 UDP 头部后就交给网络层来处理，所以发出去的 UDP 报文中的数据部分就是完整的用户消息，也就是<strong>每个 UDP 报文就是一个用户消息的边界</strong>，这样接收方在接收到 UDP 报文后，读一个 UDP 报文就能读取到完整的用户消息。</p><p>你可能会问，如果收到了两个 UDP 报文，操作系统是怎么区分开的？</p><p>操作系统在收到 UDP 报文后，会将其插入到队列里，<strong>队列里的每一个元素就是一个 UDP 报文</strong>，这样当用户调用 recvfrom() 系统调用读数据的时候，就会从队列里取出一个数据，然后从内核里拷贝给用户缓冲区。</p><blockquote><p>再来说说为什么 TCP 是面向字节流的协议？</p></blockquote><p>当用户消息通过 TCP 协议传输时，<strong>消息可能会被操作系统分组成多个的 TCP 报文</strong>，也就是一个完整的用户消息被拆分成多个 TCP 报文进行传输。</p><p>这时，接收方的程序如果不知道发送方发送的消息的长度，也就是不知道消息的边界时，是无法读出一个有效的用户消息的，因为用户消息被拆分成多个 TCP 报文后，并不能像 UDP 那样，一个 UDP 报文就能代表一个完整的用户消息。</p><p>举个实际的例子来说明。</p><p>发送方准备发送 「Hi.」和「I am Xiaolin」这两个消息。</p><p>在发送端，当我们调用 send 函数完成数据“发送”以后，数据并没有被真正从网络上发送出去，只是从应用程序拷贝到了操作系统内核协议栈中。</p><p>至于什么时候真正被发送，<strong>取决于发送窗口、拥塞窗口以及当前发送缓冲区的大小等条件</strong>。也就是说，我们不能认为每次 send 调用发送的数据，都会作为一个整体完整地消息被发送出去。</p><p>如果我们考虑实际网络传输过程中的各种影响，假设发送端陆续调用 send 函数先后发送 「Hi.」和「I am Xiaolin」 报文，那么实际的发送很有可能是这几种情况。</p><p>第一种情况，这两个消息被分到同一个 TCP 报文，像这样：‘</p><p>类似的情况还能举例很多种，这里主要是想说明，我们不知道 「Hi.」和 「I am Xiaolin」 这两个用户消息是如何进行 TCP 分组传输的。</p><p>因此，<strong>我们不能认为一个用户消息对应一个 TCP 报文，正因为这样，所以 TCP 是面向字节流的协议</strong>。</p><p>当两个消息的某个部分内容被分到同一个 TCP 报文时，就是我们常说的 TCP 粘包问题，这时接收方不知道消息的边界的话，是无法读出有效的消息。</p><h3 id="如何解决粘包" tabindex="-1"><a class="header-anchor" href="#如何解决粘包"><span>如何解决粘包？</span></a></h3><p>粘包的问题出现是因为不知道一个用户消息的边界在哪，如果知道了边界在哪，接收方就可以通过边界来划分出有效的用户消息。</p><p>一般有三种方式分包的方式：</p><ul><li>固定长度的消息；</li><li>特殊字符作为边界；</li><li>自定义消息结构。</li></ul><h3 id="固定长度的消息" tabindex="-1"><a class="header-anchor" href="#固定长度的消息"><span>固定长度的消息</span></a></h3><p>这种是最简单方法，即每个用户消息都是固定长度的，比如规定一个消息的长度是 64 个字节，当接收方接满 64 个字节，就认为这个内容是一个完整且有效的消息。</p><p>但是这种方式灵活性不高，实际中很少用。</p><h3 id="特殊字符作为边界" tabindex="-1"><a class="header-anchor" href="#特殊字符作为边界"><span>特殊字符作为边界</span></a></h3><p>我们可以在两个用户消息之间插入一个特殊的字符串，这样接收方在接收数据时，读到了这个特殊字符，就把认为已经读完一个完整的消息。</p><p>HTTP 是一个非常好的例子。</p><p><img src="https://cdn.xiaolincoding.com//mysql/other/a49a6bb8cd38ae1738d9c00aec68b444.png" alt="图片" loading="lazy"></p><p>HTTP 通过设置回车符、换行符作为 HTTP 报文协议的边界。</p><p>有一点要注意，这个作为边界点的特殊字符，如果刚好消息内容里有这个特殊字符，我们要对这个字符转义，避免被接收方当作消息的边界点而解析到无效的数据。</p><h3 id="自定义消息结构" tabindex="-1"><a class="header-anchor" href="#自定义消息结构"><span>自定义消息结构</span></a></h3><blockquote><p>类似Redis SDS实现变长字符串的思路</p></blockquote><p>我们可以自定义一个消息结构，由包头和数据组成，其中包头包是固定大小的，而且包头里有一个字段来说明紧随其后的数据有多大。</p><p>比如这个消息结构体，首先 4 个字节大小的变量来表示数据长度，真正的数据则在后面。</p><div class="language-c line-numbers-mode" data-highlighter="shiki" data-ext="c" data-title="c" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">struct</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> { </span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">    u_int32_t</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> message_length; </span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    char</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> message_data</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">[]</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">; </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">} message;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当接收方接收到包头的大小（比如 4 个字节）后，就解析包头的内容，于是就可以知道数据的长度，然后接下来就继续读取数据，直到读满数据的长度，就可以组装成一个完整到用户消息来处理了。</p><h2 id="缺点" tabindex="-1"><a class="header-anchor" href="#缺点"><span>缺点</span></a></h2><h3 id="升级-tcp-的工作很困难" tabindex="-1"><a class="header-anchor" href="#升级-tcp-的工作很困难"><span>升级 TCP 的工作很困难</span></a></h3><p>TCP 协议是诞生在 1973 年，至今 TCP 协议依然还在实现更多的新特性。</p><p>但是 TCP 协议是在<strong>内核</strong>中实现的，应用程序只能使用不能修改，如果要想升级 TCP 协议，那么只能升级内核。</p><p>而升级内核这个工作是很麻烦的事情，麻烦的事情不是说升级内核这个操作很麻烦，而是由于内核升级涉及到底层软件和运行库的更新，我们的服务程序就需要回归测试是否兼容新的内核版本，所以服务器的内核升级也比较保守和缓慢。</p><p>很多 TCP 协议的新特性，都是需要客户端和服务端同时支持才能生效的，比如 TCP Fast Open 这个特性，虽然在2013 年就被提出了，但是 Windows 很多系统版本依然不支持它，这是因为 PC 端的系统升级滞后很严重，Windows Xp 现在还有大量用户在使用，尽管它已经存在快 20 年。</p><p>所以，即使 TCP 有比较好的特性更新，也很难快速推广，用户往往要几年或者十年才能体验到。</p><h3 id="tcp-建立连接的延迟" tabindex="-1"><a class="header-anchor" href="#tcp-建立连接的延迟"><span>TCP 建立连接的延迟</span></a></h3><p>基于 TCP 实现的应用协议，都是需要先建立三次握手才能进行数据传输，比如 HTTP 1.0/1.1、HTTP/2、HTTPS。</p><p>现在大多数网站都是使用 HTTPS 的，这意味着在 TCP 三次握手之后，还需要经过 TLS 四次握手后，才能进行 HTTP 数据的传输，这在一定程序上增加了数据传输的延迟。</p><p>TCP 三次握手和 TLS 握手延迟，如图：</p><p>TCP 三次握手的延迟被 TCP Fast Open （快速打开）这个特性解决了，这个特性可以在「第二次建立连接」时减少 TCP 连接建立的时延。</p><p><img src="https://cdn.xiaolincoding.com/gh/xiaolincoder/ImageHost/计算机网络/TCP-Wireshark/45.jpg" alt="常规 HTTP 请求 与 Fast  Open HTTP 请求" loading="lazy"></p><p>过程如下：</p><ul><li>在第一次建立连接的时候，服务端在第二次握手产生一个 <code>Cookie</code> （已加密）并通过 SYN、ACK 包一起发给客户端，于是客户端就会缓存这个 <code>Cookie</code>，所以第一次发起 HTTP Get 请求的时候，还是需要 2 个 RTT 的时延；</li><li>在下次请求的时候，客户端在 SYN 包带上 <code>Cookie</code> 发给服务端，就提前可以跳过三次握手的过程，因为 <code>Cookie</code> 中维护了一些信息，服务端可以从 <code>Cookie</code> 获取 TCP 相关的信息，这时发起的 HTTP GET 请求就只需要 1 个 RTT 的时延；</li></ul><p>TCP Fast Open 这个特性是不错，但是它需要服务端和客户端的操作系统同时支持才能体验到，而 TCP Fast Open 是在 2013 年提出的，所以市面上依然有很多老式的操作系统不支持，而升级操作系统是很麻烦的事情，因此 TCP Fast Open 很难被普及开来。</p><p>还有一点，针对 HTTPS 来说，TLS 是在应用层实现的握手，而 TCP 是在内核实现的握手，这两个握手过程是无法结合在一起的，总是得先完成 TCP 握手，才能进行 TLS 握手。</p><p>也正是 TCP 是在内核实现的，所以 TLS 是无法对 TCP 头部加密的，这意味着 TCP 的序列号都是明文传输，所以就存安全的问题。</p><p>一个典型的例子就是攻击者伪造一个的 RST 报文强制关闭一条 TCP 连接，而攻击成功的关键则是 TCP 字段里的序列号位于接收方的滑动窗口内，该报文就是合法的。</p><p>大胆想一下，如果 TCP 的序列号也能被加密，或许真的不需要三次握手了，客户端和服务端的初始序列号都从 0 开始，也就不用做同步序列号的工作了，但是要实现这个要改造整个协议栈，太过于麻烦，即使实现出来了，很多老的网络设备未必能兼容。</p><h3 id="tcp-存在队头阻塞问题" tabindex="-1"><a class="header-anchor" href="#tcp-存在队头阻塞问题"><span>TCP 存在队头阻塞问题</span></a></h3><p>TCP 是字节流协议，<strong>TCP 层必须保证收到的字节数据是完整且有序的</strong>，如果序列号较低的 TCP 段在网络传输中丢失了，即使序列号较高的 TCP 段已经被接收了，应用层也无法从内核中读取到这部分数据。如下图：</p>`,146)]))}const c=e(p,[["render",n],["__file","TCP.html.vue"]]),d=JSON.parse(`{"path":"/cs/basic/network/transport/TCP.html","title":"TCP","lang":"en-US","frontmatter":{"description":"TCP TCP 是面向连接的、可靠的、基于字节流的传输层通信协议。 MTU: Maxitum Transmission Unit 最大传输单元 MSS: Maxitum Segment Size 最大分段大小 由于以太网 EthernetII 最大的数据帧是1518Bytes TCP 头部 TCP 首部长度较长，会有一定的开销，首部在没有使用「选项」字...","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/cs/basic/network/transport/TCP.html"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"TCP"}],["meta",{"property":"og:description","content":"TCP TCP 是面向连接的、可靠的、基于字节流的传输层通信协议。 MTU: Maxitum Transmission Unit 最大传输单元 MSS: Maxitum Segment Size 最大分段大小 由于以太网 EthernetII 最大的数据帧是1518Bytes TCP 头部 TCP 首部长度较长，会有一定的开销，首部在没有使用「选项」字..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.xiaolincoding.com/gh/xiaolincoder/ImageHost/%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%BD%91%E7%BB%9C/TCP-%E5%8F%82%E6%95%B0/6.jpg"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-06-27T01:21:47.000Z"}],["meta",{"property":"article:modified_time","content":"2024-06-27T01:21:47.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"TCP\\",\\"image\\":[\\"https://cdn.xiaolincoding.com/gh/xiaolincoder/ImageHost/%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%BD%91%E7%BB%9C/TCP-%E5%8F%82%E6%95%B0/6.jpg\\",\\"https://cdn.jsdelivr.net/gh/davidliuk/images@master/blog/TCP%E4%B8%89%E6%AC%A1%E6%8F%A1%E6%89%8B.drawio.png\\",\\"https://cdn.jsdelivr.net/gh/davidliuk/images@master/blog/format,png-20230309230622886.png\\",\\"https://cdn.jsdelivr.net/gh/davidliuk/images@master/blog/format,png-20230309230614791.png\\",\\"https://cdn.xiaolincoding.com//mysql/other/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5bCP5p6XY29kaW5n,size_20,color_FFFFFF,t_70,g_se,x_16-20230309230147654.png\\",\\"https://cdn.xiaolincoding.com//mysql/other/a49a6bb8cd38ae1738d9c00aec68b444.png\\",\\"https://cdn.xiaolincoding.com/gh/xiaolincoder/ImageHost/%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%BD%91%E7%BB%9C/TCP-Wireshark/45.jpg\\"],\\"dateModified\\":\\"2024-06-27T01:21:47.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[{"level":2,"title":"连接管理","slug":"连接管理","link":"#连接管理","children":[{"level":3,"title":"建立连接 - 三次握手","slug":"建立连接-三次握手","link":"#建立连接-三次握手","children":[]},{"level":3,"title":"断开连接 - 四次挥手","slug":"断开连接-四次挥手","link":"#断开连接-四次挥手","children":[]},{"level":3,"title":"异常处理","slug":"异常处理","link":"#异常处理","children":[]}]},{"level":2,"title":"可靠传输","slug":"可靠传输","link":"#可靠传输","children":[{"level":3,"title":"重传机制","slug":"重传机制","link":"#重传机制","children":[]},{"level":3,"title":"滑动窗口","slug":"滑动窗口","link":"#滑动窗口","children":[]},{"level":3,"title":"流量控制","slug":"流量控制","link":"#流量控制","children":[]},{"level":3,"title":"拥塞控制","slug":"拥塞控制","link":"#拥塞控制","children":[]},{"level":3,"title":"报文丢失","slug":"报文丢失","link":"#报文丢失","children":[]}]},{"level":2,"title":"字节流","slug":"字节流","link":"#字节流","children":[{"level":3,"title":"如何解决粘包？","slug":"如何解决粘包","link":"#如何解决粘包","children":[]},{"level":3,"title":"固定长度的消息","slug":"固定长度的消息","link":"#固定长度的消息","children":[]},{"level":3,"title":"特殊字符作为边界","slug":"特殊字符作为边界","link":"#特殊字符作为边界","children":[]},{"level":3,"title":"自定义消息结构","slug":"自定义消息结构","link":"#自定义消息结构","children":[]}]},{"level":2,"title":"缺点","slug":"缺点","link":"#缺点","children":[{"level":3,"title":"升级 TCP 的工作很困难","slug":"升级-tcp-的工作很困难","link":"#升级-tcp-的工作很困难","children":[]},{"level":3,"title":"TCP 建立连接的延迟","slug":"tcp-建立连接的延迟","link":"#tcp-建立连接的延迟","children":[]},{"level":3,"title":"TCP 存在队头阻塞问题","slug":"tcp-存在队头阻塞问题","link":"#tcp-存在队头阻塞问题","children":[]}]}],"git":{"createdTime":1715153702000,"updatedTime":1719451307000,"contributors":[{"name":"刘大维","email":"davidliu@liudaweideMacBook-Pro.local","commits":2}]},"readingTime":{"minutes":18.44,"words":5531},"filePathRelative":"cs/basic/network/transport/TCP.md","localizedDate":"May 8, 2024","excerpt":"\\n<p>TCP 是<strong>面向连接的、可靠的、基于字节流</strong>的传输层通信协议。</p>\\n<p>MTU: Maxitum Transmission Unit 最大传输单元</p>\\n<p>MSS: Maxitum Segment Size 最大分段大小</p>\\n<p>由于以太网 EthernetII 最大的数据帧是1518Bytes</p>\\n<p><img src=\\"https://cdn.xiaolincoding.com/gh/xiaolincoder/ImageHost/计算机网络/TCP-参数/6.jpg\\" alt=\\"TCP 头部\\" loading=\\"lazy\\"></p>","autoDesc":true}`);export{c as comp,d as data};
