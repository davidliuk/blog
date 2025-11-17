# Island Problems

三色法/淹没法：可以节省 seen/visited 数组

优先使用DFS，这样淹没完还可以回溯恢复

淹没：

- Lc1254 统计封闭岛屿的数目（从边框出发淹没）
- Lc1905 统计子岛屿

---

lc417. Pacific Atlantic Water Flow — Med.

对于这个题建议还是 dfs

```java
public List<List<Integer>> pacificAtlantic(int[][] heights) {
	int n = height.length, m = height[0].length;
    
}

final static int[] dirs = {{1, 0}, {0, 1}, {-1, 0}, {0, -1}};

void bfs((int[][] heights, Queue<List<Integer>> queue, int[][] seen) {
    int n = height.length, m = height[0].length;
    while (!queue.isEmpty()) {
        List<Integer> point = queue.poll();
        int i = point.get(0), j = point.get(1);
        
        for (int[] dir : dirs) {
            int ni = i + dir[0], nj = j + dir[1];
            if (ni < 0 || ni >= n ||
                nj < 0 || nj >= m || 
                seen[ni][nj] ||
                heights[i][j] > heights[ni][nj]) {
                continue;
            }
            queue.offer(Arrays.asList(ni, nj));
            seen[ni][nj] = true;
        }
    }
}
```

lc79. Word Search — Med

```java
public boolean exist(char[][] board, String word) {
    int n = board.length, m = board[0].length;
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < m; j++) {
            if (dfs(borad, i, j, word, 0)) {
                return true;
            }
        }
    }
    return false;
}

int[][] dirs = {{0, 1}, {0, -1}, {1, 0}, {-1, 0}};

boolean dfs(char[][] board, int i, int j, String word, int k) {
    int n = board.length, m = board[0].length;
    char c = board[i][j];
    if (c != word.charAt(k)) {
        return false;
    }
    
    board[i][j] = '#';
    for (int[] dir : dirs) {
        int ni = i + dir[0], nj = j + dir[1];
        if (ni < 0 || ni >= n || 
            nj < 0 || nj >= m) {
            continue;
        }
        
        if (dfs(board, ni, nj, word, k + 1)) {
            board[i][j] = c;
            return true;
        }
    }
    board[i][j] = c;
    return false;
}
```

lc212. Word Search II — Hard

lc200. Number of Islands — Med.

```java
int number(int[][] grid) {
    int n = grid.length, m = grid[0].length;
    
    int cnt = 0;
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < m; j++) {
            if (grid[i][j] == 1) {
                dfs(grid, i, j);
                cnt++;
            }
        }
    }
    
    return cnt;
}

int[][] dirs = {{1, 0}, {0, 1}, {-1, 0}, {0, -1}};

void dfs(int[][] grid, int i, int j) {
    int n = grid.length, m = grid[0].length;
    
    grid[i][j] = -1;
    for (int[] dir : dirs) {
        int ni = i + dir[0];
        int nj = j + dir[1];
        if (ni < 0 || ni >= n || 
            nj < 0 || nj >= m ||
            grid[ni][nj] != 1) {
            continue;
        }
        dfs(grid, ni, nj);
    }
}
```

