# Intervals

## 区间两大思路

1. **按起点排序** → 适用于**“合并”、“覆盖”、“填充”类问题**

   因为你要“顺序地往右看”，知道当前区间是否和上一个重叠。

2. **按终点排序** → 适用于**“选择最大不重叠集”、“最少删除”类问题**

   因为你希望每次选的区间“尽量早结束”，为后续留出更多空间。

## Merge

**按起点排序** → 适用于**“合并”、“覆盖”、“填充”类问题**

因为你要“顺序地往右看”，知道当前区间是否和上一个重叠。

### [252. Meeting Rooms](https://leetcode.com/problems/meeting-rooms/)

```java
public boolean canAttendMeetings(int[][] intervals) {
    if (intervals.length == 0) {
        return true;
    }
    Arrays.sort(intervals, (a, b) -> a[0] == b[0]? b[1] - a[1]: a[0] - b[0]);

    int last = intervals[0][1];
    for (int i = 1; i < intervals.length; ++i) {
        int left = intervals[i][0], right = intervals[i][1];
        // 相切或相交或覆盖
        if (last > left) {
            return false;
        }
        // 完全不相交
        last = right;
    }

    return true;
}
```

### [253. Meeting Rooms II](https://leetcode.com/problems/meeting-rooms-ii/)

```java
public int minMeetingRooms(int[][] intervals) {
    Arrays.sort(intervals, (a, b) -> a[0] - b[0]);
    Queue<Integer> pq = new PriorityQueue<>();
    for (int i = 0; i < intervals.length; i++) {
        if (!pq.isEmpty() && pq.peek() <= intervals[i][0]) {
            pq.poll();
        }
        pq.offer(intervals[i][1]);
    }
    return pq.size();
}
```

### [56. Merge Intervals](https://leetcode.com/problems/merge-intervals/)

```java
public int[][] merge(int[][] intervals) {
    Arrays.sort(intervals, (a, b) -> {
        if (a[0] != b[0]) return a[0] - b[0];
        return b[1] - a[1];
    });
    List<int[]> merged = new ArrayList<>();
    for (int[] interval : intervals) {
        int last = merged.size() - 1;
        if (merged.isEmpty() || merged.get(last)[1] < interval[0]) {
            merged.add(interval);
        } else {
            merged.get(last)[1] = Math.max(merged.get(last)[1], interval[1]);
        }
    }

    return merged.toArray(new int[0][]);
}
```

Eg. 57

### [57. Insert Interval](https://leetcode.com/problems/insert-interval/)

```java
public int[][] insert(int[][] intervals, int[] newInterval) {
    List<int[]> sorted = new ArrayList<>(Arrays.asList(intervals));
    int i = Collections.binarySearch(sorted, newInterval, (a, b) -> a[0] - b[0]);
    if (i < 0) i = -i - 1;
    sorted.add(i, newInterval);

    List<int[]> merged = new ArrayList<>();
    for (int[] interval : sorted) {
        int j = merged.size() - 1;
        if (merged.isEmpty() || merged.get(j)[1] < interval[0]) {
            merged.add(interval);
        } else {
            merged.get(j)[1] = Math.max(merged.get(j)[1], interval[1]);
        }
    }

    return merged.toArray(new int[0][]);
}
```

```java
int[][] insert(int[][] intervals, int[] newInterval) {
    int n = intervals.length, i = 0;
    List<int[]> merged = new ArrayList<>();

    // Case 1: No overlapping before merging intervals
    while (i < n && intervals[i][1] < newInterval[0]) {
        merged.add(intervals[i]);
        i++;
    }

    // Case 2: Overlapping and merging intervals
    while (i < n && newInterval[1] >= intervals[i][0]) {
        newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
        newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
        i++;
    }
    merged.add(newInterval);

    // Case 3: No overlapping after merging newInterval
    while (i < n) {
        merged.add(intervals[i]);
        i++;
    }

    // Convert List to array
    return merged.toArray(new int[0][]);
}
```

### Merge 2 Sorted Intervals

Intervals sorted in ascending order by `start`

```java
int[][] mergeTwoIntervals(int[][] intervals1, int[][] intervals2) {
    int n = intervals1.length, m = intervals2.length;

    // 第一步：按 start 顺序 merge intervals1 和 intervals2 到 merged 中（不合并，只是排序）
    List<int[]> sorted = new ArrayList<>(n + m);
    int i = 0, j = 0;
    while (i < n || j < m) {
        if (i < n && (j >= m || intervals1[i][0] <= intervals2[j][0])) {
            sorted.add(intervals1[i++]);
        } else {
            sorted.add(intervals2[j++]);
        }
    }

    List<int[]> merged = new ArrayList<>();
    // 第二步：对 sorted 做一次 interval merge
    for (int[] interval : sorted) {
        if (merged.isEmpty() || merged.get(merged.size() - 1)[1] < interval[0]) {
            merged.add(interval);
        } else {
            merged.get(merged.size() - 1)[1] =
                Math.max(merged.get(merged.size() - 1)[1], interval[1]);
        }
    }

    return merged.toArray(new int[0][]);
}

```

```java
int[][] mergeTwoIntervals(int[][] A, int[][] B) {
    List<int[]> merged = new ArrayList<>();

    int i = 0, j = 0;
    while (i < A.length || j < B.length) {
        int[] cur;
        if (i < A.length && (j >= B.length || A[i][0] <= B[j][0])) {
            cur = A[i++];
        } else {
            cur = B[j++];
        }

        if (merged.isEmpty() || merged.get(merged.size() - 1)[1] < cur[0]) {
            merged.add(new int[]{cur[0], cur[1]});
        } else {
            merged.get(merged.size() - 1)[1] = Math.max(merged.get(merged.size() - 1)[1], cur[1]);
        }
    }

    return merged.toArray(new int[0][]);
}
```

