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

function ajax_view_func(me) {
    var class_str = 'following';
    var url = '/index/follow';
    if ($(me).find('span').hasClass(class_str)) {
        url = '/index/cancelFollow';
        $(me).find('span').removeClass(class_str);
        $(me).find('span em').text('关注');
    } else {
        $(me).find('span').addClass(class_str);
        $(me).find('span em').text('已关注');
    }
    var res = {};
    res.url = url;
    res.ajax_data = {
        fuid: $(me).attr('media_id')
    };
    return res;
}
$(function () {
    $('.treturn').on('click', function () {
        window.history.go(-1);
    });

    //关注
    $('div[riot-tag="attention"]').on('click', {
        platform: platform,
        view_func: function (me) {
            var class_str = 'following';
            var url = '/index/follow';
            if ($(me).find('span').hasClass(class_str)) {
                url = '/index/cancelFollow';
                $(me).find('span').removeClass(class_str);
                $(me).find('span em').text('关注');
            } else {
                $(me).find('span').addClass(class_str);
                $(me).find('span em').text('已关注');
            }
            var res = {};
            res.url = url;
            res.ajax_data = {
                fuid: $(me).attr('media_id')
            };
            return res;
        }
    }, ajax_simple_handle);


});
