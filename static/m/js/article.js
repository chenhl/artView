var domDown = {
    domClass: 'dropload-down',
    domRefresh: '<div class="dropload-refresh"></div>',
    domLoad: '<div class="dropload-load"><div class="k-line k-line-1"></div><div class="k-line k-line-2"></div><div class="k-line k-line-3"></div><div class="k-line k-line-4"></div></div>',
    domNoData: '<div class="dropload-noData"></div>'
};
var platform = 'm';

function ajaxCheckParamMsg() {
    $(".login_box").show();
    $(".alert").show();
}

function ajaxResultMsg() {
    $(".login_box").show();
    $(".alert").show();
}

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

});

