# 相向双指针

lc1 Two Sum

```java
int twoSum(int[] nums, int target) {
    int i = 0, j = nums.length - 1;
    while (i < j) {
        if (nums[i] + nums[j] < target) i++
        else (nums[i] + nums[j] > target) j--;
        else return new int{nums[i], nums[j]};
    }
    
    return new int[0];
}

int twoSum(int[] nums, int target) {
    int n = nums.length;
    Map<Integer, Integer> val2idx = new HashMap<>();
    for (int i = 0; i < nums.length; i++) {
		if (val2idx.containsKey(nums[i])) {
            return new int[]{val2idx.get(nums[i]), i};
        }
        val2idx.put(target - nums[i], i);
    }
    
    return new int[0];
}
```

