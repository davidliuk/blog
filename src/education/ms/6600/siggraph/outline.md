

### **20-Minute Presentation Outline for "RigNet: Neural Rigging for Articulated Characters"**

#### **1. Title Slide (1 slide, 1 minute)**
- **Content**:  
  - Title, authors, affiliations.  
  - Key visual: Figure 1 from the paper (input mesh, predicted skeleton, deformed examples).  
  - Mention supplementary video: [https://youtu.be/J30VETgWlDg](https://youtu.be/J30VETgWlDg).  

---

#### **2. Overview & Thesis (1 slide, 1.5 minutes)**  
- **Content**:  
  - **Principal thesis**: End-to-end neural framework for automated rigging (skeleton + skinning) of diverse 3D characters.  
  - **Problem**: Manual rigging is time-consuming; prior work relies on templates or limited shape classes.  
  - **Key contributions**:  
    1. Modular deep architecture (joint prediction, connectivity, skinning).  
    2. User control over skeleton granularity.  
    3. State-of-the-art results on animator-quality rigs.  

---

#### **3. Background & Motivation (2 slides, 3 minutes)**  
- **Slide 1**:  
  - **Traditional rigging**: Animator-created skeletons (Figure 2) require anatomical intuition.  
  - **Prior work limitations**:  
    - Template-based (Pinocchio) fails on novel structures.  
    - Volumetric methods (Xu et al.) lose surface details.  
    - Geometric skinning (BBW) lacks anatomical awareness.  
- **Slide 2**:  
  - **Why neural networks?**  
    - Learn from large, diverse datasets.  
    - Capture animator intuition (joint placement, skinning).  
  - **Key challenges**:  
    - Variable joint count/topology.  
    - Skeleton-skinning interdependence.  

---

#### **4. Method Overview (2 slides, 4 minutes)**  
- **Slide 1**: Pipeline diagram (Figure 4).  
  - **Three stages**:  
    1. **Joint prediction**: GMEdgeNet + clustering.  
    2. **Bone connectivity**: BoneNet + MST.  
    3. **Skinning**: Geodesic-aware GNN.  
  - Highlight user control (bandwidth slider in Figure 5).  
- **Slide 2**: Key technical innovations.  
  - **GMEdgeConv**: Combines mesh and geodesic neighborhoods.  
  - **Differentiable clustering**: Adaptive joint count.  
  - **Volumetric geodesic distances** for skinning.  

---

#### **5. Results & Comparisons (3 slides, 5 minutes)**  
- **Slide 1**: Qualitative results (Figure 8, 9).  
  - Show skeleton predictions vs. animators/Pinocchio.  
  - Skinning error maps (L1 norm).  
- **Slide 2**: Quantitative metrics (Tables 1, 2).  
  - **Skeleton**: CD-J2J (3.9% vs. 7.2% for Pinocchio).  
  - **Skinning**: 82.3% precision vs. 76.3% for NeuroSkinning.  
- **Slide 3**: Generalization (Figure 10).  
  - Test cases: Quadrupeds, robots, fictional characters.  

---

#### **6. Questions for Authors (1 slide, 2 minutes)**  
- **Content**:  
  - Why not end-to-end training (joints → skinning)?  
  - Handling multi-resolution meshes?  
  - Dataset bias: Missing small parts (fingers, clothes) in training.  
  - Failure cases (Figure 13): Extra/missing joints.  

---

#### **7. Evaluation & Critiques (1 slide, 2 minutes)**  
- **Strengths**:  
  - Complete solution (skeleton + skinning).  
  - Outperforms geometric and learning baselines.  
- **Weaknesses**:  
  - Limited user control beyond granularity.  
  - Dependency on consistent mesh orientation.  
- **Significance**: Democratizes rigging for non-experts.  

---

#### **8. Conclusion & Verdict (1 slide, 1.5 minutes)**  
- **Summary**:  
  - First learning-based end-to-end rigging framework.  
  - Practical for games, films, and crowdsourcing.  
- **Verdict**:  
  - **Thumbs up** for novelty, technical depth, and impact.  
  - Future work: Multi-resolution skeletons, physics integration.  

---

### **Total Slides**: 12 slides  
### **Time Allocation**:  
- Technical sections (methods/results): 9 minutes.  
- Background/evaluation: 5 minutes.  
- Q&A/verdict: 3 minutes.  

### **Visuals to Include**:  
- Pipeline diagram (Figure 4).  
- Comparisons (Figures 8, 9).  
- Interactive demo video snippets.  
- Failure cases (Figure 13).  

### **Guidelines Met**:  
- Follows CIS660 structure.  
- Balances high-level concepts (SigGraph Recommendations).  
- Uses visuals to ground explanations.