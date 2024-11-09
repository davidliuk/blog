# Body Dynamics

Physics Simulation

Particles

Kinematics: The study of motion without consideration of underlying forces

- Forward Kinematics
- Inverse Kinematics

Dynamics: 

- Forward Dynamics
- Inverse Dynamics



### Particles Systems

Mass, Momentum, and Force

- Mass: $m$

- Momentum: $\vec p=m\vec v$

- Force: $\vec f=\frac{d\vec p}{dt}=m\frac{d\vec v}{dt}+\frac{dm}{dt}\vec v=m\vec a+\dot m \vec v$

  - If $m$ is constant
    - $\vec f=m\vec a$

- Acceleration: $\vec a$

- Given constant acceleration, $\vec a_0$ over time $\Delta t$

  - Velocity: $\vec v(\Delta t)=\int_0^{\Delta t}\vec adt=\vec v_0+\vec a_0\Delta t$

- More General Form (Euler Integration):
  $$
  Let \space t_{k+1}=t_k+\Delta t\\
  v(t_{k+1})=v(t_k)+a(t_k)
  $$
  
- s

### Newton's Laws

1st Law

2nd Law

3rd Law



### Force a particle



## Typical Particle Forces

### Gravity

$f=mg$

$f=G\frac{m_1m_2}{r^2}$

### Springs

$f=kx$

A simple spring force can be 

$\vec f_{spring}=-k\vec x$

where $k$ is a spring constant

$x=\|x_1-x_2\|-l$

### Damper

$\vec f_{damp}=-k_d\vec v$

Opposite to velocity

### Spring Dampers

$\vec f=-k_s\vec x-k_d\vec v$

### Friction

$\vec f=\mu$

Static friction: $f\ge N\mu_s$

Dynamic friction: $f=N\mu_k$

$f=$force tangent to surface

$\mu_k=$coefficient of static friction

$\mu_k=$coefficient of dynamic (kinetic) friction

### Aerodynamic Forces

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



Particles can be rendered using various techniques

- Points
- Lines (form last position to current position)
- Sprites (textured quad's facing the camera)
- Geometry (small objects...)
- Or other approaches...

### Moment of Force (Torque)

Angular Momentum

$L=r\times p=r\times mv$

Rate of change of Angular Momentum

$\vec\tau=\vec v\times m\vec v+\vec r\times m\vec a=r\times f$

Rotational Inertia

derivative of rotating vector

$\vec v=\dot r=\omega\times \vec r$

derivative of rotation matrix

$R=[\begin{array}{c:c} u_x&u_y&u_z \end{array}]$

Rotational Inertia

$\vec L=$

## Rigid Body Mass



Rigid Body Simulation Variables

Equation of Motion

---

Approximating Integral Curves

泰勒展开，保留三次倒数的项
