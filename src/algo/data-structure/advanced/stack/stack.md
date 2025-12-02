# Stack

### [631. Design Excel Sum Formula](https://leetcode.com/problems/design-excel-sum-formula/)

Design the basic function of **Excel** and implement the function of the sum formula.

Implement the `Excel` class:

- `Excel(int height, char width)` Initializes the object with the `height` and the `width` of the sheet. The sheet is an integer matrix `mat` of size `height x width` with the row index in the range `[1, height]` and the column index in the range `['A', width]`. All the values should be **zero** initially.

- `void set(int row, char column, int val)` Changes the value at `mat[row][column]` to be `val`.

- `int get(int row, char column)` Returns the value at `mat[row][column]`.

- ```
  int sum(int row, char column, List<String> numbers)
  ```

   Sets the value at `mat[row][column]`  to be the sum of cells represented by `numbers` and returns the value at `mat[row][column]`. This sum formula should exist until this cell is overlapped by another value or another sum formula. `numbers[i]` could be on the format:

  - `"ColRow"` that represents a single cell.
    - For example, `"F7"` represents the cell `mat[7]['F']`.
  - `"ColRow1:ColRow2"` that represents a range of cells. The range will always be a rectangle where `"ColRow1"` represent the position of the top-left cell, and `"ColRow2"` represents the position of the bottom-right cell.
    - For example, `"B3:F7"` represents the cells `mat[i][j]` for `3 <= i <= 7` and `'B' <= j <= 'F'`.

**Note:** You could assume that there will not be any circular sum reference.

- For example, `mat[1]['A'] == sum(1, "B")` and `mat[1]['B'] == sum(1, "A")`.

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

## 括号

### 最长有效括号



```java
public int longestValidParentheses(String s) {
    int n = s.length();
    int ans = 0;
    Deque<Integer> stack = new ArrayDeque<>();
    stack.push(-1);
    for (int i = 0; i < n; i++) {
        if (s.charAt(i) == '(') {
            stack.push(i);
        } else {
            stack.pop();
            if (stack.isEmpty()) {
                stack.push(i);
            } else {
                ans = Math.max(ans, i - stack.peek());
            }
        }
    }
    
    return ans;
}

```

