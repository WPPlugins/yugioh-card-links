var $j = jQuery.noConflict();

$j(document).ready(function() {
	$j('a.yugiohcardref_rollover').cluetip({
		arrows: true,
		showTitle: false,
		dropShadow: false,
		clickThrough: true,
		ajaxCache: false,
		width: 437
	});
});