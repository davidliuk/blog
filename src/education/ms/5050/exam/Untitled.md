# Sample

## **Lecture 2: Processes & Threads**

**Q1) Alice has just learnt about the `fork()` system call and is eager to put it to practice. She writes the following program:**

```c++
int main(void){ 
    int i; 
    int N = 3;
    for (i = 0; i < N; i++){
        pid_t pid = fork(); 
        if (pid < 0) { 
            fprintf(stderr, "Fork failed!\n"); 
            exit(1); 
        } else if (pid == 0) { 
            printf("I am child %d\n", i); 
        } else {
            printf("Child %d is created\n", i); 
        }
    } 
    return 0;
}
```

Assuming all system calls are successful.

a) How many processes are created in total (including the main process)? Explain why.

b) Can you generalize your solution to N child processes (instead of exactly 3)?

c) Does your answer change if we add an `exit()` between Line 10 and 11? Explain.

d) Suppose the above program (the original one, without the change in (c)) is run on a machine with 8 cores. What is the maximum number of processes that can run truly concurrently, assuming any given value of N?

e) Does your answer in (d) change if we add a `wait()` between Lines 13 and 14? Explain.

> **Solution:**
>
> **a)** Since each child thread does not exit after printing out its ID, it will continue to the next iteration of the for-loop and create its own child. At each iteration `i`, the number of processes in the system doubles because each process creates a child process of its own. Since there is initially 1 process (the main process) and there are 3 iterations in total when N = 3, the total number of processes at the end of the for-loop is $1 \times 2 \times 2 \times 2 = 2^3 = 8$ processes.
>
> **b)** With N child processes, there will be N iterations of the for-loop. Based on the above reasoning, the total number of processes at the end of the program is $1 \times 2^N = 2^N$.
>
> **c)** Yes. If we insert `exit()` between Line 10 and Line 11, the child process exits right after printing (not going to the next iteration of the for-loop), and thus it will not create any children. As a result, the total number of processes is $N + 1$ (that is, N child processes and 1 main process).
>
> **d)** Since the total number of processes is $2^N$ and the system has 8 cores, the maximum number of processes that can run truly concurrently is $\min(8, 2^N)$.
>
> **e)** If we add a `wait()` between Lines 13 and 14, then the parent process will always wait for its current child process (created in the current iteration) to complete before it creates the next child process. Thus, at any point in time:
>
> - a process runs concurrently with at most one direct child process, who runs concurrently with at most one of its direct child process, and so on; and
>
> - no two child processes of the same parent ever exist concurrently.
>
>   Therefore, the maximum number of processes that can exist concurrently is the chain of processes that are direct descendant of one another, i.e., the main process $\rightarrow$ 1 sub-process $\rightarrow$ 1 subsub-process $\rightarrow$ 1 subsubsubprocess $\rightarrow$ etc. Since there are N iterations, there can be a total of N+1 processes in total that can run concurrently. Thus, the maximum number of processes that can run concurrently on a system with 8 cores is $\min(8, N+1)$.

**Q2) In class, we have discussed that there are several scheduling policies for scheduling processes...** [FCFS, SJF, SRTF, FP, NP-FP, EDF, NP-EDF definitions provided]. Consider the following 5 processes, where a larger priority value indicates higher priority:

- P1: Arrival time = 0, Total execution time = 5, Priority = 3, Absolute deadline = 10
- P2: Arrival time = 1, Total execution time = 3, Priority = 2, Absolute deadline = 8
- P3: Arrival time = 3, Total execution time = 4, Priority = 1, Absolute deadline = 13
- P4: Arrival time = 4, Total execution time = 3, Priority = 4, Absolute deadline = 7
- P5: Arrival time = 6, Total execution time = 2, Priority = 5, Absolute deadline = 9

Assuming that the system has only one CPU core. For each scheduling policy above, draw the schedule timeline for each process. You may assume that all processes execute CPU instructions and do not block, and that the overhead for context switching is negligible.

