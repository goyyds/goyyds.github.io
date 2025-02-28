---
sidebar_position: 1
label: 'Xcode'
id: doc-swift
title: swift
tags:
  - doc
  - swift
---

# xcode

问题及解决办法：

## 1. 创建项目
```shell
注意选择平台
注意开发者team
手机开发者模式开启
```

## 2. 内购平台
[文档](https://developer.apple.com/cn/in-app-purchase/)
```shell
app内购买项目
```

## 3.build
```shell
选择项目,选择设备/模拟器 运行build
```

## 统一管理和国际化
国际化
```shell
new file form template -> string catalog
```
统一管理[图片/图标/颜色/符号图片/数据]
```shell
Assets.xcassets
```

## app name 国际化
```shell

1.新建 string catalog File,取名 InfoPlist

2.设置 以下两个值
CFBundleDisplayName
CFBundleName
```