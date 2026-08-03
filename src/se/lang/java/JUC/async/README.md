# Java Asynchronous Computation

异步 API 用于表达任务依赖和并行执行，同时需要显式处理线程池、异常、取消和超时。

## Notes

- [Future](./future.md)
- [Fork/Join](./forkjoin.md)

评审异步代码时，追踪任务在哪个 executor 执行、谁等待结果、失败怎样回到调用方。
