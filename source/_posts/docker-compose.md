---
title: docker-compose 使用
date: 2018-12-18 17:28:58
updated: 2018-12-18 17:28:58
tags:
- docker
- docker-compose
category:
description:
---

## docker-compose安装
参看[官方文档](https://docs.docker.com/compose/install/#install-compose)

Linux版安装

```bash
sudo curl -L https://github.com/docker/compose/releases/download/1.23.2/docker-compose-`uname -s`-`uname -m` -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
```

验证安装是否成功

```bash
$ docker-compose --version
```

> docker-compose version 1.23.2, build 1110ad01


修改 `docker-compose.yml` 文件后，智能更新运行中 docker container（重建受改动部分影响的容器）

``` sh
docker-compose up -d
```


强制重新创建container

``` sh
docker-compose up -d --force-recreate
```

## 可能遇到的问题

Q: `sudo: docker-compose：找不到命令`

A:

方案一：切换为root用户后重新执行安装命令

方案二：可以使用

```
sudo `which docker-compose` ...
```

替代原来的

```
sudo docker-compose ...
```

参考链接：https://stackoverflow.com/questions/38775954/sudo-docker-compose-command-not-found


## 更新记录

1. {{ date.format('YYYY/M/D H:mm:ss') }} 首次发布
