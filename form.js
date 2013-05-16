$(function() {
	$('form').submit(function(e) {
		e.preventDefault();
  		validateForm();	

	});
	 
});  
	
function validateForm () {
	var 	alert = 0,  //flag that form is valid
		//pass in the contents (values) of all 4 fields as parameters
		nameValue =   $('#name').val(),   
		emailValue =   $('#email').val(),
		zipValue =       $('#zipCode').val(),
		phoneValue =  $('#phone').val() ; 
	
	validateName(nameValue) ;
	checkAlert()
	
	validateEmail(emailValue);
	checkAlert()

	/*validateZip(zipValue);
	validatePhone(phoneValue);}*/

	 function checkAlert() {
	 	if (alert !== 0) {
		$('body').append('<p>This form is invalid!</p>');
		return;
	}
 }

	function validateName (nameValue) {
	 	for (i =0; i < nameValue.length; i++) {
	 		var utf8 = nameValue[i].charCodeAt();
	 		if (!(utf8 >64 && utf8 <123)) {
	 			alert  = 1;  //not a letter
	 			return
	 		}		
 		}
	}

	function validateEmail (zipValue) {
		var 	indexofAtSign = zipValue.indexOf('@'),
			lastDot = zipValue.lastIndexOf('.');  //in case of mult dots and one comes before the '@'';
		if (
			indexofAtSign > 0
			&& lastDot > indexofAtSign 
			&& isChar(zipValue.charCodeAt(lastDot - 1))
			&& isChar(zipValue.charCodeAt(lastDot + 1))
			&& isChar(zipValue.charCodeAt(lastDot + 2)) 
			&& isChar(zipValue.charCodeAt(lastDot + 3)) 
			) {
			return alert = 0;
		}
		else {
			return alert = 1;
		}
	}
	
	function isChar (charCode) {
		if((charCode > 47 && charCode < 58) || (charCode > 64 && charCode <91) 
			|| (charCode > 96 && charCode < 123)) {
			return true
		}
		return false;
	}
}



/*// validate Zip: 5 digits
function validateZip (argument) {
	//  validate zip code then deliver alert message if needed.


// validate Phone: 10 digits, with or without dashes.
function validatePhone (argument) {
	// validate phone then deliver alert message if needed
	
*/


