// 返回按ID检索的元素对象
function $(id) {
  return !id ? null : document.getElementById(id);
}
