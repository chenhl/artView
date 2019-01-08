function getCookie(name) {
    var res = '';
    if (platform === 'p') {
        res = $.cookie(name);
    } else {
        res = $.fn.cookie(name);
    }
    if (!res || res === '') { //null undefine NaN 都可以进入判断语句
        res = '';
    }
    return res;
}

function setCookie(name, value) {
    var res = false;
    if (platform === 'p') {
        res = $.cookie(name, value);
    } else {
        res = $.fn.cookie(name, value);
    }
    if (!res) {
        res = false;
    } else {
        res = true;
    }
    return res;
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
/**
 * 异步文章列表入口
 * @param {type} list
 * @param {type} obj
 * @returns {undefined|String}
 */
function articleList(list, obj) {
    obj = obj || {};
    if (obj.platform === 'm') {//mobile article list 
        return articleListm(list, obj);
    } else if (obj.platform === 'p') {//pc article list
        return articleListp(list, obj);
    } else if (obj.platform === 'ps') {//pc search article list
        return articleListps(list, obj);
    } else if (obj.platform === 'pu') {//pc user article list
        return articleListpu(list, obj);
    }
}
/**
 * pc 用户中心关注、粉丝
 * @param {array} list
 * @param {obj} obj
 * @returns {string}
 */
function followp(list, obj) {
    obj = obj || {};
    var result = '';
    var u_url, upic;
    var status_cls, status_txt;

    for (var i = 0; i < list.length; i++) {
        u_url = list[i].u_url;
        upic = list[i].upic;

        result += '<li><dl class="media-list">';

        result += '<dd class="avatar-wrap">' +
                '<a target="_blank" href="' + u_url + '">' +
                '<img alt="" src="' + upic + '">' +
                '</a>' +
                '</dd>';
        result += '<dd>' +
                '<a target="_blank" href="' + u_url + '">' +
                '<h3>' + list[i].uname + '</h3>' +
                '</a>' +
                '</dd>';

        if (list[i].relation_status === 2) {
            status_cls = 'each';
            status_txt = '互相关注';
        } else if (list[i].relation_status === 1) {
            status_cls = 'following';
            status_txt = '已关注';
        } else {
            status_cls = '';
            status_txt = '关注';
        }

        result += '<dd class="relation">' +
                '<div status="' + list[i].relation_status + '" riot-tag="attention" txt="关注" activetxt="已关注" friendedtxt="互相关注" media_id="' + list[i].uid + '">' +
                '<span class="btn-attention' + status_cls + '">' +
                '<em class="text">' + status_txt + '</em>' +
                '</span>' +
                '</div>' +
                '</dd>';
        result += '</dl></li>';
    }
    return result;

}
/**
 * pc 详情页，author最新列表
 * @param {type} list
 * @param {type} obj
 * @returns {undefined}
 */
function articleListpu(list, obj) {
    obj = obj || {};
    var result = '';
    var a_url;
    for (var i = 0; i < list.length; i++) {
        a_url = list[i].a_url;
        result += '<li class="user-card-article-item">' +
                '<a href="' + a_url + '" target="_blank">' + list[i].title + '</a>' +
                '</li>';
    }
    return result;

}
/**
 * mobile 列表、详情页列表
 * @param {type} list
 * @param {type} obj
 * @returns {String}
 */
function articleListm(list, obj) {
    obj = obj || {};
    var result = '',
            sec_cls,
            h3_cls,
            detail_cls;
    var u_url, a_url;
    var imgs_max = 4;
    for (var i = 0; i < list.length; i++) {
        a_url = list[i].a_url;
        u_url = list[i].u_url;

        sec_cls = 'has_action';
        h3_cls = 'dotdot line3';
        detail_cls = 'item_detail';
        if (list[i].images.length < 3 && list[i].image.length > 0) {
            sec_cls = 'middle_mode has_action';
            h3_cls = 'dotdot line3 image-margin-right';
            detail_cls = 'item_detail desc';
        }

        result += '<section class="' + sec_cls + '" data-item-id="' + list[i].aid + '" data-format="0">';
        result += '<a href="' + a_url + '" data-action-label="click_headline" data-tag="news_society" class="article_link clearfix ">';
        result += '<div class="' + detail_cls + '">';
        result += '<h3 class="' + h3_cls + '">' + list[i].title + '</h3>';

        if (list[i].images.length > 2) {
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
/**
 * pc 列表、详情页列表
 * @param {type} list
 * @param {type} obj
 * @returns {String}
 */
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

        } else if (list[i].images.length < 3 && list[i].image !== '') {//一图
            result += '<div class="bui-box single-mode">';

            res_img += '<div class="bui-left single-mode-lbox">' +
                    '<a href="' + a_url + '" target="_blank" class="img-wrap">' +
                    '<img class="lazy-load-img" src="' + list[i].image + '">' + // lazy="loaded"
                    '</a>' +
                    '</div>';

            result += '<div class="single-mode-rbox">' +
                    '<div class="single-mode-rbox-inner">';
            result += res_img;
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
//            res_imgs += '<i class="pic-tip">' +
//                    '<span>8图</span>' +
//                    '</i>';

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

/**
 * pc search列表
 * @param {type} list
 * @param {type} obj
 * @returns {String}
 */
function articleListps(list, obj) {
    obj = obj || {};
    var result = '', res_rbox, res_lbox;
    var u_url, a_url;

    for (var i = 0; i < list.length; i++) {
        a_url = list[i].a_url;
        u_url = list[i].u_url;
        res_rbox = '';
        res_lbox = '';

        res_rbox += '<div class="rbox-inner">';
        //title
        res_rbox += '<div class="title-box">' +
                '<a href="' + a_url + '" target="_blank" class="link title">' + '<span class="J_title" riot-tag="raw">' +
                list[i].title +
                '</span>' + '</a>' +
                '</div>';
        //title footer
        res_rbox += '<div class="y-box footer">' +
                '<div class="y-left">' +
                '<div class="y-left">' +
                '<a class="lbtn media-avatar" target="_blank" href="' + u_url + '">' +
                '<img alt="" src="' + list[i].upic + '">' +
                '</a>' +
                '<a class="lbtn source J_source" target="_blank" href="' + u_url + '" riot-tag="raw">' +
                '&nbsp;' + list[i].uname + '&nbsp;' +
                '</a>' +
                '</div>' + //y-left
//                '<a class="lbtn comment" target="_blank" href="/group/6587709843321127438//#comment_area">' +
//                '⋅&nbsp;9评论&nbsp;' +
//                '</a>' +
                '<span class="lbtn">' +
                '⋅&nbsp;' + list[i].create_time +
                '</span>' +
                '</div>' + //y-left
                '</div>';//y-box footer
        res_rbox += '</div>'; // rbox-inner

//        result += '<div riot-tag="articleCard" class="articleCard">';
        result += obj.item_wrap;
        result += '<div class="item">';
        result += '<div class="item-inner y-box">';

        if (list[i].images.length < 3 && list[i].image === '') {//无图
            result += '<div class="normal">';//normal start
            result += res_rbox;
        } else {
            result += '<div class="normal rbox ">';//normal start
            result += res_rbox;
            // left pic
            res_lbox += '<div class="lbox">' +
                    '<a class="img-wrap" target="_blank" href="/group/6587709843321127438/">' +
                    '<img alt="" src="' + list[i].image + '">' +
                    '</a>' +
                    '</div>';
        }
        result += '</div>';//normal end
        result += res_lbox;
        result += '</div>';//item-inner
        result += '</div>'; //item
//        result += '</div>';//articleCard
        result += obj.item_wrap_end;//articleCard
    }
    return result;
}

/**
 * 异步取文章单页列表
 * @param {type} condition
 * @param {type} options
 * @returns {undefined}
 */
function ajaxArticleList(condition, options) {
    condition = condition || {};
    options = options || {};
    options.contentEle = options.contentEle || '.user-card-article-list';

    $.ajax({
        type: options.method || 'GET',
        dataType: 'json',
        url: options.url || '/index/feed',
        data: condition,
        async: options.async || false,
        success: function (data) {
            try {
//                data = JSON.parse(data);
                var result = '';
                if (data.code === 200 && data.data.result_data.list.length > 0) {
                    var p = platform + 'u';
                    result = articleList(data.data.result_data.list, {platform: p});
//                    result = 'ddddddd';
                } else {
//                    alert('a');
                }
//                console.log($(options.contentEle));
                setTimeout(function () {
                    $(options.contentEle).eq(0).append(result);
                }, 500);
            } catch (e) {
//                console.log(e);
            }
        },
        error: function (data) {
        },
        complete: function (data) {

        }
    });
}
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
//    if (getCookie('uid') === '') {
//        ajax_check_param_msg();
//        return false;
//    }

    //改变页面状态
    if (param.data.view_func) {//自定义的func
        var res = param.data.view_func(_ele);
        var url = res.url;
        param.data.ajax_data = res.ajax_data;
        hasClick = false;
        alert(url);
        alert(param.data.ajax_data.aid);
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
    //scroll top
    $('#icon-arrow_up_big').on('click', function () {
        $(document).scrollTop(0);
    });
    //search
    $('#search_btn').on('click', function () {
        var txt = $('#input_q').val();
        if (txt !== '') {
            window.location.href = '/search/?q=' + txt;
        } else {
            return false;
        }
    });
});