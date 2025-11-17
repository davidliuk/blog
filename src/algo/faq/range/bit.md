# Binary Index Tree

- 动态前缀和
- 动态前缀Max

```java
class FenwickTree {
    private final int[] t;
    FenwickTree(int n) { t = new int[n + 1]; }

    // 前缀最大值 query(1..i)
    int query(int i) {
        int res = 0;
        while (i > 0) {
            res = Math.max(res, t[i]);
            i &= i - 1;
        }
        return res;
    }

    // t[i] = max(t[i], val)
    void update(int i, int val) {
        while (i < t.length) {
            t[i] = Math.max(t[i], val);
            i += i & -i;
        }
    }
}

class Solution {
    public int bestTeamScore(int[] scores, int[] ages) {
        int n = scores.length;
        Integer[] id = new Integer[n];
        for (int i = 0; i < n; i++) id[i] = i;

        Arrays.sort(id, (a, b) -> scores[a] != scores[b] ?
                scores[a] - scores[b] : ages[a] - ages[b]);

        FenwickTree ft = new FenwickTree(1000);
        int ans = 0;

        for (int x : id) {
            int best = ft.query(ages[x]) + scores[x];
            ft.update(ages[x], best);
            ans = Math.max(ans, best);
        }
        return ans;
    }
}

```

