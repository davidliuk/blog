# Comet 推送

这页把实时推送问题放在系统设计语境里看，重点是理解不同方案的取舍。

## 常见方案

- Polling
- Long Polling
- SSE
- WebSocket
- MQTT

如果想看协议层细节，可以继续阅读 `../../../core/network/application/websocket.md`。

## Polling 轮询

轮询是最容易落地的方案，客户端按固定间隔向服务端请求数据。

### 短轮询

```javascript
setInterval(() => {
  messageCount().then((res) => {
    if (res.code === 200) {
      this.messageCount = res.data;
    }
  });
}, 1000);
```

优点：

- 简单
- 容易和现有 HTTP 服务整合

缺点：

- 无论是否有新数据，都会持续发请求
- 会浪费带宽和服务端资源

### 长轮询

长轮询在没有新数据时会先把请求挂住，直到：

- 服务端有了新数据
- 或达到超时时间

它仍然是 `pull`，但相比短轮询更节省资源，也更接近实时。

## Push vs Pull

### Push

客户端和服务端建立长连接，服务端在数据变化时主动推送。

优点：

- 实时性强
- 客户端逻辑简单

缺点：

- 连接管理复杂
- 需要心跳与重连机制

### Pull

客户端主动请求服务端获取变化。

优点：

- 实现简单
- 更容易和现有 HTTP 体系兼容

缺点：

- 实时性差
- 请求频率难权衡

## SSE

SSE 基于 HTTP，通过 `text/event-stream` 持续向浏览器推送文本流。

适合：

- 服务端到客户端的单向通知
- 文本流式返回
- 浏览器场景

SSE 和 WebSocket 的主要区别：

- SSE 是单向通信
- WebSocket 是全双工通信
- SSE 默认支持断线重连
- WebSocket 更适合双向交互与二进制数据

## 什么时候选什么

- 先要一个最简单可用的方案：短轮询
- 需要更好的实时性，但还想基于 HTTP：长轮询 / SSE
- 需要双向交互、低延迟、连接态会话：WebSocket
