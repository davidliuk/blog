# HW4



jmp->goto

- The effect of (5a) is to jump to the closest line number
  N1 occurring above the instruction being executed, and

- the effect of (5b) is to jump to the closest line number
  N1 occurring below the instruction being executed.





```
0 1 jmpb 1 1
-1 1 jmpb 2 2
-1 0 gotb 0 3
1 0 clr 0 2
-1 2 assign 0 3
-1 0 clr 0 3
-1 0 add 1 3
4 2 jmpb 1 5
-1 2 jmpb 2 6
-1 0 tail 0 1
-1 0 gota 0 0
5 0 add 1 3
-1 0 tail 0 2
-1 0 gota 0 4
6 0 add 2 3
-1 0 tail 0 2
-1 0 gota 0 4
2 0 clr 0 2
-1 2 assign 0 3
-1 0 clr 0 3
-1 0 add 2 3
7 2 jmpb 1 8
-1 2 jmpb 2 9
-1 0 tail 0 1
-1 0 gota 0 0
8 0 add 1 3
-1 0 tail 0 2
-1 0 gota 0 7
9 0 add 2 3
-1 0 tail 0 2
-1 0 gota 0 7
3 1 assign 0 3
continue
```



```
0 1 8 1 1
-1 1 8 2 2
-1 0 6 0 3
1 0 3 0 2
-1 2 4 0 3
-1 0 3 0 3
-1 0 1 1 3
4 2 8 1 5
-1 2 8 2 6
-1 0 2 0 1
-1 0 5 0 0
5 0 1 1 3
-1 0 2 0 2
-1 0 5 0 4
6 0 1 2 3
-1 0 2 0 2
-1 0 5 0 4
2 0 3 0 2
-1 2 4 0 3
-1 0 3 0 3
-1 0 1 2 3
7 2 8 1 8
-1 2 8 2 9
-1 0 2 0 1
-1 0 5 0 0
8 0 1 1 3
-1 0 2 0 2
-1 0 5 0 7
9 0 1 2 3
-1 0 2 0 2
-1 0 5 0 7
3 1 4 0 3
9

-1 2 4 0 1
-1 3 4 0 1
-1 4 4 0 1
0 3 8 1 1
-1 3 8 2 2
-1 0 6 0 3
1 0 1 1 2
-1 0 2 0 3
-1 0 5 0 0
2 0 1 2 2
-1 0 2 0 3
-1 0 5 0 0
3 4 8 1 4
-1 4 8 2 5
-1 0 6 0 6
4 0 1 1 2
-1 0 2 0 4
-1 0 5 0 3
5 0 1 2 2
-1 0 2 0 4
-1 0 5 0 3
6 1 4 0 2
9
```

