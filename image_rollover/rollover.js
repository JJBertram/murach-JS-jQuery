$(document).ready(function() {
	//delay and stop animation
	$("#startup").delay(2000).fadeOut(1000, function(){
		$("#ram_tap").fadeIn(1000);
	});

	//preload images
	$("#image_list a").each(function() {
		var swappedImage = new Image();
		swappedImage.src = $(this).attr("href");
	});//end each
	//stop method
	$("#image_list a").hover(
		function(e)
		{ 
			$(this).stop(true).animate({ top:15 }, 1000); 
			//swap image
			var imageURL = $(this).attr("href");
			$("#image").attr("src", imageURL);
			//swap caption
			var caption = $(this).attr("title");
			$("#caption").text(caption);
			e.preventDefault();
		},
		function(e)
		{ 
			$(this).stop(true).animate({ top: 0 }, "fast"); 
		}
	);//end hover
	$("image_list:first-child:first-child").focus();
}); // end ready