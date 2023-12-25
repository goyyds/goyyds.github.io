---
sidebar_position: 1
label: 'java'
id: doc-java
title: java
tags:
  - doc
  - java
---

## 介绍
点我进入 [官网](https://www.java.com/) 

点我进入 [文档](https://www.java.com)

创建项目
```shell script
spring initializr
```

编写代码
```shell script
package com.goyyds.demo1;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class DockerTestController {
    @GetMapping("/test")
    @ResponseBody
    public String test(){
        return "test";
    }
}

```

idea 打包
```shell script
双击 执行 package 生成 jar 包
```

Dockerfile
```shell script
# 使用这个命令会将java8 环境集成在你打好的镜像中
FROM java:8
# 作者名
MAINTAINER xxx
# 将jar包加入到你要启动的路径中
ADD ./target/demo1-0.0.1-SNAPSHOT.jar /demo1.jar
# 端口
EXPOSE 8090
# jar包启动命令
ENTRYPOINT ["java","-jar","demo1.jar"]
```

build_cmd.cmd
```cmd
docker build -t registry.cn-qingdao.aliyuncs.com/yydsorg/java-demo1 -f ./Dockerfile .

docker push registry.cn-qingdao.aliyuncs.com/yydsorg/java-demo1

```

部署服务,请求 http://java.goyyds.com/test

其他
谷歌容器工具
GoogleContainerTools/jib

[容器工具](https://github.com/GoogleContainerTools/jib)
```shell script
docker 打包命令
mvnw compile com.google.cloud.tools:jib-maven-plugin:3.2.1:dockerBuild
```
