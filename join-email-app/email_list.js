$(function() {
	$("#email_address1").focus();
	$("#clear_fields").click(function(e){
		$(":text").val("");
		e.preventDefault();
	});

	$("#join_list").click(function ()
	{
		var email1 = $("#email_address1").val();
		var email2 = $("#email_address2").val();
		var stateCode = $("#state_code").val();
		stateCode = stateCode.toUpperCase();
		var stateList = ["WA", "TN", "CA", "KY", "OR", "FL", "AZ", "NB", "NV", "NY", "AL", "MI", "MS"];
		var isValid = true;
		var stateLookUp = function(stateCode){
			for(var i = 0; i<stateList.length; i++){
				if (stateCode == stateList[i]){
					return true;
				}
			}
			return false;
		}
		//validate email entries
		if (email1 == "") {
			$("#email_address1").next().text("This field is required");
			$("#email_address1").focus();
			isValid = false;
		} else {
			$("#email_address1").next().text("");
		}
		if (email2 == "") {
			$("#email_address2").next().text("This field is required");
			$("#email_address2").focus();
			isValid = false;
		} else if(email1 != email2){
			$("#email_address2").next().text("This entry must match first entry");
			$("#email_address2").focus();
			isValid = false;
		} else {
			$("#email_address2").next().text("");
		}
		//validate name entry
		if ($("#first_name").val() == ""){
			$("#first_name").next().text("This field is required.");
			$("#first_name").focus();
			isValid = false
		} else {
			$("#first_name").next().text("");
		}
		//validate state code
		if($("#state_code").val() == ""){
			$("#state_code").next().text("This field is required.");
			$("#state_code").focus();
			isValid = false;
		} else if (!stateLookUp(stateCode)){
			$("#state_code").next().text("Not valid state code.");
			$("#state_code").focus();
			isValid = false;
		}
		else{
			$("#state_code").next().text("");
		}
		if(isValid){
			$("#email_form").submit();
			$("#email_address1").focus();
		}
	});//end join click fun
});//end ready func