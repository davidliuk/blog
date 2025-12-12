# Topological Sort

拓扑排序 

入度(In-degree)：有向图(Directed Graph)中指向当前节点的点的个数(或指向当前节点的边的条数)

步骤：

1. 统计每个点的入度
2. 将每个入度为 0 的点放入队列(Queue)中作为起始节点
3. 不断从队列中拿出一个点，
   1. 去掉这个点的所有连边(指向其他点的边)，
      1. 其他点的相应的入度 - 1 
      2. 一旦发现新的入度为 0 的点，丢回队列中

拓扑排序并不是传统的排序算法

一个图可能存在多个拓扑序(Topological Order)，也可能不存在任何拓扑序

拓扑排序的四种不同问法

1. 求任意一个拓扑序
2. 问是否存在拓扑序
3. 求是否存在且仅存在一个拓扑序
4. 求字典序最小的拓扑排序

---

求任意一个拓扑排序

一个个把点从图中抠出来

---

判断是否存在拓扑排序

所有节点均能从图中被删除进入拓扑序

---

问拓扑序是否唯一

保持队列中有且仅有一个元素

---

求字典序最小的拓扑排序

优先队列

alienOrder

### [207. Course Schedule](https://leetcode.com/problems/course-schedule/)

There are a total of `numCourses` courses you have to take, labeled from `0` to `numCourses - 1`. You are given an array `prerequisites` where `prerequisites[i] = [ai, bi]` indicates that you **must** take course `bi` first if you want to take course `ai`.

- For example, the pair `[0, 1]`, indicates that to take course `0` you have to first take course `1`.

Return `true` if you can finish all courses. Otherwise, return `false`.

```java
public boolean canFinish(int numCourses, int[][] prerequisites) {
    List<Integer>[] graph = new List[numCourses];
    Arrays.setAll(graph, i -> new ArrayList<>());
    int[] indegree = new int[numCourses];
    for (int[] e : prerequisites) {
        graph[e[1]].add(e[0]);
        indegree[e[0]]++;
    }

    int choose = 0;
    Queue<Integer> queue = new ArrayDeque<>();
    for (int i = 0; i < numCourses; i++) {
        if (indegree[i] == 0) {
            queue.offer(i);
            choose++;
        }
    }

    while (!queue.isEmpty()) {
        int i = queue.poll();
        for (int j : graph[i]) {
            if (--indegree[j] == 0) {
                queue.offer(j);
                choose++;
            }
        }
    }
    return choose == numCourses;
}
```

### [210. Course Schedule II](https://leetcode.com/problems/course-schedule-ii/)

There are a total of `numCourses` courses you have to take, labeled from `0` to `numCourses - 1`. You are given an array `prerequisites` where `prerequisites[i] = [ai, bi]` indicates that you **must** take course `bi` first if you want to take course `ai`.

- For example, the pair `[0, 1]`, indicates that to take course `0` you have to first take course `1`.

Return *the ordering of courses you should take to finish all courses*. If there are many valid answers, return **any** of them. If it is impossible to finish all courses, return **an empty array**.

```java
public int[] findOrder(int numCourses, int[][] prerequisites) {
    List<Integer>[] graph = new List[numCourses];
    Arrays.setAll(graph, i -> new ArrayList<>());
    int[] inDegree = new int[numCourses];
    for (int[] e : prerequisites) {
        inDegree[e[0]]++;
        graph[e[1]].add(e[0]);
    }

    int[] ans = new int[numCourses];
    int len = 0;

    Queue<Integer> queue = new ArrayDeque<>();
    for (int i = 0; i < numCourses; i++) {
        if (inDegree[i] == 0) {
            queue.offer(i);
            ans[len++] = i;
        }
    }

    while (!queue.isEmpty()) {
        int i = queue.poll();
        for (int j : graph[i]) {
            if (--inDegree[j] == 0) {
                queue.offer(j);
                ans[len++] = j;
            }
        }
    }

    if (len != numCourses) {
        return new int[0];
    }

    return ans;
}
```

### [444. Sequence Reconstruction](https://leetcode.com/problems/sequence-reconstruction/)

You are given an integer array `nums` of length `n` where `nums` is a permutation of the integers in the range `[1, n]`. You are also given a 2D integer array `sequences` where `sequences[i]` is a subsequence of `nums`.

Check if `nums` is the shortest possible and the only **supersequence**. The shortest **supersequence** is a sequence **with the shortest length** and has all `sequences[i]` as subsequences. There could be multiple valid **supersequences** for the given array `sequences`.

