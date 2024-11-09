# 定时任务

## 单体定时任务

### Thread

```java
new Thread(() -> {
    while (true) {
        try {
            System.out.println("doSameThing");
            Thread.sleep(1000 * 60 * 5);
        } catch (Exception e) {
            log.error(e);
        }
    }
}).start();
```

### Timer

```java
Timer timer = new Timer();
timer.schedule(() -> {
    System.out.println("doSomething");
}, 2000, 1000);
```

### ScheduledExecutorService

可以做定时操作

```java
ScheduledExecutorService scheduledExecutorService = Executors.newScheduledThreadPool(5);
scheduledExecutorService.scheduleAtFixedRate(() -> {
    System.out.println("doSomething");
}, 1000, 1000, TimeUnit.MILLISECONDS);
```

ScheduledExecutorService 是 JDK1.5+版本引进的定时任务，该类位于 java.util.concurrent 并发包下。

ScheduledExecutorService 是基于多线程的，设计的初衷是为了解决 Timer 单线程执行，多个任务之间会互相影响的问题。

它主要包含 4 个方法：

- `schedule(Runnable command,long delay,TimeUnit unit)` ，带延迟时间的调度，只执行一次，调度之后可通过 Future.get()阻塞直至任务执行完毕。
- `schedule(Callable<V> callable,long delay,TimeUnit unit)` ，带延迟时间的调度，只执行一次，调度之后可通过 Future.get()阻塞直至任务执行完毕，并且可以获取执行结果。
- `scheduleAtFixedRate` ，表示以固定频率执行的任务，如果当前任务耗时较多，超过定时周期 period，则当前任务结束后会立即执行。
- `scheduleWithFixedDelay` ，表示以固定延时执行任务，延时是相对当前任务结束为起点计算开始时间。

### Spring Task

支持**cron 表达式**

定时任务的需求所谓是数不胜数，其中实现方式也是百花齐放，用得最多的大概率为 Springboot 中的 @Scheduled(cron = “0 0 1 1 \* ?”) 注解，或者是定时任务 XXL-JOB 框架，这两者我接触的比较多，除此之外还有，Quartz 、elastic-job、但这两个在分布式领域而言，和 XXL-JOBB 比较，XXL-JOB 更为受欢迎。无论是这些框架或者是 springboot 自带的定时任务组件，基本上都能满足固定定时任务的需求。

## 分布式定时任务

### xxl-job

### elastic-job

## 动态定时任务

### MQ 延迟队列

## 操作系统任务

### Linux crontab

优缺点：

- 优点：方便修改定时规则，支持一些较复杂的定时规则，通过文件可以统一管理配好的各种定时脚本。
- 缺点：如果定时任务非常多，不太好找，而且必须要求操作系统是 linux ，否则无法执行。
