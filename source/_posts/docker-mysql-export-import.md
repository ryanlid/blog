---
title: docker 中 mysql 数据库导出导入
tags:
  - docker
  - mysql
date: 2018-02-07 21:24:55
updated: 2018-02-07 21:24:55
category:
description:
---

因为做 wordpress 的数据库备份，通过 docker 使用了 mysql 导入导出，记录一下与 mysql 导入导出的操作。

<!--more-->

## 1. 导出
### 导出所有数据库

```shell
$ sudo docker exec {cxontainerID} sh -c \
  'exec mysqldump --all-databases -uroot -p "$MYSQL_ROOT_PASSWORD"' \
  > /some/path/on/your/host/all-databases.sql
```

### 导出指定数据库

```shell
$ sudo docker exec {containerID or name} sh -c \
  'exec mysqldump --databases wordpress -uroot -p "$MYSQL_ROOT_PASSWORD"' \
  > /some/path/on/your/host/wordpress.sql
```

如导出指定容器ID为9244及指定数据库名 wordpress

```shell
$ sudo docker exec 9244 sh -c \
  'exec mysqldump --databases wordpress -uroot -pmy-secret-pw' \
  > /var/backup/wordpress.sql
```

## 2. 导入
### 首先要创建一个container

```shell
$ sudo docker run --name some-mysql -v /var/datadir:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=my-secret-pw -d mysql
```

### 导入数据

```shell
$ sudo docker exec -i some-mysql mysql -uroot -pmy-secret-pw &lt; /var/backup/wordpress.sql
```

### 验证

```shell
$ sudo docker exec -it some-mysql /bin/bash mysql -uroot -pmy-secret-pw
```

```sql
show databases;

use wordpress;

show tables;
```

检查一下数据表。

[![](https://static.lidong.me/upload/images/Sk8gBSdUf.png)](https://static.lidong.me/upload/images/Sk8gBSdUf.png)

<!-- <a href=""><img class="alignnone size-medium" src="https://static.lidong.me/upload/images/Sk8gBSdUf.png" /></a> -->

## 参考
1. [关于导入导出docker中的mysql数据库](http://jeeinn.com/2016/08/128/)
2. [library/mysql - Docker Hub ](https://hub.docker.com/r/_/mysql/)
