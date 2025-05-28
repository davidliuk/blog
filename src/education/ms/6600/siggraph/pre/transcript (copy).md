# Transcript



## Background

### Motivation



### Challenge

the task of automatic rigging comes with
00:02:09.520 many challenges

00:02:11.360 predicting an animation skeleton and
00:02:13.200 skinning from an arbitrary single static
00:02:15.360 3d mesh is not easy

**skeleton**

00:02:18.080 one challenge is that character and can vary a lot in number of parts and the overall structure as i show here in this animator graded rigs

**skinning**

00:02:28.640 similarly when computing skinning
00:02:30.319 weights animator will perceive
00:02:32.400 structures as highly rigid or smoother
00:02:35.360 for example
00:02:36.560 here i visualize the skeleton of a nail
00:02:38.640 character
00:02:39.920 the skinning waist on the shell moves
00:02:41.599 rigidly as a whole according to the bone
00:02:43.519 here
00:02:45.360 well the rest of the body deforms more
00:02:47.280 smoothly according to the rest of the
00:02:48.840 bone
00:02:50.080 a learning method should capture the
00:02:51.599 skinning variability

**level of detail**

00:02:54.319 finally another challenge for ring
00:02:56.480 method is to allow easy and direct
00:02:58.159 control
00:02:58.720 over the level of detail for the output
00:03:00.239 skeleton
00:03:02.000 as you can see from this animator
00:03:03.599 created rigs
00:03:05.519 well animators largely agree on skeletal
00:03:07.920 topology and layout of joints for an
00:03:09.840 input character
00:03:11.440 there is also some ambiguity both in
00:03:13.200 terms of the number and exact joint
00:03:15.120 placement

## Overview

to address these challenges, RigNet propose the deep learning architecture with three modules

1. 00:03:22.480 

   firstly, we apply a skeletal joint prediction module which is trained to predict the appropriate number of joints and their placement to capture the articulated mobility of input capture as skeletal joint resolution can depend on the intended animation task we provide users an optional parameter that can control the level of detail of the output skeleton
   
2. 00:03:43.680 

   second, to form a skeleton from the predictive joints we apply a skeleton connectivity module to predict the hierarchical tree structure connecting the joints the output bone structure is a function of predicted joints and shape feature of the input capture
   
3. 00:03:59.760 

   finally, we apply a skinning prediction module to produce skinning weight indicating the degree of influence each vertex receives from different bones

all these modules are trained in a supervised manner from character rigs mind online i'll describe input and each module one by one

## Joint Prediction

00:04:20.000 the input to the entire network is a
00:04:21.759 single 3d model in its mesh
00:04:23.440 representation
00:04:25.040 our approach operates directly on the
00:04:26.960 input mesh

### Architecture

00:04:29.040 the first module of our architecture
00:04:31.120 joint prediction module
00:04:32.560 is trained to predict the location of
00:04:34.320 joints that will be used to form the
00:04:36.080 animation skeleton
00:04:38.400 to this end it learns to displace mesh
00:04:40.720 geometry towards candidate
00:04:42.000 joint locations the module is based on a
00:04:45.600 neural network
00:04:46.800 which extracts topology and geometry
00:04:48.880 aware features from the mesh to learn
00:04:50.639 these displacements
00:04:53.199 at the same time we also learn a weight
00:04:55.199 function over the input mesh
00:04:56.880 which is used to reveal which surface
00:04:58.639 areas are more relevant for localizing joints
00:05:01.759 this can be seen as a form of neural
00:05:03.440 mesh attention
00:05:05.600 after that we introduce a differentiable
00:05:08.160 clustering scheme
00:05:09.600 which uses both displaced vertices and
00:05:11.600 the neural mesh attention
00:05:13.120 to collapse the vertices further to
00:05:14.960 potential positions of the joints
00:05:18.240 since areas with higher point density
00:05:20.240 and greater mesh attention are strong
00:05:22.080 indicators of joint presence
00:05:24.479 with results to mean shift clustering
00:05:26.639 and then maximum separation to extract
00:05:28.400 joints
00:05:30.160 in classical mean shift clustering each
00:05:32.400 data point is equipped with the kernel
00:05:34.400 function
00:05:35.520 at each iteration all points are shifted
00:05:37.919 towards density modes
00:05:40.000 here we show the mean shift equation
00:05:43.199 we employ a variant of mean shift
00:05:44.960 clustering where the kernel is also
00:05:46.960 modulated by the vertex attention
00:05:49.919 in this manner points with greater
00:05:52.080 attention influence the estimation of
00:05:53.600 density more
00:05:55.039 here we show the shift equation in our
00:05:57.039 implementation
00:05:59.680 we use epinephrine curve kernel in our
00:06:01.840 implementation
00:06:03.280 note that the kernel function takes the
00:06:04.800 parameter h as bandwidth
00:06:07.039 the bandwidth can be learned
00:06:08.240 simultaneously as we turn the network
00:06:11.039 the bandwidth also allow optional user
00:06:12.880 control on the level of detail
00:06:14.639 or granularity of the output skeleton
00:06:18.080 we found that modifying the bandwidth
00:06:19.759 directly affects the level of detail of
00:06:21.520 the output skeleton

