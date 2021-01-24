---
title: 实用的 JavaScript 代码片段
date: 2016-10-27 01:45:26
updated: 2016-10-27 07:55:00
tags:
- javascript
category:
---

欢迎访问新站点: <https://www.yidiankuaile.com/post/>

1. 实现字符串长度截取

2. 获取域名主机

    <!--3. 清除空格
    4. 替换全部-->

5. 转义html标签

6. 还原html标签

7. 时间日期格式转换

8. 判断是否为数字类型

9. 设置cookie值

10. 获取cookie值
<!--more-->
11. 加入收藏夹

12. 设为首页

    <!--13. 判断IE6-->

14. 加载样式文件

    <!--15. 返回脚本内容
    16. 清除脚本内容
    17. 动态加载脚本文件-->

18. 返回按ID检索的元素对象

    <!--19. 返回浏览器版本内容-->

20. 元素显示的通用方法

    <!--21. 中有insertBefore方法,可惜却没有insertAfter方法?用如下函数实现
    22. 中兼容浏览器绑定元素事件
    23. 光标停在文字的后面，文本框获得焦点时调用-->

24. 检验URL链接是否有效

25. 格式化CSS样式代码

26. 压缩CSS样式代码

    <!--27. 获取当前路径-->

28. IP转成整型

29. 整型解析为IP地址

30. 实现checkbox全选与全不选

31. 判断是否移动设备

32. 判断是否移动设备 userAgent 访问

33. 判断是否苹果移动设备访问

34. 判断是否安卓移动设备访问

    <!--35. 判断是否Touch屏幕-->

36. 判断是否在安卓上的谷歌浏览器

    <!--37. 判断是否打开视窗
    38. 获取移动设备初始化大小
    39. 获取移动设备最大化大小
    40. 获取移动设备屏幕宽度-->

41. 完美判断是否为网址

    <!--42. 根据样式名称检索元素对象
    43. 判断是否以某个字符串开头
    44. 判断是否以某个字符串结束
    45. 返回IE浏览器的版本号
    46. 获取页面高度
    47. 获取页面scrollLeft
    48. 获取页面可视宽度
    49. 获取页面宽度
    50. 获取页面scrollTop
    51. 获取页面可视高度
    52. 跨浏览器添加事件
    53. 跨浏览器删除事件
    54. 去掉url前缀-->

55. 随机数时间戳

    <!--56. 全角半角转换,iCase: 0全到半，1半到全，其他不转化-->

57. 确认是否键盘有效输入值

    <!--58. 获取网页被卷去的位置
    59. 另一种正则日期格式化函数+调用方法-->

60. 时间个性化输出功能

    <!--61. 解决offsetX兼容性问题
    62. 常用的正则表达式
    63. 实现返回顶部的通用方法
    64. 获得URL中GET参数值
    65. 实现全选通用方法
    66. 实现全部取消选择通用方法
    67. 实现打开一个窗体通用方法
    68. 判断是否为客户端设备-->

69. 获取单选按钮的值

70. 获取复选框的值

71. 判断是否为邮箱
    <!--72. 判断是否有列表中的危险字符-->

73. 判断字符串是否大于规定的长度

    <!--74. 判断字符串是为网址不区分大小写-->

75. 判断字符串是否为小数

76. 判断字符串是否为整数

77. 判断字符串是否为浮点数

    <!--78. 判断字符是否为A-Za-z英文字母-->

79. 判断字符串是否邮政编码

    <!--80. 判断字符是否空NULL
    81. 用正则表达式提取页面代码中所有网址-->

82. 用正则表达式清除相同的数组(低效率)

83. 用正则表达式清除相同的数组(高效率)

    <!--84. 用正则表达式按字母排序，对每行进行数组排序-->

85. 字符串反序

    <!--86. 用正则表达式清除html代码中的脚本
    87. 动态执行JavaScript脚本
    88. 动态执行VBScript脚本-->

