// alert();
require.config({
  paths: {
    util: "js/util",
    // other: "js/other"
  }
});
require(["util"], function(util) {
  console.log(util.add(1, 2));
});
