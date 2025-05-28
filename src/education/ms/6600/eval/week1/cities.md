# **Procedural Modeling of Buildings**

## 1. Paper Title, Authors, and Affiliations

**Title**: Procedural Modeling of Buildings

**Authors**: Pascal Müller, Peter Wonka, Simon Haegler, Andreas Ulmer, Luc Van Gool

**Affiliations**:

- Pascal Müller, Simon Haegler, Andreas Ulmer, Luc Van Gool – ETH Zürich
- Peter Wonka – Arizona State University / ETH Zürich / K.U. Leuven

## 2. Main Contribution

This paper presents **CGA Shape**, a new way to generate **procedural building models** using shape grammar. It improves on past methods by ensuring **architectural consistency** while allowing for **detailed urban environments**. The key contributions include:

- A **rule-based system** for procedural modeling, allowing the definition of hierarchical rules that control the generation of building components.
- **Context-sensitive shape grammar**, enabling adaptive modifications based on spatial relationships and constraints (e.g., ensuring windows and doors align with floors and walls properly).
- **New subdivision and repeat operators**, which improve facade detailing and allow for realistic variation in architectural elements.
- **Occlusion-aware modeling**, which prevents elements from overlapping incorrectly and ensures plausible structural configurations.
- **Snapping and alignment mechanisms**, allowing buildings to conform to both global urban layouts and fine-grained local adjustments.
- **Scalability for large-scale urban environments**, demonstrated through examples of real-world city modeling, including historical reconstructions and modern cityscapes.

## 3. Outline of the Major Topics

### 3.1 Introduction and Motivation

- Problems in procedural city modeling.
- Weaknesses of past approaches (e.g., L-systems, simple splitting methods).

### 3.2 CGA Shape: A New Approach

- Using shape rules to define buildings.
- How context-aware constraints improve realism.

### 3.3 Core Techniques

- **Scope Rules:** Define building parts and transformations.
- **Splitting and Repeating:** Generate facades, floors, and repeating patterns.
- **Occlusion Checks:** Ensure elements do not intersect incorrectly.
- **Snapping:** Align elements to maintain structure.

### 3.4 Implementation and Examples

- Applied to historical and modern cityscapes (e.g., **Pompeii, Beverly Hills**).
- Discussion on performance and scalability.

### 3.5 Conclusion and Future Work

- Plans to improve real-time rendering.
- Potential extensions for interior modeling.

## 4. One Thing I Liked

One of the most useful aspects of the paper is the **integration of procedural modeling with geometric constraints**. Unlike older methods that generate buildings without structural awareness, CGA Shape ensures **elements like doors, windows, and floors align properly**. This makes it particularly useful for **large-scale city generation** where both efficiency and realism are needed.

## 5. What I Did Not Like

While the paper presents a **strong procedural approach**, it mainly focuses on **exteriors** and does not discuss **interior layouts** in depth. For real-world applications, integrating **interior spaces** would make the system much more useful for architects and urban planners. Additionally, **performance trade-offs** for extremely detailed models could have been explored more.

## 6. Questions for the Authors

1. **How well does CGA Shape handle non-standard building shapes?** Many modern buildings have curved or irregular designs—does the system require special rules for these cases?
2. **Could CGA Shape be extended to model building interiors?** While great for exteriors, could similar rules be applied for floorplans and room layouts?
3. **What are the memory and computational limits for large-scale city models?** The paper mentions billion-polygon cities, but what are the practical constraints for real-time applications?
4. **Could CGA Shape work with AI-based techniques?** With recent advances in AI-generated content, do you see a way to integrate **machine learning** to optimize or automate rule generation?