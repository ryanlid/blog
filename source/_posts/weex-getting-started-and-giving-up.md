---
title: weex 从入门到放弃
date: 2018-07-18 13:31:57
updated: 2018-07-21 23:43:57
tags:
- weex
- vuejs
category:
description:
---

欢迎访问新站点: <https://www.yidiankuaile.com/post/weex>

在项目中尝试使用，研究了好几天，感觉框架不成熟，很多功能需要原生支撑，最终决定弃坑，不过还是记录一下。

<!-- more -->
## 初始使用

安装 weex-toolkit

```
npm install weex-toolkit -g
```

初始化项目

```
weex create awesome-app
```

运行

```
cd awesome-app
npm install
npm start
```

编译运行

```
weex platform add ios
weex platform add android
```

在模拟器或真实设备上启动应用

```
weex run ios
weex run android
weex run web
```

## 一些有用的资料

weex-ui：阿里飞猪支持的一个UI库

https://alibaba.github.io/weex-ui/#/

natjs: 提供一些常用原生功能

http://natjs.com/#/zh-cn/

weex 插件市场: 可以找到一些插件

https://market.dotwe.org/ext/list.htm

## 更新记录

1. {{ date.format('YYYY/M/D H:mm:ss') }} 首次发布
