# InstaRig: An Automatic Rigging Tool for Maya using RigNet
## **Introduction**

Good morning, everyone. Today, I’m excited to present **InstaRig**, an automatic rigging tool for Maya that we developed based on **RigNet**, a method introduced in a paper published at **SIGGRAPH 2020**.

## **Main Features**

InstaRig offers several key features to simplify the rigging process:

- First, it can generate skeletons and perform skinning for any character with just one click.
- Second, you can adjust the joint density using our **detail level control**.
- Third, we provide an **editor mode** that lets you easily modify the skeleton and re-apply skinning.
- Finally, it supports basic **IK preview** to ensure the rig behaves correctly.

> Our target users include **animators** who need fast rigging solutions, as well as **game developers** looking for efficient integration into their production pipeline.

## **Technical Approach**

> InstaRig is built on the research *"RigNet: Neural Rigging for Articulated Characters"*, published at SIGGRAPH 2020.

We implemented an end-to-end **graph neural network** pipeline consisting of three main stages:

1. **Joint Position Prediction** from a given mesh
    We use **GMEdgeNet** combined with **attention-driven mean-shift clustering** to locate joint candidates.
2. **Skeleton Connectivity Prediction** based on joints and mesh
    Here we use **BoneNet**, along with a **minimum spanning tree** algorithm, to build valid skeleton structures.
3. **Skinning Weight Prediction** from skeleton and mesh
    Again, we use **GMEdgeNet** to estimate how each joint influences mesh vertices.
4. If there are any change during **edit mode**, we will directly use the edited skeleton for skinning prediction.

> The diagram shows our pipeline—from the input mesh to the final rigged character with calculated skinning weights. The bottom row illustrates how our GNNs analyze mesh data to understand the character's topology.

## **Editor Mode**

Next, let’s look at the **editor mode** in action.

We begin by auto-rigging a humanoid model. As you can see, the legs have several redundant joints. We can simplify the structure by **merging joints**, connecting the parent directly to the child.

At the same time, we want to add more detail to the hands. We can do this by **splitting bones** to add extra joints.

Now, we can **re-skin** the model using the new skeleton. As shown here, the re-skinning works quite well and fits the updated joint structure accurately.

## 第4页：开发方法和第三方软件 (1分钟)
Our development approach follows five steps:
1. Implementing the RigNet architecture
2. Collecting and processing training data
3. Training our neural network models
4. Developing a Maya plugin GUI using MEL
5. Integrating pre-trained models for joint, connectivity, and skinning weight inference

Our development relies on several key technologies:

- PyTorch and Torch Geometric for machine learning and graph networks
- Open3D for 3D data processing
- Conda for environment management
- PySide for interface components

## 第5页：版本路线图和界面 (1分钟)

- For our Alpha version, we're focusing on building the core neural networks and designing a basic interface for importing meshes and initiating auto-rigging.

- The Beta version will expand functionality to support batch processing and rigging of complex mesh groups.

As shown on the right, our user interface provides intuitive controls for geometry selection, model importing, symmetry axis selection, skeleton detail adjustment, batch processing options, and one-click auto-rigging with process logging.

## 结束语 (30秒)
Thank you for your attention.





## Development Approach and Third-Party Software

Now, let me walk you through our development approach and the technologies we're using. Our development process consists of five key steps:

## Development Approach and Third-Party Software (1 minute)

Let‘s walk through our development approach and technologies. We will follow a five-step process:

First, we will implement the RigNet architecture as our system's foundation.

Second, we will collect diverse training data covering various character types.

Third, we will train our neural networks for joint prediction, skeleton connectivity, and skinning weights.

Fourth, we will develop a Maya plugin GUI using MEL, making this plugin artist-friendly.

Finally, we integrated pre-trained models for efficient inference.

Our technical stack includes PyTorch and Torch Geometric for machine learning, Open3D for 3D processing, Conda for environment management, and PySide for our interface components.

## Version Roadmap and Interface (50 seconds)

Our development roadmap consists of two phases:

The Alpha version focuses on building core neural networks for joint prediction, connectivity, and skinning, along with a basic interface for importing meshes and initiating auto-rigging.

Our Beta version will add batch processing capabilities and support for complex mesh groups without requiring pre-combination.

As shown here, our interface offers intuitive controls for model importing, symmetry options, and skeleton detail adjustment. Users can manage batch processing and trigger the entire rigging process with one click while monitoring progress through the log.

In conclusion, InstaRig streamlines the traditionally time-consuming rigging process, benefiting both animators and game developers in their production pipelines.

That’s our vision for the InstaRig plugin. Thank you for your attention.