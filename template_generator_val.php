<?php 

//

include('../settings.php');

libxml_use_internal_errors(true);
// validation protocol


  //Define validator functions
  $error = [];
  
	function blank_Checker ($check, $keyTwo) {
	  global $error;
	  if(!array_key_exists($check, $_POST) || $_POST[$check] === "" ) {
		  $error[$keyTwo] = "This field cannot be blank";
	  }
  }
  
  
  //Define mandatory fields
  $manFields = array("font", "colours", "category", "sub-cat", "desc", "ship");
  $urlFields = array("listing-1", "listing-2", "image-1-1", "image-2-1", "image-1", "image-2", "image-3", "image-4");
  $imgFields = array("image-1-1", "image-2-1", "image-1", "image-2", "image-3", "image-4");
	  
  
  //strip disallowed html tags

	foreach ($_POST as $key => $value) {
	$_POST[$key] = strip_tags($value, '<b><u><i><ul><ol><div>');
	$_POST[$key] = htmlentities($value, ENT_QUOTES, 'UTF-8');
	}
	
  //REMEBER TO CONVERT ESCAPED RICH TEXT TAGS BACK TO HTML ELEMENTS
	
  //Check fields that aren't allowed to be blank
  
  foreach($manFields as $key => $value) {
  blank_Checker($check = $manFields[$key], $keyTwo = $manFields[$key] . 'Bnk');
  }
  
  //Validate URLs
  	  foreach($urlFields as $key => $value) {
		global $error;
		if(filter_var($_POST[$value], FILTER_VALIDATE_URL ) == false && !empty($_POST[$value])) {
			$error[$value . "URL"] = "This field must contain a valid URL";
		}
	  }
	//Validate image URLs
	foreach($imgFields as $value) {
		global $error;
		if(key_exists($value, $_POST) && !empty($_POST[$value])) {
		$tempImg = mime_content_type($_POST[$value]);
		if(preg_match('/image/', $tempImg ) == 0) {
			$error[$value . "URL"] = "This field must contain a URL of a valid image file";
		}
	}
	}
	
		if(count($error) > 0) {
		global $error;
		$cop = new DOMdocument;
		copy('ebayTemplateGenerator.html', 'ebayTemplateGenerator_session.html');
		@$cop->loadHTMLFile('ebayTemplateGenerator_session.html', LIBXML_NOERROR | LIBXML_NOWARNING);
		foreach($error as $key => $value) {
		$nodeName = substr($key, 0, -3);
		$node = $cop->createElement('p', $value);
		$node->setAttribute("class", "error-mess");
		$ref = $cop->getElementById($nodeName);
		$ref->parentNode->insertBefore($node, $ref->nextSibling);
		}
		echo @$cop->saveHTML();	
		die();
	}
			
	
  
  
  //Validate urls
?>

		  
	  
