# Homework

### Assignment 0: Hello World

For this assignment, you will implement "Hello World" in Java. The real purpose, of course, is to set up the environment you will need for this class, and to practice the various steps, such as GitHub commits and Gradescope submissions.

[HW0 handout](https://web.archive.org/web/20240520225143/https://cis5550.seas.upenn.edu/handouts/HW0.pdf)

### Assignment 1: Static Web Server

The goal of this assignment is to build a simple HTTP server that serves static files from a given directory. An enhanced version of this server will later be used as the frontend of your search engine.

[HW1 handout](https://web.archive.org/web/20240520225143/https://cis5550.seas.upenn.edu/handouts/HW1.pdf)

### Assignment 2: Dynamic Web Server

In this assignment, you will extend your static web server from HW1 with support for dynamic content and routes. The API will be based on the API from [Spark Framework](https://web.archive.org/web/20240520225143/https://sparkjava.com/).

[HW2 handout](https://web.archive.org/web/20240520225143/https://cis5550.seas.upenn.edu/handouts/HW2.pdf)

### Assignment 3: HTTPS Server on the Cloud

For this homework, you will add support for sessions and HTTPS to your web server from HW2, and you will deploy it on an Amazon EC2 instance.

[HW3 handout](https://web.archive.org/web/20240520225143/https://cis5550.seas.upenn.edu/handouts/HW3.pdf)

### Assignment 4: In-Memory Key-Value Store

The goal of this hoemwork is to implement a simple distributed key-value store, which will build on your web server from the previous three assignments.

[HW4 handout](https://web.archive.org/web/20240520225143/https://cis5550.seas.upenn.edu/handouts/HW4.pdf)

### Assignment 5: Key-Value Store with Persistence

For this assignment, you will extend the key-value store from HW4 with persistence, as well as a nice user interface and some additional API functions.

[HW5 handout](https://web.archive.org/web/20240520225143/https://cis5550.seas.upenn.edu/handouts/HW5.pdf)

### Assignment 6: Analytics Engine

For this assignment, you will build a simple distributed analytics engine called Flame that is loosely based on Apache Spark. Flame will be able to work with large data sets (RDDs) that are spread across several nodes, and it will support some basic operations on these data sets.

[HW6 handout](https://web.archive.org/web/20240520225143/https://cis5550.seas.upenn.edu/handouts/HW6.pdf)

### Assignment 7: Enhanced Analytics Engine

The goal of this homework is extend your solution in HW6 with some important operations, such as join, fold, and distinct. These operations will be needed to support certain tasks that you will implement for the project, including, e.g., for crawling, for indexing, and for computing PageRank.

[HW7 handout](https://web.archive.org/web/20240520225143/https://cis5550.seas.upenn.edu/handouts/HW7.pdf)

### Assignment 8: Distributed Web Crawler

The goal of this homework is to build a simple distributed web crawler, based on your Flame engine from HW6+HW7 and the KVS from HW4+HW5. The crawler should be able to follow redirects, and it should implement the robot exclusion protocol.

[HW8 handout](https://web.archive.org/web/20240520225143/https://cis5550.seas.upenn.edu/handouts/HW8.pdf)

### Assignment 9: Indexer and PageRank

In this final assignment, you will build a simple indexer and an implementation of the PageRank algorithm, both will take as inputs the results of the crawler you built for HW8. These will be the two last building blocks of the project.

[HW9 handout](https://web.archive.org/web/20240520225143/https://cis5550.seas.upenn.edu/handouts/HW9.pdf)

### Final Project: Cloud-Based Search Engine

Over the course of the homework assignments, you have developed (and will develop) many of the components that a modern search engine would use: a web server (HW1–3), a key-value store (HW4+5), an analytics engine (HW6+7), a crawler (HW8), and a simple indexer and PageRank (HW9). The goal of the final project is to integrate all of these components, as well as to extend them with a few components, to build a complete web search engine that runs on the Cloud.

[Project handout](https://web.archive.org/web/20240520225143/https://cis5550.seas.upenn.edu/handouts/Project.pdf)