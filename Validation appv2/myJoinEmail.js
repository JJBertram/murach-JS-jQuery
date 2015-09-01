$(function(){

	$("#email_address1").focus();
	$("#email_form").validate({
		rules: {
			email_address1: {
				required: true,
				email: true
			},
			email_address2: {
				required: true,
				equalTo: "#email_address1",
				email: true
			},
			first_name: {
				required: true
			},
			last_name: {
				required: true
			},
			state_code: {
				required: true,
				rangelength: [2, 2]
			},
			zip_code: {
				required: true,
				number: true,
				rangelength: [5, 5]
			}
		}//end rules
	});//end validate

});//end ready