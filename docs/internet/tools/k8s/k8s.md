---
sidebar_position: 1
label: 'k8s'
id: doc-k8s
title: k8s
tags:
  - doc
  - k8s
---

```shell script
#!/bin/sh
apt-get update
apt-get -y upgrade

# 允许 iptables 检查桥接流量
cat <<EOF | sudo tee /etc/modules-load.d/k8s.conf
br_netfilter
EOF

cat <<EOF | sudo tee /etc/sysctl.d/k8s.conf
net.bridge.bridge-nf-call-ip6tables = 1
net.bridge.bridge-nf-call-iptables = 1
EOF
sudo sysctl --system

# 安装 docker
sudo apt-get install \
    ca-certificates \
    curl \
    gnupg \
    lsb-release

curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu \
  $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
sudo apt-get update

sudo apt-get install docker-ce docker-ce-cli containerd.io

# 配置Docker配置文件
# - 镜像加速器
# - CGroupDriver: CGroup驱动
sudo mkdir -p /etc/docker
sudo tee /etc/docker/daemon.json <<-'EOF'
{
  "registry-mirrors": ["https://twqv78hr.mirror.aliyuncs.com"],
  "exec-opts": ["native.cgroupdriver=systemd"],
  "log-driver": "json-file",
  "log-opts": {
    "max-size": "100m"
  },
  "storage-driver": "overlay2"
}
EOF
sudo systemctl daemon-reload
sudo systemctl restart docker

# 配置 kubernetes 阿里云软件源
curl https://mirrors.aliyun.com/kubernetes/apt/doc/apt-key.gpg | sudo apt-key add
echo "deb https://mirrors.aliyun.com/kubernetes/apt kubernetes-xenial main" > /etc/apt/sources.list.d/kubernetes.list
sudo apt-get update

# 安装 kubelet kubeadm kubectl
sudo apt-get install -y kubelet kubeadm kubectl
sudo apt-mark hold kubelet kubeadm kubectl

# 安装 flannel
docker pull quay.io/coreos/flannel:v0.15.1-amd64
mkdir -p /etc/cni/net.d/
sudo tee /etc/cni/net.d/10-flannel.conf <<-'EOF'
{"name":"cbr0","type":"flannel","delegate": {"isDefaultGateway": true}}
EOF

mkdir /usr/share/oci-umount/oci-umount.d -p
mkdir /run/flannel/

sudo tee /run/flannel/subnet.env <<-'EOF'
FLANNEL_NETWORK=172.100.0.0/16
FLANNEL_SUBNET=172.100.1.0/24
FLANNEL_MTU=1450
FLANNEL_IPMASQ=true
EOF

kubectl apply -f https://raw.githubusercontent.com/coreos/flannel/v0.15.1/Documentation/kube-flannel.yml

# 添加 kubeadm 配置文件
sudo tee kubeadm-config.yaml <<-'EOF'
kind: ClusterConfiguration
apiVersion: kubeadm.k8s.io/v1beta3
kubernetesVersion: v1.23.0
imageRepository: registry.aliyuncs.com/google_containers
apiserverAdvertiseAddress: 192.168.0.102
podNetworkCidr: 10.244.0.0/16
---
kind: KubeletConfiguration
apiVersion: kubelet.config.k8s.io/v1beta1
cgroupDriver: systemd
EOF

# 初始化 kubeadm
kubeadm init --config kubeadm-config.yaml

# 添加配置文件
# echo "export KUBECONFIG=/etc/kubernetes/admin.conf" >> /etc/profile
# source /etc/profile
```