---
title: rancher中安装mariadb
date: 2021-05-02 15:58:00
lang: zh-CN
tags: [数据库]
categories: [技术篇,数据库]
thumbnail: https://michaelgzy.zhenxishenghuo.club/images/article/mariadb_mysql.jpg
cover: https://michaelgzy.zhenxishenghuo.club/images/article/mariadb_mysql.jpg
toc: true
excerpt: MariaDB还不错!
---

# deploy a workload
```yaml
configs:

name:
    mysql
docker image
    mariadb:10.6.0
    
MYSQL_ROOT_PASSWORD
    it's a secret

volumes
    path on the node:
    /var/michael/rancher/mariadb
    Mount point:
    /var/lib/mysql

    The Path on the Node must be A directory,or create if it does not exist 

```


# lanch
    
![like this](https://michaelgzy.zhenxishenghuo.club/images/article/mariadb_install.png)
