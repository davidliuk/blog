# For

### [277. Find the Celebrity](https://leetcode.com/problems/find-the-celebrity/)

Suppose you are at a party with `n` people labeled from `0` to `n - 1` and among them, there may exist one celebrity. The definition of a celebrity is that all the other `n - 1` people know the celebrity, but the celebrity does not know any of them.

Now you want to find out who the celebrity is or verify that there is not one. You are only allowed to ask questions like: "Hi, A. Do you know B?" to get information about whether A knows B. You need to find out the celebrity (or verify there is not one) by asking as few questions as possible (in the asymptotic sense).

You are given an integer `n` and a helper function `bool knows(a, b)` that tells you whether `a` knows `b`. Implement a function `int findCelebrity(n)`. There will be exactly one celebrity if they are at the party.

Return *the celebrity's label if there is a celebrity at the party*. If there is no celebrity, return `-1`.

**Note** that the `n x n` 2D array `graph` given as input is **not** directly available to you, and instead **only** accessible through the helper function `knows`. `graph[i][j] == 1` represents person `i` knows person `j`, wherease `graph[i][j] == 0` represents person `j` does not know person `i`.

```java
/* The knows API is defined in the parent class Relation.
      boolean knows(int a, int b); */
public class Solution extends Relation {
    public int findCelebrity(int n) {
        int candidate = 0;
        for (int i = 1; i < n; i++) {
            if (knows(candidate, i)) {
                candidate = i;
            }   
        }
        
        if (isCelebrity(n, candidate)) {
            return candidate;
        }
        return -1;
    }

    boolean isCelebrity(int n, int i) {
        for (int j = 0; j < n; j++) {
            if (i == j) continue;
            if (!knows(j, i) || knows(i, j)) return false;
        }
        return true;
    }
}
```

