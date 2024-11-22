# Body Dynamics

> [myPhysicsLab](https://myphysicslab.com/)

Particles

Kinematics: The study of motion without consideration of underlying forces

- Forward Kinematics
- Inverse Kinematics

Dynamics: 

- Forward Dynamics
- Inverse Dynamics



## Particles Systems

Mass, Momentum, and Force

- Mass: $m$

- Momentum: $\vec p=m\vec v$

- Force: $\vec f=\frac{d\vec p}{dt}=m\frac{d\vec v}{dt}+\frac{dm}{dt}\vec v=m\vec a+\dot m \vec v$

  - If $m$ is constant
    - $\vec f=m\vec a$

- Acceleration: $\vec a$

- Given constant acceleration, $\vec a_0$ over time $\Delta t$

  - Velocity: $\vec v(\Delta t)=\int_0^{\Delta t}\vec adt=\vec v_0+\vec a_0\Delta t$
  - Position: $\vec x(\Delta t)=\int_0^{\Delta t}\vec vdt=\vec x_0+\vec v_0\Delta t+\frac{1}{2}a_0(\Delta t)^2$

- More General Form (Euler Integration):
  $$
  Let \space t_{k+1}=t_k+\Delta t\\
  v(t_{k+1})=v(t_k)+a(t_k)
  $$

### Integration

Some issues associated with numerical integration 

- Stability 
- Accuracy 
- Convergence 
- Performanc

Next lecture we will look at some common numerical  integration methods that address some of these issues

- 2nd Order Runge-Kutta
- Adams-Bashforth
- 4th Order Runge-Kutta
- Implicit Euler

### Newton's Laws

- 1st Law：$x=x_0+v_0t$
- 2nd Law：$f=ma$
- 3rd Law：$f_{AB}=-f_{BA}$

### Conservation of Momentum

Total momentum in a closed system will remain constant

When particles interact, any gain of momentum by one particle must be met by an equal and opposite loss of momentum by another particle.

### Force a particle

$f_{total}=\sum f_i$

## Typical Particle Forces

### Gravity

$f=mg$

$f=G\frac{m_1m_2}{r^2}$

$f_{gravity}=G\frac{m_1m_2}{\|d^2\|}\hat d$

$\hat d=\frac{d}{\|d\|}=\frac{x_1-x_2}{\|x_1-x_2\|}$

### Springs

A simple spring force can be 

$\vec f_{spring}=-k\vec x$

where $k$ is a spring constant

$x=\|x_1-x_2\|-l$

### Dampers

$\vec f_{damp}=-k_d\vec v$

Opposite to velocity

#### Spring Dampers

$\vec f=-k_s\vec x-k_d\vec v$

### Friction

$\vec f=\mu$

Static friction: $f\ge N\mu_s$

Dynamic friction: $f=N\mu_k$

$f=$force tangent to surface

$\mu_k=$coefficient of static friction

$\mu_k=$coefficient of dynamic (kinetic) friction

### Aerodynamic Forces

Hydrodynamic

$f_{drag}=\frac{1}{2}\rho\|v\|^2c_dA\hat v$

where $\hat v=\frac{v}{\|v\|}$

$f_{lift}=\frac{1}{2}\rho\|v\|^2c_LS(\alpha-\alpha_0)$

### Force Fields

$f_{field}=f(x)$

acceleration

velocity

0

2nd order Ordinary Differential Equation (ODE)

$\ddot x=\frac{1}{m}f(x,\dot x)$

$\dot v=\frac{1}{m}f(x,v)$

Phase Space (State Space)

State Position (6 * 1)



Solver Interface

Diffeq Solver

Derivative

## Particle System Simulation

Particles can be rendered using various techniques

- Points
- Lines (form last position to current position)
- Sprites (textured quad's facing the camera)
- Geometry (small objects...)
- Or other approaches...

## Rotational Dynamics of Particles

$L=r\times p$

### Moment of Force (Torque)

> 扭矩

Angular Momentum

$L=r\times p=r\times mv$

Rate of change of Angular Momentum

$\vec\tau=\vec v\times m\vec v+\vec r\times m\vec a=r\times f$

### Rotational Inertia

> 转动惯量

$L=r\times p=r\times(mv)=mr\times v=mr\times(\omega\times r)$

### Derivative of rotating vector

centripetal acceleration

- $\vec v=\dot r=\omega\times \vec r$

- $a=\dot \omega\times r+\omega\times(\omega\times r)$

$f_{centrifugal}=-m\omega\times(\omega\times r)$

### derivative of rotation matrix

$R=[\begin{array}{c:c} u_x&u_y&u_z \end{array}]$

#### Rotational Inertia

$L=I\cdot\omega$

> $I=-m\Tau\cdot\Tau$

$$
\Tau=\begin{bmatrix}
0&-r_z&r_y\\
r_z&0&-r_x\\
-r_y&r_x&0
\end{bmatrix}
$$



$\vec L=$

## Rigid Body Mass



Rigid Body Simulation Variables

Equation of Motion

$I$

## Differential Equations



Approximating Integral Curves

泰勒展开，保留三次倒数的项

Euler’s Method 

## Numerical Integration

### Euler’s Method



### Runge Kutta

#### 2nd Order

$x(t_{k+1})=x(t_k)+\frac{\Delta t}{2}[\dot x(t_k)+\dot x^p(t_{k+1})]$

where $\dot x^p(t_{k+1})=x(t_k)+\dot x(t_k)\Delta t$

#### 4th Order

$x(t_{k+1})=x(t_k)+\frac{1}{6}[d_1+2d_2+2d_3+d_4]$

where
$$
d_1=\Delta t\cdot x(t_k)\\
d_2=\Delta t\cdot x(t_k)\\
d_3=\Delta t\cdot x(t_k)\\
d_4=\Delta t\cdot x(t_k)\\
$$


### Implicit Integration Methods



### Verlet Integration 

Multi-step Methods



---

## Body

body axis

rigid body object

Center of mass

force



Newton-Euler Equs

Translation: $m\vec a^0=m\dot {\vec v^0}=m\ddot{\vec x}=\sum f_i^0= f_{total}^0$

Rotation: $I\dot{\vec \omega}+\vec\omega\times I\vec \omega^0=\sum\tau_i=\sum r\times f$

I=moment of xxx (3*3 matrix)

translation: $\dot{\vec v}=\frac{1}{m}\sum f_i^0$

rotation: $\omega=I^{-1}(\sum\tau-\omega\times I\omega)$

> Euler Integration

### spring-damper system

Box example

$\dot v=\frac{1}{m}(f-kx-cv)$

$\ddot x=\frac{1}{m}(f_{ext}-kx-c\dot x)$

=>

$\ddot x+\frac{c}{m}\dot x+\frac{k}{m}x=\frac{1}{m}f$

time constant system

$\dot v=\frac{1}{m}(f_{ext}-kx-cv-\mu N)$

spring-damper system

virtual spring, virtual damper

---

Free Body Diagram

- friction, $f_{friction}=\mu N$
- ext, $$
- gravity, normal force
- spring
- damp

Assume $f_{spring}=f_{ext}=0$

$m\dot v=-cv$

Let $v(t)=v_0e^{-\alpha t}$, where $\alpha$ is positive constant

$\dot v=-\alpha v_0e^{-\alpha t}$

$-\alpha v_0e^{-\alpha t}+\frac{c}{m}v_0e^{-\alpha t}=0$

$-\alpha+\frac{c}{m}=0\Rightarrow \alpha=\frac{c}{m}$

$v(t)=v_0e^{-\alpha t}=v_0e^{-\frac{c}{m}t}$
$$
e^0=1\\e^{-1}=0.37\\e^{-2}=0.13\\e^{-3}=0.05\\e^{-4}=0.02
$$
choose $t=\frac{1}{\alpha}$, time constant $t_c$

$v(t)=v_0e^{-1}=v_0(0.37)$

$v(t)=$

Use to design controller

$t=\frac{4}{\alpha}=4t_c$

$v(t)=v_0e^{-4}=v_0(0.02)$

---

What are components of gravity in body axes?

In World:

translation: $m\vec a=f$

rotation: $I\dot \omega+\omega\times I\omega=\vec \tau$

In body coords:

In Body Coor:

Translation: $m\dot v+\omega\times v=f$

rotation: $I\omega+\omega\times I\omega=\tau$

> In body coor, I is constant according to the object

To simulate:

Equas of motion

$\dot v^B=\frac{1}{m}(f-\omega\times v)$

$\dot \omega^B=I^{-1}(\tau-\omega\times I\omega)$

Given $\dot v^B$, want $\dot v^0$

$\dot v^0=R^0_B\dot v^B$

$\dot\omega^0=R_B^0\dot\omega^B$

$\dot v^0\rightarrow v\rightarrow x$

use numerical Integration

$\dot v^B\rightarrow v^B$

$v^B\rightarrow x^B$

This does not allow us to determine where the object is in the world

---

For rocket

1. Integrate $\dot v^B$ to get $v^B$

----

Rotational Mass-spring Damper System

Dist Pinned in world around y-axis

Equs of motion

$I\omega+\omega\times I\omega=\sum\tau$

I=moment of Inertia
$$
I=\begin{bmatrix}
I_{xx}&-I_{xy}&-I_{xz}\\
&I_{yy}&-I_{yz}\\
&&I_{zz}
\end{bmatrix}
$$
$I_{xx}=I_{zz}=\frac{1}{4}m r^2$

$I_{yy}=\frac{1}{2}mr^2$

$I_{xy}=I_{yz}=I_{xz}=0$

what is $\omega\times I\omega$

Rotational mass-spring damper dynamics

$I_{yy}\dot w_y=-k\theta-c\dot\theta+\hat \tau_{ext}$

since $\dot \omega=\ddot\theta$

