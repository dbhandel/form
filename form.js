$(function() {
	$('form').submit(function(e) {
		e.preventDefault();
  		validateForm();	

	}
	);
	 
}    
)  
	
function validateForm () {
	//pass in the contents (values) of all 4 fields as parameters
	var 	alert = 0,  //flag that form is valid
		nameValue =   $('#name').val(),   
		emailValue =   $('#email').val(),
		zipValue =       $('#zipCode').val(),
		phoneValue =  $('#phone').val() ; 
		console.log(nameValue);
	
	validateName(nameValue) ;
	checkAlert()
	
	validateEmail(emailValue);
	/*validateZip(zipValue);
	validatePhone(phoneValue);}*/
	 // console.log("alert was set to: " + alert);
	 function checkAlert() {
	 	if (alert !== 0) {
		$('body').append('<p>This form is invalid!</p>');
		return;
	}
	 }

	function validateName (nameValue) {
	 	for (i =0; i < nameValue.length; i +=1) {
	 		var utf8 = nameValue[i].charCodeAt();
	 		console.log('the unicode for ' + nameValue[i] + " is " + utf8);
	 		if (!(utf8 >64 && utf8 <123)) {
	 			alert  = 1;  //not a letter
	 			return
	 		}
 		
 		}
	}

	function validateEmail (zipValue) {
	console.log(zipValue);
	var 	indexofAtSign = zipValue.indexof('@'),
		lastDot = zipValue.lastindexof('.');  //in case there are mult dots and one comes before the '@'';

	console.log('Inside validateEmail(). The index of the @ is: ' + indexofAtSign);
	if (indexofAtSign > 0 && (lastDot > indexofAtSign)) {
		var cc = charCodeAt();
		if ( isChar(cc(lastDot-1))) {
			for (i=1; i<4; i+=1) {
				if ( isChar(cc(lastDot+i))) {
					alert = 0;
				}
				else { 
					alert = 1;
					return 
				}
		return
		}		
	
		alert = 1;
		return  
	}
		 
	}
	alert = 1;
	return;	
	
	function isChar (cc) {
		if((cc>47 && cc<58) || (cc>64 && cc<91) || (cc>96 && cc<123)) {
			return true
		}
		return false;
	}
}
}


/*// validate Zip: 5 digits
function validateZip (argument) {
	//  validate zip code then deliver alert message if needed.


// validate Phone: 10 digits, with or without dashes.
function validatePhone (argument) {
	// validate phone then deliver alert message if needed
	
*/

/*var $form = $('form');
	// listen for click on submit or enter key keyup
	$form.keyup(function (event) {
		if (event.which == 13) {
    			console.log('enter key pressed');
  			}  //end of if block
		} //end of keyup handler function
	)  //end of keyup*/
