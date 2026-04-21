# Midterm 2

*Hello everyone,*

*To help you review the material for the second midterm, I have put together a set of review questions. Please do try them out! (I will add more as we go.)*

**TRUE/FALSE QUESTIONS:**

1) In BigTable, read and write to each row is atomic.
2) In NFS with client caching, if client A opens a file then client B opens the same file after that, then B is guaranteed to see changes made by A. 
3) Every Byzantine fault is a crash fault.
4) Some Byzantine faults are crash faults.
5) In an asynchronous environment, 3f+1 replicas are required to tolerate f crash-faulty nodes.
6) Any independent node fault can be detected by other nodes with sufficient node replicas.

8) In Paxos, if two nodes propose different values with different proposal numbers, the value associated with the smaller proposal number may still be chosen.

**REPLICATION:**

Q1) Prove that under quorum-based replication, if R + W > N then a read will always return the most updated value.

Q2) In your own words, describe one advantage and one disadvantage of quorum-based replication compared to primary-based replication.

Q3) For replication to work in general, it is often necessary that all operations be carried out in the same order at each replica. Give an example scenario in which this ordering is not necessary.



Q4) How do you set W, R, N in the following cases:

- Data must be strongly consistent; minimize the loss of latest data under multiple failures; Reads should be as fast as possible.
- Eventual consistency is okay; reads/writes should be as fast as possible; up to 2 failures should not cause system become unavailable. 

**BIGTABLE:**

In your own words, explain: 

Q1) How Bigtable can support real-time performance while still ensuring fault tolerance? What is the implicit assumption about the software? 

Q2) How scalability is achieved in Bigtable?

**FAULT TOLERANCE:**

Q1) In your own words, explain why 3PC is not safe in the presence of network partition?

Q2) In 3PC, if all nodes voted Yes, the coordinator sends PRECOMMIT message to at least k subordinates and wait for their acknowledgements before sending out the COMMIT message. Assuming that there is no network partition, what is the minimum value of k to ensure that the protocol remains safe even if there are 3 node faults?

Q3) In centralized checkpoint, why does a process need to queue outgoing messages until it receives DONE from coordinator? 

Q4) The Chandy-Lamport distributed snapshot algorithm requires FIFO ordering of messages between any two processes. Using an example, explain why the lack of FIFO ordering will result in an inconsistent snapshot.

Q5) Explain how a node knows that the Chandy-Lamport algorithm has been completed. For a group of N nodes, what is the complexity of the algorithm in terms of the number of messages being sent between nodes (in big O notation)?



**STATE MACHINE REPLICATION:**

Q1) In your own words, explain why Paxos cannot tolerate f failures with fewer than 2f+1 nodes. 

Q2) In the Paxos algorithm, briefly explain why a proposer must wait for acknowledgements to its prepare message from a majority of nodes before it can move to the accept phase.

Q3) Paxos guarantees safety but not liveness. Using an example, show a scenario in which the protocol for a (given) entry never terminates (i.e., no value ever be chosen for the entry). 



**NON-CRASH FAULT TOLERANCE:**

Q1) In the Byzantine Generals solution with signature, explain why it is safe to stop forwarding the order if the order already has f endorsements?

Q2) In your own words, explain why at least 3f + 1 is required to tolerate f Byzantine faults in an asynchronous setting?

Q3) Alice claims that she has found a way to detect observable Byzantine node faults in asynchronous setting using only f+1 replicas (e.g., if some node fails, another node can detect it). Do you believe her? Explain. (Here, an observable faulty node refers to the case where the node's faulty behavior is visible/exposed to another node, e.g., through its messages or lack of messages. If a faulty node only does what a correct node would do, then the fault is not observable by other nodes.)