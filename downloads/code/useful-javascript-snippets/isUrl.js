// 判断是否为网址
function isURL(strUrl) {
  var reg = /^https?:\/\/(([a-zA-Z0-9_-])+(\.)?)*(:\d+)?(\/((\.)?(\?)?=?&?[a-zA-Z0-9_-](\?)?)*)*$/i;
  return (reg.test(strUrl));
}
