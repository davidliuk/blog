# 3 Pointers

三路归并+去重

```java
List<Integer> mergeThreeArrays(int[] arr1, int[] arr2, int[] arr3) {
    List<Integer> result = new ArrayList<>();
    int i = 0, j = 0, k = 0;

    // 只要任何一个数组还有剩余，就继续
    while (i < arr1.length || j < arr2.length || k < arr3.length) {
        // 使用 Long 哨兵处理越界，避免复杂的 if (i < len && j < len ...) 判断
        long v1 = (i < arr1.length) ? arr1[i] : Long.MAX_VALUE;
        long v2 = (j < arr2.length) ? arr2[j] : Long.MAX_VALUE;
        long v3 = (k < arr3.length) ? arr3[k] : Long.MAX_VALUE;

        // 1. 找最小
        long min = Math.min(v1, Math.min(v2, v3));

        // 2. 存入结果（去重：仅当结果集为空或末尾元素不等于 min 时加入）
        if (result.isEmpty() || result.get(result.size() - 1) != min) {
            result.add((int) min);
        }

        // 3. 优雅核心：所有等于最小值的指针全部前移
        // 相比之前的 if-else，这里同时处理了多个数组有相同值的情况
        if (v1 == min) i++;
        if (v2 == min) j++;
        if (v3 == min) k++;
    }

    return result;
}
```

