---
sidebar_position: 3
label: 'Xcode'
id: doc-dependence
title: dependence
tags:
  - doc
  - xcode
  - dependence
---

# xcode

问题及解决办法：

## 1. 添加方式
第一种： SPM 【swift package manager】
```shell
file->add package dependences ->search or enter package url
```

第二种： Cocoapods
```shell
需要安装 cocoapods

todo
```

第三种：Carthage
```shell
todo
```

## 2.自定义本地依赖
创建 [初始化注意模式]
```shell
mkdir MyPackage
cd MyPackage
swift package init
```
使用：
```shell
file->add package dependences -> add local -> select MyPackage
```
