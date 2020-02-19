---
title: Circleci SSH 服务端设置
date: 2020-02-19 18:31:51
updated: 2020-02-19 18:31:51
tags:
- circleci
- ci
- ssh
category:
description:
---

<!-- more -->

## 添加 circleci 用户

```shell
# 添加用户
useradd circleci
```

## 导入密钥

创建 authorized_keys，并设置权限

```sh
mkdir -p /home/circleci/.ssh/
touch /home/circleci/.ssh/authorized_keys
sudo chown circleci:circleci /home/circleci/.ssh/
sudo chown circleci:circleci /home/circleci/.ssh/authorized_keys
sudo chmod 700 /home/circleci/.ssh/
sudo chmod 600 /home/circleci/.ssh/authorized_keys
```

导入公钥

将公钥文件导入 `/home/circleci/.ssh/authorized_keys`


## 赋予 circleci 用户文件权限

根据需要设置 circleci 权限文件，如

```sh
sudo chown -R circleci:circleci /srv/www
```

根据需要重启ssh

```
sudo systemctl restart ssh
```
## 更新记录

1. {{ date.format('YYYY/M/D H:mm:ss') }} 首次发布

## 参考链接
