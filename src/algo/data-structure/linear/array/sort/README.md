# Sort 

排序

快速排序、归并排序

## 分类

按时间复杂度分类

- O(n)

  如，基数排序、桶排序、计数排序

- O(nlogn)

  如，快速排序、归并排序、堆排序

- O(n2)

  如，插入排序、简单选择排序、简单希尔排序

- 其他

  优化希尔排序可以达到O(n^7/6)但是仍然没有Onlogn优秀，故一般不采纳

按排序方式分类

- 基于交换类

  效率的上限就是Onlogn

- 非交换类

  效率的上限可以是On

按稳定性分类

- 稳定排序

  如，归并排序、桶排序

- 非稳定排序

  如，快速排序、堆排序

## 分类

- **稳定**：如果 A 原本在 B 前面，而 A=B，排序之后 A 仍然在 B 的前面。
  - On2: Bubble Sort, Insertion Sort
  - Onlogn: Merge Sort
  - On: Counting Sort, Radix Sort, Bucket Sort

- **不稳定**：如果 A 原本在 B 的前面，而 A=B，排序之后 A 可能会出现在 B 的后面。
  - On2: Selection Sort, Shell Sort
  - Onlogn: Quick Sort, Heap Sort

---


- **内排序**：所有排序操作都在内存中完成。
- **外排序**：由于数据太大，因此把数据放在磁盘中，而排序通过磁盘和内存的数据传输才能进行。





