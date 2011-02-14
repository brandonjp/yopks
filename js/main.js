jQuery(document).ready(function($) {

	$('div#addNewSelector ul li.modKeys ul li').click(function() {
		var thisImgAlt = $(this).find('img').attr('alt');
		$('div#addNewSelector ul li.textVersion input').hide().val(thisImgAlt);
	});

});
