// 第一个轮播图
  
// 公告选项卡
function gonggao(){
var table = document.querySelector('.table');
var a_s = document.getElementById('gg').querySelectorAll('a');
var dis = document.getElementById('div').querySelectorAll('div');
// console.log(table, a_s, dis);

for (var i = 0; i < a_s.length; i++) {
    a_s[i].index = i;
    // console.log(a_s[i].index)
    a_s[i].onmouseover = function () {
        for (var k = 0; k < a_s.length; k++) {
            a_s[k].removeAttribute('class');
            dis[k].removeAttribute('class');
        }

        a_s[this.index].setAttribute('class', 'red');
        dis[this.index].setAttribute('class', 'one');
    }
}
}
gonggao();
// 公告选项卡end

// 第二个轮播图
function wpackTwo() {
    function my$(id) {
        return document.getElementById(id);
    }
    var want = my$("want");
    var ul = want.children[0];
    var list = ul.children;
    var arr = my$("arr");
    var lisWidth = want.offsetWidth;

    var left = my$("left");
    var right = my$("right");
    var pic = 0;
    // var want = document.getElementById("want");
    // console.log(want, ul, list, arr, lisWidth, left, right);
    ul.appendChild(ul.children[0].cloneNode(true));
    want.onmouseover = function () {
        left.style.display = "block";
        right.style.display = "block";
    }

    want.onmouseout = function () {
        left.style.display = "none";
        right.style.display = "none";
    }


    right.onclick = onmouseclickHandle;

    function onmouseclickHandle() {

        if (pic == list.length - 1) {

            pic = 0;
            ul.style.left = 0 + 'px';
        }
        pic++;
        animate(ul, -pic * lisWidth);

    }

    left.onclick = function () {
        if (pic == 0) {
            pic = list.length - 1;
            ul.style.left = -pic * lisWidth + "px";
        }

        pic--;

        animate(ul, -pic * lisWidth);

    }
    // 设置任意的一个元素 ， 移动到指定的目标位置
    function animate(element, target) {
        clearInterval(element.timeId);

        element.timeId = setInterval(function () {
            // 获取当前元素的位置
            var current = element.offsetLeft;
            // 每次移动的距离
            var step = 20;
            step = current < target ? step : -step;

            // 道歉移动到位置
            current += step;
            if (Math.abs(current - target) > Math.abs(step)) {
                element.style.left = current + "px";
            } else {
                element.style.left = target + "px";
            }
        }, 10);
    }
}
wpackTwo();

// 联想
function lianxiang() {
    $(function () {
        var size = $('.qishi').size();
        // console.log(size);

        for (k = 0; k < size; k++) {
            $('.inner .red').append("<li class='hui'> </li>")
        }


        $('.hui').eq(0).addClass('hong');

        var i = 0;
        var t;
        var clone = $('.qishi').clone();
        $('.cheng').append(clone);

        function autoplay() {
            t = setInterval(function () {
                i++;

                move();
            }, 2000)
        }
        autoplay();


        $('.red .hui').hover(function () {
            i = $(this).index('.red .hui');
            // alert(i);
            $('.cheng').stop().animate({
                left: -i * 200
            }, function () {
                if (i == size) {
                    $('.cheng').css({
                        left: 0
                    });
                    i = 0;
                }
            })
            $('.hui').eq(i).addClass('hong').siblings().removeClass('hong');

            clearInterval(t);
        }, function () {
            autoplay();
        })


        function move() {
            $('.cheng').stop().animate({
                left: -i * 200
            }, function () {
                if (i == size) {
                    $('.cheng').css({
                        left: 0
                    });
                    i = 0;
                }
            })

            if (i == size) {
                $('.hui').eq(0).addClass('hong').siblings().removeClass('hong');
            } else {
                $('.hui').eq(i).addClass('hong').siblings().removeClass('hong');
            }
        }
    })
}

lianxiang();

/*  排行榜*/
function paihang() {
    var box_1 = document.getElementById('box_bd')
    var lis_1 = document.getElementById('box_1').getElementsByTagName('li');
    var divs_1 = document.getElementById('div_1').getElementsByTagName('div');
    // console.log(box_1,lis_1,divs_1);

    for (var i = 0; i < lis_1.length; i++) {
        lis_1[i].index = i;
        //  console.log(lis_1[i].index)
        lis_1[i].onmouseover = function () {
            for (var k = 0; k < lis_1.length; k++) {
                lis_1[k].removeAttribute('class');
                divs_1[k].removeAttribute('class');
            }

            lis_1[this.index].setAttribute('class', 'one');
            divs_1[this.index].setAttribute('class', 'one');
        }
    }
}
paihang();


