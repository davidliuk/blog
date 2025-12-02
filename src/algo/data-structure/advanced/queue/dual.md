# Dual



### [225. Implement Stack using Queues](https://leetcode.com/problems/implement-stack-using-queues/)

Implement a last-in-first-out (LIFO) stack using only two queues. The implemented stack should support all the functions of a normal stack (`push`, `top`, `pop`, and `empty`).

Implement the `MyStack` class:

- `void push(int x)` Pushes element x to the top of the stack.
- `int pop()` Removes the element on the top of the stack and returns it.
- `int top()` Returns the element on the top of the stack.
- `boolean empty()` Returns `true` if the stack is empty, `false` otherwise.

**Notes:**

- You must use **only** standard operations of a queue, which means that only `push to back`, `peek/pop from front`, `size` and `is empty` operations are valid.
- Depending on your language, the queue may not be supported natively. You may simulate a queue using a list or deque (double-ended queue) as long as you use only a queue's standard operations.

双队列写法

```java
class MyStack {
    Queue<Integer> outQueue;
    Queue<Integer> inQueue;

    /** Initialize your data structure here. */
    public MyStack() {
        outQueue = new ArrayDeque<>();
        inQueue = new ArrayDeque<>();
    }

    /** Push element x onto stack. */
    public void push(int x) {
        inQueue.offer(x);
        while (!outQueue.isEmpty()) {
            inQueue.offer(outQueue.poll());
        }
        Queue<Integer> temp = outQueue;
        outQueue = inQueue;
        inQueue = temp;
    }

    /** Removes the element on top of the stack and returns that element. */
    public int pop() {
        return outQueue.poll();
    }

    /** Get the top element. */
    public int top() {
        return outQueue.peek();
    }

    /** Returns whether the stack is empty. */
    public boolean empty() {
        return outQueue.isEmpty();
    }
}
```

单队列写法：

```java
class MyStack {
    Queue<Integer> queue;

    /** Initialize your data structure here. */
    public MyStack() {
        queue = new ArrayDeque<>();
    }

    /** Push element x onto stack. */
    public void push(int x) {
        queue.offer(x);
        for (int i = 1; i < queue.size(); i++) {
            queue.offer(queue.poll());
        }
    }

    /** Removes the element on top of the stack and returns that element. */
    public int pop() {
        return queue.poll();
    }

    /** Get the top element. */
    public int top() {
        return queue.peek();
    }

    /** Returns whether the stack is empty. */
    public boolean empty() {
        return queue.isEmpty();
    }
}
```

