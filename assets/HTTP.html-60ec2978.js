const e=JSON.parse(`{"key":"v-ca789fae","path":"/cs/basic/network/HTTP.html","title":"HTTP","lang":"en-US","frontmatter":{"description":"HTTP HTTP 协是基于 TCP 协议，发送 HTTP 请求之前首先要建立 TCP 连接也就是要经历 3 次握手。目前使用的 HTTP 协议大部分都是 1.1。在 1.1 的协议里面，默认是开启了 Keep-Alive 的，这样的话建立的连接就可以在多次请求中被复用了。 另外， HTTP 协议是”无状态”的协议，它无法记录客户端用户的状态，一般我们都是通过 Session 来记录客户端用户的状态。 基本概念 HTTP 是超文本传输协议，也就是HyperText Transfer Protocol。","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/cs/basic/network/HTTP.html"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"HTTP"}],["meta",{"property":"og:description","content":"HTTP HTTP 协是基于 TCP 协议，发送 HTTP 请求之前首先要建立 TCP 连接也就是要经历 3 次握手。目前使用的 HTTP 协议大部分都是 1.1。在 1.1 的协议里面，默认是开启了 Keep-Alive 的，这样的话建立的连接就可以在多次请求中被复用了。 另外， HTTP 协议是”无状态”的协议，它无法记录客户端用户的状态，一般我们都是通过 Session 来记录客户端用户的状态。 基本概念 HTTP 是超文本传输协议，也就是HyperText Transfer Protocol。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-05-17T10:10:52.000Z"}],["meta",{"property":"article:author","content":"David Liu"}],["meta",{"property":"article:modified_time","content":"2023-05-17T10:10:52.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"HTTP\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-05-17T10:10:52.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[{"level":2,"title":"基本概念","slug":"基本概念","link":"#基本概念","children":[{"level":3,"title":"报文格式","slug":"报文格式","link":"#报文格式","children":[]},{"level":3,"title":"GET 与 POST 有什么区别？","slug":"get-与-post-有什么区别","link":"#get-与-post-有什么区别","children":[]},{"level":3,"title":"GET 和 POST 方法都是安全和幂等的吗？","slug":"get-和-post-方法都是安全和幂等的吗","link":"#get-和-post-方法都是安全和幂等的吗","children":[]},{"level":3,"title":"HTTP 缓存技术","slug":"http-缓存技术","link":"#http-缓存技术","children":[]},{"level":3,"title":"协商缓存","slug":"协商缓存","link":"#协商缓存","children":[]}]},{"level":2,"title":"特性","slug":"特性","link":"#特性","children":[]},{"level":2,"title":"优化","slug":"优化","link":"#优化","children":[{"level":3,"title":"避免发送 HTTP 请求 - 缓存","slug":"避免发送-http-请求-缓存","link":"#避免发送-http-请求-缓存","children":[]},{"level":3,"title":"减少 HTTP 请求次数","slug":"减少-http-请求次数","link":"#减少-http-请求次数","children":[]},{"level":3,"title":"合并请求","slug":"合并请求","link":"#合并请求","children":[]}]},{"level":2,"title":"发展","slug":"发展","link":"#发展","children":[{"level":3,"title":"HTTP/1.1 相比 HTTP/1.0 提高了什么性能？","slug":"http-1-1-相比-http-1-0-提高了什么性能","link":"#http-1-1-相比-http-1-0-提高了什么性能","children":[]},{"level":3,"title":"HTTP/2 做了什么优化？","slug":"http-2-做了什么优化","link":"#http-2-做了什么优化","children":[]}]}],"git":{"createdTime":1679321449000,"updatedTime":1684318252000,"contributors":[{"name":"davidliuk","email":"l729641074@163.com","commits":4},{"name":"刘大维","email":"davidliu@liudaweideMacBook-Pro.local","commits":1}]},"readingTime":{"minutes":12.3,"words":3689},"filePathRelative":"cs/basic/network/HTTP.md","localizedDate":"March 20, 2023","excerpt":"<h1> HTTP</h1>\\n<p>HTTP 协是基于 TCP 协议，发送 HTTP 请求之前首先要建立 TCP 连接也就是要经历 3 次握手。目前使用的 HTTP 协议大部分都是 1.1。在 1.1 的协议里面，默认是开启了 Keep-Alive 的，这样的话建立的连接就可以在多次请求中被复用了。</p>\\n<p>另外， HTTP 协议是”无状态”的协议，它无法记录客户端用户的状态，一般我们都是通过 Session 来记录客户端用户的状态。</p>\\n<h2> 基本概念</h2>\\n<p>HTTP 是超文本传输协议，也就是<strong>H</strong>yperText <strong>T</strong>ransfer <strong>P</strong>rotocol。</p>","autoDesc":true}`);export{e as data};
