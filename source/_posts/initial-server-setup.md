---
title: 初始服务器设置
date: 2017-06-20 00:15:00
updated: 2017-06-20 00:15:00
tags: linux
category:
---

## 添加用户

> 请将下面提到dong替换成你自己的用户名

```shell
# 添加用户
adduser dong
# 设置密码
passwd dong
```
> 添加用户还有另一种方法
>
> 在centos7系统中会创建用户的home目录，但在ubuntu17.10系统不会创建用户的home目录(其他版本请自测)
```
useradd dong
```

## 添加root用户权限

> 强烈建议不要使用修改`/etc/sudoers`的方法，一旦修改出错，后果很严重

```
usermod -aG sudo dong (ubuntu)
usermod -aG wheel dong (centos)
```

>参考链接：
>
>[How To Create a Sudo User on CentOS](https://www.digitalocean.com/community/tutorials/how-to-create-a-sudo-user-on-centos-quickstart)
>
>[How can I add a new user as sudoer using the command line](https://askubuntu.com/questions/7477/how-can-i-add-a-new-user-as-sudoer-using-the-command-line) 

## 设置使用ssh-key远程登录

如果本地机器是MacOS系统或Linux系统，可以使用`ssh-copy-id`快速导入将公钥远程主机

```
ssh-copy-id -i ~/.ssh/id_rsa.pub user@ip
```
如果本地是Windows系统，请参考 <https://lidong.me/blog/ssh-key/#拷贝公钥到远程主机>

## 调整ssh远程登录的设置

```sh
# vim /etc/ssh/sshd_config 
```

修改配置文件中下面字段内容

```txt
PubkeyAuthentication yes  //允许使用基于密钥认证的方式登陆
PasswordAuthentication no //禁止使用基于口令认证的方式登陆
PermitRootLogin no        //禁止root用户远程登录
```

重启sshd
>在重启sshd之前务必确保密钥登陆的可用，否则重启sshd之后可能无法远程登陆！

```
sudo systemctl reload sshd
```

## 更新记录

1. 2017-06-20 首次发布
