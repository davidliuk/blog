# InstaRig: An Automatic Rigging Tool for Maya using RigNet
## 5-7分钟演讲脚本（含时间标注）

## 第1页：标题页 (30秒)
Good afternoon everyone. Today I'm presenting InstaRig, an automatic rigging tool for Maya that we've developed using RigNet technology. As you can see, InstaRig can generate appropriate skeletal structures for diverse models - from humans and animals to fantasy creatures. The blue lines show the skeleton structure, while the red dots indicate joint positions.

## 第2页：主要特点和目标用户 (1分钟)
InstaRig offers several key features designed to streamline the rigging process:

First, it's not restricted by shape categorization or fixed skeleton templates, making it versatile for any character design.

Second, it automatically determines a logical root joint based on the character's anatomy.

Third, you can adjust the joint density as needed using our detail level control.

Fourth, it supports rigging of mesh groups without requiring combination first.

Fifth, the entire process starts with just one click.

And lastly, it supports batch processing for multiple characters.

Our target audience includes animators who need quick character rigging solutions and game developers requiring efficient rigging for their production pipelines.

## 第3页：技术方法 (1分30秒)
InstaRig is based on the research "RigNet: Neural Rigging for Articulated Characters" published at SIGGRAPH 2020.

At its core, we implement an end-to-end graph neural network pipeline with three main components:

1. For joint position prediction, we use GMEdgeNet combined with attention-driven mean-shift clustering.

2. For skeleton connectivity, we employ BoneNet with a minimum spanning tree algorithm to create valid skeleton structures.

3. For skinning weights, we again utilize GMEdgeNet to predict how each joint influences the mesh vertices.

The diagram illustrates our pipeline from input model to final rigged character with appropriate skinning weights. The bottom images show how our graph neural networks process mesh data to understand character topology.

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