> **Solution:**
>
> The scheduling order is shown below. The first number within the square brackets represents the time when the job is scheduled to execute, and the second number represents the amount of time it executes. **Job ID is used as tie breaker, where smaller ID is scheduled first if both jobs have the same priority according to the scheduling policy:**
>
> - **FCFS:** P1[0, 5] $\rightarrow$ P2[5, 3] $\rightarrow$ P3[8, 4] $\rightarrow$ P4[12, 3] $\rightarrow$ P5[15, 2]
> - **Non-preemptive SJF:** P1[0, 5] $\rightarrow$ P2[5, 3] $\rightarrow$ P5[8, 2] $\rightarrow$ P4[10, 3] $\rightarrow$ P3[13, 4]
> - **Preemptive SJF -- SRTF:** P1[0, 1] $\rightarrow$ P2[1, 3] $\rightarrow$ P4[4, 3] $\rightarrow$ P5[7, 2] $\rightarrow$ P1[9, 4] $\rightarrow$ P3[13, 4]
> - **Preemptive FP:** P1[0, 4] $\rightarrow$ P4[4, 2] $\rightarrow$ P5[6, 2] $\rightarrow$ P4[8, 1] $\rightarrow$ P1[9, 1] $\rightarrow$ P2[10, 3] $\rightarrow$ P3[13, 4]
> - **Nonpreemptive FP:** P1[0, 5] $\rightarrow$ P4[5, 3] $\rightarrow$ P5[8, 2] $\rightarrow$ P2[10, 3] $\rightarrow$ P3[13, 4]
> - **Preemptive EDF:** P1[0, 1] $\rightarrow$ P2[1, 3] $\rightarrow$ P4[4, 3] $\rightarrow$ P5[7, 2] $\rightarrow$ P1[9, 4] $\rightarrow$ P3[13, 4]
> - **Non-preemptive EDF:** P1[0, 5] $\rightarrow$ P4[5, 3] $\rightarrow$ P2[8, 3] $\rightarrow$ P5[11, 2] $\rightarrow$ P3[13, 4]

------

## **Lecture 3: System calls**

**Q1. Which of the following IA-32 instructions is used for entering the kernel?** (a) fprem (b) smsw (c) sysenter (d) enter

> **Solution:** (c) sysenter

**Q2. Suppose a thread T is running on CPU core X, and the thread blocks. What happens on core X?** (a) The core does nothing (b) The core switches to running another thread, if possible (c) The core terminates T (d) The core shuts down

> **Solution:** Option b: The core switches to running another thread, if possible.

**Q3. How many system calls does Linux have approximately?** (a) 10 to 20 (b) 80 to 100 (c) 300 to 500 (d) 900 to 1200

> **Solution:** 300 to 500

**Q4. How do the read and write system calls identify the file to be read from, or written to?** (a) By its name (b) By its inode number (c) By a file handle (d) Implicitly

> **Solution:** Option c: By a file handle

**Q5. Which of the following is a difference between user mode and kernel mode?**

> **Solution:** Option a: Certain instructions are only available in kernel mode

------

## **Lecture 4: Concurrency control and synchronization**

**Q1) Charlie's company runs a cluster of machines that maintain a shared bank account database... After some investigation, Charlie found out that it was due to race conditions... he decided to use interrupt disabling technique and Lamport's Bakery algorithm. Later, a customer, Alice, still complains that some money has disappeared from her account. Do you believe Alice?**

> **Solution:** Yes, I believe Alice. Neither the disabling interrupts method nor the Lamport's Bakery algorithm works for distributed nodes. In the former solution, disabling interrupt on one machine does not prevent interrupts from being delivered to other machines (the machines don't even share the same hardware). The latter solution requires a shared memory model such that any change by one process on one machine can be instantly visible to another process on another machine, which is not possible to implement (because of network latency). Hence, race conditions might still happen even if one of these two solutions is used.

**Q2) Consider the Quiz question in class (`count = count + 1` with multiple threads). In class, we already discussed that the minimum value of the program output is 2. a) Explain why the minimum value can neither 0 nor 1? b) Can you give an example execution scenario that will produce the minimum value 2? c) Suppose that... the main thread creates 20 child threads. What would be the maximum and minimum output?**

