---
title: 使用 vcgencmd 指令查看 Raspberry Pi 的 CPU 运行速度、温度信息
tags:
  - raspberrypi
date: 2018-04-08 18:02:26
updated: 2018-04-08 18:02:26
category:
description:
---

在 Raspberry Pi 中我们可以利用 vcgencmd 指令来查看各种硬件信息和状态，以下是常用的指令示例。

<!-- more -->

## 时钟频率（clock frequency）

如果要查询硬件目前的时钟频率，可以使用 measure_clock 参数：
```
vcgencmd measure_clock <clock>
```

其中的 `<clock>` 是指定要查询的硬件，可用的选项有 arm、 core、 h264、 isp、 v3d、 uart、pwm、 emmc、 pixel、 vec、 hdmi、 dpi。

如果要查询 CPU 的时钟频率（也就是速度），可以执行

```
vcgencmd measure_clock arm
```

输出为

> frequency(45)=700000000

如果想查询所有的硬件时钟频率，可以使用简单的 shell 指令：

```
for src in arm core h264 isp v3d uart pwm emmc pixel vec hdmi dpi ; do \
  echo -e "$src:\t$(vcgencmd measure_clock $src)" ; \
done
```

输出为

> arm: frequency(45)=700000000
>
> core: frequency(1)=250000000
>
> h264: frequency(28)=250000000
>
> isp: frequency(42)=250000000
>
> v3d: frequency(43)=250000000
>
> uart: frequency(22)=3000000
>
> pwm: frequency(25)=0
>
> emmc: frequency(47)=250000000
>
> pixel: frequency(29)=108000000
>
> vec: frequency(10)=0
>
> hdmi: frequency(9)=163682000
>
> dpi: frequency(4)=0

## 电压（voltage）

如果要查询硬件目前的工作电压，可以使用 measure_volts 参数：

```
vcgencmd measure_volts <id>
```

其中 `<id>` 是指定要查询的硬件，可用的选项有 core、 sdram_c、 sdram_i、 sdram_p。如果没有指定 `<id>`，则预设为 core：

```
vcgencmd measure_volts
```

输出为

> volt=1.2000V

查询所有工作电压的 shell 指令：

```
for id in core sdram_c sdram_i sdram_p ; do \
  echo -e "$id:\t$(vcgencmd measure_volts $id)" ; \
done
```

输出为

> core: volt=1.200V
>
> sdram_c: volt=1.200V
>
> sdram_i: volt=1.200V
>
> sdram_p: volt=1.225V

## 温度（temperature）

如果要查询目前的温度，可以使用 measure_temp 参数：

```
vcgencmd measure_temp
```
输出为

> temp=43.3’C

## 更新记录

1. {{ date.format('YYYY/M/D H:mm:ss') }} 首次发布

## 参考链接

1. 节选翻译自： [使用 vcgencmd 指令查看 Raspberry Pi 的 CPU 溫度、運行速度與電壓等資訊](https://blog.gtwang.org/iot/raspberry-pi-vcgencmd-hardware-information/)
