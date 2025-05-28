# Transcript

Hi everyone, I’m David Liu. Today I’ll walk you through **RigNet**, a neural approach to automating character rigging — a traditionally time-consuming task.

## Overview

Let's have a quick view of today's topics:

1. I’ll start with some background including the related knowledge we've learned, challenges and motivation. 
2. Then, I’ll have an quick overview of RigNet’s approach and walk through the three core modules: joint prediction, connectivity prediction, and skinning prediction. 
3. After that, I’ll show some results and discuss evaluations.

## Background

### **Rigging, Binding, Skinning**

From last semester's CI562, we've learned a chapter of **Rigging, Binding, Skinning**. We took a lot time on implementing the skinning methods like LBS or DQS. But before apply these skinning methods, we should firstly have model's skeleton and skinning weights.

### Motivation

Character rigs have been the **backbone of articulated figure animation** for over decades.

Without rigs, it's difficult for animators to animate character models effectively.

The motivation behind RigNet is to **automate the rigging process**.

As a result, animators can directly **use the generated skeletons** to animate their models, which will save a lot of time and effort.

### Challenge

Predicting a skeleton and skinning weight from an arbitrary single static mesh is not easy.

------

**Skeleton**

As shown here, one challenge is that **characters can vary significantly** in both the **number of parts** and their **overall structure**.

------

**Skinning**

Similarly, when computing skinning weights, animators perceive some structures as highly **rigid** and others as more **flexible**.

For example, here we can see the skeleton of a **snail character**.

- The skinning weights on the shell move **rigidly as a whole** according to a single bone, 
- while the rest of the body **deforms more smoothly** in response to the other bones.

*A learning method should be capable of **capturing this variability in skinning behavior**.*

------

**Level of Detail**

Finally, another challenge for a rigging method is to allow **easy and direct control** over the **level of detail** in the output skeleton.

As you can see from these animator-created rigs, while animators largely agree on the **topology** and **layout of joints** for a given character, there is still **ambiguity**—both in terms of the **number of joints** and their **exact placement**.

## Overview

To address these challenges, **RigNet** proposes a deep learning architecture composed of **three modules**:

------

**1. Skeletal Joint Prediction Module**

First, we apply a **joint prediction module**, which is trained to predict both the **appropriate number of joints** and their **placement**.

Here we provide users with an **optional parameter** that allows them to control the **level of detail** in the output skeleton.

------

**2. Skeleton Connectivity Module**

Second, to form a skeleton from the predicted joints, we apply a **connectivity prediction  module**, which predicts the **hierarchical tree structure** connecting the joints.

The resulting bone structure is a function of both the **predicted joints** and the **shape features** of the input character.

------

**3. Skinning Prediction Module**

Finally, we apply a **skinning prediction module** to produce **skinning weights**, indicating the degree of influence each **mesh vertex** receives from different **bones**.

------

All of these modules are trained in a **supervised manner** from animator-created character rigs.

In the following sections, we will describe the **input** and **internal design** of each module in detail.

## Joint Prediction

### Architecture

00:04:29.040 

The joint prediction module is trained to predict the number and location of skeleton joints.

To this end, it learns to displace mesh geometry towards candidate joint locations. 

The module is based on a GMEdgeNet, which extracts topology- and geometry-aware features from the mesh to learn these displacements.

At the same time, we also learn a weight function over the input mesh, which is used to reveal which surface areas are more relevant for localizing joints. This can be seen as a form of neural mesh attention.

After that, we introduce a diffe'rentiable clustering scheme, which uses both displaced vertices and the neural mesh attention to collapse the vertices further to potential positions of the joints. Since areas with higher point density and greater mesh attention are strong indicators of joint presence, we resort to mean shift clustering and then maximum separation to extract joints.

In classical mean shift clustering, each data point is equipped with a kernel function. At each iteration, all points are shifted towards density modes.

Here, we show the mean shift equation. We employ a variant of mean shift clustering, where the kernel is also adjusted by the vertex attention. In this manner, points with greater attention influence the estimation of density more.

Here is the shift equation in our implementation. *We use the Epanechnikov kernel in our implementation.* 

Note that the kernel function takes the parameter *h* as bandwidth. The bandwidth can be learned simultaneously as we train the network.

The bandwidth also allows user to control on the level of detail of the output skeleton. 

Modifying the bandwidth directly affects the level of detail of the output skeleton.

### Bandwidth

Here is an example: 

- lowering the bandwidth parameter results in denser joint placement, 
- while increasing it results in a sparse skeleton. 

By overriding the learned bandwidth, users can adjust the results to their preference.

------

### Architecture

*At test time, the mode centers of clusters are extracted with no maximum separation as the final detected joints.*

Now we'll discuss more details about the networks used to learn the vertex displacement and attention.

