# Intern Self-Review

### Project work

Provide a high-level overview of your project, including goals and key deliverables. Summarize any deliverables you achieved on your project or work. *(200 words maximum)*

1. 

   I worked on **Observatory UI**, which aims to enhance traceability, search experience, visualization capabilities and Flexibility. Here are my [Code Activities](https://code.amazon.com/users/laudawei/activity?time=year) and [Code Reviews](https://code.amazon.com/reviews/from-user/laudawei?end_time=2025-01-01&open=true&pending=true&shipped=true&start_time=2024-01-01).

   **Goals:**

   1. **Enhance Search Experience:** Improve the efficiency of searching with any field fuzzy search and advanced filters featuring search and aggregation.
   2. **Boost Visualization Capabilities:** Develop advanced charts, such as tree, timeline, tree table, and hyper process charts, to make process more understandable and interactive.
   3. **Improve Traceability:** Enhance the system’s ability to collect payloads with annotations and trace end-to-end hyper process with new plot.
   4. **Increase Autonomy and Flexibility:** Remove dependencies on Jarvis to increase the system’s independence and adaptability, thereby reducing costs and risks.

   **Key Deliverables:** 

   1. **[Frontend](https://code.amazon.com/packages/XbtObservatoryUI/trees/mainline)**: Developed with Harmony, AWS UI and Echarts to provide a comprehensive, interactive and user-friendly UI.
   2. **[Backend](https://code.amazon.com/packages/XbtObservatoryService/trees/mainline)**: Integrated CloudAuth for authorization and implemented APIs for search, aggregation, process details, and hyper process tracing. Upgraded DynamoDB (DDB) and Elasticsearch (ES) storage layers for improved performance.
   3. **[JavaAgent](https://code.amazon.com/packages/XbtObservatoryJavaAgent/trees/mainline)**: Implement @Input and @Output annotations using ByteBuddy, to collect method payloads efficiently.
   4. **Pipelines**: Established [XbtObservatoryUI Pipeline](https://code.amazon.com/packages/XbtObservatoryUICDK/trees/mainline), XbtObservatoryJavaAgent peru to Brazil [pipeline](https://code.amazon.com/packages/XbtObservatoryServiceCDK/trees/mainline).
   5. **Documents**: Created [User Guide](https://quip-amazon.com/pCY6AHDdHuuJ), [UI design doc](https://quip-amazon.com/dpgMA9jhrDBs/Observatory-UI-20-Design-Doc), [UI developer guide](https://quip-amazon.com/eYv7ArJvOyfx/Observatory-UI-20-Developer-Guide), etc.

### Skills development

What skills did you build and improve upon related to this role (e.g., Excel, writing, new coding languages, data structures, algorithms, code quality, etc.)? (160 words maximum)

1.	AWS: Gained extensive knowledge of the AWS stack, including OpenSearch, DynamoDB, Kinesis, Load Balancer, CodePipeline, S3, and CDK,  among others.
2.	CI/CD: Through learning and using pipeline and CI/CD, I gained valuable insights into agile development practices and how to make the code production process more robust and stable.
3.	OpenTelemetry: Developed a deep understanding of OpenTelemetry usage, principles and extensions.
4.	Backend API Design: Refined skills in designing and implementing scalable and efficient backend APIs for various functionalities.
5.	**Interactive Visualization & Front-End Design:** Designed advanced interactive charts and improved front-end page design to enhance user experience and data visualization.

### Actioning feedback

What feedback did you receive and how did you apply it? *(160 words maximum)* 

### Dealing with ambiguity

What ambiguous situations did you run into and how did you adapt? *(160 words maximum)*

### Leadership Principles

Select at least 3 Leadership Principles and rate them either a strength or growth opportunity. Provide context and evidence for the rating.

---

I worked on the **Observatory UI** , which aims to improve traceability and monitoring across Global Mile systems by collecting and visualizing tracing data from various services. The primary goals of this project were to enhance system traceability, reduce onboarding costs, and standardize tracing specifications using OpenTelemetry.

---

I worked on the **Observatory UI** project, which focuses on improving traceability, search experience, and visualization capabilities across Global Mile systems. This project involved collecting and visualizing tracing data and payloads from various services to provide better insights and monitoring.

**Goals:**

- **Enhance Search Experience:** Improve the ease and efficiency of searching through tracing data, enabling users to quickly locate and analyze relevant information.
- **Boost Visualization Capabilities:** Develop advanced visualization charts like tree, timeline, tree table and hyper process to make tracing data more understandable and actionable for users.
- **Improve Traceability:** Enhance the system’s ability to collect payloads and trace requests end-to-end across multiple services for better debugging and performance optimization and better present with new plots.
- **Increase Autonomy and Flexibility:** Remove dependencies on external tools, such as Jarvis, to increase the system’s independence and adaptability.
- **Reduce Onboarding Costs:** Simplify the onboarding process by leveraging Java agents and annotations to automate tracing and minimize manual effort.

**Key Deliverables:**

1. **ObservatoryFrontend (UI):** Designed and developed an enhanced user interface to visualize tracing data more effectively, improving both usability and system performance.
2. **ObservatoryBackend:** Upgraded the backend to handle new data formats and integrate seamlessly with OpenTelemetry standards.
3. **ObservatoryAgent:** Implemented a Java agent for automated tracing, reducing the onboarding time and effort required for new services.
4. **CodePipeline:** Established an automated CI/CD pipeline for consistent and efficient deployment across all components.
5. **Documentation:** Created detailed user guides and technical documentation to support easy adoption and usage of the system.

These improvements have significantly enhanced the observability of Global Mile systems, providing a more powerful tool for monitoring and optimizing service performance.



---

**Enhance Search Experience:** Improve the ease and efficiency of searching through tracing data, with advanced filter with aggregation, fuzzy search and so on, enabling users to quickly locate and analyze relevant information.

**Boost Visualization Capabilities:** Develop advanced visualization charts, such as tree, timeline, tree table, and hyper process charts, to make tracing data more understandable and actionable for users.

**Increase Autonomy and Flexibility:** Remove dependencies on Jarvis, to increase the system’s independence and adaptability and reduce cost and risks.

---

I worked on **Observatory UI**, which aims to enhance traceability, search experience, visualization capabilities and Flexibility.

**Goals:**

1) **Enhance Search Experience:** Improve the efficiency of searching with any field fuzzy search and advanced filters featuring search and aggregation.
2) **Boost Visualization Capabilities:** Develop advanced charts, such as tree, timeline, tree table, and hyper process charts, to make process more understandable and interactive.
3) **Improve Traceability:** Enhance the system’s ability to collect payloads with annotations and trace end-to-end hyper process with new plot.
4) **Increase Autonomy and Flexibility:** Remove dependencies on Jarvis to increase the system’s independence and adaptability, thereby reducing costs and risks.

**Key Deliverables:** 

1) **Frontend:** Developed with Harmony, AWS UI and Echarts to provide a comprehensive, interactive and user-friendly UI.
2) **Backend:** Integrated CloudAuth for authorization and implemented APIs for search, aggregation, process details, and hyper process tracing. Upgraded DynamoDB (DDB) and Elasticsearch (ES) storage layers for improved performance.
3) **JavaAgent:** Implement @Input and @Output annotations using ByteBuddy, to collect method payloads efficiently.
4) **Pipelines:** Established XbtObservatoryUI Pipeline, XbtObservatoryJavaAgent peru to Brazil pipeline.
5) **Documents:** Created User Guide, UI design doc, UI development doc, etc.

