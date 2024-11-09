# Body Kinematics

Motion Capture

Joints, Bowel

## Kinematics

Kinematics motion of the body with respect to time

- Position 
- velocity 
- acceleration 

### skeleton

skeleton=tree like data structures representing a hierarchy of joints

### Joints

Joints: local rotating frame of reference
$$
F_j^i=\begin{bmatrix}
F_j^i&d_j^i\\
0 & 1
\end{bmatrix}
$$
where

- i=joint index
- i=Parent of joint j
- $d_j^i$=bone(link) between joint j and joint i

Each joint node contains data

- Angle/quaternions
- bone length
- Pointers(links) to parent joint
- Pointers(links) to child joints
- Local transform
- global transform
- other data
  - moment of in
  - Joint limits
  - presents(bind pose)

### Body state vector

$\vec x$ is an (*m x 1*) vector of end joint positions

$\vec\Theta$ is an (*n x 1*) body joint vector of the form,

$\Theta$ Combines positions and orientations of all the joints
$$
\vec\theta_j=\begin{bmatrix}
x\\y\\z\\\theta_x\\\theta_y\\\theta_z
\end{bmatrix}
$$
most general case for joint j

$$
\vec \Theta=\begin{bmatrix}
\vec\theta_1\space\vec\theta_2\space...\space\vec\theta_N
\end{bmatrix}^T
$$

6 dofs
$$
\left .
\begin{aligned}
x_1 &= a_1 + b_1 \\
x_2 &= a_2 + b_2 \\
x_3 &= a_3 + b_3
\end{aligned}
\right\} \quad \Rightarrow \quad x = a + b
$$

want to know position of joint 3 in the world
$$
\vec p_3^0=F_3^0\begin{bmatrix}
0\\0\\0\\1
\end{bmatrix}=H_T(\vec d_1^0)H_R(\theta_1)H_T(\vec d_2^1)H_R(\theta_2)H_T(\vec d_2^1)H_R(\theta_3)\begin{bmatrix}
0\\0\\0\\1
\end{bmatrix}
$$
$F_3^0=F_1^0F_2^1F_3^2$
$$
\vec p_3^0=\begin{bmatrix}
l_1\cos\theta+l_2\cos(\theta_1+\theta_2)\\
l_1\sin\theta+l_2\sin(\theta_1+\theta_2)
\end{bmatrix}+\vec p_1^0
$$
$\vec x =f(\vec \Theta)=$ position of joints

$\vec v=\dot{\vec x}=$ velocity
$$
\vec v=\frac{d\vec x}{dt}=\dot{\vec x}\\
\vec x=f(\vec\Theta)\\
\frac{d\vec x}{dt}=\frac{f}{d\vec\Theta}
$$


$\dot {\vec x}=J\dot {\vec \Theta}$

$J=$ jacobian matrix

$\dot {\vec \Theta}=J^{-1}\dot {\vec x}$

Leg example

quiz：给一个chain，让求一个p的坐标

下次课讲如何计算任意一个chain的J

$\vec v=\vec w\times\vec r$

> Shape animation

## Forward Kinematic (FK) 

### Notations

$\vec p_4^0=\vec x=f(\vec\Theta)=F_4^0\vec p_4^4$

> where $\vec\Theta$ a set of homo trans

position: $\vec x=f(\vec\Theta)$

velocity: $\vec v=\dot {\vec x}=\frac{d\vec x}{d t}=\frac{\part f}{\part\Theta}\frac{\vec\Theta}{dt}=J\dot{\vec\Theta}$

Angular velocity: $\vec \omega=\hat a\dot\phi$

$\vec v=\omega\times\vec r$

> where $\hat a$=axis, $\dot\phi$=spin rate

Euler Angle rate: $\dot{\vec\theta}=\begin{bmatrix}\dot\theta_x\\\dot\theta_y\\\dot\theta_z\end{bmatrix}$

> where $\vec\theta$

