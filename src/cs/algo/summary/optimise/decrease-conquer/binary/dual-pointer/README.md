# 双指针



核心思想：

不走回头路，On2 -> On



同向双指针

```java
// [j, i], j是i符合条件下最靠左的位置
for (int i = 0, j = 0; i < n; i++) {
    
    while (i <= j && check(i, j)) {
        j++;
    }
    // 这个题的操作
}
```

快排、归并、KMP都是



逆向双指针：针对一个判断函数，一个指针动，另一个指针不动

- 同向遍历
- 相向遍历
- Z形遍历

滑窗双指针：窗口中始终维护一个性质





