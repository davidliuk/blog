# Map Reduce

那这样的Map reduce系统有什么好处呢？

其实Map Reduce 并没有结余实际上的计算时间总和，但是如果你现在有很多的计算资源（很多台机器），你可以通过 Map Reduce 的框架利用多台机器同时计算，来优化性能进行提速。Map Reduce是一套通用的分布式计算框架。这样，对于很多类似的问题，工程师并不需要每次都去自己构思如何使用多台机器优化计算的算法，只需要套用这个通用框架，就可以快速的解决问题。

（比如：[矩阵分解问题](http://vividfree.github.io/大规模数据处理/2015/11/14/large-scale-matrix-multiplication-using-mapreduce)，[Page Rank搜索排序算法](https://blog.csdn.net/m53931422/article/details/41745175)）

你可能会有疑问，为什么一定要使用Map reduce来分割文件呢，单纯的分割文件分别统计是否可行呢？

其实是不行的。单纯的将文件1丢给机器1，文件2丢给机器2，分别统计 Top K 之后再合并，这种方法是不行的。因为最高频的那一项可能分别出现在文件1和文件2，这样就相当于降低了其出现的频率，可能造成统计结果不对。

---

![img](https://media-test.jiuzhang.com/media/section/MapReduce_3UC1v8Q.png)

95%的题是如何使用Map Reduce，5%的题是如何设计Map Reduce

Interviewer: Count the word frequency of a web page?（单词计数）

方法一：单台机器 for+HashMap

优点：简单；
缺点：只有一台机器一慢、内存大小受限

方法二：多台机器 for+HashMap，一台机器合并算最终结果

合并的时候是Bottle Neck

合并是否也可以并行？可
以什么为标准来划分？机器 or key？key

key 设计无前后依赖性，且系统设计起来简单

MapReduce：

- Map：并行去做
- Reduce：并行合并

master slave，master控制的

Map Reduce是一套实现分布式运算的框架

1. Input

2. Split

3. **Map**

   此时不需要合并，只做key value映射

4. 传输整理（Shuffle）

   Hadoop运行机制中，将map输出进行分区、分组、排序、和合并等处理后作为输入传给Reducer的过程，称为shuffle过程。

   1. Partition sort
   2. Fetch + Merge

5. **Reduce**

6. Output

### 函数接口

他们的输入和输出必须是Key Value形式

Map 输入key: 文章存储地址 Value:文章内容
Reduce 输入key: map 输出的 key Value: map 输出的 value

**关键：Map输出的key value是什么**

```java

```

## 原理

### 传输整理

![img](https://img-blog.csdnimg.cn/a6a8f1e6e0244dbca7c3503dbfa1fcbb.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBASVTot6_kuIrnmoTlhpvlk6U=,size_20,color_FFFFFF,t_70,g_se,x_16)

master 有一个consistency hash，根据这个一致性哈希来分组，分组后对每个组的内部进行排序（由于结果存在硬盘上，所以采用硬盘上的外排序），排序一般以key作为第一关键字、value作为第二关键字。

Reduce会把排好序的文件拿到自己的机器上，如几个机器，然后做**k路归并**，每个key只能被分配到一台机器上

Questions

Q1: Map多少台机器？Reduce多少台机器？

- 全由自己决定。一般1000map,1000 reduce规模

Q2(加分): 机器越多就越好么？

- Advantage:
- 机器越多，那么每台机器处理的就越少，总处理据越快
- Disadvantage:
- 启动机器的时间相应也变长了。

Q3?(加分): 如果不考虑启动时间，

Reduce的机器是越多就一定越快么？

- Key的数目就是reduce的上限（Map Reduce架构的局限性）

shuffle阶段又可以分为Map端的shuffle和Reduce端的shuffle。

Map端的shuffle

写磁盘：Map端会处理输入数据并产生中间结果，这个中间结果会写到本地磁盘，而不是HDFS。每个Map的输出会先写到内存缓冲区中，当写入的数据达到设定的阈值时，系统将会启动一个线程将缓冲区的数据写到磁盘，这个过程叫做spill。

分区、分组、排序：在spill写入之前，会先进行二次排序，首先根据数据所属的partition进行排序，然后每个分区（partition）中的数据再按key来排序。partition的目是将记录划分到不同的Reducer上去，以期望能够达到负载均衡，以后的Reducer就会根据partition来读取自己对应的数据。接着运行combiner(如果设置了的话)，combiner的本质也是一个Reducer，其目的是对将要写入到磁盘上的文件先进行一次处理，这样，写入到磁盘的数据量就会减少。最后将数据写到本地磁盘产生spill文件(spill文件保存在{mapred.local.dir}指定的目录中，Map任务结束后就会被删除)。

文件合并：最后，每个Map任务可能产生多个溢写文件（spill file），在每个Map任务完成前，会通过多路归并算法将这些spill文件归并成一个已经分区和排序的输出文件。至此，Map的shuffle过程就结束了。

压缩：在shuffle过程中如果压缩被启用，在map传出数据传入Reduce之前可执行压缩，默认情况下压缩是关闭的，可以将mapred.compress.map.output设置为true可实现压缩。

Reduce端的shuffle

Reduce端的shuffle主要包括三个阶段，copy、sort(merge)和reduce。

首先要将Map端产生的输出文件拷贝到Reduce端，但每个Reducer如何知道自己应该处理哪些数据呢？因为Map端进行partition的时候，实际上就相当于指定了每个Reducer要处理的数据(partition就对应了Reducer)，所以Reducer在拷贝数据的时候只需拷贝与自己对应的partition中的数据即可。每个Reducer会处理一个或者多个partition，但需要先将自己对应的partition中的数据从每个Map的输出结果中拷贝过来。

接下来就是排序（sort）阶段，也成为合并（merge）阶段，因为这个阶段的主要工作是执行了归并排序。从Map端拷贝到Reduce端的数据都是有序的，所以很适合归并排序。最终在Reduce端生成一个较大的文件作为Reduce的输入。MapReduce编程接口

### 应用练习

#### 统计频率

key: 字符

value: 1

#### 倒排索引

正排索引：文章序号到关键词列表

倒排索引：关键词到文章序号列表

key: 关键词

value: 文章序号

Reduce时可以做一个去重操作

#### Anagram

key: 内部字母排序好的单词

value: 原样字符串

### 设计

Mapper和Reducer是同时工作还是Mapper先工作Reduceri再工作？
Mapper要结束了后Reducer才能运行

运行过程中一个Mapper?或者Reducer:挂了怎么办？
重新分配一台机器做

Reducer-一个机器Key数目特别多怎么办？

加一个random后缀，类似Shard Key，后面再加一个脚本合并

Input和Output存放在哪？

存放在GFS里面

Local Disk上面的Mapper output data有没有必要保存在SFS上面？要是丢了怎么办？

不需要，丢了重做就好

Mapper和Reducer可以放在同一台机器么？

这样设计并不是特别好，Mapper和Reducer之前都有很多需姜预处理的工作。两台机器可以并行的预处理。

---

map的结果会在map端进行sort，这些map端就是hadoop集群里的datanode（slave），并不是专门的机器做sort
