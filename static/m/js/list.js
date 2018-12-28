var platform = 'm';
var domDown = {
    domClass: 'list_bottom',
    domRefresh: '<section class="loadmoretip"><a href="#">加载中...</a></section>',
    domLoad: '<section class="loadmoretip"><a href="#">加载中...</a></section>',
    domNoData: '<section class="loadmoretip"><a href="#">没有更多了</a></section>'
};
var dropload_param = {
    ajax_data: {
        page: $('#next_page').val(),
        channel: $('#channel').val()
    },
    append_ele: '#pageletListContent div.list_content'
};
$(function () {

});


