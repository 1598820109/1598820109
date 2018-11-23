$(function () {
    var size = $('.item').size();
    console.log(size);

    // 设置li小球
    for (var k = 0; k < size; k++) {
        $('.num').append("<li class='lamp'></li>");
    }

    // 克隆第一张li
    var clone = $('.item').eq(0).clone();
    $('.chang').append(clone);
    $('.lamp').eq(0).addClass('on');

    var i = 0;
    var time;
    // 定时器
    function autoplay() {
        time = setInterval(function () {
            i++;

            move();
        }, 3000)
    }
    autoplay();

    $('.lamp').hover(function () {
        i = $(this).index('.lamp');
        // console.log(i);
        $('.chang').stop().animate({
            left: -i * 390
        }, function () {

            if (i == size) {
                $('.chang').css({
                    left: 0
                });
                i = 0;
            }
        });

        // lamp li小球的移入样式
        $('.lamp').eq(i).addClass('on').siblings().removeClass('on');

        clearInterval(time); //清除定时器
    }, function () {
        autoplay(); //继续轮播
    })


    // 左右移入事件
    $('.left').hover(function () {
        clearInterval(time); //清除定时器
    }, function () {
        autoplay(); //继续轮播
    })

    $('.right').hover(function () {
        clearInterval(time);
    }, function () {
        autoplay(); //继续轮播
    })

    // 左右点击事件
    $('.left').click(function () {
        i++;

        move();
    })


    $('.right').click(function () {
        i--;
        if (i == -1) {
            $('.chang').css({
                left: -3 * 390
            });
            i = 2
        }
        move();
    })


    function move() {
        // 设置li item滑动的边间
        $('.chang').stop().animate({
            left: -i * 390
        }, 600, function () {
            // 判断边间
            if (i == size) {
                $('.chang').css({
                    left: 0
                });
                i = 0;
            }
        });

        // 判断lamp li小球的移动问题
        if (i == size) {
            $('.lamp').eq(0).addClass('on').siblings().removeClass('on');
        } else {
            $('.lamp').eq(i).addClass('on').siblings().removeClass('on');
        }
    }
})