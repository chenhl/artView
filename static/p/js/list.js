var domDown = {
    domClass: 'dropload-down',
    domRefresh: '<div class="dropload-refresh"></div>',
    domLoad: '<div class="dropload-load"><div class="k-line k-line-1"></div><div class="k-line k-line-2"></div><div class="k-line k-line-3"></div><div class="k-line k-line-4"></div></div>',
    domNoData: '<div class="dropload-noData"></div>'
};

$(function () {
//    alert($(document).height());
//    alert($('#pageletListContent').height());

    if ($(document).scrollTop() > 40) {
        $('.channel').addClass('channel-fixed');
    } else {
        $('.channel').removeClass('channel-fixed');
    }

    //list
    $('#pageletListContent').eq(0).dropload({
        scrollArea: window,
//        threshold: $(document).height() - $('#pageletListContent').height(),
        loadDownFn: function (me) {
            if ($('#next_page').val() === '' || $('#next_page').val() === 0) {
                return;
            }
            var lang_url = app_http_url + '/index/feed';
            $.ajax({
                type: 'get',
                url: lang_url,
                data: {
                    page: $('#next_page').val(),
                    pageSize: $('#page_size').val(),
                    channel: $('#channel').val()
                },
                success: function (data) {
                    try {
                        data = JSON.parse(data);
                        $("#next_page").val(data.data.next_page_num);
                        var result = '';
                        if (data.code === 200) {
                            if (data.data.result_data.list.length === 0) {
//                                $('#next_page').val('');
                                me.lock();
                                me.noData();
                            } else {
                                result = articleList(data.data.result_data.list, {});
                            }
                        }
                        setTimeout(function () {
                            $('#pageletListContent').eq(0).find('div.list_content').append(result);
                            me.resetload();
                        }, 500);
                    } catch (e) {
                        console.log(e);
                    }
                },
                error: function (xhr, type) {
                    me.resetload();
                    me.noData();
                }
            });
        }
    });
});
