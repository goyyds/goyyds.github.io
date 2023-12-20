---
title: k3s学习
lang: zh-CN
date: 2021-06-25 14:07:42
tags: [rancher,k3s,k8s]
categories: [技术篇,服务器]
thumbnail: https://www.goyyds.com/img/s/k3s.png
cover: https://www.goyyds.com/img/s/k3s.png
toc: true
excerpt: keep hungry, keep foolish
---
OS:
Ubuntu:18.04 64位

# 1 k3s 安装
国外版
```shell script
    curl -sfL https://get.k3s.io | sh -
```
国内版
```shell script
curl -sfL http://rancher-mirror.cnrancher.com/k3s/k3s-install.sh | INSTALL_K3S_MIRROR=cn sh -
```
验证
```shell script
kubectl get all -n kube-system
```

# 2  helm安装
helm安装指导
[传送门](https://helm.sh/zh/docs/intro/install/)
```shell script
curl https://baltocdn.com/helm/signing.asc | sudo apt-key add -
sudo apt-get install apt-transport-https --yes
echo "deb https://baltocdn.com/helm/stable/debian/ all main" | sudo tee /etc/apt/sources.list.d/helm-stable-debian.list
sudo apt-get update
sudo apt-get install helm
```

# 3 rancher
 k8s hub 库 搜索rancher
[传送门](https://artifacthub.io/packages/helm/rancher-stable/rancher)
或者
[传送门](https://rancher.com/docs/rancher/v2.5/en/installation/install-rancher-on-k8s/)
```shell script
helm repo add rancher-stable https://releases.rancher.com/server-charts/stable
kubectl create namespace cattle-system
```
# 4 cert-manager

```shell script
# Install the CustomResourceDefinition resources separately
kubectl apply --validate=false -f https://github.com/jetstack/cert-manager/releases/download/v1.0.4/cert-manager.crds.yaml

# **Important:**
# If you are running Kubernetes v1.15 or below, you
# will need to add the `--validate=false` flag to your
# kubectl apply command, or else you will receive a
# validation error relating to the
# x-kubernetes-preserve-unknown-fields field in
# cert-manager’s CustomResourceDefinition resources.
# This is a benign error and occurs due to the way kubectl
# performs resource validation.

# Create the namespace for cert-manager
kubectl create namespace cert-manager

# Add the Jetstack Helm repository
helm repo add jetstack https://charts.jetstack.io

# Update your local Helm chart repository cache
helm repo update

# Install the cert-manager Helm chart
helm install \
  cert-manager jetstack/cert-manager \
  --namespace cert-manager \
  --version v1.0.4

```

报错解决
```shell script
报错信息:

Error: Kubernetes cluster unreachable: Get "http://localhost:8080/version?timeout=32s": dial tcp [::1]:8080: connect: connection refused

报错原因: helm v3版本不再需要Tiller，而是直接访问ApiServer来与k8s交互，通过环境变量KUBECONFIG来读取存有ApiServre的地址与token的配置文件地址，默认地址为~/.kube/config

解决方法:

手动配置 KUBECONFIG环境变量

临时解决: export KUBECONFIG=/etc/rancher/k3s/k3s.yaml

永久解决:

执行: vi /etc/profile
写入内容: export KUBECONFIG=/etc/rancher/k3s/k3s.yaml
执行: source /etc/profile
```

```shell script
# 查看cert-manager 是否ok
kubectl get pods --namespace cert-manager
```

 cert-manager 网站
[传送门](https://operatorhub.io/operator/cert-manager)

# 5 使用helm 和 所选证书验证方式 安装rancher
```shell script
helm install rancher rancher-stable/rancher \
  --namespace cattle-system \
  --set hostname=地址 \
  --set replicas=3 \
  --set ingress.tls.source=letsEncrypt \
  --set letsEncrypt.email=1@qq.com


# 查看状态
kubectl -n cattle-system rollout status deploy/rancher
```

# 访问配置的地址,设置密码,进行rancher管理

helm install \
cert-manager jetstack/cert-manager \
--namespace cert-manager \
--version v1.7.1


helm install rancher rancher-stable/rancher \
--namespace cattle-system \
--set hostname=ti.goyyds.com \
--set replicas=3 \
--set ingress.tls.source=letsEncrypt \
--set letsEncrypt.email=429534533@qq.com