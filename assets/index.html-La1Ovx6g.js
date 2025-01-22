import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as t,d as l,o as p}from"./app-ktFCNIob.js";const n={};function o(a,e){return p(),t("div",null,e[0]||(e[0]=[l('<h1 id="computer-network" tabindex="-1"><a class="header-anchor" href="#computer-network"><span>Computer Network</span></a></h1><p>TCP/IP 协议栈</p><p>应用层</p><ul><li><p>会话层</p></li><li><p>表示层</p></li><li><p>应用层</p></li><li><p>HTTP/HTTPS/HSTP, RPC</p></li><li><p>DNS/DoT/DoH</p></li><li><p>FTP/SFTP, SCP</p></li><li><p>SMTP, POP3/IMAP</p></li><li><p>RTP</p></li><li><p>SSH</p></li></ul><p>传输层</p><ul><li>TCP</li><li>UDP</li></ul><p>网络层</p><ul><li>IP/IPv6</li><li>NAT</li><li>ICMP</li><li>IGMP</li><li>ARP</li><li>Router 路由 <ul><li>OSPF</li><li>IGRP</li><li>RIP</li></ul></li></ul><p>链路层</p><ul><li>Ethernet 以太网</li><li>FDDI</li><li>ARCNET</li><li>P2P</li><li>Frame Relay</li><li>CSMA/CD</li><li>MAC</li></ul><p><img src="https://oss.javaguide.cn/github/javaguide/cs-basics/network/osi-model-detail.png" alt="img" loading="lazy"></p><h2 id="通信方式" tabindex="-1"><a class="header-anchor" href="#通信方式"><span>通信方式</span></a></h2><h3 id="单工" tabindex="-1"><a class="header-anchor" href="#单工"><span>单工</span></a></h3><p>定义：单工数据传输只支持数据在一个方向上传输。</p><p>例如：灯塔发发出光信号，航船只能接受信号</p><h3 id="半双工" tabindex="-1"><a class="header-anchor" href="#半双工"><span>半双工</span></a></h3><p>定义：半双工数据传输允许数据在两个方向上传输，但是在某一时刻，只允许数据在一个方向上传输，它实际上是一种切换方向的单工通信。</p><p>例如：<code>http1.1</code>，对讲机，只能让一个人说一个人听</p><p>实现原理：半双工传输模式采用<strong>载波侦听多路访问 /冲突检测</strong>。传统的<strong>共享型LAN以半双工模式运行</strong> ，线路上容易发生传输冲突。与集线器相连的节点（即多个节点连接到集线器，共享一条到交换机端口的连接）必须以半双工模式运行。因为这种节点必须能够冲突检测，类似于单车道桥梁。</p><h3 id="全双工" tabindex="-1"><a class="header-anchor" href="#全双工"><span>全双工</span></a></h3><p>定义：全双工数据通信允许数据同时在两个方向上传输，因此，全双工通信是两个单工通信方式的结合，它要求发送设备和接收设备都有独立的接收和发送能力。</p><p>例如：<code>http2.0</code>、<code>websocket</code>、<code>TCP</code>，打电话，双方都能说对方也都能听到</p><p>实现原理：<strong>全双工传输模式可以用于点到点以太网连接和快速以太网连接</strong>，同时不会发生冲突，因为他们使用双绞线中两条不同线路，类似于双车道桥梁。</p><p>总结：</p><p>传输层TCP是全双工的，但是其上层应用层可能是半双工的。</p><p>每一个层次都有自己的双工模式，传输层有传输层的双工模式，应用层有应用层的双工模式。下层的双工模式是支持上层双工模式的上限。比如下层支持半双工，上层顶多支持半双工，不可能支持全双工。tcp是全双工的，但它的上层可能支持半双工，比如http1.1，也有可能支持全双工，比如http2.0。</p>',26)]))}const s=i(n,[["render",o],["__file","index.html.vue"]]),c=JSON.parse(`{"path":"/cs/basic/network/","title":"Computer Network","lang":"en-US","frontmatter":{"description":"Computer Network TCP/IP 协议栈 应用层 会话层 表示层 应用层 HTTP/HTTPS/HSTP, RPC DNS/DoT/DoH FTP/SFTP, SCP SMTP, POP3/IMAP RTP SSH 传输层 TCP UDP 网络层 IP/IPv6 NAT ICMP IGMP ARP Router 路由 OSPF IGRP ...","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/cs/basic/network/"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"Computer Network"}],["meta",{"property":"og:description","content":"Computer Network TCP/IP 协议栈 应用层 会话层 表示层 应用层 HTTP/HTTPS/HSTP, RPC DNS/DoT/DoH FTP/SFTP, SCP SMTP, POP3/IMAP RTP SSH 传输层 TCP UDP 网络层 IP/IPv6 NAT ICMP IGMP ARP Router 路由 OSPF IGRP ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://oss.javaguide.cn/github/javaguide/cs-basics/network/osi-model-detail.png"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-05-08T07:35:02.000Z"}],["meta",{"property":"article:modified_time","content":"2024-05-08T07:35:02.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Computer Network\\",\\"image\\":[\\"https://oss.javaguide.cn/github/javaguide/cs-basics/network/osi-model-detail.png\\"],\\"dateModified\\":\\"2024-05-08T07:35:02.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[{"level":2,"title":"通信方式","slug":"通信方式","link":"#通信方式","children":[{"level":3,"title":"单工","slug":"单工","link":"#单工","children":[]},{"level":3,"title":"半双工","slug":"半双工","link":"#半双工","children":[]},{"level":3,"title":"全双工","slug":"全双工","link":"#全双工","children":[]}]}],"git":{"createdTime":1670083932000,"updatedTime":1715153702000,"contributors":[{"name":"davidliuk","email":"l729641074@163.com","commits":2},{"name":"刘大维","email":"davidliu@liudaweideMacBook-Pro.local","commits":2},{"name":"davidliu","email":"liudawei47@jd.com","commits":1}]},"readingTime":{"minutes":2,"words":599},"filePathRelative":"cs/basic/network/README.md","localizedDate":"December 3, 2022","excerpt":"\\n<p>TCP/IP 协议栈</p>\\n<p>应用层</p>\\n<ul>\\n<li>\\n<p>会话层</p>\\n</li>\\n<li>\\n<p>表示层</p>\\n</li>\\n<li>\\n<p>应用层</p>\\n</li>\\n<li>\\n<p>HTTP/HTTPS/HSTP, RPC</p>\\n</li>\\n<li>\\n<p>DNS/DoT/DoH</p>\\n</li>\\n<li>\\n<p>FTP/SFTP, SCP</p>\\n</li>\\n<li>\\n<p>SMTP, POP3/IMAP</p>\\n</li>\\n<li>\\n<p>RTP</p>\\n</li>\\n<li>\\n<p>SSH</p>\\n</li>\\n</ul>\\n<p>传输层</p>\\n<ul>\\n<li>TCP</li>\\n<li>UDP</li>\\n</ul>","autoDesc":true}`);export{s as comp,c as data};
