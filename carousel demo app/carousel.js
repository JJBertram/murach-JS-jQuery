$(document).ready(function(){
//variables
	var slider = $("#image_list"); //ul element
	var leftProperty, newLeftProperty;
//preload images
	$("#image_list img").each(function()
	{
		var bookImage = new Image();
		bookImage.src = $(this).attr("src");
	});//end preload func
//left button handler
	$("#left_button").click(function()
	{
		//get value of left property
		leftProperty = parseInt(slider.css("left"));
		if(leftProperty < 0)
		{
			newLeftProperty = leftProperty + 100;
			//window.alert("newLeftProperty: "+ newLeftProperty);
		} else
		{
			newLeftProperty = -600;
			//window.alert("newLeftProperty: "+ newLeftProperty);
		}
		slider.animate({left: newLeftProperty}, 1000);
	});//end left click handler
//right button handler
	$("#right_button").click(function()
	{
		leftProperty = parseInt(slider.css("left"));
		if(leftProperty - 100 <= -600)
		{
			newLeftProperty = 0;
			//window.alert("newLeftProperty: "+ newLeftProperty);
		} else 
		{
			newLeftProperty = leftProperty - 100;
			//window.alert("newLeftProperty: "+ newLeftProperty);
		}
		slider.animate({left: newLeftProperty}, 1000);
	});//end right click

});//end ready func