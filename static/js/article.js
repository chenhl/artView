/**
 * 废弃
 */
$(function () {
    $('#pageletListContent').eq(0).dropload({
        scrollArea: window,
        loadDownFn: function (me) {
            if ($('#like_page').val() === '' || $('#like_page').val() === 0) {
                return;
            }
            var url = '/index/feed';
//            console.log(me);
            $.ajax({
                type: 'get',
                url: url,
                data: dropload_param.ajax_data,
                success: function (data) {
                    try {
                        data = JSON.parse(data);
                        $("#like_page").val(data.data.next_page_num);
                        var result = '';
                        if (data.code === 200) {
                            if (data.data.result_data.list.length === 0) {
                                me.lock();
                                me.noData();
                            } else {
                                result = articleList(data.data.result_data.list, {platform: platform});
                            }
                        }
                        setTimeout(function () {
                            if (platform === 'p') {
                                $('#pageletListContent').eq(0).find('ul').append(result);
                            } else {
                                $('#pageletListContent').eq(0).find('div.list_content').append(result);
                            }
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

