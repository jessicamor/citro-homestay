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



    /*Map Solo*/
    var soloCoordinate = {
        latitude: -7.576099,
        longitude: 110.8088019,
        zoom: 19
    }
    showMap('.map-solo', soloCoordinate, 'Citro Homestay Solo')

    /* Map Surabaya */
    var surabayaCoordinate = {
        latitude: -7.322795,
        longitude: 112.714122,
        zoom: 19
    }
    showMap('.map-sby', surabayaCoordinate, 'Citro Homestay Surabaya')
});

function showMap(divClass, coordinate, title) {
    if ($(divClass).length) {
        var map = new GMaps({
            div: divClass,
            lat: coordinate.latitude,
            lng: coordinate.longitude,
            zoom: coordinate.zoom,

        });
        map.addMarker({
            lat: coordinate.latitude,
            lng: coordinate.longitude,
            title: title,
            click: function (e) {

            },
            infoWindow: {
                content: '<p>' + title + '</p>'
            }
        });

    }
}