> **Solution:**
>
> **a)** For the value to be zero, some thread must have written value 0 into count, but this never happens since a thread always increments the value before writing to count. The value cannot be 1 either because, for the final value to be 1, the last thread that updates count in its final (the M-th) iteration must write 1 to count. Let's call this thread T. This means that this particular thread T must have read 0 in its M-th iteration (then increment the value to 1 and write 1 to count). Since the only time that T ever reads zero is before *any* thread (including itself) make any update to count, which implies that T can only read 0 before it makes any update to count, i.e., only in its first iteration. Thus, $M = 1$, which contradicts the fact that $M = 1000000$. Thus, the final value cannot be 1.
>
> **b & c)** The minimum output of the program is 2, whether there are 3 child threads or there are 20 child threads. Example execution scenario for $n$ child threads ($n \geq 2$):
>
> - All threads read zero to their local registers.
>
> - Thread #3 to thread #n execute sequentially, each finishes before the next one begins. Thus, the value of count will be updated to 1, 2, 3, ... until finally, $(n-2)M$.
>
> - Thread #1 increments the value that it originally read in Step 1 (which is zero) by 1, writes 1 to count. Then, it reads 1 from count, increments to 2, write 2 to count. It repeats this for $M-1$ times; when completed, it will write $M - 1$ to count. *(It has one iteration left)*
>
> - Thread #2 increments the value that it originally read in Step 1 (which is zero) by 1, writes 1 to count. *(Thread 2 has $M-1$ iterations left)*
>
> - Thread 1 reads 1 from count.
>
> - Thread 2 reads 1 from count, increments count by $M-1$ times, setting count to be 2, 3, ..., and finally, M. Thread 2 completes.
>
> - Thread 1 increments the value it recently read in Step 5 (which is 1) once, and writes 2 to count. It now completes.
>
>   Thus, the minimum value is 2. The maximum value is $N \times M$ (happens when threads execute completely sequentially).

**Q3) In class, we use TSL to achieve mutual exclusion for the critical section. How would you protect the critical section with a CAS instruction instead of a TSL?**

> **Solution:** You can implement mutual exclusion using a CAS instruction by replacing the `testAndSet()` statement in the code with the following:
>
> C++
>
> ```
> while ( !CAS(&lock, 0, 1))
>     /* busy wait */ ;
> ```
>
> Here, if `lock = 0` then the CAS will set lock to 1 and return true; the thread can access the CS. While `lock = 1`, the CAS instruction will return false, so the thread has to busy wait (until `lock = 0`).

**Q4) Slide 20 of Lecture 4 shows our first attempt of the Lamport's Bakery algorithm, which does not work. Using two threads, construct an execution scenario where mutual exclusion is violated. In your own words, explain why the next slide (Slide 21) solves this problem through the `choosing[]` variable.**

> **Solution:** Consider two threads T0 and T1. Their initial numbers are: `number = [0, 0]`.
>
> - Both threads try to execute the `lock()` function at the same time. They both read `[0,0]` and attempt to compute their values as $\max(0, 0) + 1$.
> - Suppose T1 finishes computation first, so it updates the number array to be: `number = [0,1]`. Since `number[0] = 0`, thread T1 breaks out of the while loop and returns from the `lock()` function, then it enters critical section.
> - Later, T0 finishes computation and updates the number array to be: `number = [1,1]`. Since T0 has the same number as T1 and smaller ID than T1, it also returns from the `lock()` function and enters the critical section.
> - Now, both T0 and T1 are in the critical section. Mutual exclusion is thus violated.
>
> The next slide solves this problem by using the `choosing` variable. By enforcing a thread T to wait for all threads that are currently choosing a number to finish before checking for the conditions to enter the critical section, we ensure that all threads with smaller or equal numbers than the current thread T will not change their numbers.

**Q5) Consider the Counting semaphore implementations that we have on Slide 43-46 (all the attempts). Please make sure that you understand the problem with each of these implementations.**

> **Solution:** Please review the slides.

**Q6) On Slide 34 (How to implement a semaphore, Attempt #3), we have a solution using interrupt disabling technique... Can you change the solution to use a CAS instruction instead of using the `cli()/sti()`?**

> **Solution:** You can implement a semaphore with a CAS for `sem_wait()` as follows:
>
> C++
>
> ```
> int lock = 0; // shared variable 
> void sem_wait(sem_t *sem) { 
>      while ( CAS(&lock, 0, 1) == false ) 
>          /* keep trying to set lock to 1 */; 
>      sem->value --; 
>      if (sem_value < 0) {
>          sem->Q->add(thisThread); 
>          markBlocked(thisThread);
>       } 
>       lock = 0; 
> }
> ```
>
> The idea is to use CAS to implement a lock so that you can execute the decrement of the semaphore and the if-statement + blocking atomicity. *Note: With this solution, the thread is not actually busy-waiting for another thread to finish the critical section. After setting the lock, it will be put to sleep by the OS if `sem->value` is negative.*

**Q7) In class, we have studied deadlock and livelock problems. In your own words, describe one commonality and one difference between the two?**

> **Solution:** In both deadlock and livelock, the system cannot make any real progress. However, deadlock refers to the case where the threads are 'stuck' -- they simply cannot proceed. In contrast, in livelock, the threads continue to execute (not stuck) but they just make no actual progress.

**Q8) In your own words, explain why we cannot use a single counting semaphore (and a binary semaphore) to implement the Producer-Consumer problem in class?**

