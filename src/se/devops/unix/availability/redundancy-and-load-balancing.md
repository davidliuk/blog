# Redundancy and Load Balancing

Possible failures

- Web server failure 服务器失败

stand by

spare 方式

- cold spare
- warm spare
- hot spare

failover 故障转移（实际上是服务转移）

虚拟 IP 技术，大家都用同一个虚拟 IP 地址

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

## Load Balancer

round robin

## IPVS (IP Virtual Server): Linux's load balancer

### Use IPVS

two software

- ipvsdm

- keepalived (use VRRP protocol)

  SOAP, REST 都是基于 HTTP

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
