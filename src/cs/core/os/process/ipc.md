# Inter-Process Communication

进程通信

## Types of Process

- Independent process
- Cooperating process

An independent process is not affected by the execution of other processes while a co-operating process can be affected by other executing processes. Though one can think that those processes, which are running independently, will execute very efficiently, in reality, there are many situations when cooperative nature can be utilized for increasing computational speed, convenience, and modularity. Inter-process communication (IPC) is a mechanism that allows processes to communicate with each other and synchronize their actions. The communication between these processes can be seen as a method of cooperation between them. Processes can communicate with each other through both:
Methods of IPC

由于每个进程的用户空间都是独立的，不能相互访问，这时就需要借助内核空间来实现进程间通信，原因很简单，每个进程都是共享一个内核空间。

- Shared Memory
- Message Passing
- Synchronous and Asynchronous Message Passing


## Pipe 管道

- 匿名管道 `|` Anonymous Pipe

  用于具有亲缘关系的父子进程间或者兄弟进程之间的通信。

- 命名管道 `mkfifo` Named Pipes 

  匿名管道由于没有名字，只能用于亲缘关系的进程间通信。为了克服这个缺点，提出了有名管道。有名管道严格遵循 **先进先出(First In First Out)** 。有名管道以磁盘文件的方式存在，可以实现本机任意两个进程通信。

所以说，在shell里通过「`|`」匿名管道将多个命令连接在 一起，实际上也就是创建了多个子进程，那么在我们编写 shell脚本时，能使用一个管道搞定的事情，就不要多用一个 管道，这样可以减少创建子进程的系统开销。

我们可以得知，对于名管道，它的通信范围是存在父子关 系的进程。因为管道没有实体，也就是没有管道文件，只能通过fork来复制父进程fd文件描述符，来达到通信的目的。 

另外，对于命名管道，它可以在不相关的进程间也能相互通 信。因为命令管道，提前创建了一个类型为管道的设备文 件，在进程里只要使用这个设备文件，就可以相互通信。

不管是匿名管道还是命名管道，进程写入的数据都是缓存在 内核中，另一个进程读取数据时候自然也是从内核中获取， 同时通信数据都遵循先进先出原则，不支持`lseek`之类的文件定位操作。

## Message Queue 消息队列

消息队列是消息的链表,具有特定的格式,存放在内存中并由消息队列标识符标识。管道和消息队列的通信数据都是先进先出的原则。与管道（无名管道：只存在于内存中的文件；命名管道：存在于实际的磁盘介质或者文件系统）不同的是消息队列存放在内核中，只有在内核重启(即，操作系统重启)或者显式地删除一个消息队列时，该消息队列才会被真正的删除。消息队列可以实现消息的随机查询,消息不一定要以先进先出的次序读取,也可以按消息的类型读取.比 FIFO 更有优势。**消息队列克服了信号承载信息量少，管道只能承载无格式字节流以及缓冲区大小受限等缺点。**

消息队列克服了管道通信的数据是无格式的字节流的 问题，消息队列实际上是保存在内核的「消息链表」，消息队列的消息体是可以用户自定义的数据类型，发送数据时，会被分成一个一个独立的消息体， 当然接收数据时，也要与发送方发送的消息体的数据 类型保持一致，这样才能保证读取的数据是正确的。 消息队列通信的速度不是最及时的，毕竟每次数据的写入和读取都需要经过用户态与内核态之间的拷贝过程。

消息这种模型，两个进程之间的通信就像平时发邮件 一样，你来一封，我回一封，可以频繁沟通了。 但邮件的通信方式存在不足的地方有两点，一是通信 不及时，二是附件也有大小限制，这同样也是消息队 列通信不足的点。 消息队列不适合比较大数据的传输，因为在内核中每 个消息体都有一个最大长度的限制，同时所有队列所 包含的全部消息体的总长度也是有上限。在 Linux 内核中，会有两个宏定义 MSGMAX 和 MSGMNB，它们 以字节为单位，分别定义了一条消息的最大长度和一 个队列的最大长度。 消息队列通信过程中，存在用户态与内核态之间的数 据拷贝开销，因为进程写入数据到内核中的消息队列 时，会发生从用户态拷贝数据到内核态的过程，同理 另一进程读取内核中的消息数据时，会发生从内核态 拷贝数据到用户态的过程。

System calls used for message queues: 

- `ftok()`: is use to generate a unique key.
- `msgget()`: either returns the message queue identifier for a newly created message queue or returns the identifiers for a queue which exists with the same key value.
- `msgsnd()`: Data is placed on to a message queue by calling `msgsnd()`.
- `msgrcv()`: messages are retrieved from a queue.
- `msgctl()`: It performs various operations on a queue. Generally it is use to destroy message queue.

## Shared Memory 共享内存

