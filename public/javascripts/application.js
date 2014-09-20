// functions
var showDetails = function(sectionName) {
  $('.details').hide();
  $('.' + sectionName + '-details').fadeIn(500);
}

// events
$('.menu a').on('click', function(event) {
  var $target = $(event.target),
      sectionName = $target.data('section');

  event.preventDefault();
  $('.menu div').removeClass('selected');
  $target.toggleClass('selected');
  showDetails(sectionName);
});