> **Solution:** We need a way to block the producer when the buffer is full, and we need a way to block the consumer when the buffer is empty. Since these two blocking conditions are completely different, a single semaphore won't work. If you have a single semaphore, you can use it to block either the producer (if the semaphore value represents the number of empty slots) or the consumer (if the semaphore value represents the number of full slots), but not both.

**Q9) One Slide 75, explain why the program is written for Hoare monitors? What would you change to ensure that it work under Mesa monitors as well.**

> **Solution:** In the code on the slides, with `if (count == N) canInsert.wait()`, the current thread (T1) only checks if count equals N once. If so, it waits. In a Hoare monitor, when T1 is unblocked by T2's signal, it resumes immediately, so no other thread could have made the condition false. However, in a Mesa monitor, T1 does not get the lock right away; T2 continues executing. By the time T1 resumes, the condition may be made false by T2 or a thread T3. Thus, T1 must recheck the condition. For the code to work with a Mesa monitor, we change the `if` to a `while`.

**Q10) In Slide 74, we say that Hoare monitors are good for proofs whereas Mesa monitors can be efficient. In your own words, explain why/how Mesa monitors are more efficient on average.**

> **Solution:** Mesa monitor is more efficient on average because it reduces the need for making the context switch right at the instant when the condition holds. By letting the current thread that executes `signal()` to continue, we can reduce the overhead, leading to better performance in general.

**Q11) Using a semaphore, describe how you can use it to enforce a thread T1 to always execute and finish before thread T2 and thread T3 can start, and thread P2 and P3 must be able to run concurrently.**

> **Solution:**
>
> C++
>
> ```
> semaphore s(0); //initialize semaphore s to 0
> ```

> T1(){
>
> do_work(); // thread does work here
>
> s.V(); // increment s
>
> s.V(); // increment s
>
> }

> T2(){
>
> s.P(); // wait on s; only succeeds after T1 has done s.V();
>
> do_work(); // start doing work here
>
> }

> T3(){
>
> s.P(); // wait on s; only succeeds after T1 has done s.V();
>
> do_work(); // start doing work here
>
> }

------

## **Lecture 6: Communication**

**A) Design question: Elizabeth redesigns the company's webserver (64-core machine)... reimplements using a multi-threaded architecture. After switching, the company still experiences slow performance problem.**

**Q1) Name one reason for why this might happen.**

> **Solution:** When there are many clients, the number of threads will become extremely high; in that case, the overhead of context switching and maintaining the threads will be prohibitively expensive and will negatively affect the performance.

**Q2) Can you propose a simple fix to the webserver without changing its multi-threaded architecture to mitigate the problem?**

> **Solution:** Use a thread pool instead of creating a new thread every time. This allows the system to be fully utilized while bounding the overhead due to thread context switching and maintenance.

**Elizabeth adapts the event-driven server example from the slides... Unexpectedly, the throughput does not improve.**

**Q3) Can you help Elizabeth identify a potential cause?**

> **Solution:** The event-driven example shown on the slides has a single thread and uses only one core. Thus, its performance is expected to be worse than a multi-threaded solution that utilize 64 cores, even if the threads have associated overheads.

**Q4) How would you change her server to solve this problem?**

> **Solution:** Extend the single-core event-driven program to multi-core setting. For example, one could create an event queue per core, and have one thread per core. Events can be put into the different event queues for the different cores.

**B) Multiple choice questions**

**Q1-Q3**

> **Solution:** > Q1. Which is not a layer of the OSI model? (d) Logical
>
> Q2. Which is not a difference between stream and datagram sockets? (c) Port numbers are supported for stream sockets, but not for datagram sockets
>
> Q3. With little-endian encoding, which comes first? (a) The lowest-order byte

**Q4. Which type of sockets is best for the following use cases? Why? a) VoIP b) Accessing Path@Penn c) Transferring large files d) Looking up a name**

> **Solution:** Stream sockets are best for use cases (b) and (c) because it is critical to have reliable in-order communications, and in the case of (c), the data are large and won't work well with datagram sockets. The rest of the use cases can use datagram sockets since reliability isn't a big concern and communication via datagram sockets has less overhead.

------

## **Lecture 7: Remote procedure calls**

**Q1. Which of the following is true about an RPC and a local function call?**

> **Solution:** (b) RPCs typically have higher latency.

**Q2. To reduce overhead, Alice’s program first calls an asynchronous RPC... then it waits until the server returns a result using another asynchronous RPC. Does this approach achieve her goal?**

