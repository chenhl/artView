//ajax防重点击锁
var hasClick = false;
/**
 * collection、follow、like 等的ajax请求
 * @param {type} param
 * @returns {Boolean}
 */
function ajax_simple_handle(param) {
    param = param || {};
    //点击锁
    if (hasClick) {
        return false;
    }
    hasClick = true;
    //事件ele
    var _ele = this;
    if (param.data.ele) {
        _ele = param.data.ele;
    }
    //客户端验证登录
    if (getCookie('uid') === '') {
        ajax_check_param_msg();
        return false;
    }
    //改变页面状态
    if (param.data.view_func) {//自定义的func
            var url = param.data.view_func();
            hasClick = false;
            alert(url);
    } else {//默认的func
        var class_str = param.data.view_param.cls;
        var url = param.data.view_param.ajax_url;
        if ($(_ele).hasClass(class_str)) {
            $(_ele).removeClass(class_str);
            url = param.data.view_param.reverse_ajax_url;
        } else {
            $(_ele).addClass(class_str);
        }
    }
    return false;
    //提交数据
    $.ajax({
        type: 'POST',
        dataType: 'json',
        url: url,
        data: param.data.ajax_data,
        async: false,
        success: function (data) {
            if (data.code === 403) {//未登录
                ajaxResultMsg();
            }
        },
        error: function (data) {
        },
        complete: function (data) {
            hasClick = false;
        }
    });
}

$(function () {
    $('#pageletListContent').eq(0).dropload({
        scrollArea: window,
//        threshold: $(document).height() - $('.recommendation-item').height(),
//        domDown: domDown,
        loadDownFn: function (me) {
            if ($('#like_page').val() === '' || $('#like_page').val() === 0) {
                return;
            }
            var url = '/index/like';
//            console.log(me);
            $.ajax({
                type: 'get',
                url: url,
                data: {
                    q: $('#like_q').val(),
                    aid: $('#like_aid').val(),
                    page: $('#like_page').val()
                },
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
//                                alert(result);
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

