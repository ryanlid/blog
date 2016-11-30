// 通过UserAgent判断是否移动设备
function isMobileUserAgent() {
  return (/iphone|ipod|android.*mobile|windows.*phone|blackberry.*mobile/i.test(window.navigator.userAgent.toLowerCase()));
}
