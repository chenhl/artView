$(function () {
    $('.unflod-field__mask,.download-text').on('click', function () {
        $(this).parent().hide();
        $('.article__content').css('height','auto');
    });
});

