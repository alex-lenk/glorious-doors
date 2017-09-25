/*
 $(".mobile-menu").click(
 function () {
 $('.top-nav-menu').toggleClass("top-nav-menu__active");
 }
 );
 */

$(document).ready(function () {
// Исправление бага в IE на телефонах
    if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
        var msViewportStyle = document.createElement('style');
        msViewportStyle.appendChild(
            document.createTextNode(
                '@-ms-viewport{width:auto!important}'
            )
        );
        document.head.appendChild(msViewportStyle)
    }
    // END

    var mainOfferSider = new Swiper('.main-offer-slider', {
        pagination: '.swiper-pagination',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        paginationClickable: true,
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: 4000,
        effect: "fade"
    });

    var homeItemsSlider = new Swiper('.home-items-slider', {
        nextButton: '.carousel-next',
        prevButton: '.carousel-prev',
        slidesPerView: 5,
        slidesPerColumn: 2,
        autoplay: 4000,
        spaceBetween: 0
    });

    var colorItemsSlider = new Swiper('.color-items-slider', {
        nextButton: '.carousel-next',
        prevButton: '.carousel-prev',
        slidesPerView: 6,
        autoplay: 3000,
        spaceBetween: 0
    });


    // BEGIN: Для ошибок форм
    var inputFilled = "field-filled";

    $(".form-control").change(function () {
        if ($(this).val().trim().length) {
            $(this).parent().addClass(inputFilled);
        } else {
            $(this).parent().removeClass(inputFilled);
        }
    });
    //END
});