$\dot{\vec\theta}\ne\vec \omega$

> only if axis is one of the x-y-z axis, they are the same

### **Euler Angle rates to angular velocity conversion**

$\vec \omega^j=L_j(\theta_x,\theta_y,\theta_z)\dot{\vec\theta}$

$R_1=R_z R_yR_x$

$R_0^1=R_1^T=R_x^TR_y^TR_z^T$

MIDTERM

## Inverse Kinematic (IK)

### Notations

$\vec\Theta=f^{-1}(\vec x)$

> almost impossible to compute amony

Ideally, $\dot{\vec\Theta}=J^{-1}\dot{\vec x}$

Integrate things

$\vec v=\omega\times\vec r+\dot{\vec r}$

#### Spin 1

if joint 2, 3 is fixed, joint 1 spin at $\omega_1^0$, then:

$\vec v_{14}=\vec \omega_1^0\times\vec r_4^1$

where $\vec r_4^1=\vec p_4^0-\vec p_1^0$

#### Spin 2

if joint 3 is fixed, joint 1 spin at $\omega_1^0$, then:

$\vec v_4=\vec \omega_1^0\times\vec r_4^1$

where $\vec r_4^1=\vec p_4^0-\vec p_1^0$

total:

$\vec v_4^0=\vec v_{14}^0+\vec v_{24}^0+\vec v_{34}^0+\vec v_1^0$

rewrite:
$$
\begin{aligned}
\vec v_{14}^0
&=\vec\omega_1^0\times\vec r_{14}^0\\
&=-\vec r_{14}^0\times\vec\omega_1^0\\
&=-\vec r_{14}^0\times R_1^0\vec\omega_1^1\\
&=-\vec r_{14}^0\times [\hat a_x,\hat a_y,\hat a_z]\vec\omega_1^1\\
&=B_1\vec{\omega}_1^1
\end{aligned}
$$
where $R_1^0=[\hat a_x,\hat a_y,\hat a_z]$
$$
\begin{align}
\vec v_4^0
&=[B_1|B_2|B_3]\begin{bmatrix}\vec\omega_1^1\\\vec\omega_2^2\\\vec\omega_3^3\end{bmatrix}\\
&=[BL|BL|BL][\theta]
\end{align}
$$
> Euler Angle rates to angular velocity conversion

### Pseudo Inverse

IK want to compute $J^{-1}$, can only normally do this if J is square

given $\vec x$, desired velocity of the end joint

2 types of "pseudo" inverse

- left => more DOF in x

- right => more DOF in y

  让方阵是比较小的那个纬度

$\vec x=J\vec\Theta$

$\dim\vec x=m\times1$

$\dim\vec\Theta=n\times1$

$\dim J=m\times n$

#### left pseudo

When: m>n

$\dot{\vec x_d}=J\dot{\vec\Theta}$

$J^T\dot{\vec x_d}=J^TJ\dot{\vec\Theta}$

$\dot{\vec\Theta}=(J^TJ)^{-1}J^T\dot{\vec x_d}$

$J^\dagger=(J^TJ)^{-1}J^T$

#### right pseudo

> most likely

When: m<n

$\dot{\vec x_d}=J\dot{\vec\Theta}$

choose $\dot\Theta=J^T\vec a$
$$
\dot{\vec x_d}=JJ^T\vec a\\
(JJ^T)^{-1}\dot{\vec x_d}=\vec a\\
\dot{\vec\Theta}=J^T(JJ^T)^{-1}\dot{\vec x_d}
$$
$J^T\dot{\vec x_d}=J^TJ\dot{\vec\Theta}$

$\dot{\vec\Theta}=J^T(JJ^T)^{-1}\dot{\vec x_d}$

choose $\vec b=\dot{\vec x_d}=\vec v_d$

$\dot{\vec x}=JJ^T(JJ^T)^{-1}b$

$J^\dagger=J^T(JJ^T)^{-1}$

---

Discrete time, k = frame#

