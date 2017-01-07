$(document).ready(function() {
  $('#fullpage').fullpage({
    'navigation': true,
    'navigationPosition': 'right',
    'verticalCentered': false
  });
  return new WOW().init();
});
