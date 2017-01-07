$(document).ready ->
	$('#fullpage').fullpage
		'navigation': true,
		'navigationPosition': 'right',
		'verticalCentered': false

	new WOW().init()