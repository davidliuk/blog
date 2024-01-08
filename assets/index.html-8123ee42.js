import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as t,c as a,d as i}from"./app-9107e99b.js";const r={},o=i('<h1 id="computer-network" tabindex="-1"><a class="header-anchor" href="#computer-network" aria-hidden="true">#</a> Computer Network</h1><p>应用层</p><ul><li>HTTP/HTTPS/HSTP</li><li>DNS</li><li>FTP/SFTP</li><li>SMTP</li><li>ICMP</li></ul><p>传输层</p><ul><li>TCP</li><li>UDP</li></ul><p>网络层</p><ul><li>ARP</li><li>ASPF</li></ul><p>链路层</p><ul><li>以太网</li></ul><h2 id="通信方式" tabindex="-1"><a class="header-anchor" href="#通信方式" aria-hidden="true">#</a> 通信方式</h2><h3 id="单工" tabindex="-1"><a class="header-anchor" href="#单工" aria-hidden="true">#</a> 单工</h3><p>定义：单工数据传输只支持数据在一个方向上传输。</p><p>例如：灯塔发发出光信号，航船只能接受信号</p><h3 id="半双工" tabindex="-1"><a class="header-anchor" href="#半双工" aria-hidden="true">#</a> 半双工</h3><p>定义：半双工数据传输允许数据在两个方向上传输，但是在某一时刻，只允许数据在一个方向上传输，它实际上是一种切换方向的单工通信。</p><p>例如：<code>http1.1</code>，对讲机，只能让一个人说一个人听</p><p>实现原理：半双工传输模式采用<strong>载波侦听多路访问 /冲突检测</strong>。传统的<strong>共享型LAN以半双工模式运行</strong> ，线路上容易发生传输冲突。与集线器相连的节点（即多个节点连接到集线器，共享一条到交换机端口的连接）必须以半双工模式运行。因为这种节点必须能够冲突检测，类似于单车道桥梁。</p><h3 id="全双工" tabindex="-1"><a class="header-anchor" href="#全双工" aria-hidden="true">#</a> 全双工</h3><p>定义：全双工数据通信允许数据同时在两个方向上传输，因此，全双工通信是两个单工通信方式的结合，它要求发送设备和接收设备都有独立的接收和发送能力。</p><p>例如：<code>http2.0</code>、<code>websocket</code>、<code>TCP</code>，打电话，双方都能说对方也都能听到</p><p>实现原理：<strong>全双工传输模式可以用于点到点以太网连接和快速以太网连接</strong>，同时不会发生冲突，因为他们使用双绞线中两条不同线路，类似于双车道桥梁。</p><p>总结：传输层TCP是全双工的，但是其上层应用层可能是半双工的。每一个层次都有自己的双工模式，传输层有传输层的双工模式，应用层有应用层的双工模式。下层的双工模式是支持上层双工模式的上限。比如下层支持半双工，上层顶多支持半双工，不可能支持全双工。tcp是全双工的，但它的上层可能支持半双工，比如http1.1，也有可能支持全双工，比如http2.0。</p>',22),d=[o];function l(c,h){return t(),a("div",null,d)}const s=e(r,[["render",l],["__file","index.html.vue"]]);export{s as default};
