---
title: rust_学习1
lang: zh-CN
date: 2021-07-29 08:06:40
tags: [RUST]
categories: [rust,知识]
thumbnail:  https://www.goyyds.com/img/s/rust.png
cover:  https://www.goyyds.com/img/s/rust.png
toc: true
excerpt: rust体验!
---

[RUST传送门](https://doc.rust-lang.org/book/)

#1 基础信息
基础环境:
```shell script
wsl

cat /etc/issue
Ubuntu 20.04.2 LTS \n \l
```
#2 安装
rust 安装
```shell script
curl --proto '=https' --tlsv1.2 https://sh.rustup.rs -sSf | sh

检查
rustc --version

# 更新系统环境变量
source $HOME/.cargo/env
```

gcc  安装

```shell script
# 更换源
# 可以先进行备份
cp /etc/apt/sources.list /etc/apt/sources.list.bake

sudo vim /etc/apt/sources.list
# 进行替换

# apt update 速度，如有需要可自行取消注释
deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ focal main restricted universe multiverse
# deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ focal main restricted universe multiverse
deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ focal-updates main restricted universe multiverse
# deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ focal-updates main restricted universe multiverse
deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ focal-backports main restricted universe multiverse
# deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ focal-backports main restricted universe multiverse
deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ focal-security main restricted universe multiverse
# deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ focal-security main restricted universe multiverse

# 预发布软件源，不建议启用
# deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ focal-proposed main restricted universe multiverse
# deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ focal-proposed main restricted universe multiverse


# 更新apt
sudo apt update
# 安装gcc
sudo apt install gcc
```

#3 rust测试
```shell script
# 创建一个项目(cargo管理器)
cargo new hello_cargo

cargo run
    Finished dev [unoptimized + debuginfo] target(s) in 0.05s
     Running `target/debug/hello_cargo`
Hello, world!

cargo build
    Finished dev [unoptimized + debuginfo] target(s) in 0.06s

tree hello_cargo/

hello_cargo/
├── Cargo.lock
├── Cargo.toml
├── src
│   ├── main
│   └── main.rs
└── target
    ├── CACHEDIR.TAG
    └── debug
        ├── build
        ├── deps
        │   ├── hello_cargo-364f200581e98693
        │   └── hello_cargo-364f200581e98693.d
        ├── examples
        ├── hello_cargo
        ├── hello_cargo.d
        └── incremental

cat Cargo.toml
[package]
name = "hello_cargo"
version = "0.1.0"
edition = "2018"

# See more keys and their definitions at https://doc.rust-lang.org/cargo/reference/manifest.html

[dependencies]

```

hello world is beautiful!
