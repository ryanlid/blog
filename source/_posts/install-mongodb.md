---
title: MongoDB 安装
date: 2020-03-05 15:07:56
updated: 2020-03-05 15:07:56
tags:
- install
- mongodb
category:
description:
---

## MacOS

### 使用 brew 安装

```sh
brew tap mongodb/brew
brew install mongodb-community
```

### 前台运行

```sh
mongod --config /usr/local/etc/mongod.conf
```

### 后台启动

```sh
brew services start mongodb-community
```

### 停止运行

```sh
brew services stop mongodb-community
```

### 配置文件

```conf /usr/local/etc/mongod.conf
systemLog:
  destination: file
  path: /usr/local/var/log/mongodb/mongo.log
  logAppend: true
storage:
  dbPath: /usr/local/var/mongodb
net:
  bindIp: 127.0.0.1
```

## ubuntu 18.04

### 安装 MongoDB

```sh
apt update
apt install -y mongodb
```

### 运行

```sh
mongod --config /etc/mongodb.conf
```

### 查看 MongoDB 运行状态

```sh
systemctl status mongodb
```

### 启动 MongoDB

```sh
systemctl start mongod
```

### 停止 MongoDB

```sh
systemctl stop mongod
```

### 设置开机启动 MongoDB

```sh
systemctl enable mongod
```

### 配置文件

```
/etc/mongodb.conf
```

https://gist.github.com/7e28fe926291da61cfd3ebbe60de6e4e

## docker 运行

```sh
docker run --name some-mongo -d mongo
```

[参考链接](https://hub.docker.com/_/mongo)

## 更新记录

1. {{ date.format('YYYY/M/D H:mm:ss') }} 首次发布

## 参考链接
