# Body Kinematics

surface

$(u,v)$

two tengant

normal: $\times$

Bilinear surface patch

2D linear interpolation

General form of Bilinear interpolation

$f(u,v)=\sum_{i=0}^1\sum_{j=0}^1B_i^1(u)B_j^1(v)b_{ij}$

2D Cubic

Bezier



$f(u,v)=\sum_{i=0}^3\sum_{j=0}^3B_i^3(u)B_j^3(v)b_{ij}$

FFD(Free Form Deformation)

$(p-p_0)=f(u,v,w)=$



> Jaccob matrix

## Forward Kinematic (FK) 

### Notations

$\vec p_4^0=\vec x=f(\vec\Theta)=F_4^0P_4^4$

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

## Inverse Kinematic (IK)

### Notations

$\vec\Theta=f^{-1}(\vec x)$

> almost impossible to compute amony

Ideally, $\vec\Theta=J^{-1}\vec x$

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
Euler Angle rates to angular velocity conversion

$\vec \omega=L\dot{\vec\Theta}$

$R_1=R_z R_yR_x$

$R_0^1=R_x^TR_y^TR_z^T$

MIDTERM

---

IK want to compute $J^{-1}$

can only normally do this if J is square



given $\vec x$ desired velocity of the end joint

2 types of "pseudo" inverse

- left => more DOF in x 
- right

#### left pseudo

$\dot{\vec x_d}=J\dot{\vec\Theta}$

$J^T\dot{\vec x_d}=J^TJ\dot{\vec\Theta}$

$\dot{\vec\Theta}=(J^TJ)^{-1}J^T\dot{\vec x_d}$

#### right pseudo

$\dot{\vec x_d}=J\dot{\vec\Theta}$

choose $\Theta=JT\vec a$

$J^T\dot{\vec x_d}=J^TJ\dot{\vec\Theta}$

$\dot{\vec\Theta}=J^T(JJ^T)^{-1}\dot{\vec x_d}$

choose $\vec b=\dot{\vec x_d}=\vec v_d$

$\dot{\vec x_d}=\frac{\vec x_d(t_k)-\vec x(t_k)}{\Delta t}$
