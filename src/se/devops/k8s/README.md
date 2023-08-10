# Kubernetes

[官方文档](https://kubernetes.io/docs/home/)

A workload is an application running on Kubernetes. Whether your workload is a single component or several that work
together, on Kubernetes you run it inside a set of pods. In Kubernetes, a Pod represents a set of running containers on
your cluster.

Kubernetes pods have a defined lifecycle. For example, once a pod is running in your cluster then a critical fault on
the node where that pod is running means that all the pods on that node fail. Kubernetes treats that level of failure as
final: you would need to create a new Pod to recover, even if the node later becomes healthy.

you don't need to manage each od directly. Instead, you can use workload resources that manage a set of pods on your
behalf. These resources configure controllers that make sure the right number of the right kind of pod are running, to
match the state you specified.
