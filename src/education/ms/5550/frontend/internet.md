# Internet basics

- The Internet
- Interdomain routing; BGP; valley-free
- Path properties
- TCP and UDP
- Socket basics; echo server

## The Internet

- Rounters
- Switches
- Packet switching

### IP addresses

How do routers know where to send a packet？

- **Internet protocal**
- Each machine is assigned with an **IP address**
- Each packet has a source and destination  address
- Each router has a forwading table that maps ranges to links over which packet in that ranges should be sent ("next hop")

### ICMP

- ping
- Trace route



- IP address ranges are assigned by the **IANA** (Internet Assigned Numbers Authority)
  - IANA delegates this taks to five regional internet registries (RIRs)
- You can use tools like `whois`  to see who a given IP belongs to

### IPv4 vs IPv6

- IPv4: early 80s, 32-bit addresses
- IPv6: early 90s, 128-bit addresses
  - Technical improvements
  - run out of IPv4 addresses at this point
- IPv6 is widely deployed now, but not yet ubiquitous

## Routing

### Interdomain routing

- Networks continuously exchange routes to IP prefixes

### BGP (Border Gateway Protocol)

- The internet is divided into **autonomous systems** (ASes)

AS-level connectivity

### Customer, providers, and peering

- certain business relationships with each other
- customer/provider
- customer will announce itself, its customer, not announce **Peering** to provider
- provider will announce itself, its customer and **Peering** to provider

Q1: Consider Network 2 and its provider, Network 3. Which path(s) does Network 3 announce to Network 2?

> A,B,C

Q2: Consider Network 3 and its customer, Network 2. Which path(s) does Network 3 announce to Network 2?

> D,E,F

Q3: Network E 5 to Network 3

> e

Q4: Consider Network 1 and its provider, Network 2. Which path(s) does Network 2 announce to Network 1?

> CDEF

### Tiers



### Valley-free routing



### Path properties

#### Queueing delay, loss

What if we send packets too quickly

## TCP & UDP

Transmission Control Protocol

### Congestion Control

Decide how fast should the sender send

Problem: Availability capacity not known

Congestion control

- congestion window of max packets in flight
- Slow start: exponential increase until threshold or a drop is detected
- increase cwnd by one packet for each incoming ACK
- Congestion avoidance: additive increase, multiplicate decrease (AIMD)

### Port numbers

### UDP

User datagram protocol

not all application need TCP Reliable stream abstraction 

- Internet paths are not perfect
- TCP provides

## Socket

operations

- socket: create
- bind
- listen
- send/sendto/write
- Recv/recvfrom/read
- close



Java example: sender

- create a socket
- write data

Receiver

- bind to a port

 W

netstat tool to show which sockets exist locally
