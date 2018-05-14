$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        items: 1,
        loop: false,
        dots: true,
        margin: 10,
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
});
