---
title: macOS中设置隐藏文件的显示隐藏
date: 2016-10-09 16:53:00
tags:
- macos
---

苹果Mac OS X操作系统下，设置隐藏文件是否显示有很多种方法
<!-- more -->
## 方法一
最简单的要算在Mac终端输入命令。显示/隐藏Mac隐藏文件命令如下(注意其中的空格并且区分大小写)：

显示Mac隐藏文件的命令：`defaults write com.apple.finder AppleShowAllFiles -bool true`

隐藏Mac隐藏文件的命令：`defaults write com.apple.finder AppleShowAllFiles -bool false`

## 方法二
显示Mac隐藏文件的命令：`defaults write com.apple.finder AppleShowAllFiles  YES`

隐藏Mac隐藏文件的命令：`defaults write com.apple.finder AppleShowAllFiles  NO`

输完单击Enter键，退出终端，重新启动Finder就可以了

重启Finder：鼠标单击窗口左上角的苹果标志-->强制退出-->Finder-->重新启动
 
## 方法三
<b> UPDATE 2016.12.23 : </b>

在macOS10.12中
也可以通过系统快捷键 `⇧ + ⌘ + .` 切换

