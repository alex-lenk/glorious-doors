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
        nextButton: '.carousel-8',
        prevButton: '.carousel-7',
        paginationClickable: true,
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: 4000,
        effect: "fade"
    });

    var homeItemsSlider = new Swiper('.home-items-slider', {
        nextButton: '.carousel-6',
        prevButton: '.carousel-5',
        slidesPerView: 5,
        slidesPerColumn: 2,
        autoplay: 4000,
        spaceBetween: 0
    });

    var colorItemsSlider = new Swiper('.color-items-slider', {
        nextButton: '.carousel-4',
        prevButton: '.carousel-3',
        slidesPerView: 6,
        autoplay: 3000,
        spaceBetween: 0
    });

    var doorsInterior = new Swiper('.doors-interior-carousel', {
        nextButton: '.carousel-2',
        prevButton: '.carousel-1',
        slidesPerView: 3,
        autoplay: 3000,
        spaceBetween: 30
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

    $(".close-notification").click(
        function () {
            $('.notification').fadeOut();
        }
    );
});

var preloader = document.getElementById("preloader_preload");

function fadeOutnojquery(el) {
    el.style.opacity = 1;
    var interpreloader = setInterval(function () {
        el.style.opacity = el.style.opacity - 0.05;
        if (el.style.opacity <= 0.05) {
            clearInterval(interpreloader);
            preloader.style.display = "none";
        }
    }, 16);
}
window.onload = function () {
    setTimeout(function () {
        fadeOutnojquery(preloader);
    }, 3000);
};
