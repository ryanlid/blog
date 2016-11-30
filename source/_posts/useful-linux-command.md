---
title: 实用的Linux命令
date: 2016-10-25 21:58:24
updated: 2016-10-25 23:48:00
tags:
- linux
category:
---

查看端口占用情况

    lsof -i:端口号

    netstat -apn | grep 端口号 

查看进程
    
    ps -aux | grep 进程号
       
    ps -aux | grep 进程名
   
时间同步

    ntpdate time.windows.com

如果还没有安装ntpdate, 请先安装下载 yum install -y ntp



