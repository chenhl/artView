var domDown = {
    domClass: 'dropload-down',
    domRefresh: '<div class="dropload-refresh"></div>',
    domLoad: '<div class="dropload-load"><div class="k-line k-line-1"></div><div class="k-line k-line-2"></div><div class="k-line k-line-3"></div><div class="k-line k-line-4"></div></div>',
    domNoData: '<div class="dropload-noData"></div>'
};
var platform = 'p';

function showMsg() {
    $(".login_box").show();
    $(".alert").show();
}

$(function () {
//    window.onscroll = function () {
//        if ($(document).scrollTop() > 40) {
//            $('.share-box').addClass('share-box-fixed');
//        } else {
//            $('.share-box').removeClass('share-box-fixed');
//        }
//    };
    $(window).scroll(function () {
        var st = $(document).scrollTop() || $('html,body').scrollTop();
//        var offsettop = $('.share-box').offset().top;
        if (st > 40) {
            $('.share-box').addClass('share-box-fixed');
        } else {
            $('.share-box').removeClass('share-box-fixed');
        }
    });

});