> **Solution:** No. The key benefit of asynchronous RPC is so that the client can continue to do work without having to busy wait for the results. However, Alice explicitly has her program wait for the return value... Hence, her program still utilizes resources unnecessarily. It will be even worse than doing a synchronous RPC call due to the extra acknowledgment.

**Q3. Can you implement an RPC using UDP?**

> **Solution:** Yes! RPC works at a layer above the TCP/UDP level, and it can use any transport protocol (TCP or UDP). However, if UDP is used, then the RPC implementation needs to have extra mechanisms built in to handle packet loss and out of order transmission.

**Q4. Bob notices his program runs too slowly on his single-core machine, so he decides to use RPC to run it on a remote multi-core server...**

**a) Is running the service as an RPC always preferred to running it locally?**

> **Solution:** No. Since RPC has associated costs (e.g., marshaling/unmarshalling, network transmission), it is possible that the overall latency with RPC is more than that of the local function's execution time.

**b) Suppose Bob's primary goal is to improve latency. Assuming m = 20. Under which conditions of N should Bob use RPC?**

> **Solution:** The total end-to-end latency of an RPC is:
>
> $\text{delay\_RPC} = 4 \times (5 + N/80) + 2 \times 35 + N/m = 20 + N/20 + 70 + N/20 = 90 + N/10$.
>
> The latency when executing locally is: $\text{delay\_local} = N$.
>
> For RPC to be useful, $N > 90 + N/10 \Rightarrow 10N > 900 + N \Rightarrow 9N > 900 \Rightarrow N > 100$. Bob should use RPC only if $N > 100$.

**c) How does latency change as server speed increases? Is there a minimum latency?**

> **Solution:** As server speed increases, the execution time approaches zero. However, since the network latency and marshalling/unmarshalling costs do not change, the end-to-end latency will still be at least $4 \times (5 + N/80) + 2 \times 35 = 90 + N/20$.

------

## **Lecture 8: Naming**

**Q1. Name one advantage and one disadvantage of directory-based against directory-less architecture.**

> **Solution:** > * Advantages: Efficient, simple.
>
> - Disadvantages: Bottleneck on the directory, limited robustness to faults.

**Q2. Name one benefit and a drawback of anycast DNS.**

> **Solution:** > * Benefit: Allow better load balancing, increase performance.
>
> - Drawback: Complex to configure and maintain state across these servers.

**Q3. Explain the strength and weakness of the two naming resolution methods studied in class.**

> **Solution:** Iterative naming resolution method poses less load on the DNS servers, thus reducing the chance of being affected by DoS attacks. However, recursive naming resolution enables caching more effectively, as the root and top level DNS servers can also catch the results of the full name lookup.

**Q4. True/False questions (a-f)**

> **Solution:** Only (b) and (e) are true. The rest are false.

------

## **Lecture 9: Clock synchronization**

**Q1. Describe one similarity and one difference between Lamport clock and vector clock.**

> **Solution:** > * Similarity: They both are logical clocks and describe logical orders among events.
>
> - Difference: Lamport clocks give a total ordering among events whereas vector clocks capture the (partial) causal orders among events.

**Q2. Name one advantage and one disadvantage of Lamport clock compared to vector clock.**

> **Solution:** > * Advantage: Lamport clock is much simpler and more efficient to implement than vector clocks.
>
> - Disadvantage: Because Lamport clock cannot capture the causal relationship among events, using Lamport clock to order events will result in events being ordered unnecessarily, which reduces concurrency and may impact performance.

**Q3. Consider a system with 3 nodes A, B, C... Indicate on the timeline the vector clock at each node...**

> **Solution:** *(Refer to the image placeholder provided in the solution document for the timeline and vector clock values).*

**Q4) In a distributed system that assigns Lamport clock L(e) and Vector clock V(e) to events. Which of the following statements are true.**

> **Solution:** Questions b, e, f are true. The rest are not.

------

## **Lecture 10: Group communication**

**Q1) Name an advantage and a disadvantage of the gossiping protocol**

> **Solution:** > * Advantages: highly robust to failures; simple to implement (no global coordination needed)
>
> - Disadvantages: no bound on latency; inefficient use of network bandwidth.

**Q2) Consider the causally ordered multicast system with 3 nodes below. Describe what happens at each node when a message is sent or received.**

> **Solution:** Recall the rules:
>
> - Node increments its element before multicast a message.
> - Upon receiving a message, check if the message can be delivered. If so, deliver it and update clock (taking max of its local clock and message’s clock); if not, do nothing. *(Refer to the image placeholder provided in the original document for exact tracing).*

