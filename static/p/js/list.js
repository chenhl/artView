var domDown = {
    domClass: 'dropload-down',
    domRefresh: '<div class="dropload-refresh"></div>',
    domLoad: '<div class="dropload-load"><div class="k-line k-line-1"></div><div class="k-line k-line-2"></div><div class="k-line k-line-3"></div><div class="k-line k-line-4"></div></div>',
    domNoData: '<div class="dropload-noData"></div>'
};
var platform = 'p';

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

    var swiperVideo = new Swiper('.swiper-container', {
        autoplay: true
    });

});
