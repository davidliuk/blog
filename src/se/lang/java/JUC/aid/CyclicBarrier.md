# CyclicBarrier



循环栅栏

构造方法中，传入“目标障碍数”，达到目标障碍数后执行的线程

await方法，可以理解为加1操作，同时阻塞该线程





例子：

集齐7颗龙珠就可以召唤神龙

```java
private static final int NUMBER = 7;
public static void main(String[] args) {
    CyclicBarrier cyclicBarrier = new CyclicBarrier(NUMBER, () -> {
        System.out.println("召唤神龙");
    });

    for (int i = 0; i < 7; i++) {
        new Thread(() -> {
            try {
                System.out.println(Thread.currentThread().getName() + "星龙珠被收集到了");
                cyclicBarrier.await();
                System.out.println(Thread.currentThread().getName() + "星龙珠被使用完毕");
            } catch (Exception e) {
                throw new RuntimeException(e);
            }
        }, String.valueOf(i + 1)).start();
    }
}
```

