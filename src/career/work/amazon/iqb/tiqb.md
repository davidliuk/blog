# Technical Interview Question Banks

- IBU
- SDE II
- SDE III

维度

1. [Coding (Logical and Maintainable) ](https://w.amazon.com/bin/view/RecruitingEngine/Pathfinder/InterviewToolkit/Logical/Maintainable/)
2. [Coding (Problem Solving) ](https://w.amazon.com/bin/view/RecruitingEngine/Pathfinder/InterviewToolkit/ProblemSolving/)
3. [Coding (Data Structures and Algorithms) ](https://w.amazon.com/bin/view/RecruitingEngine/Pathfinder/InterviewToolkit/DataStructuresandAlgorithms/)
4. [System Design (Scalability and Operational Performance) ](https://w.amazon.com/bin/view/RecruitingEngine/Pathfinder/InterviewToolkit/TechnicalInterviewQuestionBank/SystemDesign/)

Concern 	Mild Concern 	Mixed 	Mild Strength 	Strength

### Logical and Maintainable

These questions  should ensure that the candidate: writes code that is syntactically  correct; does what it is intended to do; and is maintainable, readable,  and idiomatic.

#### Finding a file

Graph, Tree, Search

**Implement file finding utility considering multiple criteria.**

Imagine I am a customer and you are implementing an API for me.

My first requirement is to implement an API (or command line utility) that will give me a list of files in the given directory whose name contain  the given string.

Design the API and internal objects, including the file system API, if you  want to use your own or you do not remember the one in your programming  language.

Once  this is done, additional criteria will be introduced and I will see how  you can deal with change and how extensible your code is.

```
List<MyFile> find(MyDirectory directory, String str) { /* ... */ }
```

---

The goal of the question is to see how the candidate can design a generic code for multiple matchers.

Once you request two more, the candidate should realize that adding one by  one is not a good solution and start thinking about some Criterion  object. Once they have that, they can think how to put more criteria  together. Some criteria are also ranges (e.g. date or file size), which  requires a slightly different solution than exact matching.

Evaluate the candidate based on how far they can get:

- clarify the requirements and design the API (input, output, file system)
- create object hierarchy to model directory and file
- implement generic find function with a criteria predicate
- implement criteria as a predicate
- correctly join multiple criteria together by AND operator

#### Pizza Pricing

Design

Given base, size and toppings, calculate the pizza price.

Write a program that allows the user to calculate the price of a pizza. A pizza has:

- a base
- a size
- toppings

Assume the system stores everything in-memory, no storage required.

#### Twists

- Imagine that we now want to calculate prices for full orders (i.e. Pizza + Drinks, for example).
- Handle deals (e.g. Order a pizza, get another for free; 1 free drink with each pizza; Get the most expensive topping for free).
- Different stores, with different prices per store.

---

#### Lowers

- If the candidate uses hardcoded prices or uses an array to look them up on a loop.

#### Meets

- If the candidate uses Enums/Classes for the types of toppings, bases and sizes.
- If the candidates uses a mapping to look prices up.
- Creates a class for Pizza and another one for Drink.
- Adds a Deal to the offer.
- The Deal price is calculated on the offer itself.
- Separates logic from data → Prices read from config files.

#### Raises

- If the candidate includes inheritance or some abstraction with a getPrice method.
- Creates an Order class.
- Adds a Deal to the offer.
- The Deal price is discounted from the overall price on the same method that calculates the price for an offer.
- Adding a new Deal does not imply huge changes on the code.

### Problem Solving

These questions  should be high level technical problems. They should assess the  candidates ability to think through problems, identify alternatives,  weigh different options, and see potential challenges with solutions.

#### Gold thief

Array

Search

How much gold you can steal?

There are n houses build in a street, each of which contains some gold bars  in it. A thief is going to steal the maximal bars for houses, but he  can’t steal in two adjacent houses because if he does it will make  create suspicion and he will be caught.

What is the maximum stolen value?

#### Rearrange characters in a string

String

Rearrange characters in a string so that no two adjacent characters are the same.

You are given a string with repeated characters, your task is to rearrange  characters in a string so that no two adjacent characters are the same.

#### Sample input

```
bcaaa
```

#### Sample output

```
abaca
```

#### Twists

- It cannot be assumed that an input string consists only of English alphabet.
- What if is is not possible to create a valid output string?

---

Condition when it is not possible to create a valid output string: the highest  frequency of a single character is greater than (len(input_string) + 1) / 2 

Approach I:  Use a priority queue / max heap to order characters by frequencies. One  by one take the highest frequency character from the priority queue and  add it to a final result. Make sure that added character is different  than the previous one.

Approach II: Fill all the even positions of the output string with the highest  frequency character. If there are still even positions remaining, fill  them at first. Afterwards, fill the odd positions.

---

Evaluate the candidate based on a proposed solution and number of hints required:

- task requirements clarified.
- approach to handling not valid input defined.
- proposed task solution explained.
- correct time complexity estimation.
- clear and well-structured code.
- testing scenarios proposed.

#### Run Length Encoder

Array

Implement a simple Run Length Encoder, shortening sequences of the same characters.

Implement a simple Run Length Encoder, shortening sequences of the same characters. For example, ten As would be encoded as A10.

#### Sample input

```
aaabbccca
```

#### Sample output

```
a3b2c3a1
```

#### Twists

- Implement a decoder.
- Where would this algorithm be useful?
- How would you solve encoding/decoding digits?

#### Who is our boss?

Graph

Tree

Pointer

Given a company hierarchy, find the least common manager for two employees.

There is a company which has a CEO and a hierarchy of employees. All  employees have a unique ID, name and a pointer to their manager and  their reports.

Please implement the *whoIsOurBoss()* method to find the closest manager for two given employees (i.e. the  manager farthest from the CEO that both employees report up to).

```
class Employee {
    long id; // unique ID
    String name; // name (not unique)
    Employee manager; // null for CEO
    Set<Employee> reports; // empty set for a non-manager
}
                        
```



#### Typical solutions

- creating two parent paths and finding intersection
- starting from the top and using DFS/BFS to find the path from the CEO to each employee
- recursive solution

#### Edge cases

- one employee manages the other (usually the easier is to return the higher one, but more correct is to return their manager)

#### Twists

- If the candidate solves the problem with bottom-up solution, remove the  getManager() pointer and leave the candidate only with getReports().  They will have to find out a solution that goes down from the CEO, for  example recursion, BFS or DFS.
- If the  candidate solves the problem with top-to-bottom solution, use the  opposite strategy. See if they can solve the problem in multiple ways.

------

#### Bottom-up solution with a manager lookup

```
public static Employee whoIsOurBoss(final Employee e1, final Employee e2) {
    if (e1.getManager() == null) {
        // CEO
        return e1;
    }
    if (e2.getManager() == null) {
        // CEO
        return e2;
    }
    final Set<Employee> e1Managers = findManagers(e1);
    Employee temp = e2.getManager();
    while (temp != null) {
        if (e1Managers.contains(temp)) {
            return temp;
        }
        temp = temp.getManager();
    }
    throw new IllegalStateException();
}

private static Set<Employee> findManagers(final Employee employee) {
    final Set<Employee> managers = new HashSet<>();
    Employee temp = employee.getManager();
    while (temp != null) {
        managers.add(temp);
        temp = temp.getManager();
    }
    return managers;
}
                
```

#### Bottom-up solution checking intersection of two lists

```
public static Employee whoIsOurBoss(final Employee e1, final Employee e2) {
    if (e1.getManager() == null) {
        // CEO
        return e1;
    }
    if (e2.getManager() == null) {
        // CEO
        return e2;
    }
    final List<Employee> managers1 = findManagers(e1);
    final List<Employee> managers2 = findManagers(e2);
    int index1 = managers1.size() - 1;
    int index2 = managers2.size() - 1;
    while (index1 >= 0 && index2 >= 0 && managers1.get(index1).equals(managers2.get(index2))) {
        index1--;
        index2--;
    }
    return managers1.get(index1 + 1);
}

private static List<Employee> findManagers(final Employee employee) {
    final List<Employee> managers = new LinkedList<>();
    Employee temp = employee.getManager();
    while (temp != null) {
        managers.add(temp);
        temp = temp.getManager();
    }
    return managers;
}
                
```

------

## System Design

These questions should seek to determine if a candidate can produce a design  of a rather complex system from a set of few starting requirements,  coping with scaling and fault tolerance.

#### File Sharing App

Design

**Design a system that allows users to share files with each other**

Let us say I am a amateur film maker and I want to send the video to my friend.

I would like to upload it somewhere and send him a link, but I do not  want anybody else to download the file, even if they have the link.

Once the friend says it is good, I would like to share the link with everyone and let them see it too.

#### Twists

- What do we do if the file is bigger than capacity on a single node?
- What if one node goes down or a single disk is broken?
- How do we balance free space between the nodes?
- We can offer free and premium service, each with different storage limits.
- We can introduce monthly fees according to the capacity used.

---

Some of the areas we can look at are: implementation of index, capacity  usage, risk of losing a file, distribution of data within the system,  security and permissions.

#### Locker storage system for bags

Design

**Design a locker storage system for bags that can be used in a train station.**

Design a locker storage system for bags that can be used in a train station.  Lockers come in three sizes: Small, Medium, and Large. Bags also come in three sizes (Small, Medium, and Large). Each locker can hold bags of  the same or smaller size. Want to be able to store a bag in a locker,  find an empty locker for a bag, find the locker containing a given bag,  and remove a bag from a locker.

---

Meets if they can correctly encapsulate concepts of Locker, Bag, and Locker  Collection, create an API, and a set of data structures to get and put  in less than linear time.

Raises if they can find hidden Locker Key concept, if they can talk through  concurrency and distribution across multiple systems, or have deep  understanding of security concerns.

#### URL Shortener app

Design

**Design a system that shortens the URL.**

Let's design a system that takes a URL and shortens it, for example, into a short sequence of alphanumerical symbols.

- Sample input: **http://www.example.com/my-super-awesome-blog-about-squirrels/2022/10/23/live-with-a-squirrel-fan--they%27re-awesome**
- Sample output: **https://ti.ny/live-with-me**

Shorter URLs are easier to share, write down, print or spell over the phone.

You might know some examples, like bit.ly, TinyUrl, BL.INK, and so on.

Please only focus on the backend part, ignore the user interface.

#### Twists

- Expiration of URLs and code reusal.
- How do we make sure there are no conflicts, since the system is distributed?
- How do we ensure the URL is as short as possible? How hard should we try?
- Optimize behaviour when the source URL already has been shortened.
- Can we have a pre-generated list of free hashes?
- Do we allow users to customize their alias?
- Click tracking and analytics.

---

As in general, evaluate how the candidate was able to start with a simple service and add more complexity gradually.

#### Weather Reporting App

Design

**Design a system that reads temperature sensors and presents summary views.**

Let's design a system that takes readings from a large number of temperature  sensors sprinkled throughout a large geographic area, like Europe, and  presents a couple of views of that data.

The problem is easy to understand at is trivial to solve at small scale.  But everything about it - data collection and ingestion, data storage,  and data processing/presentation becomes more challenging as the scale  increases. Make sure the candidate is aware that we cannot solve  everything during the interview.

- 1,000,000 temperature sensors, uniformly distributed, very cheap.
- HTTP communication, do not worry about the details in the middle, each has a separate IP address and independent power source.
- Temperature changes over time and we can read a sensor each 10 seconds or so.

- We would like to have a bitmap that shows the most recent temperature map of the entire area (e.g. each sensor = a pixel).
- Minimum and maximum readings over a certain period of time - a day, a month, a year.

[Question source](https://w.amazon.com/bin/view/VladKrupin/SystemDesignInterview/weather-reporting/)

#### Twists

- Even bigger area.
- Another types of readings (e.g. humidity, wind speed).
- Comparison with historical data.

---

There are approximately 3 distinct areas that we can focus on - (1) Data  collection, (2) Storage, (3) Getting that data into a format that's  suitable for hooking up to a UI.

### Data Structures & Algo

These questions  should probe a candidate's general computer science fundamentals,  sometimes starting from intentionally vague requirements. The candidate  should demonstrate the ability to apply various data structures and  algorithms, make good trade-offs, and to combine data structures to  solve complex use cases.

#### Course database validation

Graph

Given a database of courses with dependencies, write a validation function invoked on each update.

#### Find customers logged just once

Compute

Given a sequence of user logins, find the users who logged only once.

#### Find Keyword Matches

Search

Given a document and a set of keywords, find the shortest segment of the document containing all of the keywords.

#### Find a binary row with the most 1s

Matrix

Binary

Given a binary matrix, where each row is sorted, find the row with most 1s.

#### Clone Linked List with next and random pointer

Search

Given a list where each node has a next and arbitrary pointer, clone it.

#### Merging Iterators

Heap

Given N sorted iterators, create a single one that provides their elements sorted.

#### Number Jumping Game

Graph

Search

Given an array of numbers representing a game board, try to reach the end.

#### Package Manager

Graph

Implement a system to install packages and its dependencies.

#### Pair-sum Problem

Array

Given an array of numbers, find a pair that sums up to the given number.

#### Top N Customers

Search

Heap

Given a website access log, find the N most frequent visitors.

#### Word Ladder

Graph

Given two words, and a word list, find the length of shortest transformation sequence.