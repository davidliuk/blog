import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as o,b as n,o as r}from"./app-B3ooTv29.js";const a={};function i(p,t){return r(),o("div",null,t[0]||(t[0]=[n('<h1 id="udp" tabindex="-1"><a class="header-anchor" href="#udp"><span>UDP</span></a></h1><p><img src="https://cdn.xiaolincoding.com//mysql/other/format,png-20230309230439961.png" alt="UDP 头部格式" loading="lazy"></p><h2 id="quic-实现可靠传输" tabindex="-1"><a class="header-anchor" href="#quic-实现可靠传输"><span>QUIC - 实现可靠传输</span></a></h2><p>「<strong>如何基于 UDP 协议实现可靠传输？</strong>」</p><p>很多同学第一反应就会说把 TCP 可靠传输的特性（序列号、确认应答、超时重传、流量控制、拥塞控制）在应用层实现一遍。</p><p>实现的思路确实这样没错，但是有没有想过，<strong>既然 TCP 天然支持可靠传输，为什么还需要基于 UDP 实现可靠传输呢？这不是重复造轮子吗？</strong></p><p>所以，我们要先弄清楚 TCP 协议有哪些痛点？而这些痛点是否可以在基于 UDP 协议实现的可靠传输协议中得到改进？</p><p>在之前这篇文章：<a href="https://mp.weixin.qq.com/s/9kHoRk6QIYOFUR_PCmHY6g" target="_blank" rel="noopener noreferrer">TCP 就没什么缺陷吗？ (opens new window)</a>，我已经说了 TCP 协议四个方面的缺陷：</p><ul><li>升级 TCP 的工作很困难；</li><li>TCP 建立连接的延迟；</li><li>TCP 存在队头阻塞问题；</li><li>网络迁移需要重新建立 TCP 连接；</li></ul><p>现在市面上已经有基于 UDP 协议实现的可靠传输协议的成熟方案了，那就是在应用层的 QUIC 协议，已经应用在了 HTTP/3。</p><p>这次，<strong>聊聊 QUIC 是如何实现可靠传输的？又是如何解决上面 TCP 协议四个方面的缺陷</strong>？</p>',11)]))}const s=e(a,[["render",i],["__file","UDP.html.vue"]]),m=JSON.parse(`{"path":"/cs/basic/network/transport/UDP.html","title":"UDP","lang":"en-US","frontmatter":{"description":"UDP UDP 头部格式 QUIC - 实现可靠传输 「如何基于 UDP 协议实现可靠传输？」 很多同学第一反应就会说把 TCP 可靠传输的特性（序列号、确认应答、超时重传、流量控制、拥塞控制）在应用层实现一遍。 实现的思路确实这样没错，但是有没有想过，既然 TCP 天然支持可靠传输，为什么还需要基于 UDP 实现可靠传输呢？这不是重复造轮子吗？ 所以...","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/cs/basic/network/transport/UDP.html"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"UDP"}],["meta",{"property":"og:description","content":"UDP UDP 头部格式 QUIC - 实现可靠传输 「如何基于 UDP 协议实现可靠传输？」 很多同学第一反应就会说把 TCP 可靠传输的特性（序列号、确认应答、超时重传、流量控制、拥塞控制）在应用层实现一遍。 实现的思路确实这样没错，但是有没有想过，既然 TCP 天然支持可靠传输，为什么还需要基于 UDP 实现可靠传输呢？这不是重复造轮子吗？ 所以..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.xiaolincoding.com//mysql/other/format,png-20230309230439961.png"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-05-08T07:35:02.000Z"}],["meta",{"property":"article:modified_time","content":"2024-05-08T07:35:02.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"UDP\\",\\"image\\":[\\"https://cdn.xiaolincoding.com//mysql/other/format,png-20230309230439961.png\\"],\\"dateModified\\":\\"2024-05-08T07:35:02.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[{"level":2,"title":"QUIC - 实现可靠传输","slug":"quic-实现可靠传输","link":"#quic-实现可靠传输","children":[]}],"git":{"createdTime":1715153702000,"updatedTime":1715153702000,"contributors":[{"name":"刘大维","email":"davidliu@liudaweideMacBook-Pro.local","commits":1}]},"readingTime":{"minutes":1.1,"words":330},"filePathRelative":"cs/basic/network/transport/UDP.md","localizedDate":"May 8, 2024","excerpt":"\\n<p><img src=\\"https://cdn.xiaolincoding.com//mysql/other/format,png-20230309230439961.png\\" alt=\\"UDP 头部格式\\" loading=\\"lazy\\"></p>\\n<h2>QUIC - 实现可靠传输</h2>\\n<p>「<strong>如何基于 UDP 协议实现可靠传输？</strong>」</p>\\n<p>很多同学第一反应就会说把 TCP 可靠传输的特性（序列号、确认应答、超时重传、流量控制、拥塞控制）在应用层实现一遍。</p>\\n<p>实现的思路确实这样没错，但是有没有想过，<strong>既然 TCP 天然支持可靠传输，为什么还需要基于 UDP 实现可靠传输呢？这不是重复造轮子吗？</strong></p>","autoDesc":true}`);export{s as comp,m as data};
