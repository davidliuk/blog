# Simulation



## Differential Equations

Most general form: $\dot x=f(x,u)$

- $x$ is the state vector
- $u$ is the input vector

 **xfxu** is the derivative of **x** with respect to time. Tangent to solution curve

Approximating Integral Curves

Vector Field

Integral Curves

泰勒展开，保留三次倒数的项

Euler’s Method 

## Numerical Integration

### Euler’s Method

General Form (Euler Integration):
$$
Let \space t_{k+1}=t_k+\Delta t\\
v(t_{k+1})=v(t_k)+a(t_k)
$$
$\dot {\vec x}(t_{k+1})=\dot {\vec x}(t_k)+\ddot {\vec x}(t_k)\Delta t$

Some issues associated with numerical integration 

- Stability 
- Accuracy 
- Convergence 
- Performanc

some common numerical  integration methods that address some of these issues

- 2nd Order Runge-Kutta
- Adams-Bashforth
- 4th Order Runge-Kutta
- Implicit Euler

### Runge Kutta

Predictor/Corrector Method

- Predict value of $x$ at time $t_k$ using Euler Integration

  $x^p(t_{k+1})=x(t_k)+\dot x(t_k)\Delta t$

- Then use $x^p(t_{k+1})$ to evaluate $\dot x^p(t_{k+1})=f(x^p(t_{k+1}),u(t_k))$

- Now average $\dot x(t_k)$ And $\dot x^p(t_{k+1})$

#### 2nd Order

$x(t_{k+1})=x(t_k)+\frac{\Delta t}{2}[\dot x(t_k)+\dot x^p(t_{k+1})]$

where $\dot x^p(t_{k+1})=x(t_k)+\dot x(t_k)\Delta t$

- $\dot x(t_k)=f(x(t_k),u(t_k))$
- $\dot x^P(t_{k+1})=f(x^p(t_{k+1}),u(t_k))$

#### 4th Order

$x(t_{k+1})=x(t_k)+\frac{1}{6}[d_1+2d_2+2d_3+d_4]$

where
$$
d_1=\Delta t\cdot x(t_k)\\
d_2=\Delta t\cdot x(t_k)\\
d_3=\Delta t\cdot x(t_k)\\
d_4=\Delta t\cdot x(t_k)\\
$$

### Stiff Dynamic Systems

Stiff Systems

- System dynamics contain high frequency oscillations and rapidly decaying responses

Smaller time steps required to accurately simulate the system dynamics

Often seen in systems with stiff springs

- clothing simulation
- fluid simulation

### Implicit Integration Methods

Explicit Euler methods add energy in the form of errors

- This is bad for stiff systems
- Can result in instability

Implicit Euler methods removes energy

- Better for Stiff Systems

Backwards Euler:

- $x(t_k)=x(t_{k+1})-\dot x(t_{k+1})\Delta t$
- $x(t_{k+1})=x(t_{k})+\dot x(t_{k+1})\Delta t$

### Implicit Methods

- Result of backwards Euler
- Solution converges more slowly
- But it converges!

Problem with Implicit Euler

- How to compute $\dot x(t_{k+1})$
- Derive from formula (most accurate)
- Compute using explicit method and plug in value (predictor-corrector)
- Solve using linear system (slowest, most general)

$x(t_{k+1})=x(t_k)+(\frac{1}{\Delta t}I-\frac{\part f}{\part x}(t_k))^{-1}f(x(t_k))$

### Multi-step Methods

Previous methods used only values from the current and next time step

Idea: approximation drifts more the further we get from initial value

Use values from previous time steps to calculate next one

Anchors approximation with more accurate data

- Adams Bashforth
- Verlet Integration