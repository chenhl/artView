var platform = 'ps'; //pc search
var domDown = {
    domClass: 'loading',
    domRefresh: '<div class="loading ball-pulse" style="display: none;"></div>',
    domLoad: '<div class="loading ball-pulse"><div></div><div></div><div></div><span>加载中⋅⋅⋅</span></div>',
    domNoData: '<div class=""><div></div><div></div><div></div><span>没有更多了</span></div>'
};
var dropload_param = {
    ajax_data: {
        page: $('#next_page').val()
    },
    append_ele: '#pageletListContent ul',
    platform: platform,
    item_wrap: '<li class="item">',
    item_wrap_end: '</li>'
};

$(function () {
//    window.onscroll = function () {
//        if ($(document).scrollTop() > 40) {
//            $('.channel').addClass('channel-fixed');
//        } else {
//            $('.channel').removeClass('channel-fixed');
//        }
//    };

    //关注
    $('div[riot-tag="attention"]').on('click', {
        platform: platform,
        ajax_data: {
            fuid: $(this).attr('media_id')
        },
        view_func: function () {
            var class_str = 'following';
            var url = '/index/follow';
            var me = this;
            console.log(me);
            if ($(me).find('span').hasClass(class_str)) {
                url = '/index/cancelFollow';
                $(me).find('span').removeClass(class_str);
                $(me).find('span').text('关注');
            } else {
                $(me).find('span').addClass(class_str);
                $(me).find('span').text('已关注');
            }
            return url;
        }
    }, ajax_simple_handle);


});
