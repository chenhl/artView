var domDown = {
    domClass: 'dropload-down',
    domRefresh: '<div class="dropload-refresh"></div>',
    domLoad: '<div class="dropload-load"><div class="k-line k-line-1"></div><div class="k-line k-line-2"></div><div class="k-line k-line-3"></div><div class="k-line k-line-4"></div></div>',
    domNoData: '<div class="dropload-noData"></div>'
};
var platform = 'ps'; //pc search
var dropload_param = {
    ajax_data: {
        q: $('#q').val(),
        page: $('#next_page').val()
    },
    append_ele:'#pageletListContent div.sections'
};

$(function () {

    
});
