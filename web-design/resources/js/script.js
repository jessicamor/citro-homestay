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

function showMap(divClass, coordinate, title) {
    var element = $(divClass);
    if (element.length) {
        /*var map = new GMaps({
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
        });*/

        var map = new google.maps.Map(document.getElementById('map'), {zoom: coordinate.zoom, center: coordinate});
        var marker = new google.maps.Marker({position: coordinate, map: map});
    }
}

function initMap(){
    /*Map Solo*/
    var soloCoordinate = {
        lat: -7.576099,
        lng: 110.8088019,
        zoom: 19
    }
    showMap('.map-solo', soloCoordinate, 'Citro Homestay Solo')

    /* Map Surabaya */
    var surabayaCoordinate = {
        lat: -7.322795,
        lng: 112.714122,
        zoom: 19
    }
    showMap('.map-sby', surabayaCoordinate, 'Citro Homestay Surabaya')
}
