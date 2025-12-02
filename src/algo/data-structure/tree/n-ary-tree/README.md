# N-ary Tree

### [428. Serialize and Deserialize N-ary Tree](https://leetcode.com/problems/serialize-and-deserialize-n-ary-tree/)

Serialization is the process of converting a data structure or object into a sequence of bits so that it can be stored in a file or memory buffer, or transmitted across a network connection link to be reconstructed later in the same or another computer environment.

Design an algorithm to serialize and deserialize an N-ary tree. An N-ary tree is a rooted tree in which each node has no more than N children. There is no restriction on how your serialization/deserialization algorithm should work. You just need to ensure that an N-ary tree can be serialized to a string and this string can be deserialized to the original tree structure.

For example, you may serialize the following `3-ary` tree

![img](https://assets.leetcode.com/uploads/2018/10/12/narytreeexample.png)

 

as `[1 [3[5 6] 2 4]]`. Note that this is just an example, you do not necessarily need to follow this format.

Or you can follow LeetCode's level order traversal serialization format, where each group of children is separated by the null value.

![img](https://assets.leetcode.com/uploads/2019/11/08/sample_4_964.png)

 

For example, the above tree may be serialized as `[1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]`.

You do not necessarily need to follow the above-suggested formats, there are many more different formats that work so please be creative and come up with different approaches yourself.

```java
public String serialize(Node root) {
    if (root == null) {
        return "";
    }

    StringBuilder ans = new StringBuilder();
    dfs(root, ans);
    return ans.toString();
}

// 前序遍历生成的字符串
private void dfs(Node root, StringBuilder ans) {
    if (root == null) {
        return;
    }

    ans.append("[");
    ans.append(root.val);
    for (Node child : root.children) {
        dfs(child, ans);
    }
    ans.append("]");
}
```

```java
// Removed global var to make Codec stateless
public Node deserialize(String data) {
    if (data.length() == 0) {
        return null;
    }
	// Use array to pass by reference
    return solve(data, new int[]{0});
}

// 前序遍历
public Node solve(String data, int[] index) {
    index[0]++; // Skip opening bracket '['
    int num = getDigits(data, index);
    Node node = new Node(num, new ArrayList<>()); // Initialize children list

    while (index[0] < data.length()) {
        char c = data.charAt(index[0]);
        if (c == '[') {
            node.children.add(solve(data, index));
        } else if (c == ']') {
            // 这层的节点结束
            index[0]++; // Skip closing bracket ']'
            return node;
        }
    }

    // 出现异常输入有误或者确实是空节点
    return node;
}

// 先序：FOR：访问
public int getDigits(String src, int[] index) {
    int ret = 0;
    while (index[0] < src.length() && Character.isDigit(src.charAt(index[0]))) {
        ret = ret * 10 + src.charAt(index[0]) - '0';
        index[0]++;
    }
    return ret;
}
```

```java
public Node deserialize(String data) {
    if (data.length() == 0) {
        return null;
    }

    // Use stack-based iterative approach instead of recursion
    Deque<Node> stack = new ArrayDeque<>();
    int index = 0;

    while (index < data.length()) {
        char c = data.charAt(index);
        if (c == '[') {
            index++; // skip '['
            int num = 0;
            while (index < data.length() && Character.isDigit(data.charAt(index))) {
                num = num * 10 + data.charAt(index) - '0';
                index++;
            }
            Node node = new Node(num, new ArrayList<>());
            stack.push(node);
        } else if (c == ']') {
            Node node = stack.pop();
            if (stack.isEmpty()) {
                return node;
            }
            stack.peek().children.add(node);
            index++;
        } else { // ','
            index++;
        }
    }

    return stack.isEmpty() ? null : stack.pop();
}
```

### [690. Employee Importance](https://leetcode.com/problems/employee-importance/)

You have a data structure of employee information, including the employee's unique ID, importance value, and direct subordinates' IDs.

You are given an array of employees `employees` where:

- `employees[i].id` is the ID of the `ith` employee.
- `employees[i].importance` is the importance value of the `ith` employee.
- `employees[i].subordinates` is a list of the IDs of the direct subordinates of the `ith` employee.

Given an integer `id` that represents an employee's ID, return *the **total** importance value of this employee and all their direct and indirect subordinates*.

```java
public int getImportance(List<Employee> employees, int id) {
    // Build a map for O(1) employee lookup
    Map<Integer, Employee> employeeMap = new HashMap<>();
    for (Employee e : employees) {
        employeeMap.put(e.id, e);
    }
    return dfs(employeeMap, id);
}

private int dfs(Map<Integer, Employee> map, int id) {
    Employee emp = map.get(id);
    int total = emp.importance;
    for (int sub : emp.subordinates) {
        total += dfs(map, sub);
    }
    return total;
}
```

