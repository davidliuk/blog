# Processes and threads

- Basic concepts
- The UNIX model
- Implementation in the kernel

## Process

### Why process abstraction?

- Hide complexity
- Virtualize the physical CPU
- Time sharing
- Isolation

### What is in a process?

Processes live in **address spaces**, which contains:

- Code: The code that your program executes
  - **Program counter** (PC)
  - **Libraries** that the program is linked against
- Data: static data
- Heap: Dynamically allocated memory
  - malloc/free, new/delete
- Stack
  - Stack Pointer(SP)

#### closer looks

`/proc/$pid/maps`

### process control block (PCB)

To keep track of running processes, the ***kernel*** maintains a **process table**, which contains:

- Process state

#### Process states

- new
- ready
- running
- waiting
- terminated

### Parents and children; PIDs

The first process (init/systemd) is created by the kernel during boot

Processes have a uniqe process ID

#### Creating a process: `fork()`



#### Terminating a process: `exec()`

The `exec()` system call replaecs the program that a process is running

Usually run after fork() 0< child exec a different program

#### Terminating a process: `exit()`



#### Waiting for termination: `wait()`



### Zombie processes

- Once a process is terminated, the kernel releases any resource it has acquired
- However, the process control block is not released immediately
  - The PCB still contains information that the parent process may be interested in, e.. the exit code
  - During this time, the process is called a 'zombie'
- The PCB is freed once the parent call `wait()`

### Interprocess communication IPC

- Pipes
- Signals
- Message queue

#### Pipes

One-way FIFO channel, **has fixed size**

How can we use this for IPC?

#### Signals

Async communication

Terminate a program

#### Message Queue

Richer messages & APIs

Associated priority

### Context switching

CPU idle

Interleave

Preemption and scheduling

- Cooperative Multitasking: processes themselves **yield** the CPU periodically
- Preemption Multitasking: kernel **preempts** processes

When a switch happens

## Thread

A process has two key elements

- A collection of resources
- A thread of execution

Threads share the same address space

- Advantage: Much lower overhead
  - Cheaper than creating an entire process
  - Context switching within a process is much cheaper
  - Threads within the same process can easily and cheaply  communicate by accessing the same memory
- Disadvantage
  - Concurrency

### Why multiple threads

A pool of threads

### thread pool



- User-level thread
- Kernel-level thread

---

pipe

- 0读
- 1写
