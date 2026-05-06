# Computer Network

这一部分按照协议栈来组织网络知识，优先覆盖服务端开发最常遇到的主题。

## 已覆盖主题

### Application

- HTTP / HTTPS / HTTP2 / HTTP3
- DNS
- RPC
- WebSocket
- Proxy / Nginx
- Mail
- SSH
- CDN
- Download

### Transport

- TCP
- UDP
- Congestion Control
- QUIC

### Internet

- IP
- NAT

## 待持续补充

- ICMP
- IGMP
- ARP
- Routing
- Ethernet / MAC

## 通信方式

### 单工

数据只能单向传输。

### 半双工

双方都可以传输，但同一时刻只能单方向传输。

常见比喻：对讲机。

### 全双工

双方可以同时发送和接收。

常见比喻：打电话。

## 阅读建议

1. `./transport/TCP.md`
2. `./application/http/http.md`
3. `./application/websocket.md`
4. `./internet/IP.md`
