# Primer Presentation

Feb. 10, Primer10 = Smoke and Fire Simulation – Xiaonan Pan and David Liu

25 pages content

Students will select and submit 5 topics of interest from the list below (you will only present one) for possible primer presentations (due Friday, Jan. 17th). The intent of the primer presentations is to not only review the relevant work in the major subfields of graphics and animation, but to also provide material that can be used in the related research section of the authoring tool design document.

## Materials

Materials required to be created and submitted as part of the primer presentation include:

### PowerPoint presentation

 of the 

  1. main methods, 
  2. techniques and/or 
  3. approaches, 

  at an appropriate level of detail, such that the class can understand and appreciate the details of the algorithms used. 

  The presentation also should include 

  - videos, 
  - demos and 
  - other examples illustrating use of the methods and /or algorithms in practice. 

  NOTE: A draft of the Primer presentation must be submitted and approved AT LEAST 3 DAYS BEFORE the scheduled presentation date.

### **written description**

  reference materials which were read, reviewed and/or consulted as part of the Primer presentation preparation. 

  Each entry in this bibliography should include a one or two sentence description summarizing the main value or significance of the source. 

  The references should be included as the last section of slides in your primer presentation.

## Target Driven

### Abstract

In this paper we present a new method for efficiently controlling animated smoke. Given a sequence of target smoke states, our method generates a smoke simulation in which the smoke is driven towards each of these targets in turn, while exhibiting natural-looking interesting smoke-like behavior. This control is made possible by two new terms that we add to the standard flow equations: 

- a driving force term that causes the fluid to carry the smoke towards a particular target, 
- a smoke gathering term that prevents the smoke from diffusing too much. 

These terms are explicitly defined by the instantaneous state of the system at each simulation timestep. Thus, no expensive optimization is required, allowing complex smoke animations to be generated with very little additional cost compared to ordinary flow simulations.

### Contribution

Specifically, our main contributions are: 

- a new driving force term in the momentum equation, designed to induce the fluid flow that will carry the current smoke density towards a user-specified smoke density target; 
- a new gathering term in the smoke advection equation, designed to counteract diffusion of smoke due to numerical dissipation, thereby improving the ability of the simulation to match arbitrary targets; 
- we provide animators with the ability to independently control several smoke fields sharing a fluid.

## Outlines

- Introduction
  - Applications
    - Film
    - Games
- Smoke Simulation Approaches
  - Visual Simulation of Smoke
  - Target-Driven Smoke Animation



$\frac{\part T}{T}=-(\vec u\cdot \nabla)T$

$\frac{\part \rho}{T}=-(\vec u\cdot \nabla)\rho$

$\vec f_{buoy}=-\alpha \rho \vec z+\beta(T-T_{amb})\vec z$

$\vec z=(0,0,1)$
