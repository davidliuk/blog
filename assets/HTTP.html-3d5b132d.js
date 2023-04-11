import{_ as t,V as a,W as d,Z as e}from"./framework-e5d7a6b2.js";const r={},h=e('<h1 id="http" tabindex="-1"><a class="header-anchor" href="#http" aria-hidden="true">#</a> HTTP</h1><p>HTTP 协是基于 TCP 协议，发送 HTTP 请求之前首先要建立 TCP 连接也就是要经历 3 次握手。目前使用的 HTTP 协议大部分都是 1.1。在 1.1 的协议里面，默认是开启了 Keep-Alive 的，这样的话建立的连接就可以在多次请求中被复用了。</p><p>另外， HTTP 协议是”无状态”的协议，它无法记录客户端用户的状态，一般我们都是通过 Session 来记录客户端用户的状态。</p><h2 id="基本概念" tabindex="-1"><a class="header-anchor" href="#基本概念" aria-hidden="true">#</a> 基本概念</h2><p>HTTP 是超文本传输协议，也就是<strong>H</strong>yperText <strong>T</strong>ransfer <strong>P</strong>rotocol。</p><h3 id="报文格式" tabindex="-1"><a class="header-anchor" href="#报文格式" aria-hidden="true">#</a> 报文格式</h3><img src="https://cdn.jsdelivr.net/gh/davidliuk/images@master/blog/截屏2023-04-03 11.39.56.png" alt="截屏2023-04-03 11.39.56" style="zoom:50%;"><h4 id="请求报文" tabindex="-1"><a class="header-anchor" href="#请求报文" aria-hidden="true">#</a> 请求报文</h4><p>请求报文的第一行称为请求行。这一行有三部分由空格分隔开并且被两个字符（回车和换行）终止。这些字段称为方法、URL 和版本。</p><p>请求方法</p><table><thead><tr><th>方法</th><th>动作</th><th>内容</th></tr></thead><tbody><tr><td>GET</td><td>向服务器请求文档</td><td>空</td></tr><tr><td>HEAD</td><td>请求关于文档的信息，而不是文档本身</td><td>空</td></tr><tr><td>PUT</td><td>从客户端向服务器发送文档</td><td></td></tr><tr><td>POST</td><td>从客户端向服务器发送一些信息</td><td></td></tr><tr><td>TRACE</td><td>删除网页</td><td></td></tr><tr><td>DELETE</td><td>回送输入的请求</td><td></td></tr><tr><td>CONNECT</td><td>预留</td><td></td></tr><tr><td>OPTIONS</td><td>询问有关可用的选项</td><td>空</td></tr></tbody></table><p>请求头部</p><p>HTTP 的 Keep-Alive 也叫 HTTP 长连接，该功能是由「应用程序」实现的，可以使得用同一个 TCP 连接来发送和接收多个 HTTP 请求/应答，减少了 HTTP 短连接带来的多次 TCP 连接建立和释放的开销。</p><p>Connection:</p><ul><li>Keep-Alive</li><li>close</li></ul><h4 id="响应报文" tabindex="-1"><a class="header-anchor" href="#响应报文" aria-hidden="true">#</a> 响应报文</h4><h2 id="特性" tabindex="-1"><a class="header-anchor" href="#特性" aria-hidden="true">#</a> 特性</h2><h2 id="优化" tabindex="-1"><a class="header-anchor" href="#优化" aria-hidden="true">#</a> 优化</h2><ul><li>尽量避免发送 HTTP 请求；</li><li>在需要发送 HTTP 请求时，考虑如何减少请求次数；</li><li>减少服务器的 HTTP 响应的数据大小；</li></ul><h3 id="避免发送-http-请求-缓存" tabindex="-1"><a class="header-anchor" href="#避免发送-http-请求-缓存" aria-hidden="true">#</a> 避免发送 HTTP 请求 - 缓存</h3><h2 id="发展" tabindex="-1"><a class="header-anchor" href="#发展" aria-hidden="true">#</a> 发展</h2><h3 id="http-1-1-相比-http-1-0-提高了什么性能" tabindex="-1"><a class="header-anchor" href="#http-1-1-相比-http-1-0-提高了什么性能" aria-hidden="true">#</a> HTTP/1.1 相比 HTTP/1.0 提高了什么性能？</h3><p>HTTP/1.1 相比 HTTP/1.0 性能上的改进：</p><ul><li>使用长连接的方式改善了 HTTP/1.0 短连接造成的性能开销。</li><li>支持管道（pipeline）网络传输，只要第一个请求发出去了，不必等其回来，就可以发第二个请求出去，可以减少整体的响应时间。</li></ul><p>但 HTTP/1.1 还是有性能瓶颈：</p><ul><li>请求 / 响应头部（Header）未经压缩就发送，首部信息越多延迟越大。只能压缩 <code>Body</code> 的部分；</li><li>发送冗长的首部。每次互相发送相同的首部造成的浪费较多；</li><li>服务器是按请求的顺序响应的，如果服务器响应慢，会招致客户端一直请求不到数据，也就是队头阻塞；</li><li>没有请求优先级控制；</li><li>请求只能从客户端开始，服务器只能被动响应。</li></ul><h3 id="http-2-做了什么优化" tabindex="-1"><a class="header-anchor" href="#http-2-做了什么优化" aria-hidden="true">#</a> HTTP/2 做了什么优化？</h3><p>HTTP/2 协议是基于 HTTPS 的，所以 HTTP/2 的安全性也是有保障的。</p><h4 id="头部压缩" tabindex="-1"><a class="header-anchor" href="#头部压缩" aria-hidden="true">#</a> 头部压缩</h4><h4 id="二进制帧" tabindex="-1"><a class="header-anchor" href="#二进制帧" aria-hidden="true">#</a> 二进制帧</h4><h4 id="并发传输" tabindex="-1"><a class="header-anchor" href="#并发传输" aria-hidden="true">#</a> 并发传输</h4><p>HTTP/2 通过 Stream 的并发能力，解决了 HTTP/1 队头阻塞的问题，看似很完美了，但是 HTTP/2 还是存在“队头阻塞”的问题，只不过问题不是在 HTTP 这一层面，而是在 TCP 这一层。</p><h4 id="服务器主动推送资源" tabindex="-1"><a class="header-anchor" href="#服务器主动推送资源" aria-hidden="true">#</a> 服务器主动推送资源</h4>',33),i=[h];function T(n,l){return a(),d("div",null,i)}const c=t(r,[["render",T],["__file","HTTP.html.vue"]]);export{c as default};