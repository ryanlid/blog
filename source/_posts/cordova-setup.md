---
title: cordova 开发环境搭建
tags:
  - 前端
  - android
  - app
  - cordova
  - ios
date: 2018-05-14 22:12:43
updated: 2018-05-14 22:12:43
category:
description:
---

欢迎访问新站点: <https://www.yidiankuaile.com/post/cordova-setup>

公司的一个项目是使用 cordova 框架做的，现在在自己电脑重新搭建一下开发环境，整理一下文档备忘。

<!-- more -->

## Java 环境搭建
### 下载 Java
> 需要下载 JavaSE 8 貌似最新的 JavaSE10 ，cordova还不支持
Java SE 8 下载地址：http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html
Java SE 8 目前最新版本 jdk1.8.0_171

<details>
<summary>新版安装不需要手动配置环境变量，点击查看环境变量配置</summary>
javaSE 安装程序会自动添加环境变量 Path 中添加一条
![Java SE8配置安装环境变量](https://static.oonnnoo.com/upload/images/rJk6kyuCM.png)
</details>

## Nodejs 安装

前端必备，略。

Windows 平台建议通过 [nvm-windows](https://github.com/coreybutler/nvm-windows) 安装，也可参考[nvm-windows 使用](https://lidong.me/wordpress/2018/nvm-windows/) ；

macOS 平台和 Linux 平台建议通过 [nvm](https://github.com/creationix/nvm) 安装。

## 安装 cordova

```
npm install -g cordova
```

## 创建 cordova 应用
### 创建 app

```
cordova create hello com.example.first firstApp
```

> `cordova create` 是创建项目的命令，紧接着hello为目录，com.example.first为命名空间，firstApp为app名称
### 添加平台

```
cd hello
cordova platform add android
```

### 编译 app

```
cordova build android
```

<details>
<summary>上述命令的集合</summary>

```
cordova create hello com.example.first firstApp
cd hello
cordova platform add android
cordova build android
```

</details>

### 运行 app

模拟器运行

```
cordova emulate android
```

浏览器运行

```
cordova serve android
```

> 浏览器访问 http://localhost:8000 即可
真机上运行

```
cordova run android
```

### 更多 cordova 命令

创建应用

```
cordova create first com.example.first firstApp
```

添加平台

```
cordova platform add android
cordova platform add ios
cordova platform add windows
cordova platform add osx
```

查看平台

```
cordova platforms ls
```

删除平台

```
cordova platform remove android
cordova platform rm android
```

打包app

```
cordova build android
```

预编译

```
cordova prepare android
```

编译

```
cordova compile android
```

运行app

```
cordova emulate android
cordova serve android
cordova run android
```

## 参考

1. [移动开发cordova环境搭建](https://blog.csdn.net/u011175079/article/details/72841065)
2. https://segmentfault.com/a/1190000004868680