// 第三个无缝轮播

function three() {
    $(function () {
        var size = $('.item').size();
        // console.log(size);

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

}
three();


//  第四个轮播图
function six() {
    $(function () {
        var size = $('.box .img_co1 .wamp').size();
        // console.log(size);

        for (var k = 0; k < size; k++) {
            $('.box .ball').append("<li class='wap'> </li>")
        }

        $('.box .ball .wap').eq(0).addClass('pink').siblings().removeClass('pink');

        var clone = $('.box .img_co1 .wamp').clone();
        $('.img_co1').append(clone);

        var i = 0;
        var t;

        function autoplay() {
            t = setInterval(function () {
                i++;

                move();
            }, 2000);
        }
        autoplay();

        $('.zuo').hover(function () {
            clearInterval(t)
        }, function () {
            autoplay();
        })

        $('.you').hover(function () {
            clearInterval(t)
        }, function () {
            autoplay();
        })

        $('.zuo').click(function () {
            i++;

            move();
        })

        $('.you').click(function () {
            i--;

            if (i == -1) {
                $('.img_co1').css({
                    left: -3 * 350
                })
                i = 2;
            }
            move();
        })

        $('.box .ball .wap').hover(function () {
            i = $(this).index('.box .ball .wap');
            $('.img_co1').stop().animate({
                left: -i * 350
            }, function () {
                if (i == size) {
                    $('.img_co1').css({
                        left: 0
                    });
                    i = 0;
                }
            })
            $('.box .ball .wap').eq(i).addClass('pink').siblings().removeClass('pink');
            clearInterval(t);
        }, function () {
            autoplay();
        })

        function move() {
            $('.img_co1').stop().animate({
                left: -i * 350
            }, function () {
                if (i == size) {
                    $('.img_co1').css({
                        left: 0
                    });
                    i = 0;
                }
            })
            if (i == size) {
                $('.box .ball .wap').eq(0).addClass('pink').siblings().removeClass('pink');
            } else {
                $('.box .ball .wap').eq(i).addClass('pink').siblings().removeClass('pink')
            }
        }
    })
}
six();

// 第五个轮播图
function sorry() {
    $(function () {
        var size = $('.box .who .xiao').size();
        // console.log(size);

        for (var k = 0; k < size; k++) {
            $('.love').append("<li class='li'> </li>")
        }

        // 克隆第一张
        var clone = $('.xiao').eq(0).clone();
        $('.who').append(clone);
        $('.li').eq(0).addClass('red');

        var i = 0;
        var t;

        function auto() {
            t = setInterval(function () {
                i++;

                move();
            }, 2000)
        }
        auto();

        $('.li').hover(function () {
            i = $(this).index('.li');

            $('.who').stop().animate({
                left: -i * 1190
            }, function () {
                if (i == size) {
                    $('.img').css({
                        left: 0
                    });
                    i = 0;
                }
            });

            $('.li').eq(i).addClass('red').siblings().removeClass('red');
        }, function () {
            clearInterval(t);
        }, function () {
            auto();
        })

        // 左右移入事件
        $('.left').hover(function () {
            clearInterval(t);
        }, function () {
            auto();
        })

        $('.right').hover(function () {
            clearInterval(t);
        }, function () {
            auto();
        })

        $('.left').click(function () {
            i++;

            move();
        })

        $('.right').click(function () {
            i--;
            if (i == -1) {
                $('.who').css({
                    left: -3 * 1190
                });
                i = 2;
            }
            move();
        })

        function move() {
            $('.who').stop().animate({
                left: -i * 1190
            }, function () {
                if (i == size) {
                    $('.who').css({
                        left: 0
                    });
                    i = 0;
                }
                if (i == size) {
                    $('.li').eq(0).addClass('red').siblings().removeClass('red');
                } else {
                    $('.li').eq(i).addClass('red').siblings().removeClass('red');
                }
            })
        }
        move();
    })
}
sorry();

// 头部固定导航栏
var Top_nav = document.getElementById('Top_nav');
// 获取滚动的高度
// var doHeight = document.documentElement.scrollHeight;
// console.log(Top_nav);

// 鼠标滚动事件
window.onscroll = function(){
    // 获取滚动的距离
    var scroll = document.documentElement.scrollTop + document.body.scrollTop;
    // console.log(scroll);
    if(scroll >= 660){
        Top_nav.style.top = '0px';
    }else{
        Top_nav.style.top = '-90px';
    }
}



