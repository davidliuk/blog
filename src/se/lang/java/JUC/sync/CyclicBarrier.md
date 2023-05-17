# CyclicBarrier

## 概念

循环栅栏

### 作用

`CyclicBarrier` 的字面意思是可循环使用（Cyclic）的屏障（Barrier）。它要做的事情是：让一组线程到达一个屏障（也可以叫同步点）时被阻塞，直到最后一个线程到达屏障时，屏障才会开门，所有被屏障拦截的线程才会继续干活。

### 方法

构造方法中，传入“目标障碍数”，达到目标障碍数后执行的线程

await 方法，可以理解为加 1 操作，同时阻塞该线程

## 例子

集齐 7 颗龙珠就可以召唤神龙

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
