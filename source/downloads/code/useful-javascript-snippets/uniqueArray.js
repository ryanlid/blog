// 用正则表达式清除相同的数组(低效率)
Array.prototype.unique = function() {
  return this.reverse().join(",").match(/([^,]+)(?!.*\1)/ig).reverse();
};
