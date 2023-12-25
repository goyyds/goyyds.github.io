---
sidebar_position: 1
label: 'flutter'
id: doc-flutter
title: flutter
tags:
- doc
- flutter
---

## flutter介绍
点我进入 [官网](https://flutter.dev/)

点我进入 [文档](https://docs.flutter.dev/)

## 第一个程序

### 环境安装
```shell
# 按官方步骤 下载

#使用idea 创建项目 选择 flutter 所在目录

# 选择多平台创建

```

### 编写
````shell
#在 lib 中编写内容



````

### 运行
```shell

#打包web
flutter build web

# 运行
#1 随机
flutter run 

#2 指定端口 浏览器
flutter run -d chrome --web-port 8000
```

### docker

Dockerfile
```dockerfile
FROM httpd:2.4

COPY ./build/web/  /usr/local/apache2/htdocs/

WORKDIR /usr/local/apache2/

RUN chown -R daemon:daemon htdocs &&\
    chmod -R 755 htdocs
```
run.bat
```shell
docker build -t registry.cn-qingdao.aliyuncs.com/xxx/xxx -f ./Dockerfile .

docker push registry.cn-qingdao.aliyuncs.com/xxx/xxx
```

### 注意
````shell
# 略
````