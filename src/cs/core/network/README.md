---
title: Computer Networks
description: A service-oriented guide to the network stack from IP and transport to HTTP, RPC, DNS, proxies, and CDN.
icon: globe
---

# Computer Networks

网络学习的核心不是背协议字段，而是理解数据如何跨主机移动、可靠性由谁负责，以及每一层对延迟和故障暴露什么语义。

<div class="section-hero">
  <p class="section-eyebrow">Packets → Connections → Requests → Services</p>
  <h2>Follow one request through the stack.</h2>
  <p>从 IP 路由开始，经 TCP / QUIC 建立传输语义，再由 HTTP、RPC、DNS、代理和 CDN 组成真实服务链路。</p>
</div>

## Protocol Map

<div class="section-card-grid">
  <a class="section-card" href="./internet/">
    <span class="section-card__eyebrow">Layer 3</span>
    <h3>Internet Layer</h3>
    <p>IP、NAT 与跨网络寻址，回答数据包“去哪里”。</p>
  </a>
  <a class="section-card" href="./transport/">
    <span class="section-card__eyebrow">Layer 4</span>
    <h3>Transport Layer</h3>
    <p>TCP、UDP、拥塞控制与 QUIC，回答进程之间“如何传”。</p>
  </a>
  <a class="section-card" href="./application/">
    <span class="section-card__eyebrow">Application</span>
    <h3>Application Protocols</h3>
    <p>HTTP、RPC、WebSocket、DNS、SSH 与 Mail，赋予字节流业务语义。</p>
  </a>
  <a class="section-card" href="./application/proxy.md">
    <span class="section-card__eyebrow">Infrastructure</span>
    <h3>Delivery & Proxies</h3>
    <p>Proxy、Nginx 与 CDN 处理路由、缓存、TLS 终止和边缘分发。</p>
  </a>
</div>

## Recommended Path

1. [IP](./internet/IP.md) 与 [NAT](./internet/NAT.md)
2. [TCP](./transport/TCP.md)、[UDP](./transport/UDP.md) 与 [Congestion Control](./transport/congestion.md)
3. [HTTP Family](./application/http/)
4. [DNS](./application/dns.md) 与 [RPC](./application/rpc.md)
5. [WebSocket](./application/websocket.md)、[Proxy](./application/proxy.md) 与 [CDN](./application/cdn.md)

## Diagnose by Layer

| 现象 | 首先检查 | 可能涉及 |
| --- | --- | --- |
| 无法连接 | 地址、路由、端口、防火墙 | IP / NAT / TCP handshake |
| 建连慢 | DNS、TLS、RTT、丢包 | DNS / TCP / QUIC / HTTPS |
| 传输慢 | 拥塞窗口、重传、带宽 | TCP congestion / network path |
| 请求慢 | 服务排队、连接池、上游依赖 | HTTP / RPC / application |
| 长连接断开 | idle timeout、NAT、心跳 | TCP / proxy / WebSocket |