$\dot{\vec x_d}(t_k)=\frac{\vec x_d(t_k)-\vec x(t_{k-1})}{\Delta t}$

$\dot{\vec \Theta}(t_k)=\frac{\vec \Theta(t_k)-\vec \Theta(t_{k-1})}{\Delta t}$

> Backward differences

$$
\frac{\vec \Theta(t_k)-\vec \Theta(t_{k-1})}{\Delta t}=J^{-1}\frac{\vec x_d(t_k)-\vec x(t_{k-1})}{\Delta t}\\
\vec \Theta(t_k)=\vec \Theta(t_{k-1})+J^{-1}(\vec x_d(t_k)-\vec x(t_{k-1}))
$$

Leg example:

Know $\vec p_5^0(t_0)$

Want $\vec p_5^0\Rightarrow\vec p_d^0$

What is $\vec x_d(t)$

$\vec x_d(t)=Lerp(\vec p_5^0(u), \vec p_d^0(u),u)$

---

$\dot{\vec\Theta}$ Joint velocity spance, dim n

$\dot{\vec x}$ end Joint velocity spance, dim m

$\dot{\vec x}=J\dot{\vec\Theta}$

often interested in values of $\dot{\vec\Theta}$ that produce $\dot{\vec x}=0$

trivial  case: $\dot{\vec\Theta}=0$

When n>m, it is possible that $0=J\Theta$ When $\dot{\vec \Theta}\neq 0$

### null space

IK solver

$\Theta_{null}=J^T(JJ^T)^{-1}\vec b-\vec c$

$x=J\Theta=JJ^T(JJ^T)^{-1}\vec b-J\vec c=0$

choose b=Jc, null space

$\dot{\vec{\Theta}}_{null}=[J^T(JJ^T)^{-1}J\vec c-\vec c]=[J^T(JJ^T)^{-1}J-I]\vec c=[J^{-1}J-I]\vec c$

c is arbitrary vector at dim n*1 same dim as $\theta$

spring-like behavior for joints

$\vec \Theta_d=$desired joint angles

$\vec \Theta=$ actual joint angles

$\dot{\vec\Theta}=k({\vec\Theta_d}-\vec\Theta)$

IK solver

$\dot{\vec\Theta}=J^{-1}\dot{\vec x}_d+\dot{\vec\Theta}_{null}$

$x=J\dot{\vec\Theta}=J(J^{-1}\dot{\vec x}_d+\dot{\vec\Theta}_{null})$

Choose $\dot{\vec \Theta}_c=k(td-t)$

$\dot{\vec \Theta}=J^{-1}\dot{\vec x}_d+[J^{-1}J-I]k(\vec\Theta_d-\vec\Theta)$

primary constraint, secondary constraint

---

some times there are problems with inversion of J, when loss of 2 degree of freedom

$\dagger$

In this case use a "damped pseudo inverse"

Normally $J^\dagger=J^T(JJ^T)^{-1}$

Damped $J^\dagger=J^T(JJ^T+\lambda I)^{-1}$

with $\lambda<<1$, I is identity matrix

### Limb-Based Approach

Main idea

- law of Cosine 

- dot product

- cross product


Joint 3 orientation

$\dot{\vec x_d}=\frac{\vec x_d(t_k)-\vec x(t_k)}{\Delta t}$

#### Steps

1. Compute only $\theta_2$ to get distance between joint 1 and joint 3 equal to $\|r_d\|$

   $\phi=\arccos\frac{(l_1)^2+(l_2)^2-(r_d)^2}{2\|l_1\|\|l_2\|}$

   $\theta_2=\pi-\phi$

2. Compute quaternion $q_1$ at joint 1 to rotate $r_d$ so it points at $p_d$

3. Joint 3 Orientation

   这个步骤是干嘛的

### Coordinate Cyclic Descent (CCD)

Main Concept: If rotate joint 1 by angle get end joint 2 as close as possible to  pd



motion capture
