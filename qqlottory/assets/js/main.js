/**
 *判断输入的数字是否为中奖号码
 *
 *
 */

$(function() {
  if (!Array.indexOf) {
    Array.prototype.indexOf = function(obj) {
      for (var i = 0; i < this.length; i++) {
        if (this[i] == obj) {
          return i;
        }
      }
      return -1;
    }
  }

  function isLucer() {
    var code = parseInt($('#numberInput').val());
    if ($('#numberInput').val() === "") {
      return false;
    }
    var random = Math.ceil((Math.random() * 3));
    var luckyNumber = getLucker(3039.21, 10614.12, 1133261, 100); //计算中奖号码
    var result = luckyNumber.indexOf(code); //是否为中奖号码
    var isLucker = result >= 0 ? true : false;
    if (isIE()) {
      if (isLucker) {
        alert('恭喜你中奖了，魅蓝note是你的，加微信号：bigertech，发奖第一时间告诉你');
      } else {
        alert('少年，貌似没中奖，添加微信号：bigertech，还有福利在那等你哦');
      }
      return false;
    }
    if (isLucker) {
      showMask("1");
    } else {
      showMask("0");
    }
  }

  function isIE() {
    if (navigator.userAgent.indexOf("MSIE") > 0) {
      if (navigator.userAgent.indexOf("MSIE 6.0") > 0) {
        return true;
      }
      if (navigator.userAgent.indexOf("MSIE 7.0") > 0) {
        return true;
      }
      if (navigator.userAgent.indexOf("MSIE 8.0") > 0) { //这里是重点，你懂的
        return true;
      }
    }
    return false;
  }

  $("#numberInput").keydown(function(event) {
    if (event.which == 13) {
      isLucer();
      return false;
    }
  });
  $('#commitButton').on('click ', isLucer);


  /**
   * 抽取到第一个中奖的号码
   * @param sz    今天的上证指数
   * @param ss    今天的收盘时的深证指数
   * @param totalPeople   参与活动的人数
   * @param count
   */
  function getLucker(sz, ss, totalPeople, count) {
      var seed = 1223;
      var result = [];
      if (count === 0) {
        throw new Error('The param count should not be zereo!');
      }
      var base = sz * ss * 10000;

      base = base.toString().split('').reverse().join(''); // 反转

      base = parseInt(base); // 取整
      var luckNum = (base % totalPeople) + 1;
      result.push(luckNum);

      for (var i = 1; i < count; i++) {
        var nextNum = (luckNum + seed * i) % totalPeople;
        result.push(nextNum);
      }
      return result;
    }
    //getLucker(3039.21,10614.12,100)
  if (typeof window.WeixinJSBridge !== 'undefined' && typeof window.WeixinJSBridge.invoke !== 'undefined') {

    var imgUrl =
      'http://www.bigertech.com/project/qzone/assets/images/qzone.jpg';
    var lineLink = 'http://www.bigertech.com/project/qzone';
    var descContent = "万分之一！我居然中了一台魅蓝Note，魅族的抽奖是真的！赶快分享好友，让他们沾沾喜气！"; // 小于 100个字
    var shareTitle = '万分之一！我居然中了一台魅蓝Note，魅族的抽奖是真的！赶快分享好友，让他们沾沾喜气！'; // 小于 30个字
    var appid = '';

    function shareFriend() {
      WeixinJSBridge.invoke('sendAppMessage', {
        "appid": appid,
        "img_url": imgUrl,
        "img_width": "200",
        "img_height": "200",
        "link": lineLink,
        "desc": descContent,
        "title": shareTitle
      }, function(res) {
        //_report('send_msg', res.err_msg);
      })
    }

    function shareTimeline() {
      WeixinJSBridge.invoke('shareTimeline', {
        "img_url": imgUrl,
        "img_width": "200",
        "img_height": "200",
        "link": lineLink,
        "desc": descContent,
        "title": shareTitle
      }, function(res) {
        //_report('timeline', res.err_msg);
      });
    }

    function shareWeibo() {
        WeixinJSBridge.invoke('shareWeibo', {
          "content": descContent,
          "url": lineLink,
        }, function(res) {
          //_report('weibo', res.err_msg);
        });
      }
      // 当微信内置浏览器完成内部初始化后会触发WeixinJSBridgeReady事件。
    document.addEventListener('WeixinJSBridgeReady', function onBridgeReady() {
      // 发送给好友
      WeixinJSBridge.on('menu:share:appmessage', function(argv) {
        shareFriend();
      });
      // 分享到朋友圈
      WeixinJSBridge.on('menu:share:timeline', function(argv) {
        shareTimeline();
      });
      // 分享到微博
      WeixinJSBridge.on('menu:share:weibo', function(argv) {
        shareWeibo();
      });
    }, false);
  }

  //显示模板
  //显示模板
  function showMask(status) {

    $(".modal").css({
      "top": 0
    });
    var hall = window.innerHeight;
    var width = window.innerWidth;
    var hWindow = $(".modal-main").innerHeight() + 20;
    var wWindow = $(".modal-main").outerWidth() + 20;

    $(".modal-main").css("left", (width - wWindow) / 2);
    $(".modal-main").css("top", (hall - hWindow) / 2);

    if (status === "0") {
      $(".modal-failed").css("display", 'block');
    } else if (status === "1") {
      $(".modal-succeed").css("display", 'block');
    }
  }

  $('.modal').on('click', function() {
    setTimeout(function() {
      $('.modal').css('display', 'none');
    }, 800);
  });

  $('.close').on('click', function() {
    $('.modal').css("display", 'none');
  });

  $(document).ready(function() {
    $('#numberInput').focus();
  });

});