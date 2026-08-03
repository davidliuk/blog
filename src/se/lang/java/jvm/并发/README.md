# JVM Concurrency

JVM 并发语义解释线程之间何时能看到彼此的写入，以及编译器、处理器和运行时允许怎样重排。

## Notes

- [Java Memory Model](./jmm.md)

分析并发正确性时使用 happens-before、原子性、可见性和有序性，而不是依赖“通常能工作”。
