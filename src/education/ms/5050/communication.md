# Communication

## OSI model

7 layer

- Layer 7 Application
- Layer 6 Presentation (TLS)
- Layer 5 Session (RPC)
- Layer 4 Transport (TCP))
- Layer 3 Network (IP)
- Layer 2 Datalink
- Layer 1 Physical

Internet model

Merge 

- Layer 1-2
- Layer 5-7

### IPv6

128-bit addresses

### Endianness 字节序

Layer 2 often provides a byte-granular interface

16/32/

### Port numbers

typically in the 0-1023 range

'Ephemeral' ports

### Naming in the internet

The Domain Name System (DNS) can be used to map names to IP addresses

`gethostbyname()`

## Socket

In practice, some protocols are typically implemented in the kernel

> Protected

#### **“逃离”内核**

虽然经典的 TCP/UDP 在内核，但一些新兴协议或高性能场景正在转向用户态：

- **QUIC (HTTP/3 的基础)**：由于 TCP 在内核中更新太慢（操作系统升级周期长），Google 将 QUIC 实现在了**用户态**。这样开发者可以快速迭代协议特性，而不需要等待内核更新。
- **高性能场景 (DPDK/RDMA)**：在金融交易或超大规模数据中心，内核的开销被认为太重了。工程师会使用 **DPDK (Data Plane Development Kit)** 绕过内核（Kernel Bypass），让用户态程序直接控制网卡，实现极高的吞吐量。

### Definition

An endpoint of a connection

Identified by IP address, port number, protocol

### API

The kernel provides an API for interacting with sockets

### Types

- stream sockets
- datagram sockets

File descriptor

- Client 
- Server listen

### `socket()`

Creates a new socket

### `connect()`

Tries to connect to another socket

`read()` and `write()`

At first glance, works 

### Datagram socket

- sent as messages, not as a stream of bytes
- no need to establish and terminate a connection
  - no reliable data streaming

`sendto()` and `recvfrom()`

## Server architectures

- Polling-based
- Thread-based
- Event-driven

### Polling

Many system calls can be made **nonblocking**

Idea: let's use only nonblocking calls

- server just rotates among its open connections  ("polling") and keeps calling nonblocking sys calls until they succeed



### Event-driven programming



Threads vs. events