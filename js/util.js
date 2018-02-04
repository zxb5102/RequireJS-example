//下面对模块路径的定义 可以写在main.js 的那个入口文件也可以写在每个需要引用的 地方
require.config({
  baseUrl: "js",
  paths: {
    other: "other" //这里的路径要相对main.js 就是我们的总入口的位置 来写
  }
});
define(["other"], function(other) {
  "use strict";
  var add = function(a, b) {
    other.add(a, b);
  };
  return {
    add: add
  };
});
