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
    return result;
}

function articleListp(list, obj) {
    obj = obj || {};
    var result = '', res_footer, res_title, res_img, res_imgs
    sec_cls,
            h3_cls,
            detail_cls;
    for (var i = 0; i < list.length; i++) {
        res_footer = '';
        res_title = '';
        res_img = '';
        res_imgs = '';

        sec_cls = 'has_action';
        h3_cls = 'dotdot line3';
        detail_cls = 'item_detail';
        if (list[i].images.length === 0 && list[i].image.length > 0) {
            sec_cls = 'middle_mode has_action';
            h3_cls = 'dotdot line3 image-margin-right';
            detail_cls = 'item_detail desc';
        }

        result += '<li class="">';

        res_title += '<div class="title-box">' +
                '<a href="/group/6631502995152437764/" target="_blank" class="link">' +
                '习近平会见葡萄牙议会议长罗德里格斯' +
                '</a>' +
                '</div>';

        res_footer += '<div class="bui-box footer-bar">';
        res_footer += '<div class="bui-left footer-bar-left">' +
                '<a href="news_world" target="_blank" class="footer-bar-action tag tag-style-other">国际</a>' +
                '<a href="/c/user/50502346173/" target="_blank" class="footer-bar-action media-avatar">' +
                '<img src="//p3.pstatp.com/large/ca400072481685ad43b" lazy="loaded">' +
                '</a>' +
                '<a href="/c/user/50502346173/" target="_blank" class="footer-bar-action source">&nbsp;人民网&nbsp;⋅</a>' +
                '<a href="/group/6631498365328687630//#comment_area" target="_blank" class="footer-bar-action source">&nbsp;499评论&nbsp;⋅</a>' +
                '<span class="footer-bar-action">&nbsp;刚刚</span>' +
                '</div>';
        res_footer += '<div class="bui-right">' +
                '<div class="action-dislike" dislikeurl="/api/dislike/">' +
                '<i class="bui-icon icon-close_small" style="font-size: 16px; color: rgb(221, 221, 221);"></i>' +
                '不感兴趣' +
                '</div>' +
                '</div>';
        res_footer += '</div>';

        if (list[i].images.length === 0 && list[i].image === '') {//无图
            result += '<div class="no-mode">';
            result += res_title;
            result += res_footer;
            result += '</div>';

        } else if (list[i].images.length === 0 && list[i].image !== '') {//一图
            result += '<div class="bui-box single-mode">';

            res_img += '<div class="bui-left single-mode-lbox">' +
                    '<a href="/group/6631498365328687630/" target="_blank" class="img-wrap">' +
                    '<img class="lazy-load-img" src="//p99.pstatp.com/list/190x124/pgc-image/RBnAi24HZsZObe" lazy="loaded">' +
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
            res_imgs += '<div class="bui-box img-list">' +
                    '<a href="/group/6631042247792001543/" target="_blank" class="img-wrap img-item">' +
                    '<img class="lazy-load-img" src="" lazy="loading">' +
                    '</a>' +
                    '<a href="/group/6631042247792001543/" target="_blank" class="img-wrap img-item">' +
                    '<img class="lazy-load-img" src="" lazy="loading">' +
                    '</a>' +
                    '<a href="/group/6631042247792001543/" target="_blank" class="img-wrap img-item">' +
                    '<img class="lazy-load-img" src=""lazy="loading">' +
                    '</a>' +
                    '<a href="/group/6631042247792001543/" target="_blank" class="img-wrap img-item">' +
                    '<img class="lazy-load-img" src="" lazy="loading">' +
                    '</a>' +
                    '<i class="pic-tip">' +
                    '<span>8图</span>' +
                    '</i>' +
                    '</div>';

            result += res_title;
            result += res_imgs;
            result += res_footer;

            result += '</div>';
        }

        result += '</li>';
    }
    return result;
}