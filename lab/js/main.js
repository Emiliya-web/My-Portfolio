$(function () {

    // Menu opener hamburger
    $('.menu-toggle').click(function () {
        $('.menu-collapse').toggleClass('d-none').css('order', '1');
        $('.menu').toggleClass('menu-opened');
    });

    // Preloader
    var $preloader = $('#page-preloader'),
        $spinner   = $preloader.find('.spinner');
    $spinner.fadeOut();
    $preloader.delay(350).fadeOut('slow');

	// Всплывающее окно

    $('.btn-order').click(function (e) {
        e.preventDefault();
        $('#exampleModal').arcticmodal();
    });

     // Большой слайдер
    
    $('.reviews__slider').slick({
        dots: true,
        infinite: true,
        prevArrow: '<button type="button" class="reviews__btn reviews__btn_left"><i class="fa fa-angle-left reviews__angle"></i></button>',
        nextArrow: '<button type="button" class="reviews__btn reviews__btn_right"><i class="fa fa-angle-right reviews__angle"></i></button>',
    });
});