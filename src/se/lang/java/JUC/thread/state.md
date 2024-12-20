# 线程状态

IllegalThreadStateException

## 状态转换图

### JAVA 六种状态

`threadStatus`

![Java 线程状态变迁图](https://cdn.jsdelivr.net/gh/davidliuk/images@master/blog/640-20230516213441212.png)

Java 线程在运行的生命周期中只可能处于下面 6 种不同状态的其中一个：

- `NEW`：初始状态，线程被创建出来但没有被调用 `start()` 。

  此状态只是一个 java 对象，并没有与 cpu 中的一个线程关联，start 以后可运行以后关联。

- `RUNNABLE`：运行状态，线程被调用了 `start()`等待运行的状态。

- `BLOCKED`：阻塞状态，需要等待锁释放。

- `WAITING`：等待状态，表示该线程需要等待其他线程做出通知或中断。

- `TIME_WAITING`：超时等待状态，可以在指定的时间后自行返回而不是像 WAITING 那样一直等待。

- `TERMINATED`：终止状态，表示该线程已经运行完毕。

线程在生命周期中并不是固定处于某一个状态而是随着代码的执行在不同状态之间切换。

> 控制线程先后执行次序的技巧：Debug 模式，在主线程和分线程分别打好断点，控制两个端点哪个先执行。

### OS 五种状态

![img](https://pics0.baidu.com/feed/b3b7d0a20cf431ad439b6a9d9c495ba42fdd9850.jpeg@f_auto?token=829fd620d9f82799c81048837cf840ae)

- NEW

- READY：就绪状态，有资格但还没有运行

- RUNNING：运行状态，有资格且正在运行

- BLOCKED：阻塞状态，暂时没有资格分到 CPU 时间

  特殊的阻塞 I/O 不需要 CPU 时间片是磁盘在处理的，也归到阻塞，但是实际上是在运行的

- Terminated

Java 中的 RUNNABLE 涵盖：就绪、运行、阻塞 I/O

## 转换指令

### 终止线程

在 Java 中，有几种方法可以终止线程，包括：

1. 使用标志变量：在线程中使用标志变量，当标志变量为 true 时，线程终止执行。

   ```java
   public class MyThread extends Thread {
       private volatile boolean running = true;

       public void run() {
           while (running) {
               // 线程执行的代码
           }
       }

       public void stopRunning() {
           running = false;
       }
   }
   ```

   包含一个名为 running 的标志变量。在 run()方法中，线程会不断地检查 running 变量的值，如果 running 为 true，则继续执行线程的代码。当需要终止线程时，可以调用 stopRunning()方法将 running 变量设置为 false，从而终止线程的执行。

   需要注意的是，running 变量必须使用 volatile 关键字进行修饰，以确保多个线程之间对该变量的可见性。否则，可能会出现一个线程修改了 running 变量的值，但是其他线程并没有立即看到这个变化的情况。

2. 使用`interrupt()`方法：调用线程的`interrupt()`方法可以中断线程的执行。线程可以通过检查自身的中断状态来判断是否应该终止执行。

3. 使用`stop()`方法：调用线程的`stop()`方法可以强制终止线程的执行。但是，`stop()`方法已经被标记为不安全的方法，因为它可能会导致线程在不安全的状态下停止执行，从而导致数据不一致或其他问题。`stop()`方法不安全的原因是，它会立即停止线程的执行，而不会给线程完成清理工作的机会。这可能会导致线程在执行过程中持有锁或其他资源，从而导致其他线程无法访问这些资源。此外，`stop()`方法可能会在任何时候停止线程的执行，从而导致线程在不一致的状态下停止执行。

建议使用`interrupt()`方法来终止线程的执行，因为它可以安全地中断线程的执行，并且可以让线程完成清理工作。

### sleep vs wait

#### 共同点

效果都是让当前线程暂时放弃 CPU 的使用权，进入阻塞状态

#### 区别

##### 方法归属不同

- sleep(long) 是 Thread 的静态方法
- wait(), wait(long) 是 Object 的成员方法，每个对象都有（任意对象都可以有锁）

##### 醒来时机不同

- 执行 sleep(long), wait(long) 的线程都会在等待相应毫秒后醒来
- wait(), wait(long) 还可以被 notify 唤醒，wait() 如果不唤醒就一直等下去
- 他们都可以被 interrupt 直接唤醒（抛出 InterruptException）

##### 锁的特性不同

- wait 方法的调用，必须先获取 wait 对象的锁，而 sleep 则无此限制
- wait 方法执行后会释放对象锁，允许其他线程获取该对象锁（我放弃，但你们还可以用）
- sleep 如果在 synchronize 中执行，并不会释放对象锁（我放弃，你们也用不了）
