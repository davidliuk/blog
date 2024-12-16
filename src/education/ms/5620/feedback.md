# Feedback Control

## System Dynamics

- $m\ddot x=f$
- $I\ddot \theta=\tau$

### Translational Mass-spring-damper System

Box example

$m\ddot x+c\dot x+kx=f$

$\dot v=\frac{1}{m}(f-kx-cv)$

$\ddot x=\frac{1}{m}(f_{ext}-kx-c\dot x)$

=>

$\ddot x+\frac{c}{m}\dot x+\frac{k}{m}x=\frac{1}{m}f$

time constant system

$\dot v=\frac{1}{m}(f_{ext}-kx-cv-\mu N)$

- Steady state ($\dot x=\ddot x=0$) value of x
- Transient response =>
  - how long does it take to get to steady state

spring-damper system

> Final:: Given a system of the form
>
> $m\ddot x=f$
>
> $I\ddot\theta=\tau$
>
> How would you make it into a mass-spring-damper system with the desired dynamics through choice of f or $\tau$

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

### Rotational Mass-spring Damper System

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

## Inverse Dynamics

### Newton-Euler Equations

 (in world coordinates)

- Translational Dynamics:

  $ma=m\dot v=m\ddot x=f_{total}$

- Rotational Dynamics:

  $I\dot \omega+\omega\times I\omega=\tau_{total}$

### Equations of Motion

Applied forces and Torques

- $f_{total}=\sum f_i$
- $\tau_{total}=\sum (r_i\times f_i)+\sum\tau_i$

Forward Dynamics

- $\dot v=\ddot x=\frac{1}{m}f_{total}$
- $\dot \omega=(I)^{-1}(\tau_{total}-\omega\times I\cdot\omega)$

### System Dynamics

System Input: $u=[f_{total},u_{total}]$

System State: $x=[p,\theta,v,\omega]$

System Dynamics: $\dot x=f(x,u)$

## Control Systems

Objective

- Compute input ($u$), so
- state ($x$), moves to
- a desired value ($x_d$) over time

### Feedforward Control Systems

![Screenshot 2024-12-08 at 4.44.58 PM](https://cdn.jsdelivr.net/gh/davidliuk/images@master/blog/Screenshot%202024-12-08%20at%204.44.58%E2%80%AFPM.png)



### Feedback Control Systems

![Screenshot 2024-12-08 at 4.45.17 PM](https://cdn.jsdelivr.net/gh/davidliuk/images@master/blog/Screenshot%202024-12-08%20at%204.45.17%E2%80%AFPM.png)

Controller Objective: drive e->0 in the steady state

> 把a（二次项）隔离开，这样可以算f=xxx

Type

- Proportional Control
- PD
- PID

Center of mass

Apply a t

Translation: $\dot v=\frac{1}{m}f$

Rotation: $\dot \omega=I^{-1}(\tau-\omega\times I\omega)$

$\ddot\theta=\frac{1}{I_{yy}}\tau$

$\theta_d=$ desired heading angle

like mass-spring damper system (virtual spring, virtual damper)

$\ddot\theta+a_1\dot\theta+a_0\theta=a_0\theta_d$

feedback controller

$\tau=$

$f=$



$\tau=I_{yy}(a_0\theta_d-a_1\dot\theta-a_0\theta)$

$\ddot\theta+2\zeta\omega_n\dot\theta+(\omega_n)^2\theta=(\omega_n)^2\theta_d$

$t_c=\frac{1}{\zeta\omega_n}$

$t_{settle}=4t_c$

which is how long it takes to get to steady state

## Rotation Controller

Given system of this form:

$\ddot \theta+10\theta\dot\theta+2(\dot\theta)^2+2z\theta=b\tau$

how would you make it respond like a system of the form

$\ddot \theta+a_1\dot\theta+a_0\theta=a_0\theta_d$

step1: clean house (leave $\ddot \theta$ alone)

$\tau=\frac{1}{b}(10\theta\dot\theta+2(\theta)^2+2z\theta)+\frac{1}{b}(a_0\theta_d-a_1\dot\theta-a_0\theta)$



## Velocity Controller Design

Given Actual Dynamics: 

$m\ddot z+c\dot z+kz=f$

Want desired 1st order dynamicsL $V_d=$ desired velocity 

$\dot v+aV=aV_d$

choosing $f=-K_pz-K_vV+K_1V_d=kz+(c-ma)v+mav_d$

## Tracking Controller Design

Given: $m\ddot z+c\dot zxxxx$

Want $e=(z-z_d)\Rightarrow0;\dot e=1;\ddot e=0$

With desired Dynamics



## Control System Block Diagram

Proportional-Derivative (PD) Control

### Feedback Control Laws

Computing the error.

Before the feedback controller can do anything, it must first find the difference between the current and desired system states ($e = x_d –x)$. This difference is called the error, and the goal of the controller is usually to minimize that error in the steady state (e.g. when the system is no longer moving).

Proportional Control terms

Derivative (PD) Control terms

Integral (I) Control terms

There are three basic types of controllers that can used to minimize the error, denoted: 

- P: Proportional control
- PD: Proportional-Derivative control
  - $f=-k_px-k_v\dot x+k_0x_d$
  - $\tau=-k_p\theta-k_v\dot\theta+k_0\theta_d$

- PID: Proportional-Integral-Derivative control



Frame of Reference for equation of motion

World frame

- $m\dot x=f$ => trans
- $I\dot\omega+\omega \times I\omega=\tau$ => rot

Body frame

---

$T_{settle}=4T_c$

What is $T_c$?

$\dot v+av=av_d$

for this system $T_c=\frac{1}{a}$

$T_{settle}=\frac{4}{a}$=>$a=\frac{4}{T_{settle}}$

$f=k_v(v_d-v)$ what is $k_v$?

$\dot v + k_v v=k_vv_d$=>$k_v=\frac{4}{T_{settle}}$

FKIK

- splines

Hopefully, see how these connect

If better, use final, worse ave

## System Dynamics Parameters

### 1st Order System Dynamics

- Actual: $\dot x=ax+bu$
- Desire: $\dot x=c(x_d-x)$

$T_c=\frac{1}{c}, T_{settle}=4T_c$

$\dot x=(a-bK_0K_p)x+bK_0K_1x_d$

### 2nd Order System Dynamics

- Actual: $\ddot x+a_1\dot x+a_0x=bu$
- Desire:  $\ddot x+2\zeta\omega_n\dot x+\omega_n^2x=\omega_n^2x_d$

$T_{settle}=4T_c=\frac{4}{\zeta\omega_n}$

$\zeta=$ Damping ratio

$\omega_n=$ Natural frequency

$\zeta=0\Rightarrow$ no damping

$0<\zeta<1\Rightarrow$under damped

$\zeta=1\Rightarrow$critical damped

$\zeta>1\Rightarrow$over damped (no oscillation)