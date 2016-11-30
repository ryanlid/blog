// 获取单选按钮的值
function get_radio_value(field) {
  if (field && field.length) {
    for (var i = 0; i < field.length; i++) {
      if (field[i].checked) {
        return field[i].value;
      }
    }
  } else {
    return ;
  }
}
