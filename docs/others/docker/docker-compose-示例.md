---
title: docker-compose-示例
lang: zh-CN
date: 2021-07-09 17:21:37
tags: [DOCKER,docker-composer]
categories: [技术篇,容器]
thumbnail: https://www.goyyds.com/img/me.jpg
cover: https://www.goyyds.com/img/me.jpg
toc: true
excerpt: keep hungry, keep foolish
---

## 1. 新建文件
docker-compose.yml
```yaml
version: '3'
services:
  go-workflow:
    container_name: workflow      
    image: registry.cn-hangzhou.aliyuncs.com/mumushuiding/go-workflow:latest
    ports:
    - "8080:8080"
    environment:
      - DbType=mysql
      - DbLogMode=false
      - DbName=test
      - DbHost=mysql
      - DbUser=root
      - DbPassword=123456
      - RedisHost=redis
    links:
      - redis
      - mysql

  redis:
    container_name: redis
    image: redis:5.0
  mysql:
    container_name: mysql
    image: mysql:8.0
    command: --default-authentication-plugin=mysql_native_password
    restart: always
    environment:
      MYSQL_ROOT_PASSWORD: 123456
    ports:
    - 3306
```

## 2.构建
```shell script
docker exec -it workflow bash

# 没有test数据库,无法启动
```

## 3.创建msyql test库
```shell script
mysql uroot -p12345
create database test;
```

##4. 重新构建
```shell script
docker exec -it workflow bash
```

http get http://localhost:8080/workflow/identitylink/findParticipant?procInstID=12562
返回 []

over
