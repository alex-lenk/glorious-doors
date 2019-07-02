$(document).ready(function () {
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
        spaceBetween: 0,
        breakpoints: {
            992: {
                slidesPerView: 4
            }
        }
    });

    var colorItemsSlider = new Swiper('.color-items-slider', {
        nextButton: '.carousel-4',
        prevButton: '.carousel-3',
        slidesPerView: 6,
        autoplay: 3000,
        spaceBetween: 0,
        breakpoints: {
            992: {
                slidesPerView: 4
            }
        }
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