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

## 添加 `sudo` 用户权限

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

```bash
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
## 禁止用户登录

### 方法一：禁止个别用户登录

```bash
禁止个别用户登录。比如禁止dong用户登录。
passwd -l dong
```

```bash
# 锁定dong用户，这样该用户就不能登录了。
passwd -u dong
```

对锁定的用户dong进行解锁，用户可登录了。

### 方法二：禁止部分用户登录

通过修改 `/etc/passwd` 文件中用户登录的shell

```bash
vi /etc/passwd
```

> root:x:0:0:root:/root:/bin/bash
> bin:x:1:1:bin:/bin:/sbin/nologin
> daemon:x:2:2:daemon:/sbin:/sbin/nologin
> adm:x:3:4:adm:/var/adm:/sbin/nologin
> lp:x:4:7:lp:/var/spool/lpd:/sbin/nologin
> sync:x:5:0:sync:/sbin:/bin/sync
> shutdown:x:6:0:shutdown:/sbin:/sbin/shutdown
> halt:x:7:0:halt:/sbin:/sbin/halt
> mail:x:8:12:mail:/var/spool/mail:/sbin/nologin
> uucp:x:10:14:uucp:/var/spool/uucp:/sbin/nologin
> operator:x:11:0:operator:/root:/sbin/nologin
> games:x:12:100:games:/usr/games:/sbin/nologin
> dong:x:500:500::/home/dong:/bin/bash

将

> `dong:x:500:500::/home/dong:/bin/bash`

更改为：

```
dong:x:500:500::/home/dong:/sbin/nologin
```
该用户就无法登录了。

### 方案三：禁止所有用户登录

禁止所有用户登录。

```bash
touch /etc/nologin
```
除root以外的用户不能登录了。

## 更新记录

1. {{ date.format('YYYY/MM/DD H:mm:ss') }}
2. 2019/01/03 20:43:11 添加禁止用户登录的方法
