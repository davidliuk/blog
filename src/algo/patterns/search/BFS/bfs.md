

### [339. Nested List Weight Sum](https://leetcode.com/problems/nested-list-weight-sum/)

You are given a nested list of integers `nestedList`. Each element is either an integer or a list whose elements may also be integers or other lists.

The **depth** of an integer is the number of lists that it is inside of. For example, the nested list `[1,[2,2],[[3],2],1]` has each integer's value set to its **depth**.

Return *the sum of each integer in* `nestedList` *multiplied by its **depth***.

```java
int depthSum(List<NestedInteger> nestedList) {
    Queue<NestedInteger> queue = new LinkedList<>();
    queue.addAll(nestedList);

    int depth = 1;
    int total = 0;

    while (!queue.isEmpty()) {
        int size = queue.size();
        for (int i = 0; i < size; i++) {
            NestedInteger nested = queue.poll();
            if (nested.isInteger()) {
                total += nested.getInteger() * depth;
            } else {
                queue.addAll(nested.getList());
            }
        }
        depth++;
    }
    return total;
}

```

