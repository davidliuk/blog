# Matching

## KMP

1. 双指针，匹配并记录每个i对应的前后缀匹配的情况
2. 双指针，匹配模式串和匹配串的情况

### [28. Find the Index of the First Occurrence in a String](https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/)

```java
public int strStr(String txt, String pat) {
    int m = txt.length(), n = pat.length();
    if (n == 0) {
        return 0;
    }

    // 数组中每个位置的值就是该下标应该跳转的目标位置
    // next[i]=j, 含义 pat 中 [0, j]==[i-j+1, i]
    int[] next = new int[n];
    // pat的后缀i与前缀j匹配，从1开始的后缀做“匹配串”
    for (int i = 1, j = 0; i < n; i++) {
        while (j > 0 && pat.charAt(i) != pat.charAt(j)) {
            // j位置开始不匹配的，j-1是最长相等的位置，找j-1对应的next
            j = next[j - 1];
        }
        if (pat.charAt(i) == pat.charAt(j)) {
            j++;
        }
        next[i] = j;
    }

    for (int i = 0, j = 0; i < m; i++) {
        while (j > 0 && txt.charAt(i) != pat.charAt(j)) {
            // j位置开始不匹配的，j-1是最长相等的位置，找j-1对应的next
            j = next[j - 1];
        }
        if (txt.charAt(i) == pat.charAt(j)) {
            j++;
        }
        if (j == n) {
            // 匹配成功的逻辑
            return i - n + 1;
            // 如果需要继续往后匹配，则
            // j = next[j - 1];
        }
    }

    return -1;
}
```

## Hash

### [214. Shortest Palindrome](https://leetcode.com/problems/shortest-palindrome/)

You are given a string `s`. You can convert `s` to a palindrome by adding characters in front of it.

Return *the shortest palindrome you can find by performing this transformation*.

> 即找最长的回文前缀

```java
public String shortestPalindrome(String s) {
    int n = s.length();
    int base = 131, mod = 1000000007;
    long preHash = 0, sufHash = 0, mul = 1;
    int best = -1;
    for (int i = 0; i < n; ++i) {
        preHash = ((preHash * base + s.charAt(i)) % mod);
        sufHash = ((sufHash + mul * s.charAt(i)) % mod);
        if (preHash == sufHash) {
            best = i;
        }
        mul = (mul * base % mod);
    }
    String add = (best == n - 1 ? "" : s.substring(best + 1));
    StringBuffer ans = new StringBuffer(add).reverse();
    ans.append(s);
    return ans.toString();
}
```

