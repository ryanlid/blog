---
title: socketio
date: 2020-05-31 17:11:13
updated: 2020-05-31 17:11:13
tags:
category:
description:
---

## 服务端发送消息

给本次连接发消息

```js
socket.emit();
```

给某个房间内所有人发消息

```js
io.in(room).emit();
```

```js
io.sockets.in(room).emit;
```

除了本连接外，给房间所有人发消息

```js
socket.to(room).emit();
```

除了本连接外，给所有人发消息

```js
socket.broadcast.emit();
```

## 客户端处理消息

发送 action 命令

```js
s: socket.emit('action');
c: socket.on('action', function () {});
```

发送 action 命令,包含 data

```js
s: socket.emit('action', data);
c: socket.on('action', function (data) {});
```

发送 action 命令,包含两个参数 data

```js
s: socket.emit('action', arg1, arg2);
c: socket.on('action', function (arg1, arg2) {});
```

发送 action 命令, 在 emit 方法中包含回调函数

```js
s:  socket.emit('action',data,function(arg1,arg2));
c:  socket.on('action',function(data,fn){fn('a','b')})
```

## 更新记录

1. {{ date.format('YYYY/M/D H:mm:ss') }} 首次发布

## 参考链接
