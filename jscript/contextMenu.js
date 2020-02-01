$(document).ready(function () {

	var target;

	$("tr").bind("contextmenu", function (e) {

		targetRow = $(event.target).parent('tr');

		$('.custom-menu').css({
			top: e.pageY + 'px',
			left: e.pageX + 'px'
		}).show();
		return false;

	});

	//FUNCTIONS FOR THE CONTEXTMENU OPTIONS
	//TO HIDE A TIMELINE
	$('#hideRow').click(function () {
		$(targetRow).hide();
	});
	//TO TOGGLE (SHOW or HIDE) THE SUB-TIMELINES OF A TIMELINE IF AVAILABLE
	$('#hideSub').click(function () {
		var valueInput = $(targetRow).attr("value");
		$("." + valueInput).not(':first').toggle(50);
	});
	//TO SHOW DETAILS/NOTES
	$(function () {
		$("#showDetails").click(function () {

			var valueInput = $(targetRow).attr("value");
			var exempt = $(".details" + valueInput);
			$("#details>div").not(exempt).hide();
			$(exempt).toggle();

			if ($(exempt).is(":visible")) {
				$("#detailsclosebutton").show()
			} else {
				$("#detailsclosebutton").hide()
			}
		});


	});

	//CONDITIONS FOR HIDING CONTEXTMENU
	$('.custom-menu').click(function () {
		$('.custom-menu').hide();
	});
	$(document).click(function () {
		$('.custom-menu').hide();
	});
});
