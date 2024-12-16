# Midterm Sample

## Q1

> 25, Kinematics

1. out of, *out of*, into
2. 2*3=6(3 xyz, 3theta), each have 2 in x, y axis
3. ans
   1. $p^2=F^2_1p^1=(F_2^1)^{-1}p^1$
   2. $p^3=F^3_2F^2_1p^1=$
   3. $q^1=F_2^1q^2$
   4. $q^3=F_2^3q^2$

### 1.4



### 1.5

$p^0_4=F^0_4p^0_4=F^0_1F_2^1F_3^2F_4^3p^4_4$

$d_4^0=R_1^0R_2^1R_3^2d_4^3+R_1^0R_2^1d_3^2+R_1^0d_2^1+d_1^0$

$d_4^0=R_1^0R_2^1R_3^2[0,1,0]+(R_1^0R_2^1+R_1^0)[1,0,0]+d_1^0$

## Q2

> 15

1. $R_2^1=R_{xyz}=R_xR_yR_z$

2. $$
   \phi_y=-\arcsin r_{31} \\
   \phi_x = \arctan\frac{r_{32}}{r_{33}}\\
   \phi_z = \arctan\frac{r_{21}}{r_{11}}
   $$

### 2.3

> No limits X

*two*, $\theta_y=20.7,180-20.7$

### 2.4

> Euler Angle

Yes, not same 

## Q3

> 15

1. $$
   w=\frac{\sqrt{1+r_{11}+r_{22}+r_{33}}}{2}\\
   x=\sqrt\frac{1+r_{11}-2w^2}{2}=\frac{r_{32}-r_{23}}{4w}\\
   y=\sqrt\frac{1+r_{22}-2w^2}{2}=\frac{r_{13}-r_{31}}{4w}\\
   z=\sqrt\frac{1+r_{33}-2w^2}{2}=\frac{r_{21}-r_{12}}{4w}
   $$

2. Axis, $\theta$, around axis by theta

   **q** is a 4x1 vector of unit length that represents an alternative method to Euler angles for computing rotations

3. s-> $\theta$, v->Axis

## Q4

1. link a couple of point, form smooth curve
2. Catmul-Rom: Bezier, Hermite

### 4.2

> Catmul-Rom Spline vs, Hermite Spline, pros & cons

A Catmul-Rom Spline is constructed from individual Bezier curves . 

A Bspline uses overlapping basis functions. Both provide local function approximation. 

Catmul-Rom Splines are easy to construct using central differences of the control points and the Casteljau algorithm (i.e. recursive linear interpolation), are computationally efficient, but have discontinuous second derivatives at the knot points. 

Bsplines provide an optimal interpolant to the control points, have continuous second derivatives at the knot points, but require matrix inverses to compute the spline coefficients from the control points.

### 4.4

> Slerp, Catmul-Rom Spline, de Casteljau algorithm

## Q5

### 5.2

> J matrix dimension

$\dot x=J\dot\Theta$

$(3\times1)=(3\times9)\cdot(9\times1)$

J dimension: $3\times9$

### 5.3

> Limb-based IK

### 5.4

> Null space
