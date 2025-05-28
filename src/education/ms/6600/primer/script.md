# Primer Presentation: Smoke and Fire Simulation

### Slide 1: Title Slide

Good morning everyone! My name is David Liu, [my name is xiaonan], and today, I am excited to present our talk on **Smoke and Fire Simulation**.

- This presentation covers the fundamental physics and computational techniques used to generate realistic smoke and fire effects in films, games, and scientific applications.
- We will explore fluid simulation techniques, target-driven smoke animation, and fire rendering methods.

------

### Slide 2: Contents

This presentation is divided into six key sections:

I will firstly go through the first three part:

1. **Introduction** – Covering real-world applications in movies and games.
2. **Fluid Simulation** – Discussing mathematical models and computational techniques.
3. **Smoke Simulation** – Introducing numerical approaches and target-driven techniques.

💡 **Before we dive in**, let’s start with some examples of smoke and fire in action!

### Slide 3: Introduction

🚀 Smoke and fire effects are **everywhere** in digital media—**but have you ever thought about how they’re created?**

Realistic simulation is **computationally expensive**, requiring efficient techniques to balance **accuracy and performance**.
To appreciate this better, let’s take a look at some well-known examples from **movies and games**.

### **Slide 4: Real-World Examples**

🎬 **First, a quick question for you all:**
**How many of you have watched \*The Hobbit\*?** (*Raise your hand if you have!*)

🔥 *The Hobbit* is an excellent example of **fire and smoke simulation in movies**. The dragon, **Smaug**, breathes **realistically fire** with **fluid-based effects**, blending fire, smoke, and heat distortion.



🎮 **Now, for the gamers in the room:**
**Who has played \*Uncharted 4\*?** (*Nod or raise your hand!*)

🎮 In *Uncharted 4*, we see **highly optimized smoke rendering** in real-time environments.

These examples highlight the importance of **fluid simulation techniques**—which we’ll now explore in detail!

------

### Slide 5: Revisiting Fluid Simulation

💡 **Fun Fact:** Did you know that smoke and fire **are actually fluids?**

🧊 Even though **we don’t think of them as "liquids"**, their motion follows the **same physical principles** as water. That’s why **fluid simulation** is key to making realistic smoke!

The foundation of this motion is described by **the Navier-Stokes equations**, which we’ll break down next.

------

### Slide 6: The Navier-Stokes Equations

🧠 **"Okay, brace yourselves—math time!"** 😆

The **Navier-Stokes equation** governs how fluid moves:

$\frac{\partial \mathbf{u}}{\partial t} + (\mathbf{u} \cdot \nabla) \mathbf{u} = -\frac{1}{\rho} \nabla p + \nu \nabla^2 \mathbf{u} + \mathbf{f}$

📝 **Let’s break it down in simple terms:**

- $\mathbf{u} (u)$ – This is the velocity field, describing how fast and in what direction the fluid moves.
- $\frac{\partial \mathbf{u}}{\partial t}$ (partial u over partial t) – This represents how the velocity changes over time.
- $(\mathbf{u} \cdot \nabla) \mathbf{u}$ (u dot del u) – This term is called advection, meaning how fluid carries itself.
- $-\frac{1}{\rho} \nabla p$ (negative one over rho times del p) – This is the pressure force, pushing the fluid around.
- $\nu \nabla^2 \mathbf{u}$ (nu times del squared u) – This term models viscosity, or how "thick" the fluid is.
- $\mathbf{f}$ (f) – These are external forces like gravity or buoyancy.

✅ **Fun Question:** *What happens if we remove the viscosity term?*
👉 The fluid becomes **perfectly smooth**—but also **unrealistically chaotic**!

Now, let’s look at different **numerical methods** used to solve this equation.

------

### **Slide 7: Eulerian (Grid-Based) Approach**

- In **grid-based (Eulerian) simulation**, we divide space into a **grid** and observe how fluid moves **through fixed points**.
- The Marker-and-Cell (MAC) grid prevents instability by storing:
  - **Velocities at cell faces**
  - **Pressure at cell centers**
- The **pressure projection step** keeps the fluid incompressible.

📌 [Visual Cue]: "Here’s a diagram showing how MAC grids store velocity and pressure."

**Pros:** ✅ Stable, efficient
**Cons:** ❌ Can lose fine details

### **Slide 8: Lagrangian (Particle-Based) Approach**

- Instead of using a grid, Lagrangian approach **track particles individually**.

- A common method is Spherical Particle Hydrodynamics (SPH), where:

  - Each **particle carries fluid properties** like mass, velocity, and density

  - A **kernel function** smooths interactions.

    We use a smoothing kernel to interpolate values between particles: $\rho(\mathbf{x}) = \sum_j m_j W(\mathbf{x} - \mathbf{x}_j, h)$ 
  
    (Pronounced: "rho of x equals sum over j, m sub j, times W of x minus x sub j, h.")
  
  - Here is a Schematic view of an SPH convolution
  
  - This method **handles free surfaces better** than Eulerian methods.

