// 判断字符串是否为整数
function isNumber(chars) {
  var re = /^\d*$/;
  if (chars.match(re) == null)
    return false;
  else
    return true;
}
