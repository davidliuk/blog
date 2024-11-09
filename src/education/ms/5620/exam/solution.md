

## Q1

难度和期末差不多，curve平均分 to 80，如果高会有extra credit



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

trans, rot, trans back
$$

$$

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

$$



## Q3

30

### 3.1



### 3.2

0

$\vec S_0=[1,0,0]^T$

$\vec b_1=\vec b_0+\frac{1}{3}\vec S_0$

### 3.3

$f(u)=b_0B_0^3(u)+b_1B_1^3(u)+b_2B_2^3(u)+b_3B_3^3(u)$

$\frac{df}{du}(u)=3(\vec b_1-\vec b_0)B^2(u)$

### 3.4

de Casteljau

## Q4

40

### 4.1

8*3=24

> 少一个点，root有translational的DOF

### 4.2

35

IK problem, take a 

#### 4.2.2

Method 1

Lerp get each desired position, and IK (like limb-based)

Method 2

get quaternion and slerp

#### 4.2.3

Figure out desired position, and IK