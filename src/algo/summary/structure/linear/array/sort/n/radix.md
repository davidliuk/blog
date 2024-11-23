# Radix Sort

基数排序

基数排序法是属于稳定性的排序，其时间复杂度为O (nlog(r)m)，其中r为所采取的基数，而m为堆数，可以认为是线性复杂度，在某些时候，基数排序法的效率高于其它的稳定性排序法。

将所有待比较数值（正整数）统一为同样的数位长度，数位较短的数前面补零。然后，从最低位开始，依次进行一次排序。这样从最低位排序一直到最高位排序完成以后，数列就变成一个有序序列。

- 最低位优先(Least Significant Digit first) LSD：先从kd开始排序，再对kd-1进行排序，依次重复，直到对k1排序后便得到一个有序序列。

- 最高位优先(Most Significant Digit first) MSD：先按k1排序分组，同一组中记录，关键码k1相等，再对各组按k2排序分成子组，之后，对后面的关键码继续这样的排序分组，直到按最次位关键码kd对各子组排序后。再将各组连接起来，便得到一个有序序列。

LSD的基数排序适用于位数小的数列，如果位数多的话，使用MSD的效率会比较好。MSD的方式与LSD相反，是由高位数为基底开始进行分配，但在分配之后并不马上合并回一个数组中，而是在每个“桶子”中建立“子桶”，将每个桶子中的数值按照下一数位的值分配到“子桶”中。在进行完最低位数的分配后再合并回单一的数组中。

位基数排序

从高位往下扫描，把与为1的放到数组后面，与为0的放到数组前面 然后对这两部分继续进行位基数排序 直到扫描完成或者部分长度位0 某些位是没必要扫描的，因为全是1或者全是0，我们可以用该部分所有数的 ~或|与 来得出不需要扫描的位 这样就可以跳过部分扫描

```c++
void baseSort(int[] nums, int start, int end, int bit) {
    if (start >= end || bit == 0) {
        return;
    }

    int[] temp = Arrays.copyOfRange(nums, start, end + 1);
    int left = start, right = end;

    for (int num : temp) {
        if ((num & bit) != 0) {
            nums[right--] = num;
        } else {
            nums[left++] = num;
        }
    }

    baseSort(nums, start, left - 1, bit >> 1);
    baseSort(nums, right + 1, end, bit >> 1);
}
```





```java
class Solution {
    public int maximumGap(int[] nums) {
        int n = nums.length;
        if (n < 2) {
            return 0;
        }
        long exp = 1;
        int[] buf = new int[n];
        int maxVal = Arrays.stream(nums).max().getAsInt();

        while (maxVal >= exp) {
            int[] cnt = new int[10];
            for (int i = 0; i < n; i++) {
                int digit = (nums[i] / (int) exp) % 10;
                cnt[digit]++;
            }
            for (int i = 1; i < 10; i++) {
                cnt[i] += cnt[i - 1];
            }
            for (int i = n - 1; i >= 0; i--) {
                int digit = (nums[i] / (int) exp) % 10;
                buf[cnt[digit] - 1] = nums[i];
                cnt[digit]--;
            }
            System.arraycopy(buf, 0, nums, 0, n);
            exp *= 10;
        }

        int ret = 0;
        for (int i = 1; i < n; i++) {
            ret = Math.max(ret, nums[i] - nums[i - 1]);
        }
        return ret;
    }
}
```

