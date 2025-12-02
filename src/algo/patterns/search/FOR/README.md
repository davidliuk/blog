# FOR

只能遍历线性序列，或图的拓扑排序

### [408. Valid Word Abbreviation](https://leetcode.com/problems/valid-word-abbreviation/)

A string can be **abbreviated** by replacing any number of **non-adjacent**, **non-empty** substrings with their lengths. The lengths **should not** have leading zeros.

For example, a string such as `"substitution"` could be abbreviated as (but not limited to):

- `"s10n"` (`"s ubstitutio n"`)
- `"sub4u4"` (`"sub stit u tion"`)
- `"12"` (`"substitution"`)
- `"su3i1u2on"` (`"su bst i t u ti on"`)
- `"substitution"` (no substrings replaced)

The following are **not valid** abbreviations:

- `"s55n"` (`"s ubsti tutio n"`, the replaced substrings are adjacent)
- `"s010n"` (has leading zeros)
- `"s0ubstitution"` (replaces an empty substring)

Given a string `word` and an abbreviation `abbr`, return *whether the string **matches** the given abbreviation*.

A **substring** is a contiguous **non-empty** sequence of characters within a string.

```java
/**
 * Time Complexity: O(A)
 *
 * Space Complexity: O(1)
 *
 * A = Length of abbr input string.
 */
class Solution {
    public boolean validWordAbbreviation(String word, String abbr) {
        if (word == null || abbr == null) {
            throw new IllegalArgumentException("Input is null");
        }

        int wLen = word.length();
        int aLen = abbr.length();

        // length of abbreviation cannot be greater than word's length
        if (aLen > wLen) {
            return false;
        }

        if (wLen == 0) {
            return aLen == 0; // Handle edge case: both should be empty
        }

        int i = 0;
        int j = 0;

        while (i < wLen && j < aLen) {
            // If current characters in both word and abbr match, continue checking.
            if (word.charAt(i) == abbr.charAt(j)) {
                i++;
                j++;
                continue;
            }

            // Current characters don't match, so abbr char must be a digit (not '0')
            if (abbr.charAt(j) <= '0' || abbr.charAt(j) > '9') {
                return false;
            }

            // Parse the number from abbreviation
            int num = 0;
            while (j < aLen && Character.isDigit(abbr.charAt(j))) {
                num = 10 * num + (abbr.charAt(j) - '0');
                // Early termination: if we've already exceeded word length
                if (i + num > wLen) {
                    return false;
                }
                j++;
            }

            // Skip 'num' characters in word
            i += num;
        }

        // Both pointers must reach the end for valid abbreviation
        return i == wLen && j == aLen;
    }
}
```

