---
title: JavaScript基本算法
date: 2016-10-07 20:09:01
updated: 2016-10-07 20:09:01
tags:
- javascript
---

String.split() 将字符串对象分割成字符串数组

    str.split([separator][, limit])

Array.reverse()
颠倒数组中元素的位置，返回该数组的引用

Array.join()
将数组中的所有元素连接成一个字符串。
<!-- more -->
String.prototype.replace()
replace() 方法使用一个替换值替换掉一个匹配模式（pattern）在原字符串中某些或所有的匹配项，并返回替换后的新的字符串。
这个替换模式可以是一个字符串或者一个 RegExp，替换值可以是一个字符串或者一个函数。

    str.replace(regexp|substr,newSubStr|function)

String.prototype.toLowerCase()
将字符串值转为小写形式，并返回，不会影响字符串本身的值

string.match()

如果你需要知道一个字符串是否匹配一个正则表达式（RegExp），可使用 RegExp.test(str)。
如果你只是需要第一个匹配结果，你可能想要使用 RegExp.exec(str)。

String.prototype.slice()
提取字符串的一部分，并返回这个新的字符串(参数指定提取的起始（,结束）位置，基数为1)

    str.slice(beginSlice[,endSlice])

Array.prototype.push()

Array.prototype.slice() 浅复制数组的一部分到一个新的数组，并返回这个新数组


    arr.slice([begin[,end]])

array.splice() 用新元素替换旧元素，以此修改数组的内容。

    array.splice(start, deleteCount[, item1[, item2[, ...]]])

String.prototype.indexOf() 返回指定值在字符串对象中首次出现的位置。从 fromIndex 位置开始查找，如果不存在，则返回 -1。

    str.indexOf(searchValue[, fromIndex])

Array.prototype.filter() 使用指定的函数测试所有元素，并创建一个包含所有通过测试的元素的新数组。

    var new_arrary = arr.filter(callback[, thisArg])

String.prototype.substr() 返回字符串中从指定位置开始到指定长度的子字符串。

    str.substr(start[, length])
    
String.prototype.substring() 返回字符串两个索引之间（或到字符串末尾）的子串

    str.substring(indexStart[, indexEnd])

Array.prototype.sort() 对数组的元素做原地的排序，并返回这个数组。 sort 排序可能是不稳定的。默认按照字符串的Unicode码位点（code point）排序。

    arr.sort([compareFunction])

[freeCodeCamp 示例](https://www.freecodecamp.com/challenges/where-do-i-belong)
[MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)

String.prototype.charCodeAt() 返回0到65535之间的整数，代表索引处字符的Unicode编码单元

    str.charCodeAt(index)

String.fromCharCode() 根据指定的 Unicode 编码中的序号值来返回一个字符串

    String.fromCharCode(num1, ..., numN) 

