$(function () {

    $('body').on('touchmove', throttle(function () {  //top
        isShowTop();
    }, 300, 1000));
    isShowTop();
    $('#pageletListContent').eq(0).dropload({
        scrollArea: window,
        threshold: $(document).height() - $('#pageletListContent').height(),
        domDown: {
            domClass: 'dropload-down',
            domRefresh: '<div class="dropload-refresh"></div>',
            domLoad: '<div class="dropload-load"><div class="k-line k-line-1"></div><div class="k-line k-line-2"></div><div class="k-line k-line-3"></div><div class="k-line k-line-4"></div></div>',
            domNoData: '<div class="dropload-noData"></div>'
        },
        loadDownFn: function (me) {
//            alert($(document).height());
//            alert($('#pageletListContent').height());
            if ($('#next_uri').val() === '') {
                return;
            }
            var lang_url = app_http_url + $('#next_uri').val();
            $.ajax({
                type: 'get',
                url: lang_url,
                data: {
                    "ajax": "1"
                },
                success: function (data) {
                    try {
                        data = JSON.parse(data);
                        $("#next_uri").val(data.data.result_filter);
                        if (data.code === 200) {
                            if (data.data.result_data.length === 0) {
                                me.lock();
                                me.noData();
                            } else {
                                var result = '', list = data.data.result_data, sec_cls, h3_cls, detail_cls;
                                for (var i = 0; i < list.length; i++) {
                                    sec_cls = 'has_action';
                                    h3_cls = 'dotdot line3';
                                    detail_cls = 'item_detail';
                                    if (list[i].images.length === 0 && list[i].image.length > 0) {
                                        sec_cls = 'middle_mode has_action';
                                        h3_cls = 'dotdot line3 image-margin-right';
                                        detail_cls = 'item_detail desc';
                                    }

                                    result += '<section class="' + sec_cls + '" data-item-id="' + list[i].aid + '" data-format="0">';
                                    result += '<a href="javascript: void(0)" data-action-label="click_headline" data-tag="news_society" class="article_link clearfix ">';
                                    result += '<div class="' + detail_cls + '">';
                                    result += '<h3 class="' + h3_cls + '">' + list[i].title + '</h3>';

                                    if (list[i].images.length > 0) {
                                        result += '<div class="list_image">';
                                        result += '<ul class="clearfix">';
                                        for (var k = 0; k < list[i].images.length; k++) {
                                            if (k < 3) {
                                                result += '<li class="list_img_holder"><img src="' + list[i]['images'][k] + '"></li>';
                                            }
                                        }
                                        result += '</ul>';
                                        result += '</div>';
                                    }

                                    result += '<div class="item_info">';
                                    result += '<div>';
//                                    result += '<span class="hot_label space">热</span>';
                                    result += '<span class="src space">' + list[i].uname + '</span>';
//                                    result += '<span class="cmt space"><!-- react-text: 105 -->评论 <!-- /react-text --><!-- react-text: 106 -->519<!-- /react-text --></span>';
                                    result += '<span class="time" title="' + list[i].create_time + '">' + list[i].create_time + '</span>';
                                    result += '<span data-id="' + list[i].aid + '" class="dislike-news fr"></span>';
                                    result += '</div>';
                                    result += '</div>';
                                    result += '</div>';
                                    if (list[i].images.length === 0 && list[i].image.length > 0) {
                                        result += '<div class="list_img_holder">';
                                        result += '<img src="' + list[i].image + '">';
                                        result += '</div>';
                                    }
                                    result += '</a>';
                                    result += '</section>';
                                }
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

function isShowTop() {
    if ($('body').scrollTop() > $(window).height() / 2) {
        $('.r-top').show();
    } else {
        $('.r-top').hide();
    }
}
function throttle(method, delay, duration) {
    var timer = null, begin = new Date();
    return function () {
        var context = this, args = arguments, current = new Date();
        ;
        clearTimeout(timer);
        if (current - begin >= duration) {
            method.apply(context, args);
            begin = current;
        } else {
            timer = setTimeout(function () {
                method.apply(context, args);
            }, delay);
        }
    };
}
function setBodyScrollHide() {
    document.body.style.overflow = 'hidden';
    window.addEventListener('touchmove', _preventDefault);
}
function setBodyScrollShow() {
    document.body.style.overflow = 'auto';
    window.removeEventListener('touchmove', _preventDefault);
}