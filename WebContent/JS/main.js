$(function() {

	$(".menuToggle").click(
			function(e) {
				console.log("MENU");
				
				$("#myOverlay").css("display", "block");
				
				// Menu.
				$('#menu').append('<a href="#menu" class="close"></a>').click(
						function(e) {
							console.log("ocultar menu");
							// Menu.
							$(".close").remove();
							$('body').removeClass("is-menu-visible");
							$("#myOverlay").css("display", "none");

						});
				
				$('body').addClass("is-menu-visible");

			});
	
	//inicialize list of post.
	$.ajax("MainServlet", {
		"type" : "post"
	}).fail(function() {
		console.log("Failed");
	})
});

$(document).ready(function(){
//When the user scrolls down 20px from the top of the document, show the button
	window.onscroll = function() {scrollFunction()};
	
	function scrollFunction() {
	    	if ($(window).scrollTop() > 20) {
	        $("#totop").css("display", "block");
	    } else {
	        $("#totop").css("display", "none");
	    }
	}
	
});

//click myOverlay
function w3_close() {
	$(".close").remove();
	$('body').removeClass("is-menu-visible");
	$('#myOverlay').css("display", "none");
}




