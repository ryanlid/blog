// 获取域名主机
function getHost(url) {
  var host = "null";
  if (typeof url == "undefined" || null == url) {
    url = window.location.href;
  }
  var reg = /^\w+\:\/\/([^\/]*).*/;
  var match = url.match(reg);
  if (typeof match != "undefined" && null != match) {
    host = match[1];
  }
  return host;
}
