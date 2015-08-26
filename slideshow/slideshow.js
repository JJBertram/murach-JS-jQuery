$(function(){
	var nextSlide = $("#slides img:first-child");
	var status = $("#status");
	var nextCaption;
	var nextSlideSrc;
	var runSlideShow = function ()
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
		}
	//start slideshow
	var timer1 = setInterval(runSlideShow, 3000);
	//starting and stopping slide show
	$("#image").click(function(){
		if(timer1 != null)
		{
			clearInterval(timer1);
			timer1 = null;
		}
		else
		{	
			timer1 = setInterval(runSlideShow, 3000);
		}
	});//end click


})//end ready