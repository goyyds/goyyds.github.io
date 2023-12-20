---
sidebar_position: 4
label: '多阶段构建'
id: doc-golang-micro-consul
title: 多阶段构建
tags:
  - doc
  - micro
---

Dockerfile
```shell script
FROM alpine:3.15

RUN echo "http://mirrors.aliyun.com/alpine/v3.15/main" > /etc/apk/repositories
RUN echo "http://mirrors.aliyun.com/alpine/v3.15/community" >> /etc/apk/repositories
RUN apk --update add --no-cache

# 修改时区为东八区
# 添加CA根证书
RUN apk --no-cache add tzdata  && \
    ln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime && \
    echo "Asia/Shanghai" > /etc/timezone && \
    apk --no-cache add ca-certificates && \
    rm -rf /var/cache/apk/* /tmp/*

```

build
```shell script
docker build -t registry.cn-qingdao.aliyuncs.com/yydsorg/zone8 -f ./Dockerfile .

docker push registry.cn-qingdao.aliyuncs.com/yydsorg/zone8

```


使用第一阶段构建
```shell script
FROM golang:1.15 AS build

WORKDIR /app

ADD . .

RUN export GOPROXY=https://goproxy.io && \
    GOOS=linux GOARCH=amd64 CGO_ENABLED=0 go build -ldflags="-s -w" -mod=vendor -o run .

FROM registry.cn-qingdao.aliyuncs.com/yydsorg/zone8

WORKDIR /app

COPY --from=build /app/run .

ENV APP_ENV prod

ENTRYPOINT ["/app/run"]


```

build
```shell script
docker build -t registry.cn-qingdao.aliyuncs.com/yydsorg/xxx -f ./Dockerfile .

docker push registry.cn-qingdao.aliyuncs.com/yydsorg/xxx
```