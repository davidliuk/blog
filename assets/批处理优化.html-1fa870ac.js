import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as t,c as p,a as e,b as i,e as s,d as a}from"./app-9107e99b.js";const d={},r=e("h1",{id:"批处理优化",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#批处理优化","aria-hidden":"true"},"#"),i(" 批处理优化")],-1),c=e("p",null,"pipeline：单机模式下的批处理",-1),_=e("p",null,"使用批量操作可以减少网络传输次数，进而有效减小网络开销，大幅减少 RTT。",-1),h=e("code",null,"read()",-1),u=e("code",null,"write()",-1),m={href:"https://redis.io/docs/manual/pipelining/",target:"_blank",rel:"noopener noreferrer"},f=a('<h3 id="mset" tabindex="-1"><a class="header-anchor" href="#mset" aria-hidden="true">#</a> mset</h3><ul><li><code>mset</code></li><li><code>hmset</code></li><li><code>sadd</code></li></ul><p>注意事项：</p><ul><li>不要在一次批处理中传输太多命令，否则单次命令占用带宽过多，会导致网络阻塞</li><li>MSET 虽然可以批处理，但是却只能操作部分数据类型，因此如果有对复杂数据类型的批处理需要，建议使用 Pipeline 功能：</li></ul><h3 id="pipeline" tabindex="-1"><a class="header-anchor" href="#pipeline" aria-hidden="true">#</a> Pipeline</h3><p>使用<strong>管道技术可以解决多个命令执行时的网络等待</strong>，它是把多个命令整合到一起发送给服务器端处理之后统一返回给客户端，这样就免去了每条命令执行后都要等待的情况，从而有效地提高了程序的执行效率。</p><p>但使用管道技术也要注意避免发送的命令过大，或管道内的数据太多而导致的网络阻塞。</p><p>要注意的是，管道技术本质上是客户端提供的功能，而非 Redis 服务器端的功能。</p><p>注意事项：</p><ul><li>批处理时不建议一次携带太多命令</li><li>Pipeline 的多个命令之间不具备原子性</li></ul><hr><p>原生批量操作命令和 pipeline 的是有区别的，使用的时候需要注意：</p><ul><li>原生批量操作命令是原子操作，pipeline 是非原子操作。</li><li>pipeline 可以打包不同的命令，原生批量操作命令不可以。</li><li>原生批量操作命令是 Redis 服务端支持实现的，而 pipeline 需要服务端和客户端的共同实现。</li></ul><p>顺带补充一下 pipeline 和 Redis 事务的对比：</p><ul><li>事务是原子操作，pipeline 是非原子操作。两个不同的事务不会同时运行，而 pipeline 可以同时以交错方式执行。</li><li>Redis 事务中每个命令都需要发送到服务端，而 Pipeline 只需要发送一次，请求次数更少。</li></ul>',15);function x(k,R){const l=o("ExternalLinkIcon");return t(),p("div",null,[r,c,_,e("p",null,[i("另外，除了能减少 RTT 之外，发送一次命令的 socket I/O 成本也比较高（涉及上下文切换，存在"),h,i("和"),u,i("系统调用），批量操作还可以减少 socket I/O 成本。这个在官方对 pipeline 的介绍中有提到："),e("a",m,[i("https://redis.io/docs/manual/pipelining/open in new window"),s(l)]),i(" 。")]),f])}const g=n(d,[["render",x],["__file","批处理优化.html.vue"]]);export{g as default};
