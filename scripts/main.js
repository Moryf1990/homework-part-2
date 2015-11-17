'use strict';


var $submit = $('#submit');

$submit.click(function() {
	$submit.html('Loading...')
	$submit.prop('disabled', false);

setTimeout(function() {
	$submit.html('Submit')
	$submit.removeClass('btn-disabled');
}, 4000);

});