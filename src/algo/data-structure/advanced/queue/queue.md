# Queue

### [362. Design Hit Counter](https://leetcode.com/problems/design-hit-counter/)

Design a hit counter which counts the number of hits received in the past `5` minutes (i.e., the past `300` seconds).

Your system should accept a `timestamp` parameter (**in seconds** granularity), and you may assume that calls are being made to the system in chronological order (i.e., `timestamp` is monotonically increasing). Several hits may arrive roughly at the same time.

Implement the `HitCounter` class:

- `HitCounter()` Initializes the object of the hit counter system.
- `void hit(int timestamp)` Records a hit that happened at `timestamp` (**in seconds**). Several hits may happen at the same `timestamp`.
- `int getHits(int timestamp)` Returns the number of hits in the past 5 minutes from `timestamp` (i.e., the past `300` seconds).

```java
class HitCounter {

    // Record class for immutable timestamp-count pairs
    private record Hit(int timestamp, int count) {}
    
    private Deque<Hit> hits;

    /** Initialize your data structure here. */
    public HitCounter() {
        this.hits = new ArrayDeque<>();
    }

    /** Record a hit.
        @param timestamp - The current timestamp (in seconds granularity). */
    public void hit(int timestamp) {
        if (!this.hits.isEmpty() && this.hits.getLast().timestamp() == timestamp) {
            // Update the count of latest timestamp by incrementing the count by 1
            Hit last = this.hits.removeLast();
            this.hits.addLast(new Hit(timestamp, last.count() + 1));
        } else {
            // Insert the new timestamp with count = 1
            this.hits.addLast(new Hit(timestamp, 1));
        }
    }

    /** Return the number of hits in the past 5 minutes.
        @param timestamp - The current timestamp (in seconds granularity). */
    public int getHits(int timestamp) {
        // Remove outdated hits (older than 300 seconds)
        while (!this.hits.isEmpty() && timestamp - this.hits.getFirst().timestamp() >= 300) {
            this.hits.removeFirst();
        }
        
        // Calculate total hits from remaining entries
        int total = 0;
        for (Hit hit : this.hits) {
            total += hit.count();
        }
        return total;
    }
}
```

### [759. Employee Free Time](https://leetcode.com/problems/employee-free-time/)

We are given a list `schedule` of employees, which represents the working time for each employee.

Each employee has a list of non-overlapping `Intervals`, and these intervals are in sorted order.

Return the list of finite intervals representing **common, positive-length free time** for *all* employees, also in sorted order.

(Even though we are representing `Intervals` in the form `[x, y]`, the objects inside are `Intervals`, not lists or arrays. For example, `schedule[0][0].start = 1`, `schedule[0][0].end = 2`, and `schedule[0][0][0]` is not defined). Also, we wouldn't include intervals like [5, 5] in our answer, as they have zero length.

```java
/*
// Definition for an Interval.
class Interval {
    public int start;
    public int end;

    public Interval() {}

    public Interval(int _start, int _end) {
        start = _start;
        end = _end;
    }
};
*/
class Solution {
    // Use record for immutable Job data structure
    private record Job(int eid, int index) {}
    
    public List<Interval> employeeFreeTime(List<List<Interval>> avails) {
        List<Interval> ans = new ArrayList<>();
        PriorityQueue<Job> pq = new PriorityQueue<>((a, b) -> 
            avails.get(a.eid()).get(a.index()).start - avails.get(b.eid()).get(b.index()).start);
        
        int anchor = Integer.MAX_VALUE;

        for (int eid = 0; eid < avails.size(); eid++) {
            pq.offer(new Job(eid, 0));
            anchor = Math.min(anchor, avails.get(eid).get(0).start);
        }

        while (!pq.isEmpty()) {
            Job job = pq.poll();
            Interval iv = avails.get(job.eid()).get(job.index());
            if (anchor < iv.start) {
                ans.add(new Interval(anchor, iv.start));
            }
            anchor = Math.max(anchor, iv.end);
            if (job.index() + 1 < avails.get(job.eid()).size()) {
                pq.offer(new Job(job.eid(), job.index() + 1));
            }
        }

        return ans;
    }
}
```

## lazy delete

### [3607. Power Grid Maintenance](https://leetcode.com/problems/power-grid-maintenance/)