We call this network **GMEdgeNet**. The main operation of this network is geodesic mesh convolution, which we call **GMEdgeConv**.

------

### GMEdgeConv

The GMEdgeConv is inspired by the H-convolution. The main difference is that our operator is applied to meshes and geodesic numbers.

Specifically, given a surface vertex, we consider its **one-ring mesh neighbors** and also the vertices located within the geodesic ball centered at it.

We also found it’s better to learn separate MLPs for mesh and geodesic neighborhoods, and then con'catenate their outputs and process them through another MLP.

In this manner, the networks learn to weight the importance of topology-aware features over more geometry-aware ones.

------

### GMEdgeNet

In GMEdgeNet, we stack three GMEdgeConv layers. Each of the GMEdgeConv layers is followed by a global max pooling layer.

The representations from each pooling layer are con'catenated to form a global mesh representation.

The vertex representations from all GMEdgeConv layers, as well as the global mesh representation, are further con'catenated, then processed through a three-layer MLP to output the vertex attributes—either the displacement or the attention.

With all the components introduced above, we have built the complete **joint prediction module**, which detects joints from a single input mesh.

### Training

The training of the joint prediction module consists of two steps.

1. In the first step, we pre-train the weight attention module with heu'ristically generated ground truth masks.

   As you’ll see on the right, the masks are red for 1 and blue for 0.

   For each training mesh, we find vertices closest to each joint at different directions perpen'dicular to the bones.

   We use **cross-entropy** to measure consistency between the masks and the neural attention.

2. In the second step, we minimize the mesh chamfer distance between collapsed vertices and the training joints.

   The loss is diffe'rentiable with regard to all the parameters of the joint prediction stage, including the bandwidth, the displacement network, and the attention network.

   *We found that adding supervisory signal to the vertex displacements before clustering helps improve joint detection performance.*

   *To this end, we also minimize the transfer distance between displaced points and ground truth joints, forming tighter clusters.*

## Connectivity Prediction

### Architecture

Given the joints extracted from the previous stage, the connectivity prediction module determines how these joints should be connected to form the skeleton.

This module outputs the probability of connecting each pair of joints via a bone, which we call **BoneNet**. It takes the predicted joints along with the input mesh as input, and outputs the probability for connecting each pair of joints via a bone.

### BoneNet

For each pair of joints, the module processes three representations:

1. First, we use PointNet  to capture the **skeleton geometry** from the joint locations.
2. Then, we use GMEdgeNet to capture the **global shape geometry**.
3. Finally, an MLP processes features for each **candidate bone**.

The bone probability is computed via a two-layer MLP operating on the con'catenation of these three representations.

### Architecture

Besides pairwise connectivity probability, we also select the **root joint** using a neural module called **RootNet**. Its internal architecture follows BoneNet.

With these pairwise bone probabilities and the predicted root as the starting node, we apply **Prim's algorithm** to create a minimum spanning tree that represents the skeleton.

*We found that using these bone probabilities to extract the MST resulted in skeletons that better agree with animator-created ones in terms of topology.*

### Training

To train the connectivity prediction module, we build a **matrix** to store the probability for connecting each pair of joints with a bone based on our prediction.

We also form such a matrix from the animator-created skeleton, including the connectivity of the skeleton. The value is 1 if the corresponding joints are connected.

Now, the parameters of BoneNet can be learned using **binary cross-entropy** between the training matrix and the predicted probability matrix.

## Skinning Prediction

After producing the animation skeleton, the final stage applies another network to predict the **skinning weights** for each mesh vertex.

---

To perform skinning, we first extract the mesh representation and capture the spatial relationship of mesh vertices with respect to the skeleton.

Given a vertex on the mesh—for example, as shown here in purple—we compute the **'volumetric geodesic distance** to all the bones passing through the interior of the mesh volume.

Then, we sort the bones according to their geodesic distance to the vertex and create an ordered feature sequence after the *k*-shortest bones.

The feature vector for each bone consists:

- The 3D **positions** of the starting and ending joints of the bone, and
- The inverse of the **'volumetric geodesic distance** from the vertex to this bone.

The final **vertex representation** is formed by con'catenating the vertex position and the feature representations of the *k* nearest bones from the ordered sequence.

---

The skinning prediction module then converts the above skeleton-aware mesh representations into **skinning weights**, using **GMEdgeNet**.

------

### Training

We train the parameters of the skinning network so that the estimated skinning weights align as closely as possible with the training weights.

By treating the vertex skinning weights as a **probability distribution**, we use **cross-entropy loss** to supervise the learning.

*Now we show the experimental results and the evaluation of our method.*

### Dataset

The dataset contains **2,703 characters** and spans a wide range of categories—including:

- Humanoids
- Cultural figures
- Pets
- Birds
- Fish
- Robots
- Toys
- Other fictional characters

