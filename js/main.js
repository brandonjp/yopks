jQuery(document).ready(function($) {

	var textVersionValue = '';

	$('div#addNewSelector').find('ul.thisIsOneEntry li.modKeys ul li').click(function() {

		// toggle the class & set a var for the alt value
		$(this).toggleClass('selected');
	
		print2textVersion();

	}); // end click
	
	function print2textVersion() {

		var modKeysText = '';

		$('li.modKeys ul li.selected').each(function() {
			var thisModKeyAlt = $(this).find('img').attr('alt') + ' ';
			modKeysText = modKeysText + thisModKeyAlt;
		});

		var extraKeysText = $('li.extraKeys').children('input').val();

		$('li.textVersion input').val(modKeysText + ' ' + extraKeysText);

	}

});
