//owl carousel responsive
$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        items: 1,
        loop: true,
        dots: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            659: {
                items: 2,
            },
            1000: {
                items: 2,
                loop: false
            }
        }
    });

    $('.js--scroll-to-main').click(function () {
        $('html, body').animate({
            scrollTop: $('.js--section-main').offset().top
        }, 1000);
    });

});