Here, we show some example models from the dataset, illustrating its **diversity in shape, topology, and articulation complexity**.

## Results

### Skeleton Extraction

For skeleton extraction, we show some artist-created models alongside the results from our approach. Our results align well with those created by professional animators. 

We also present skeletons produced by **Pinocchio**, 

red boxes highlights its mistakes.

------

### Skinning Weight

Next, we compare skinning weight prediction results.

First are the results from our method. We visualize:

- **Skinning weights** (red indicates high values)
- **Skinning error maps** (yellow indicates high error)

When animating the characters with the predicted skinning, our method accurately captures the underlying articulated parts.

We then show results from a **previous learning-based skinning method**, whose skinning weights tend to **overextend** to larger areas than necessary.

Finally, results from a **geometry-based skinning method** are shown, with even **higher error**.

------

### Quantitative Comparison

We show quantitative results of **skeleton prediction** with other methods.

We apply the **Hungarian algorithm** to match predicted joints to ground truth ones. Metrics such as **IoU, precision, and recall** are defined based on this matching. Higher values indicate better performance.

We also evaluate **transfer distance** between:

- Predicted and ground truth joints
- Joints and bones
- Bones themselves

To measure bone transfer distance, we **densely sample** along the bone and compute distances between samples.

In this metric, **lower values indicate better results**.

From the table, we can see our method **outperforms all others across all metrics**.

---

For **skinning weight prediction**, we compare against:

- Geometrical approaches: **BBW** and **GeoVoxel**
- A learning-based approach: **NeuroSkinning**

Precision and recall are measured by identifying bones that significantly influence each vertex.
 We also report:

- **Average L1 norm** between predicted and reference skinning vectors
- **Average and maximal Euclidean distance** between deformed vertex positions (using ground-truth vs. predicted skinning)

Our approach achieves the **best results across all measures**.

------

### **Generalization**

After training, RigNet is able to **rig diverse 3D models** and even **generalizes to models with different structures and parts**.

 Here are some examples.

We test 3D models animated using our predicted rigs.

The rigs correctly capture the **articulations of arms and legs**.

We present another example animated with predicted skeleton and skinning, where **all limbs are rigged correctly**.

Our method can also **handle non-human models**, predicting reasonable bones for a **cat model**, for instance.

*Our predicted skeletons are **consistent across different shape families**, allowing for **automatic motion transfer** to animate them together.*

## Evaluation

### Questions

Here are the questions I would like to ask the author:

1. **First**, how does it handle characters with highly non-organic or mechanically complex structures, like robots or abstract shapes?

2. **Second**, are there optimizations for real-time prediction?

   Currently, the method focuses on accuracy over speed. There’s no built-in runtime optimization, which limits real-time applicability—but this is a promising area for future work.

3. **Third**, can users enforce constraints or edit the output?

   Not directly. RigNet doesn’t currently support user-defined constraints like fixing the root joint, nor does it provide post-prediction editing. This is one of the major limitations in terms of usability for animators.

### Evaluation

Let’s dive into the evaluation.

**RigNet has several strengths:**

- It’s the first end-to-end neural method that predicts both skeletons and skinning weights directly from raw meshes.
- It offers **user flexibility**—you can adjust the level of skeletal detail.
- It generalizes well across different character types and morphologies.
- And it shows strong performance compared to existing methods.

**But there are also limitations:**

- The paper doesn’t include a runtime analysis, which is critical for real-time applications.
- And as mentioned earlier, user control is limited—there’s no way to apply constraints or refine the predicted rig manually.

### Aceptance

From my point of view, the reception of RigNet would be vaery positive.

**On the plus side**, reviewers appreciated its novelty, thorough evaluation, and real-world relevance to animation workflows.

**The main criticism** was around computational cost, particularly the lack of performance benchmarks for real-time or interactive scenarios.

**Overall**, RigNet represents a significant step forward in automated rigging and opens the door to more flexible and efficient character setup in the future.

**Thank you for your attention!**







To summarize, RigNet is the **first learning-based, complete solution for character rigging**, including both **skeleton creation** and **skinning weight prediction**.

Our approach:

- **Makes no assumptions** about input shape class or structure
- **Generalizes well** to characters with varying structures and morphologies
- **Provides a single parameter** for users to control output granularity

However, there are some **limitations and directions for future work**:

1. **Per-stage training**: Currently, each stage is trained separately. Ideally, the **skinning loss could be backpropagated** to earlier stages to improve joint prediction.
2. **Dataset limitations**: Our dataset contains only one rig per model. Many rigs **omit bones for small parts** (e.g., feet, fingers, clothing, accessories), which **reduces prediction accuracy** for such joints.
3. **Bandwidth parameter**: Our current approach only explores **one mode of variation**. Future work could explore a **richer space for interactively controlling skeletal morphology and resolution**.

