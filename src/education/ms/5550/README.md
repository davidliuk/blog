# Internet and Web Systems

[CIS 5550: Internet and Web Systems](https://cis5550.seas.upenn.edu/)

- Introduction
- Overview
- Logistics
- Policies

Grading

- Homework 40%, 总共9个
  1. 10.0 / 10.0
  2. 115.0 / 100.0
  3. 112.0 / 100.0
  4. 102.0 / 100.0
  5. 115.0 / 100.0
  6. 110.0 / 100.0
  7. 109.0 / 100.0
  8. 115.0 / 100.0
  9. 98.0 / 100.0
  10. 115.0 / 100.0
- Exams 30%,
  - Midterm1: 77/80
  - Midterm2: 
  
- Term project 25%, 25/25
  - In my office (Levine 560). Go to the Levine building, take the elevator up to the 5th floor, walk down the ramp in front of you, go down the first corridor to your right. My office will then be the first one on your right.

  - May8,11:00-11:30am
  
  - Each slot takes 30 minutes. You should have your system up and running, so I can try a couple of queries and see how well it works. Then we'll do a deep dive into the system and talk about the various design decisions you've made, what the key challenges were and how you navigated them, how various things are implemented, etc. 
  
    The best way to prepare is to make sure that your system works well during the demo. I usually recommend a "feature freeze" at least a few days before the demo, so you'll have some time for careful testing and to fix any remaining bugs. You should have a large corpus crawled and indexed, so the results on typical queries will actually be good and useful, and you should have optimized your system enough that they will actually show up relatively quickly. (See Section 4 of the project handout re: what factors are relevant for grading.) Only features shown during the demo will "count". You shouldn't need to prepare for the discussion part.
  
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

| **Topic**                                                    | **Details**                                                  | **Reading**                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| Introduction [[Slides](https://cis5550.seas.upenn.edu/slides/01-Introduction.pptx)] | Introduction Overview Logistics Policies                     |                                                              |
| Internet basics [[Slides](https://cis5550.seas.upenn.edu/slides/02-InternetBasics.pptx)] | The Internet Interdomain routing; BGP; valley-free Path properties TCP and UDP Socket basics; echo server | [Lampson: "Hints for Computer System Design"](https://www.microsoft.com/en-us/research/wp-content/uploads/2016/02/acrobat-17.pdf) |
| The Web [[Slides](https://cis5550.seas.upenn.edu/slides/03-TheWeb.pptx)] | The Web; hyperlinks; history of the Web Client-server model HTTP/1, TLS HTML/CSS basics HTTP/2 | [Introduction to HTTP/2](https://web.dev/performance-http2/) |
| Scalability [[Slides](https://cis5550.seas.upenn.edu/slides/04-Scalability.pptx)] | Parallelization Consistency Mutual exclusion; locking; deadlocks NUMA and Shared-Nothing Frontend-backend, Sharding | [Vogels: "Eventually Consistent"](https://queue.acm.org/detail.cfm?id=1466448) |
| Dynamic content [[Slides](https://cis5550.seas.upenn.edu/slides/05-DynamicContent.pptx)] | Motivation: Dynamic content Routes Managing state; cookies; sessions Tracking; business model of the web | [Spark Framework Overview](https://www.jrebel.com/blog/spark-java-web-framework) |
| The Client Side [[Slides](https://cis5550.seas.upenn.edu/slides/06-TheClientSide.pptx)] | JavaScript DOM Dynamic requests AJAX                         | [MDN: JavaScript Language Overview](https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript) |
| Naming [[Slides](https://cis5550.seas.upenn.edu/slides/07-Naming.pptx)] | Name spaces and directories DNS architecture Security issues with DNS DNSSEC, DANE | [Globally Distributed Content Delivery](https://www.cs.cmu.edu/afs/cs.cmu.edu/project/phrensy/pub/papers/DilleyMPPSW02.pdf) [Chapter 5.3 in the Tanenbaum book](https://cis5550.seas.upenn.edu/) |
| The Cloud [[Slides](https://cis5550.seas.upenn.edu/slides/08-TheCloud.pptx)] | Data centers Cloud computing Types of clouds History of Cloud Computing Case study: EC2 | [Armbrust et al.: "A View of Cloud Computing"](https://dl.acm.org/doi/10.1145/1721654.1721672) |
| Storage [[Slides](https://cis5550.seas.upenn.edu/slides/09-Storage.pptx)] | Key-value stores KVS on the Cloud Sharding and coordination Case study: S3 Case study: DynamoDB | [Cooper et al.: "PNUTS to Sherpa: Lessons from Yahoo!'s Cloud Database"](http://www.vldb.org/pvldb/vol12/p2300-cooper.pdf) |
| Basic fault tolerance [[Slides](https://cis5550.seas.upenn.edu/slides/10-BasicFaultTolerance.pptx)] | Faults and fault models Primary-backup replication Availability and Durability The CAP theorem Quorum replication | Chapter 7.5 in the Tanenbaum book                            |
| Distributed file systems [[Slides](https://cis5550.seas.upenn.edu/slides/11-DistributedFileSystems.pptx)] | Indexing The B+ tree Distributed file systems GFS overview GFS operation | [Comer: "The Ubiquitous B+ Tree"](https://dl.acm.org/doi/10.1145/356770.356776) |
| RPCs [[Slides](https://cis5550.seas.upenn.edu/slides/12-RPCs.pptx)] | Web services; APIs; API examples Remote procedure calls Handling RPC failures Data interchange XML | Chapter 4.2 in the Tanenbaum book                            |
| Scalable Analytics [[Slides](https://cis5550.seas.upenn.edu/slides/13-ScalableAnalytics.pptx)] | Introduction to scalable analytics MapReduce The Streams API Apache Spark Lambdas and serialization | [Zaharia et al.: "Spark: Cluster Computing with Working Sets"](https://www.usenix.org/legacy/event/hotcloud10/tech/full_papers/Zaharia.pdf) |
| Spark basics [[Slides](https://cis5550.seas.upenn.edu/slides/14-SparkBasics.pptx)] | Spark jobs Working with files Spark transformations Spark actions The Structured API | [Zaharia et al.: "Resilient Distributed Datasets"](https://www.usenix.org/system/files/conference/nsdi12/nsdi12-final138.pdf) |
| Spark continued [[Slides](https://cis5550.seas.upenn.edu/slides/15-SparkContinued.pptx)] | HDFS Apache Livy Distributed shared variables Graph algorithms in Spark | [Shvachko: "Apache Hadoop: The Scalability Update"](https://www.usenix.org/system/files/login/articles/105470-Shvachko.pdf) |
| Crawling [[Slides](https://cis5550.seas.upenn.edu/slides/16-Crawling.pptx)] | Structure of the Web Crawling basics SEO Crawler etiquette   | [Heydon and Nayork: "Mercator: A scalable, extensible Web crawler"](https://link.springer.com/article/10.1023/A:1019213109274) |
| Information retrieval [[Slides](https://cis5550.seas.upenn.edu/slides/17-InformationRetrieval.pptx)] | Basic IR model; precision/recall Boolean model Vector model TF/IDF Stemming and lemmatization | [Chapter 1 in "An Introduction to Information Retrieval"](https://nlp.stanford.edu/IR-book/pdf/irbookonlinereading.pdf) |
| Authoritativeness [[Slides](https://cis5550.seas.upenn.edu/slides/18-Authoritativeness.pptx)] | Motivation: off-page features HITS PageRank Sinks and hogs   | [Brin and Page: "The PageRank Citation Ranking: Bringing Order to the Web"](http://ilpubs.stanford.edu:8090/422/) |
| Search engines [[Slides](https://cis5550.seas.upenn.edu/slides/19-SearchEngines.pptx)] | Building a search engine Case study: Google Case study: Mercator Project overview Modern search | [Brin and Page: "The Anatomy of a Large-Scale Hypertextual Web Search Engine"](http://infolab.stanford.edu/~backrub/google.html) |
| Decentralized systems [[Slides](https://cis5550.seas.upenn.edu/slides/20-DecentralizedSystems.pptx)] | Centralization and its effects Partly centralized systems Unstructured overlays Structured overlays | [Druschel and Rodrigues: "Peer-to-Peer Systems"](https://dl.acm.org/doi/10.1145/1831407.1831427) |
| Key-based routing; DHTs [[Slides](https://cis5550.seas.upenn.edu/slides/21-KeyBasedRouting.pptx)] | Consistent hashing and DHTs Key-based routing Basic Chord Fault tolerance in Chord KBR and security | [Stoica et al.: "Chord: A Scalable Peer-to-peer Lookup Service for Internet Applications"](https://pdos.csail.mit.edu/papers/chord:sigcomm01/chord_sigcomm.pdf) |
| Advanced Fault Tolerance [[Slides](https://cis5550.seas.upenn.edu/slides/22-AdvancedFaultTolerance.pptx)] | Non-crash fault models State-machine replication Paxos The Byzantine Generals Problem Byzantine Fault Tolerance | [Schneider: Implementing Fault-Tolerant Services Using the State Machine Approach](https://www.cs.cornell.edu/fbs/publications/SMSurvey.pdf) |
| Transactions [[Slides](https://cis5550.seas.upenn.edu/slides/23-Transactions.pptx)] | Introduction to transactions Concurrency control Log-based recovery Two-Phase Commit Distributed concurrency control |                                                              |
| Security                                                     | Threat models Cryptography Digital signatures Attacks and defenses | [OWASP Top 10](https://owasp.org/Top10/)                     |
