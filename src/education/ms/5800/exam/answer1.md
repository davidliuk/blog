

## Q1

### Vanishing Point

Cross Ratio

Geometric Approach

**垂心（Orthocenter）**。

- *垂心定义*：三角形三条高线的交点。

OH is the principal axis and ABC is the image plane, hence, H is the principal point / “image center”

Draw three vanishing points using the three parallel edges of the box. Connect the vanishing points to form a triangle. Draw the orthocenter of the triangle.

### Projective Geometry



### Cross Ratio

## Q2: Transformations

The total rotation angle θ is extracted from R using Rodrigues’ formula:

## Q3: Homographies



## Q4: P3P



## Q5: Epipolar Geometry

Essential Matrix

### “对极约束” (Epipolar Constraint)

想象你左眼看到一个黄色小球，右眼也看到它。

- 你的左眼球、右眼球、和黄色小球组成了一个**三角形**。
- 在几何上，这意味着：左眼的视线、右眼的视线、以及两眼之间的连线，这三条线必须**共面**。
- **$q^T E p = 0$** 就是这个“三线共面”的数学表达式。

------

### Math Tools

1. **深度 (Depths) $\lambda, \mu$**：

   相机看到的是像素（2D），但物体在空间中是有距离的。$p$ 是图像上的方向，$\lambda p$ 才是物体在空间里的真实 3D 位置。

2. **反对称矩阵 (Skew-symmetric Matrix) $\hat{T}$**：

   这是一个神奇的转换。在向量运算中，**叉乘**（$T \times q$）很难在矩阵方程里直接算。于是我们把向量 $T$ 变成一个特殊的矩阵 $\hat{T}$。

   - 这样：$T \times q$ 就可以写成矩阵乘法 $\hat{T} q$。

3. **叉乘的两个特性**（题目 Hint 给出的）：

   - **自己叉自己等于 0**：$T \times T = 0$。
   - **垂直性**：$q \cdot (T \times q) = 0$。因为 $T \times q$ 得到的是一个垂直于 $q$ 的法向量，两个垂直的向量点乘必为 0。