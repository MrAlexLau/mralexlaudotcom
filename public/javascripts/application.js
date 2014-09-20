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

$('.planet').on('click', function(e) {
  var $target = $(e.target).parents('.planet');

  $target.addClass('zoom-effect');

  setTimeout(showDetails($target.data('section')), 1500);
});

$('.close').on('click', function(e){
  $('.planet').removeClass('zoom-effect');
  $('.menu').fadeIn(500);
  $(e.target).parent().fadeOut(500);
});

$('.orbit').on('mouseover', function() {
  $('.orbit, .inner').addClass('paused');
});

$('.orbit').on('mouseout', function() {
  $('.orbit, .inner').removeClass('paused');
});