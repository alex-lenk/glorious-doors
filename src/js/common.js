/*
$(".mobile-menu").click(
    function () {
        $('.top-nav-menu').toggleClass("top-nav-menu__active");
    }
);
*/

$(document).ready(function () {
// Исправление бага в IE на телефонах
// Copyright 2014-2017 The Bootstrap Authors
// Copyright 2014-2017 Twitter, Inc.
// Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
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

    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        paginationClickable: true,
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: 4000,
        effect: "fade"
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

    $('.toolbar').toolbar({
        content: '.toolbar-options',
        position: 'bottom',
        style: 'primary',
        animation: 'flip'
    });
});
