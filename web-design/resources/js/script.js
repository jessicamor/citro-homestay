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
});

/* Map Solo */
new GMaps({
    div: '.map-solo',
    lat: -7.576099,
    lng: 110.8088019,
});

/* Map Surabaya */
new GMaps({
  div: '.map-surabaya',
  lat: -7.3214023,
  lng: 112.7179585
});