# + Binary Search

### [1102. Path With Maximum Minimum Value](https://leetcode.com/problems/path-with-maximum-minimum-value/)

Given an `m x n` integer matrix `grid`, return *the maximum **score** of a path starting at* `(0, 0)` *and ending at* `(m - 1, n - 1)` moving in the 4 cardinal directions.

The **score** of a path is the minimum value in that path.

- For example, the score of the path `8 → 4 → 5 → 9` is `4`.

```java
// 4 directions to a cell's possible neighbors.
public int[][] dirs = new int[][] {
        { 1, 0 },
        { -1, 0 },
        { 0, 1 },
        { 0, -1 },
};

public int maximumMinimumPath(int[][] grid) {
    int R = grid.length, C = grid[0].length;
    int left = 0, right = Math.min(grid[0][0], grid[R - 1][C - 1]);

    while (left < right) {
        // Get the middle value between left and right boundaries.
        int middle = (right + left + 1) / 2;

        // Check if we can find a path of value equals middle, and cut
        // the search space by half.
        if (pathExists(grid, middle)) {
            left = middle;
        } else {
            right = middle - 1;
        }
    }

    // Once the left and right boundaries coincide, we find the target value,
    // that is, the maximum value of a path.
    return left;
}

// Check if we can find a path of value equals val.
private boolean pathExists(int[][] grid, int val) {
    int R = grid.length, C = grid[0].length;

    // Maintain the visited status of each cell. Initialize the status of
    // all the cells as false (unvisited).
    boolean[][] visited = new boolean[R][C];

    // Put the starting cell grid[0][0] in the deque and mark it as visited.
    Queue<int[]> deque = new LinkedList<>();
    deque.offer(new int[] { 0, 0 });
    visited[0][0] = true;

    // While we still have cells of value larger than or equal to val.
    while (!deque.isEmpty()) {
        int[] curGrid = deque.poll();
        int curRow = curGrid[0];
        int curCol = curGrid[1];

        // If the current cell is the bottom-right cell, return true.
        if (curRow == R - 1 && curCol == C - 1) {
            return true;
        }
        for (int[] dir : dirs) {
            int newRow = curRow + dir[0];
            int newCol = curCol + dir[1];

            // Check if the current cell has any unvisited neighbors with value larger
            // than or equal to val.
            if (0 <= newRow &&
                    newRow < R &&
                    0 <= newCol &&
                    newCol < C &&
                    visited[newRow][newCol] == false &&
                    grid[newRow][newCol] >= val) {
                // If so, we put this neighbor to the deque and mark it as visited.
                visited[newRow][newCol] = true;
                deque.offer(new int[] { newRow, newCol });
            }
        }
    }
    return false;
}
```

