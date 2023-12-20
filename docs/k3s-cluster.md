---
title: k3s_cluster
lang: zh-CN
date: 2021-06-28 16:28:20
tags: [k3s,k8s,集群]
categories: [技术篇,服务器]
thumbnail: https://www.goyyds.com/img/s/k3s_cluster.png
cover: https://www.goyyds.com/img/s/k3s_cluster.png
toc: true
excerpt: keep hungry, keep foolish
---

# K3S集群部署

master
```shell script
curl -sfL http://rancher-mirror.cnrancher.com/k3s/k3s-install.sh | INSTALL_K3S_MIRROR=cn  K3S_TOKEN=SECRET sh -s - server --cluster-init
```

node1
```shell script
curl -sfL http://rancher-mirror.cnrancher.com/k3s/k3s-install.sh | INSTALL_K3S_MIRROR=cn  K3S_TOKEN=SECRET  sh -s - --server https://47.104.20.105:6443
#eg.
curl -sfL http://rancher-mirror.cnrancher.com/k3s/k3s-install.sh | INSTALL_K3S_MIRROR=cn  K3S_TOKEN=SECRET  sh -s - --server https://47.104.20.105:6443
```

node2
```shell script
curl -sfL http://rancher-mirror.cnrancher.com/k3s/k3s-install.sh | INSTALL_K3S_MIRROR=cn  K3S_TOKEN=SECRET  sh -s - --server https://47.104.20.105:6443
#eg.
curl -sfL http://rancher-mirror.cnrancher.com/k3s/k3s-install.sh | INSTALL_K3S_MIRROR=cn  K3S_TOKEN=SECRET  sh -s - --server https://47.104.20.105:6443
```

# 查看token
```shell script
cat /var/lib/rancher/k3s/server/node-token
```

# 卸载k3s
 要从 server 节点卸载 K3s，请运行：
```shell script
/usr/local/bin/k3s-uninstall.sh
```
 要从 agent 节点卸载 K3s，请运行：
```shell script
/usr/local/bin/k3s-agent-uninstall.sh
```

# 删除节点
```shell script
kubectl delete node node1
```

# 获取deployment
system 下的rancher服务,不小心被缩放为0,如下操作,进行修改
```shell script
kubectl get deployments -n cattle-system

#缩放
kubectl scale deployments/rancher -n cattle-system --replicas=2

#查看
kubectl describe deployments/rancher -n cattle-system
```