**Pros:** ✅ Preserves fine details

**Cons:** ❌ It is extremely Expensive computation

------

### Slide 10: Hybrid Methods – PIC & FLIP

⚡ To get **the best of both worlds**, we use **hybrid techniques**:

- **PIC (Particle-In-Cell):** Moves velocity data **to a grid for force calculations**.
- **FLIP (Fluid-Implicit-Particle):** Transfers **only velocity changes**, reducing numerical dissipation.

## *Slide 1: Smoke Simulation Title Slide*
🎤 [Smile and make eye contact]  

Now, let’s move on to *Smoke Simulation*—one of the most fascinating areas of fluid simulation!  

Smoke is *complex* to simulate because it *moves unpredictably, forms **swirling patterns, and **dissipates over time*. 

To model it accurately, we use *fluid equations, numerical methods, and computational tricks* to achieve realistic effects.  

Let’s start by exploring the *fundamental techniques* used in smoke simulation.

---

## *Slide 2: Basic Concepts of Smoke Simulation*
💡 *What makes smoke different from other fluids?*  

Unlike water or oil, smoke behaves in a *unique way* due to its *low viscosity, compressibility, and buoyancy effects*.  

### *Three key principles govern smoke simulation:*
1️⃣ *Inviscid, incompressible Euler equations*  
   - Inviscid means *no viscosity*, making smoke more fluid-like.  
   - When the smoke’s velocity is well below the speed of sound the compressibility effects are negligible as well, and 
   - the assumption of incompressibility greatly simplifies the numerical methods.

2️⃣ *Semi-Lagrangian schemes*  
   - The semi-Lagrangian algorithm builds a new grid of velocities from the ones already computed by tracing the midpoints of each voxel face through the velocity field. 
   - New velocities are then interpolated at these points and their values are transferred to the face cells they originated from. 
   - It is possible that the point ends up in one of the occupied voxels. In this case we simply clip the path against the voxel boundary as shown in Figure 2. This guarantees that the point always lies in the unoccupied fluid.
   - These allow for *larger time steps* in simulation, making it more efficient.  
   - Downside? They introduce *numerical dissipation, which makes smoke **lose fine details*.  

3️⃣ *Vorticity confinement*  
   - in practice, computational resources are limited, grids are fairly coarse (even coarser in CG than in CFD), and the discrete difference equations may not be asymptotically close enough to the continuous equations for a particular simulation to behave in the desired physically correct fashion. Our key idea is to design a consistent numerical method that behaves in an interesting and physically plausible fashion on a coarse grid.
   - Smoke should have *swirling, natural motion* rather than looking too smooth.  
   - This method *adds forces* to enhance the *rolling motion* of smoke, creating more realistic movement.  

✅ *Question for the audience:* Have you ever noticed how cigarette smoke curls up in small spirals?  

👉 That’s because of *vorticity*, which we will discuss in detail later.  

---

## *Slide 3: Smoke Velocity & Buoyancy*
🔥 *Why does smoke rise?*  

One of the *biggest factors* in smoke simulation is buoyancy—the *upward force* caused by *temperature differences*.  

### *Equation for buoyancy force:*
$$
\mathbf{f}_{buoyancy} = \alpha (T - T_{ambient}) \mathbf{g}
$$

Where:

- *\( \alpha \) (alpha)* – The buoyancy constant, controlling how fast smoke rises.  
- *\( T \) (T)* – The smoke temperature.  
- *\( T_{ambient} \) (T ambient)* – The temperature of the surrounding air.  
- *\( \mathbf{g} \) (g)* – The gravitational force vector.  

💡 *Fun Thought:*  

If you increase \( \alpha \), the smoke *rises faster—imagine a **hotter fire with stronger updrafts*!  

This equation ensures that *hot smoke rises and cold smoke settles*, just like in real life.

---

## *Slide 4: Target-Driven Smoke – The Concept*
🌫 *What if we could shape smoke?*  

Sometimes, we need *smoke to behave in a specific way*, such as forming letters or flowing towards a target.  

This is where *Target-Driven Smoke Animation* comes in.  

### *How does it work?*
✔ A sequence of *target densities* guides the smoke.  
✔ The smoke moves *step by step* towards each target.  
✔ Fluid dynamics equations ensure that the motion still looks *natural*.  

🎯 *Analogy:* Think of it like *guiding fog through an invisible maze*—we are setting waypoints, and the smoke gradually follows them.

---

## *Slide 5: Equations of Target-Driven Smoke*
📊 *How do we make smoke move toward a target?*  

