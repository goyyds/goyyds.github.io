---
title: kubelets_学习
lang: zh-CN
date: 2021-06-27 09:03:44
tags: [k8s,kubelets]
categories: [技术篇,服务器]
thumbnail: https://www.goyyds.com/img/s/k8s.jpg
cover: https://www.goyyds.com/img/s/k8s.jpg
toc: true
excerpt: keep hungry, keep foolish
---

#1 deployment 部署

blog
```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  namespace: zhenxi1
  name: k3s-blog
  labels:
    app: k3s-blog
spec:
  replicas: 1
  template:
    metadata:
      name: k3s-blog
      labels:
        app: k3s-blog
    spec:
      containers:
        - name: k3s-blog
          image: registry.cn-qingdao.aliyuncs.com/zhenxi-v1/blog
          imagePullPolicy: IfNotPresent
      restartPolicy: Always
      imagePullSecrets: #拉取镜像所需秘钥
        - name: ali
  selector:
    matchLabels:
      app: k3s-blog
``` 
static
```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  namespace: zhenxi1
  name: k3s-static
  labels:
    app: k3s-static
spec:
  replicas: 1
  template:
    metadata:
      name: k3s-static
      labels:
        app: k3s-static
    spec:
      containers:
        - name: k3s-static
          image: registry.cn-qingdao.aliyuncs.com/zhenxi-v1/static
          imagePullPolicy: IfNotPresent
      restartPolicy: Always
      imagePullSecrets:
        - name: ali
  selector:
    matchLabels:
      app: k3s-static
```
