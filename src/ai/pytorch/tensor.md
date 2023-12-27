# Tensor

0: scalar

1: vector

2: matrix

3+: tensor

matrix, tensor 变量一般大写命名

---

rand

zeros

ones

arange, 左闭右开

---

ndim

dtype, 默认是float32

size

Zeros_like

tensor datatype is one of 3 big errors with pytorch & deep learning

1. Tensors not right datatype, `tensor.dtype`
2. Tensors not right shape, `tensor.shape`
3. Tensors not on right device, `tensor.device`
   1. cpu
   2. cuda
   3. tpu

`tensor.type(torch.int64)`强制类型转换

---

### Operation

- Addition

  `+`, `touch.add()`

- Sub

  `-, `touch.sub()`

- Multiplication (element wise) 数乘

  `*`

- Division

  `\`

- Matrix Multiplication 点乘/矩阵乘法

  `@`, `torch.matmul()`, `torch.mm()`

  这个比for快很多`%%time`

- Transpose 转置

  `tensor.T`

Matrix Multiplication的条件

1. **inner dimension** must match
2. resulting matrix has the shape of the **outer dimension**

cat

chunk

### Aggregation

min, max, mean, sum, etc.

- min, 

  `x.min()`, `torch.min(x)`

- max, 

  `x.max()`, `torch.max(x)`

- mean, 

  `x.mean()`, `torch.mean(x)`

- sum

  `x.sum()`, `torch.sum(x)`

- argmin, 找到tensor中min的坐标

  `x.argmin()`

- argmax, 找到tensor中max的坐标

  `x.argmax()`

---

### Shape

reshape

view

stack

squeeze

unsqueeze

Permute

### Indexing

xxx

### Numpy

`torch.from_numpy()`

`x.numpy()`

### Reproducibility

Pseudo random

```python
RANDOM_SEED = 42
Torch.manual_seed(RANDOM_SEED)
touch.rand(3, 4)
```

### GPU

1. **colab**, easiest
2. Buy GPU
3. Cloud Computing

```python
torch.cuda.is_available()

tensor.to(device)
tensor.cpu().numpy()
```

