## 矩阵微积分

根据提供的课程讲义，课程并没有单独列出一份通用的“矩阵微积分速查表”，而是通过推导**线性回归（Linear Regression）\**和\**L2 正则化**的梯度，展示了几个核心的求导规则。

以下是讲义中在推导闭式解（Closed-form solution）和梯度下降时所涉及的主要矩阵微积分规则：

### 梯度的线性性质 (Linearity of the Gradient)

这是最基础的规则。讲义明确指出，梯度的运算具有线性性质。这意味着一个求和式的梯度等于各项梯度的和。

- **规则**：$\nabla_\beta (f(\beta) + g(\beta)) = \nabla_\beta f(\beta) + \nabla_\beta g(\beta)$
- **讲义应用**：在计算总损失函数的梯度时，可以将其拆分为“均方误差（MSE）项”和“正则化项”分别求导，然后再相加,。

### 二次型的求导规则 (Gradient of Quadratic Forms)

这是推导线性回归正规方程（Normal Equation）时最重要的规则。

- **规则**：对于向量 $\beta$ 和对称矩阵 $A$（在回归中 $A = X^T X$），二次型函数 $f(\beta) = \beta^T A \beta$ 的梯度为： 
  $$
  \nabla_\beta (\beta^T A \beta) = 2A\beta
  $$

- 讲义应用：

  - 讲义指出均方误差损失函数展开后是一个关于 $\beta$ 的**二次函数（Quadratic function）**，其主导项系数为 $X^T X$。
  - 在推导梯度时，$\frac{1}{n} \beta^T (X^T X) \beta$ 这一项的导数计算结果被显式展示为 $\frac{2}{n} X^T X \beta$。

### 线性项的求导规则 (Gradient of Linear Terms)

- **规则**：对于向量 $\beta$ 和常数向量 $v$（在回归中 $v$ 通常与 $X^T Y$ 相关），线性函数 $f(\beta) = v^T \beta$ 或 $f(\beta) = \beta^T v$ 的梯度为：
  $$
  \nabla_\beta (v^T \beta) = v
  $$

- 讲义应用：

  - 在损失函数展开式中，包含交叉项 $-2Y^T X \beta$（也可以写成 $-2(X^T Y)^T \beta$）。
  - 讲义中这一项求导后的结果展示为 $-\frac{2}{n} X^T Y$。这说明 $\beta$ 的系数向量 $X^T Y$ 被保留了下来。

### L2 正则项的求导规则 (Gradient of L2 Norm)

- **规则**：对于 L2 正则化项，即向量模的平方 $f(\beta) = |\beta|^2 = \beta^T \beta$，其梯度为： 
  $$
  \nabla_\beta |\beta|^2 = 2\beta
  $$
  

- 讲义应用：

  - 在介绍 L2 正则化（Ridge Regression）时，损失函数增加了 $\lambda |\beta|^2$。
  - 讲义展示其梯度为 $2\lambda \beta$,。

### 总结：讲义中的推导全过程

结合上述规则，讲义展示了目标函数 $J(\beta) = \frac{1}{n} |Y - X\beta|^2$ 的完整求导过程：

1. **展开**：$\frac{1}{n} (Y^T Y - 2Y^T X \beta + \beta^T X^T X \beta)$
2. 求导：
   - 常数项 $Y^T Y$ 导数为 0。
   - 线性项 $-2Y^T X \beta$ 导数为 $-2X^T Y$ （应用规则 3）。
   - 二次项 $\beta^T X^T X \beta$ 导数为 $2X^T X \beta$ （应用规则 2）。
3. **结果**：$\nabla_\beta J(\beta) = -\frac{2}{n} X^T Y + \frac{2}{n} X^T X \beta$。