// 判断字符串是否为浮点数
function isFloat( str ) {
  for(i=0;i<str.length;i++)  {
    if ((str.charAt(i)<"0" || str.charAt(i)>"9")&& str.charAt(i) != '.'){
      return false;
    }
  }
  return true;
}
