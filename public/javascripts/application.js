// functions
var showDetails = function(sectionName) {
  $('.details').hide();
  $('.' + sectionName +'-details').fadeIn(500);
}

// events
$('.menu a').on('click', function(event) {
 showDetails($(event.target).data('section'));
});

