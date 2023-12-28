---
title: helm安装redis-cluster集群
lang: zh-CN
date: 2021-06-30 16:01:38
thumbnail: https://michaelgzy.zhenxishenghuo.club/images/article/redis.jpg
cover: https://michaelgzy.zhenxishenghuo.club/images/article/redis.jpg
toc: true
excerpt: redis也不赖!
---

# 安装redis集群
## 首先安装helm
## 安装redis-cluster
```shell script

$ helm repo add bitnami https://charts.bitnami.com/bitnami

$ helm install redis-cluster bitnami/redis-cluster

#结果
NAME: redis-cluster
LAST DEPLOYED: Wed Jun 30 15:17:50 2021
NAMESPACE: zhenxi
STATUS: deployed
REVISION: 1
TEST SUITE: None
NOTES:
** Please be patient while the chart is being deployed **


To get your password run:
    export REDIS_PASSWORD=$(kubectl get secret --namespace "zhenxi" redis-cluster -o jsonpath="{.data.redis-password}" | base64 --decode)

You have deployed a Redis(TM) Cluster accessible only from within you Kubernetes Cluster.INFO: The Job to create the cluster will be created.To connect to your Redis(TM) cluster:

1. Run a Redis(TM) pod that you can use as a client:
kubectl run --namespace zhenxi redis-cluster-client --rm --tty -i --restart='Never' \
 --env REDIS_PASSWORD=$REDIS_PASSWORD \
--image docker.io/bitnami/redis-cluster:6.2.4-debian-10-r0 -- bash

2. Connect using the Redis(TM) CLI:

redis-cli -c -h redis-cluster -a $REDIS_PASSWORD

```
