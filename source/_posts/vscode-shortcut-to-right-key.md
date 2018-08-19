---
title: Visual Studio Code 在右键添加快捷方式
tags:
  - vscode
  - 编辑器
date: 2018-05-13 22:48:40
updated: 2018-05-13 22:48:40
category:
description:
---

在安装 VSCode 的时候勾选添加到PATH，是可以在右键自动添加快捷方式的，不过某些请情况，可能没有快捷方式，需要手动添加。当然以下方式可以适用于把其他软件添加到右键快捷方式的。

<!-- more -->

## 文件打开

1.  Win+R 打开运行，输入 regedit ，打开注册表，找到HKEY_CLASSES_ROOT&#42;\shell分支，如果没有shell分支，则在*下点击右键，选择“新建－项”，建立shell分支。</p>

2.  在shell下新建“VisualCode”项，在右侧窗口的“默认”键值栏内输入`Open w&amp;ith Code`，这是单击鼠标右键时VisualCode启动程序的显示值。项的名称和键值可以任意，以含义明确为好。其中键值将显示在右键菜单中。

3.  在“VisualCode”下再新建Command项，在右侧窗口的“默认”键值栏内输入记事本程序所在的路径，我的是：`"C:\Program Files\Microsoft VS Code\code.exe" "%1"`。其中的%1表示要打开的文件参数。也就是Visual Code启动程序，找不到的话就在开始里面查找Visual Studio Code，再右键打开文件位置

4.  关闭注册表，即可生效。

## 文件夹打开

> 以上方法可以在选中文件时右键在菜单栏中显示：&#8221;open with visual code&#8221;，但当右键文件夹时仍然不能显示此选项，所以还要进行下面的操作：

打开注册表，找到HKEY_CLASSES_ROOT\Directory\shell，按照上面2、3的方法添加即可。

## 添加Icon

在原有的项上新建可扩充字符串值，命名为Icon，像一个键值对那样把D:\Program Files (x86)\Microsoft VS Code\code.exe放进去就可以了。

## 更新记录

1. {{ date.format('YYYY/M/D H:mm:ss') }} 首次发布

## 参考链接

1. [https://www.jianshu.com/p/b49002fa10a7](https://www.jianshu.com/p/b49002fa10a7)
