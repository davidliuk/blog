# Blending

## Animation Guide

Problem  – After playing an animation with root translation, the root  joint will snap back to the initial position and orientation  after playing the animation 

Solution – Add a virtual joint called a “Guide” as a parent of root joint  – As a result, root position and orientation transforms are  now with respect to the guide frame of reference  – At the end of each animation, update the guide joint  position to the current position of the character in the world 

## Foot IK

Allows character to walk over uneven terrain 

 IK Targets  – Update left and right foot target positions 
- Lfoot_target = Lfoot + Lfoot_height 
- Rfoot_target = Rfoot + Rfoot_height 

Root Position 

- Determine which foot is lower 
- root_offset = smaller of Lfoot_height and Rfoot_height 
- Update vertical position of root joint 
- y_root = y_root + root_offset 

Foot Position – Use Limb IK with Lfoot_target and Rfoot_target to position feet 

## Cross Dissolve

dissolve

### stand to walk

We could have two independent animations playing  (stand & walk) and then gradually ramp up the ‘u’  value from 0 to 1

If the transition is reasonably quick (say <0.5 second),  it might look OK

Note: this is just a simple example of a dissolve and  not necessarily the best way to make a character start  walking… 

### walk to run

Blending from a walk to a run requires some additional  consideration… 

We want to make sure that the walk and run are in phase when  we blend between them   – That is, both should start when the left (or right foot) hits the  ground

One could animate them in a consistent way so that the two clips  both start at the same phase

But, let’s assume they are not in sync…

Store an offset for each animation clip that marks some synch point  (say at the time when the left foot hits the ground)

Call these offsets owalk and orun

Since we want the walk and run animations to stay in  phase, we need to **synchronize** them

$s_{walk}=Lerp(1,\frac{T_{walk}}{T_{run}},u)$ 

- $t'_{walk}=s_{walk}t_{walk}=s_{walk}\mod(o_{walk}+t,T_{walk})$
- $t'_{run}=s_{walk}t_{run}=s_{walk}\mod(o_{run}+t\frac{T_{run}}{T_{walk}},T_{run})$

$u=\frac{t}{T_{walk}}$

## bilinear blend



---

mirroring

need symmetrical or closed enough