### Merge k Sorted Intervals

分治法

```java
int[][] mergeIntervalLists(int[][][] lists) {
    if (lists == null || lists.length == 0) return new int[0][];

    // 分治合并
    int intervalCount = lists.length;
    while (intervalCount > 1) {
        int mergedCount = 0;

        for (int i = 0; i < intervalCount; i += 2) {
            if (i + 1 < intervalCount) {
                lists[mergedCount++] = mergeTwoIntervals(lists[i], lists[i + 1]);
            } else {
                lists[mergedCount++] = lists[i];
            }
        }
        intervalCount = mergedCount;
    }

    return lists[0];
}
```

堆法

```java
class Node {
    int start, end;
    int listIdx;    // 哪个列表
    int index;      // 在列表中的位置
    Node(int s, int e, int l, int idx) {
        start = s;
        end = e;
        listIdx = l;
        index = idx;
    }
}

int[][] mergeK(int[][][] lists) {
    Queue<Node> pq =
        new PriorityQueue<>(Comparator.comparingInt(a -> a.start));

    // 初始化：每个列表的第 0 个区间入堆
    for (int i = 0; i < lists.length; i++) {
        if (lists[i].length > 0) {
            pq.offer(new Node(lists[i][0][0], lists[i][0][1], i, 0));
        }
    }

    List<int[]> merged = new ArrayList<>();

    while (!pq.isEmpty()) {
        Node cur = pq.poll();

        // 合并逻辑
        if (merged.isEmpty() || merged.get(merged.size() - 1)[1] < cur.start) {
            merged.add(new int[]{cur.start, cur.end});
        } else {
            merged.get(merged.size() - 1)[1] =
                    Math.max(merged.get(merged.size() - 1)[1], cur.end);
        }

        // 将同一列表的下一个 interval 入堆
        int nextIdx = cur.index + 1;
        if (nextIdx < lists[cur.listIdx].length) {
            int[] nxt = lists[cur.listIdx][nextIdx];
            pq.offer(new Node(nxt[0], nxt[1], cur.listIdx, nextIdx));
        }
    }

    return merged.toArray(new int[0][]);
}
```

### [2402. Meeting Rooms III](https://leetcode.com/problems/meeting-rooms-iii/)

```java
public int mostBooked(int n, int[][] meetings) {
    Arrays.sort(meetings, (a, b) -> Integer.compare(a[0], b[0]));
    var cnt = new int[n];
    var idle = new PriorityQueue<Integer>();
    for (var i = 0; i < n; i++) {
        idle.offer(i);
    }
    var busy = new PriorityQueue<Pair<Long, Integer>>(
            Comparator.comparingLong(Pair<Long, Integer>::getKey)
                    .thenComparingInt(Pair<Long, Integer>::getValue));
    for (var meeting : meetings) {
        long start = meeting[0], end = meeting[1];
        while (!busy.isEmpty() && busy.peek().getKey() <= start) {
            idle.offer(busy.poll().getValue()); // 维护在 start 时刻空闲的会议室
        }
        int id;
        if (idle.isEmpty()) {
            var p = busy.poll(); // 没有可用的会议室，那么弹出一个最早结束的会议室（若有多个同时结束的，会弹出下标最小的）
            end += p.getKey() - start; // 更新当前会议的结束时间
            id = p.getValue();
        } else
            id = idle.poll();
        ++cnt[id];
        busy.offer(new Pair<>(end, id)); // 使用一个会议室
    }

    int maxIdx = 0;
    for (int i = 0; i < n; i++) {
        if (cnt[i] > cnt[maxIdx]) {
            maxIdx = i;
        }
    }
    return maxIdx;
}
```

## Non-Overlap

**按终点排序** → 适用于**“选择最大不重叠集”、“最少删除”类问题**

因为你希望每次选的区间“尽量早结束”，为后续留出更多空间。

### [986. Interval List Intersections](https://leetcode.com/problems/interval-list-intersections/)

```java
int[][] intervalIntersection(int[][] list1, int[][] list2) {
    int n = list1.length, m = list2.length;
    List<int[]> result = new ArrayList<>();

    int i = 0, j = 0;
    while (i < n && j < m) {
        int left1 = list1[i][0];
        int right1 = list1[i][1];
        int left2 = list2[j][0];
        int right2 = list2[j][1];
        // 两个区间存在交集
        if (right2 >= left1 && right1 >= left2) {
            result.add(new int[]{
                Math.max(left1, left2),
                Math.min(right1, right2)}
            );
        }

        if (right2 < right1) {
            j++;
        } else {
            i++;
        }
    }

    return result.toArray(new int[0][]);
}
```

### [435. Non-overlapping Intervals](https://leetcode.com/problems/non-overlapping-intervals/)

```java
int eraseOverlapIntervals(int[][] intervals) {
    Arrays.sort(intervals, (a, b) -> a[1] - b[1]);
    int ans = 0, maxY = Integer.MIN_VALUE;

    for (int[] interval : intervals) {
        int x = interval[0], y = interval[1];

        if (x >= maxY) { // Non-overlapping
            maxY = y;
        } else { // Case 2: Overlapping
            ans++;
        }
    }

    return ans;
}
```

### [452. Minimum Number of Arrows to Burst Balloons](https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/)

```java
public int findMinArrowShots(int[][] points) {
    // 按照右端点从小到大排序
    Arrays.sort(points, (a, b) -> Integer.compare(a[1], b[1]));
    int ans = 1, last = points[0][1];
    for (int i = 1; i < points.length; i++) {
        if (points[i][0] > last) { // 上一个放的点在区间左边
            last = points[i][1]; // 在区间的最右边放一个点
            ans++;
        }
    }
    return ans;
}

```
