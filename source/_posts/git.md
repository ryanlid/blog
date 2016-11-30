---
title: git使用
date: 2016-10-17 22:58:43
tags:
---

### 设置
git config --global user.name
git config --global user.email

行尾设置
git config --global core.autocrlf ture
git config --global core.autocrlf input

颜色设置
git config --global color.ui auto

git config --local user.name Anonymous
local < global < system 设置的优先级
<!-- more -->
### 初始化
git init

git add

### 提交
git commit -m ''
git commit

### 比较
git diff
git diff --staged 暂存区与最近提交比较
git diff HEAD 当前与最近提交比较

git diff --stat 仅显示更改的文件，不显示代码块

### 历史
git log  最新提交在最上面，最早提交在最下面
git log --online 仅显示提交信息
git log --stat 显示更多信息
git log --patch
内容增加为绿色 
内容减少为红色

### 删除文件
git rm file.txt   从文件系统中删除文件,并提交到暂存区

git add -u . 遍历着，添加当前目录，

git rm --cached file.txt 将文件从git中文件，历史和未来都删除

### 移动文件
git mv file.txt source/file.txt
或者
mv file.txt source/file.txt
git rm file.txt
git add source/file.txt
或者
文件管理器一定一个或者多个文件
git add -A . 无限递归移动

git log --stat -- file.txt  显示文件file.txt 全部提交

### 忽略文件
gitignore
git ls-files --others --ignored --exclude-standard  查看被忽略的文件列表

### 分支
git branch 查看分支
git branch branch-name 创建分支
git branch -d branch-name 删除分支

git checkout branch-name 切换分支

git checkout -- file.txt 清除最后一次commit 内容
丢弃编辑的内容
git checkout -b branch-name 创建新的分支

### 合并
merge 将两个或多个分支合并
切换到master分支
git merge branch-name

在冲突文件中：
`<<<<head  当前分支master`
`>>>> branch-name` 分支 

不立即解决冲突
git merge --abort 清除工作目录 从当前分支的最后一次提交中同时清除暂存区
git merge --squash branch-name 

### 远程
git remote add origin http://
git remote set-url origin http://
git remote add origin

git branch -r 查看远程分支
git fetch
git pull
git push

### 恢复
git reset 重新塑造仓库历史
三种模式 
soft 将全部的改变放回到暂存区
mixed （默认） 
hard

git reflog  git历史


