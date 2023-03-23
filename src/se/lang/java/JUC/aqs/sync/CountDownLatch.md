# CountDownLatch



减小计数，构造方法设置初始值，然后可以使用countDown方法使计数器每次减一

await方法，在不为0时，阻塞线程，等到计数器变成0时唤醒线程，继续执行



方法

- countDown，使计数器每次减一（调用这个方法的线程不会阻塞）
- await，在不为0时，阻塞线程，等到变成0时唤醒线程，继续执行



## 例子

### 生活场景

6个同学陆续离开教师后，班长才可以锁门

```java
// 6个同学陆续离开教师后，班长才可以锁门
public static void main(String[] args) throws InterruptedException {
    CountDownLatch latch = new CountDownLatch(6);

    for (int i = 0; i < 6; i++) {
        new Thread(() -> {
            System.out.println(Thread.currentThread().getName() + "号同学离开了教室");
            // 计数器减一
            latch.countDown();
        }, String.valueOf(i + 1)).start();
    }

    // 等待
    latch.await();
    System.out.println(Thread.currentThread().getName() + "班长锁门了");
}
```



### 工作场景

我们要读取处理 6 个文件，这 6 个任务都是没有执行顺序依赖的任务，但是我们需要返回给用户的时候将这几个文件的处理的结果进行统计整理。