### Bandwidth

00:06:23.360 here is an example lowering the
00:06:26.000 bandwidth parameter results in denser
00:06:27.919 joint placement
00:06:29.600 will increase it results in sparse
00:06:31.440 skeleton
00:06:33.039 by overriding the learned bandwidth
00:06:35.280 users can adjust the results to their
00:06:37.440 preference

### Architecture

00:06:39.360 at test time the mode centers of
00:06:41.360 clusters are extracted with no maximum
00:06:43.280 separation as the final detected joins
00:06:46.560 now we'll discuss more details about the
00:06:48.479 networks used to learn the vertex
00:06:50.160 displacement and attention
00:06:52.960 we call this network gmh net
00:06:56.000 the main operation of this network is
00:06:57.840 geodesic mesh convolution which we call
00:06:59.840 gmh curve

### GMEdgeConv

00:07:02.479 the gmh convolution is inspired by the h
00:07:05.199 convolution in d g
00:07:06.479 c and n the main difference is that our
00:07:09.440 operators is applied to meshes and
00:07:11.360 geodesic numbers
00:07:13.360 specifically given the surface vertex
00:07:16.880 we consider its one ring mesh neighbors
00:07:19.280 and also the vertices located within the
00:07:21.199 geodesic board centered at it
00:07:24.400 we also found it's better to learn
00:07:25.840 separate mlps for mesh and geodesic
00:07:28.160 neighborhoods
00:07:29.759 and then concatenate their outputs and
00:07:31.840 process them through another mlp
00:07:34.319 in this manner the networks learn to
00:07:36.560 weight the importance of topology aware
00:07:38.319 feature
00:07:38.800 over more geometry aware ones

### GMEdgeNet

00:07:42.560 in gmhnet we stack three gmh cuff layers
00:07:46.639 each of the gmh cuff layers is followed
00:07:49.039 by a global max pooling layer
00:07:51.599 the representation from each pooling
00:07:53.520 layers are concatenated to form a global
00:07:55.840 mesh representation
00:07:58.000 the vertex representations from all gmh
00:08:00.960 curve layers
00:08:02.080 as well as the global mesh
00:08:03.440 representation are further concatenated
00:08:06.879 than processed through a three layer mlp
00:08:09.039 to output the vertex attributes
00:08:11.199 either the displacement or the attention
00:08:15.280 with all the components introduced above
00:08:17.599 we have built the complete joint
00:08:18.960 prediction mode which detects joints
00:08:20.639 from a single input mesh

### Training

