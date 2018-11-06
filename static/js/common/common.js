function getCookie(c_name) {
    if (document.cookie.length > 0) {
        var c_start = document.cookie.indexOf(c_name + "=");
        if (c_start !== -1) {
            c_start = c_start + c_name.length + 1;
            var c_end = document.cookie.indexOf(";", c_start);
            if (c_end === -1)
                c_end = document.cookie.length;
            return unescape(document.cookie.substring(c_start, c_end));
        }
    }
    return '';
}

function setCookie(name, value) {
    var exp = new Date();
    exp.setTime(exp.getTime() + 365 * 24 * 60 * 60 * 1000); //365天过期
    document.cookie = name + "=" + encodeURIComponent(value)
            + ";expires=" + exp.toGMTString() + ";path=/";
    return true;
}

function articleList(list, obj) {

    var result = '',
            sec_cls,
            h3_cls,
            detail_cls;

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
//      result += '<span class="hot_label space">热</span>';
        result += '<span class="src space">' + list[i].uname + '</span>';
//      result += '<span class="cmt space"><!-- react-text: 105 -->评论 <!-- /react-text --><!-- react-text: 106 -->519<!-- /react-text --></span>';
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