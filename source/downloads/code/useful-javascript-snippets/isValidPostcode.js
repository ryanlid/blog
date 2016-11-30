// 判断字符串是否邮政编码
function isValidPost(chars) {
  var re = /^\d{6}$/;
  if (chars.match(re) == null)
    return false;
  else
    return true;
}
