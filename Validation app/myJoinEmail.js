$(document).ready(function(){

	$("#email_address1").focus();
	$(":text").after("<span>*</span>");
	$("#email_form").submit(
		function(evt){
			var isValid = true;
			var pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
			var email1 = $("#email_address1"), email2 = $("#email_address2");
			var firstName = $("#first_name"), lastName = $("#last_name");
			var stateCode = $("#state_code"), zipCode = $("#zip_code");
//email validation
			if(email1.val() == ''){
				email1.next().text("This field is required.");
				isValid = false;
			} else if ( !pattern.test(email1.val()) ) {
				email1.next().text("Must be a valid email address.");
				isValid = false;
			} else {
				email1.next().text("");
			}
//email match validation
			if(email2.val() == ''){
				email2.next().text("This field is required.");
				isValid = false;
			} else if ( !pattern.test(email2.val()) ) {
				email2.next().text("Must be a valid email address.");
				isValid = false;
			} else if ( email2.val() !== email1.val() ){
				email2.next().text("Emails do NOT match");
				isValid = false;
				email2.focus();
			} else {
				email2.next().text("");
			}
//first and last name validation
			var trimFirst = firstName.val().trim();
			if( firstName.val() == '' ) {
				firstName.next().text("This field is required");
				isValid = false
			}
			else {
				firstName.next().text("");
				firstName.val(trimFirst);

			}
			var trimLast = lastName.val().trim();
			if( lastName.val() == '' ){
				lastName.next().text("This field is required");
				isValid = false;
			} else {
				lastName.val(trimLast);
				lastName.next().text("");
			}
//state code 
			if (stateCode.val() == '') {
				stateCode.next().text("This is required");
				isValid = false;
			} else if (stateCode.val().length != 2) {
				stateCode.next().text("State Code must be 2 characters");
				isValid = false;
			} else if ( !isNaN(stateCode.val()) ){
				stateCode.next().text("Must be a valid character [a-z, A-Z].");
				isValid = false;
			} else {
				stateCode.next().text("");
			}
//zip code
			if (zipCode.val().length !== 5){
				zipCode.next().text("Must be 5 digits.");
				isValid = false;
			} else if (isNaN(zipCode.val()) ){
				zipCode.next().text("Must be a number");
				isValid = false;
			} else {
				zipCode.next().text("");
			}
//prevent default sumbission 
			if(isValid == false){
				evt.preventDefault();
			}
		}//end func
	);//end submit



});//end ready