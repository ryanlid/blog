---
title: ECMAScript 6 学习
tags:
  - 前端
  - ecmascript 6
  - es6
  - javascript
date: 2018-06-18 20:00:27
updated: 2018-06-18 20:00:27
category:
description:
---

又学习了一下 JavaScript 的 ES6 的语法，记录一下～

<!-- more -->

[![ECMAScript 6](https://static.lidong.me/upload/images/407Uqvai1.jpg)](https://static.lidong.me/upload/images/407Uqvai1.jpg)

## 使用 `let` 声明变量

let 声明的变量尽在代码块内有效。(ES6 中新增的块级作用域)

```js
//  Let/index.js
var ourFunction = function () {

  let x = 'this is in the outer scope';

  if (true) {
    let x = 'this is a new value';
    console.log(x);
  }
  console.log(x);
}

ourFunction();

// this is a new value
// this is in the outer scope
```

在 ES5 中只有全局作用域和函数作用域

```js
// Let/es5.js
var ourFunction = function () {

  var x = 'this is in the outer scope';

  if (true) {
    var x = 'this is a new value';
    console.log(x);
  }
  console.log(x);
}

ourFunction();

// this is a new value
// this is a new value

```

## 数组展开运算符 (Spread Operator)

```js
// SpreadOperator/index.js
var awesomerBands = ['Bayside', 'Semses Fail'];

var bands = ['silverstein', 'three days grace', ...awesomerBands];

console.log(bands)
// ["silverstein", "three days grace", "Bayside", "Semses Fail"]

var bandsFunction = function (args) {
  for (var x = 0; x &amp;lt; args.length; x++) {
    console.log(args[x]);
  }
}
bandsFunction(...awesomerBands)
/*
sB
a
y
s
i
d
e
*/

var a, b, rest;
[a, b, ...rest] = [1, 2, 3, 4, 5, 6, 7, 8]

console.log(a)
console.log(b)
console.log(rest)
/*
1
2
[ 3, 4, 5, 6, 7, 8 ]
*/
```
```js
var awesomerBands = ['Bayside','Semses Fail'];

var bands = ['silverstein','three days grace', awesomerBands];

console.log(bands)
// [ "silverstein", "three days grace", [ "Bayside", "Semses Fail" ] ]
```

## 对象快速创建 (Shorthand)

```js
var genre = 'Rock';
var name = 'Bayside';
var origin = 'Queens, New York';

var band = { name, genre, origin }
console.log(band);

// { name: "Bayside", genre: "Rock", origin: "Queens, New York" }
```

## 箭头函数

```js
// ArrowFunctions/index.js
var oldway = function () {
  console.log("hello world")
}

oldway(); // hello world

var arrowFunction = a =&amp;gt; {
  console.log("hello world")
}

arrowFunction() // hello world

var arrowFunction2 = (arg1, arg2) =&amp;gt; {
  console.log(arg1, arg2)
}

arrowFunction2("this is arg1", "this is arg2") // this is arg1 this is arg2

```

## 字符串模板

使用 `` ` ` `` 作为标记，变量通过 `` `${ }` `` 使用

```js
// TemplateLiterals/index.js
var longString1 = `
this is long string
this is more long string
test testing
`;

var band = 'bayside';

var longString2 = `
this is long string
this is more long string
Band Name = ${band}
test testing
`;

var longStringFunction = (bandname, aroundSince) =&amp;gt; {
  return `
  ${bandname} is a rock band that has been around
  since ${aroundSince + 5} years`;
}

console.log(longString1)
// this is long string
// this is more long string
// test testing

console.log(longString2)
// this is long string
// this is more long string
// Band Name = bayside
// test testing

console.log(longStringFunction(band, 10))
//   bayside is a rock band that has been around
//   since 15 years

```

## 类 (class) 的使用

```js
// class/index.js
class Band {
  constructor(name, origin) {
    this.name = name;
    this.origin = origin;

  }
  printName() {
    console.log("name= " + this.name);
  }
  printOrigin() {
    console.log("origin = " + this.origin);
  }
}

var bayside = new Band('bayside', 'Queens,New York');

bayside.printName();     // name= bayside
bayside.printOrigin();   // origin = Queens,New York
```

## class 继承和 super 使用

```js
class Band {
  constructor(name, origin) {
    this.name = name;
    this.origin = origin;

  }
  printName() {
    console.log("name= " + this.name);
  }
  printOrigin() {
    console.log("origin = " + this.origin);
  }
}

class Member extends Band{
  constructor(name, origin,genre){
    super()
    this.name = name
    this.origin = origin
    this.genre = genre
  }
  printGenre(){
    console.log(this.genre)
  }
  printName(){
    console.log("this is an override")
  }
}

var bayside = new Member('bayside', 'Queens,New York',"alternative");

bayside.printName();     // this is an override
bayside.printOrigin();   // origin = Queens,New York
bayside.printGenre();   // alternative
```

## 函数默认参数 default arguments

```js
// DefaultArguments/index.js
function test(a = 0) {
  console.log(a + 10);
}

test(10); // 20
```

## for&#8230;of&#8230; 循环

```js
//  ForOf-loops/index.js
var myArray = [1, 2, 3, 4, 5];

for (var x = 0; x &amp;lt; myArray.length; x++) {
  console.log(myArray[x])
}
/*
1
2
3
4
5
*/

for(let i  of myArray){
  console.log(i)
}

/*
1
2
3
4
5
*/
```

## 模块加载

通过 `import ... from ...`

使用 `default` 导出的引入的时候需要可以直接使用，没有使用 `default` 导出，导出相当于是一个对象，需要使用 `{}` 来引入。

```js
// module/test.js
export default function first() {
  console.log('this is first,default');
}

export function second() {
  console.log("this is second,not default")
}
```
```js
// module/index.js
import  first  from "./test"
import  {second}  from "./test"

first(); // this is first,default
second(); // "this is second,not default"
```

## 更新记录

1. {{ date.format('YYYY/M/D H:mm:ss') }} 首次发布

## 参考链接
