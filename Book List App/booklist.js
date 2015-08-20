$(document).ready(function () {

//h2 click handler
	$("#cata h2").toggle(
		function(){
			$(this).next().show();
			$(this).toggleClass("closed");
		},
		function(){
			$(this).next().hide();
			$(this).toggleClass("closed");
		}
	);//end h2 toggle
//for IE remove image placeholder / images on h2 click
	$("#cata h2").click(function(){
		$("#image").attr("src", "");
		$("#image").attr("style", "display:none;");
	});
//preload images/click handler
	$("#list1 a, #list2 a, #list3 a").each(function(){
		var imgURL = $(this).attr("href");
		var bookImage = new Image();
		bookImage.src = $(this).attr(imgURL);
		//click handler
		$(this).click(function(evt){
			$("#image").attr("src", imgURL);
			$("#image").attr("style", "style:block;");
			evt.preventDefault();
		});//end click
	});//end each
});//end ready