# Internet and Web Systems

[CIS 5550: Internet and Web Systems](https://cis5550.seas.upenn.edu/)

- Introduction
- Overview
- Logistics
- Policies

Grading

- Homework 40%, 总共9个，1 per week
  - Assignment 0: Hello World
- Exams 30%,
  - Midterm1: 77/80

- Term project 25%,
- Participation 5%
  - I have an absolute standard for what you need to do in order to get an A in this class
  - Some adjustments will be made based on how hard I think the class was this year (difficult exams, etc.)
  - Your grade will not be hurt by how well others do!


Timeline

- February 18th: First midterm exam
- April 29th: Second midterm exam
- May 4th-12th: Project demos (in-person) during the finals period

---

Iam going to make the slides available on the course web page
• .but only after I've finished going through them in class (why？) 
• Access might be restricted to those who came to class and responded to polls
Not everything I say will be on the slides
• Example: Question on the slide, answer discussed in class
Feel free to take notes (but please no audio and/or video recording! ) 
The exams will be open-book/open-notes
• You may bring the slides, the textbooks, and any notes you have personally taken in class.
• Please don't print out the entire wwW and then claim that these are your notes from class! 

## **High-level structure**

- Frontend: Internet and Web basics, servers, HTTP, JavaScript, DOM, BGP, DNS, …
- Storage: Key-value stores, indexes, persistence, fault tolerance, …
- Big-data processing: Scalable analytics, Apache Spark, RDDs, …
- Search: Crawling, Information Retrieval, scoring, authoritativeness, …
- Advanced topics: Virtualization, non-crash faults, DHTs, security, …

### **Phase 1: Frontend**

- In the frontend phase, we will cover:
  - Internet basics: IPv4/v6 basics, TCP basics, interdomain routing
  - The Web: Client-server model, HTTP, TLS, HTML/CSS
  - Scalability: Parallelization, consistency, coordination, shared-nothing model
  - Dynamic content: Routes, state, cookies, sessions
  - Client-side scripting: JavaScript, DOM, AJAX
  - Naming: Name spaces, DNS(SEC), Akamai
  - Cloud computing: Data centers, utility computing, platform case study
- Three homeworks: 
  - Static+web server
  - dynamic web server, 
  - cloud deployment

### **Phase 2: Storage**

- In the Storage phase, we will cover:
  - Remote procedure calls (to connect with the frontend)
  - Key-value stores, sharding
  - Crash fault tolerance: Fault models, consistency, replication
  - Indexing and persistence: forward/inverted index, B+ trees
  - Case study: GFS
- Two homeworks: In-memory KVS, persistent KVS

### **Phase 3: Big-data processing**

- In the Big-Data Processing phase, we will cover:
  - Scalable Analytics: Collections and streams, “The Shuffle”
  - Apache Spark: Programming model, multi-stage jobs, scalability
  - Spark internals: RDDs, HDFS, the Spark platform, higher-level Spark
- Two homeworks: Mini-Spark I and II

### **Phase 4: Search**

- In the Search phase, we will cover:
  - Crawling: Basics, SEO, crawling strategy, crawler etiquette
  - Information Retrieval: Precision/recall, Boolean+Vector model, TF/IDF
  - Authoritativeness: HITS, PageRank
  - Search engines: Major components & data flow
  - Engineering software systems: Mocking, testing, debugging, version control (as preparation for the project)
- Two homeworks: Spark-based crawler, indexer+PageRank

### Phase 5: Advanced Topics

In the Advanced Topics phase, we will cover:

- Decentralized systems: Partly and fully centralized; BitTorrent case study
- Key-based routing: DHTs, consistent hashing, Chord
- Virtualization: Emulation, containers, binary translation
- Advanced Fault Tolerance: Byzantine faults, state-machine replication
- Transactions: ACID properties, serializability, 2PL, 2PC/3PC, ARIES
- Security: Thread models, encryption, digital signatures, TLS, OWASP Top 10
- Special topics

### Review

讲分布式，是我觉得最有用的一门课了，最后的 project 写在简历上蛮不错的。我看到基本上过这门课的同学都会在简历上写上一笔。

开始说通讯，ip 及以上网络协议栈会快速过一遍，作业的前三个也是在 tcp 的基础上根据 http1.1 实现部分功能。

然后会说分布式存储，讲 GFS，DHT 之类的，昨夜中间三个就是利用 DHT 实现一个分布式存储。

后年还说了 rpc，MapReduce，一致性，容错之类的。后三次作业是写一个类似于 MapReduce 类似的分布式计算框架，但是是流式的。

总共十个作业，两次考试，一个 final project。这个 final prj 就是利用作业写出的内容搭建一个搜索引擎，爬网页，算 pagerank 然后排序。

很不错的课程，唯一可惜的是没有亲自写一遍一致性协议。另外一点是作业是用 Java 写的，我估摸着真正业界都是 cpp？所以有人会觉得另一门课 cis505 比较好
