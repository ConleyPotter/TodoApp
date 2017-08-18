$(document).on('ready page:load', function () {
	// Check off specific todos by clicking
	$("ul").on("click", "li", function() {
		$(this).toggleClass("completed")
	});

	// Click on x to delete todo
	$("ul").on("click", "span", function(event) {
		$(this).parent().fadeOut(500, function() {
			$(this).remove();
		});
		//dont fire the toggle class event listener
		event.stopPropagation();
	});

	$("input[type='text']").keypress(function(event) {
		if(event.which === 13) {
			//grabbing the new todo text from input
			var todoText = $(this).val();
			$(this).val("");
			//create a new li and add it to the ul
			$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
		}
	});

	$(".fa-plus").click(function() {
		$("input[type='text']").fadeToggle();
	});
})