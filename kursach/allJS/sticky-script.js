document.addEventListener("DOMContentLoaded", function() {
  var stickyElements = document.querySelectorAll('.stickyText');
  window.addEventListener('scroll', function() {
    var coords = Array.from(stickyElements).map(function(element) {
      var rect = element.getBoundingClientRect();
      return {
        top: rect.top + window.scrollY,
        bottom: rect.bottom + window.scrollY
      };
    });

    for (let i = 0; i < 3; i ++){
      if (coords[i].bottom == coords[i + 1].bottom)
        stickyElements[i].style.visibility = 'hidden';
      else
        stickyElements[i].style.visibility = 'visible';
    }
  });
});
