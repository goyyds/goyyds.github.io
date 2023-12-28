---
sidebar_position: 1
label: 'docker'
title: docker_storage
---

```shell
mklink /j "C:\Program Files\Docker" "F:\Docker"

wsl -l -v

//等待 stoped

wsl --shutdown

wsl --export docker-desktop f:\Docker\wsl\distro\docker-desktop.tar
wsl --export docker-desktop-data f:\Docker\wsl\data\docker-desktop-data.tar

 wsl --unregister docker-desktop
 wsl --unregister docker-desktop-data

 wsl --import docker-desktop-data f:\Docker\wsl\data\ f:\Docker\wsl\data\docker-desktop-data.tar --version 2
wsl --import docker-desktop f:\Docker\wsl\distro\ f:\Docker\wsl\distro\docker-desktop.tar --version 2
```