You are given an integer `c` representing `c` power stations, each with a unique identifier `id` from 1 to `c` (1‑based indexing).

These stations are interconnected via `n` **bidirectional** cables, represented by a 2D array `connections`, where each element `connections[i] = [ui, vi]` indicates a connection between station `ui` and station `vi`. Stations that are directly or indirectly connected form a **power grid**.

Initially, **all** stations are online (operational).

You are also given a 2D array `queries`, where each query is one of the following *two* types:

- `[1, x]`: A maintenance check is requested for station `x`. If station `x` is online, it resolves the check by itself. If station `x` is offline, the check is resolved by the operational station with the smallest `id` in the same **power grid** as `x`. If **no** **operational** station *exists* in that grid, return -1.
- `[2, x]`: Station `x` goes offline (i.e., it becomes non-operational).

Return an array of integers representing the results of each query of type `[1, x]` in the **order** they appear.

**Note:** The power grid preserves its structure; an offline (non‑operational) node remains part of its grid and taking it offline does not alter connectivity.

```java
public int[] processQueries(int c, int[][] connections, int[][] queries) {
    List<Integer>[] g = new ArrayList[c + 1];
    Arrays.setAll(g, i -> new ArrayList<>());
    for (int[] e : connections) {
        int x = e[0], y = e[1];
        g[x].add(y);
        g[y].add(x);
    }

    int[] belong = new int[c + 1];
    Arrays.fill(belong, -1);
    List<Queue<Integer>> heaps = new ArrayList<>();
    for (int i = 1; i <= c; i++) {
        if (belong[i] >= 0) {
            continue;
        }
        Queue<Integer> pq = new PriorityQueue<>();
        dfs(i, g, belong, heaps.size(), pq);
        heaps.add(pq);
    }

    int ansSize = 0;
    for (int[] q : queries) {
        if (q[0] == 1) {
            ansSize++;
        }
    }

    int[] ans = new int[ansSize];
    int idx = 0;
    boolean[] offline = new boolean[c + 1];
    for (int[] q : queries) {
        int x = q[1];
        if (q[0] == 2) {
            offline[x] = true;
            continue;
        }
        if (!offline[x]) {
            ans[idx++] = x;
            continue;
        }
        Queue<Integer> pq = heaps.get(belong[x]);
        // 懒删除：取堆顶的时候，如果离线，才删除
        while (!pq.isEmpty() && offline[pq.peek()]) {
            pq.poll();
        }
        ans[idx++] = pq.isEmpty() ? -1 : pq.peek();
    }
    return ans;
}

private void dfs(int x, List<Integer>[] g, int[] belong, int compId, Queue<Integer> pq) {
    belong[x] = compId; // 记录节点 x 在哪个堆
    pq.offer(x);
    for (int y : g[x]) {
        if (belong[y] < 0) {
            dfs(y, g, belong, compId, pq);
        }
    }
}
```

### [281. Zigzag Iterator](https://leetcode.com/problems/zigzag-iterator/)

Given two vectors of integers `v1` and `v2`, implement an iterator to return their elements alternately.

Implement the `ZigzagIterator` class:

- `ZigzagIterator(List<int> v1, List<int> v2)` initializes the object with the two vectors `v1` and `v2`.
- `boolean hasNext()` returns `true` if the iterator still has elements, and `false` otherwise.
- `int next()` returns the current element of the iterator and moves the iterator to the next element.

```java
public class ZigzagIterator {
    private Queue<Iterator<Integer>> queue = new ArrayDeque<>();
    private int totalNum = 0;

    public ZigzagIterator(List<Integer> v1, List<Integer> v2) {
        if (!v1.isEmpty()) {
            queue.offer(v1.iterator());
            totalNum += v1.size();
        }
        if (!v2.isEmpty()) {
            queue.offer(v2.iterator());
            totalNum += v2.size();
        }
    }

    public int next() {
        Iterator<Integer> current = queue.poll();
        int result = current.next();
        totalNum--;
        
        // If current iterator still has elements, add it back to queue
        if (current.hasNext()) {
            queue.offer(current);
        }
        
        return result;
    }

    public boolean hasNext() {
        return totalNum > 0;
    }
}
```

