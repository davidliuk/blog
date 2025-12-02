# Undirected Tree



```java
public int maxKDivisibleComponents(int n, int[][] edges, int[] values, int k) {
    List<Integer>[] graph = new ArrayList[n];
    for (int i = 0; i < n; ++i) {
        graph[i] = new ArrayList<>();
    }
    for (int[] edge : edges) {
        int u = edge[0], v = edge[1];
        graph[u].add(v);
        graph[v].add(u);
    }
    this.graph = graph;
    this.values = values;
    this.divisor = k;
    this.answer = 0;
    dfs(0, -1);
    return answer;
}

private List<Integer>[] graph;
private int[] values;
private int divisor;
private int answer;

private long dfs(int node, int from) {
    long sum = values[node];
    for (int to : graph[node]) {
        if (to != from) {
            sum += dfs(to, node);
        }
    }
    if (sum % divisor == 0) {
        answer++;
    }
    return sum;
}
```

