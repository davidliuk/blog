# sleep vs wait

## 共同点

效果都是让当前线程暂时放弃 CPU 的使用权，进入阻塞状态

## 区别

### 方法归属不同

- sleep(long)上 Thread 的静态方法
- wait(), wait(long)都是 Object 的成员方法，每个对象都有（即任意对象都可以有锁）

### 醒来时机不同

- 执行 sleep(long), wait(long)的线程都会在等待相应毫秒后醒来
- wait(), wait(long)还可以蓓 notify 唤醒，wait()如果不唤醒就一直等下去
- 他们都可以被 interrupt 直接唤醒（抛出 InterruptException）

### 锁的特性不同

- wait 方法的调用，必须先获取 wait 对象的锁，而 sleep 则无此限制
- wait 方法执行后会释放对象锁，允许其他线程获取该对象锁（我放弃，但你们还可以用）
- sleep 如果在 synchronize 代码块中执行，并不会释放对象锁（我放弃，你们也用不了）
