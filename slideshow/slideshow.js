$(function(){
//new code using DOM traversal methods
//one way
$("#slides img").slice(1).hide();
setInterval(function()
	{
		$("#slides img").first().fadeOut(1000)
		.next().fadeIn(1000)
		.end()
		.appendTo("#slides");
	}, //end func
	3000);//end interval
//another way
/*$("#slides img").slice(1).hide();
var slideIndex = 0, topIndex = $("#slides img").length-1;
setInterval(function()
	{
		$("#slides img").eq(slideIndex).fadeOut(1000);
		if(slideIndex < topIndex){
			$("#slides img").eq(slideIndex).next().fadeIn(1000);
			slideIndex++;
		}
		else {
			$("#slides img").eq(0).fadeIn(1000);
			slideIndex = 0;
		}
	}, //end function param
	3000);*///end interval
	//*********************the old version**********************
	/*var nextSlide = $("#slides img:first-child");
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
	});//end click*/


});//end ready