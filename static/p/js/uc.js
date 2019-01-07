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
    append_ele:'#pageletListContent ul',
    platform:platform,
    item_wrap:'<li class="item">',
    item_wrap_end:'</li>'
};

$(function () {
//    window.onscroll = function () {
//        if ($(document).scrollTop() > 40) {
//            $('.channel').addClass('channel-fixed');
//        } else {
//            $('.channel').removeClass('channel-fixed');
//        }
//    };
    
    

});
