# Cron 定时任务

定时任务的问题不只是“怎么定时”，还包括怎么保证可观测、可恢复、可扩展。

## 单体应用里的常见做法

### Thread

适合临时验证，不适合作为正式方案。

```java
new Thread(() -> {
    while (true) {
        try {
            System.out.println("doSomething");
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

这是 JDK 并发包里更稳妥的基础方案。

```java
ScheduledExecutorService scheduledExecutorService = Executors.newScheduledThreadPool(5);
scheduledExecutorService.scheduleAtFixedRate(() -> {
    System.out.println("doSomething");
}, 1000, 1000, TimeUnit.MILLISECONDS);
```

它比 `Timer` 更适合多任务场景，因为不会把所有任务都压在单线程里。

## 应用框架里的常见做法

### Spring Task

- 支持 cron 表达式
- 适合简单固定任务

常见写法：

`@Scheduled(cron = "0 0 1 1 * ?")`

## 分布式定时任务

当服务多实例部署后，核心问题就不再是“能不能定时”，而是：

- 哪台机器负责执行
- 失败后怎么重试
- 怎么避免重复执行
- 怎么动态变更任务规则

常见方案：

- `xxl-job`
- `elastic-job`
- `Quartz`

## 动态定时任务

如果任务执行时间和触发时间并不是固定规则，而是业务数据驱动，常见做法是：

- MQ 延迟队列
- Redis 延迟队列
- 时间轮

## 操作系统任务

### Linux crontab

优点：

- 修改规则方便
- 适合脚本类任务
- 可以统一管理运维任务

缺点：

- 任务多了不易治理
- 依赖机器环境
- 和业务系统的可观测性通常是分裂的
