# Suffix

## Suffix Sum

## 1D

`sufSum[i]`表示第i个元素到末尾的和

```java
int[] sufSum = new int[n + 1];
for (int i = n - 1; i >= 0; i--) {
    sufSum[i] = nums[i] + sufSum[i + 1];
}
```

## 2D

`sufSum[i][j]`表示[i,j]到[n-1,m-1]之间元素的和

```java
int[] sufSum = new int[m + 1][n + 1];
for (int i = m - 1; i >= 0; i--) {
    for (int j = n - 1; j >= 0; j--) {
        sufSum[i][j] = nums[i][j] + sufSum[i + 1][j] + sufSum[i][j + 1] - sufSum[i + 1][j + 1];
    }
}
```

