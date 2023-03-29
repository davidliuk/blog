# TCP

MTU: Maxitum Transmission Unit 最大传输单元 MSS: Maxitum Segment Size 最大分段大小 由于以太网EthernetII最大的数据帧是1518Bytes

标志位：

- SYN：建立链接

- FIN：中止链接

- ACK：确认32位确认序号有效。

- RST：“复位”报文

  1. 目的端口无监听。当连接请求到达时,目的端口没有进程正在监听，TCP会产生一个复位报文。（在UDP中，则产生一个ICMP端口不可达的信息）
  2. 异常终止链接。可以通过发送个复位报文段而不是FIN来中途释放一个连接，这种行为称为异常释放( abortive release)。

- URG：

- PSH：

  有点过时



## 连接管理

建立连接 - 三次握手

![TCP 三次握手图解](https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/github/javaguide/cs-basics/network/tcp-shakes-hands-three-times.png)



断开连接 - 四次挥手





## 流量控制







## 拥塞控制

