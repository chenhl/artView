$(function () {
    //打开全文
    $('.unflod-field__mask,.download-text').on('click', function () {
        $(this).parent().hide();
        $('.article__content').css('height', 'auto');
    });
    //收藏
    $('#collection').on('click', function () {
        //改变页面状态
        $(this).toggleClass('collection');
        //提交数据
        var aid = $(this).attr('data-aid');
        var url = '/index/collection';
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

//点赞
    $('#like').on('click', function () {
        //改变页面状态
        $(this).toggleClass('like');
        //提交数据
        var aid = $(this).attr('data-aid');
        var url = '/index/like';
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
});

