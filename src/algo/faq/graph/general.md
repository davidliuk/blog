# General

lc133. Clone Graph — Med.

```java
Map<Node, Node> old2cloned = new HashMap<>();
public Node cloneGraph(Node node) {
    if (node == null) {
        return null;
    }
    if (old2cloned.containsKey(node)) {
        return old2cloned.get(node);
    }

    Node cloned = new Node(node.val);
    old2cloned.put(node, cloned);
    for (Node neighbor : node.neighbors) {
        cloned.neighbors.add(cloneGraph(neighbor));
    }

    return cloned;
}
```

lc323. Number of Connected Components in an Undirected Graph — Med.

```java
int number(int n, int[][] edges) {
    UnionFindSet uf = new UnionFindSet();

    int count = n;
    for (int[] edge : edges) {
        if (uf.union(edge[0], edge[1])) {
            count--;
        }
    }

    return count;
}

class UnionFindSet {
    int[] parent;
    int[] size;

    public UnionFindSet(int n) {
        parent = new int[n];
        size = new int[n];
        for (int i = 0; i < n; i++) {
            parent[i] = i;
            size[i] = 1;
        }
    }

    int find(int i) {
        if (parent[i] == i) {
            return i;
        }

        return parent[i] = find(parent[i]);
    }

    boolean union(int i, int j) {
        int pi = find(i), pj = find(j);
        if (pi == pj) {
            return false;
        }

        if (size[pi] > size[pj]) {
            size[pi] += size[pj];
            parent[pj] = pi;
        } else {
            size[pj] += size[pi];
            parent[pi] = pj;
        }

        return true;
    }
}
```
