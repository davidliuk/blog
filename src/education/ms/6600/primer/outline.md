# **Primer Presentation Plan: Smoke and Fire Simulation**

30 min

**Target:** 25 pages/slides, with an **introductory video** and another **video for future developments**

## **Finalized Slide Breakdown (25 Pages)**

### **📌 Section 1: Introduction (3 slides)**

1. **Title Slide** (1 Page)
   - *Title:* **Smoke and Fire Simulation**
   - *Presented by:* Xiaonan Pan, David Liu
   - *Date:* February 10, 2025
2. **Why Smoke and Fire Simulation Matter** (1 Page)
   - Applications: Movies (VFX), Games, Engineering, Safety Training, VR
   - Examples: *Lord of the Rings (Smoke Ship), Avatar, Hogwarts Legacy*
   - *Key Question:* How do we simulate realistic smoke and fire efficiently?
3. **📹 Introductory Video** (1 Page)
   - Short clip showing **real-world vs. simulated smoke** (e.g., SIGGRAPH videos or game VFX).
   - Purpose: Showcase the complexity and importance of smoke simulation.

------

### **📌 Section 2: Fundamentals of Smoke Simulation (5 slides)**

1. **Physical Principles of Smoke** (1 Page)
   - Smoke is a mixture of hot gases, particles, and vapor.
   - **Key Physics:** Navier-Stokes equations, turbulence, buoyancy effects.
2. **Mathematical Models for Smoke** (1 Page)
   - Euler equations vs. Navier-Stokes equations.
   - **Key Challenge:** Computational complexity & stability.
3. **Advection, Diffusion, and Vorticity in Smoke** (1 Page)
   - Semi-Lagrangian advection for stable simulations.
   - **Why is vorticity important?** Adds small-scale rolling details.
4. **Stable Fluids Method (Stam, 1999)** (1 Page)
   - First real-time stable smoke simulation.
   - Uses Semi-Lagrangian advection & implicit solvers.
   - **Pros & Cons:** Stable, but lacks fine turbulence details.
5. **Interaction with Objects (Fedkiw et al., 2001)** (1 Page)
   - **Key Idea:** Smoke should swirl realistically around objects.
   - Introduction of **vorticity confinement** to enhance realism.

------

### **📌 Section 3: Advanced Smoke Simulation Techniques (6 slides)**

1. **Vorticity Confinement (Fedkiw et al., 2001)** (1 Page)
   - Solves the issue of dissipating small-scale details.
   - **Key Concept:** Adds back lost energy to enhance realism.
2. **Rendering Smoke with Photon Mapping** (1 Page)
   - **Rendering Challenge:** Smoke interacts with light dynamically.
   - **Solution:** Photon mapping for accurate lighting & shadows.
3. **Target-Driven Smoke Animation (Fattal & Lischinski, 2004)** (1 Page)
   - **Key Problem:** How do we control smoke in animation?
   - **Solution:** Driving forces & gathering terms to match target shapes.
   - Example: *Gandalf’s smoke ship in LOTR.*
4. **Real-time Smoke in Games (Game Engines like Unity/Unreal)** (1 Page)
   - Particle-based vs. grid-based simulation.
   - Trade-offs between speed and realism.
5. **Hybrid Techniques: Neural Networks for Smoke (Recent Research)** (1 Page)
   - AI-based smoke simulation reduces computational cost.
   - Example: Machine-learning-assisted fluid simulations.
6. **📹 Video: Example of Advanced Smoke Simulation** (1 Page)
   - Possible video sources: Deep-learning smoke generation or real-time VFX examples.

------

### **📌 Section 4: Fire Simulation (4 slides)**

1. **Why is Fire Simulation Different from Smoke?** (1 Page)
   - Fire = combustion + smoke + light emission.
   - **Extra physics:** Heat transfer, fuel consumption, chemical reactions.
2. **Fluid Dynamics of Fire (Nguyen et al., 2002)** (1 Page)
   - Fire modeled with Navier-Stokes equations + thermal dynamics.
   - **Techniques:** Procedural vs. physics-based methods.
3. **Rendering Fire: How Light and Flames Behave** (1 Page)
   - **Key Concept:** Black-body radiation model.
   - **Realism Challenge:** Simulating brightness & transparency.
4. **Fire in Games and Movies** (1 Page)
   - Real-time fire simulation in *Battlefield V* and *Unreal Engine 5.*

------

### **📌 Section 5: Real-World Applications & Challenges (5 slides)**

1. **Smoke Simulation for Safety & Engineering** (1 Page)
   - Firefighting training, industrial hazard simulations.
   - CFD applications in real-world safety systems.
2. **Movie & Game Industry: Case Studies** (1 Page)
   - *Avatar:* High-end fluid simulations.
   - *Hogwarts Legacy:* Real-time fire & smoke VFX.
3. **Real-Time vs. Offline Rendering: Trade-offs** (1 Page)
   - **Offline:** Physically-based simulations for realism (*Pixar, Disney*).
   - **Real-time:** Faster but less realistic (games).
4. **Challenges & Limitations of Smoke Simulation** (1 Page)
   - **Main Issues:** Computational cost, numerical stability, lack of precise control.
   - **Potential Solutions:** AI, GPU acceleration, hybrid models.
5. **📹 Future of Smoke & Fire Simulation (Video)** (1 Page)
   - Possible sources: AI-driven smoke, real-time advancements.

------

### **📌 Section 6: Conclusion & References (2 slides)**

1. **Final Takeaways** (1 Page)
   - Smoke and fire simulation is a balance between **accuracy, speed, and control.**
   - Future trends: **AI, GPU advancements, real-time physics.**
2. **References & Acknowledgments** (1 Page)
   - List of papers used with short descriptions.

------

## **Next Steps**

✅ **Prepare the PowerPoint slides** based on this breakdown.
 ✅ **Gather and insert relevant videos for slides 3, 14, and 23.**
 ✅ **Summarize reference materials** for the bibliography.
 ✅ **Submit the draft at least 3 days before the presentation date (by Feb 7).**

Would you like me to help design the PowerPoint template or draft the first few slides? 🚀