使得多个进程可以访问同一块内存空间，不同进程可以及时看到对方进程中对共享内存中数据的更新。**共享内存**可以解决消息队列通信中用户态与内核态之间数据拷贝过程带来的开销，**它直接分配一个共享空间，每个进程都可以直接访问**，就像访问进程自己的空间一样快捷方便，不需要陷入内核态或者系统调用，大大提高了通信的速度，享有**最快**的进程间通信方式之名。但是便捷高效的共享内存通信，**带来新的问题，多进程竞争同个共享资源会造成数据的错乱。**

这种方式需要依靠某种同步操作，如互斥锁和信号量等。可以说这是最有用的进程间通信方式。

**共享内存区域**：

- 通过内核分配一段内存，多个进程可以映射到同一地址空间访问。

**同步机制**：

- 共享内存本身不提供同步功能，需要配合信号量或互斥锁（mutex）来避免数据竞争。

**常用方法**：

- POSIX共享内存（`shm_open` 和 `mmap`）。
- System V共享内存（`shmget` 和 `shmat`）。

## Semaphores 信号量

信号量是一个计数器，用于多进程对共享数据的访问，信号量的意图在于进程间同步。这种通信方式主要用于解决与同步相关的问题并避免竞争条件。

**信号量其实是一个整型的计数器，主要用于实现进程间的互斥与同步，而不是用于缓存进程间通信的数据**。

信号量表示资源的数量，控制信号量的方式有两种原子操作：

- **P 操作**，这个操作会把信号量减去 1，相减后如果信号量 < 0，则表明资源已被占用，进程需阻塞等待；相减后如果信号量 >= 0，则表明还有资源可使用，进程可正常继续执行。
- **V 操作**，这个操作会把信号量加上 1，相加后如果信号量 <= 0，则表明当前有阻塞中的进程，于是会将该进程唤醒运行；相加后如果信号量 > 0，则表明当前没有阻塞中的进程；

P 操作是用在进入共享资源之前，V 操作是用在离开共享资源之后，这两个操作是必须成对出现的。

如果要使得两个进程互斥访问共享内存，我们可以初始化信号量为 `1`。

- 同步信号量，0

- 互斥信号量，1

只要是 共享变量都可以做到线程间通信，比如全局变量，所 以对于线程间关注的不是通信方式，而是关注多线程 竞争共享资源的问题，信号量也同样可以在线程间实 现互斥与同步： 互斥的方式，可保证任意时刻只有一个线程访问 共享资源； 同步的方式，可保证线程 A 应在线程 B 之前执行；

**信号量的值**：

- 信号量通常是一个整数。

- 大于零表示可以访问的资源数量。

- 小于或等于零表示资源不可用或某些进程正在等待。

- **命名信号量**： 用于多个进程间共享，通过名字访问。

  ```c
  codesem_t *sem = sem_open("/sem_example", O_CREAT, 0644, 1);
  if (sem == SEM_FAILED) {
      perror("sem_open");
      exit(EXIT_FAILURE);
  }
  ```

  参数说明：

  - `/sem_example`：信号量的名称（必须以`/`开头）。
  - `O_CREAT`：如果信号量不存在则创建。
  - `0644`：权限设置。
  - `1`：初始值。

- **匿名信号量**： 用于单个进程的线程间共享，通常使用`sem_init()`初始化。

  ```c
  codesem_t sem;
  if (sem_init(&sem, 1, 1) == -1) {
      perror("sem_init");
      exit(EXIT_FAILURE);
  }
  ```

  参数说明：

  - `1`：指示是否跨进程共享（1表示是，0表示仅线程间共享）。
  - `1`：初始值。

**信号量的两种操作**：

- P操作（Proberen，测试或等待操作）：

  ```
  sem_wait()
  ```

   或类似操作。

  - 如果信号量值大于零，则将其减一，表示进程获取了资源。
  - 如果信号量值为零或小于零，则进程进入阻塞状态，等待资源释放。

- V操作（Verhogen，释放或通知操作）：

  ```
  sem_post()
  ```

   或类似操作。

  - 将信号量值加一，表示资源释放。如果有进程在等待信号量，它们会被唤醒。

## Signal 信号

> also Asynchronous System Trap

信号用于通知接收进程某个事件已经发生

上面说的进程间通信，都是常规状态下的工作模式。**对于异常情况下的工作模式，就需要用「信号」的方式来通知进程。**

信号事件的来源主要有硬件来源（如键盘 Cltr+C ）和软件来源（如 kill 命令）。

- CTRL+C产生`SIGINT`信号，终止进程
- CTRL+Z产生`SIGTSTP`信号，表示停止该进程，但还未结束

信号是进程间通信机制中**唯一的异步通信机制**，因为可以在任何时候发送信号给某一进程，一旦有信号产生，我们就有下面这几种，用户进程对信号的处理方式。

1. 执行默认操作。Linux 对每种信号都规定了默认操作，例如，上面列表中的 SIGTERM 信号，就是终止进程的意思。

2. 捕捉信号。我们可以为信号定义一个信号处理函数。当信号发生时，我们就执行相应的信号处理函数。

