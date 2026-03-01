# Scalability

- Parallelization
- Consistency
- Mutual exclusion; locking; deadlocks
- NUMA and Shared-Nothing
- Frontend-backend, Sharding

## Scalability and Parallelization

### Amdahl's law

not all parts of the algorithm can be parallelized

$S_{overall}=\frac{1}{(1-f)+\frac{f}{S_{part}}}$

4

2

2/3 can be parrallezed, how many CPU to be 2 times fast?

4

Is more parallelism always better?

### Granularity

How big a task should we assign to each core?

- Coarse-grain vs. fine-grain parallelism

Frequent coordination creates overhead

Dependencies



## Consistency

### Race condition

![image-20260215223923551](https://gcore.jsdelivr.net/gh/davidliuk/images@master/blog/image-20260215223923551.png)

Result of the computation depends on the exact timing of the two threads of execution, i.e., the order in which the instructions are executed by the cores

Reason: Concurrent updates to the same state! 

Can you get a race condition when all the threads are reading data, and none are updating it?

> NO. Race conditions are caused by "concurrent **updates** to the same state"

### Consistency

Intuition: It shouldn't make a difference whether the requests are executed **concurrently** or not

#### Sequential consistency

The **strictest** model

The result of any execution is the same as if the operations of all the cores had been executed in some sequential order, and the operations of each individual processor appear in this sequence in the order specified by the program

#### Strong consistency

After update completes, all subsequent accesses will return the updated value

#### Weak consistency

After update completes, accesses do not necessarily return the updated value; some condition must be satisfied first

Example: Update needs to reach all the replicas of the object

#### Eventual consistency

Specific form of weak consistency: If no more updates are made to an object, then eventually all reads will return the latest value

- Variants: Causal consistency, read-your-writes, monotonic writes, ...

## Mutual exclusion

### Locking



### The Dining Philosophers problem

### Deadlock

### Alternatives to locks

"Optimistic" concurrency control

■ Allow accounts to be updated concurrently

■ Try to "merge" the effects (e.g., reconcile the accounts)

■ If not possible, do things in sequence



## Shared-Nothing model

**Symmetric Multiprocessing**

**Non-Uniform Memory Architecture (NUMA)**

### Frontend vs. Backend





### Is more scalability always better?

Has cost

Run several scalable data processing systems on some large data sets

