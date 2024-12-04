import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as o,d as a,o as n}from"./app-CybQbXIt.js";const i={};function l(p,t){return n(),o("div",null,t[0]||(t[0]=[a('<h1 id="http" tabindex="-1"><a class="header-anchor" href="#http"><span>HTTP</span></a></h1><p>HTTP 协是基于 TCP 协议，发送 HTTP 请求之前首先要建立 TCP 连接也就是要经历 3 次握手。目前使用的 HTTP 协议大部分都是 1.1。在 1.1 的协议里面，默认是开启了 Keep-Alive 的，这样的话建立的连接就可以在多次请求中被复用了。</p><p>另外， HTTP 协议是”无状态”的协议，它无法记录客户端用户的状态，一般我们都是通过 Session 来记录客户端用户的状态。</p><h2 id="基本概念" tabindex="-1"><a class="header-anchor" href="#基本概念"><span>基本概念</span></a></h2><p>HTTP 是超文本传输协议，也就是<strong>H</strong>yper<strong>T</strong>ext <strong>T</strong>ransfer <strong>P</strong>rotocol。</p><h3 id="报文格式" tabindex="-1"><a class="header-anchor" href="#报文格式"><span>报文格式</span></a></h3><img src="https://cdn.jsdelivr.net/gh/davidliuk/images@master/blog/截屏2023-04-03 11.39.56.png" alt="截屏2023-04-03 11.39.56" style="zoom:50%;"><h4 id="请求报文" tabindex="-1"><a class="header-anchor" href="#请求报文"><span>请求报文</span></a></h4><p>请求报文的第一行称为请求行。这一行有三部分由空格分隔开并且被两个字符（回车和换行）终止。这些字段称为方法、URL 和版本。</p><p>请求方法 method</p><table><thead><tr><th>方法</th><th>动作</th><th>内容</th></tr></thead><tbody><tr><td>GET</td><td>向服务器请求文档</td><td>空</td></tr><tr><td>HEAD</td><td>请求关于文档的信息，而不是文档本身</td><td>空</td></tr><tr><td>PUT</td><td>从客户端向服务器发送文档</td><td></td></tr><tr><td>POST</td><td>从客户端向服务器发送一些信息</td><td></td></tr><tr><td>TRACE</td><td>删除网页</td><td></td></tr><tr><td>DELETE</td><td>回送输入的请求</td><td></td></tr><tr><td>CONNECT</td><td>预留</td><td></td></tr><tr><td>OPTIONS</td><td>询问有关可用的选项</td><td>空</td></tr></tbody></table><p>请求头部 header</p><p>HTTP 的 Keep-Alive 也叫 HTTP 长连接，该功能是由「应用程序」实现的，可以使得用同一个 TCP 连接来发送和接收多个 HTTP 请求/应答，减少了 HTTP 短连接带来的多次 TCP 连接建立和释放的开销。</p><p>Connection:</p><ul><li>Keep-Alive</li><li>close</li></ul><h4 id="响应报文" tabindex="-1"><a class="header-anchor" href="#响应报文"><span>响应报文</span></a></h4><p>状态码</p><p><img src="https://cdn.xiaolincoding.com/gh/xiaolincoder/ImageHost/计算机网络/HTTP/6-五大类HTTP状态码.png" alt=" 五大类 HTTP 状态码 " loading="lazy"></p><p><code>1xx</code> 类状态码属于<strong>提示信息</strong>，是协议处理中的一种中间状态，实际用到的比较少。</p><p><code>2xx</code> 类状态码表示服务器<strong>成功</strong>处理了客户端的请求，也是我们最愿意看到的状态。</p><ul><li>「<strong>200 OK</strong>」是最常见的成功状态码，表示一切正常。如果是非 <code>HEAD</code> 请求，服务器返回的响应头都会有 body 数据。</li><li>「<strong>204 No Content</strong>」也是常见的成功状态码，与 200 OK 基本相同，但响应头没有 body 数据。</li><li>「<strong>206 Partial Content</strong>」是应用于 HTTP 分块下载或断点续传，表示响应返回的 body 数据并不是资源的全部，而是其中的一部分，也是服务器处理成功的状态。</li></ul><p><code>3xx</code> 类状态码表示客户端请求的资源发生了变动，需要客户端用新的 URL 重新发送请求获取资源，也就是<strong>重定向</strong>。</p><ul><li>「<strong>301 Moved Permanently</strong>」表示永久重定向，说明请求的资源已经不存在了，需改用新的 URL 再次访问。</li><li>「<strong>302 Found</strong>」表示临时重定向，说明请求的资源还在，但暂时需要用另一个 URL 来访问。</li></ul><p>301 和 302 都会在响应头里使用字段 <code>Location</code>，指明后续要跳转的 URL，浏览器会自动重定向新的 URL。</p><ul><li>「<strong>304 Not Modified</strong>」不具有跳转的含义，表示资源未修改，重定向已存在的缓冲文件，也称缓存重定向，也就是告诉客户端可以继续使用缓存资源，用于缓存控制。</li></ul><p><code>4xx</code> 类状态码表示客户端发送的<strong>报文有误</strong>，服务器无法处理，也就是错误码的含义。</p><ul><li>「<strong>400 Bad Request</strong>」表示客户端请求的报文有错误，但只是个笼统的错误。</li><li>「<strong>403 Forbidden</strong>」表示服务器禁止访问资源，并不是客户端的请求出错。</li><li>「<strong>404 Not Found</strong>」表示请求的资源在服务器上不存在或未找到，所以无法提供给客户端。</li></ul><p><code>5xx</code> 类状态码表示客户端请求报文正确，但是<strong>服务器处理时内部发生了错误</strong>，属于服务器端的错误码。</p><ul><li>「<strong>500 Internal Server Error</strong>」与 400 类型，是个笼统通用的错误码，服务器发生了什么错误，我们并不知道。</li><li>「<strong>501 Not Implemented</strong>」表示客户端请求的功能还不支持，类似“即将开业，敬请期待”的意思。</li><li>「<strong>502 Bad Gateway</strong>」通常是服务器作为网关或代理时返回的错误码，表示服务器自身工作正常，访问后端服务器发生了错误。</li><li>「<strong>503 Service Unavailable</strong>」表示服务器当前很忙，暂时无法响应客户端，类似“网络服务正忙，请稍后重试”的意思。</li></ul><h3 id="get-与-post-有什么区别" tabindex="-1"><a class="header-anchor" href="#get-与-post-有什么区别"><span>GET 与 POST 有什么区别？</span></a></h3><p>根据 RFC 规范，<strong>GET 的语义是从服务器获取指定的资源</strong>，这个资源可以是静态的文本、页面、图片视频等。GET 请求的参数位置一般是写在 URL 中，URL 规定只能支持 ASCII，所以 GET 请求的参数只允许 ASCII 字符 ，而且浏览器会对 URL 的长度有限制（HTTP协议本身对 URL长度并没有做任何规定）。比如，你打开我的文章，浏览器就会发送 GET 请求给服务器，服务器就会返回文章的所有文字及资源。</p><p>根据 RFC 规范，<strong>POST 的语义是根据请求负荷（报文body）对指定的资源做出处理</strong>，具体的处理方式视资源类型而不同。POST 请求携带数据的位置一般是写在报文 body 中，body 中的数据可以是任意格式的数据，只要客户端与服务端协商好即可，而且浏览器不会对 body 大小做限制。比如，你在我文章底部，敲入了留言后点击「提交」（<strong>暗示你们留言</strong>），浏览器就会执行一次 POST 请求，把你的留言文字放进了报文 body 里，然后拼接好 POST 请求头，通过 TCP 协议发送给服务器。</p><blockquote><p>GET 请求可以带 body 吗？</p></blockquote><p>RFC 规范并没有规定 GET 请求不能带 body 的。理论上，任何请求都可以带 body 的。只是因为 RFC 规范定义的 GET 请求是获取资源，所以根据这个语义不需要用到 body。</p><p>另外，URL 中的查询参数也不是 GET 所独有的，POST 请求的 URL 中也可以有参数的。</p><h3 id="get-和-post-方法都是安全和幂等的吗" tabindex="-1"><a class="header-anchor" href="#get-和-post-方法都是安全和幂等的吗"><span>GET 和 POST 方法都是安全和幂等的吗？</span></a></h3><p>先说明下安全和幂等的概念：</p><ul><li>在 HTTP 协议里，所谓的「安全」是指请求方法不会「破坏」服务器上的资源。</li><li>所谓的「幂等」，意思是多次执行相同的操作，结果都是「相同」的。</li></ul><p>如果从 RFC 规范定义的语义来看：</p><ul><li><strong>GET 方法就是安全且幂等的</strong>，因为它是「只读」操作，无论操作多少次，服务器上的数据都是安全的，且每次的结果都是相同的。所以，<strong>可以对 GET 请求的数据做缓存，这个缓存可以做到浏览器本身上（彻底避免浏览器发请求），也可以做到代理上（如nginx），而且在浏览器中 GET 请求可以保存为书签</strong>。</li><li><strong>POST</strong> 因为是「新增或提交数据」的操作，会修改服务器上的资源，所以是<strong>不安全</strong>的，且多次提交数据就会创建多个资源，所以<strong>不是幂等</strong>的。所以，<strong>浏览器一般不会缓存 POST 请求，也不能把 POST 请求保存为书签</strong>。</li></ul><p>做个简要的小结。</p><p>GET 的语义是请求获取指定的资源。GET 方法是安全、幂等、可被缓存的。</p><p>POST 的语义是根据请求负荷（报文主体）对指定的资源做出处理，具体的处理方式视资源类型而不同。POST 不安全，不幂等，（大部分实现）不可缓存。</p><p>注意， 上面是从 RFC 规范定义的语义来分析的。</p><p>但是实际过程中，开发者不一定会按照 RFC 规范定义的语义来实现 GET 和 POST 方法。比如：</p><ul><li>可以用 GET 方法实现新增或删除数据的请求，这样实现的 GET 方法自然就不是安全和幂等。</li><li>可以用 POST 方法实现查询数据的请求，这样实现的 POST 方法自然就是安全和幂等。</li></ul><p>曾经有个笑话，有人写了个博客，删除博客用的是 GET 请求，他觉得没人访问就连鉴权都没做。然后 Google 服务器爬虫爬了一遍，他所有博文就没了。。。</p><p>如果「安全」放入概念是指信息是否会被泄漏的话，虽然 POST 用 body 传输数据，而 GET 用 URL 传输，这样数据会在浏览器地址拦容易看到，但是并不能说 GET 不如 POST 安全的。</p><p>因为 HTTP 传输的内容都是明文的，虽然在浏览器地址拦看不到 POST 提交的 body 数据，但是只要抓个包就都能看到了。</p><p>所以，要避免传输过程中数据被窃取，就要使用 HTTPS 协议，这样所有 HTTP 的数据都会被加密传输。</p><h3 id="http-缓存技术" tabindex="-1"><a class="header-anchor" href="#http-缓存技术"><span>HTTP 缓存技术</span></a></h3><h4 id="http-缓存有哪些实现方式" tabindex="-1"><a class="header-anchor" href="#http-缓存有哪些实现方式"><span>HTTP 缓存有哪些实现方式？</span></a></h4><p>对于一些具有重复性的 HTTP 请求，比如每次请求得到的数据都一样的，我们可以把这对「请求-响应」的数据都<strong>缓存在本地</strong>，那么下次就直接读取本地的数据，不必在通过网络获取服务器的响应了，这样的话 HTTP/1.1 的性能肯定肉眼可见的提升。</p><p>所以，避免发送 HTTP 请求的方法就是通过<strong>缓存技术</strong>，HTTP 设计者早在之前就考虑到了这点，因此 HTTP 协议的头部有不少是针对缓存的字段。</p><p>HTTP 缓存有两种实现方式，分别是<strong>强制缓存和协商缓存</strong>。</p><h4 id="强制缓存" tabindex="-1"><a class="header-anchor" href="#强制缓存"><span>强制缓存</span></a></h4><p>强缓存指的是只要浏览器判断缓存没有过期，则直接使用浏览器的本地缓存，决定是否使用缓存的主动性在于浏览器这边。</p><p>如下图中，返回的是 200 状态码，但在 size 项中标识的是 from disk cache，就是使用了强制缓存。</p><p>强缓存是利用下面这两个 HTTP 响应头部（Response Header）字段实现的，它们都用来表示资源在客户端缓存的有效期：</p><ul><li><code>Cache-Control</code>， 是一个相对时间；</li><li><code>Expires</code>，是一个绝对时间；</li></ul><p>如果 HTTP 响应头部同时有 Cache-Control 和 Expires 字段的话，<strong>Cache-Control 的优先级高于 Expires</strong> 。</p><p>Cache-control 选项更多一些，设置更加精细，所以建议使用 Cache-Control 来实现强缓存。具体的实现流程如下：</p><ul><li>当浏览器第一次请求访问服务器资源时，服务器会在返回这个资源的同时，在 Response 头部加上 Cache-Control，Cache-Control 中设置了过期时间大小；</li><li>浏览器再次请求访问服务器中的该资源时，会先<strong>通过请求资源的时间与 Cache-Control 中设置的过期时间大小，来计算出该资源是否过期</strong>，如果没有，则使用该缓存，否则重新请求服务器；</li><li>服务器再次收到请求后，会再次更新 Response 头部的 Cache-Control。</li></ul><h3 id="协商缓存" tabindex="-1"><a class="header-anchor" href="#协商缓存"><span>协商缓存</span></a></h3><p>当我们在浏览器使用开发者工具的时候，你可能会看到过某些请求的响应码是 <code>304</code>，这个是告诉浏览器可以使用本地缓存的资源，通常这种通过服务端告知客户端是否可以使用缓存的方式被称为协商缓存。</p><p>第一种：请求头部中的 <code>If-Modified-Since</code> 字段与响应头部中的 <code>Last-Modified</code> 字段实现，这两个字段的意思是：</p><ul><li>响应头部中的 <code>Last-Modified</code>：标示这个响应资源的最后修改时间；</li><li>请求头部中的 <code>If-Modified-Since</code>：当资源过期了，发现响应头中具有 Last-Modified 声明，则再次发起请求的时候带上 Last-Modified 的时间，服务器收到请求后发现有 If-Modified-Since 则与被请求资源的最后修改时间进行对比（Last-Modified），如果最后修改时间较新（大），说明资源又被改过，则返回最新资源，HTTP 200 OK；如果最后修改时间较旧（小），说明资源无新修改，响应 HTTP 304 走缓存。</li></ul><p>第二种：请求头部中的 <code>If-None-Match</code> 字段与响应头部中的 <code>ETag</code> 字段，这两个字段的意思是：</p><ul><li>响应头部中 <code>Etag</code>：唯一标识响应资源；</li><li>请求头部中的 <code>If-None-Match</code>：当资源过期时，浏览器发现响应头里有 Etag，则再次向服务器发起请求时，会将请求头 If-None-Match 值设置为 Etag 的值。服务器收到请求后进行比对，如果资源没有变化返回 304，如果资源变化了返回 200。</li></ul><p>第一种实现方式是基于时间实现的，第二种实现方式是基于一个唯一标识实现的，相对来说后者可以更加准确地判断文件内容是否被修改，避免由于时间篡改导致的不可靠问题。</p><p>如果在第一次请求资源的时候，服务端返回的 HTTP 响应头部同时有 Etag 和 Last-Modified 字段，那么客户端再下一次请求的时候，如果带上了 ETag 和 Last-Modified 字段信息给服务端，<strong>这时 Etag 的优先级更高</strong>，也就是服务端先会判断 Etag 是否变化了，如果 Etag 有变化就不用在判断 Last-Modified 了，如果 Etag 没有变化，然后再看 Last-Modified。</p><p>**为什么 ETag 的优先级更高？**这是因为 ETag 主要能解决 Last-Modified 几个比较难以解决的问题：</p><ol><li>在没有修改文件内容情况下文件的最后修改时间可能也会改变，这会导致客户端认为这文件被改动了，从而重新请求；</li><li>可能有些文件是在秒级以内修改的，<code>If-Modified-Since</code> 能检查到的粒度是秒级的，使用 Etag就能够保证这种需求下客户端在 1 秒内能刷新多次；</li><li>有些服务器不能精确获取文件的最后修改时间。</li></ol><p>注意，<strong>协商缓存这两个字段都需要配合强制缓存中 Cache-Control 字段来使用，只有在未能命中强制缓存的时候，才能发起带有协商缓存字段的请求</strong>。</p><h2 id="特性" tabindex="-1"><a class="header-anchor" href="#特性"><span>特性</span></a></h2><h2 id="优化" tabindex="-1"><a class="header-anchor" href="#优化"><span>优化</span></a></h2><ul><li>尽量避免发送 HTTP 请求；</li><li>在需要发送 HTTP 请求时，考虑如何减少请求次数；</li><li>减少服务器的 HTTP 响应的数据大小；</li></ul><h3 id="避免发送-http-请求-缓存" tabindex="-1"><a class="header-anchor" href="#避免发送-http-请求-缓存"><span>避免发送 HTTP 请求 - 缓存</span></a></h3><h3 id="减少-http-请求次数" tabindex="-1"><a class="header-anchor" href="#减少-http-请求次数"><span>减少 HTTP 请求次数</span></a></h3><p>减少 HTTP 请求次数自然也就提升了 HTTP 性能，可以从这 3 个方面入手：</p><ul><li><em>减少重定向请求次数</em>；</li><li><em>合并请求</em>；</li><li><em>延迟发送请求</em>；</li></ul><h3 id="合并请求" tabindex="-1"><a class="header-anchor" href="#合并请求"><span>合并请求</span></a></h3><p>如果把多个访问小文件的请求合并成一个大的请求，虽然传输的总资源还是一样，但是减少请求，也就意味着<strong>减少了重复发送的 HTTP 头部</strong>。</p><p>另外由于 HTTP/1.1 是请求响应模型，如果第一个发送的请求，未收到对应的响应，那么后续的请求就不会发送（PS：HTTP/1.1 管道模式是默认不使用的，所以讨论 HTTP/1.1 的队头阻塞问题，是不考虑管道模式的），于是为了防止单个请求的阻塞，所以<strong>一般浏览器会同时发起 5-6 个请求，每一个请求都是不同的 TCP 连接</strong>，那么如果合并了请求，也就会<strong>减少 TCP 连接的数量，因而省去了 TCP 握手和慢启动过程耗费的时间</strong>。</p><p>接下来，具体看看合并请求的几种方式。</p><p>有的网页会含有很多小图片、小图标，有多少个小图片，客户端就要发起多少次请求。那么对于这些小图片，我们可以考虑使用 <code>CSS Image Sprites</code> 技术把它们合成一个大图片，这样浏览器就可以用一次请求获得一个大图片，然后再根据 CSS 数据把大图片切割成多张小图片。</p><h2 id="发展" tabindex="-1"><a class="header-anchor" href="#发展"><span>发展</span></a></h2><p>0.9, 1.0, 1.1, 2, 3</p><p>0.9只支持GET方法</p><p><img src="https://cdn.xiaolincoding.com//mysql/other/1*uk5OZPL7gtUwqRLwaoGyFw.png" alt="img" loading="lazy"></p><p><img src="https://pic4.zhimg.com/80/v2-9bdbce72c5fcd630cdf85fe8bc80fb77_1440w.webp" alt="img" loading="lazy"></p><h3 id="http-1-1-相比-http-1-0-提高了什么性能" tabindex="-1"><a class="header-anchor" href="#http-1-1-相比-http-1-0-提高了什么性能"><span>HTTP/1.1 相比 HTTP/1.0 提高了什么性能？</span></a></h3><p>HTTP/1.1 相比 HTTP/1.0 性能上的改进：</p><ul><li>使用长连接的方式改善了 HTTP/1.0 短连接造成的性能开销。</li><li>支持管道（pipeline）网络传输，只要第一个请求发出去了，不必等其回来，就可以发第二个请求出去，可以减少整体的响应时间。</li></ul><p>但 HTTP/1.1 还是有性能瓶颈：</p><ul><li>请求 / 响应头部（Header）未经压缩就发送，首部信息越多延迟越大。只能压缩 <code>Body</code> 的部分；</li><li>发送冗长的首部。每次互相发送相同的首部造成的浪费较多；</li><li>服务器是按请求的顺序响应的，如果服务器响应慢，会招致客户端一直请求不到数据，也就是队头阻塞；</li><li>没有请求优先级控制；</li><li>请求只能从客户端开始，服务器只能被动响应。</li></ul><h3 id="http-2-做了什么优化" tabindex="-1"><a class="header-anchor" href="#http-2-做了什么优化"><span>HTTP/2 做了什么优化？</span></a></h3><p>HTTP/2 协议是基于 HTTPS 的，所以 HTTP/2 的安全性也是有保障的。</p><h4 id="头部压缩" tabindex="-1"><a class="header-anchor" href="#头部压缩"><span>头部压缩</span></a></h4><h4 id="二进制帧" tabindex="-1"><a class="header-anchor" href="#二进制帧"><span>二进制帧</span></a></h4><h4 id="并发传输" tabindex="-1"><a class="header-anchor" href="#并发传输"><span>并发传输</span></a></h4><p>HTTP/2 通过 Stream 的并发能力，解决了 HTTP/1 队头阻塞的问题，看似很完美了，但是 HTTP/2 还是存在“队头阻塞”的问题，只不过问题不是在 HTTP 这一层面，而是在 TCP 这一层。</p><h4 id="服务器主动推送资源" tabindex="-1"><a class="header-anchor" href="#服务器主动推送资源"><span>服务器主动推送资源</span></a></h4><h3 id="http-3" tabindex="-1"><a class="header-anchor" href="#http-3"><span>HTTP/3</span></a></h3><p>QUIC</p><p>HTTP/3 同 HTTP/2 一样采用二进制帧的结构，不同的地方在于 HTTP/2 的二进制帧里需要定义 Stream，而 HTTP/3 自身不需要再定义 Stream，直接使用 QUIC 里的 Stream，于是 HTTP/3 的帧的结构也变简单了。</p><p><img src="https://cdn.xiaolincoding.com//picgo/image-20240105144457456.png" alt="image-20240105144457456" loading="lazy"></p><p>从上图可以看到，HTTP/3 帧头只有两个字段：类型和长度。</p><p>根据帧类型的不同，大体上分为数据帧和控制帧两大类，Headers 帧（HTTP 头部）和 DATA 帧（HTTP 包体）属于数据帧。</p><p>HTTP/3 在头部压缩算法这一方面也做了升级，升级成了 <strong>QPACK</strong>。与 HTTP/2 中的 HPACK 编码方式相似，HTTP/3 中的 QPACK 也采用了静态表、动态表及 Huffman 编码。</p><p>对于静态表的变化，HTTP/2 中的 HPACK 的静态表只有 61 项，而 HTTP/3 中的 QPACK 的静态表扩大到 91 项。</p><p>HTTP/2 和 HTTP/3 的 Huffman 编码并没有多大不同，但是动态表编解码方式不同。</p><p>所谓的动态表，在首次请求-响应后，双方会将未包含在静态表中的 Header 项更新各自的动态表，接着后续传输时仅用 1 个数字表示，然后对方可以根据这 1 个数字从动态表查到对应的数据，就不必每次都传输长长的数据，大大提升了编码效率。</p><p>可以看到，<strong>动态表是具有时序性的，如果首次出现的请求发生了丢包，后续的收到请求，对方就无法解码出 HPACK 头部，因为对方还没建立好动态表，因此后续的请求解码会阻塞到首次请求中丢失的数据包重传过来</strong>。</p><p>HTTP/3 的 QPACK 解决了这一问题，那它是如何解决的呢？</p><p>QUIC 会有两个特殊的单向流，所谓的单向流只有一端可以发送消息，双向则指两端都可以发送消息，传输 HTTP 消息时用的是双向流，这两个单向流的用法：</p><ul><li>一个叫 QPACK Encoder Stream，用于将一个字典（Key-Value）传递给对方，比如面对不属于静态表的 HTTP 请求头部，客户端可以通过这个 Stream 发送字典；</li><li>一个叫 QPACK Decoder Stream，用于响应对方，告诉它刚发的字典已经更新到自己的本地动态表了，后续就可以使用这个字典来编码了。</li></ul><p>这两个特殊的单向流是用来<strong>同步双方的动态表</strong>，编码方收到解码方更新确认的通知后，才使用动态表编码 HTTP 头部。</p><hr><p>通过前文的介绍，相信大家对HTTP3已经有了一个初步的了解。总的来说，HTTP3协议使用的QUIC提供的多路复用提高了传输效率，而本身并没有更改HTTP的语义。</p><p>HTTP 3与HTTP2一样，采用二进制、静态表、动态表与Huffman算法对HTTP Header编码，不只提供了高压缩率，还加快了发送端编码、接收端解码的速度。不过，由于HTTP1协议不支持多路复用，这样高并发只能通过多开一些TCP连接实现。因此，HTTP2与HTTP3都在应用层实现了多路复用功能。</p><p>可以看到，相比HTTP2，HTTP3对传输层和表示层进行了重新改造，改造后在多路复用后，丢包阻塞的问题得到了解决，虽然某个包丢失了，但是并不会影响其他包的传递。</p><p>总的来说，HTTP3创造出Connection ID概念实现了连接迁移，通过融合传输层、表示层，既缩短了握手时长，也加密了传输层中的绝大部分字段，提升了网络安全性。</p><p>同时，HTTP3在Packet层保障了连接的可靠性，在QUIC Frame层实现了有序字节流，在HTTP3 Frame层实现了HTTP语义，这彻底解开了队头阻塞问题，真正实现了应用层的多路复用。</p>',124)]))}const d=e(i,[["render",l],["__file","http.html.vue"]]),s=JSON.parse(`{"path":"/cs/basic/network/application/http.html","title":"HTTP","lang":"en-US","frontmatter":{"description":"HTTP HTTP 协是基于 TCP 协议，发送 HTTP 请求之前首先要建立 TCP 连接也就是要经历 3 次握手。目前使用的 HTTP 协议大部分都是 1.1。在 1.1 的协议里面，默认是开启了 Keep-Alive 的，这样的话建立的连接就可以在多次请求中被复用了。 另外， HTTP 协议是”无状态”的协议，它无法记录客户端用户的状态，一般我们...","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/cs/basic/network/application/http.html"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"HTTP"}],["meta",{"property":"og:description","content":"HTTP HTTP 协是基于 TCP 协议，发送 HTTP 请求之前首先要建立 TCP 连接也就是要经历 3 次握手。目前使用的 HTTP 协议大部分都是 1.1。在 1.1 的协议里面，默认是开启了 Keep-Alive 的，这样的话建立的连接就可以在多次请求中被复用了。 另外， HTTP 协议是”无状态”的协议，它无法记录客户端用户的状态，一般我们..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.xiaolincoding.com/gh/xiaolincoder/ImageHost/%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%BD%91%E7%BB%9C/HTTP/6-%E4%BA%94%E5%A4%A7%E7%B1%BBHTTP%E7%8A%B6%E6%80%81%E7%A0%81.png"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-06-27T01:21:47.000Z"}],["meta",{"property":"article:modified_time","content":"2024-06-27T01:21:47.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"HTTP\\",\\"image\\":[\\"https://cdn.xiaolincoding.com/gh/xiaolincoder/ImageHost/%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%BD%91%E7%BB%9C/HTTP/6-%E4%BA%94%E5%A4%A7%E7%B1%BBHTTP%E7%8A%B6%E6%80%81%E7%A0%81.png\\",\\"https://cdn.xiaolincoding.com//mysql/other/1*uk5OZPL7gtUwqRLwaoGyFw.png\\",\\"https://pic4.zhimg.com/80/v2-9bdbce72c5fcd630cdf85fe8bc80fb77_1440w.webp\\",\\"https://cdn.xiaolincoding.com//picgo/image-20240105144457456.png\\"],\\"dateModified\\":\\"2024-06-27T01:21:47.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[{"level":2,"title":"基本概念","slug":"基本概念","link":"#基本概念","children":[{"level":3,"title":"报文格式","slug":"报文格式","link":"#报文格式","children":[]},{"level":3,"title":"GET 与 POST 有什么区别？","slug":"get-与-post-有什么区别","link":"#get-与-post-有什么区别","children":[]},{"level":3,"title":"GET 和 POST 方法都是安全和幂等的吗？","slug":"get-和-post-方法都是安全和幂等的吗","link":"#get-和-post-方法都是安全和幂等的吗","children":[]},{"level":3,"title":"HTTP 缓存技术","slug":"http-缓存技术","link":"#http-缓存技术","children":[]},{"level":3,"title":"协商缓存","slug":"协商缓存","link":"#协商缓存","children":[]}]},{"level":2,"title":"特性","slug":"特性","link":"#特性","children":[]},{"level":2,"title":"优化","slug":"优化","link":"#优化","children":[{"level":3,"title":"避免发送 HTTP 请求 - 缓存","slug":"避免发送-http-请求-缓存","link":"#避免发送-http-请求-缓存","children":[]},{"level":3,"title":"减少 HTTP 请求次数","slug":"减少-http-请求次数","link":"#减少-http-请求次数","children":[]},{"level":3,"title":"合并请求","slug":"合并请求","link":"#合并请求","children":[]}]},{"level":2,"title":"发展","slug":"发展","link":"#发展","children":[{"level":3,"title":"HTTP/1.1 相比 HTTP/1.0 提高了什么性能？","slug":"http-1-1-相比-http-1-0-提高了什么性能","link":"#http-1-1-相比-http-1-0-提高了什么性能","children":[]},{"level":3,"title":"HTTP/2 做了什么优化？","slug":"http-2-做了什么优化","link":"#http-2-做了什么优化","children":[]},{"level":3,"title":"HTTP/3","slug":"http-3","link":"#http-3","children":[]}]}],"git":{"createdTime":1679321449000,"updatedTime":1719451307000,"contributors":[{"name":"刘大维","email":"davidliu@liudaweideMacBook-Pro.local","commits":2}]},"readingTime":{"minutes":18.19,"words":5458},"filePathRelative":"cs/basic/network/application/http.md","localizedDate":"March 20, 2023","excerpt":"\\n<p>HTTP 协是基于 TCP 协议，发送 HTTP 请求之前首先要建立 TCP 连接也就是要经历 3 次握手。目前使用的 HTTP 协议大部分都是 1.1。在 1.1 的协议里面，默认是开启了 Keep-Alive 的，这样的话建立的连接就可以在多次请求中被复用了。</p>\\n<p>另外， HTTP 协议是”无状态”的协议，它无法记录客户端用户的状态，一般我们都是通过 Session 来记录客户端用户的状态。</p>\\n<h2>基本概念</h2>\\n<p>HTTP 是超文本传输协议，也就是<strong>H</strong>yper<strong>T</strong>ext <strong>T</strong>ransfer <strong>P</strong>rotocol。</p>","autoDesc":true}`);export{d as comp,s as data};
