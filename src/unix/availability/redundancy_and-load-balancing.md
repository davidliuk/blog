# Redundancy and Load Balancing

stand by



spare

- cold spare
- warm spare
- hot spare





failover 故障转移（实际上是服务转义）

虚拟IP技术，大家都用同一个虚拟IP地址



failover.sh

```sh
#!/bin/sh
VIP="10.0.0.1"
DEV="eth0"

```





## Health Check

判断服务是否坏的方法

1. ping，监视进程发起的
2. Monitor，监视进程发起的
3. Heartbeat，被监视方发的，自己说我没事





round robin





## Load Balancer





## IPVS (IP Virtual Server): Linux's load balancer



### Use IPVS

two software

- ipvsdm

- keepalived (use VRRP protocol)

  SOAP, REST都是基于HTTP



### Build IPVS





L4 Switch vs. L7 Switch





内容服务器





## Redundancy of Routers and Load Balancer



### VRRP

Virtual router redundancy protocol

- IP Address
- Virtual Rtr ID ()
- Priority (优先顺序)







四层负载均衡
