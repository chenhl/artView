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
    obj = obj || {};
    if (obj.platform === 'm') {
        return articleListm(list, obj);
    } else {
        return articleListp(list, obj);
    }
}

function articleListm(list, obj) {
    obj = obj || {};
    var result = '',
            sec_cls,
            h3_cls,
            detail_cls;
    var imgs_max = 4;
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
        result += '<a href="/a/' + list[i].aid + '" data-action-label="click_headline" data-tag="news_society" class="article_link clearfix ">';
        result += '<div class="' + detail_cls + '">';
        result += '<h3 class="' + h3_cls + '">' + list[i].title + '</h3>';

        if (list[i].images.length > 0) {
            result += '<div class="list_image">';
            result += '<ul class="clearfix">';
            for (var k = 0; k < list[i].images.length; k++) {
                if (k < imgs_max) {
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
    return result;
}

function articleListp(list, obj) {
    obj = obj || {};
    var result = '', res_footer, res_title, res_img, res_imgs;
    var u_url, a_url;
    var imgs_max = 4;
    for (var i = 0; i < list.length; i++) {
        res_footer = '';
        res_title = '';
        res_img = '';
        res_imgs = '';

        a_url = list[i].a_url;
        u_url = list[i].u_url;

        result += '<li class="">';

        res_title += '<div class="title-box">' +
                '<a href="' + a_url + '" target="_blank" class="link">' +
                list[i].title +
                '</a>' +
                '</div>';

        res_footer += '<div class="bui-box footer-bar">';
        res_footer += '<div class="bui-left footer-bar-left">' +
//                '<a href="news_world" target="_blank" class="footer-bar-action tag tag-style-other">国际</a>' +
//                '<a href="/u/'+list[i].uid+'" target="_blank" class="footer-bar-action media-avatar">' +
//                '<img src="//p3.pstatp.com/large/ca400072481685ad43b" lazy="loaded">' +
//                '</a>' +
                '<a href="' + u_url + '" target="_blank" class="footer-bar-action source">&nbsp;' + list[i].uname + '&nbsp;⋅</a>' +
//                '<a href="/group/6631498365328687630//#comment_area" target="_blank" class="footer-bar-action source">&nbsp;499评论&nbsp;⋅</a>' +
                '<span class="footer-bar-action">&nbsp;' + list[i].create_time + '</span>' +
                '</div>';
//        res_footer += '<div class="bui-right">' +
//                '<div class="action-dislike" dislikeurl="/api/dislike/">' +
//                '<i class="bui-icon icon-close_small" style="font-size: 16px; color: rgb(221, 221, 221);"></i>' +
//                '不感兴趣' +
//                '</div>' +
//                '</div>';
        res_footer += '</div>';

        if (list[i].images.length === 0 && list[i].image === '') {//无图
            result += '<div class="no-mode">';
            result += res_title;
            result += res_footer;
            result += '</div>';

        } else if (list[i].images.length === 0 && list[i].image !== '') {//一图
            result += '<div class="bui-box single-mode">';

            res_img += '<div class="bui-left single-mode-lbox">' +
                    '<a href="' + a_url + '" target="_blank" class="img-wrap">' +
                    '<img class="lazy-load-img" src="' + list[i].image + '">' + // lazy="loaded"
                    '</a>' +
                    '</div>';

            result += '<div class="single-mode-rbox">' +
                    '<div class="single-mode-rbox-inner">';
            result += res_title;
            result += res_footer;
            result += '</div>';
            result += '</div>';

            result += '</div>';
        } else if (list[i].images.length > 0) {//多图
            result += '<div class="more-mode">';
            res_imgs += '<div class="bui-box img-list">';
            for (var k = 0; k < list[i].images.length; k++) {
                if (k < imgs_max) {
                    res_imgs += '<a href="' + a_url + '" target="_blank" class="img-wrap img-item">' +
                            '<img class="lazy-load-img" src="' + list[i]['images'][k] + '">' + // lazy="loading"
                            '</a>';
                }
            }
            res_imgs += '<i class="pic-tip">' +
//                    '<span>8图</span>' +
                    '</i>';

            res_imgs += '</div>';

            result += res_title;
            result += res_imgs;
            result += res_footer;

            result += '</div>';
        }

        result += '</li>';
    }
    return result;
}