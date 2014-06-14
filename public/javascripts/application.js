// functions
var showDetails = function(sectionName) {
  $('.' + sectionName +'-details').fadeIn(500);
  $('.menu').fadeOut(500);
}

// events
$('.skills a').on('click', function() {
  $('.skills').addClass('zoom-effect');

  setTimeout(showDetails('skills'), 1500);
});

$('.orbit').on('mouseover', function() {
  $('.orbit, .inner').addClass('paused');
});

$('.orbit').on('mouseout', function() {
  $('.orbit, .inner').removeClass('paused');
});