let whatsappMessages = new Map([
  ['wa-sby', 'https://citrohomestay.com \nCitro Homestay Surabaya saya berminat untuk menginap tanggal '],
  ['wa-solo', 'https://citrohomestay.com \nCitro Homestay Solo saya berminat untuk menginap tanggal '],
  ['wa-solo-mini', 'https://citrohomestay.com \nCitro Homestay Solo Mini saya berminat untuk menginap tanggal '],
]);

let copyContents = new Map([
  ['alamat-sby', 'https://citrohomestay.com \nCitrohomestay Surabaya \nAlamat: Jln. Jambangan Tama I No.10, Jambangan, Surabaya 60232 \nTelp: 082131327064'],
  ['alamat-sby-lokasi-sekitar', 'https://citrohomestay.com \nCitrohomestay Surabaya \nAlamat: Jln. Jambangan Tama I No.10, Jambangan, Surabaya 60232 \nTelp: 082131327064'],
  ['alamat-solo', 'https://citrohomestay.com \nCitrohomestay Solo \nAlamat: Jln. Bhayangkara, Gang Pasopati no 5, Tipes, Serengan, Solo \nTelp: 081329758096'],
  ['alamat-solo-lokasi-sekitar', 'https://citrohomestay.com \nCitrohomestay Solo \nAlamat: Jln. Bhayangkara, Gang Pasopati no 5, Tipes, Serengan, Solo \nTelp: 081329758096'],
  ['telp-sby','088996283734'],
  ['telp-solo','081329758096'],
  ['telp-solo-mini','081329758096'],
]);

//owl carousel responsive
$(document).ready(function () {
  $('.phone-direct').click(function(event){
    event.preventDefault();
    var btn = $(this);
    let key = btn.attr('data-whatsapp');
    var finalURI = event.target.href + '?text=' + encodeURI(whatsappMessages.get(key));
    gtag('event', 'click', {
        'event_category': 'button',
        'event_label': key,
        'transport_type': 'beacon',
        'event_callback': function(){
          window.open(finalURI, '_blank');
        }
      });
  });

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

  $('.map-link').click(function(e) {
    handleOutboundLinkClicks(e);
  });
});

function copyToClipboard(idElement) {
  var copyValue = copyContents.get(idElement);

  var el = document.createElement('textarea');  // Create a <textarea> element
  el.value = copyValue;                                 // Set its value to the string that you want copied
  el.setAttribute('readonly', '');                // Make it readonly to be tamper-proof
  el.style.position = 'absolute';                 
  el.style.left = '-9999px';                      // Move outside the screen to make it invisible
  document.body.appendChild(el);                  // Append the <textarea> element to the HTML document
  const selected =            
    document.getSelection().rangeCount > 0        // Check if there is any content selected previously
      ? document.getSelection().getRangeAt(0)     // Store selection if found
      : false;                                    // Mark as false to know no selection existed before
  el.select();                                    // Select the <textarea> content
  document.execCommand('copy');                   // Copy - only works as a result of a user action (e.g. click events)
  document.body.removeChild(el);                  // Remove the <textarea> element
  if (selected) {                                 // If a selection existed before copying
    document.getSelection().removeAllRanges();    // Unselect everything on the HTML document
    document.getSelection().addRange(selected);   // Restore the original selection
  }

  if( $('#notification-copy').length)         // use this if you are using id to check
  {
    $('#notification-copy').fadeIn();
    $('#notification-copy').removeClass("hidden");
    setTimeout(function() {
      $('#notification-copy').fadeOut();
    }, 1000);
  }

  gtag('event', 'click', {
    'event_category': 'button',
    'event_label': idElement
  });

}

function handleOutboundLinkClicks(event) {
  event.preventDefault();
  gtag('event', 'click', {
    'event_category': 'outbound',
    'event_label': event.target.href,
    'transport_type': 'beacon',
    'event_callback': function(){
      window.open(event.target.href, '_blank');
    }
  });
}


