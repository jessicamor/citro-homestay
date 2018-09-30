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

function copyToClipboard(idElement) {

  var copyText = document.getElementById(idElement);
  var el = document.createElement('textarea');  // Create a <textarea> element
  el.value = copyText.innerHTML;                                 // Set its value to the string that you want copied
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

  gtag('event', 'click', {
    'event_category': 'button',
    'event_label': idElement
  });

}

function handleOutboundLinkClicks(event) {
  gtag('event', 'click', {
    'event_category': 'outbound',
    'event_label': event.target.href,
    'transport_type': 'beacon'
  });
}


