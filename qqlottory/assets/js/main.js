/**
 *判断输入的数字是否为中奖号码
 *
 *
 */

$(function () {

  $('#commitButton').on('click', function () {
    var code = parseInt($('#numberInput').val());
    if($('#numberInput').val() === ""){
      return false;
    }

    var random = Math.ceil((Math.random() * 3));
    var luckyNumber = getLucker(3076.49, 10591.54, 65302, 10);        //计算中奖号码
    var result = $.inArray(code, luckyNumber);            //是否为中奖号码
    var isLucker = result >= 0 ? true : false;
    if (isLucker) {
      //alert('恭喜你中奖了，赶快把这个好消息分享给朋友吧。请关注魅蓝空间，我们将会在24日12点公布具体的领奖方式');
      showMask_Success();
    } else {
      showMask();
      switch (random) {
        case 1:
         // alert('真可惜，这次运气不好…关注XX，下次中奖的说不定就是你哦。');
          break;
        case 2:
          //alert('残念，这次不是你… 不过XX还会有这样的抽奖哦， 快来关注吧');
          break;
        default:
          //alert('…… 没中……别灰心，关注xx，会不定期有各种福利赠送~');
      }
    }

  });


  /**
   * 抽取到第一个中奖的号码
   * @param sz    今天的上证指数
   * @param ss    今天的收盘时的深证指数
   * @param totalPeople   参与活动的人数
   * @param count
   */
  function getLucker(sz, ss, totalPeople, count) {
    var seed = 1224;
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


  //显示模板
  function showMask(){
    $(".modal-failed").css({"top":0});
    var offset = document.body.scrollTop;
    var hall = window.innerHeight;
    var width = window.innerWidth;
    var hWindow = $(".modal-main").innerHeight();
    var wWindow = $(".modal-main").width();
    $(".modal-main").css("left",(width-wWindow)/2);
    $(".modal-main").css("top",(hall-267)/2);
    $(".modal-failed").css("display",'block');
  }
  //显示模板
  function showMask_Success(){

    $(".modal-succeed").css({"top":0});
    var offset = document.body.scrollTop;
    var hall = window.innerHeight;
    var width = window.innerWidth;
    var hWindow = $(".modal-main").innerHeight();
    var wWindow = $(".modal-main").width();
    $(".modal-main").css("left",(width-wWindow)/2);
    $(".modal-main").css("top",(hall-267)/2);
    $(".modal-succeed").css("display",'block');
  }

  $('.modal').on('click', function () {
    setTimeout(function () {
      $('.modal').css('display','none');
    }, 500);
  });

  $('.close').on('click', function () {
   $('.modal').css("display",'none');
  });


});