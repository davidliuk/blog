# ThreadLocal

解决线程安全问题的另一种思路，之前是共享资源加锁或CAS重试，现在是线程隔离各用各的。



作用：

- 实现资源对象的线程隔离，让每个线程各用各的资源对象，避免争用引发的线程安全问题
- 实现了线程内的资源共享



局部变量，可以线程隔离，但是不能跨方法

