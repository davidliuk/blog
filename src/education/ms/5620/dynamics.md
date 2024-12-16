# Body Dynamics

> [myPhysicsLab](https://myphysicslab.com/)

**Kinematics**: The study of motion without consideration of underlying forces

- Forward Kinematics: Computing **body motion** as a function of **joint angles**
- Inverse Kinematics: Computing **joint angles** as a function of **body motion**

**Dynamics**: Study of physical motion due to the application of **forces and torques**

- Forward Dynamics: Computing **motion** resulting from applied **forces and torques**
  - $\dot v=\frac{1}{m}f_{cm}$
  - $\dot \omega=I^{-1}(\tau_{cm}-\omega\times I\cdot\omega)$

- Inverse Dynamics: Computing **forces and torques** required to generate desired **motion**

## Physical Simulation

Particles Systems

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

$\ddot x=\frac{1}{m}\sum \vec f_i$

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

## Particle System

### Simulation

1. 

Particles can be rendered using various techniques

- Points
- Lines (form last position to current position)
- Sprites (textured quad's facing the camera)
- Geometry (small objects...)
- Or other approaches...

### Dynamics

State Space

2nd order Ordinary Differential Equation (ODE)

$\ddot x=\frac{1}{m}f(x,\dot x)$

$\dot v=\frac{1}{m}f(x,v)$

Phase Space (State Space)

State Position (6 * 1)



Solver Interface

Diffeq Solver

Derivative

## Rotational Dynamics of Particles

Angular Momentum

$L=r\times p$

### Moment of Force (Torque)

> 扭矩

Angular Momentum

$L=r\times p=r\times mv$

Rate of change of Angular Momentum

$\vec\tau=\frac{dL}{dt}=\vec v\times m\vec v+\vec r\times m\vec a=r\times f$



### Rotational Inertia

> 转动惯量

$L=r\times p=r\times(mv)=mr\times v=mr\times(\omega\times r)$

$L=I\cdot\omega$

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

## Rigid Bodies

### Rigid Body Mass

Rigid Body Simulation Variables

Equation of Motion

$I$

body axis

rigid body object

Mass: $m=\sum m_i$

Center of mass: $m=\int \rho d\Omega$

force



Newton-Euler Equs

Translation: $m\vec a^0=m\dot {\vec v^0}=m\ddot{\vec x}=\sum f_i^0= f_{total}^0$

Rotation: $I\dot{\vec \omega}+\vec\omega\times I\vec \omega^0=\sum\tau_i=\sum r\times f$

I=moment of xxx (3*3 matrix)

translation: $\dot{\vec v}=\frac{1}{m}\sum f_i^0$

rotation: $\dot\omega=I^{-1}(\sum\tau-\omega\times I\omega)$

> Euler Integration

![Screenshot 2024-12-12 at 8.40.44 PM](https://cdn.jsdelivr.net/gh/davidliuk/images@master/blog/Screenshot%202024-12-12%20at%208.40.44%E2%80%AFPM.png)