---

I received feedback through meetings, code reviews and discussions that helped me improve in several areas. 

For coding style and quality, I focused on following best practices and insisting on the highest standards to make it more maintainable. I took the advice to heart and have been working on refining my coding techniques.

Regarding design and solutions, the feedback encouraged me to dive deeper into my design choices. For instance, when implementing features, I evaluated critical factors such as idempotency, performance risks, data loss risks, and the scope of potential issues, guided by my mentor’s feedback. This thorough analysis ensured that my design decisions were both efficient and effective.

Overall, I’ve used this feedback to refine both my coding practices and design approach, aiming for better results in future projects.

---

Here's the refined version with the additional detail:

---

### Dealing with Ambiguity

In designing the Observatory UI, I encountered several ambiguities, particularly around filtering, visualizing, and interacting with tracing data. To address these challenges, I adopted a **Bias for Action** approach, taking proactive steps to quickly tackle and resolve issues.

For instance, when faced with unclear requirements on how to present complex tracing data, I immediately began experimenting with various visualization techniques, such as tree and timeline charts. I rapidly prototyped these options to gather initial feedback and iterated based on that input. Additionally, I conducted research on leading tracing platforms to understand their approaches and incorporate best practices.

Instead of waiting for complete clarity, I engaged with my mentor and team members early to review prototypes and gather their insights. This hands-on approach enabled iterative refinement of the designs, ensuring the final UI met user needs and adapted to evolving requirements.

By acting swiftly and continuously iterating, I effectively addressed ambiguities and developed a UI that provided valuable insights and enhanced user experience.
