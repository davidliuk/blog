# Computer Animation

Levine 154

### Compisition

- 50 作业

  No late submissions or extensions for homework.

  - CQ, participation-based

  - HW
    - homework
      - HW1 Coor Transformation
      - HW3 Kinematics
      - HW6 Motion Capture
      
    - coding
      - HW2 Curve Editor
      
      - HW4 IKFK
      
      - HW5 Skinning
      
      - HW7 Particle System
      
      - HW8 Feedback Control
      
        Monday, last day of class

- 20 期中 Oct 23, 90min

  review session Oct 22, Monday 4:00 PM, online zoom

  开卷考试，可以电子设备，但是不能搜索，不会有太多计算

- 25 期末 Dec 13

  review session Dec 11

  Final Exam Date/Time: Friday, Dec. 13th from 3:00 - 5:00pm

  Room: MEYH B3 (Meyerson Hall - 210 South 34th Street)

  开卷考试，可以电子设备，但是不能搜索，不会有太多计算，tablet，turn off wifi/internet

  开放问题

  Similar style like mid term

  apply knowledge to real world problem

  not just copying notes

  if you understand basic concepts, you should be able to apply them

  don't blank, do not long describe

- 05 出勤，7次随堂 quiz

  15min quiz, close book test

  drop 2 lowest grade
  
  - 09.12 transformation, 7/10
  
    basic concept
  
    Exam: Given F1, F2, what H12
  
  - 09.26 splines 9/10, 30min
  
  - 10.15 8/10
  
    last 20 min, easy, kinematics
    
  - 11.07 Thurs 8/10
  
    body animation: keyframe, walk cycle, cross dissolve
  
  - 11.19 Tues 10/10
  
    Body Dynamics
  
  - 12.05 Friday, Feedback Control design, 20min
  
    You should be familar with how you would compute the gains of a PD feedback controller given the desired system response.


## text books

Required

1. Math for 3D game programming and cg 3rd Edition
2. Foundation of physically based modeling and animation

Recommended

1. CA - Algo & Tech 3rd
2. Game Engine Architecture 2nd
3. AI for games

Software

1. MS VS 2022 (C++)

   mac VS 不能run c++，换个软件（clion）

   建议使用debugger来调试

2. MotionBuilder

   motion capture

3. Houdini

   particle system

4. Unity3D (version 2022.3.x)

   OpenGL

5. Real-time screen capture software

   Fraps

   actions

   camtasia

   avi

## Character animation vs robotics

### animation

motion shape

Tech

- puppetry
- Keyframing
- Motion Capture
- Procedural

---

### Robotics

Physical, sensor from environment

categories

- Embodied
  - Physical-based machines (industrial and mobile robots, UAVs)
  - Computer game characters

---

controller

## Course Topics

### Coordinate systems

- Vector - Matrux Representations
- Coordinate Transformations
- Euler Angles
- Quaternions

### Interpolation  

- Curve  ✅
- Linear  ✅
- Bezier  ✅
- B-Splines  ✅
- Hermite Splines
- 2D Interpolation
- Spherical Interpolation (Quaternion) (Slerp)

### Body Kinematics

- Joint Hierarchies Representation
- Transformation Matrices
- Forward Kinematics
- Jacobian matrices
- Kinematic chains
- Inverse Kinematics

### Body Animation

- Animation Tech
  - Keyframe
  - Motion Editing
  - Sequencing and Blending
  - Arc Length Parameterization
- Locomotion. Gait. Walk and run cycles. 
- Animation tool demonstrations (MotionBuilder).
- Motion Capture
- **Skinning and Mesh Deformation**

### Body Dynamics

- Equation of motions (F=ma)
- State space representation. 
- Rotational vs. translational dynamics
- Second order (mass-spring-damper) dynamical systems
- Particle Systems

- Animation and Simulation Tool - Houdini

Physical Simulation (Dynamic System Simulation)

- Numerical integration methods. 
- Sense, Control, Act processing loop. 
- Dead reckoning models. 
- Virtual reality and distributed interactive simulation. 

### **Feedback Controller**

- Openloop vs. closed loop control. 
- Feedback types (Proportional, Derivative and PD controllers). 
- Design requirements. 
- Feedback control law design.
- Trajectory tracking. 
- Computed velocity and computed torque methods.

### **Behavioral Animation**

- individual & group
- Layering and blending behaviors. 
- Arbitration and coordination schemes.  
- Collision avoidance, hierarchical behaviors and formations.

**Path finding**

- Navigation Meshes
- Search Methods
  - Depth First
  - Breadth First
  - A*

Optimization-Based Animation

- Least Squares optimization. 
- Gradient descent. 
- Lagrange multipliers. 
- Optimization subject to dynamic constraints. 
- Space time constraint solution methods. 
- Covariance Matrix Adaptation. 
- Principal Component Analysis (PCA), 
- Eigenfaces, 
- face recognition

Facial Animation

- Linear Blend shapes
- parameterized models
- Muscle-based approaches
- Elgen faces(Principal Components Analysis)
- Facial Action Coding, phonemes, visemes
- Lipynching

## SOTA

Photorealistic rendering of Objects and Character

Physically- based ca

Character and Object Animation

- Key Framing
  - Creative drives production
    - Frozen

Uncanny Valley

Character and Object Animation

- Demos

Deep fake

