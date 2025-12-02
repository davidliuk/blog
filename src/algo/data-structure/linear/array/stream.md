# Stream

### [158. Read N Characters Given read4 II - Call Multiple Times](https://leetcode.com/problems/read-n-characters-given-read4-ii-call-multiple-times/)

Given a `file` and assume that you can only read the file using a given method `read4`, implement a method `read` to read `n` characters. Your method `read` may be **called multiple times**.

**Method read4:**

The API `read4` reads **four consecutive characters** from `file`, then writes those characters into the buffer array `buf4`.

The return value is the number of actual characters read.

Note that `read4()` has its own file pointer, much like `FILE *fp` in C.

**Definition of read4:**

```
    Parameter:  char[] buf4
    Returns:    int

buf4[] is a destination, not a source. The results from read4 will be copied to buf4[].
```

Below is a high-level example of how `read4` works:

**Method read:**

By using the `read4` method, implement the method read that reads `n` characters from `file` and store it in the buffer array `buf`. Consider that you cannot manipulate `file` directly.

The return value is the number of actual characters read.

**Definition of read:**

```
    Parameters:	char[] buf, int n
    Returns:	int

buf[] is a destination, not a source. You will need to write the results to buf[].
```

**Note:**

- Consider that you cannot manipulate the file directly. The file is only accessible for `read4` but not for `read`.
- The read function may be **called multiple times**.
- Please remember to **RESET** your class variables declared in Solution, as static/class variables are persisted across multiple test cases. Please see [here](https://leetcode.com/faq/) for more details.
- You may assume the destination buffer array, `buf`, is guaranteed to have enough space for storing `n` characters.
- It is guaranteed that in a given test case the same buffer `buf` is called by `read`.

```java
/**
 * The read4 API is defined in the parent class Reader4.
 *     int read4(char[] buf4); 
 */
public class Solution extends Reader4 {
    char[] buf4 = new char[4];
    int buf4Cnt = 0;
    int buf4Idx = 0;

    /**
     * @param buf Destination buffer
     * @param n   Maximum number of characters to read
     * @return    The number of characters read
     */
    public int read(char[] buf, int n) {
        int ptr = 0;

        while (ptr < n) {
            if (buf4Idx < buf4Cnt) {
                // Consume remaining characters from previous read4 call
                buf[ptr++] = buf4[buf4Idx++];
            } else {
                // Buffer is empty, read new data
                buf4Cnt = read4(buf4);
                buf4Idx = 0;
                if (buf4Cnt == 0) {
                    // no more data to consume from stream
                    break;
                }
            }
        }
        return ptr;
    }
}
```

