<?php

include('../settings.php');

libxml_use_internal_errors(true);

//Check request method 

if($_SERVER['REQUEST_METHOD'] != 'POST') {
	$doc = new DOMDocument();
	@$doc->loadHTMLFile('registration_page.html');
	echo $doc->saveHTML();
	} 
	else {

//Validation protocol 
try {
	
	$exception = array();
	
	// create connection to the server and database
	$pdo = new PDO(
			sprintf('mysql:host=%s;dbname=%s;port=%s;charset%s',
			$settings['host'],
			$settings['name'],
			$settings['port'],
			$settings['charset']
		),
		$settings['username'],
		$settings['password']
		);
	


	//define match validator
	function match_Validator ($response, $confirm, $errorMessage, $errorCode, $key) {
		if(!preg_match($response, $confirm)) {
			global $exception;
			$exc = new Exception($errorMessage, $errorCode);
			$exception[$key] = $exc;
			
	}
	}
	
	//define not blank field validator
	
	function blank_Validator($response, $key, $errorCode) {
		if($response == "NULL" || $response == null) {
			global $exception;
			$exc = new Exception('This field cannot be blank',$errorCode);
			$exception[$key] = $exc;
		}
	}
	
	
	//define pattern validator 
	function patern_Validator ($pattern, $subject, $errorMessage, $errorCode, $key) {
		if(!preg_match($pattern, $subject)) {
			global $exception;
			$exc = new Exception($errorMessage,$errorCode);
			$exception[$key] = $exc;
	}
	}
	
	//length validator
	
	//Sanitize HTML 
	
		//Create array to store sanitized html in
		$newPost = [];
	
		foreach ($_POST as $key => $value) {
			global $newPost;
			trim($value);
			$newPost[$key] = htmlentities($value, ENT_QUOTES, 'UTF-8');
		}
	

	//Replace blank string form responses with NULL values
	foreach ($newPost as $key => $value) {
		if($value === "" || $value == null) {
		$newPost[$key] = "NULL";
		}
	}
	
	// Validate that there is no existing account

	
	
	//validate names
	
		//First name validation
			blank_Validator($response = $newPost['firstname'], $key = 'first-name-Er', $errorCode ='1002');
	
			if(!key_exists('first-name-Er', $exception)) {
				global $newPost;
				global $exception;
				patern_Validator($pattern = "/^[a-zA-Z\s]+$/", $subject = $newPost['firstname'],
				$errorMessage="The first name entered must only contain letters and spaces",
				$errorCode = "1001", $key = 'first-name-Er');
			}
			
		//Last name validation 
		
			blank_Validator($response = $newPost['lastname'], $key = 'last-name-Er', $errorCode ='1004');
		
			if(!key_exists('last-name-Er', $exception)) {
				global $newPost;
				global $exception;
				patern_Validator($pattern = "/^[a-zA-Z\s]+$/", $subject = $newPost['lastname'],
				$errorMessage="The last name entered must only contain letters and spaces",
				$errorCode = "1003", $key = 'last-name-Er');
			}
			
	// end of name validation
				
		

	//validate date of birth
	
		/*//Define Timestamp of user's registration
		$regdt = date("Y-m-d H:i:s"); 

		//Create new DateTime object for todays date
		$today = new DateTime($regdt);
		
		

		//Create DateTime Object for user's dob
		$dob = new DateTime($newPost['dob']);
	
		//Access the diff method and convert result into Years
		$interval = $dob->diff($today);
		$age = $interval->format('%Y');
		
		


		if ($age<16) {
		global $exception;
		$exception['dob-Er'] = new Exception('You must be over 16 to use this website','3001');
		}
		elseif ($age>100) {
		global $exception;
		$exception['dob-Er'] = new Exception('Please enter a valid date of birth', '3002');
		} 
		*/

	
	//Validate emails
	
		blank_Validator($response = $newPost['email'], $key = 'email-Er', $errorCode = '5003');
	
		if(!filter_var($newPost['email'], FILTER_VALIDATE_EMAIL) && !key_exists('email-Er', $exception)) {
			global $newPost;
			global $exception;
			$exc = new Exception('Please enter a valid email address', '5004');
			$exception['email-Er'] = $exc;
		}
		
		// bug: this seems to return false when executed on matching strings with non-alphanumerical characters
			
		if(!key_exists('email-Er', $exception)) {
			global $newPost;
			global $exception;
			match_Validator ($response="/^$newPost[email]+$/",
			$confirm = $newPost['confirmemail'],
			$errorMessage = "The emails entered do not match", 
			$errorCode ='5001', $key = 'email-Er');
		}
		
			
		if(!key_exists('email-Er', $exception)) {
			global $newPost;
			global $exception;
			global $pdo;
			$emailQueryNum = $pdo->query("SELECT COUNT(*) FROM user_details WHERE Email = '$newPost[email]'")->fetchColumn();
	
			if($emailQueryNum > 0) {
				$exception['top-Er'] = new Exception("There is already an account registered with this email", '4001');
			}
		}
		
	// end of email validation
	
	
	//Validate passwords 
	
		blank_Validator($response = $newPost['password'], $key = 'password-Er', $errorCode = '3003');
		
		if(!key_exists('password-Er', $exception)) {
			global $exception;
			global $newPost;
			match_Validator ($response = "/^$newPost[password]+$/", $confirm = $newPost['confirmpassword'],
			$errorMessage = "The passwords entered do not match.",$errorCode = "2001", $key = 'password-Er');
		}
		
	// end of password validation 

	//hash password
	
		if(!key_exists('password-Er', $exception)){
			$cost = 12;
			$newPost['password'] = password_hash ($newPost['password'], PASSWORD_BCRYPT, ['cost' => $cost]);
		}
		
	//end of pasword hashing
	

	//Validate Address 
	
	    //Property number validation
	
			blank_Validator($response = $newPost['propertynumber'], $key = 'prop-num-Er', $errorCode = '6003');
		
			if(!key_exists('prop-num-Er', $exception)) {
				If(!filter_var ($newPost['propertynumber'], FILTER_VALIDATE_INT) | $newPost['propertynumber'] > 1000){
				global $exception;
				$exception['prop-num-Er'] = new Exception('Property number must be a whole number under 10000', '6001');
				}	
			}
			
		//Address line 1 validation

			blank_Validator($response = $newPost['addressline1'], $key = 'add-line-one-Er', $errorCode = '6005');

			if(!key_exists('add-line-one-Er', $exception)) {
				global $exception;
				global $newPost;
				patern_Validator($pattern = '/^(?!.*([\-\/])\1)[A-Za-z0-9\s\/\-]+$/', $subject = $newPost['addressline1'],
				$errorMessage = "This field must only contain letter, numbers, and non-consecutive '/' and '-' symbols",
				$errorCode = '6004', $key = 'add-line-one-Er');
			}

		//Address line 2 validation
			patern_Validator($pattern = '/^(?!.*([\-\/])\1)[A-Za-z0-9\s\/\-]+$/', $subject = $newPost['addressline2'],
			$errorMessage = "This field must only contain letter, numbers, '/' and '-' symbols",
			$errorCode = '6006', $key = 'add-line-two-Er');

		//Address line 3 validation
			patern_Validator($pattern = '/^(?!.*([\-\/])\1)[A-Za-z0-9\s\/\-]+$/', $subject = $newPost['addressline3'],
			$errorMessage = "This field must only contain letter, numbers, '/' and '-' symbols",
			$errorCode = '6007', $key = 'add-line-three-Er');
	
		//City Validation 	
			blank_Validator($response = $newPost['city'], $key = 'city-Er', $errorCode = '6009');

			patern_Validator($pattern = '/^(?!.*([\-\/])\1)[A-Za-z0-9\s\/\-]+$/', $subject = $newPost['city'],
			$errorMessage = "This field must only contain letter, numbers, '/' and '-' symbols",
			$errorCode = '6008', $key = 'city-Er');

		//County validation
			patern_Validator($pattern = '/^(?!.*([\-\/])\1)[A-Za-z0-9\s\/\-]+$/', $subject = $newPost['county'],
			$errorMessage = "This field must only contain letter, numbers, '/' and '-' symbols",
			$errorCode = '6010', $key = 'county-Er');
	
		//Postcode validation
			blank_Validator($response = $newPost['postcode'], $key = 'postcode-Er', $errorCode = '6012');

			patern_Validator($pattern = '/^(?!.*([\-\/])\1)[A-Za-z0-9\s\/\-]+$/', $subject = $newPost['postcode'],
			$errorMessage = "This field must only contain letter, numbers, '/' and '-' symbols",
			$errorCode = '6011', $key = 'postcode-Er' );
	
	

	
	//Address and name check 
	
	$detailsQueryNum = $pdo->query("SELECT COUNT(*)
	FROM user_details 
	WHERE First_Name = '$newPost[firstname]' 
	AND Last_Name = '$newPost[lastname]'
	AND DOB = '$newPost[dob]'
	AND Property_Number = '$newPost[propertynumber]'
	AND Postcode = '$newPost[postcode]';
	")->fetchColumn();
	
	
	
	if($detailsQueryNum > 0) {
		global $exception;
		$exception['top-Er'] = new Exception("It appears you may already have an account", '7001');
	}
	
	//Validation for contact consent
	
	blank_Validator($response = $newPost['contcos'], $key = 'com-Er', $errorCode = '9002');

	// Boolean validation for t&cs 

	
	if(!array_key_exists('tc', $newPost)) {
		global $exception;
		$exc = new Exception('You must agree to our terms and conditions to become a member', '9001');
		$exception['tc-Er'] = $exc;
	}
	
	$errorString = "";
	foreach($exception as $key => $value) {
			global $errorString;
			global $exception;
			$errorString .= "Error: " . $exception[$key]->getCode() . "; Filepath: " . $exception[$key]->getFile() . "; Line: " . $exception[$key]->getLine() . 
			"; Description: " . $exception[$key]->getMessage() . "\n";
	};
	
	if(count($exception) > 0) {
		global $exception;
		throw new Exception($errorString);
	}
	
		// create new user record if the form data has passed validation and all data has been sanitized
	$recIns = $pdo->prepare("INSERT INTO user_details (Account_Creation_DateTime, 
		First_Name, Last_Name, DOB, Email, Mobile_Number, PASSWORD, Property_Number,
		Address_Line_1, Address_Line_2, Address_Line_3, City, County, Postcode,
		Reward_Balance, Contact_Consent, TCs_Agreed)
		VALUES ('$regdt','$newPost[firstname]','$newPost[lastname]','$newPost[dob]',
		'$newPost[email]', '','$newPost[password]', '$newPost[propertynumber]', '$newPost[addressline1]', '$newPost[addressline2]',
		'$newPost[addressline3]', '$newPost[city]',
		'$newPost[county]', '$newPost[postcode]', 100,'$newPost[contcos]', '$newPost[tc]')");
		
	$recInsTest = $recIns->execute();

	// Display a message that informs the user that a new record has been created or tells them of the error
	if ($recInsTest === TRUE) {
		echo "New record created successfully";
		} else {
		echo "Error: record not created";
	}

}

	//Catch validation error
	catch(Exception $e) {
		
		$cop = new DOMDocument;
		copy('registration_page.html', 'registration_page_session.html');
		@$cop->loadHTMLFile('registration_page_session.html', LIBXML_NOERROR | LIBXML_NOWARNING);
		foreach($exception as $key => $value) {
			$nodeKey = substr(preg_replace('/^[1-9]+$/','', $key), 0, -2);
			$node = $cop->createElement('p', $exception[$key]->getMessage());
			$node->setAttribute('class', 'error-mes');
			$refName = $nodeKey . 'break';
			$ref = $cop->getElementById($refName);
			$ref->parentNode->insertBefore($node, $ref);
		}
		
		
	echo @$cop->saveHTML();
		
	}
	catch (PDOException $e) {
    print "Error!: " . $e->getMessage() . "<br/>";
    die();}
	
}






?>