89. 实现金额大写转换函数

    <!--90. 常用的正则表达式大收集
    91. 实现窗体改变事件resize的操作（兼容所以的浏览器）
    92. 用正则清除空格分左右
    93. 判断变量是否空值-->
94. 实现base64解码

95. 实现utf8解码

<!--96. 获取窗体可见范围的宽与高
97. 判断IE版本号（既简洁、又向后兼容！）
98. 获取浏览器版本号
99. 半角转换为全角函数
100. 全角转换为半角函数-->


1. 实现字符串长度截取
{% include_code Javascript useful-javascript-snippets/cutstr.js %}

2. 获取域名主机
{% include_code Javascript useful-javascript-snippets/getHost.js %}

    <!--3. 清除空格
    4. 替换全部-->

5. 转义html标签
{% include_code Javascript useful-javascript-snippets/HtmlEncode.js %}

6. 还原html标签
{% include_code Javascript useful-javascript-snippets/htmlDecode.js %}

7. 时间日期格式转换
{% include_code Javascript useful-javascript-snippets/dateFormat.js %}

8. 判断是否为数字类型
{% include_code Javascript useful-javascript-snippets/isdigit.js %}

9. 设置cookie值
{% include_code Javascript useful-javascript-snippets/setCookie.js %}

10. 获取cookie值
{% include_code Javascript useful-javascript-snippets/getCookie.js %}

11. 加入收藏夹
{% include_code Javascript useful-javascript-snippets/addFavorite.js %}

12. 设为首页
{% include_code Javascript useful-javascript-snippets/setHomepage.js %}

    <!--13. 判断IE6-->

14. 加载样式文件
{% include_code Javascript useful-javascript-snippets/loadStyle.js %}

    <!--15. 返回脚本内容
    16. 清除脚本内容
    17. 动态加载脚本文件-->

18. 返回按ID检索的元素对象
{% include_code Javascript useful-javascript-snippets/$.js %}

    <!--19. 返回浏览器版本内容-->

20. 元素显示的通用方法
{% include_code Javascript useful-javascript-snippets/display.js %}

    <!--21. 中有insertBefore方法,可惜却没有insertAfter方法?用如下函数实现
    22. 中兼容浏览器绑定元素事件
    23. 光标停在文字的后面，文本框获得焦点时调用-->

24. 检验URL链接是否有效
{% include_code Javascript useful-javascript-snippets/getUrlState.js %}

25. 格式化CSS样式代码
{% include_code Javascript useful-javascript-snippets/formatCss.js %}

26. 压缩CSS样式代码
{% include_code Javascript useful-javascript-snippets/compressCss.js %}

    <!--27. 获取当前路径-->

28. IP地址转成整型
{% include_code Javascript useful-javascript-snippets/ip2int.js %}

29. 整型解析为IP地址
{% include_code Javascript useful-javascript-snippets/int2ip.js %}

30. 实现checkbox全选与全不选
{% include_code Javascript useful-javascript-snippets/checkAll.js %}

31. 判断是否移动设备
{% include_code Javascript useful-javascript-snippets/isMobile.js %}

32. 判断是否移动设备 userAgent 访问
{% include_code Javascript useful-javascript-snippets/isMobileUserAgent.js %}

33. 判断是否苹果移动设备访问
{% include_code Javascript useful-javascript-snippets/isAppleMobileDevice.js %}

34. 判断是否安卓移动设备访问
{% include_code Javascript useful-javascript-snippets/isAndroidMobileDevice.js %}

    <!--35. 判断是否Touch屏幕-->

36. 判断是否在安卓上的谷歌浏览器
{% include_code Javascript useful-javascript-snippets/isChromeOnAndroid.js %}

    <!--37. 判断是否打开视窗
    38. 获取移动设备初始化大小
    39. 获取移动设备最大化大小
    40. 获取移动设备屏幕宽度-->

