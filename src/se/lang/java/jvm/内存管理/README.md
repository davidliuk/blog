# JVM Memory Management

JVM 内存管理从对象分配开始，经过可达性判断、回收算法和收集器执行，最终表现为吞吐、延迟和内存占用。

## Sections

- [Memory Areas](./内存区域/)
- [Garbage Collection](./垃圾回收/)

诊断需要结合 allocation rate、live set、pause、heap growth 和 native memory。
