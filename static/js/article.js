$(function () {
    //打开全文
    $('.unflod-field__mask,.download-text').on('click', function () {
        $(this).parent().hide();
        $('.article__content').css('height','auto');
    });
    //收藏
    $('#collection').on('click', function () {
        var aid = $(this).attr('data-aid');
        var url = '/index/collection';
        $.ajax({
            type: 'POST',
            dataType: 'json',
            url: url,
            data: {
                'aid': aid
            },
            async: false,
            success: function (data) {
                if (data.code == "1000") {//未登录
                    $(".login_box").show();
                    $(".alert").show();
                } else if (data.code == "2000") {//成功
                    $(this).addClass('heart_red');
                }
            }
        });
    });
});

