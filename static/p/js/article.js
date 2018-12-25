var domDown = {
    domClass: 'dropload-down',
    domRefresh: '<div class="dropload-refresh"></div>',
    domLoad: '<div class="dropload-load"><div class="k-line k-line-1"></div><div class="k-line k-line-2"></div><div class="k-line k-line-3"></div><div class="k-line k-line-4"></div></div>',
    domNoData: '<div class="dropload-noData"></div>'
};
var platform = 'p';

/**
 * 收藏、喜欢、关注等点击时检查参数失败
 * @returns {undefined}
 */
function ajaxCheckParamMsg() {
    window.location.href = '/member/login';
}
/**
 * 收藏、喜欢、关注等点击时结果
 * @returns {undefined}
 */
function ajaxResultMsg() {
    $(".login_box").show();
    $(".alert").show();
}

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
    //scroll
    $(window).scroll(function () {
        var st = $(document).scrollTop() || $('html,body').scrollTop();
//        var offsettop = $('.share-box').offset().top;
        if (st > 40) {
            $('.share-box').addClass('share-box-fixed');
        } else {
            $('.share-box').removeClass('share-box-fixed');
        }
    });
    //收藏
    $('.repin i,.repin span').on('click', {platform: platform,ele:'.repin i'}, collection);
    //关注
    $('#follow').on('click', {platform: platform}, follow);
    //author 文章
    ajaxArticleList({
        aid: $('#aid').val(),
        uid: $('#uid').val()
    }, {
        contentEle: '.user-card-article-list'
    });

});

