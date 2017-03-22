---
title: 创建只有gh-pages分支github仓库
date: 2017-03-19 14:47:59
updated: 2017-03-19 14:47:59
tags:
category:
---
有时项目只需要使用gh-pages分支，并不要master分支
<!-- more -->
## 创建 只有gh-pages分支
初始化

```
git init
```
创建 gh-pages 分支

```
gitcheckout --orphan gh-pages
```
添加文件至暂存区

```
git add .
```
提交

```
git commit -m "first commit"
```
添加远程地址

```
git remote add origin git@github.com:username/project.git
```
推送

```
git push origin gh-pages
```

## 参考
[在github上建立gh-pages分支](http://www.jianshu.com/p/2352c5a6f229)