00:08:23.360 the training of the joint prediction
00:08:24.800 module consists of two steps
00:08:27.280 in the first step we pre-treat the word
00:08:29.520 extension module with heuristically
00:08:31.440 generated ground truth masks
00:08:32.958 as you'll see on the right the masks are
00:08:35.760 1 as you'll see here in red and blue for
00:08:37.839 zeros
00:08:39.360 for each training mesh we find vertices
00:08:41.679 closest to each joint at different
00:08:43.519 directions perpendicular to the bones
00:08:46.160 we use cross entropy to measure
00:08:47.920 consistency between the masks and the
00:08:49.680 neural tension
00:08:51.839 in the second step we minimize the
00:08:53.839 symmetric transfer distance
00:08:55.440 between collapsed vertices and the
00:08:57.040 training joints
00:08:58.880 the loss is differentiable with regard
00:09:00.720 to all the parameters of the joint
00:09:02.320 prediction stage
00:09:03.680 including the bandwidth the displacement
00:09:06.000 network and the attention network
00:09:08.880 we found that adding supervisory signal
00:09:10.800 to the vertex displacements before
00:09:12.560 clustering
00:09:13.360 help improves joint detection
00:09:14.959 performance
00:09:16.720 to this end we also minimize transfer
00:09:19.040 distance between displaced
00:09:20.480 points and ground truth joints firing
00:09:23.040 tighter clusters

## Connectivity Prediction

00:09:26.320 given the joints extracted from the
00:09:28.160 previous stage the connectivity
00:09:30.160 prediction module determines how these
00:09:32.000 joints should be connected
00:09:33.440 to form the animation skeleton at the

00:09:36.080 heart of the stage
00:09:37.040 lines a learned neural module that
00:09:38.720 outputs the probability of connecting
00:09:40.560 each pair of joints via a bone
00:09:43.360 such module we call bone net takes as
00:09:46.399 input our predicted joints along with
00:09:48.800 the input mesh
00:09:50.160 and outputs the probability for
00:09:51.760 connecting each pair of joints via boom
00:09:55.200 the architecture of the module is shown
00:09:57.040 in the green box
00:09:59.360 for each pair of joints the module
00:10:01.519 processes three representations
00:10:04.320 first we capture the skeleton geometry
00:10:06.640 with the point net operating on the
00:10:08.160 joint locations
00:10:09.760 then we capture the global shape
00:10:11.200 geometry with our mesh network
00:10:14.000 and finally an mlp for each candidate
00:10:16.240 phone
00:10:17.600 the bone probability is computed via a
00:10:19.839 two layer mlp operating on the
00:10:21.440 concatenation of these three
00:10:22.959 representations
00:10:26.000 besides pairwise connectivity
00:10:27.600 probability we also selected the root
00:10:29.920 joint
00:10:30.560 using a neural module called roonette
00:10:33.600 its internal architecture follows
00:10:35.279 boomnet
00:10:37.360 with this pairwise bone probabilities
00:10:39.440 and the predicted route as the starting
00:10:41.200 node
00:10:41.839 we apply prime's algorithm to create a
00:10:44.160 minimum spanning tree presenting the
00:10:45.760 animation skeleton
00:10:47.680 we found that using these bone
00:10:49.040 probabilities to extract the mst
00:10:51.839 resulted in skeletons that are agreeing
00:10:53.760 with the animator created ones
00:10:55.200 more in topology 

### Training

00:10:58.240 

to train the connectivity prediction module
00:11:00.160 we build a probability matrix storing
00:11:02.399 the probability for connecting each pair
00:11:04.160 of joints
00:11:04.800 with a bond based on our prediction we
00:11:07.600 also form such metrics with the
00:11:09.200 animator-grade escalator
00:11:11.120 including the connectivity of the
00:11:12.839 skeleton
00:11:14.160 the value is 1 if the corresponding
00:11:16.320 training joints are connected
00:11:19.360 now the parameters of bone net can be
00:11:21.360 learned using binary cross entropy
00:11:23.600 between the training adjacency matrix
00:11:25.839 and the predicted probabilities
00:11:29.360 after producing the animation skeleton
00:11:31.279 the final stage
00:11:32.399 skinning prediction module applies
00:11:34.800 another neural network to predict the
00:11:36.640 skinny ways for each
00:11:37.920 mesh vertex to complete the rigging process

## Skinning Prediction

