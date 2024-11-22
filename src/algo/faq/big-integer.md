# Big Integer

高精度

超大的数，

加法

```java
// 高精度加法
public List<Integer> add(List<Integer> A, List<Integer> B) {
    if (A.size() < B.size()) return add(B, A);
    List<Integer> C = new ArrayList<>();
    int t = 0;
    for (int i = 0; i < A.size(); i ++ ) {
        t += A.get(i);
        if (i < B.size()) t += B.get(i);
        C.add(t % 10);
        t /= 10;
    }

    if (t != 0) C.add(t);
    return C;
}
```

```java
// 高精度加法
public List<Integer> add(List<Integer> A, List<Integer> B) {
    List<Integer> C = new ArrayList<>();
    int t = 0;
    for (int i = 0; i < A.size() || i < B.size(); i++) {
        if (i < A.size()) t += A.get(i);
        if (i < B.size()) t += B.get(i);
        C.add(t % 10);
        t /= 10;
    }

    if (t != 0) C.add(t);
    return C;
}
```

```java
// String高精度加法
public String add(String A, String B) {
    StringBuilder C = new StringBuilder();
    int t = 0;
    for (int i = A.length() - 1, j = B.length() - 1; i >= 0 || j >= 0; i--, j--) {
        if (i >= 0) t += A.charAt(i) - '0';
        if (j >= 0) t += B.charAt(j) - '0';
        C.append(t % 10);
        t /= 10;
    }

    if (t != 0) C.append(t);
    return C.reverse().toString();
}
```

```java
// List高精度加法
public ListNode add(LiseNode A, ListNode B) {
    ListNode C = new ListNode(0);
    ListNode head = C;
    int t = 0;
    while (A != null || B != null) {
        if (A != null) t += A.val;
        if (B != null) t += B.val;
        C.next = new ListNode(t % 10);
        t /= 10;
        C = C.next;
        if (A != null) A = A.next;
        if (B != null) B = B.next;
    }

    if (t != 0) C.next = new ListNode(t);
    return head.next;
}
```