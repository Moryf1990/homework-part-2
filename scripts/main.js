'use strict';


var $submit = $('#submit');

$submit.click(function() {
	$submit.html('Loading...')
	$submit.prop('disabled', true);

setTimeout(function() {
	$submit.html('Submit')
	$submit.removeClass('btn-disabled');
	$submit.prop('disabled', false);
}, 4000);

});