# Multi-threading

Python provides several ways to implement multithreading, mainly through the `threading` module. However, due to Python's Global Interpreter Lock (GIL), native threads do not achieve true parallelism for CPU-bound tasks. They are most useful for I/O-bound tasks where threads can wait for external data (like file or network I/O) without blocking others.

Here’s a quick overview and example of how to use multithreading in Python:

### Basic Concepts

1. **Thread**: An independent flow of execution within a program.
2. **Global Interpreter Lock (GIL)**: A lock in Python’s CPython implementation that allows only one thread to execute Python bytecode at a time, limiting true multithreading.
3. CPU-bound vs. I/O-bound tasks
   - **CPU-bound** tasks benefit from parallel processing (e.g., complex calculations) and are better suited for multiprocessing.
   - **I/O-bound** tasks (e.g., reading files, API requests) can benefit from multithreading since threads can wait for I/O while others run.

## GIL

Python 3.13 引入了新的实验性自由线程模式（Free-threaded），旨在通过移除全局解释器锁 (GIL) 来提升 Python 性能，尤其是在多线程应用程序中。

**GIL 及其局限性**：CPython 中的 GIL 通过只允许一个线程在任何给定时间持有 Python 解释器的控制权来限制真正的并行性。这导致了多线程 CPU 密集型应用程序的瓶颈。

**自由线程 (no-GIL) 模式**：Python 3.13 引入了一个没有 GIL 的实验性构建，允许多个线程真正并发地执行 Python 字节码。这有可能显著提高多核系统上 CPU 密集型任务的性能。

**性能改进**：早期基准测试表明性能有所提升，尤其是在 I/O 密集型操作和特定场景中。但是，整体性能影响仍在评估中，预计在未来版本中会有所改进。

**兼容性问题**：移除 GIL 会引入重大的兼容性挑战。许多 C 扩展和库依赖 GIL 来保证线程安全。使它们适应 no-GIL 的世界是一项艰巨的任务。

**实验状态**：Python 3.13 中的 no-GIL 构建明确处于实验阶段。它尚未准备好用于生产环境，并且可能会发生变化。目标是收集反馈并在后续版本中改进实现。

### 什么是CPython GIL?

GIL，Global Interpreter Lock，即全局解释器锁

引入GIL是因为CPython的内存管理并不是线程安全的,

为了保护多线程下对python对象的访问，每个线程在执行过程中都需要先获取GIL，保证同一时刻只有一个线程在执行代码

GIL使得python的多线程不能充分发挥多核CPU的性能，对CPU密集型程序的影响较大

## Coroutine

使用生成器的协程，是 Python 2 开头的时代实现协程的老方法了，Python 3.7 提供了新的基于 asyncio 和 async / await 的方法。

```python
import time
import asyncio

async def crawl_page(url):
    print('crawling {}'.format(url))
    sleep_time = int(url.split('_')[-1])
    await asyncio.sleep(sleep_time)
    print('OK {}'.format(url))

async def main(urls):
    tasks = [asyncio.create_task(crawl_page(url)) for url in urls]
    for task in tasks:
        await task
    # await asyncio.gather(*tasks)

begin_time = time.time()
asyncio.run(main(['url_1', 'url_2', 'url_3', 'url_4']))
end_time = time.time()
run_time = end_time - begin_time
print("程序耗时{}s".format(run_time))
```

