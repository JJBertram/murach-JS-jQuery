$(function(){
	var nextSlide = $("#slides img:first-child");
	var nextCaption;
	var nextSlideSrc;
	setInterval(function ()
		{
			$("#output").fadeOut(1000);
			$("#image").fadeOut(1000, function() 
				{
					if(nextSlide.next().length == 0) {
						nextSlide = $("#slides img:first-child");
					}
					else {
						nextSlide = nextSlide.next();
					}
					nextSlideSrc = nextSlide.attr("src");
					nextCaption = nextSlide.attr("alt");
					$("#image").attr("src", nextSlideSrc).fadeIn(1000);
					$("#output").text(nextCaption).fadeIn(1000);
				}//end image fadeout callback
			)//close image fadeout ()
		}, 
	3000);//end setInterval function param

})//end ready