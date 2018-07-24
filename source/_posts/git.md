---
title: git 使用
date: 2016/10/17 22:58:43
updated: 2018/7/24 12:05:10
tags:
- git
---

### 设置

```shell
git config --global user.name
git config --global user.email
```

```
git config --local user.name Anonymous
```

行尾设置

```shell
git config --global core.autocrlf ture
git config --global core.autocrlf input
```

颜色设置

```shell
git config --global color.ui auto
```

> 设置的优先级 local > global > system
> global 的配置保存在用户目录下 `.gitconfig` 文件中
> local 的配置保存在当前仓库目录下 `./.git/config` 文件中


### git初始化

```shell
git init
```

### 提交

```shell
git commit -m 'commit notes'
git commit
```

### 比较

```shell
git diff
git diff --staged  # 暂存区与最近提交比较
git diff HEAD      # 当前与最近提交比较
git diff --stat    # 仅显示更改的文件，不显示代码块
```

### 历史

```shell
git log            # 最新提交在最上面，最早提交在最下面
git log --online   # 仅显示提交信息
git log --stat     # 显示更多信息
git log --patch
```

> 内容增加为绿色加号，内容减少为红色减号

### 删除文件

```shell
git rm file.txt           # 从文件系统中删除文件,并提交到暂存区
git add -u .              # 遍历着，添加当前目录，
git rm --cached file.txt  # 将文件从git中文件，历史和未来都删除
```

### 移动文件

```shell
git mv file.txt source/file.txt
```

或者

```shell
mv file.txt source/file.txt
git rm file.txt
git add source/file.txt
```

或者
文件管理器一定一个或者多个文件

```shell
git add -A .  # 无限递归移动
```

### 忽略文件

通过 `.gitignore` 文件管理

```shell
git ls-files --others --ignored --exclude-standard  # 查看被忽略的文件列表
```

### 分支

```shell
git branch                 # 查看分支
git branch branch-name     # 创建分支
git checkout branch-name   # 切换分支
git branch -d branch-name  # 删除分支
git checkout -b branch-name  # 创建并切换到新的分支
```

### 合并

merge 将两个或多个分支合并

```shell
# 将 branch-name 合并到 master 分支
git checkout master    # 切换到master分支
git merge branch-name  # 合并分支
```

### 远程

管理远程

```shell
git remote add origin https://github.com/ryanlid/test.git      # 添加远程地址
git remote set-url origin https://github.com/ryanlid/test.git  # 重新设置远程地址
git remote remove origin                                       # 删除远程地址
```

```shell
git branch -r  # 查看远程分支
git fetch
git pull
git push
```

### 恢复历史记录

```shell
git reset 重新塑造仓库历史
```

三种模式

soft   将全部的改变放回到暂存区
mixed （默认）
hard   将全部的改变丢弃，恢复到已经提交状态

```shell
git reset origin master
git reset hard origin master
git reset soft origin master

```
### 历史

```shell
git log --stat -- file.txt  # 显示文件file.txt 全部提交
```

```shell
git reflog  # git历史
```

## 更新记录

1. {{ date.format('YYYY/MM/DD H:mm:ss') }} 首次发布
2. 2018/7/24 12:05:10 整理排版，添加代码注释，修复错误
