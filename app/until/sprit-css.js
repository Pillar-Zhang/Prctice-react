
//npm install css-sprite@0.9.0

//使用时需要创建一个js文件， 此js程序将web/icon目录下的png图标合并到web/img下，并生成web/css/icons.css样式文件

var sprite = require('css-sprite');
sprite.create({
  src       : ['web/icon/*.png'],  //小图标所在目录
  out       : 'web/img',           //大图标所在目录
  name      : 'icons',             //大图标名称
  style     : 'web/css/icons.css', //样式文件
  prefix    : 'icon',   //样式前辍
  processor : 'css',    //文件格式： css; 支持less,sass,scss,stylus等扩展样式语言
  cssPath   : '../img', //css文件相对于图标文件的相对路径
  margin    : 10        //图片间隔，默认垂直排列
}, function () {
  console.log('done');
});