(function ($) {
	$('[id^="cb-select-all-"]').on('click', function () {
		var isChecked = $(this).prop('checked');

		// Check or uncheck all row checkboxes.
		$('tbody .check-column input[type="checkbox"]').prop('checked', isChecked);

		// Synchronize all the bulk select checkboxes.
		$('[id^="cb-select-all-"]').prop('checked', isChecked);
	});
}(jQuery));
