---
title: redis-cluster报错MOVED
lang: zh-CN
date: 2021-06-30 15:58:46
tags: [数据库]
categories: [技术篇,数据库]
thumbnail: https://michaelgzy.zhenxishenghuo.club/images/article/redis.jpg
cover: https://michaelgzy.zhenxishenghuo.club/images/article/redis.jpg
toc: true
excerpt: redis也不赖!
---

# (error) MOVED 5798 10.42.0.41:6379

需要使用集群模式
```shell script
#无密码
redis-cli -c -h redis-cluster

redis-cli -c -h redis-cluster -a 123456
```
