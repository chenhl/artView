//ajax防重点击锁
var hasClick = false;
$(function () {
//    alert($(document).height());
//    alert($('.recommendation-container').height());
    //收藏
    $('#collection').on('click', function () {
        //点击锁
        if (hasClick) {
            return false;
        }
        hasClick = true;
        //客户端验证登录
        if (getCookie('uid') === '') {
            ajaxCheckParamMsg();
            return false;
        }
        //改变页面状态
//        $(this).toggleClass('collection');
        var class_str = 'collection';
        var url = '/index/collection';
        if ($(this).hasClass(class_str)) {
            $(this).removeClass(class_str);
            url = '/index/cancelCollection';
        } else {
            $(this).addClass(class_str);
        }
        //提交数据
        var aid = $(this).attr('data-aid');
        return false;
        $.ajax({
            type: 'POST',
            dataType: 'json',
            url: url,
            data: {
                'aid': aid
            },
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
    });
//关注
    $('#follow').on('click', function () {
        if (hasClick) {
            return false;
        }
        hasClick = true;
        //客户端验证登录
        if (getCookie('uid') === '') {
            ajaxCheckParamMsg();
            return false;
        }
        //改变页面状态
//        $(this).toggleClass('follow');
        var class_str = 'follow';
        var url = '/index/follow';
        if ($(this).hasClass(class_str)) {
            $(this).removeClass(class_str);
            url = '/index/cancelFollow';
        } else {
            $(this).addClass(class_str);
        }
        //提交数据
        var fuid = $(this).attr('data-uid');
        return false;
        $.ajax({
            type: 'POST',
            dataType: 'json',
            url: url,
            data: {
                'fuid': fuid
            },
            async: false,
            success: function (data) {
                if (data.code == "403") {//未登录
                    ajaxResultMsg();
                }
            },
            error: function (data) {
            },
            complete: function (data) {
                hasClick = false;
            }
        });
    });

//点赞 未开启
    $('#like').on('click', function () {
        if (hasClick) {
            return false;
        }
        hasClick = true;
        //客户端验证登录
        if (getCookie('uid') === '') {
            ajaxCheckParamMsg();
            return false;
        }

        //改变页面状态
//        $(this).toggleClass('like');
        var class_str = 'like';
        var url = '/index/dolike';
        if ($(this).hasClass(class_str)) {
            $(this).removeClass(class_str);
            url = '/index/cancelLike';
        } else {
            $(this).addClass(class_str);
        }
        //提交数据
        var aid = $(this).attr('data-aid');

        return false;
        $.ajax({
            type: 'POST',
            dataType: 'json',
            url: url,
            data: {
                'aid': aid
            },
            async: false,
            success: function (data) {
                if (data.code == "403") {//未登录
                    ajaxResultMsg();
                }
            },
            error: function (data) {
            },
            complete: function (data) {
                hasClick = false;
            }
        });
    });

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

