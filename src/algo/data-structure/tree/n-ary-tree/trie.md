# Trie

### [336. Palindrome Pairs](https://leetcode.com/problems/palindrome-pairs/)

You are given a **0-indexed** array of **unique** strings `words`.

A **palindrome pair** is a pair of integers `(i, j)` such that:

- `0 <= i, j < words.length`,
- `i != j`, and
- `words[i] + words[j]` (the concatenation of the two strings) is a palindrome.

Return *an array of all the **palindrome pairs** of* `words`.

You must write an algorithm with `O(sum of words[i].length)` runtime complexity.

```java
class TrieNode {
    public Map<Character, TrieNode> next = new HashMap<>();
    public int wordId = -1; // We'll use -1 to mean there's no word ending here.
    public List<Integer> palindromePrefixRemaining = new ArrayList<>();
}

List<List<Integer>> palindromePairs(String[] words) {
    TrieNode root = new TrieNode();

    for (int wordId = 0; wordId < words.length; wordId++) {
        String word = words[wordId];
        String reversed = new StringBuilder(word).reverse().toString();
        TrieNode curr = root;
        for (int j = 0; j < word.length(); j++) {
            if (isPalindromeSuffix(reversed, j)) {
                curr.palindromePrefixRemaining.add(wordId);
            }
            Character c = reversed.charAt(j);
            if (!curr.next.containsKey(c)) {
                curr.next.put(c, new TrieNode());
            }
            curr = curr.next.get(c);
        }
        curr.wordId = wordId;
    }

    // Find pairs
    List<List<Integer>> pairs = new ArrayList<>();
    for (int wordId = 0; wordId < words.length; wordId++) {
        String word = words[wordId];
        TrieNode curr = root;
        for (int j = 0; j < word.length(); j++) {
            // Check for pairs of case 3.
            if (curr.wordId != -1
                    && isPalindromeSuffix(word, j)) {
                pairs.add(Arrays.asList(wordId, curr.wordId));
            }
            // Move down to the next root level.
            Character c = word.charAt(j);
            curr = curr.next.get(c);
            if (curr == null)
                break;
        }
        if (curr == null)
            continue;
        // Check for pairs of case 1. Note the check to prevent non distinct pairs.
        if (curr.wordId != -1 && curr.wordId != wordId) {
            pairs.add(Arrays.asList(wordId, curr.wordId));
        }
        // Check for pairs of case 2.
        for (int other : curr.palindromePrefixRemaining) {
            pairs.add(Arrays.asList(wordId, other));
        }
    }

    return pairs;
}

// Is the given string a palindrome after index i?
// Tip: Leave this as a method stub in an interview unless you have time
// or the interviewer tells you to write it. The Trie itself should be
// the main focus of your time.
boolean isPalindromeSuffix(String s, int i) {
    for (int j = s.length() - 1; i < j; i++, j--) {
        if (s.charAt(i) != s.charAt(j))
            return false;
    }
    return true;
}
```

## Backtracking

### [425. Word Squares](https://leetcode.com/problems/word-squares/)

