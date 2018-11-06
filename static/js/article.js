function showMsg() {
    $(".login_box").show();
    $(".alert").show();
}
$(function () {
    //打开全文
    $('.unflod-field__mask,.download-text').on('click', function () {
        $(this).parent().hide();
        $('.article__content').css('height', 'auto');
    });
    //收藏
    $('#collection').on('click', function () {
        //客户端验证登录
        if (getCookie('uid') === '') {
            showMsg();
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
                    showMsg();
                }
            },
            error: function (data) {
            },
            complete: function (data) {
            }
        });
    });
//关注
    $('#follow').on('click', function () {
        //客户端验证登录
        if (getCookie('uid') === '') {
            showMsg();
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
                    $(".login_box").show();
                    $(".alert").show();
                }
            },
            error: function (data) {
            },
            complete: function (data) {
            }
        });
    });
//点赞 未开启
    $('#like').on('click', function () {
        //客户端验证登录
        if (getCookie('uid') === '') {
            showMsg();
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
                    showMsg();
                }
            },
            error: function (data) {
            },
            complete: function (data) {
            }
        });
    });
    
});