00:11:41.200 to perform skinning we first extract the
00:11:43.760 mesh representation
00:11:45.040 capture the spatial relationship of mesh
00:11:47.040 vertices with respect to the skeleton
00:11:49.680 given the vertex on the mesh for example
00:11:52.079 as shown here in purple
00:11:53.920 we compute the volumetric geodestic
00:11:55.920 distance to all the bones passing
00:11:57.519 through the interior mesh volume
00:12:00.079 then we sort the bones according to
00:12:01.839 their geodesic distance to the vertex
00:12:04.399 and created an order feature sequence
00:12:06.320 after the k spoon
00:12:08.240 the feature vector for each bone
00:12:09.600 concatenates the 3d positions of the
00:12:11.760 starting and
00:12:12.320 ending joints of this bone and the
00:12:14.639 inverse of the volumetric geodesic
00:12:16.399 distance from the vertex to this bone
00:12:18.880 the final vertex representation is
00:12:20.959 formed by concatenating the vertex
00:12:22.880 position
00:12:23.600 and the feature representations of the
00:12:25.120 nearest case formed by the ordered
00:12:26.880 sequence
00:12:28.320 the screening prediction module converts
00:12:30.160 the above skeleton aware mesh
00:12:31.680 representations to skinny waves
00:12:33.680 with the gmh net 

### Training

we train the parameters
00:12:37.600 of our skin network
00:12:39.040 so that the estimated skinning weight is
00:12:40.880 s occurring as much as possible with the
00:12:42.800 training ones
00:12:45.360 by treating the vertex skinning weights
00:12:47.200 as a probability distribution
00:12:49.120 we use cross central ps loss 

now we show
00:12:52.639 the experimental results and the
00:12:54.000 evaluation of our method

### Dataset

00:12:56.800 to train our method and alternatives we
00:12:59.200 chose the modus resource rignet dataset
00:13:01.600 of 3d articulated characters which
00:13:03.760 provided now overlapping training and
00:13:05.440 testing split
00:13:06.639 and contains diverse characters the data
00:13:09.440 set contains 2703 rigged characters
00:13:12.880 mined from an online repository spanning
00:13:15.760 several categories
00:13:17.200 including humanoid cultural pets birds
00:13:20.959 fish robots toys and other fictional
00:13:24.560 characters
00:13:26.000 here we show some examples from the data set

## Results

### Extraction

00:13:29.519 for skeleton extraction here we show
00:13:31.680 some artists created models
00:13:34.320 and the results from our approach
00:13:37.360 our results are going well with the ones
00:13:39.120 created by animators
00:13:42.480 here we show the skeleton produced by
00:13:44.240 pinocchio
00:13:45.680 we highlight the mistakes introduced the
00:13:47.199 weaponoqueue with red boxes
00:13:51.199 we also show the results produced by a
00:13:53.040 previous volumetric technique
00:13:55.199 with mistakes highlighted with red boxes

### Skinning Weight

00:14:00.240 next we show the skinny weight
00:14:01.680 prediction comparison
00:14:04.160 first are the results from our method
00:14:06.720 here we visualize skinny ways
00:14:08.720 where red means hair value and skinning
00:14:11.600 arrow maps
00:14:12.399 where yellow color indicates hair arrow
00:14:15.279 and a different
00:14:16.000 pose when we move the characters
00:14:17.680 according to skinning
00:14:19.760 our predicted skinning weights capture
00:14:21.440 the underlying articulate parts
00:14:22.800 accurately
00:14:25.760 here we show the results from a previous
00:14:27.760 learning based method for skinning
00:14:30.399 their results overextend the skinny ways
00:14:32.480 to a larger area than expected
00:14:35.839 finally we show results from a previous
00:14:37.920 geometry method for skinning
00:14:40.000 the arrow is even higher
00:14:43.360 after training our method is able to rig
00:14:45.839 diverse 3d models
00:14:47.360 and they even generalize to models with
00:14:49.199 different structure and parts
00:14:51.600 here are examples from our test set

### Quantitative

