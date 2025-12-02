# Two Pointers

核心思路：利用单调性，不走回头路，使 On2 -> On

按方向划分：

- 同向

- 相向

- 背向

  - 判断回文串、中心往外扩散

- 平行

  - 两个序列，匹配类
  - 一个矩阵，Z型遍历

按逻辑划分：

> 方向：同向、相向、背向、平行均可以

- 同向：每轮循环中，j走一步，满足条件时i走若干步，i的总步数往往小于j
  - 累积
    - 滑动窗口
  - 数对
    - 去重
    - 端点
    - 匹配
    - 划分
- 逆向：每轮循环中，满足条件时i走一步，不满足条件时j走一步
  - 累积
    - 前后缀
  - 数对
    - 2Sum
    - merge
    - Z 型遍历
    - 翻转
      - partition

## 同向双指针

每轮循环中，j走一步，满足条件时i走若干步，i的总步数往往小于j

```java
// [i, j], i是，在右边界为j时，符合条件下最靠左的位置
for (int i = 0, j = 0; j < n; j++) {
    // 操作1: add
    while (i < j && check(i, j)) {
        // 答案1
        // 操作2: remove
        i++;
    }
    // 答案2
}
```

eg. 快排、归并、KMP 都是

### 滑窗双指针

同向双指针之间的窗口始终维护一个性质，如和、积、元素种类数等

## 逆向双指针

每轮循环中，满足条件时i走一步，不满足条件时j走一步

- 同向遍历
- 相向遍历
- Z 形遍历

```java
void oppositePtr(int i, int j,
                 Comparator<Integer> cmp, 
                 BiComsumer<Integer, Integer> do) {
    while (i < j) {
        int c = cmp.compare(i, j);
        
        if (c < 0) {
            i++;
        } else if (c > 0) {
            j--;
        } else { // c == 0
            do.accept(i++, j--);
        }
    }
}
```

---

- 同向双指针

  - 数对
  - 滑窗
  - 匹配

- 逆向双指针（相向）

  - 2Sum
