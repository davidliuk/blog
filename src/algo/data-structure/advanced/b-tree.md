# B-Tree

### [729. My Calendar I](https://leetcode.com/problems/my-calendar-i/)

You are implementing a program to use as your calendar. We can add a new event if adding the event will not cause a **double booking**.

A **double booking** happens when two events have some non-empty intersection (i.e., some moment is common to both events.).

The event can be represented as a pair of integers `startTime` and `endTime` that represents a booking on the half-open interval `[startTime, endTime)`, the range of real numbers `x` such that `startTime <= x < endTime`.

Implement the `MyCalendar` class:

- `MyCalendar()` Initializes the calendar object.
- `boolean book(int startTime, int endTime)` Returns `true` if the event can be added to the calendar successfully without causing a **double booking**. Otherwise, return `false` and do not add the event to the calendar.

```java
class MyCalendar {
    TreeMap<Integer, Integer> calendar;

    MyCalendar() {
        this.calendar = new TreeMap();
    }

    public boolean book(int start, int end) {
        // Check for overlapping with previous event
        Integer prev = calendar.floorKey(start);
        if (prev != null && calendar.get(prev) > start) {
            return false;
        }
        // Check for overlapping with next event
        Integer next = calendar.ceilingKey(start);
        if (next != null && end > next) {
            return false;
        }
        calendar.put(start, end);
        return true;
    }
}

/**
 * Your MyCalendar object will be instantiated and called as such:
 * MyCalendar obj = new MyCalendar();
 * boolean param_1 = obj.book(startTime,endTime);
 */
```

