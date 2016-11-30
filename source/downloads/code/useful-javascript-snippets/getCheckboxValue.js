// 获取复选框的值
function get_checkbox_value(field) {
  if (field && field.length) {
    for (var i = 0; i < field.length; i++) {
      if (field[i].checked && !field[i].disabled) {
        return field[i].value;
      }
    }
  } else {
    return;
  }
}