3. 忽略信号。当我们不希望处理某些信号的时候，就可以忽略该信号，不做任何处理。有两个信号是应用进程无法捕捉和忽略的，即 `SIGKILL` 和 `SEGSTOP`，它们用于在任何时候中断或结束某一进程。

```shel
$ kill -l
 1) SIGHUP       2) SIGINT       3) SIGQUIT      4) SIGILL       5) SIGTRAP
 6) SIGABRT      7) SIGEMT       8) SIGFPE       9) SIGKILL     10) SIGBUS
11) SIGSEGV     12) SIGSYS      13) SIGPIPE     14) SIGALRM     15) SIGTERM
16) SIGURG      17) SIGSTOP     18) SIGTSTP     19) SIGCONT     20) SIGCHLD
21) SIGTTIN     22) SIGTTOU     23) SIGIO       24) SIGXCPU     25) SIGXFSZ
26) SIGVTALRM   27) SIGPROF     28) SIGWINCH    29) SIGPWR      30) SIGUSR1
31) SIGUSR2     32) SIGRTMIN    33) SIGRTMIN+1  34) SIGRTMIN+2  35) SIGRTMIN+3
36) SIGRTMIN+4  37) SIGRTMIN+5  38) SIGRTMIN+6  39) SIGRTMIN+7  40) SIGRTMIN+8
41) SIGRTMIN+9  42) SIGRTMIN+10 43) SIGRTMIN+11 44) SIGRTMIN+12 45) SIGRTMIN+13
46) SIGRTMIN+14 47) SIGRTMIN+15 48) SIGRTMIN+16 49) SIGRTMAX-15 50) SIGRTMAX-14
51) SIGRTMAX-13 52) SIGRTMAX-12 53) SIGRTMAX-11 54) SIGRTMAX-10 55) SIGRTMAX-9
56) SIGRTMAX-8  57) SIGRTMAX-7  58) SIGRTMAX-6  59) SIGRTMAX-5  60) SIGRTMAX-4
61) SIGRTMAX-3  62) SIGRTMAX-2  63) SIGRTMAX-1  64) SIGRTMAX
```

## Socket 套接字

此方法主要用于在客户端和服务器之间通过网络进行通信。套接字是支持 TCP/IP 的网络通信的基本操作单元，可以看做是不同主机之间的进程进行双向通信的端点，简单的说就是通信的两方的一种约定，用套接字中的相关函数来完成通信过程。

Socket 不仅可以跨网络与不同主机的进程间通信，还可以在同主机上进程间通信。

```c
int socket(int domain, int type, int protocal)
```

- `select`
- `epoll`

三个参数分别代表：

- domain 参数用来指定协议族，比如 AF_INET 用于 IPV4、AF_INET6 用于 IPV6、AF_LOCAL/AF_UNIX 用于本机；
- type 参数用来指定通信特性，比如 SOCK_STREAM 表示的是字节流，对应 TCP、SOCK_DGRAM 表示的是数据报，对应 UDP、SOCK_RAW 表示的是原始套接字；
- protocal 参数原本是用来指定通信协议的，但现在基本废弃。因为协议已经通过前面两个参数指定完成，protocol 目前一般写成 0 即可；

根据创建 socket 类型的不同，通信的方式也就不同：

- 实现 TCP 字节流通信： socket 类型是 AF_INET 和 SOCK_STREAM；
- 实现 UDP 数据报通信：socket 类型是 AF_INET 和 SOCK_DGRAM；
- 实现本地进程间通信： 「本地字节流 socket 」类型是 AF_LOCAL 和 SOCK_STREAM，「本地数据报 socket 」类型是 AF_LOCAL 和 SOCK_DGRAM。另外，AF_UNIX 和 AF_LOCAL 是等价的，所以 AF_UNIX 也属于本地 socket；

- 服务端和客户端初始化 `socket`，得到文件描述符；
- 服务端调用 `bind`，将绑定在 IP 地址和端口;
- 服务端调用 `listen`，进行监听；
- 服务端调用 `accept`，等待客户端连接；
- 客户端调用 `connect`，向服务器端的地址和端口发起连接请求；
- 服务端 `accept` 返回用于传输的 `socket` 的文件描述符；
- 客户端调用 `write` 写入数据；服务端调用 `read` 读取数据；
- 客户端断开连接时，会调用 `close`，那么服务端 `read` 读取数据的时候，就会读取到了 `EOF`，待处理完数据后，服务端调用 `close`，表示连接关闭。

这里需要注意的是，服务端调用 `accept` 时，连接成功了会返回一个已完成连接的 socket，后续用来传输数据。

所以，监听的 socket 和真正用来传送数据的 socket，是「**两个**」 socket，一个叫作**监听 socket**，一个叫作**已完成连接 socket**。

成功连接建立之后，双方开始通过 read 和 write 函数来读写数据，就像往一个文件流里面写东西一样。