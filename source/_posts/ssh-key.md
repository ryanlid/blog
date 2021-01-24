---
title: SSH密钥对的使用
date: 2017-02-24 23:33:40
updated: 2017-02-24 23:33:40
tags:
- ssh
- key
category:
---

欢迎访问新站点: <https://www.yidiankuaile.com/post/use-of-ssh-key>

常见SSH密钥对使用场景：

1. Git SSH拉取和提交时认证
2. Linux SSH远程登录认证
3. rsync 等工具使用时认证
<!-- more -->
## 生成密钥对

```
ssh-keygen -t rsa -b 4096 -C "备注"
```
## 在后台运行ssh-agent

```
eval "$(ssh-agent -s)"
```
## 开启ssh-agent转发
编辑 `~/.ssh/config` 文件

```
# cat ~/.ssh/config
# 开启ssh-agent转发
Host *
    ForwardAgent yes
# 针对特定主机开启ssh-agent转发
Host vps
    HostName 12.34.56.78
    IdentityFile ~/.ssh/id_rsa
    User oonnnoo
    ForwardAgent yes
```

## 使密钥对ssh-agent可见

查看密钥是否对 `ssh-agent` 可见

```
ssh-add -L
```

如果该命令未显示你的密钥，可以通过以下命令添加密钥：

```
ssh-add ~/.ssh/id_rsa
```

⚠️注： 在 Mac OS X 上，当系统重新启动后，ssh-agent 再次启动时会 “忘记” 这个密钥。可以通过以下命令将SSH密钥导入到密钥链中：

```
/usr/bin/ssh-add -K ~/.ssh/id_rsa
```

## 拷贝公钥到远程主机
- 命令快捷导入方法（推荐）

    ```
    ssh-copy-id -i ~/.ssh/id_rsa.pub user@ip
    ```
- 手动拷贝

    将公钥拷贝，追加至远程主机 `~/.ssh/authorized_keys` 文件中（不存在则请新建），并确保此文件权限为 0600 ，(修改权限：`chmod 0600 ~/.ssh/authorized_keys`）

我的公钥：[获取](https://labs.lidong.me/key/)

## 参考：

1. [SSH agent 转发 - 极客学院](http://wiki.jikexueyuan.com/project/github-developer-guides/using-ssh-agent.html)

2. [Generating a new SSH key and adding it to the ssh-agent](https://help.github.com/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent/)

3. [SSH keys - Archlinux Wiki(中文)](https://wiki.archlinux.org/index.php/SSH_keys_(%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87))

