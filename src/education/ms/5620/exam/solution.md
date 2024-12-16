# Mid term solution

难度和期末差不多，curve平均分 to 80，如果高会有extra credit

## Q1

15

### Method 1

$$
F_d=\begin{bmatrix}
R_YR_1^0&\vec d_1^0\\
0&1
\end{bmatrix}
$$

Then,
$$
F_d=HF_1^0\\
H=F_d(F_1^0)^{-1}
$$

### Method 2

> rotate with arbitrary vector 

trans, rot, trans back

拓展：[Olinde Rodrigues](https://en.wikipedia.org/wiki/Olinde_Rodrigues) formula

$\displaystyle \mathbf {v} _{\mathrm {rot} }=\mathbf {v} \cos \theta +(\mathbf {k} \times \mathbf {v} )\sin \theta +\mathbf {k} (\mathbf {k} \cdot \mathbf {v} )(1-\cos \theta)$

构造绕任意向量 $\mathbf{u}$ 旋转角度 $\theta$ 的旋转矩阵是经典的计算机图形学问题。以下是基于罗德里格旋转公式 (Rodrigues' rotation formula) 的实现方法，以及扩展为齐次变换矩阵的方法：

------

### **1. 定义旋转轴和角度**

- 向量 $\mathbf{u} = [u_x, u_y, u_z]$ 必须是一个单位向量。如果 $\mathbf{u}$ 未归一化，需要先归一化： $\mathbf{u} \gets \frac{\mathbf{u}}{\|\mathbf{u}\|}$

------

### **2. 使用罗德里格公式构造旋转矩阵**

罗德里格公式将旋转矩阵 RR 表示为：

$R = I + \sin(\theta) K + (1 - \cos(\theta)) K^2$

其中：

- II 是单位矩阵
- KK 是 $\mathbf{u}$ 的反对称矩阵：$K = \begin{bmatrix} 0 & -u_z & u_y \\ u_z & 0 & -u_x \\ -u_y & u_x & 0 \end{bmatrix}$

#### 将公式展开：

最终旋转矩阵为：
$$
R = \begin{bmatrix} \cos(\theta) + u_x^2 (1 - \cos(\theta)) & u_x u_y (1 - \cos(\theta)) - u_z \sin(\theta) & u_x u_z (1 - \cos(\theta)) + u_y \sin(\theta) \\ u_y u_x (1 - \cos(\theta)) + u_z \sin(\theta) & \cos(\theta) + u_y^2 (1 - \cos(\theta)) & u_y u_z (1 - \cos(\theta)) - u_x \sin(\theta) \\ u_z u_x (1 - \cos(\theta)) - u_y \sin(\theta) & u_z u_y (1 - \cos(\theta)) + u_x \sin(\theta) & \cos(\theta) + u_z^2 (1 - \cos(\theta)) \end{bmatrix}
$$
或者分步法

1. 将旋转轴u绕x轴旋转至xoz平
1. 面
2. 将旋转轴u绕y轴旋转至于z轴重合
3. 绕z轴旋转角
4. 执行步骤2的逆过程
5. 执行步骤1的逆过程

## Q2

15

### 2.1

$$
R_0^U=[\begin{array}{c:c}
\hat u_X&\hat u_Y&\hat u_Z
\end{array}]=\begin{bmatrix}
1&0&0\\
0&0&-1\\
0&-1&0
\end{bmatrix}
$$

### 2.2

$$
R_1^U=R_0^UR_1^0
$$

### 2.3

$$
P_1^U=R_0^UP_1^0
$$

## Q3

30

### 3.1

> 求一段的Catmul Rom Spline

### 3.2

> 让段首的斜率, parallel to x axis

$\vec S_0=[1,0,0]^T$

$\vec b_1=\vec b_0+\frac{1}{3}\vec S_0$

### 3.3

$f(u)=b_0B_0^3(u)+b_1B_1^3(u)+b_2B_2^3(u)+b_3B_3^3(u)$

### 3.4

$\frac{df}{du}(u)=3(\vec b_1-\vec b_0)B^2(u)+$

### 3.5

de Casteljau

## Q4

40

### 4.1

7\*3+1\*3=24

> root有translational的DOF *3

### 4.2

35

IK problem, take a 

#### 4.2.2

**Method 1**

Lerp get each desired position, and IK (like limb-based)

**Method 2**

get quaternion and slerp

#### 4.2.3

Figure out desired position, and IK