- For example, for `sequences = [[1,2],[1,3]]`, there are two shortest **supersequences**, `[1,2,3]` and `[1,3,2]`.
- While for `sequences = [[1,2],[1,3],[1,2,3]]`, the only shortest **supersequence** possible is `[1,2,3]`. `[1,2,3,4]` is a possible supersequence but not the shortest.

Return `true` *if* `nums` *is the only shortest **supersequence** for* `sequences`*, or* `false` *otherwise*.

A **subsequence** is a sequence that can be derived from another sequence by deleting some or no elements without changing the order of the remaining elements.

```java
public boolean sequenceReconstruction(int[] nums, List<List<Integer>> sequences) {
    int n = nums.length;

    int[] inDegree = new int[n + 1];
    List<List<Integer>> graph = new ArrayList<>();
    for (int i = 0; i <= n; i++) {
        graph.add(new ArrayList<>());
    }

    for (List<Integer> seq : sequences) {
        for (int i = 1; i < seq.size(); i++) {
            int nodeA = seq.get(i - 1);
            int nodeB = seq.get(i);

            if (nodeA < 1 || nodeA > n || nodeB < 1 || nodeB > n) {
                return false;
            }

            graph.get(nodeA).add(nodeB);
            inDegree[nodeB]++;
        }
    }

    Queue<Integer> topoSort = new ArrayDeque<>();
    for (int node = 1; node <= n; node++) {
        if (inDegree[node] == 0) {
            topoSort.offer(node);
        }
    }

    for (int i = 0; i < n; i++) {
        if (topoSort.size() > 1 || nums[i] != topoSort.peek()) {
            return false;
        }

        int curr = topoSort.poll();
        for (int next : graph.get(curr)) {
            inDegree[next]--;
            if (inDegree[next] == 0) {
                topoSort.offer(next);
            }
        }
    }

    return true;
}
```

### [631. Design Excel Sum Formula](https://leetcode.com/problems/design-excel-sum-formula/)



```java
public class Excel {
    Formula[][] formulas;

    record Formula(Map<String, Integer> cells, int val) {
    }

    Stack<int[]> stack = new Stack<>();

    public Excel(int H, char W) {
        formulas = new Formula[H][(W - 'A') + 1];
    }

    public int get(int r, char c) {
        if (formulas[r - 1][c - 'A'] == null)
            return 0;
        return formulas[r - 1][c - 'A'].val();
    }

    public void set(int r, char c, int v) {
        formulas[r - 1][c - 'A'] = new Formula(new HashMap<>(), v);
        topologicalSort(r - 1, c - 'A');
        execute_stack();
    }

    public int sum(int r, char c, String[] strs) {
        Map<String, Integer> cells = convert(strs);
        int summ = calculate_sum(r - 1, c - 'A', cells);
        set(r, c, summ);
        formulas[r - 1][c - 'A'] = new Formula(cells, summ);
        return summ;
    }

    public void topologicalSort(int r, int c) {
        for (int i = 0; i < formulas.length; i++)
            for (int j = 0; j < formulas[0].length; j++)
                if (formulas[i][j] != null && formulas[i][j].cells().containsKey("" + (char) ('A' + c) + (r + 1))) {
                    topologicalSort(i, j);
                }
        stack.push(new int[] { r, c });
    }

    public void execute_stack() {
        while (!stack.isEmpty()) {
            int[] top = stack.pop();
            if (formulas[top[0]][top[1]].cells().size() > 0)
                calculate_sum(top[0], top[1], formulas[top[0]][top[1]].cells());
        }
    }

    public Map<String, Integer> convert(String[] strs) {
        Map<String, Integer> res = new HashMap<>();
        for (String st : strs) {
            if (st.indexOf(":") < 0)
                res.put(st, res.getOrDefault(st, 0) + 1);
            else {
                String[] cells = st.split(":");
                int si = Integer.parseInt(cells[0].substring(1)), ei = Integer.parseInt(cells[1].substring(1));
                char sj = cells[0].charAt(0), ej = cells[1].charAt(0);
                for (int i = si; i <= ei; i++) {
                    for (char j = sj; j <= ej; j++) {
                        res.put("" + j + i, res.getOrDefault("" + j + i, 0) + 1);
                    }
                }
            }
        }
        return res;
    }

    public int calculate_sum(int r, int c, Map<String, Integer> cells) {
        int sum = 0;
        for (String s : cells.keySet()) {
            int x = Integer.parseInt(s.substring(1)) - 1, y = s.charAt(0) - 'A';
            sum += (formulas[x][y] != null ? formulas[x][y].val() : 0) * cells.get(s);
        }
        formulas[r][c] = new Formula(cells, sum);
        return sum;
    }
}
```

