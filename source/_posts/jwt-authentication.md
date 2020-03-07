---
title: JWT 认证实例
date: 2020-03-06 15:15:16
updated: 2020-03-06 15:15:16
tags:
  - nodejs
  - jwt
  - auth
category:
description:
---

## 初始化

```sh
npm init -y
```

```sh
npm i express dotenv jsonwebtoken
```

## 环境变量

```env .env
ACCESS_TOKEN_SECRET=dbf8de
REFRESH_TOKEN_SECRET=7ac2a3
```

## 项目代码

```js app.js
const express = require("express");
const app = express();
require("dotenv").config();
const jwt = require("jsonwebtoken");
app.use(express.json());

const posts = [
  {
    username: "Kyle",
    title: "Post 1"
  },
  {
    username: "Jim",
    title: "Post 1"
  }
];

// 临时保存 refreshTokens，实际应用可以保存到数据库中
let refreshTokens = [];

// 登录，获取accessToken、 refreshToken
app.post("/login", (req, res) => {
  // Authenticate User
  const username = req.body.username;
  const user = { name: username };
  const accessToken = generateAccessToken(user);
  const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET);
  refreshTokens.push(refreshToken);
  res.json({
    accessToken,
    refreshToken
  });
});

// 通过 refreshToken 获取 accessToken
app.post("/token", (req, res) => {
  const refreshToken = req.body.token;
  if (refreshToken == null) return res.sendStatus(401);
  if (!refreshTokens.includes(refreshToken)) return res.sendStatus(403);

  jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    const accessToken = generateAccessToken({ name: user.name });
    res.json({ accessToken });
  });
});

// 获取需要认证的文章
app.get("/posts", authenticateToken, (req, res) => {
  res.json(posts.filter(post => post.username === req.user.name));
});

// 退出登录 删除 refreshToken
app.delete("/logout", (req, res) => {
  refreshTokens = refreshTokens.filter(token => token !== req.body.token);
  res.sendStatus(204);
});

// 认证中间件
function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token == null) {
    return res.sendStatus(401);
  }
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) {
      return res.sendStatus(403);
    }
    req.user = user;
    next();
  });
}

// 生成token
function generateAccessToken(user) {
  return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "30s"
  });
}

app.listen(3000);
```

## 请求示例

```http request.http
###
POST http://localhost:3000/login
Content-Type: application/json

{
  "username":"Jim"
}

###
POST http://localhost:3000/token
Content-Type: application/json

{
  "token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSmltIiwiaWF0IjoxNTgzNDkxMjUzfQ.aM_n0O2nt5TXBIrolk7mk9wvXvMHrhYzdJ7FdFWCd8U"
}

###
GET http://localhost:3000/posts
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSmltIiwiaWF0IjoxNTgzNDkxMjcyLCJleHAiOjE1ODM0OTEzMDJ9.W7mrj8Jr9sMQ1vIVB-uI_lZdHVCixlC3DVb3lmf9zJU

###
GET http://localhost:3000/logout
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSmltIiwiaWF0IjoxNTgzNDkxMjcyLCJleHAiOjE1ODM0OTEzMDJ9.W7mrj8Jr9sMQ1vIVB-uI_lZdHVCixlC3DVb3lmf9zJU
```

## 更新记录

1. {{ date.format('YYYY/M/D H:mm:ss') }} 首次发布

## 参考链接
