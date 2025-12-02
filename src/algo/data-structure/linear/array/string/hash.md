# Hash

### [249. Group Shifted Strings](https://leetcode.com/problems/group-shifted-strings/)

Perform the following shift operations on a string:

- **Right shift**: Replace every letter with the **successive** letter of the English alphabet, where 'z' is replaced by 'a'. For example, `"abc"` can be right-shifted to `"bcd" `or `"xyz"` can be right-shifted to `"yza"`.
- **Left shift**: Replace every letter with the **preceding** letter of the English alphabet, where 'a' is replaced by 'z'. For example, `"bcd"` can be left-shifted to `"abc" or ``"yza"` can be left-shifted to `"xyz"`.

We can keep shifting the string in both directions to form an **endless** **shifting sequence**.

- For example, shift `"abc"` to form the sequence: `... <-> "abc" <-> "bcd" <-> ... <-> "xyz" <-> "yza" <-> ...`.` <-> "zab" <-> "abc" <-> ...`

You are given an array of strings `strings`, group together all `strings[i]` that belong to the same shifting sequence. You may return the answer in **any order**.

```java
public List<List<String>> groupStrings(String[] strings) {
    Map<String, List<String>> hashToList = new HashMap<>();

    for (String str : strings) {
        String hashKey = getHash(str);
        if (hashToList.get(hashKey) == null) {
            hashToList.put(hashKey, new ArrayList<>());
        }
        hashToList.get(hashKey).add(str);
    }

    // Return a list of all of the grouped strings
    return new ArrayList<>(hashToList.values());
}

// Create a hash value
String getHash(String s) {
    char[] chars = s.toCharArray();
    StringBuilder hashKey = new StringBuilder();

    for (int i = 1; i < chars.length; i++) {
        hashKey.append((char) ((chars[i] - chars[i - 1] + 26) % 26 + 'a'));
    }

    return hashKey.toString();
}
```

### [49. Group Anagrams](https://leetcode.com/problems/group-anagrams/)

Given an array of strings `strs`, group the anagrams together. You can return the answer in **any order**.

```java
public List<List<String>> groupAnagrams(String[] strs) {
    if (strs == null || strs.length == 0) {
        return new ArrayList();
    }

    Map<String, List> ans = new HashMap<>();
    for (String str : strs) {
        char[] ca = str.toCharArray();
        Arrays.sort(ca);
        String key = String.valueOf(ca);
        if (!ans.containsKey(key))
            ans.put(key, new ArrayList());
        ans.get(key).add(str);
    }
    return new ArrayList(ans.values());
}
```

```java
List<List<String>> groupAnagrams(String[] strs) {
    if (strs == null || strs.length == 0) {
        return new ArrayList<>();
    }

    int[] buckets = new int[26];
    Map<String, List> groups = new HashMap<>();
    for (String str : strs) {
        Arrays.fill(buckets, 0);
        for (char c : str.toCharArray()) {
            buckets[c - 'a']++;
        }

        StringBuilder hash = new StringBuilder();
        for (int i = 0; i < 26; i++) {
            hash.append('#');
            hash.append(buckets[i]);
        }
        groups.computeIfAbsent(hash.toString(), _ -> new ArrayList())
                .add(str);
    }
    return new ArrayList(groups.values());
}
```

### [2744. Find Maximum Number of String Pairs](https://leetcode.com/problems/find-maximum-number-of-string-pairs/)

You are given a **0-indexed** array `words` consisting of **distinct** strings.

The string `words[i]` can be paired with the string `words[j]` if:

- The string `words[i]` is equal to the reversed string of `words[j]`.
- `0 <= i < j < words.length`.

Return *the **maximum** number of pairs that can be formed from the array* `words`*.*

Note that each string can belong in **at most one** pair.

```java
int maximumNumberOfStringPairs(String[] words) {
    Set<String> seen = new HashSet<>();
    int pairs = 0;
    for (String word : words) {
        String reversed = new StringBuilder(word).reverse().toString();
        // If reversed string was seen before, we found a pair
        if (seen.contains(reversed)) {
            pairs++;
        } else {
            // Otherwise, add current word to seen set
            seen.add(word);
        }
    }
    return pairs;
}
```



### [359. Logger Rate Limiter](https://leetcode.com/problems/logger-rate-limiter/)

Design a logger system that receives a stream of messages along with their timestamps. Each **unique** message should only be printed **at most every 10 seconds** (i.e. a message printed at timestamp `t` will prevent other identical messages from being printed until timestamp `t + 10`).

All messages will come in chronological order. Several messages may arrive at the same timestamp.

Implement the `Logger` class:

- `Logger()` Initializes the `logger` object.
- `bool shouldPrintMessage(int timestamp, string message)` Returns `true` if the `message` should be printed in the given `timestamp`, otherwise returns `false`.

```java
class Logger {

    Map<String, Integer> messageToTTL;
    int TIMEOUT = 10;

    public Logger() {
        messageToTTL = new HashMap<>();
    }

    public boolean shouldPrintMessage(int timestamp, String message) {
        if (messageToTTL.containsKey(message) &&
                messageToTTL.get(message) > timestamp) {
            return false;
        }

        messageToTTL.put(message, timestamp + TIMEOUT);
        return true;
    }
}

/**
 * Your Logger object will be instantiated and called as such:
 * Logger obj = new Logger();
 * boolean param_1 = obj.shouldPrintMessage(timestamp,message);
 */
```

### [3481. Apply Substitutions](https://leetcode.com/problems/apply-substitutions/)

You are given a `replacements` mapping and a `text` string that may contain **placeholders** formatted as `%var%`, where each `var` corresponds to a key in the `replacements` mapping. Each replacement value may itself contain **one or more** such **placeholders**. Each **placeholder** is replaced by the value associated with its corresponding replacement key.

Return the fully substituted `text` string which **does not** contain any **placeholders**.

```java
class Solution {
    public String applySubstitutions(List<List<String>> replacements, String text) {
        Map<String, String> reps = new HashMap<>();
        for (List<String> replacement : replacements) {
            reps.put(replacement.get(0), replacement.get(1));
        }

        while (text.contains("%")) {
            StringBuilder output = new StringBuilder();
            String[] split = text.split("%");
            for (int i = 0; i < split.length; i++) {
                if (i % 2 == 0) {
                    output.append(split[i]);
                } else {
                    output.append(reps.get(split[i]));
                }
            }
            text = output.toString();
        }
        ;

        return text;
    }
}
```

