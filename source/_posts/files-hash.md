---
title: 计算文件的hash值
date: 2016-09-08 23:52:25
updated: 2016-09-08 23:52:25
tags:
- hash
- linux
- macos
- windows
---

## Linux中
md5计算

```
md5sum example.zip
dc6db660b498fb39e5ef4718e6d28181  example.zip
```
 <!-- more -->
sha1计算   

```
sha1sum example.zip
1753f6f633e23ea39181459a9c4c7ca47d9d702b  example.zip
```

类似的sha family还有sha224，sha256，sha384 and sha512，同样可用sha224sum, sha256sum, sha384sum and sha512sum计算。
## macOS中
md5计算

```
md5sum example.zip
dc6db660b498fb39e5ef4718e6d28181  example.zip
```

sha计算

```
shasum example.zip
1753f6f633e23ea39181459a9c4c7ca47d9d702b  example.zip
```

macOS中使用 `shasum` 命令进行sha计算
默认计算 `sha1` ,可以通过指定 `-a` 参数，来计算sha224sum, sha256sum, sha384sum and sha512sum ...

```
shasum -a  1 example.zip
shasum -a  224 example.zip
shasum -a  256 example.zip
shasum -a  384 example.zip
shasum -a  512 example.zip
...
```

## Windows中
可以是 hashmyfiles 或 fciv 进行计算

[下载地址 | 请阅读 README.md](https://file.lidong.me/?dir=tools/hash)
https://file.lidong.me/?dir=tools/hash


