# Post-Mortem Report – InstaRig

## Development Team

### What were the tasks and responsibilities of each team member?

- Dawei Liu: Skeleton-connectivity prediction, Data processing, model packaging inside Maya, density-control(level-of-detail) module, asynchronous processing optimization(for model inference), progress bar, and the interactive Edit Mode that lets artists edit skeleton and re-skinning.
- Xiaonan Pan: Design and training of the Joint-Prediction and Skinning-Prediction networks; building the IK-preview UI; adding crash-prevention guards inside Maya.

###  How did you go about integrating your code? 

InstaRig's inference pipeline contains several neural prediction modules. I develop a wrapper layer to hold all APIs that can be exposed to maya plugin to call, so the development process can be split into front-end (plugin UI) and back-end (inference). For the inference module, we firstly plugged the pretrained papers into the adapters to ensure the signals flowed, then hot-swapped our own checkpoints as they matured. For the plugin side, we firstly provide only simple buttons to import objects and start the inference pipeline. Then, I developed a level-of-detail control module to pass some controllable parameters to the inference module. Moreover, I developed the Edit mode for users have a better control of skeleton structure, and change the back-end inference module to provide a new pipeline from given skeleton to skinning. Finally, it takes some time for the model to inference, so I change to async processing when call the inference module and add a progress bar.

### How much time did you personally spend on this project?

75 hours

### What percent of the total work was your contribution to the project?

~50 %. I handled the back-end pipeline while my teammate focused on perception nets and UI, so the split felt even.

## Development Effort

### What went right with your development effort?

*Rapid prototyping.* Leaning on alpha, beta and final checkpoints gave us a runnable demo on time. 

*Clear module boundaries.* We developed a wrapper to split the whole project into front-end(maya plugin UI) and back-end (PyTorch model inference) early saved merge pain later.

*Weekend “deep-work” blocks.* We reserved uninterrupted time for tricky problems such as density loss, maya crash, etc.

### What went wrong with your development effort?

*Dataset scarcity.* We never found a more diverse rig set that includes more categories of models like fat person or other more diverse bodies, so generalisation suffers.

### How close did you keep to the development schedule?

We add more usability features to develop so we change a little of our original schedule. We successfully met every checkpoints(alpha, beta and final).


### ChatGPT

#### What did you think of using ChatGPT to create part of the UI in the HW3 plugin assignment? Was it helpful?
ChatGPT was perfect for developing any kind of UI including the maya MEL and PySide. It can provide a quite usable code structure and cut typing time by half.

### Did you use ChatGPT for any part of your tool’s software development (i.e. UI creation, Mel scripting, C++ , etc.)?

I used GPT mainly for MEL, for explaining some PyTorch API usage and for debugging. For core module I still hand-wrote code and stepped through every new block in the debugger since ChatGPT is not that reliable in this complex project. But it still very helpful when finding some unexpected bug and provide some thoughtful solutions.

### If you had to do it all over again, what would you do differently?

We may change to use a more advanced Rigging model called UniRig, which is just accepted to SigGraph 2025. It is a very powerful model using the transformer architecture. It have a much more faster speed and more controllable features. It originally support a optional parameter call type to control the models category. Can it provide a much larger dataset which contains more than 20,000 models, 10 times of RigNet. Also, we may invest a day up front to write a *prompt cookbook* so both of us phrase requests the same way.

### Changes to the Work Plan Tasks?

Merge “network-design” and “training” tasks. Moreover, we add a Edit mode and async processing logic to enhance user experience.

### Changes to the Development schedule

Due to the change of our tasks, we replace and rearrange part of time to develop the Edit mode and usability features.

### How you worked with your teammate?

We owned distinct modules but swarm-debugged any red test regardless of who wrote the line—pair-programming with Discord screen sharing and kept morale high even at 2 a.m.

## Lessons Learned

| Area                                  | Takeaways                                                    |
| ------------------------------------- | ------------------------------------------------------------ |
| **Technical**                         | GNNs are powerful for topology, but attention weights alone are not a silver bullet—density heuristics still matter. |
| **Software engineering**              | “Demo-driven development” works: get something clickable, then iterate. Also, never refactor right before a live demo. |
| **Project management**                | Block out long uninterrupted stretches for mathematical work; short bursts suffice for UI polish. |
| **Maya integration**                  | All UI calls must run on Maya’s main thread; violating that rule causes random crashes that are hard to trace. |
| **Advice to CIS 5600/5620 newcomers** | Treat the linear-algebra and geometry basics as non-negotiable—every SIGGRAPH paper layers fancy tricks on top of those fundamentals. Start small: re-implement paper figures before dreaming of end-to-end tools. |
| **Wish-list topics**                  | A short module on machine learning in Graphics and a hands-on CUDA workshop would have lowered the barrier when we hit GPU memory limits. |

## Self-Assessment

I believe the authoring tool project earns an **A**. The tool meets the functional spec, runs inside production Maya, and includes quality-of-life features (level-of-detail control, Edit Mode) that go beyond the rubric. My own share covered the backend inference module and integration stack, passed QA tests, and was delivered on schedule.
