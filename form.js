$(function() {
	$('form').submit(function() {
  		console.log('Handler for .submit() called.');
  		validateForm()	//need to pass in the contents of all 4 fields as parameters??
	}
	);
	 
}    
)  
	

function validateForm () {
	validateName()
	validateEmail()
	validateZip()
	validatePhone()
}

//validate name field to have only letters
function validateName (argument) {
	// validate Name then deliver alert message if needed
}

/*validate Email address: includes @, a dot, at least 1 character before the dot, and 
		at least 3 characters after the dot.  indexof */
function validateEmail (argument) {
	// validate email then deliver alert message if needed
}

// validate Zip: 5 digits
function validateZip (argument) {
	//  validate zip code then deliver alert message if needed.
}

// validate Phone: 10 digits, with or without dashes.
function validatePhone (argument) {
	// validate phone then deliver alert message if needed
}	


/*var $document = $('document');
	// listen for click on submit or enter key keyup
	$document.keyup(function (event) {
		if (event.which == 13) {
    			console.log('enter key pressed');
  			}  //end of if block
		} //end of keyup handler function
	)  //end of keyup*/
