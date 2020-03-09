---
title: MongoDB 命令速查表
date: 2020-03-07 14:53:13
updated: 2020-03-07 14:53:13
tags:
- mongodb
- cheatsheet
category:
description:
---

## 查询

> `db.getCollection("users").find(用于过滤记录的字典，用于限定字段的字典)`

查找所有数据

```js
db.getCollection("users").find()
// 或
db.getCollection("users").find({})
```

查询特定数据

查询单个字段条件

```js
db.getCollection("users").find({ "age": 17 })
```

查询多个字段条件

```js
db.getCollection("users").find({ "age": 17, "name": "张小三" })
```

查询范围值

```js
// 查询 "age" 大于等于23且小于30 的用户
db.getCollection("users").find({ "age": { "$gte": 23, "$lt": 30 } })
```

限定返回哪些字段

```js
db.getCollection("users").find({}, { "address": 0, "age": 0 })
```
> 0 表示在全部字段中剔除值为0的这些字段并返回，1 表示只返回值为1的这些字段

修饰返回结果

- `count()` 返回满足要求的数据条数
- `limit()` 限定返回结果条数
- `sort()` 对查询结果进行排序

```js
db.getCollection("users").find({}, { "age": 0 }).count()
```

```js
db.getCollection("users").find({}, { "age": 0 }).limit(3)
```

```js
db.getCollection("users").find({}, { "age": 0 }).sort(-1)
```
> -1 表示倒序， 1 表示正序

## 增加

插入单条数据

```js
db.getCollection("users").insertOne({
  "name": "张小三",
  "age": 17,
  address: "北京"
})
```

批量插入数据

```js
db.getCollection("users").insertMany([
  { "name": "张小三", "age": 17, address: "北京" },
  { "name": "刘小四", "age": 23, address: "上海" },
  { "name": "王小五", "age": 25, address: "山东" },
  { "name": "马小六", "age": 22, address: "河南" }
])

```

## 修改

updateOne 更新第1条满足要求的数据

updateMany 更新所有满足要求的数据

updateMany 的第1个参数是一个字典，用来寻找所有需要被更新的记录；第二个参数是一个字典，它的Key为"$set"，它的值为另一个字典，这个字典里面是需要被修改的字段名和新的值


```js
db.getConllection("users").updateMany(
  {"name":"张小三"},
  {"$set":{"address":"苏州"，"work":"工程师"}}
)
```

## 删除

```js
db.getConllection("users").deleteOne({"name":"张小三"})
db.getConllection("users").deleteMany({"name":"张小三"},{"name":"刘小四"})
```

## 数据去重

> `distinct` 接收两个参数，第1个参数为字段名，表示对哪一个字段进行去重，第2个参数就是查询命令 `find()` 第1个参数，可以省略

对 `age` 字段去重
```js
db.getConllection("users").distinct({"age"})
```

对满足特定条件的数据去重

```js
db.getConllection("users").distinct("age",{"age":{"$gte":24}})
```

## 更新记录

1. {{ date.format('YYYY/M/D H:mm:ss') }} 首次发布

## 参考链接
