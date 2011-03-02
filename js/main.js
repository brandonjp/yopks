jQuery(document).ready(function($) {

	$('div#addNewSelector').find('div.thisIsOneEntry').not('cloned').find('ul.modKeys li').click(function() {

		// toggle the class & set a var for the alt value
		$(this).toggleClass('selected');
	
		print2textVersion();

	}); // end click

	$('div#addNewSelector').find('div.thisIsOneEntry').not('cloned').find('div.extraKeys').children('input').keyup(function(){
		print2textVersion();
	});

	$('div#addNewSelector').find('div.thisIsOneEntry button.addButton').click(function() {
		var clickedEntryGroup = $(this).parents('div.thisIsOneEntry').clone().addClass('cloned');
		clickedEntryGroup.find('.addButton').replaceWith('<button class="delButton" />');
		clickedEntryGroup.find('input').each(function(it){
			var itsVal = $(this).val();
			$(this).replaceWith('<div>'+itsVal+'</div>');
		});
		
		$('div#shortcutsGoHere').append(clickedEntryGroup);
	});

	
	function print2textVersion() {

		var modKeysText = '';

		$('div#addNewSelector').find('ul.modKeys li.selected').each(function() {
			var thisModKeyAlt = $(this).find('img').attr('alt') + ' ';
			modKeysText = modKeysText + thisModKeyAlt;
		});

		var extraKeysText = $('div#addNewSelector').find('div.extraKeys').children('input').val();

		$('div#addNewSelector').find('div.textVersion span.textVersion').html(modKeysText + ' ' + extraKeysText);

	}

});
