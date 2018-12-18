---
title: Docker CE 安装
date: 2018-01-20 12:53:10
updated: 2018-11-18 15:04:33
tags:
  - docker
  - centos
  - ubuntu
---

因为更换主机，重新部署环境，顺便整理一下文档。
<!--more-->

（每次文档的整理都是因为有新的安装部署😄）

> 本文内容仅适用于 Centos7.X ，Ubuntu 安装 Docker CE，如果是其他操作系统，安装其他其他版本，请自行查看 Docker 公司提供的文档。

## CentOS 7.X

### 安装

```shell
# 1. 安装需要必要的依赖包
sudo yum install -y yum-utils \
    device-mapper-persistent-data \
    lvm2
# 2. 添加docker repository
sudo yum-config-manager \
    --add-repo \
    https://download.docker.com/linux/centos/docker-ce.repo
# 3. 安装 docker-ce
sudo yum install docker-ce
# 4. 启动
sudo systemctl start docker
# 5.设置开机启动
sudo systemctl enable docker
# 6. 通过运行hello-world镜像，验证docker安装启动是否成功
sudo docker run hello-world
```

> 使用国内镜像源安装
> 因为需要替换文件中 URL 地址，这里使用了自用托管配置的文件

```shell
# 1. 安装需要必要的依赖包
sudo yum install -y yum-utils \
    device-mapper-persistent-data \
    lvm2
# 2. 添加docker repository
sudo yum-config-manager \
    --add-repo \
    https://mirrors.lidong.me/docker-ce/linux/centos/docker-ce.repo
# 3. 安装 docker-ce
sudo yum install docker-ce
# 4. 启动
sudo systemctl start docker
# 5.设置开机启动
sudo systemctl enable docker
# 6. 通过运行hello-world镜像，验证docker安装启动是否成功
sudo docker run hello-world
```

### 卸载

```shell
# 删除docker安装包
sudo yum remove docker-ce
# 删除docker相关文件，这些文件在删除docker软件包的时候不会自动删除，包括 Images,containers,volumes 和 自定义配置的文件
sudo rm -rf /var/lib/docker
```

## Ubuntu

### 安装

```shell
# step 1: 安装必要的一些系统工具
sudo apt-get update
sudo apt-get -y install apt-transport-https ca-certificates curl software-properties-common
# step 2: 安装GPG证书
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
# Step 3: 写入软件源信息
sudo add-apt-repository \
   "deb [arch=amd64] https://download.docker.com/linux/ubuntu \
   $(lsb_release -cs) \
   stable"
# Step 4: 更新并安装 Docker-CE
sudo apt-get -y update
sudo apt-get -y install docker-ce
```

> 使用国内镜像源安装

```shell
# step 1: 安装必要的一些系统工具
sudo apt-get update
sudo apt-get -y install apt-transport-https ca-certificates curl software-properties-common
# step 2: 安装GPG证书
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
# Step 3: 写入软件源信息
sudo add-apt-repository \
   "deb [arch=amd64] https://mirrors.aliyun.com/docker-ce/linux/ubuntu \
   $(lsb_release -cs) \
   stable"
# Step 4: 更新并安装 Docker-CE
sudo apt-get -y update
sudo apt-get -y install docker-ce
```

### 卸载

```shell
# 删除docker安装包
sudo apt-get purge docker-ce
# 删除docker相关文件，这些文件在删除docker软件包的时候不会自动删除，包括 Images, containers, volumes 和 自定义配置的文件
sudo rm -rf /var/lib/docker
```

## 更新记录

1. 2018-01-20 首次发布
2. 2018-12-18 简化文章内容，增加ubuntu系统安装帮助

## 参考链接

1. [Get Docker CE for CentOS](https://docs.docker.com/engine/installation/linux/docker-ce/centos/)
2. [Get Docker CE for Ubuntu](https://docs.docker.com/engine/installation/linux/docker-ce/ubuntu/)
3. [Docker CE 镜像源站](https://yq.aliyun.com/articles/110806)
