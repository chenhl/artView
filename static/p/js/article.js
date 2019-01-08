var platform = 'p';
var domDown = {
    domClass: 'loading',
    domRefresh: '<div class="loading ball-pulse" style="display: none;"></div>',
    domLoad: '<div class="loading ball-pulse"><div></div><div></div><div></div><span>加载中⋅⋅⋅</span></div>',
    domNoData: '<div class=""><div></div><div></div><div></div><span>没有更多了</span></div>'
};
var dropload_param = {
    ajax_data: {
        q: $('#like_q').val(),
        aid: $('#like_aid').val(),
        page: $('#next_page').val()
    },
    append_ele: '#pageletListContent ul',
    platform: platform,
    item_wrap: '',
    item_wrap_end: ''
};
/**
 * 收藏、喜欢、关注等点击时检查参数失败
 * @returns {undefined}
 */
function ajax_check_param_msg() {
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
    $('.repin i,.repin span').on('click', {
        platform: platform,
//        ajax_data: {
//            aid: $('#collection').attr('data-aid')
//        },
        view_func: function (me) {
            var class_str = 'collection';
            var url = '/index/collection';
            if ($('.repin i').hasClass(class_str)) {
                url = '/index/cancelCollection';
                $('.repin i').removeClass(class_str);
                $('.repin i').css({'font-size': '18px', 'color': 'rgb(202, 202, 202)'});
            } else {
                $('.repin i').addClass(class_str);
                $('.repin i').css({'font-size': '18px', 'color': 'rgb(255, 189, 29)'});
            }
            var res = {};
            res.url = url;
            res.ajax_data = {
                aid: $('#collection').attr('data-aid')
            };
            return res;
        }
    }, ajax_simple_handle);
    //关注
    $('.subscribe').on('click', {
        platform: platform,
//        ajax_data: {
//            fuid: $('#follow').attr('data-uid')
//        },
        view_func: function (me) {
            var class_str = 'follow';
            var url = '/index/follow';
            if ($('.subscribe').hasClass(class_str)) {
                url = '/index/cancelFollow';
                $('.subscribe').removeClass(class_str);

                $('.subscribe .left-arrow').removeClass('unsubscribe-btn');
                $('.subscribe .left-arrow').addClass('subscribe-btn');

                $('.subscribe i').removeClass('icon-check');
                $('.subscribe i').addClass('icon-add_small');
                $('.subscribe i').css({'font-size': '12px', 'color': 'rgb(255, 255, 255)'});

                $('.subscribe span').text('关注');
            } else {
                $('.subscribe').addClass(class_str);

                $('.subscribe .left-arrow').removeClass('subscribe-btn');
                $('.subscribe .left-arrow').addClass('unsubscribe-btn');

                $('.subscribe i').removeClass('icon-add_small');
                $('.subscribe i').addClass('icon-check');
                $('.subscribe i').css({'font-size': '8px', 'color': 'rgb(119, 119, 119)'});

                $('.subscribe span').text('已关注');
            }
            var res = {};
            res.url = url;
            res.ajax_data = {
                fuid: $('#follow').attr('data-uid')
            };
            return res;
        }
    }, ajax_simple_handle);
//    $('#follow').on('click', {platform: platform}, follow);
    //author 文章
    ajaxArticleList({
        aid: $('#aid').val(),
        uid: $('#uid').val()
    }, {
        contentEle: '.user-card-article-list'
    });

});

