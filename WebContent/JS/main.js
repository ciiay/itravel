$(function() {

	$(".menuToggle").click(
			function(e) {
				console.log("MENU");
				
				document.getElementById("myOverlay").style.display = "block";
				
				// Menu.
				$('#menu').append('<a href="#menu" class="close"></a>').click(
						function(e) {
							console.log("ocultar menu");
							// Menu.
							$(".close").remove();
							$('body').removeClass("is-menu-visible");
							document.getElementById("myOverlay").style.display = "none";

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
	    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
	        document.getElementById("totop").style.display = "block";
	    } else {
	        document.getElementById("totop").style.display = "none";
	    }
	}
	
});

//click myOverlay
function w3_close() {
	$(".close").remove();
	$('body').removeClass("is-menu-visible");
 document.getElementById("myOverlay").style.display = "none";
}




