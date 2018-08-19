---
title: nvm-windows 使用
tags:
  - 前端
  - nodejs
  - windows
date: 2018-05-11 22:03:35
updated: 2018-05-11 22:03:35
category:
description:
---

为了方便的安装不同版本的 Nodejs，在 Linux或macOS上可以使用 [nvm](https://github.com/creationix/nvm) ，在 Windows 上则可以使用 [nvm-windows](https://github.com/coreybutler/nvm-windows)

<!-- more -->

## 下载安装

下载地址：https://github.com/coreybutler/nvm-windows/releases

安装：直接下一步，下一步。就可以了~

## 查看nvm的版本，验证安装是否成功

```
nvm version  // 1.1.6
```

## 设置 nodejs、npm 下载镜像

```
nvm node_mirror https://npm.taobao.org/mirrors/node/
nvm npm_mirror https://npm.taobao.org/mirrors/npm/
```

## 安装 nodejs

> 8.11.1 为文章完成时的最新的长期支持版，请根据实际情况安装最新版本

```
npm install 8.11.1
```

## 启用 nodejs

```
npm use 8.11.1
```

<details>
<summary>上述全部内容的集合</summary>

```shell
nvm version
nvm node_mirror https://npm.taobao.org/mirrors/node/
nvm npm_mirror https://npm.taobao.org/mirrors/npm/
npm install 8.11.1
npm use 8.11.1
```
</details>


## 更新记录

1. {{ date.format('YYYY/M/D H:mm:ss') }} 首次发布

## 参考链接
