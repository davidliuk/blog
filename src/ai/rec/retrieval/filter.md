# Bloom Filter

## 曝光过滤问题

- 如果用户看过某个物品，则不再把该物品曝光给该用户。

- 对于每个用户，记录已经曝光给他的物品。（小红书只召回1个月以内的笔记，因此只需要记录每个用户最近1个月的曝光历史。)

- 对于每个召回的物品，判断它是否已经给该用户曝光过，排除掉曾经曝光过的物品。

- 一位用户看过个物品，本次召回r个物品，如果暴力对比，需要O(nr)的时间

## Bloom filter

> 参考文献：
>
> - Burton H.Bloom.Space/time trade-offs in hash coding with allowable errors.Communications of the ACM.1970

- Bloom filter 判断一个物品ID是否在已曝光的物品集合中。
- 如果判断为no，那么该物品一定不在集合中。
- 如果判断为yes，那么该物品很可能在集合中。（可能误伤错误判断未曝光物品为已曝光，将其过滤掉。)
- Bloom filter把物品集合表征为一个m维二进制向量。
- 每个用户有一个曝光物品的集合，表征为一个向量，需要bit的存储。
- Bloom filter有k个哈希函数，每个哈希函数把物品ID映射成介于0和m-1之间的整数。

### Bloom Filter (k=1)

![image-20250825115442875](https://gcore.jsdelivr.net/gh/davidliuk/images@master/image-20250825115442875.png)

### Bloom Filter (k=1)

![image-20250825115544159](https://gcore.jsdelivr.net/gh/davidliuk/images@master/image-20250825115544159.png)

- 曝光物品集合大小为n,二进制向量维度为m,使用k个哈希函数。
- Bloom filter误伤的概率为$\delta≈(1-\exp(-\frac{kn}{m}))^k$
  - n越大，向量中的1越多，误伤概率越大。（未曝光物品的k个位置恰好都是1的概率大。)
  - m越大，向量越长，越不容易发生哈希碰撞。
  - k太大、太小都不好，k有最优取值。
- 设定可容忍的误伤概率为 $\delta$，那么最优参数为：
  - $k=1.44\cdot\ln(\frac{1}{\delta})$
  - $m=2n\cdot\ln(\frac{1}{\delta})$

曝光过滤的链路

![image-20250825115950197](https://gcore.jsdelivr.net/gh/davidliuk/images@master/image-20250825115950197.png)

缺点

- Bloom filter把物品的集合表示成一个二进制向量o
- 每往集合中添加一个物品，只需要把向量飞个位置的元素置为1。（如果原本就是1，则不变。)
- Bloom filter只支持添加物品，不支持删除物品。从集合中移除物品，无法消除它对向量的影响。
- 每天都需要从物品集合中移除年龄大于1个月的物品（超龄物品不可能被召回，没必要把它们记录在Bloom filter，降低n可以降低误伤率。)

（如果需要过期的话，比如说30天过期，也许可以30个bloom filter滚动过期），或者每天重算一次