---
title: Convolutional Neural Networks
description: CNN fundamentals through locality, weight sharing, receptive fields, downsampling, and architecture design.
icon: image
---

# Convolutional Neural Networks

CNN 把两个归纳偏置写进模型：**局部连接**假设附近像素关系更重要，**权重共享**让同一模式可以在不同位置被检测。

## Convolution

对二维输入，kernel 在空间位置滑动，对局部 patch 做加权聚合。输出尺寸取决于 input、kernel、padding、stride 和 dilation：

$$
H_{out} = \left\lfloor \frac{H + 2P - D(K-1) - 1}{S} + 1 \right\rfloor
$$

分析网络时同时追踪：

- tensor shape 与 channel 数；
- receptive field；
- spatial resolution；
- FLOPs、activation memory 与 parameter count。

## Feature Hierarchy

```text
edges / textures → local parts → object-level patterns → task representation
```

更深层不保证自动获得语义；训练目标、数据和 architecture 决定表示学到什么。

## Downsampling

| Method | Strength | Risk |
| --- | --- | --- |
| Pooling | 简单、无参数、增强局部不变性 | 丢失精确位置信息 |
| Strided convolution | 下采样同时学习变换 | aliasing 与额外参数 |
| Dilated convolution | 扩大 receptive field，保留分辨率 | sampling grid artifact |

## Architecture Questions

1. 任务需要 translation invariance 还是精确定位？
2. 小目标是否会在早期下采样中消失？
3. Batch size 很小时 normalization 怎样选择？
4. Skip connection 是否帮助梯度和多尺度信息流？
5. 数据增强是否保留 label semantics？

## Notes

- [CNN Models](./models.md)
