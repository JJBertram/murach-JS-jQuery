$(function(){
//preload images
	$("#image_list a").each(function(){
		var swappedImage = new Image();
		swappedImage.src = $(this).attr("href");
	});//end each func
//event handlers for links
	/*$("#image_list a").click(function(e){
		var imgURL = $(this).attr("href");
		$("#image").attr("src", imgURL);
		var caption = $(this).attr("title");
		$("#caption").text(caption);
		e.preventDefault();
	});//end click event*/

	$("#image_list a").click(function(e){
		$("#caption").text($(this).attr("title"));
		$("#image").attr("src", $(this).attr("href"));
		e.preventDefault();
	});//end click
});//end ready func