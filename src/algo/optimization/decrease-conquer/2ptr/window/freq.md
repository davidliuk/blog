# Frequency



### [159. Longest Substring with At Most Two Distinct Characters](https://leetcode.com/problems/longest-substring-with-at-most-two-distinct-characters/)

Given a string `s`, return *the length of the longest* *substring* *that contains at most **two distinct characters***.

**Example 1:**

```
Input: s = "eceba"
Output: 3
Explanation: The substring is "ece" which its length is 3.
```

**Example 2:**

```
Input: s = "ccaabbb"
Output: 5
Explanation: The substring is "aabbb" which its length is 5.
```

**Constraints:**

- `1 <= s.length <= 105`
- `s` consists of English letters.

```java
int lengthOfLongestSubstringTwoDistinct(String s) {
    int n = s.length();
    int ans = 0;
    Map<Character, Integer> freq = new HashMap<>();
    for (int i = 0, j = 0; j < n; j++) {
        freq.merge(s.charAt(j), 1, Integer::sum);
        while (freq.size() > 2) {
            char c = s.charAt(i++);
            if (freq.merge(c, -1, Integer::sum) == 0) {
                freq.remove(c);
            }
        }
        ans = Math.max(ans, j - i + 1);
    }
    return ans;
}
```

### [340. Longest Substring with At Most K Distinct Characters](https://leetcode.com/problems/longest-substring-with-at-most-k-distinct-characters/)

Given a string `s` and an integer `k`, return *the length of the longest* *substring* *of* `s` *that contains at most* `k` ***distinct** characters*.

**Example 1:**

```
Input: s = "eceba", k = 2
Output: 3
Explanation: The substring is "ece" with length 3.
```

**Example 2:**

```
Input: s = "aa", k = 1
Output: 2
Explanation: The substring is "aa" with length 2.
```

**Constraints:**

- `1 <= s.length <= 5 * 104`
- `0 <= k <= 50`

```java
int lengthOfLongestSubstringKDistinct(String s, int k) {
    int n = s.length();
    Map<Character, Integer> freq = new HashMap<>();
    int ans = 0;
    for (int i = 0, j = 0; j < n; j++) {
        freq.merge(s.charAt(j), 1, Integer::sum);
        while (freq.size() > k) {
            char c = s.charAt(i);
            if (freq.merge(c, -1, Integer::sum) == 0) {
                freq.remove(c);
            }
            i++;
        }
        ans = Math.max(ans, j - i + 1);
    }
    return ans;
}
```

### [904. Fruit Into Baskets](https://leetcode.com/problems/fruit-into-baskets/)

You are visiting a farm that has a single row of fruit trees arranged from left to right. The trees are represented by an integer array `fruits` where `fruits[i]` is the **type** of fruit the `ith` tree produces.

You want to collect as much fruit as possible. However, the owner has some strict rules that you must follow:

- You only have **two** baskets, and each basket can only hold a **single type** of fruit. There is no limit on the amount of fruit each basket can hold.
- Starting from any tree of your choice, you must pick **exactly one fruit** from **every** tree (including the start tree) while moving to the right. The picked fruits must fit in one of your baskets.
- Once you reach a tree with fruit that cannot fit in your baskets, you must stop.

Given the integer array `fruits`, return *the **maximum** number of fruits you can pick*.

```java
public int totalFruit(int[] fruits) {
    // Hash map 'basket' to store the types of fruits.
    Map<Integer, Integer> basket = new HashMap<>();
    int ans = 0;
    // Add fruit from j side (j) of the window.
    for (int i = 0, j = 0; j < fruits.length; ++j) {
        basket.put(fruits[j], basket.getOrDefault(fruits[j], 0) + 1);

        while (basket.size() > 2) {
            basket.put(fruits[i], basket.get(fruits[i]) - 1);
            if (basket.get(fruits[i]) == 0)
                basket.remove(fruits[i]);
            i++;
        }
        ans = Math.max(j - i + 1, ans);
    }

    return ans;
}
```

