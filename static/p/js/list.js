var platform = 'p';
var domDown = {
    domClass: 'loading',
    domRefresh: '<div class="loading ball-pulse" style="display: none;"></div>',
    domLoad: '<div class="loading ball-pulse"><div></div><div></div><div></div><span>加载中⋅⋅⋅</span></div>',
    domNoData: '<div class=""><div></div><div></div><div></div><span>没有更多了</span></div>'
};
var dropload_param = {
    ajax_data: {
        page: $('#next_page').val(),
        channel: $('#channel').val()
    },
    append_ele:'#pageletListContent ul',
    platform:platform,
    item_wrap:'',
    item_wrap_end:''    
};
$(function () {
//    alert($(document).height());
//    alert($('#pageletListContent').height());
    //index首页 左侧channel
    window.onscroll = function () {
        if ($(document).scrollTop() > 40) {
            $('.channel').addClass('channel-fixed');
        } else {
            $('.channel').removeClass('channel-fixed');
        }
    };
//          return '<span class="' + className + '">' + (index + 1) + '</span>';
    var swiperVideo = new Swiper('.swiper-container', {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false
        },
        pagination: {
            el: '.slide-tab',
            bulletClass: 'slide-tab-item',
            bulletActiveClass: 'slide-tab-item-active',
            clickable: true,
            renderBullet: function (index, className) {
                return '<li class="' + className + '">要闻' + (index + 1) + '</li>';
            }
        }
    });

    //此方法为模拟的，hover到分页器的小圆点后自动触发其本身的click事件
    $(".slide-tab-item").hover(function () {
        $(this).click(); //鼠标划上去之后，自动触发点击事件来模仿鼠标划上去的事件
    }, function () {
        swiperVideo.autoplay.start(); //鼠标移出之后，自动轮播开启
    });
});
