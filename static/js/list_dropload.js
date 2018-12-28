$(function () {
    $('#pageletListContent').eq(0).dropload({
        scrollArea: window,
        domDown:domDown,
        loadDownFn: function (me) {
            if ($('#next_page').val() === '' || $('#next_page').val() === 0) {
                return;
            }
            //增加分页
            dropload_param.ajax_data.page = $('#next_page').val();
            
            var lang_url = '/index/feed';
            $.ajax({
                type: 'get',
                url: lang_url,
                data: dropload_param.ajax_data,
                success: function (data) {
                    try {
                        data = JSON.parse(data);
                        $("#next_page").val(data.data.next_page_num);
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
//                            console.log(dropload_param.append_ele);
                            $(dropload_param.append_ele).append(result);
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


