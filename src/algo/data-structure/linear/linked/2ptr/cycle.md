# Cycle Detection



### [202. Happy Number](https://leetcode.com/problems/happy-number/)

```java
public boolean isHappy(int n) {
    int p = n, q = n;
    while (q != 1 && getNext(q) != 1) {
        p = getNext(p);
        q = getNext(getNext(q));
        if (p == q) {
            return false;
        }
    }
    return true;
}

public int getNext(int n) {
    int sum = 0;
    while (n > 0) {
        sum += (n % 10) * (n % 10);
        n = n / 10;
    }
    return sum;
}
```

```java
public boolean isHappy(int n) {
    Set<Integer> seen = new HashSet<>();
    while (!seen.contains(n)) {
        seen.add(n);
        int sum = 0;
        while (n > 0) {
            sum += (n % 10) * (n % 10);
            n /= 10;
        }
        n = sum;
    }

    return n == 1;
}
```

