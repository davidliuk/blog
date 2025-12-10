# Prefix

- 前缀和：可以 On 预处理，O1 求区间和
- 前缀异或：可以 On 预处理，O1 求区间异或

（用来判断区间里面是否存在一个元素，可以前缀）

## 1D

`preSum[i]`表示前 i 个元素的和

```java
int[] preSum = new int[n + 1];
for (int i = 0; i < n; i++) {
    preSum[i + 1] = nums[i] + preSum[i];
}
```

## 2D

`preSum[i][j]`表示[0,0]到[i-1,j-1]之间元素的和

```java
int[] preSum = new int[n + 1];
for (int i = 0; i < n; i++) {
	for (int j = 0; i < m; j++) {
    	preSum[i + 1][j + 1] = nums[i][j] + preSum[i][j + 1] + preSum[i + 1][j] - preSum[i][j];
    }
}
```
