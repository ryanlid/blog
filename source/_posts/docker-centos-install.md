---
title: Centos 安装 Docker
tags:
  - docker
date: 2018-01-20 12:53:10
updated: 2018-01-20 12:53:10
category:
description:
---

因为更换主机，重新部署环境，顺便整理一下文档 😄
<!--more-->

> 本文内容仅适用于 Centos7.X 安装 Docker EE，如果是其他操作系统，安装其他其他版本，请自行查看 Docker 公司提供的文档。

## 安装docker

1. 安装需要依赖包

    ```shell
    $ sudo yum install -y yum-utils \
      device-mapper-persistent-data \
      lvm2
    ```

2. 添加docker repository

    ```
    $ sudo yum-config-manager \
      --add-repo \
      https://download.docker.com/linux/centos/docker-ce.repo
    ```

3. （可选）开启 edge 或 test 仓库（repository）

    ```
    $ sudo yum-config-manager --enable docker-ce-edge
    ```

    ```
    $ sudo yum-config-manager --enable docker-ce-test
    ```

    通过 `--disable` 参数，禁用 edge 或 test 仓库，如：禁用 edge 仓库

    ```
    $ sudo yum-config-manager --disable docker-ce-edge
    ```

4. 安装

    ```
    $ sudo yum install docker-ce
    ```

5. 启动

    ```
    $ sudo systemctl start docker
    ```

6. 设置开机启动

    ```
    $ sudo systemctl enable docker
    ```

7. 通过运行hello-world镜像，验证docker安装启动是否成功

  ```
  $ sudo docker run hello-world
  ```

上面全部操作的代码:

```
sudo yum install -y yum-utils \
device-mapper-persistent-data \
lvm2
sudo yum-config-manager \
--add-repo \
https://download.docker.com/linux/centos/docker-ce.repo \
sudo yum install -y docker-ce
sudo systemctl start docker
sudo systemctl enable docker
sudo docker run hello-world
```

## 卸载
1. 删除docker

    ```
    $ sudo yum remove docker-ce
    ```

2. 删除docker相关文件，这些文件在删除docker软件包的时候不会自动删除，包括 Images, containers, volumes 和 自定义的文件

    ```
    $ sudo rm -rf /var/lib/docker
    ```

## 参考链接

1. [Get Docker CE for CentOS](https://docs.docker.com/engine/installation/linux/docker-ce/centos/)
