$(document).ready(function(){
//dialog widget
	$("#help").click(function(){
    		$("#helpdialog").dialog({
    			buttons: {
    				OK: function() {$(this).dialog("close");}
    			}
    		});
	});
//tabs widget
	$("#tabs").tabs();
//slider widget
	$("#slider").slider({
		min: 1, 
		max: 100,
		range: true,
		values: [11, 50],
		slide: function(event, ui){
			$("#employees").val(ui.values[0] + " - " + ui.values[1]);
		}
	});
	$("#employees").val(11 + " - " + 50);
// datepicker widget
	$("#datepicker").datepicker({
		minDate: new Date(),
		showButtonPanel: true
	});
//button widget
	$("#submitbutton").button();

});