00:14:57.040 here we show the quantitative comparison
00:14:59.040 results of skeleton prediction to other
00:15:00.720 skeleton prediction methods
00:15:02.959 including pinocchio and my previous
00:15:05.199 volumetric based learning approach
00:15:09.040 we applied the hungarian algorithm to
00:15:10.959 form a matching between predicted joints
00:15:12.959 and the ground choose ones
00:15:14.560 the iou precession and recall are
00:15:16.959 defined based on the resulting matching
00:15:19.440 higher numbers indicate better
00:15:21.040 performance
00:15:23.760 we also evaluate transfer distance
00:15:25.839 between predict and ground truth joints
00:15:30.000 between joints and bones and between
00:15:32.320 bones
00:15:34.720 to measure transfer distance of bones we
00:15:36.880 density sample on the bone
00:15:38.399 and calculate the transfer distance
00:15:39.920 between the samples
00:15:41.839 for transfer distance lower numbers
00:15:44.160 indicate better performance
00:15:46.560 from the table we can see our method
00:15:48.800 outperforms the rest according to all
00:15:52.839 measures

00:15:54.000 here we show the quantitative comparison
00:15:55.759 of skinning waste prediction
00:15:57.199 to geometrical proteins bbw and geovoxel
00:16:00.639 as well as a learning based approach
00:16:02.320 neuroscience
00:16:04.639 precession and recall are measured by
00:16:06.399 finding the bones that influence each
00:16:08.079 vertex significantly
00:16:10.320 average l1 measures the l1 norm of the
00:16:12.880 difference between the predicted
00:16:14.079 skinning vector
00:16:15.120 and the reference one averaged for all
00:16:17.199 measuring vertices
00:16:18.800 average and the maximal distance
00:16:20.560 measures the euclidean distance between
00:16:22.160 the position of vertices
00:16:23.680 deformed based on the ground true
00:16:25.120 skinning and the predictive skinning
00:16:28.000 our approach achieves the best result on
00:16:30.160 all measures

### tests

00:16:32.880 here we should test the 3d models that
00:16:35.040 were animated based on our predictor
00:16:36.880 rigs
00:16:38.160 our predicted rigs capture the arm and
00:16:40.399 leg's articulation correctly
00:16:43.199 here we show another example that were
00:16:45.040 animated based on our predicted skeleton
00:16:47.120 and skinning
00:16:48.079 where all the limbs are rigged correctly
00:16:49.920 by our method
00:16:52.399 our method can handle night human noise
00:16:54.720 predicting reasonable bones for this cat
00:16:56.720 here
00:17:00.160 our predicted skeleton across within
00:17:02.160 families of test shapes are fairly
00:17:03.920 consistent
00:17:05.039 we can apply automatic motion transfer
00:17:06.799 techniques to animate them all together

### Evaluation

00:17:13.359 to summarize our method presents the
00:17:15.599 first step
00:17:16.400 towards the learning-based complete
00:17:18.240 solution to character rigs
00:17:20.079 including skeleton creation and skinny
00:17:21.919 waste prediction
00:17:24.559 our approach doesn't make assumption
00:17:26.240 about the input on shape class and
00:17:27.839 structure
00:17:29.200 therefore it can be generalized to
00:17:31.120 characters with varying structure and
00:17:32.880 morphology
00:17:34.960 our approach also provides a single
00:17:36.640 parameter that users can tune to control
00:17:38.799 the output granularity
00:17:41.360 our approach does have limitations and
00:17:43.679 exciting avenues for future work
00:17:46.400 first our method currently use a per
00:17:48.799 stage training approach
00:17:50.880 ideally the skinning loss could be back
00:17:53.360 propagated to all states of network
00:17:55.520 to improve joint prediction second
00:17:59.200 our data set has the limitations it can
00:18:01.679 turns one rig promoter
00:18:04.160 many rigs often don't include bones for
00:18:06.240 small parts
00:18:07.280 like feet fingers clothing and
00:18:10.480 accessories which makes our train model
00:18:13.280 less
00:18:13.600 predictive for these joints
00:18:17.280 finally our current bandwidth parameter
00:18:19.440 explores one mode of
00:18:20.559 variation exploring a richer space to
00:18:23.600 interactively control skeletal
00:18:25.120 morphology and resolution
00:18:26.880 is another interesting research
00:18:28.320 direction
00:18:30.799 we show here our project page including
00:18:33.039 source code and our data set
00:18:35.600 thank you for your attention