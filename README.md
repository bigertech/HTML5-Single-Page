HTML5-Single-Page
=================
## globe 为环球页面项目

运行方式，直接点击 `index.html` 在浏览器打开，


###需要配置的地方

```
var lineLink = "改成你项目的访问地址";
```

###修改百度统计代码
如果不修改，将看不到统计数据

```
<script>
var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "//hm.baidu.com/hm.js?897c5e90b15f7f050e35c66b6978bd2c";
  var s = document.getElementsByTagName("script")[0];
  s.parentNode.insertBefore(hm, s);
  })();
  </script>
```
