

## 1-View Geometry

## Projective Transformation

- Homogeneous coordinates
- Perspective Projection Equations

Projective lines

$p_1$ and $p_2$

$l=p_1\times p_2$

#### Camera projection matrix

camera 3D coords to pixels

1. **外参：** 你把相机放在哪？镜头对着哪？（决定相机在世界中的位置和姿态）
2. **内参：** 你的相机镜头是什么样的？焦距是多少？（决定光线如何进入相机并落在传感器上）

$$
\lambda[u,v,1]=K_{3\times3}[R_{3\times3}|t_{3\times1}]X_w
$$


$$
P_{3\times4}=K_{3\times3}[R_{3\times3}|t_{3\times1}]
$$


### Vanishing Points and Homography

#### Vanishing Points



#### Homography

$$
(u,v,1)\sim H(X,Y,1)
$$



Perspective Projection -> Homography

#### Computing intrinsics $K$ from vanishing points

Z=0
$$
H=K(r_1,r_2,T)
$$

### Perspective N Point Problem (PnP)



## 2-View and Multi-View Geometry

### Structure from Motion (SfM)



### Optical Flow

Lucas-Kanade Optical Flow