Given an array of **unique** strings `words`, return *all the* **[word squares](https://en.wikipedia.org/wiki/Word_square)** *you can build from* `words`. The same word from `words` can be used **multiple times**. You can return the answer in **any order**.

A sequence of strings forms a valid **word square** if the `kth` row and column read the same string, where `0 <= k < max(numRows, numColumns)`.

- For example, the word sequence `["ball","area","lead","lady"]` forms a word square because each word reads the same both horizontally and vertically.

```java
List<List<String>> wordSquares(String[] words) {
    int n = words[0].length();
    TrieNode root = buildTrie(words);

    List<List<String>> results = new ArrayList<>();

    for (String word : words) {
        Deque<String> wordSquares = new ArrayDeque<>();
        wordSquares.addLast(word);
        backtracking(1, wordSquares, results, words, n, root);
    }
    return results;
}

void backtracking(int step, Deque<String> wordSquares,
        List<List<String>> results, String[] words, int n, TrieNode root) {
    if (step == n) {
        results.add(new ArrayList<>(wordSquares));
        return;
    }

    // Build prefix by accessing character at 'step' position from each word
    StringBuilder prefix = new StringBuilder();
    for (String word : wordSquares) {
        prefix.append(word.charAt(step));
    }

    // Directly iterate over word indices from trie instead of creating intermediate list
    for (int i : getWordsWithPrefix(prefix.toString(), root)) {
        wordSquares.addLast(words[i]);
        backtracking(step + 1, wordSquares, results, words, n, root);
        wordSquares.removeLast();
    }
}

TrieNode buildTrie(String[] words) {
    TrieNode root = new TrieNode();

    for (int i = 0; i < words.length; i++) {
        String word = words[i];

        TrieNode node = root;
        for (char c : word.toCharArray()) {
            node = node.children.computeIfAbsent(c, k -> new TrieNode());
            node.wordList.add(i);
        }
    }

    return root;
}

List<Integer> getWordsWithPrefix(String prefix, TrieNode root) {
    TrieNode node = root;
    for (char c : prefix.toCharArray()) {
        node = node.children.get(c);
        if (node == null) {
            return Collections.emptyList();
        }
    }
    return node.wordList;
}

class TrieNode {
	Map<Character, TrieNode> children = new HashMap<>();
	List<Integer> wordList = new ArrayList<>();
}
```

### [642. Design Search Autocomplete System](https://leetcode.com/problems/design-search-autocomplete-system/)

Design a search autocomplete system for a search engine. Users may input a sentence (at least one word and end with a special character `'#'`).

You are given a string array `sentences` and an integer array `times` both of length `n` where `sentences[i]` is a previously typed sentence and `times[i]` is the corresponding number of times the sentence was typed. For each input character except `'#'`, return the top `3` historical hot sentences that have the same prefix as the part of the sentence already typed.

Here are the specific rules:

- The hot degree for a sentence is defined as the number of times a user typed the exactly same sentence before.
- The returned top `3` hot sentences should be sorted by hot degree (The first is the hottest one). If several sentences have the same hot degree, use ASCII-code order (smaller one appears first).
- If less than `3` hot sentences exist, return as many as you can.
- When the input is a special character, it means the sentence ends, and in this case, you need to return an empty list.

Implement the `AutocompleteSystem` class:

- `AutocompleteSystem(String[] sentences, int[] times)` Initializes the object with the `sentences` and `times` arrays.
- `List<String> input(char c)` This indicates that the user typed the character `c`.
  - Returns an empty array `[]` if `c == '#'` and stores the inputted sentence in the system.
  - Returns the top `3` historical hot sentences that have the same prefix as the part of the sentence already typed. If there are fewer than `3` matches, return them all.

```java
class TrieNode {
    String word = "";
    Map<Character, TrieNode> children = new HashMap<>();
    boolean isWord = false;
    int time;

    void add(String word, int time) {
        TrieNode curr = this;
        for (int i = 0; i < word.length(); i++) {
            curr = curr.children.computeIfAbsent(word.charAt(i), k -> new TrieNode());
        }
        curr.word = word;
        curr.time += time; // Accumulate hotness instead of overwriting
        curr.isWord = true;
    }
}

class AutocompleteSystem {
    TrieNode root;
    TrieNode curr;
    StringBuilder inputs = new StringBuilder();

    public AutocompleteSystem(String[] sentences, int[] times) {
        root = new TrieNode();
        curr = root;
        for (int i = 0; i < sentences.length; i++) {
            root.add(sentences[i], times[i]);
        }
    }

    public List<String> input(char c) {
        List<String> ans = new ArrayList<>();
        if (c == '#') {
            root.add(inputs.toString(), 1);
            inputs = new StringBuilder();
            curr = root;
            return ans;
        }

        inputs.append(c);
        if (curr == null) {
            return ans;
        }
        curr = curr.children.get(c);
        if (curr == null) {
            return ans;
        }

        // Use min-heap to maintain top 3: highest frequency first, lex smallest first for ties
        PriorityQueue<TrieNode> queue = new PriorityQueue<>(
                (a, b) -> {
                    if (a.time != b.time) {
                        return a.time - b.time; // Min-heap by frequency (lowest at top)
                    }
                    return b.word.compareTo(a.word); // Max-heap by lex order (largest at top)
                });
        dfs(curr, queue);
        
        // Extract results in reverse order to get correct final ordering
        while (!queue.isEmpty()) {
            ans.add(queue.poll().word);
        }
        Collections.reverse(ans);
        return ans;
    }

    public void dfs(TrieNode root, PriorityQueue<TrieNode> ans) {
        if (root.isWord) {
            ans.add(root);
            if (ans.size() > 3) {
                ans.poll();
            }
        }

        for (TrieNode child : root.children.values()) {
            dfs(child, ans);
        }
    }
}
```

