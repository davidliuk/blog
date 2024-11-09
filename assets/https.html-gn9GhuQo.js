import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as l,b as T,o as i}from"./app-B3ooTv29.js";const p={};function o(r,t){return i(),l("div",null,t[0]||(t[0]=[T('<h1 id="https" tabindex="-1"><a class="header-anchor" href="#https"><span>HTTPS</span></a></h1><h3 id="http-与-https-有哪些区别" tabindex="-1"><a class="header-anchor" href="#http-与-https-有哪些区别"><span>HTTP 与 HTTPS 有哪些区别？</span></a></h3><ul><li>HTTP 是超文本传输协议，信息是明文传输，存在安全风险的问题。HTTPS 则解决 HTTP 不安全的缺陷，在 TCP 和 HTTP 网络层之间加入了 SSL/TLS 安全协议，使得报文能够加密传输。</li><li>HTTP 连接建立相对简单， TCP 三次握手之后便可进行 HTTP 的报文传输。而 HTTPS 在 TCP 三次握手之后，还需进行 SSL/TLS 的握手过程，才可进入加密报文传输。</li><li>两者的默认端口不一样，HTTP 默认端口号是 80，HTTPS 默认端口号是 443。</li><li>HTTPS 协议需要向 CA（证书权威机构）申请数字证书，来保证服务器的身份是可信的。</li></ul><h3 id="https-解决了-http-的哪些问题" tabindex="-1"><a class="header-anchor" href="#https-解决了-http-的哪些问题"><span>HTTPS 解决了 HTTP 的哪些问题？</span></a></h3><p>HTTP 由于是明文传输，所以安全上存在以下三个风险：</p><ul><li><strong>窃听风险</strong>，比如通信链路上可以获取通信内容，用户号容易没。</li><li><strong>篡改风险</strong>，比如强制植入垃圾广告，视觉污染，用户眼容易瞎。</li><li><strong>冒充风险</strong>，比如冒充淘宝网站，用户钱容易没。</li></ul><p>HTTPS 在 HTTP 与 TCP 层之间加入了 <code>SSL/TLS</code> 协议，可以很好的解决了上述的风险：</p><ul><li><strong>信息加密</strong>：交互信息无法被窃取，但你的号会因为「自身忘记」账号而没。</li><li><strong>校验机制</strong>：无法篡改通信内容，篡改了就不能正常显示，但百度「竞价排名」依然可以搜索垃圾广告。</li><li><strong>身份证书</strong>：证明淘宝是真的淘宝网，但你的钱还是会因为「剁手」而没。</li></ul><p>可见，只要自身不做「恶」，SSL/TLS 协议是能保证通信是安全的。</p><blockquote><p>HTTPS 是如何解决上面的三个风险的？</p></blockquote><ul><li><strong>混合加密</strong>的方式实现信息的<strong>机密性</strong>，解决了窃听的风险。</li><li><strong>摘要算法</strong>的方式来实现<strong>完整性</strong>，它能够为数据生成独一无二的「指纹」，指纹用于校验数据的完整性，解决了篡改的风险。</li><li>将服务器公钥放入到<strong>数字证书</strong>中，解决了冒充的风险。</li></ul><h2 id="tls-协议建立流程" tabindex="-1"><a class="header-anchor" href="#tls-协议建立流程"><span>TLS 协议建立流程</span></a></h2><p><em>1. ClientHello</em></p><p>首先，由客户端向服务器发起加密通信请求，也就是 <code>ClientHello</code> 请求。</p><p>在这一步，客户端主要向服务器发送以下信息：</p><ol><li>客户端支持的 TLS 协议版本，如 TLS 1.2 版本。</li><li>客户端生产的随机数（<code>Client Random</code>），后面用于生成「会话秘钥」条件之一。</li><li>客户端支持的密码套件列表，如 RSA 加密算法。</li></ol><p><em>2. SeverHello</em></p><p>服务器收到客户端请求后，向客户端发出响应，也就是 <code>SeverHello</code>。服务器回应的内容有如下内容：</p><ol><li>确认 TLS 协议版本，如果浏览器不支持，则关闭加密通信。</li><li>服务器生产的随机数（<code>Server Random</code>），也是后面用于生产「会话秘钥」条件之一。</li><li>确认的密码套件列表，如 RSA 加密算法。</li><li>服务器的数字证书。</li></ol><p><em>3. 客户端回应</em></p><p>客户端收到服务器的回应之后，首先通过浏览器或者操作系统中的 CA 公钥，确认服务器的数字证书的真实性。</p><p>如果证书没有问题，客户端会<strong>从数字证书中取出服务器的公钥</strong>，然后使用它加密报文，向服务器发送如下信息：</p><ol><li>一个随机数（<code>pre-master key</code>）。该随机数会被服务器公钥加密。</li><li>加密通信算法改变通知，表示随后的信息都将用「会话秘钥」加密通信。</li><li>客户端握手结束通知，表示客户端的握手阶段已经结束。这一项同时把之前所有内容的发生的数据做个摘要，用来供服务端校验。</li></ol><p>上面第一项的随机数是整个握手阶段的第三个随机数，会发给服务端，所以这个随机数客户端和服务端都是一样的。</p><p><strong>服务器和客户端有了这三个随机数（Client Random、Server Random、pre-master key），接着就用双方协商的加密算法，各自生成本次通信的「会话秘钥」</strong>。</p><p><em>4. 服务器的最后回应</em></p><p>服务器收到客户端的第三个随机数（<code>pre-master key</code>）之后，通过协商的加密算法，计算出本次通信的「会话秘钥」。</p><p>然后，向客户端发送最后的信息：</p><p>（1）加密通信算法改变通知，表示随后的信息都将用「会话秘钥」加密通信。</p><p>（2）服务器握手结束通知，表示服务器的握手阶段已经结束。这一项同时把之前所有内容的发生的数据做个摘要，用来供客户端校验。</p><p>至此，整个 TLS 的握手阶段全部结束。接下来，客户端与服务器进入加密通信，就完全是使用普通的 HTTP 协议，只不过用「会话秘钥」加密内容。</p><h2 id="let-s-encrypt" tabindex="-1"><a class="header-anchor" href="#let-s-encrypt"><span><a href="https://letsencrypt.org/" target="_blank" rel="noopener noreferrer">Let’s Encrypt</a></span></a></h2><h2 id="hstp" tabindex="-1"><a class="header-anchor" href="#hstp"><span>HSTP</span></a></h2><p>HTTP Strict Transport Security (HSTS) - HTTP严格传输安全</p><p>HSTS 全称是HTTP Strict Transport Security， 他是一个Web安全策略机制(web security policy mechanism)</p><p>HSTS最为核心的是一个HTTP响应头（HTTP Response Header）。通过这响应头让浏览器得知，在接下来的一段时间内，当前域名只能通过HTTPS进行访问，并且在浏览器发现当前连接不安全的情况下，强行拒绝用户的后续访问要求</p>',36)]))}const a=e(p,[["render",o],["__file","https.html.vue"]]),c=JSON.parse(`{"path":"/cs/basic/network/application/https.html","title":"HTTPS","lang":"en-US","frontmatter":{"description":"HTTPS HTTP 与 HTTPS 有哪些区别？ HTTP 是超文本传输协议，信息是明文传输，存在安全风险的问题。HTTPS 则解决 HTTP 不安全的缺陷，在 TCP 和 HTTP 网络层之间加入了 SSL/TLS 安全协议，使得报文能够加密传输。 HTTP 连接建立相对简单， TCP 三次握手之后便可进行 HTTP 的报文传输。而 HTTPS 在...","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/cs/basic/network/application/https.html"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"HTTPS"}],["meta",{"property":"og:description","content":"HTTPS HTTP 与 HTTPS 有哪些区别？ HTTP 是超文本传输协议，信息是明文传输，存在安全风险的问题。HTTPS 则解决 HTTP 不安全的缺陷，在 TCP 和 HTTP 网络层之间加入了 SSL/TLS 安全协议，使得报文能够加密传输。 HTTP 连接建立相对简单， TCP 三次握手之后便可进行 HTTP 的报文传输。而 HTTPS 在..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-06-27T01:21:47.000Z"}],["meta",{"property":"article:modified_time","content":"2024-06-27T01:21:47.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"HTTPS\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-06-27T01:21:47.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[{"level":3,"title":"HTTP 与 HTTPS 有哪些区别？","slug":"http-与-https-有哪些区别","link":"#http-与-https-有哪些区别","children":[]},{"level":3,"title":"HTTPS 解决了 HTTP 的哪些问题？","slug":"https-解决了-http-的哪些问题","link":"#https-解决了-http-的哪些问题","children":[]},{"level":2,"title":"TLS 协议建立流程","slug":"tls-协议建立流程","link":"#tls-协议建立流程","children":[]},{"level":2,"title":"Let’s Encrypt","slug":"let-s-encrypt","link":"#let-s-encrypt","children":[]},{"level":2,"title":"HSTP","slug":"hstp","link":"#hstp","children":[]}],"git":{"createdTime":1680492546000,"updatedTime":1719451307000,"contributors":[{"name":"刘大维","email":"davidliu@liudaweideMacBook-Pro.local","commits":2}]},"readingTime":{"minutes":4.61,"words":1383},"filePathRelative":"cs/basic/network/application/https.md","localizedDate":"April 3, 2023","excerpt":"\\n<h3>HTTP 与 HTTPS 有哪些区别？</h3>\\n<ul>\\n<li>HTTP 是超文本传输协议，信息是明文传输，存在安全风险的问题。HTTPS 则解决 HTTP 不安全的缺陷，在 TCP 和 HTTP 网络层之间加入了 SSL/TLS 安全协议，使得报文能够加密传输。</li>\\n<li>HTTP 连接建立相对简单， TCP 三次握手之后便可进行 HTTP 的报文传输。而 HTTPS 在 TCP 三次握手之后，还需进行 SSL/TLS 的握手过程，才可进入加密报文传输。</li>\\n<li>两者的默认端口不一样，HTTP 默认端口号是 80，HTTPS 默认端口号是 443。</li>\\n<li>HTTPS 协议需要向 CA（证书权威机构）申请数字证书，来保证服务器的身份是可信的。</li>\\n</ul>","autoDesc":true}`);export{a as comp,c as data};
