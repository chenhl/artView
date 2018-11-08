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
            if ($('#next_page').val() === '') {
                return;
            }
            var lang_url = app_http_url + '/index/feed';
            $.ajax({
                type: 'get',
                url: lang_url,
                data: {
                    'page': $('#next_page').val()
                },
                success: function (data) {
                    try {
                        data = JSON.parse(data);
                        $("#next_page").val(data.data.next_page_num);
                        var result = '';
                        if (data.code === 200) {
                            if (data.data.result_data.length === 0) {
                                me.lock();
                                me.noData();
                            } else {
                                result = articleList(data.data.result_data, {});
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