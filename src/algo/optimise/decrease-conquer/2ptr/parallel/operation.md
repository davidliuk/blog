# Operation

### [67. Add Binary](https://leetcode.com/problems/add-binary/)

二进制加法

```java
String addBinary(String a, String b) {
    int n = a.length(), m = b.length();

    StringBuilder sb = new StringBuilder();
    int i = n - 1, j = m - 1, carry = 0;
    while (i >= 0 || j >= 0 || carry > 0) {
        int sum = carry;
        if (i >= 0)
            sum += a.charAt(i--) - '0';
        if (j >= 0)
            sum += b.charAt(j--) - '0';

        sb.append(sum % 2);
        carry = sum / 2;
    }

    sb.reverse();
    return sb.toString();
}
```

### [415. Add Strings](https://leetcode.com/problems/add-strings/)

十进制加法

```java
String addStrings(String num1, String num2) {
    int n = num1.length(), m = num2.length();

    StringBuilder sb = new StringBuilder();
    int i = n - 1, j = m - 1, carry = 0;
    while (i >= 0 || j >= 0 || carry > 0) {
        int sum = carry;
        if (i >= 0) {
            sum += num1.charAt(i--) - '0';
        }
        if (j >= 0) {
            sum += num2.charAt(j--) - '0';
        }

        sb.append(sum % 10);
        carry = sum / 10;
    }

    sb.reverse();
    return sb.toString();
}
```

### [2. Add Two Numbers](https://leetcode.com/problems/add-two-numbers/)

```java
ListNode addTwoNumbers(ListNode l1, ListNode l2) {
    ListNode dummy = new ListNode();
    ListNode p = dummy, p1 = l1, p2 = l2;
    int carry = 0;
    while (p1 != null || p2 != null || carry != 0) {
        int sum = carry;
        if (p1 != null) {
            sum += p1.val;
            p1 = p1.next;
        }
        if (p2 != null) {
            sum += p2.val;
            p2 = p2.next;
        }
        p.next = new ListNode(sum % 10);
        p = p.next;
        carry = sum / 10;
    }
    return dummy.next;
}
```

### [43. Multiply Strings](https://leetcode.com/problems/multiply-strings/)

```java
String multiply(String num1, String num2) {
    if ("0".equals(num1) || "0".equals(num2)) {
        return "0";
    }

    int m = num1.length(), n = num2.length();
    int[] pos = new int[m + n];

    for (int i = m - 1; i >= 0; i--) {
        int x = num1.charAt(i) - '0';
        for (int j = n - 1; j >= 0; j--) {
            int y = num2.charAt(j) - '0';
            int mul = x * y;
            int p1 = i + j, p2 = i + j + 1;
            int sum = mul + pos[p2];

            pos[p2] = sum % 10;
            pos[p1] += sum / 10;
        }
    }

    StringBuilder sb = new StringBuilder();
    for (int p : pos) {
        if (!(sb.length() == 0 && p == 0)) {
            sb.append(p);
        }
    }
    return sb.toString();
}
```

### [66. Plus One](https://leetcode.com/problems/plus-one/)

```java
public int[] plusOne(int[] digits) {
    int n = digits.length;

    for (int i = n - 1; i >= 0; i--) {
        if (digits[i] == 9) {
            digits[i] = 0;
        } else {
            digits[i]++;
            return digits;
        }
    }

    // We're here because all the digits are nines
    digits = new int[n + 1];
    digits[0] = 1;
    return digits;
}
```

### [369. Plus One Linked List](https://leetcode.com/problems/plus-one-linked-list/)

```java
public ListNode plusOne(ListNode head) {
    // dummy head
    ListNode dummy = new ListNode(0);
    dummy.next = head;
    ListNode notNine = dummy;

    // find the rightmost not-nine digit
    while (head != null) {
        if (head.val != 9) {
            notNine = head;
        }
        head = head.next;
    }

    // increase this rightmost not-nine digit by 1
    notNine.val++;
    notNine = notNine.next;

    // set all the following nines to zeros
    while (notNine != null) {
        notNine.val = 0;
        notNine = notNine.next;
    }

    return dummy.val != 0 ? dummy : dummy.next;
}
```

### [2816. Double a Number Represented as a Linked List](https://leetcode.com/problems/double-a-number-represented-as-a-linked-list/)

```java
public ListNode doubleIt(ListNode head) {
    // If the value of the head p is greater than 4, 
    // insert a new p at the beginning
    if (head.val > 4) {
        head = new ListNode(0, head);
    }

    // Traverse the linked list
    for (ListNode p = head; p != null; p = p.next) {
        // Double the value of the current p 
        // and update it with the units digit
        p.val = (p.val * 2) % 10;

        // If the current p has a next p 
        // and the next p's value is greater than 4,
        // increment the current p's value to handle carry
        if (p.next != null && p.next.val >= 5) {
            p.val++;
        }
    }

    return head;
}
```

### [445. Add Two Numbers II](https://leetcode.com/problems/add-two-numbers-ii/)

```java
ListNode addTwoNumbers(ListNode l1, ListNode l2) {
    ListNode result = addTwoNumbersRev(reverseList(l1), reverseList(l2));
    reverseList(l1);
    reverseList(l2);
    return reverseList(result);
}

public ListNode addTwoNumbersRev(ListNode l1, ListNode l2) {
    ListNode dummy = new ListNode();
    ListNode p = dummy, p1 = l1, p2 = l2;
    int carry = 0;
    while (p1 != null || p2 != null || carry != 0) {
        int val = carry;
        if (p1 != null) {
            val += p1.val;
            p1 = p1.next;
        }
        if (p2 != null) {
            val += p2.val;
            p2 = p2.next;
        }
        carry = val / 10;
        p.next = new ListNode(val % 10);
        p = p.next;
    }
    return dummy.next;
}

public ListNode reverseList(ListNode head) {
    if (head == null) {
        return null;
    }
    ListNode dummy = new ListNode(-1, head);
    ListNode prev = dummy;
    ListNode curr = prev.next;
    // 其实这里的null是终止条件
    // 完全可以改成某一个节点，这样就在这个节点前面停下来
    while (curr.next != null) {
        // 将curr的下一个节点挪到dummy的next
        ListNode next = curr.next;
        // 将 next 移除
        curr.next = next.next;
        // 将 next 插入 prev 后面
        next.next = prev.next;
        prev.next = next;
    }

    return dummy.next;
}
```

### [1634. Add Two Polynomials Represented as Linked Lists](https://leetcode.com/problems/add-two-polynomials-represented-as-linked-lists/)

```java
public PolyNode addPoly(PolyNode poly1, PolyNode poly2) {
    PolyNode dummy = new PolyNode();
    PolyNode p = dummy; // last node
    PolyNode p1 = poly1, p2 = poly2;

    // Maintain two pointers
    while (p1 != null && p2 != null) {
        if (p1.power == p2.power) {
            if (p1.coefficient + p2.coefficient != 0) {
                p.next = new PolyNode(
                        p1.coefficient + p2.coefficient,
                        p1.power);
                p = p.next;
            }
            p1 = p1.next;
            p2 = p2.next;
        } else if (p1.power > p2.power) {
            p.next = p1;
            p1 = p1.next;
            p = p.next;
        } else {
            p.next = p2;
            p2 = p2.next;
            p = p.next;
        }
    }
    if (p1 == null) {
        p.next = p2;
    } else {
        p.next = p1;
    }
    return dummy.next;
}
```

