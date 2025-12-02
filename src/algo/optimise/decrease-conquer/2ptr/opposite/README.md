# 逆向双指针

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

### [349. Intersection of Two Arrays](https://leetcode.com/problems/intersection-of-two-arrays/)

Given two integer arrays `nums1` and `nums2`, return *an array of their intersection*. Each element in the result must be **unique** and you may return the result in **any order**.

```java
int[] intersection(int[] nums1, int[] nums2) {
    Arrays.sort(nums1);
    Arrays.sort(nums2);

    Set<Integer> intersection = new HashSet<>();

    int i = 0, j = 0;
    while (i < nums1.length && j < nums2.length) {
        if (nums1[i] == nums2[j]) {
            intersection.add(nums1[i++]);
            j++;
        } else if (nums1[i] < nums2[j]) {
            i++;
        } else {
            j++;
        }
    }

    int[] result = new int[intersection.size()];
    int k = 0;
    for (int x: intersection) {
        result[k++] = x;
    }

    // Return the result
    return result;
}
```

