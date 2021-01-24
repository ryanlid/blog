---
title: Flutter 安装使用
date: 2019-05-24 21:16:18
updated: 2019-05-24 21:16:18
tags:
- flutter
category:
description:
---

欢迎访问新站点: <https://www.yidiankuaile.com/post/flutter-setup>

## Windows 上的开发环境搭建

### 下载安装 Flutter 安装包

1. 下载 Flutter 安装包

   https://storage.googleapis.com/flutter_infra/releases/stable/windows/flutter_windows_v1.5.4-hotfix.2-stable.zip

   请从官网上获取最新稳定版本下载

   https://flutter.dev/docs/development/tools/sdk/releases?tab=windows

2. 将安装包 zip 解压到你想安装 Flutter SDK 的路径 比如 `C:\Flutter\`

   > 注意，**不要**将 flutter 安装到需要一些高权限的路径，如 `C:\Program Files\`

3. 在 Flutter 安装目录的 flutter 文件下找到 flutter_console.bat，双击运行并启动 flutter 命令行，接下来，你就可以在 Flutter 命令行运行 `flutter` 命令了。

4. （可选）配置 Flutter 环境变量

   为了方便在之后项目中，可以打开 cmd 后可使用，可以将在 Flutter 安装目录添加到环境 PATH 中，配置方法如下：
   ![flutter-path.png](https://static.oonnnoo.com/upload/1pjE60Agf.png)

5. （可选）配置 pub 镜像源，由于国内网络原因，可以通过环境变量，配置 pub 镜像源，加速 pub package 下载

   ```sh
   set PUB_HOSTED_URL=pub.flutter-io.cn
   set FLUTTER_STORAGE_BASE_URL=storage.flutter-io.cn
   ```

### Android Studio 的 安装

1. 下载 Android Studio

   下载地址：https://developer.android.com/

   国内下载地址：https://developer.android.google.cn/studio/#downloads

2. 安装 Android Studio

   此处有一个比较详细的安装教程。http://www.cnblogs.com/xiadewang/p/7820377.html （安装过程中，需要配置代理）

3. 安装 Flutter 插件

   打开 Android Stuido ，File -- Settings -- Plugins， 搜索 Flutter ，选择 Flutter 安装。

### 同意 Android licenses

运行下面命令，同意许可

```sh
flutter doctor --android-licenses
```

### 安装 Android 模拟器(AVD)

1. 现在需要一个虚拟机来运行我们的程序，可以点击 Android Studio 中的上方菜单 Tool - AVD Manager 选项。
2. 点击 Create Virtual Device。
3. 选择设备型号，如 Nexus 5x。
4. 选择系统，请选择较新的系统，如 android 8.1(Oreo)
5. 安装完成，启动模拟器

## MacOS 上的开发环境搭建

### 安装 brew

https://brew.sh/

参考文章： https://segmentfault.com/a/1190000013317511

### 下载 Flutter SDK 包

1. 下载 Flutter 安装包

   https://storage.googleapis.com/flutter_infra/releases/stable/macos/flutter_macos_v1.5.4-hotfix.2-stable.zip

   > 请从官网上获取最新稳定版本下载 https://flutter.dev/docs/development/tools/sdk/releases?tab=macos

### 配置环境变量

压缩包下载好以后，找个位置进行解压。这个位置很重要，因为下面配置环境变量的时候要用到。比如配置到了用户的 home 目录下。比如我的是 `/Users/ryan/`

打开终端工具，修改 `~/.bash_profile`，在文件末尾添加下面内容

```sh
# vim ~/.bash_profile
export PATH=/Users/ryan/flutter/bin:$PATH
```

> 提示：这行命令要根据压缩包解压的位置来进行编写。

配置完成后，通过 source 命令重新加载一下 bash 配置文件，使其生效。

```sh
source ~/.bash_profile
```

通过以下命令检测 flutter 环境是否配置成功

```sh
flutter --version
```

### iOS 环境配置

1. 安装一些必须的软件

   ```sh
   brew install --HEAD libimobiledevice
   brew install ideviceinstaller
   brew install ios-deploy
   ```

2. 安装 cocoapods

   ```sh
   brew install cocoapods
   pod setup
   ```

## pub 镜像源配置

修改 `~/.bash_profile`，在文件末尾添加下面内容

```sh
# vim ~/.bash_profile
export PUB_HOSTED_URL=pub.flutter-io.cn
export FLUTTER_STORAGE_BASE_URL=storage.flutter-io.cn
```

使其生效

```sh
source ~/.bash_profile
```

### Android Studio 的安装

1. 下载 Android Studio

   下载地址：https://developer.android.com/

   国内下载地址：https://developer.android.google.cn/studio/#downloads

2. 安装 Android Studio

   此处有一个比较详细的安装教程。http://www.cnblogs.com/xiadewang/p/7820377.html（安装过程中，需要配置代理）

3. 安装 Flutter 插件

   打开 Android Stuido 软件，Preferences -- Plugins ， 搜索 Flutter ，选择 Flutter 安装。

### 同意 Android licenses

运行下面命令，同意许可

```sh
flutter doctor --android-licenses
```

### 安装 Android 模拟器(AVD)

1. 现在需要一个虚拟机来运行我们的程序，可以点击 Android Studio 中的上方菜单 Tool - AVD Manager 选项。
2. 点击 Create Virtual Device。
3. 选择设备型号，如 Nexus 5x。
4. 选择系统，请选择较新的系统，如 android 8.1(Oreo)
5. 安装完成，启动模拟器

### 将项目运行到 Android 设备上

可以使用真机运行，须要在手机中开启调试模式，或开启 Android 模拟器进行调试

- 通过终端运行

  在项目目录中

  1. 安装依赖包 `flutter packages get`
  2. 运行命令 `flutter run`

- 通过 Android Studio 中运行

  1. 用 Android Studio 选择项目的根目录，打开项目文件
  2. 点击绿色的 ▶ 图标，快捷键 `^R`

### 将项目运行到 iOS 设备上（仅限于 MacOS 上进行）

iOS 调试和 Android，调试不大一样，iOS 在模拟器上调试不需要配置签名，但在真机上调试需要配置签名，配置签名需要登录 Apple id，当然好消息是：不论 Apple id 是否为开发者账号，都可以用于 APP 的开发调试。

模拟器调试

- 通过终端运行

  在项目目录中

  1. 安装依赖包 `flutter packages get`
  2. 运行命令 `flutter run`

- 通过 Android Studio 中运行

  1. 用 Android Studio 选择项目的根目录，打开项目文件
  2. 点击绿色的 ▶ 图标，快捷键 `^R`

真机调试

1. 使用 Xcode 打开项目文件 `ios/Runner.xcworkspace`
2. 在 General 选项卡配置签名信息，其他地方暂不修改。
3. 点击左上角的 ▶ 图标在真机上调试了。

> 也可以通过终端在项目项目目录下运行 `flutter run` 在真机上进行调试，

![flutter-ios-sign-w.png](https://static.oonnnoo.com/upload/_RwdIDK_3.png)

## 更新记录

1. {{ date.format('YYYY/M/D H:mm:ss') }} 首次发布

## 参考链接
