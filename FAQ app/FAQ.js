$(document).ready(function() {
		$("#faqs h2").toggle(
		function() {
			$(this).toggleClass("minus");
		    $(this).next().fadeIn(1000, "easeOutBounce");
	    },
	    function() {
	        $(this).toggleClass("minus");
	        $(this).next().fadeOut(1000, "easeInExpo");
	    }
    ); // end toggle
    
}); // end ready