41. 完美判断是否为网址
{% include_code Javascript useful-javascript-snippets/isUrl.js %}

    <!--42. 根据样式名称检索元素对象
    43. 判断是否以某个字符串开头
    44. 判断是否以某个字符串结束
    45. 返回IE浏览器的版本号
    46. 获取页面高度
    47. 获取页面scrollLeft
    48. 获取页面可视宽度
    49. 获取页面宽度
    50. 获取页面scrollTop
    51. 获取页面可视高度
    52. 跨浏览器添加事件
    53. 跨浏览器删除事件
    54. 去掉url前缀-->

55. 随机数时间戳
{% include_code Javascript useful-javascript-snippets/uniqueId.js %}

    <!--56. 全角半角转换,iCase: 0全到半，1半到全，其他不转化-->

57. 确认是否键盘有效输入值
{% include_code Javascript useful-javascript-snippets/checkKey.js %}

    <!--58. 获取网页被卷去的位置
    59. 另一种正则日期格式化函数+调用方法-->

60. 时间个性化输出功能
{% include_code Javascript useful-javascript-snippets/timeFormat.js %}

    <!--61. 解决offsetX兼容性问题
    62. 常用的正则表达式
    63. 实现返回顶部的通用方法
    64. 获得URL中GET参数值
    65. 实现全选通用方法
    66. 实现全部取消选择通用方法
    67. 实现打开一个窗体通用方法
    68. 判断是否为客户端设备-->

69. 获取单选按钮的值
{% include_code Javascript useful-javascript-snippets/getRadioValue.js %}

70. 获取复选框的值
{% include_code Javascript useful-javascript-snippets/getCheckboxValue.js %}

71. 判断是否为邮箱
{% include_code Javascript useful-javascript-snippets/isEmail.js %}

    <!--72. 判断是否有列表中的危险字符-->

73. 判断字符串是否大于规定的长度
{% include_code Javascript useful-javascript-snippets/isValidLength.js %}

    <!--74. 判断字符串是为网址不区分大小写-->

75. 判断字符串是否为小数
{% include_code Javascript useful-javascript-snippets/isValidDecimal.js %}

76. 判断字符串是否为整数
{% include_code Javascript useful-javascript-snippets/isNumber.js %}

77. 判断字符串是否为浮点数
{% include_code Javascript useful-javascript-snippets/isFloat.js %}

    <!--78. 判断字符是否为A-Za-z英文字母-->

79. 判断字符串是否邮政编码
{% include_code Javascript useful-javascript-snippets/isValidPostcode.js %}

    <!--80. 判断字符是否空NULL
    81. 用正则表达式提取页面代码中所有网址-->

82. 用正则表达式清除相同的数组(低效率)
{% include_code Javascript useful-javascript-snippets/uniqueArray.js %}

83. 用正则表达式清除相同的数组(高效率)
{% include_code Javascript useful-javascript-snippets/uniqueArray2.js %}

    <!--84. 用正则表达式按字母排序，对每行进行数组排序-->

85. 字符串反序
{% include_code Javascript useful-javascript-snippets/reverseString.js %}

    <!--86. 用正则表达式清除html代码中的脚本
    87. 动态执行JavaScript脚本
    88. 动态执行VBScript脚本-->

89. 实现金额大写转换函数
{% include_code Javascript useful-javascript-snippets/transformMoney.js %}

    <!--90. 常用的正则表达式大收集
    91. 实现窗体改变事件resize的操作（兼容所以的浏览器）
    92. 用正则清除空格分左右
    93. 判断变量是否空值-->
94. 实现base64解码
{% include_code Javascript useful-javascript-snippets/base64_decode.js %}

95. 实现utf8解码
{% include_code Javascript useful-javascript-snippets/utf8_decode.js %}

<!--96. 获取窗体可见范围的宽与高
97. 判断IE版本号（既简洁、又向后兼容！）
98. 获取浏览器版本号
99. 半角转换为全角函数
100. 全角转换为半角函数-->


