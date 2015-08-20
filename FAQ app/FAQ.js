$(document).ready(function (){
	$("#faqs h2").toggle(
		function(){
			$(this).addClass("minus");
			$(this).next().show();
		},
		function(){
			$(this).removeClass("minus");
			$(this).next().hide();
		}
	); //end toggle
}); //end ready func