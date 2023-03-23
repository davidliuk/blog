# Semaphore

信号量



## 方法

- acquire，抢占一个资源
- release，释放以后，别的阻塞进程被唤醒来抢这个资源



## 例子

6辆汽车，停3个车位

```java
public static void main(String[] args) {
    Semaphore semaphore = new Semaphore(3);
    for (int i = 0; i < 6; i++) {
        new Thread(() -> {
            try {
                // 抢占车位
                semaphore.acquire();
                System.out.println(Thread.currentThread().getName() + "号车抢到车位");
                // 随机停车时间
                TimeUnit.SECONDS.sleep(new Random().nextInt(5));
                System.out.println(Thread.currentThread().getName() + "号车----离开");
            } catch (InterruptedException e) {
                throw new RuntimeException(e);
            } finally {
                semaphore.release();
            }
        }, String.valueOf(i + 1)).start();
    }
}
```

