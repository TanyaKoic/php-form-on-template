$(function () {
    $('.customer-notice-wrap').load('_disclaimer_footer.php');
    $('.right-col').load('_short_form.php');

    var scr_hidden;
    if ($(window).scrollTop() > 200) {
        scr_hidden = false;
        $('.scroll_to_top').css('display', 'block');
    } else {
        scr_hidden = true;
        $('.scroll_to_top').css('display', 'none');
    }
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 200 && scr_hidden) {
            scr_hidden = false;
            $('.scroll_to_top').fadeIn(200)
        } else if ($(this).scrollTop() < 200 && !scr_hidden) {
            scr_hidden = true;
            $('.scroll_to_top').fadeOut(200)
        }
    });
    $('.scroll_to_top').on('click', function () {
        $('body, html').animate({
            scrollTop: 0
        }, 1000)
    });
    var date = new Date();
    $('#CurrentYear').html(date.getUTCFullYear());

});