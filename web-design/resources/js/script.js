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

 /*Map Solo*/
/*
new GMaps({
    div: '.map-solo',
    lat: -7.576099,
    lng: 110.8088019,
});
*/

/* Map Surabaya */
/*
new GMaps({
  div: '.map-surabaya',
  lat: -7.3214023,
  lng: 112.7179585
});
*/


// * Two maps in different page
// *



// necessary variables
var mapSolo, mapSurabaya;
var infoWindowSolo, infoWindowSurabaya;

// markersData variable stores the information necessary to each marker
var markersDataSolo = [
    {
      lat: -7.576099,
      lng: 110.8088019,
      name: "Citro Homestay Solo",
      address1: "Jln. Pasopati no 5, Tipes",
      address2: "Serengan, Solo"
        }
];

var markersDataSurabaya = [
     {
      lat: -7.3214023,
      lng: 112.7179585,
      name: "Citro Homestay Surabaya",
      address1:"Jln. Jambangan Tama I No.10",
      address2: "Jambangan, Surabaya",
      postalCode: "60232" // don't insert comma in the last item of each marker
          }
];

function initialize(setMap) {

   var mapOptions;
   
   if(setMap == "mapSolo") {
      mapOptions = {
         center: new google.maps.LatLng(-7.3214023,110.8088019),
         zoom: 11,
      };
   
      mapSolo = new google.maps.Map(document.getElementsByClassName('map-solo'), mapOptions);
      
	   // a new Info Window is created
	   infoWindowSolo = new google.maps.InfoWindow();
	
	   // Event that closes the Info Window with a click on the map
	   google.maps.event.addListener(mapSolo, 'click', function() {
	      infoWindowSolo.close();
   	});
      
   } else {
      
      mapOptions = {
         center: new google.maps.LatLng(40.601203,-8.668173),
         zoom: 9,
      };
      
	   mapSurabaya = new google.maps.Map(document.getElementsByClassName('map-Surabaya'), mapOptions);
      
	   // a new Info Window is created
	   infoWindowSurabaya = new google.maps.InfoWindow();
	
	   // Event that closes the Info Window with a click on the map
	   google.maps.event.addListener(mapSurabaya, 'click', function() {
	      infoWindowSurabaya.close();
   	});
   }

   // Finally displayMarkers() function is called to begin the markers creation
   displayMarkers(setMap);
   
   // Create second map only when initialize function is called for the first time.
   // Second time setMap is equal to mapRight, so this condition returns false and it will not run  
   if(setMap == "mapSolo"){
      initialize("mapSurabaya");   
   }
   
}
google.maps.event.addDomListener(window, 'load', function(){ initialize("mapSolo") });


// This function will iterate over markersData array
// creating markers with createMarker function
function displayMarkers(setMap){
   
   var markersData;
   var map;
   
   if(setMap == "mapSolo"){
      markersData = markersDataSolo;
      map = mapSolo;
   } else {
      markersData = markersDataSurabaya;
      map = mapSurabaya;
   }
   
   // this variable sets the map bounds according to markers position
   var bounds = new google.maps.LatLngBounds();
   
   // for loop traverses markersData array calling createMarker function for each marker 
   for (var i = 0; i < markersData.length; i++){

      var latlng = new google.maps.LatLng(markersData[i].lat, markersData[i].lng);
      var name = markersData[i].name;
      var address1 = markersData[i].address1;
      var address2 = markersData[i].address2;
      var postalCode = markersData[i].postalCode;

      createMarker(setMap, latlng, name, address1, address2, postalCode);

      // marker position is added to bounds variable
      bounds.extend(latlng);  
   }

   // Finally the bounds variable is used to set the map bounds
   // with fitBounds() function
   map.fitBounds(bounds);
}

// This function creates each marker and it sets their Info Window content
function createMarker(setMap, latlng, name, address1, address2, postalCode){
   
   var map;
   var infoWindow;
   
   if(setMap == "mapSolo"){
      map = mapSolo;
      infoWindow = infoWindowSolo;
   } else {
      map = mapSurabaya;
      infoWindow = infoWindowSurabaya;
   }
   
   var marker = new google.maps.Marker({
      map: map,
      position: latlng,
      title: name
   });

   // This event expects a click on a marker
   // When this event is fired the Info Window content is created
   // and the Info Window is opened.
   google.maps.event.addListener(marker, 'click', function() {
      
      // Creating the content to be inserted in the infowindow
      var iwContent = '<div id="iw_container">' +
            '<div class="iw_title">' + name + '</div>' +
         '<div class="iw_content">' + address1 + '<br />' +
         address2 + '<br />' +
         postalCode + '</div></div>';
      
      // including content to the Info Window.
      infoWindow.setContent(iwContent);

      // opening the Info Window in the current map and at the current marker location.
      infoWindow.open(map, marker);
   });
}