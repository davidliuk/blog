import{_ as o}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as e,d as r,o as n}from"./app-C8HRrJwL.js";const s={};function g(a,t){return n(),e("div",null,t[0]||(t[0]=[r('<h1 id="rpc" tabindex="-1"><a class="header-anchor" href="#rpc"><span>RPC</span></a></h1><p>而 <strong>RPC</strong>（<strong>R</strong>emote <strong>P</strong>rocedure <strong>C</strong>all），又叫做<strong>远程过程调用</strong>。它本身并不是一个具体的协议，而是一种<strong>调用方式</strong>。</p><p>举个例子，我们平时调用一个<strong>本地方法</strong>就像下面这样。</p><div class="language-text line-numbers-mode" data-highlighter="shiki" data-ext="text" data-title="text" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span> res = localFunc(req)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>如果现在这不是个本地方法，而是个<strong>远端服务器</strong>暴露出来的一个方法 <code>remoteFunc</code>，如果我们还能像调用本地方法那样去调用它，这样就可以<strong>屏蔽掉一些网络细节</strong>，用起来更方便，岂不美哉？</p><p>基于这个思路，大佬们造出了非常多款式的 RPC 协议，比如比较有名的<code>gRPC</code>，<code>thrift</code>。</p><p>值得注意的是，虽然大部分 RPC 协议底层使用 TCP，但实际上<strong>它们不一定非得使用 TCP，改用 UDP 或者 HTTP，其实也可以做到类似的功能。</strong></p><blockquote><p>那既然有 RPC 了，为什么还要有 HTTP 呢？</p></blockquote><p>其实，<code>TCP</code> 是<strong>70年</strong>代出来的协议，而 <code>HTTP</code> 是 <strong>90 年代</strong>才开始流行的。而直接使用裸 TCP 会有问题，可想而知，这中间这么多年有多少自定义的协议，而这里面就有<strong>80年代</strong>出来的 <code>RPC</code>。</p><p>所以我们该问的不是<strong>既然有 HTTP 协议为什么要有 RPC</strong>，而是<strong>为什么有 RPC 还要有 HTTP 协议</strong>。</p><p>现在电脑上装的各种<strong>联网</strong>软件，比如 xx管家，xx卫士，它们都作为<strong>客户端（Client）需要跟服务端（Server）建立连接收发消息</strong>，此时都会用到应用层协议，在这种 Client/Server (C/S) 架构下，它们可以使用自家造的 RPC 协议，因为它只管连自己公司的服务器就 ok 了。</p><p>但有个软件不同，<strong>浏览器（Browser）</strong>，不管是 Chrome 还是 IE，它们不仅要能访问自家公司的<strong>服务器（Server）</strong>，还需要访问其他公司的网站服务器，因此它们需要有个统一的标准，不然大家没法交流。于是，HTTP 就是那个时代用于统一 <strong>Browser/Server (B/S)</strong> 的协议。</p><p>也就是说在多年以前，<strong>HTTP 主要用于 B/S 架构，而 RPC 更多用于 C/S 架构。但现在其实已经没分那么清了，B/S 和 C/S 在慢慢融合。*<em>很多软件同时支持多端，比如某度云盘，既要支持*<em>网页版</em></em>，还要支持</strong>手机端和 PC 端**，如果通信协议都用 HTTP 的话，那服务器只用同一套就够了。而 RPC 就开始退居幕后，一般用于公司内部集群里，各个微服务之间的通讯。</p><p>那这么说的话，<strong>都用 HTTP 得了，还用什么 RPC？</strong></p><p>仿佛又回到了文章开头的样子，那这就要从它们之间的区别开始说起。</p><h3 id="服务发现" tabindex="-1"><a class="header-anchor" href="#服务发现"><span>服务发现</span></a></h3><p>首先要向某个服务器发起请求，你得先建立连接，而建立连接的前提是，你得知道 <strong>IP 地址和端口</strong>。这个找到服务对应的 IP 端口的过程，其实就是<strong>服务发现</strong>。</p><p>在 <strong>HTTP</strong> 中，你知道服务的域名，就可以通过 <strong>DNS 服务</strong>去解析得到它背后的 IP 地址，默认 80 端口。</p><p>而 <strong>RPC</strong> 的话，就有些区别，一般会有专门的<strong>中间服务</strong>去保存服务名和IP信息，比如 <strong>Consul 或者 Etcd，甚至是 Redis</strong>。想要访问某个服务，就去这些中间服务去获得 IP 和端口信息。由于 DNS 也是服务发现的一种，所以也有基于 DNS 去做服务发现的组件，比如<strong>CoreDNS</strong>。</p><p>可以看出服务发现这一块，两者是有些区别，但不太能分高低。</p><h3 id="底层连接形式" tabindex="-1"><a class="header-anchor" href="#底层连接形式"><span>底层连接形式</span></a></h3><p>以主流的 <strong>HTTP/1.1</strong> 协议为例，其默认在建立底层 TCP 连接之后会一直保持这个连接（<strong>Keep Alive</strong>），之后的请求和响应都会复用这条连接。</p><p>而 <strong>RPC</strong> 协议，也跟 HTTP 类似，也是通过建立 TCP 长链接进行数据交互，但不同的地方在于，RPC 协议一般还会再建个<strong>连接池</strong>，在请求量大的时候，建立多条连接放在池内，要发数据的时候就从池里取一条连接出来，<strong>用完放回去，下次再复用</strong>，可以说非常环保。</p><p><strong>由于连接池有利于提升网络请求性能，所以不少编程语言的网络库里都会给 HTTP 加个连接池</strong>，比如 <strong>Go</strong> 就是这么干的。</p><p>可以看出这一块两者也没太大区别，所以也不是关键。</p><h3 id="传输的内容" tabindex="-1"><a class="header-anchor" href="#传输的内容"><span>传输的内容</span></a></h3><p>基于 TCP 传输的消息，说到底，无非都是<strong>消息头 Header 和消息体 Body。</strong></p><p><strong>Header</strong> 是用于标记一些特殊信息，其中最重要的是<strong>消息体长度</strong>。</p><p><strong>Body</strong> 则是放我们真正需要传输的内容，而这些内容只能是二进制 01 串，毕竟计算机只认识这玩意。所以 TCP 传字符串和数字都问题不大，因为字符串可以转成编码再变成 01 串，而数字本身也能直接转为二进制。但结构体呢，我们得想个办法将它也转为二进制 01 串，这样的方案现在也有很多现成的，比如 <strong>Json，Protobuf。</strong></p><p>这个将结构体转为二进制数组的过程就叫<strong>序列化</strong>，反过来将二进制数组复原成结构体的过程叫<strong>反序列化</strong>。</p><p>对于主流的 HTTP/1.1，虽然它现在叫<strong>超文本</strong>协议，支持音频视频，但 HTTP 设计初是用于做网页<strong>文本</strong>展示的，所以它传的内容以字符串为主。Header 和 Body 都是如此。在 Body 这块，它使用 <strong>Json</strong> 来<strong>序列化</strong>结构体数据。</p><p>我们可以随便截个图直观看下。</p><p>可以看到这里面的内容非常多的<strong>冗余</strong>，显得<strong>非常啰嗦</strong>。最明显的，像 <code>Header</code> 里的那些信息，其实如果我们约定好头部的第几位是 Content-Type，就<strong>不需要每次都真的把&quot;Content-Type&quot;这个字段都传过来</strong>，类似的情况其实在 <code>body</code> 的 Json 结构里也特别明显。</p><p>而 RPC，因为它定制化程度更高，可以采用体积更小的 Protobuf 或其他序列化协议去保存结构体数据，同时也不需要像 HTTP 那样考虑各种浏览器行为，比如 302 重定向跳转啥的。<strong>因此性能也会更好一些，这也是在公司内部微服务中抛弃 HTTP，选择使用 RPC 的最主要原因。</strong></p><p>当然上面说的 HTTP，其实<strong>特指的是现在主流使用的 HTTP/1.1</strong>，<code>HTTP/2</code> 在前者的基础上做了很多改进，所以<strong>性能可能比很多 RPC 协议还要好</strong>，甚至连 <code>gRPC</code> 底层都直接用的 <code>HTTP/2</code>。</p><blockquote><p>那么问题又来了，为什么既然有了 HTTP/2，还要有 RPC 协议？</p></blockquote><p>这个是由于 HTTP/2 是 2015 年出来的。那时候很多公司内部的 RPC 协议都已经跑了好些年了，基于历史原因，一般也没必要去换了。</p>',37)]))}const c=o(s,[["render",g],["__file","rpc.html.vue"]]),d=JSON.parse(`{"path":"/cs/basic/network/application/rpc.html","title":"RPC","lang":"en-US","frontmatter":{"description":"RPC 而 RPC（Remote Procedure Call），又叫做远程过程调用。它本身并不是一个具体的协议，而是一种调用方式。 举个例子，我们平时调用一个本地方法就像下面这样。 如果现在这不是个本地方法，而是个远端服务器暴露出来的一个方法 remoteFunc，如果我们还能像调用本地方法那样去调用它，这样就可以屏蔽掉一些网络细节，用起来更方便，岂...","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/cs/basic/network/application/rpc.html"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"RPC"}],["meta",{"property":"og:description","content":"RPC 而 RPC（Remote Procedure Call），又叫做远程过程调用。它本身并不是一个具体的协议，而是一种调用方式。 举个例子，我们平时调用一个本地方法就像下面这样。 如果现在这不是个本地方法，而是个远端服务器暴露出来的一个方法 remoteFunc，如果我们还能像调用本地方法那样去调用它，这样就可以屏蔽掉一些网络细节，用起来更方便，岂..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-05-08T07:35:02.000Z"}],["meta",{"property":"article:modified_time","content":"2024-05-08T07:35:02.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"RPC\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-05-08T07:35:02.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[{"level":3,"title":"服务发现","slug":"服务发现","link":"#服务发现","children":[]},{"level":3,"title":"底层连接形式","slug":"底层连接形式","link":"#底层连接形式","children":[]},{"level":3,"title":"传输的内容","slug":"传输的内容","link":"#传输的内容","children":[]}],"git":{"createdTime":1715153702000,"updatedTime":1715153702000,"contributors":[{"name":"刘大维","email":"davidliu@liudaweideMacBook-Pro.local","commits":1}]},"readingTime":{"minutes":5.93,"words":1778},"filePathRelative":"cs/basic/network/application/rpc.md","localizedDate":"May 8, 2024","excerpt":"\\n<p>而 <strong>RPC</strong>（<strong>R</strong>emote <strong>P</strong>rocedure <strong>C</strong>all），又叫做<strong>远程过程调用</strong>。它本身并不是一个具体的协议，而是一种<strong>调用方式</strong>。</p>\\n<p>举个例子，我们平时调用一个<strong>本地方法</strong>就像下面这样。</p>\\n<div class=\\"language-text line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"text\\" data-title=\\"text\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span> res = localFunc(req)</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{c as comp,d as data};
