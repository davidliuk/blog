# Midterm Exam

ave 82, mid 83, max 98, de 10

---

5 questions, don't leave anything blank, 90 mins

> 4/5 questions, 多少写点有的没的就有分
>
> 不用数值计算

limb-based 一定考

- 大部分简单，有一个难点，sample 和他很像
- 给部分分，写一点东西就会给分，不要空白；不用写大多''
- open book, open notes, laptop, ipad tablet

no need calculator

Euler Angle rates to angular velocity conversion

$\vec \omega=L\dot{\vec\Theta}$

$R_1=R_1^0=R_z R_yR_x$

$R_0^1=R_1^T=R_x^TR_y^TR_z^T$

## Review Session

🌟有这个问题

### Coordinate Systems

#### Frame of Reference

subscript superscript notation

- subscript: current
- superscript: target

先读 subscript, 再读 superscript

$R_1^0=[\hat u_x|\hat u_y|\hat u_z]$

how to compute the column vectors

Obj to world: $F^0_1$

world to obj: $F^1_0$

$R_0^1=(R_1^0)^{-1}=(R_1^0)^{T}$

$F_0^1=(F_1^0)^{-1}\ne (F_1^0)^T$

🌟$(F_1^0)^{-1}=\begin{bmatrix}R^T&-R^Td\\0&1\end{bmatrix}$

有这个问题

$(ABC)^{-1}=C^{-1}B^{-1}A^{-1}$

#### Linear Algebra

Bag of tricks

- Dot product
- Cross product

#### Orientation Representation

- Euler Angles
- Rotation Matrix
- Quaternions

转换

Order of rotation

z->y->x

$R_{zyx}=R_zR_yR_x$

- Local axis transform -> post multiply
- World axis transform -> post multiply 

$\vec v^0=R_1^0\vec v^1$

$F_2^0=F_3^0F_2^3$

F, H are both 4*4 homogeneous matrix

不用计算

### Interpolation

polynomials (linear, cubic)
$$
\begin{aligned}
\vec f(u)
&=\vec a_0+\vec a_1u+\vec a_2u^2+\vec a_3u^3\\
&=\vec b_0B_0^3(u)+\vec a_1u+\vec a_2u^2+\vec a_3u^3\\
&=\vec p_0H_0^3(u)+\vec p_1H_3^3(u)+\vec p_0'H_0^3(u)+\vec p_1'H_3^3(u)
\end{aligned}
$$
matrix method

p0, p1: b0, b3

#### Catmul-Rom

Given t can find u for the segment

$u=\frac{t-t_j}{t_{j+1}-t_j}$

Bézier curve -> 1D

Bézier Surface Patch -> 2D

Bézier Volume element -> 3D (FFM)

> 没有带复习Slerp

Quaternion Interpolation

Linear Interpolation: $\vec q=Slerp(q_1,q_2,u)$

---

should

### Body Kinematics

- End joint
- Root joint

to find the position and orientation of the endpoint walk from the kinematic chain from root to end joint

$F_5^0 = F_1^0F_2^1F_4^3F_5^4$

$\vec p_5^0 = F_1^0F_2^1F_4^3F_5^4\vec p_5^5$

$\vec x=f(\vec\Theta)$

Body Joint vector

3*N Rotational DOF (at each point), 3 translational DOF (at the root)

total DOF=3*N+3

---

v of end joint

$\vec v=\dot{\vec x}=J\dot{\vec\Theta}$

**Limb-based - Only uses 3 joint**

Arm ->

Leg ->

Step 1:

1. rotate joint 2 to get distance between joint 1 and joint 3 equal to ||r_d||

**CCD**

similar in point to how joint 1 is rotated in the limb-based solver

but successively on chain from most distul to most proximal joint

**backward sweep**

joint 5 to pd

1st joint 4, then joint 3, then joint 2, then joint 1

### Body Animation

- Should know what Key framing and key poses are
- Should know how to speed up or slow down animation
- Should know how to blend two animation (lerp)
- Should know how to transition from one animation to another (lerp)

---

Questions

1. Midterm Sample.4.b, Diff between Catmul-Rom & Hermite/B Spline?

   BSpline is C2 continuity, seen as Hermite Spline

2. Limb-Based Approach step 2, $q_1=q_1\Delta q_1$, left or right product?

   with respect to Local rotation of global, if local->right, if global->left

3. Limb based step3步骤是干嘛的

   Optional, 

4. HW3 3.a, 只有两个？

