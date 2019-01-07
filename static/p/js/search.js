//var domDown = {
//    domClass: 'dropload-down',
//    domRefresh: '<div class="dropload-refresh"></div>',
//    domLoad: '<div class="dropload-load"><div class="k-line k-line-1"></div><div class="k-line k-line-2"></div><div class="k-line k-line-3"></div><div class="k-line k-line-4"></div></div>',
//    domNoData: '<div class="dropload-noData"></div>'
//};
var platform = 'ps'; //pc search
var domDown = {
    domClass: 'loading',
    domRefresh: '<div class="loading ball-pulse" style="display: none;"></div>',
    domLoad: '<div class="loading ball-pulse"><div></div><div></div><div></div><span>加载中⋅⋅⋅</span></div>',
    domNoData: '<div class=""><div></div><div></div><div></div><span>没有更多了</span></div>'
};
var dropload_param = {
    ajax_data: {
        q: $('#q').val(),
        page: $('#next_page').val()
    },
    append_ele:'#pageletListContent div.sections',
    platform:platform,
    item_wrap:'<div riot-tag="articleCard" class="articleCard">',
    item_wrap_end:'</div>'
};

$(function () {

    
});
