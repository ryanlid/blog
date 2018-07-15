// 转义html标签
function HtmlEncode(text) {
  return text.replace(/&/g, '&amp').replace(/\"/g, '&quot;').replace(//g, '&gt;')
}
