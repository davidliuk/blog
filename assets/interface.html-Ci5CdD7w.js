import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as i,d as e,o as n}from"./app-DIqbhby7.js";const r={};function s(o,l){return n(),i("div",null,l[0]||(l[0]=[e('<h1 id="interface" tabindex="-1"><a class="header-anchor" href="#interface"><span>Interface</span></a></h1><h3 id="usb-universal-serial-bus" tabindex="-1"><a class="header-anchor" href="#usb-universal-serial-bus"><span>USB（Universal Serial Bus）</span></a></h3><p>USB是一种通用接口协议，设计用于为电脑和外部设备（如键盘、鼠标、存储设备）提供标准的连接方式，逐步演变并推出了多个版本：</p><ol><li><p><strong>USB 2.0</strong></p><ul><li>发布年份：2000年</li><li>传输速度：最大480 Mbps（约60 MB/s）</li><li>适用范围：适用于低速或中速设备，如鼠标、键盘和一些简单的存储设备</li><li>特点：USB 2.0主要用于基本的数据传输任务，速度较低但兼容性好</li></ul></li><li><p><strong>USB 3.0 / 3.1 / 3.2</strong></p><ul><li>发布年份：USB 3.0（2008年）、USB 3.1（2013年）、USB 3.2（2017年）</li><li>传输速度：USB 3.0可达5 Gbps，USB 3.1 Gen 2可达10 Gbps，USB 3.2 Gen 2x2可达20 Gbps</li><li>向下兼容：向下兼容USB 2.0和USB 1.1</li><li>特点：USB 3.x支持双向通信，更高的数据传输速度，广泛用于高速外接存储设备和显示设备（如外置显卡盒、4K显示器）</li></ul></li><li><p><strong>USB4</strong></p><ul><li>发布年份：2019年</li><li>传输速度：最大40 Gbps</li><li>特点：USB4集成了Thunderbolt 3的技术，支持多协议传输和更高的速度；单一端口可以处理数据、视频信号和电源供给</li><li>适用范围：支持USB 4的设备可用于高性能显示器、外置显卡以及高速存储设备</li></ul></li><li><p><strong>USB Type-C（物理接口）</strong></p><ul><li>特点：Type-C是物理接口的标准，支持正反插，已成为USB 3.1及以上的默认接口类型。它支持供电、数据和视频输出。</li><li>功能：可以传输数据（USB、DisplayPort、HDMI）、供电（支持USB PD协议，最高可达240W），并且在USB4中能支持Thunderbolt 3的协议</li></ul></li></ol><h4 id="关键特性" tabindex="-1"><a class="header-anchor" href="#关键特性"><span>关键特性</span></a></h4><ul><li><strong>供电能力</strong>：USB PD（Power Delivery）协议允许Type-C设备的最大功率可达240W（48V/5A），适合用于笔记本电脑等大功率设备。</li><li><strong>兼容性</strong>：USB标准向下兼容，不同版本的设备间可以连接，但数据速率会降低到较低的版本。</li><li><strong>应用广泛</strong>：USB已广泛应用于多种设备，包括移动设备、笔记本电脑、存储设备、显示器等。</li></ul><h3 id="thunderbolt" tabindex="-1"><a class="header-anchor" href="#thunderbolt"><span>Thunderbolt</span></a></h3><p>Thunderbolt是英特尔和苹果联合开发的高性能接口，提供高速数据和视频传输，并且能够供电。Thunderbolt同样经历了多代演进，显著提高了传输速度和扩展性。</p><ol><li><p><strong>Thunderbolt 1</strong></p><ul><li>发布年份：2011年</li><li>传输速度：最大10 Gbps</li><li>连接类型：使用Mini DisplayPort接口</li><li>功能：支持数据和视频（DisplayPort），单条链路可连接多个设备</li></ul></li><li><p><strong>Thunderbolt 2</strong></p><ul><li>发布年份：2013年</li><li>传输速度：最大20 Gbps</li><li>连接类型：仍然使用Mini DisplayPort接口</li><li>功能：聚合了两个10 Gbps通道，可以支持更高的视频分辨率（如4K显示器）</li></ul></li><li><p><strong>Thunderbolt 3</strong></p><ul><li>发布年份：2015年</li><li>传输速度：最大40 Gbps</li><li>连接类型：采用USB-C接口，具有更广泛的兼容性</li><li>特点：集成USB 3.1和DisplayPort协议，支持数据、视频、音频、供电（最高100W），可以通过单条线缆连接显示器、存储设备、显卡等外设</li><li><strong>链式连接</strong>：可串联最多6个Thunderbolt设备，实现复杂的外设布局</li></ul></li><li><p><strong>Thunderbolt 4</strong></p><ul><li>发布年份：2020年</li><li>传输速度：依旧为40 Gbps，但增强了连接的稳定性和功能</li><li>最低要求：保证40 Gbps传输速度，支持双4K显示器或单8K显示器输出，同时支持PCIe通道的最低32 Gbps速度</li><li>特点：Thunderbolt 4确保了更高的兼容性，支持USB4，并且具有更高的最低性能要求</li></ul></li></ol><h4 id="关键特性-1" tabindex="-1"><a class="header-anchor" href="#关键特性-1"><span>关键特性</span></a></h4><ul><li><strong>高传输速率</strong>：Thunderbolt 3和Thunderbolt 4都支持40 Gbps的高速传输，适合用于数据密集型应用，如4K视频编辑、外置显卡。</li><li><strong>多功能集成</strong>：Thunderbolt接口可以在单一接口上整合数据、视频、音频、供电和网络连接。</li><li><strong>链式连接（Daisy-Chaining）</strong>：Thunderbolt接口支持链式连接，可以串联多个设备（如显示器、存储设备等）。</li></ul><h3 id="三、usb与thunderbolt的对比" tabindex="-1"><a class="header-anchor" href="#三、usb与thunderbolt的对比"><span>三、USB与Thunderbolt的对比</span></a></h3><table><thead><tr><th>特性</th><th>USB 3.2/4</th><th>Thunderbolt 3/4</th></tr></thead><tbody><tr><td><strong>最大速度</strong></td><td>USB 3.2: 20 Gbps；USB4: 40 Gbps</td><td>40 Gbps</td></tr><tr><td><strong>接口类型</strong></td><td>USB Type-A、Type-C</td><td>USB-C</td></tr><tr><td><strong>多功能集成</strong></td><td>数据、供电、视频（部分）</td><td>数据、供电、视频、音频</td></tr><tr><td><strong>供电能力</strong></td><td>最高240W（USB PD 3.1）</td><td>最高100W</td></tr><tr><td><strong>链式连接</strong></td><td>不支持</td><td>支持</td></tr><tr><td><strong>应用场景</strong></td><td>广泛应用于一般设备</td><td>高性能场景（如外置显卡、显示器）</td></tr></tbody></table><h3 id="总结" tabindex="-1"><a class="header-anchor" href="#总结"><span>总结</span></a></h3><ul><li><p><strong>USB</strong>：更通用，性价比高，覆盖日常设备，Type-C接口和USB4协议大大增强了兼容性和性能。</p></li><li><p><strong>Thunderbolt</strong>：高端应用，适用于高数据速率需求的场景，如4K/8K视频、外置显卡。Thunderbolt 3和4的推出进一步提高了其多功能性和性能，使其成为专业用户的首选。</p></li><li><p>USB4中能支持Thunderbolt 3的协议</p></li></ul>',15)]))}const p=t(r,[["render",s],["__file","interface.html.vue"]]),u=JSON.parse(`{"path":"/hobby/device/interface.html","title":"Interface","lang":"en-US","frontmatter":{"description":"Interface USB（Universal Serial Bus） USB是一种通用接口协议，设计用于为电脑和外部设备（如键盘、鼠标、存储设备）提供标准的连接方式，逐步演变并推出了多个版本： USB 2.0 发布年份：2000年 传输速度：最大480 Mbps（约60 MB/s） 适用范围：适用于低速或中速设备，如鼠标、键盘和一些简单的存储设备 特...","head":[["meta",{"property":"og:url","content":"https://davidliuk.github.io/blog/blog/hobby/device/interface.html"}],["meta",{"property":"og:site_name","content":"David's Blog"}],["meta",{"property":"og:title","content":"Interface"}],["meta",{"property":"og:description","content":"Interface USB（Universal Serial Bus） USB是一种通用接口协议，设计用于为电脑和外部设备（如键盘、鼠标、存储设备）提供标准的连接方式，逐步演变并推出了多个版本： USB 2.0 发布年份：2000年 传输速度：最大480 Mbps（约60 MB/s） 适用范围：适用于低速或中速设备，如鼠标、键盘和一些简单的存储设备 特..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-11-22T03:06:35.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-22T03:06:35.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Interface\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-22T03:06:35.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"David Liu\\",\\"url\\":\\"https://github.com/davidliuk\\"}]}"]]},"headers":[{"level":3,"title":"USB（Universal Serial Bus）","slug":"usb-universal-serial-bus","link":"#usb-universal-serial-bus","children":[]},{"level":3,"title":"Thunderbolt","slug":"thunderbolt","link":"#thunderbolt","children":[]},{"level":3,"title":"三、USB与Thunderbolt的对比","slug":"三、usb与thunderbolt的对比","link":"#三、usb与thunderbolt的对比","children":[]},{"level":3,"title":"总结","slug":"总结","link":"#总结","children":[]}],"git":{"createdTime":1732244795000,"updatedTime":1732244795000,"contributors":[{"name":"David Liu","email":"liudawei@seas.upenn.edu","commits":1}]},"readingTime":{"minutes":4.07,"words":1220},"filePathRelative":"hobby/device/interface.md","localizedDate":"November 22, 2024","excerpt":"\\n<h3>USB（Universal Serial Bus）</h3>\\n<p>USB是一种通用接口协议，设计用于为电脑和外部设备（如键盘、鼠标、存储设备）提供标准的连接方式，逐步演变并推出了多个版本：</p>\\n<ol>\\n<li>\\n<p><strong>USB 2.0</strong></p>\\n<ul>\\n<li>发布年份：2000年</li>\\n<li>传输速度：最大480 Mbps（约60 MB/s）</li>\\n<li>适用范围：适用于低速或中速设备，如鼠标、键盘和一些简单的存储设备</li>\\n<li>特点：USB 2.0主要用于基本的数据传输任务，速度较低但兼容性好</li>\\n</ul>\\n</li>\\n<li>\\n<p><strong>USB 3.0 / 3.1 / 3.2</strong></p>\\n<ul>\\n<li>发布年份：USB 3.0（2008年）、USB 3.1（2013年）、USB 3.2（2017年）</li>\\n<li>传输速度：USB 3.0可达5 Gbps，USB 3.1 Gen 2可达10 Gbps，USB 3.2 Gen 2x2可达20 Gbps</li>\\n<li>向下兼容：向下兼容USB 2.0和USB 1.1</li>\\n<li>特点：USB 3.x支持双向通信，更高的数据传输速度，广泛用于高速外接存储设备和显示设备（如外置显卡盒、4K显示器）</li>\\n</ul>\\n</li>\\n<li>\\n<p><strong>USB4</strong></p>\\n<ul>\\n<li>发布年份：2019年</li>\\n<li>传输速度：最大40 Gbps</li>\\n<li>特点：USB4集成了Thunderbolt 3的技术，支持多协议传输和更高的速度；单一端口可以处理数据、视频信号和电源供给</li>\\n<li>适用范围：支持USB 4的设备可用于高性能显示器、外置显卡以及高速存储设备</li>\\n</ul>\\n</li>\\n<li>\\n<p><strong>USB Type-C（物理接口）</strong></p>\\n<ul>\\n<li>特点：Type-C是物理接口的标准，支持正反插，已成为USB 3.1及以上的默认接口类型。它支持供电、数据和视频输出。</li>\\n<li>功能：可以传输数据（USB、DisplayPort、HDMI）、供电（支持USB PD协议，最高可达240W），并且在USB4中能支持Thunderbolt 3的协议</li>\\n</ul>\\n</li>\\n</ol>","autoDesc":true}`);export{p as comp,u as data};