To control smoke, we need the Navier-Stokes equations to evaluate *fluid velocity field* and density.

## **Slide 6: Driving Force in Target-Driven Smoke**

🚀 **Now, let’s talk about the core driving force behind Target-Driven Smoke!**

To guide smoke density toward a target density field, we introduce a **correction force** into the **fluid motion equations**.

### **Equation for Driving Force:**

$F(\rho, \rho^*) = \tilde{\rho} \frac{\nabla \tilde{\rho}^*}{\tilde{\rho}^*}$

📖 **Breaking it down:**

- **\rho (rho)** – The **current smoke density** at any given point in space.
- **\rho^\* (rho star)** – The **target smoke density field**, which we want the smoke to follow.
- **$\tilde{\rho}^*$ (rho tilde star)** – A **smoothed version** of the target density, used to prevent numerical instability.
- **$\nabla \tilde{\rho}^*$ (del rho tilde star)** – The **gradient** of the smoothed target density field, which tells us **the direction the smoke should move**.
- **$G_\sigma$ (G sigma)** – A **Gaussian smoothing filter**, which helps **reduce sharp density transitions** that might cause instability.

💡 **Why do we need smoothing?**

Without smoothing, the target density field could be **too sharp**, causing unstable movements or sudden jumps in smoke motion. By applying a **Gaussian filter**, we ensure a **gradual transition** in the smoke movement.

✅ **Key takeaway:**

This force **gently steers** the smoke toward the desired density while maintaining **fluid realism**.

## **Slide 2: Smoke Gathering**

🌫️ **Next, let’s discuss how we handle density adjustments in Target-Driven Smoke!**

Sometimes, smoke density **thins out in certain areas**, causing **unnatural dissipation**. To fix this, we introduce **Smoke Gathering**, which helps **redistribute density** in a way that looks realistic.

### **Equation for Smoke Gathering:**

$G(\rho, \rho^*) = \nabla \cdot [\rho \tilde{\rho}^* \nabla (\rho - \rho^*)]$

📖 **Breaking it down:**

- **G(\rho, \rho^\*) (G rho rho star)** – The **correction term** for adjusting smoke density.
- **\rho (rho)** – The **current smoke density**.
- **\rho^\* (rho star)** – The **target density**.
- **$\tilde{\rho}^*$ (rho tilde star)** – The **smoothed target density field**, again used to prevent instability.
- **$\nabla (\rho - \rho^*$) (del rho minus rho star)** – The **gradient of the density difference**, which measures **how far the current smoke density is from the target**.
- **$\nabla \cdot [\dots]$ (divergence of brackets)** – This ensures that smoke accumulates **in the correct places** rather than **spreading out too evenly**.

✅ **Two important components:**

 1️⃣ **Gradient Term $\nabla (\rho - \rho^*)$:**

- Measures **how different the current density is from the target**.
- Points **toward regions that need more smoke**.

2️⃣ **Divergence Term ∇⋅[… ]\nabla \cdot [\dots]:**

- Ensures smoke accumulates **in the right places** rather than dispersing randomly.
- Acts as a **flow correction**, helping to **adjust density distribution** smoothly.

💡 **Why do we need Smoke Gathering?**

- **Without it**, smoke might **fade too quickly**, losing realism.
- **With it**, smoke properly accumulates in areas where it is supposed to be **denser**.

✅ **Key takeaway:**

Smoke Gathering helps **preserve detail**, keeping smoke looking **full and natural over time**.

## *Slide 8: Strengths and Limitations of Target-Driven Smoke*
🎯 *Now, let’s weigh the pros and cons.*  

### *Pros:*
✔ *Direct control* over the smoke’s shape and movement.  
✔ *Fast computation*, making it efficient for animation.  
✔ *Effective for visual effects*, where precision is needed.  

### *Cons:*
❌ *Not always natural-looking—sometimes diffusion makes smoke **too smooth*.  
❌ *Parameter tuning is tricky—requires **trial and error*.  
❌ *Lack of perfect approximation*—hard to match real-world smoke exactly.  

💡 *So, when should we use it?*  

👉 If we need precise control, such as *directing smoke into a shape for a movie scene*, this method is ideal.  

---

## *Slide 9: Target-Driven Smoke Results*
🎬 *Finally, let’s see this in action!*  

Here’s a *video demonstration* showing how *target-driven smoke animation* works:  
🔗 [Play video from the slide]  

Watch how the smoke gradually moves toward a target *while maintaining realistic motion*!  

💡 *Final Thought:*  

Next time you see *smoke forming patterns in a movie, you’ll know it’s **not just random—there’s **math behind it!*  

🚀 Thank you for your attention! Now, let’s move on to Xiaonan's section. 

------

