/**
 *判断输入的数字是否为中奖号码
 *
 *
 */

$(function(){

    $('#commitButton').on('click', function() {
        var code        = parseInt($('#numberInput').val());
        var random      = Math.ceil((Math.random() * 3));
        var luckyNumber = getLucker(3076.49,10591.54,65302,10);        //计算中奖号码
        var result      = $.inArray(code, luckyNumber);            //是否为中奖号码
        var isLucker    = result >= 0 ? true : false;

        if(isLucker) {
            alert('恭喜你中奖了，赶快把这个好消息分享给朋友吧。请关注魅蓝空间，我们将会在24日12点公布具体的领奖方式');
        }else{
            switch(random)
            {
                case 1:
                    alert('真可惜，这次运气不好…关注XX，下次中奖的说不定就是你哦。');
                    break;
                case 2:
                    alert('残念，这次不是你… 不过XX还会有这样的抽奖哦， 快来关注吧');
                    break;
                default:
                    alert('…… 没中……别灰心，关注xx，会不定期有各种福利赠送~');
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
        console.log('基数：%d * %d * 10000 = %d', sz, ss, base);

        base = base.toString().split('').reverse().join(''); // 反转
        console.log('反转的结果：', base);

        base = parseInt(base); // 取整
        var luckNum = (base % totalPeople) + 1;
        result.push(luckNum);
        console.log('第一个中奖号码: (%d % %d) +1 = %d', base, totalPeople, luckNum);
        for (var i = 1; i < count; i++) {
            var nextNum = (luckNum + seed * i) % totalPeople;
            console.log('中奖号码: %d + %d * %d = %d', luckNum, seed, i, nextNum);
            result.push(nextNum);
        }
        return result;
    }



})();