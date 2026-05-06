# Core

`core` 聚焦计算机基础，不直接追求“面试模板”，而是先把系统运行的底层机制讲清楚。

## 目录

- `./network/`：计算机网络与常见应用层协议。
- `./os/`：操作系统的核心抽象与资源管理。

## 推荐阅读顺序

1. `./network/README.md`
2. `./os/README.md`

如果你更关心服务端系统，也可以按下面的顺序阅读：

1. `./os/process/README.md`
2. `./os/io/README.md`
3. `./network/transport/TCP.md`
4. `./network/application/http/http.md`

## 怎么使用这一部分

- 把目录页当成索引，不必在这里堆太多细节。
- 进入单个专题后，再沿着相邻主题深入。
- 遇到和系统设计强相关的主题，比如缓存、网络 I/O、协议选型，可以再回到 `../design/system/` 看工程视角。
